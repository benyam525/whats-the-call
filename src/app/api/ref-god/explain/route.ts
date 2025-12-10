import { createClient, SupabaseClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

// Lazy initialization to avoid build-time errors when env vars are missing
let supabase: SupabaseClient | null = null;
let openai: OpenAI | null = null;

function getSupabase() {
  if (!supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error('Supabase environment variables not configured');
    }
    supabase = createClient(url, key);
  }
  return supabase;
}

function getOpenAI() {
  if (!openai) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key not configured');
    }
    openai = new OpenAI({ apiKey });
  }
  return openai;
}

async function getEmbedding(text: string): Promise<number[]> {
  const response = await getOpenAI().embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
}

async function searchRules(queryEmbedding: number[], matchCount: number = 3) {
  const { data, error } = await getSupabase().rpc('search_rules', {
    query_embedding: queryEmbedding,
    match_count: matchCount,
  });

  if (error) throw error;
  return data;
}

export async function POST(request: NextRequest) {
  try {
    const {
      question,
      correctAnswer,
      explanation,
      ruleReference,
      userAnswer,
      wasCorrect
    } = await request.json();

    if (!question || !correctAnswer) {
      return NextResponse.json({ error: 'Question and correct answer are required' }, { status: 400 });
    }

    // Build search query from question + rule reference
    const searchQuery = ruleReference
      ? `${question} ${ruleReference}`
      : question;

    // Get embedding and search for relevant rules
    const queryEmbedding = await getEmbedding(searchQuery);
    const rules = await searchRules(queryEmbedding, 4);

    // Format context from retrieved rules
    const ruleContext = rules
      .map((r: any) => `[${r.section_id}] ${r.section_name}\n${r.content}`)
      .join('\n\n---\n\n');

    // Build the structured prompt for Ref God explanation
    const prompt = `You are Ref God, the ultimate NBA rules expert. A user just answered a question in a basketball officiating training app.

QUESTION: ${question}
CORRECT ANSWER: ${correctAnswer}
${explanation ? `BASIC EXPLANATION: ${explanation}` : ''}
${ruleReference ? `RULE REFERENCE: ${ruleReference}` : ''}
USER'S ANSWER: ${userAnswer || 'Not provided'}
USER WAS: ${wasCorrect ? 'CORRECT' : 'INCORRECT'}

RELEVANT RULES FROM THE OFFICIAL NBA RULEBOOK:
${ruleContext}

Using ONLY the official rule text provided above, generate a comprehensive explanation with these EXACT sections. Be authoritative but accessible:

THE RULING
[2-3 sentences explaining why the correct answer is correct. Be direct and confident.]

THE RULE
[Quote the specific rule language that applies. Include the rule number/section. Format: "Per Rule X, Section Y: '[exact quote]'"]

WHY IT MATTERS
[2-3 sentences on why this call matters in a real game. What's the game impact?]

COMMON MISTAKES
[2-3 sentences on what officials often get wrong with this type of call and why.]

PRO TIP
[1-2 sentences of practical advice for spotting this call. What should refs watch for?]

Important:
- Only cite rules from the provided text
- Be specific and practical
- Write for aspiring officials who want to level up
- Keep each section concise but valuable`;

    const response = await getOpenAI().chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 1000,
      temperature: 0.7,
      messages: [
        {
          role: 'system',
          content: 'You are Ref God, the most knowledgeable and trusted NBA rules expert. You explain rulings with authority and clarity, always grounding your explanations in the official rulebook. You help officials understand not just what the rule is, but why it matters and how to apply it correctly.'
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const fullExplanation = response.choices[0]?.message?.content || '';

    // Parse the response into sections
    const sections = parseRefGodResponse(fullExplanation);

    return NextResponse.json({
      explanation: fullExplanation,
      sections,
      sources: rules.map((r: any) => ({
        section_id: r.section_id,
        section_name: r.section_name,
        similarity: r.similarity,
      })),
    });

  } catch (error) {
    console.error('Ref God explain error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to generate explanation', details: errorMessage },
      { status: 500 }
    );
  }
}

function parseRefGodResponse(text: string): {
  ruling: string;
  rule: string;
  whyItMatters: string;
  commonMistakes: string;
  proTip: string;
} {
  const sections = {
    ruling: '',
    rule: '',
    whyItMatters: '',
    commonMistakes: '',
    proTip: '',
  };

  // Clean up markdown formatting (GPT sometimes adds ** or #)
  const cleanText = text
    .replace(/\*\*/g, '')
    .replace(/^#+\s*/gm, '')
    .replace(/\r\n/g, '\n');

  // More flexible regex patterns that handle various GPT output formats
  // Matches: "THE RULING", "THE RULING:", "The Ruling", etc.
  const rulingMatch = cleanText.match(/THE RULING:?\s*\n([\s\S]*?)(?=\n\s*THE RULE|\n\s*WHY IT MATTERS|$)/i);
  const ruleMatch = cleanText.match(/THE RULE:?\s*\n([\s\S]*?)(?=\n\s*WHY IT MATTERS|\n\s*COMMON MISTAKES|$)/i);
  const whyMatch = cleanText.match(/WHY IT MATTERS:?\s*\n([\s\S]*?)(?=\n\s*COMMON MISTAKES|\n\s*PRO TIP|$)/i);
  const mistakesMatch = cleanText.match(/COMMON MISTAKES:?\s*\n([\s\S]*?)(?=\n\s*PRO TIP|$)/i);
  const tipMatch = cleanText.match(/PRO TIP:?\s*\n([\s\S]*?)$/i);

  if (rulingMatch) sections.ruling = rulingMatch[1].trim();
  if (ruleMatch) sections.rule = ruleMatch[1].trim();
  if (whyMatch) sections.whyItMatters = whyMatch[1].trim();
  if (mistakesMatch) sections.commonMistakes = mistakesMatch[1].trim();
  if (tipMatch) sections.proTip = tipMatch[1].trim();

  // Log for debugging
  console.log('Parsed sections:', {
    hasRuling: !!sections.ruling,
    hasRule: !!sections.rule,
    hasWhyItMatters: !!sections.whyItMatters,
    hasCommonMistakes: !!sections.commonMistakes,
    hasProTip: !!sections.proTip,
  });

  return sections;
}
