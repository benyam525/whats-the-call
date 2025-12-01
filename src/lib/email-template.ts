import { CaseQuestion } from '@/data/types';

export function generateDailyEmailHTML(question: CaseQuestion, baseUrl: string): string {
  const optionLabels = ['A', 'B', 'C', 'D'];
  const options = Object.entries(question.options)
    .filter(([_, value]) => value)
    .map(([key, value], index) => ({
      key: key as 'a' | 'b' | 'c' | 'd',
      label: optionLabels[index],
      text: value,
    }));

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>What's the Call? - Daily Challenge</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background-color: #1d428a; padding: 30px 40px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">What's the Call?</h1>
              <p style="color: #93c5fd; margin: 8px 0 0 0; font-size: 14px;">Your Daily NBA Rules Challenge</p>
            </td>
          </tr>

          <!-- Category Badge -->
          <tr>
            <td style="background-color: #c8102e; padding: 10px 40px;">
              <span style="color: #ffffff; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                ${question.category}
              </span>
            </td>
          </tr>

          <!-- Scenario -->
          <tr>
            <td style="background-color: #ffffff; padding: 30px 40px; border-bottom: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">Scenario</p>
              <p style="color: #1f2937; font-size: 16px; line-height: 1.6; margin: 0;">
                ${question.scenario}
              </p>
            </td>
          </tr>

          <!-- Question -->
          <tr>
            <td style="background-color: #f9fafb; padding: 25px 40px;">
              <p style="color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">Question</p>
              <p style="color: #111827; font-size: 18px; font-weight: 600; line-height: 1.4; margin: 0;">
                ${question.question}
              </p>
            </td>
          </tr>

          <!-- Options -->
          <tr>
            <td style="background-color: #ffffff; padding: 20px 40px;">
              ${options.map(opt => `
                <div style="background-color: #f9fafb; border: 2px solid #e5e7eb; border-radius: 8px; padding: 15px; margin-bottom: 10px;">
                  <span style="color: #1d428a; font-weight: bold; margin-right: 10px;">${opt.label}.</span>
                  <span style="color: #374151;">${opt.text}</span>
                </div>
              `).join('')}
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="background-color: #ffffff; padding: 20px 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${baseUrl}?case=${question.id}"
                       style="display: inline-block; background-color: #1d428a; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      See the Answer
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 25px 40px; border-radius: 0 0 12px 12px;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0; text-align: center;">
                Questions from the NBA Official Case Book<br>
                <a href="${baseUrl}" style="color: #60a5fa; text-decoration: none;">Practice more scenarios</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateDailyEmailText(question: CaseQuestion, baseUrl: string): string {
  const options = Object.entries(question.options)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key.toUpperCase()}. ${value}`)
    .join('\n');

  return `
WHAT'S THE CALL? - Daily NBA Rules Challenge
=============================================

Category: ${question.category}

SCENARIO:
${question.scenario}

QUESTION:
${question.question}

OPTIONS:
${options}

---
See the answer: ${baseUrl}?case=${question.id}
Practice more scenarios: ${baseUrl}

Questions from the NBA Official Case Book
  `.trim();
}
