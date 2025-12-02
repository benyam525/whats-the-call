// NBA Casebook Questions - Sample Set
// Source: Official 2023-24 NBA Casebook
// Each question includes page number and question number for reference

import { CasebookQuestion, Category, Difficulty } from './types';

export const casebookQuestions: CasebookQuestion[] = [
  // ============================================
  // AWAY-FROM-THE-PLAY FOULS (Page 4-5, Q1-7)
  // ============================================
  {
    id: 'aftp-001',
    category: 'Away-from-the-Play Fouls',
    difficulty: 'veteran',
    scenario: 'During the last two minutes of the fourth period, Player A1 is attempting a throw-in from out-of-bounds to Player A2. As the ball is in the air and Player A2 awaits the pass, he is fouled by Player B1.',
    question: 'How is this administered?',
    options: {
      a: 'Away-from-the-play foul - one free throw plus possession',
      b: 'Common foul - Player A2 was involved in the play',
      c: 'Technical foul on Player B1',
      d: 'Flagrant foul - automatic ejection'
    },
    correctAnswer: 'b',
    ruling: 'This is a common foul, as Player A2 was involved in the play. This is not considered an away-from-the-play foul.',
    ruleReference: 'Rule 4, Section IV (h); Rule 12B, Section X (a)',
    casebookReference: 'Page 4, Question 1'
  },
  {
    id: 'aftp-002',
    category: 'Away-from-the-Play Fouls',
    difficulty: 'expert',
    scenario: 'During the last two minutes of the fourth period, Player A1 is out-of-bounds attempting to inbound the ball. Player B1 reaches across the boundary line and fouls Player A1.',
    question: 'How is this administered?',
    options: {
      a: 'Common foul on Player B1',
      b: 'Away-from-the-play foul',
      c: 'Delay-of-game technical foul on Player B1',
      d: 'Double foul situation'
    },
    correctAnswer: 'c',
    ruling: 'Player B1 is assessed a Delay-of-Game technical foul since the game is in the last two minutes of the fourth period and he broke the plane of the boundary line first.',
    ruleReference: 'Rule 12A, Section II (a)(5) and (Exception 5)',
    casebookReference: 'Page 4, Question 2'
  },
  {
    id: 'aftp-003',
    category: 'Away-from-the-Play Fouls',
    difficulty: 'veteran',
    scenario: 'During the last two minutes of any period, Player A1 is dribbling the ball in the frontcourt and Player B2 deliberately fouls Player A2 who is not in the play.',
    question: 'What is the ruling?',
    options: {
      a: 'Common foul - two free throws',
      b: 'Away-from-the-play foul - one free throw plus possession',
      c: 'Technical foul on Player B2',
      d: 'No call - play on'
    },
    correctAnswer: 'b',
    ruling: 'Player B2 is assessed an away-from-the-play foul. Any player on Team A shall attempt one free throw. The ball is awarded to Team A on the sideline where play was interrupted.',
    ruleReference: 'Rule 4, Section IV (h); Rule 12B, Section X (a)(1) and (2)',
    casebookReference: 'Page 4, Question 3'
  },

  // ============================================
  // BACKBOARD (Page 5, Q8-11)
  // ============================================
  {
    id: 'backboard-001',
    category: 'Backboard',
    difficulty: 'rookie',
    scenario: 'On an unsuccessful field goal attempt, the ball hits the basket ring and rebounds over and behind the face of the backboard. The ball returns to the floor and touches inbounds without touching any backboard supports.',
    question: 'Is the ball to remain in play?',
    options: {
      a: 'Yes - ball is live and play continues',
      b: 'No - violation on the shooting team',
      c: 'Jump ball at center court',
      d: 'Shooting foul on the defense'
    },
    correctAnswer: 'b',
    ruling: 'No. A violation shall be called on the last team to touch the ball before it went directly behind the backboard. The ball is awarded to the opposing team at the free throw line extended.',
    ruleReference: 'Rule 8, Section II (b)',
    casebookReference: 'Page 5, Question 8'
  },
  {
    id: 'backboard-002',
    category: 'Backboard',
    difficulty: 'rookie',
    scenario: 'On an unsuccessful field goal attempt, the ball rebounds off the basket ring and rolls along the top edge of the backboard.',
    question: 'Is the ball still in play?',
    options: {
      a: 'No - dead ball, jump ball situation',
      b: 'No - violation, ball went out of bounds',
      c: 'Yes - all four sides of the backboard are inbounds',
      d: 'Only if it falls back onto the court within 3 seconds'
    },
    correctAnswer: 'c',
    ruling: 'Yes. All four sides of the backboard are considered inbounds.',
    ruleReference: 'Rule 4, Section I (c)',
    casebookReference: 'Page 5, Question 10'
  },
  {
    id: 'backboard-003',
    category: 'Backboard',
    difficulty: 'veteran',
    scenario: 'Player A1 passes the ball and it hits his own backboard. May Player A1 be the first to touch the ball?',
    question: 'What is the ruling?',
    options: {
      a: 'No - this is a traveling violation',
      b: 'No - this is a double dribble violation',
      c: 'Yes - a player may touch his own pass if it hits the backboard',
      d: 'Only if another player touched it first'
    },
    correctAnswer: 'c',
    ruling: 'Yes. A player may be the first to touch his own pass, or shot, if the ball touches his basket ring, backboard or another player.',
    ruleReference: 'Rule 10, Section XIII (g)',
    casebookReference: 'Page 5, Question 11'
  },

  // ============================================
  // BACKCOURT (Page 6-7, Q12-24)
  // ============================================
  {
    id: 'backcourt-001',
    category: 'Backcourt',
    difficulty: 'rookie',
    scenario: 'Player A1 taps the ball into his backcourt while rebounding. Player A2 retrieves the ball in the backcourt and continues to advance toward the frontcourt.',
    question: 'Is this legal?',
    options: {
      a: 'No - backcourt violation',
      b: 'Yes - any player may recover a ball tapped into backcourt during rebounding',
      c: 'Only if it was an offensive rebound',
      d: 'Only if the shot clock has not reset'
    },
    correctAnswer: 'b',
    ruling: 'Yes. Any player may recover a ball which is tapped into the backcourt during rebounding or when the ball is loose. The shot clock will also be reset to 14.',
    ruleReference: 'Rule 10, Section IX (b)',
    casebookReference: 'Page 6, Question 12'
  },
  {
    id: 'backcourt-002',
    category: 'Backcourt',
    difficulty: 'expert',
    scenario: 'A player in control of the ball has stopped his dribble in the frontcourt very close to the midcourt line. While being played extremely close by an opponent, he steps into the backcourt.',
    question: 'What must the official judge?',
    options: {
      a: 'Always a backcourt violation',
      b: 'Always a traveling violation',
      c: 'Could be a personal foul, traveling violation, or backcourt violation depending on circumstances',
      d: 'No violation - player was forced back'
    },
    correctAnswer: 'c',
    ruling: 'The official must judge this as: (1) a personal foul if illegal contact caused him to step back, (2) a traveling violation if the step was illegal, or (3) a backcourt violation.',
    ruleReference: 'Rule 4, Section VI (a); Rule 10, Section IX (a); Rule 12B, Section I (a)',
    casebookReference: 'Page 6, Question 13'
  },
  {
    id: 'backcourt-003',
    category: 'Backcourt',
    difficulty: 'veteran',
    scenario: 'Player A1 has possession in the frontcourt. He passes to Player A2 who is still in the air after leaping from his backcourt.',
    question: 'Is this legal?',
    options: {
      a: 'Yes - air space has no frontcourt/backcourt status',
      b: 'No - backcourt violation; A2 must establish position in frontcourt first',
      c: 'Legal only if A2 catches and shoots before landing',
      d: 'Legal only in the last two minutes of a period'
    },
    correctAnswer: 'b',
    ruling: 'No. A backcourt violation has occurred. Player A2 must establish a position on the floor in the frontcourt prior to touching the pass.',
    ruleReference: 'Rule 8, Section I; Rule 10, Section IX (a)',
    casebookReference: 'Page 6, Question 16'
  },
  {
    id: 'backcourt-004',
    category: 'Backcourt',
    difficulty: 'veteran',
    scenario: 'Player A1 straddles the midcourt line and, without moving forward, dribbles the ball in the frontcourt while in this position.',
    question: 'Is this a violation?',
    options: {
      a: 'Yes - the ball is in the frontcourt',
      b: 'Yes - player cannot straddle the line while dribbling',
      c: 'No - player is considered backcourt if either foot or ball is in backcourt',
      d: 'No - but only for 3 seconds'
    },
    correctAnswer: 'c',
    ruling: 'No. A player dribbling the ball is considered in the backcourt if either foot or the ball is in the backcourt.',
    ruleReference: 'Rule 4, Section VI (d)',
    casebookReference: 'Page 6, Question 17'
  },
  {
    id: 'backcourt-005',
    category: 'Backcourt',
    difficulty: 'veteran',
    scenario: 'Team A is granted a timeout with the ball in the frontcourt and :21.5 remaining in the fourth period. On the throw-in, the ball is thrown into the backcourt where it is caught by Player A2.',
    question: 'Is this a violation?',
    options: {
      a: 'Yes - backcourt violation',
      b: 'Yes - 8-second violation starts immediately',
      c: 'No - during last two minutes of 4th period, ball may be inbounded anywhere',
      d: 'No - timeout resets frontcourt/backcourt status'
    },
    correctAnswer: 'c',
    ruling: 'No. During the last two minutes of the fourth period and last two minutes of overtime, the ball may be inbounded anywhere on the court.',
    ruleReference: 'Rule 8, Section III (e) (Exception)',
    casebookReference: 'Page 7, Question 23'
  },

  // ============================================
  // BATTED BALL (Page 8, Q25-26)
  // ============================================
  {
    id: 'batted-001',
    category: 'Batted Ball',
    difficulty: 'rookie',
    scenario: 'Player A1 saves a loose ball from going out-of-bounds by batting the ball back onto the playing court.',
    question: 'May Player A1 be the first to touch the ball when he returns onto the court?',
    options: {
      a: 'No - out of bounds violation',
      b: 'No - double dribble violation',
      c: 'Yes - batting does not constitute player control',
      d: 'Only if another player touches it first'
    },
    correctAnswer: 'c',
    ruling: 'Yes. The batting of the ball does not constitute player control, therefore Player A1 may be the first to touch the ball.',
    ruleReference: 'Rule 10, Section II (b)',
    casebookReference: 'Page 8, Question 26'
  },

  // ============================================
  // BLOCKING FOULS (Page 8-9, Q27-32)
  // ============================================
  {
    id: 'blocking-001',
    category: 'Blocking Fouls',
    difficulty: 'veteran',
    scenario: 'Player A1 catches an outlet pass near midcourt and immediately crashes into defender B1 who is standing in a stationary position.',
    question: 'Is this a legal defensive position to draw an offensive foul?',
    options: {
      a: 'Yes - defender was stationary',
      b: 'No - defender must allow receiver room to avoid contact outside Lower Defensive Box',
      c: 'Yes - offensive player has responsibility to avoid contact',
      d: 'Depends on whether defender had both feet set'
    },
    correctAnswer: 'b',
    ruling: 'No. A defender must allow any offensive player who receives a pass outside the Lower Defensive Box enough room to avoid contact.',
    ruleReference: 'Comments on the Rules, Section II (C)',
    casebookReference: 'Page 8, Question 27'
  },
  {
    id: 'blocking-002',
    category: 'Blocking Fouls',
    difficulty: 'expert',
    scenario: 'Player A1 drives past his primary defender and crashes into secondary defender B5 who is stationary and trying to draw an offensive foul. Player B5\'s heel is in the Restricted Area.',
    question: 'Should a defensive foul be called?',
    options: {
      a: 'No - defender was stationary with legal position',
      b: 'Yes - secondary defenders must be completely clear of restricted area',
      c: 'No - only the toe matters, not the heel',
      d: 'Jump ball situation'
    },
    correctAnswer: 'b',
    ruling: 'Yes. In order for an offensive foul to be called, secondary defenders must be completely clear of the restricted area. Lifting one\'s foot or heel off the floor above the RA does not remove them from the RA.',
    ruleReference: 'Comments on the Rules, Section II (C)',
    casebookReference: 'Page 8, Question 28'
  },
  {
    id: 'blocking-003',
    category: 'Blocking Fouls',
    difficulty: 'expert',
    scenario: 'Defensive Player B5 gets to a legal position and jumps vertically on Player A3\'s drive to the basket. As Player A3 attempts to shoot, B5 lowers his arm and contacts A3 on the elbow.',
    question: 'Is this a foul?',
    options: {
      a: 'No - defender established legal vertical position',
      b: 'No - incidental contact during shot attempt',
      c: 'Yes - B5 did not maintain verticality when he lowered his arm',
      d: 'Offensive foul on A3 for initiating contact'
    },
    correctAnswer: 'c',
    ruling: 'Yes, B5 did not maintain his verticality when he lowered his arm and since he made contact with A3\'s elbow, a shooting foul should be assessed.',
    ruleReference: 'Comments on the Rules, Section II (C)',
    casebookReference: 'Page 9, Question 32'
  },
  {
    id: 'blocking-004',
    category: 'Blocking Fouls',
    difficulty: 'veteran',
    scenario: 'Player A1 is driving to the basket for a lay-up. Defender B1 is attempting to draw a charge.',
    question: 'What is the deciding point between block or charge?',
    options: {
      a: 'Whether the defender\'s feet were set',
      b: 'Whether the defender was in the restricted area',
      c: 'Defender must be in position before offensive player\'s shoulder starts upward motion',
      d: 'Whether contact was made above or below the waist'
    },
    correctAnswer: 'c',
    ruling: 'The defender must get his body directly into the offensive player\'s path and be at the spot prior to the upward motion, defined as shoulder starting upward.',
    ruleReference: 'Comments on the Rules, Section II (C)',
    casebookReference: 'Page 9, Question 30'
  },

  // ============================================
  // CAPTAINS (Page 9, Q33-34)
  // ============================================
  {
    id: 'captains-001',
    category: 'Captains',
    difficulty: 'rookie',
    scenario: 'Team A calls a timeout. The captain of Team B wishes to discuss a rule interpretation with the officials.',
    question: 'Is this allowed?',
    options: {
      a: 'Yes - any captain may address officials during timeouts',
      b: 'No - only the captain of the team charged the timeout may question officials',
      c: 'Yes - but only if both captains agree',
      d: 'Only during official timeouts'
    },
    correctAnswer: 'b',
    ruling: 'No. Only the captain of the team charged the timeout may question the officials. At this time he may only ask about a specific rule interpretation, but not about a judgment call.',
    ruleReference: 'Rule 3, Section III (b)',
    casebookReference: 'Page 9, Question 33'
  },

  // ============================================
  // CLEAR-PATH-TO-THE-BASKET (Page 10-12, Q36-46)
  // ============================================
  {
    id: 'clearpath-001',
    category: 'Clear-Path-to-the-Basket',
    difficulty: 'veteran',
    scenario: 'Player A1 is dribbling in the frontcourt toward the basket during a transition scoring opportunity. Player B1 fouls him from the rear and no other defender is ahead of Player A1 at the time of the foul.',
    question: 'What is the ruling?',
    options: {
      a: 'Common foul - two free throws',
      b: 'Clear path foul - two free throws plus possession',
      c: 'Flagrant foul - automatic',
      d: 'Transition take foul'
    },
    correctAnswer: 'b',
    ruling: 'This is a clear path foul. Player A1 is awarded two free throws and Team A retains possession on the sideline nearest to where play was interrupted.',
    ruleReference: 'Rule 12B, Section I (Penalty 6)',
    casebookReference: 'Page 10, Question 37'
  },
  {
    id: 'clearpath-002',
    category: 'Clear-Path-to-the-Basket',
    difficulty: 'expert',
    scenario: 'Player A1 has a clear-path-to-the-basket and is grabbed from behind on a two-point field goal attempt. The shot is unsuccessful.',
    question: 'What is the procedure?',
    options: {
      a: 'Clear path foul - two free throws plus possession',
      b: 'Common foul - two free throws only',
      c: 'Flagrant foul assessment required',
      d: 'And-one opportunity'
    },
    correctAnswer: 'b',
    ruling: 'A common foul should be called. A clear path foul cannot occur if the offensive player is fouled in the act of shooting. Player A1 receives two free throw attempts.',
    ruleReference: 'Rule 12B, Section I (Penalty 3, 4, and 6)',
    casebookReference: 'Page 11, Question 39'
  },
  {
    id: 'clearpath-003',
    category: 'Clear-Path-to-the-Basket',
    difficulty: 'expert',
    scenario: 'Player A1 throws a pass from his backcourt to Player A2 who receives it under the backboard near the baseline. Simultaneous with receiving the pass, Player A2 is fouled by Player B2.',
    question: 'What is the ruling?',
    options: {
      a: 'Clear path foul - ball was advancing to basket',
      b: 'Common foul - A2 is past the basket, ball not advancing toward it',
      c: 'Away-from-the-play foul',
      d: 'Transition take foul'
    },
    correctAnswer: 'b',
    ruling: 'This is a common foul. Player A2 is not deprived of a transition scoring opportunity because the ball is not continuously advancing to the basket; A2 already acquired a position past the basket.',
    ruleReference: 'Rule 12B, Section I (Penalty 6)',
    casebookReference: 'Page 11, Question 40'
  },
  {
    id: 'clearpath-004',
    category: 'Clear-Path-to-the-Basket',
    difficulty: 'expert',
    scenario: 'During a transition scoring opportunity, Player B2 sprints toward a pass, jumps with arms toward the ball, and nearly deflects it. In trying to deflect the pass, B2 collides with Player A4 and a foul is called. No defender is ahead of A4.',
    question: 'Is this a clear path foul?',
    options: {
      a: 'Yes - no defender ahead and transition opportunity denied',
      b: 'No - common foul because defender made legitimate play on ball',
      c: 'Yes - any foul during transition with no defender ahead is clear path',
      d: 'Transition take foul'
    },
    correctAnswer: 'b',
    ruling: 'No, this is a common foul. Although no defender was ahead of A4, B2 committed a foul while attempting to make a legitimate play on ball. A clear path foul cannot occur if the foul is caused by attempting to intercept or deflect a pass.',
    ruleReference: 'Rule 12B, Section I (Penalty 6)',
    casebookReference: 'Page 12, Question 45'
  },

  // ============================================
  // CHOICE OF BASKETS (Page 9, Q35)
  // ============================================
  {
    id: 'choice-001',
    category: 'Choice of Baskets',
    difficulty: 'rookie',
    scenario: 'Prior to the start of the game, a decision must be made about which team gets which basket.',
    question: 'Which team has the choice of baskets?',
    options: {
      a: 'The home team',
      b: 'The visiting team',
      c: 'Determined by coin flip',
      d: 'The team that won the previous matchup'
    },
    correctAnswer: 'b',
    ruling: 'The visiting team has its choice of baskets. Its decision must be made immediately upon taking the court.',
    ruleReference: 'Rule 4, Section I (a)',
    casebookReference: 'Page 9, Question 35'
  },

  // ============================================
  // COACH'S CHALLENGE (Page 13-18, Q47-52)
  // ============================================
  {
    id: 'challenge-001',
    category: "Coach's Challenge",
    difficulty: 'veteran',
    scenario: 'With 9:58 remaining in the fourth period, Player B1 is called for a defensive foul. Team A\'s head coach immediately calls a timeout (triggering the first mandatory timeout of the period). Team B wants to challenge.',
    question: 'What is required of Team B to challenge the foul?',
    options: {
      a: 'Simply call timeout within 30 seconds',
      b: 'Signal for Challenge within 30 seconds and notify official of specific event being challenged',
      c: 'Wait until the next dead ball',
      d: 'Only the fouled player can request a challenge'
    },
    correctAnswer: 'b',
    ruling: 'Team B\'s head coach must signal for a Challenge no later than 30 seconds from the start of the timeout and notify the game official of the specific event being challenged.',
    ruleReference: 'Rule 14, Section II (b); Rule 14, Section V (b and d)',
    casebookReference: 'Page 13, Question 47'
  },
  {
    id: 'challenge-002',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario: 'Team B\'s head coach calls timeout and walks back to his bench to consult with assistant coaches. After 25 seconds, he then signals for a Challenge.',
    question: 'Is this a legal Challenge?',
    options: {
      a: 'Yes - it was within 30 seconds',
      b: 'No - must signal during same interaction as calling timeout',
      c: 'Yes - any time during timeout is acceptable',
      d: 'Only if it\'s the team\'s first challenge'
    },
    correctAnswer: 'b',
    ruling: 'This is not a legal Challenge. Although the coach called timeout in a timely manner, he did not signal for the Challenge during the same interaction with the game official in which the timeout was called.',
    ruleReference: 'Rule 14, Section II (a)',
    casebookReference: 'Page 17, Question 52(1)'
  },
  {
    id: 'challenge-003',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario: 'A foul is called and the stoppage triggers the mandatory timeout. Team B\'s coach argues with officials, then at 28 seconds into the timeout, signals for a Challenge after watching the replay on the jumbotron.',
    question: 'Is this a legal Challenge?',
    options: {
      a: 'No - coach was arguing, not challenging',
      b: 'No - cannot use arena replay to decide',
      c: 'Yes - Challenge was signaled within 30 seconds of mandatory timeout',
      d: 'No - must signal immediately, not after consulting'
    },
    correctAnswer: 'c',
    ruling: 'This is a legal Challenge. For events immediately preceding a mandatory timeout, the coach must signal within 30 seconds from the start of the timeout.',
    ruleReference: 'Rule 14, Section II (b); Rule 14, Section V (a and b)',
    casebookReference: 'Page 17-18, Question 52(2)'
  }
];

