import { NextResponse } from 'next/server';
import { getDailyQuestion, getRandomQuestion } from '@/data/casebook';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('mode');

  const question = mode === 'random' ? getRandomQuestion() : getDailyQuestion();

  return NextResponse.json({
    success: true,
    question: {
      id: question.id,
      category: question.category,
      scenario: question.scenario,
      question: question.question,
      options: question.options,
      // Don't expose correct answer in API by default
      // Include if specifically requested (for email backend)
      ...(searchParams.get('include_answer') === 'true' && {
        correctAnswer: question.correctAnswer,
        ruling: question.ruling,
        ruleReference: question.ruleReference,
      }),
    },
    date: new Date().toISOString().split('T')[0],
  });
}
