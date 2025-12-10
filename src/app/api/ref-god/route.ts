import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

// Server-side clients (use service role for vector search)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

async function getEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
}

async function searchRules(queryEmbedding: number[], matchCount: number = 5) {
  const { data, error } = await supabase.rpc('search_rules', {
    query_embedding: queryEmbedding,
    match_count: matchCount,
  });

  if (error) throw error;
  return data;
}

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    // 1. Get embedding for the question
    const queryEmbedding = await getEmbedding(question);

    // 2. Search for relevant rules
    const rules = await searchRules(queryEmbedding, 5);

    // 3. Format context
    const context = rules
      .map((r: any) => `[${r.section_id}] ${r.section_name}\n${r.content}`)
      .join('\n\n---\n\n');

    // 4. Ask GPT-4
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are an expert NBA referee. Answer the question using ONLY the rules provided below. Be specific and cite the rule/section in your answer. If the rules don't cover the question, say so.

RULES:
${context}

QUESTION: ${question}

ANSWER:`,
        },
      ],
    });

    const answer = response.choices[0]?.message?.content || '';

    return NextResponse.json({
      answer,
      sources: rules.map((r: any) => ({
        section_id: r.section_id,
        section_name: r.section_name,
        similarity: r.similarity,
      })),
    });

  } catch (error) {
    console.error('Ref God error:', error);
    return NextResponse.json(
      { error: 'Failed to process question' },
      { status: 500 }
    );
  }
}