// Helper function to get a random question
export function getRandomQuestion(): CasebookQuestion {
  const index = Math.floor(Math.random() * casebookQuestions.length);
  return casebookQuestions[index];
}

// Helper function to get questions by category
export function getQuestionsByCategory(category: string): CasebookQuestion[] {
  return casebookQuestions.filter(q => q.category === category);
}

// Helper function to get questions by difficulty
export function getQuestionsByDifficulty(difficulty: Difficulty): CasebookQuestion[] {
  return casebookQuestions.filter(q => q.difficulty === difficulty);
}

// Helper function to get today's question (based on date)
export function getDailyQuestion(): CasebookQuestion {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const index = dayOfYear % casebookQuestions.length;
  return casebookQuestions[index];
}

// Helper function to get multiple daily questions (for Daily 5)
export function getDailyQuestions(count: number = 5): CasebookQuestion[] {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );

  const questions: CasebookQuestion[] = [];
  const totalQuestions = casebookQuestions.length;

  for (let i = 0; i < count; i++) {
    const index = (dayOfYear * count + i) % totalQuestions;
    questions.push(casebookQuestions[index]);
  }

  return questions;
}

// Get all unique categories
export function getCategories(): string[] {
  return [...new Set(casebookQuestions.map(q => q.category))];
}

// Get question by ID
export function getQuestionById(id: string): CasebookQuestion | undefined {
  return casebookQuestions.find(q => q.id === id);
}
