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

    // Build the structured prompt for Ref IQ explanation
    const prompt = `You are Ref IQ, the ultimate NBA rules expert. A user just answered a question in a basketball officiating training app.

CRITICAL: THE CORRECT ANSWER IS AUTHORITATIVE AND CANNOT BE CONTRADICTED.
This answer comes from the official NBA Casebook and has been verified by professional officials.

=== VERIFIED CORRECT INFORMATION ===
QUESTION: ${question}
CORRECT ANSWER: ${correctAnswer}
${explanation ? `OFFICIAL EXPLANATION: ${explanation}` : ''}
${ruleReference ? `RULE REFERENCE: ${ruleReference}` : ''}

=== USER CONTEXT ===
USER'S ANSWER: ${userAnswer || 'Not provided'}
USER WAS: ${wasCorrect ? 'CORRECT' : 'INCORRECT'}

=== SUPPORTING RULE TEXT (for additional context only) ===
${ruleContext}

YOUR TASK: Explain WHY the correct answer "${correctAnswer}" is correct. Do NOT suggest any other answer could be correct. The correct answer is final.

Generate your explanation with these EXACT sections:

THE RULING
[2-3 sentences explaining why "${correctAnswer}" is the correct call. Start by affirming the correct answer, then explain the reasoning.]

THE RULE
[Quote rule language that SUPPORTS the correct answer. If the supporting text doesn't perfectly match, explain the principle. Format: "Per Rule X, Section Y: '[quote]'"]

WHY IT MATTERS
[2-3 sentences on why this call matters in a real game. What's the game impact?]

COMMON MISTAKES
[2-3 sentences on what officials often get wrong with this type of call and why they might incorrectly choose a different answer.]

PRO TIP
[1-2 sentences of practical advice for getting this call right.]

CRITICAL RULES:
- Your explanation MUST support the correct answer: "${correctAnswer}"
- NEVER contradict or cast doubt on the correct answer
- If the rule text seems ambiguous, defer to the correct answer as authoritative
- The casebook answer is always right - explain why it's right`;

    const response = await getOpenAI().chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 1000,
      temperature: 0.3, // Lower temperature for more consistent, authoritative responses
      messages: [
        {
          role: 'system',
          content: `You are Ref IQ, the most knowledgeable NBA rules expert. Your job is to EXPLAIN why a given correct answer is correct - never to determine or question what the correct answer is. The correct answer provided to you comes from the official NBA Casebook and is always authoritative. Your role is educational: help users understand WHY the ruling is correct, not to second-guess it. If rule text seems to conflict with the correct answer, the correct answer wins - explain the nuance or exception that makes it correct.`
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const fullExplanation = response.choices[0]?.message?.content || '';

    // Parse the response into sections
    const sections = parseRefIQResponse(fullExplanation);

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
    console.error('Ref IQ explain error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to generate explanation', details: errorMessage },
      { status: 500 }
    );
  }
}

function parseRefIQResponse(text: string): {
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
