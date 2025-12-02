import { NextResponse } from 'next/server';
import { getDailyQuestion, getRandomQuestion, getDailyQuestions } from '@/data/casebook';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('mode');

  // Daily 5 mode - return 5 questions with answers included
  if (mode === 'daily5') {
    const questions = getDailyQuestions(5);
    return NextResponse.json({
      success: true,
      questions: questions.map(q => ({
        id: q.id,
        category: q.category,
        scenario: q.scenario,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        ruling: q.ruling,
        ruleReference: q.ruleReference,
        ruleLink: q.ruleLink,
      })),
      date: new Date().toISOString().split('T')[0],
    });
  }

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
