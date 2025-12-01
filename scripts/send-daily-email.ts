/**
 * Daily Email Script
 *
 * Run this script daily via cron job or scheduled task:
 * npm run email:daily
 *
 * Or with a cron job (e.g., every day at 7 AM):
 * 0 7 * * * cd /path/to/project && npm run email:daily
 *
 * Environment variables required:
 * - RESEND_API_KEY: Your Resend API key
 * - EMAIL_RECIPIENTS: Comma-separated list of email addresses
 * - EMAIL_FROM: Verified sender email address
 * - NEXT_PUBLIC_BASE_URL: Base URL of your deployed app
 */

import { Resend } from 'resend';
import { getDailyQuestion } from '../src/data/casebook';
import { generateDailyEmailHTML, generateDailyEmailText } from '../src/lib/email-template';

async function sendDailyEmail() {
  // Validate environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const recipients = process.env.EMAIL_RECIPIENTS;
  const from = process.env.EMAIL_FROM;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  if (!apiKey) {
    console.error('Error: RESEND_API_KEY is not set');
    process.exit(1);
  }

  if (!recipients) {
    console.error('Error: EMAIL_RECIPIENTS is not set');
    process.exit(1);
  }

  if (!from) {
    console.error('Error: EMAIL_FROM is not set');
    process.exit(1);
  }

  const resend = new Resend(apiKey);
  const emailList = recipients.split(',').map(email => email.trim());

  // Get today's question
  const question = getDailyQuestion();
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log(`Sending daily email for ${today}`);
  console.log(`Question: ${question.id} - ${question.category}`);
  console.log(`Recipients: ${emailList.length}`);

  // Generate email content
  const html = generateDailyEmailHTML(question, baseUrl);
  const text = generateDailyEmailText(question, baseUrl);

  try {
    const result = await resend.emails.send({
      from: from,
      to: emailList,
      subject: `What's the Call? | ${question.category} - ${today}`,
      html: html,
      text: text,
    });

    console.log('Email sent successfully!');
    console.log('Result:', result);
  } catch (error) {
    console.error('Failed to send email:', error);
    process.exit(1);
  }
}

sendDailyEmail();
