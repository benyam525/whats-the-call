import { CaseQuestion, Difficulty } from './types';

/**
 * NBA Case Book Questions
 * Source: Official NBA Case Book
 * MVP Scope: Up to "Coach's Challenge" section (page 13)
 *
 * Difficulty Levels:
 * - rookie: Common situations, fundamental rules
 * - veteran: Less common scenarios, requires deeper knowledge
 * - expert: Edge cases, rare situations, nuanced interpretations
 */

export const casebookQuestions: CaseQuestion[] = [
  // ============================================
  // 24-SECOND CLOCK
  // ============================================
  {
    id: '24sec-001',
    category: '24-Second Clock',
    difficulty: 'rookie',
    scenario: 'Team A has possession with 8 seconds remaining on the shot clock. A1 attempts a field goal that hits the rim and rebounds to A2.',
    question: 'What happens to the shot clock?',
    options: {
      a: 'Reset to 24 seconds',
      b: 'Reset to 14 seconds',
      c: 'Continue from where it stopped',
      d: 'Turn off until Team A gains clear possession',
    },
    correctAnswer: 'a',
    ruling: 'When the ball hits the rim on a field goal attempt and the offensive team regains possession, the shot clock resets to 24 seconds.',
    ruleReference: 'Rule 7, Section II',
    ruleLink: 'https://official.nba.com/rule-no-7-shot-clock/',
  },
  {
    id: '24sec-002',
    category: '24-Second Clock',
    difficulty: 'veteran',
    scenario: 'Team A has 5 seconds on the shot clock. A1 drives and is fouled by B1 in the act of shooting. The shot misses.',
    question: 'If Team A is in the bonus, what is the shot clock situation after the free throws?',
    options: {
      a: 'Reset to 24 seconds',
      b: 'Reset to 14 seconds',
      c: 'Continue from 5 seconds',
      d: 'Reset to 14 seconds only if less than 14 remained',
    },
    correctAnswer: 'a',
    ruling: 'After free throws following a personal foul, the shot clock is reset to 24 seconds for the team that will have possession.',
    ruleReference: 'Rule 7, Section III',
    ruleLink: 'https://official.nba.com/rule-no-7-shot-clock/',
  },
  {
    id: '24sec-003',
    category: '24-Second Clock',
    difficulty: 'veteran',
    scenario: 'Team A is inbounding the ball with 18 seconds on the shot clock. B1 deflects the inbound pass out of bounds.',
    question: 'What is the shot clock situation?',
    options: {
      a: 'Reset to 24 seconds',
      b: 'Reset to 14 seconds',
      c: 'Continue from 18 seconds',
      d: 'Reset based on backcourt/frontcourt location',
    },
    correctAnswer: 'c',
    ruling: 'The shot clock continues from where it stopped. There is no reset for a deflection out of bounds by the defense.',
    ruleReference: 'Rule 7, Section II',
    ruleLink: 'https://official.nba.com/rule-no-7-shot-clock/',
  },
  {
    id: '24sec-004',
    category: '24-Second Clock',
    difficulty: 'expert',
    scenario: 'Team A has 4 seconds on the shot clock. A1\'s shot attempt is blocked by B1 and the ball goes out of bounds off B1.',
    question: 'What is the shot clock for Team A on the throw-in?',
    options: {
      a: 'Reset to 24 seconds',
      b: 'Reset to 14 seconds',
      c: 'Continue from 4 seconds',
      d: 'No shot clock (dead ball)',
    },
    correctAnswer: 'b',
    ruling: 'When the offense retains possession after the ball goes out of bounds off the defense without hitting the rim, the shot clock resets to 14 seconds (or continues if more than 14 seconds remain).',
    ruleReference: 'Rule 7, Section II(e)',
    ruleLink: 'https://official.nba.com/rule-no-7-shot-clock/',
  },
  {
    id: '24sec-005',
    category: '24-Second Clock',
    difficulty: 'rookie',
    scenario: 'With 3 seconds on the shot clock, A1 attempts a 3-point shot. The ball is in flight when the shot clock buzzer sounds, then the ball hits the rim and goes in.',
    question: 'Does the basket count?',
    options: {
      a: 'No, shot clock violation',
      b: 'Yes, counts as 3 points',
      c: 'Yes, but only 2 points',
      d: 'Depends on whether it touched the backboard first',
    },
    correctAnswer: 'b',
    ruling: 'If the ball is released before the shot clock expires and subsequently hits the rim, there is no violation. The basket counts.',
    ruleReference: 'Rule 7, Section IV',
    ruleLink: 'https://official.nba.com/rule-no-7-shot-clock/',
  },
  {
    id: '24sec-006',
    category: '24-Second Clock',
    difficulty: 'rookie',
    scenario: 'Team A commits a shot clock violation. The ball is awarded to Team B.',
    question: 'Where does Team B inbound the ball?',
    options: {
      a: 'At the nearest spot out of bounds',
      b: 'At the sideline nearest the violation',
      c: 'At the baseline',
      d: 'At mid-court',
    },
    correctAnswer: 'b',
    ruling: 'After a shot clock violation, the ball is awarded to the opposing team at the sideline nearest to where the violation occurred.',
    ruleReference: 'Rule 7, Section IV',
    ruleLink: 'https://official.nba.com/rule-no-7-shot-clock/',
  },

  // ============================================
  // BACKCOURT VIOLATION
  // ============================================
  {
    id: 'back-001',
    category: 'Backcourt Violation',
    difficulty: 'expert',
    scenario: 'A1 is standing in the frontcourt and catches a pass while airborne. A1 lands with one foot in the backcourt and one foot in the frontcourt.',
    question: 'What is the ruling?',
    options: {
      a: 'Legal play, ball is in frontcourt',
      b: 'Backcourt violation on A1',
      c: 'Jump ball situation',
      d: 'Ball is in backcourt, no violation',
    },
    correctAnswer: 'b',
    ruling: 'A player who catches the ball in the air with frontcourt status cannot land with any part of their body in the backcourt. This is a backcourt violation.',
    ruleReference: 'Rule 4, Section VI',
    ruleLink: 'https://official.nba.com/rule-no-4-definitions/',
  },
  {
    id: 'back-002',
    category: 'Backcourt Violation',
    difficulty: 'veteran',
    scenario: 'A1 has the ball in the frontcourt near the division line. A1 passes to A2 who is standing with one foot on each side of the division line.',
    question: 'What is the ruling?',
    options: {
      a: 'Legal play - A2 is in frontcourt',
      b: 'Backcourt violation',
      c: 'Legal play - A2 is in backcourt',
      d: 'Technical foul',
    },
    correctAnswer: 'b',
    ruling: 'A player with one foot in each court is considered to be in the backcourt. A pass from the frontcourt to such a player is a backcourt violation.',
    ruleReference: 'Rule 4, Section VI',
    ruleLink: 'https://official.nba.com/rule-no-4-definitions/',
  },
  {
    id: 'back-003',
    category: 'Backcourt Violation',
    difficulty: 'veteran',
    scenario: 'Team A is awarded the ball for a throw-in in their frontcourt with 6 seconds on the shot clock. A1 passes to A2 who is in the backcourt.',
    question: 'What is the ruling?',
    options: {
      a: 'Backcourt violation',
      b: 'Legal play - shot clock resets to 14',
      c: 'Legal play - shot clock stays at 6',
      d: 'Shot clock violation',
    },
    correctAnswer: 'a',
    ruling: 'Once a team has established frontcourt status (including on a frontcourt throw-in), they cannot pass or dribble into the backcourt.',
    ruleReference: 'Rule 4, Section VI',
    ruleLink: 'https://official.nba.com/rule-no-4-definitions/',
  },
  {
    id: 'back-004',
    category: 'Backcourt Violation',
    difficulty: 'expert',
    scenario: 'A1 dribbles in the backcourt. B1 tips the ball which hits A1\'s leg and bounces into the frontcourt. A1 then recovers the ball in the frontcourt.',
    question: 'Has Team A established frontcourt status?',
    options: {
      a: 'Yes, Team A has frontcourt status',
      b: 'No, still in backcourt',
      c: 'Jump ball situation',
      d: 'Backcourt violation on A1',
    },
    correctAnswer: 'a',
    ruling: 'When the ball is deflected by a defender into the frontcourt and the offense recovers it there, the offense has established frontcourt status.',
    ruleReference: 'Rule 4, Section VI',
    ruleLink: 'https://official.nba.com/rule-no-4-definitions/',
  },
  {
    id: 'back-005',
    category: 'Backcourt Violation',
    difficulty: 'rookie',
    scenario: 'A1 is dribbling in the frontcourt. B1 deflects the ball and it rolls into the backcourt. A1 recovers the ball in the backcourt.',
    question: 'What is the ruling?',
    options: {
      a: 'Backcourt violation on A1',
      b: 'Legal play - A1 can continue from backcourt',
      c: 'Shot clock resets to 14 seconds',
      d: 'Jump ball situation',
    },
    correctAnswer: 'b',
    ruling: 'When a defender causes the ball to go into the backcourt, the offense may recover the ball in the backcourt without violation. This is not a backcourt violation.',
    ruleReference: 'Rule 4, Section VI(d)',
    ruleLink: 'https://official.nba.com/rule-no-4-definitions/',
  },

  // ============================================
  // BALL IN PLAY
  // ============================================
  {
    id: 'ball-001',
    category: 'Ball in Play',
    difficulty: 'rookie',
    scenario: 'On a throw-in, A1 hands the ball through the plane of the boundary line to A2, who grabs it.',
    question: 'Is this a legal play?',
    options: {
      a: 'Yes, the ball is in play',
      b: 'No, violation on A1',
      c: 'No, violation on A2',
      d: 'Technical foul on A1',
    },
    correctAnswer: 'b',
    ruling: 'The thrower-in may not hand the ball to a player on the court. The ball must be passed or bounced to a teammate. This is a violation.',
    ruleReference: 'Rule 8, Section III',
    ruleLink: 'https://official.nba.com/rule-no-8-out-of-bounds-and-throw-in/',
  },
  {
    id: 'ball-002',
    category: 'Ball in Play',
    difficulty: 'rookie',
    scenario: 'A1 is making a throw-in. Before releasing the ball, A1 steps over the boundary line with one foot while holding the ball.',
    question: 'What is the ruling?',
    options: {
      a: 'Legal, as long as A1 releases the ball within 5 seconds',
      b: 'Violation - turnover to Team B',
      c: 'Technical foul on A1',
      d: 'Let play continue if no defender was affected',
    },
    correctAnswer: 'b',
    ruling: 'The thrower-in may not step onto the playing court before releasing the ball. This is a violation.',
    ruleReference: 'Rule 8, Section III',
    ruleLink: 'https://official.nba.com/rule-no-8-out-of-bounds-and-throw-in/',
  },
  {
    id: 'ball-003',
    category: 'Ball in Play',
    difficulty: 'veteran',
    scenario: 'During a throw-in, A1 releases the ball and it bounces once on the court. Before anyone touches it, A1 steps inbounds and catches the ball.',
    question: 'What is the ruling?',
    options: {
      a: 'Legal play - ball was in play',
      b: 'Violation on A1',
      c: 'Jump ball situation',
      d: 'Shot clock reset',
    },
    correctAnswer: 'b',
    ruling: 'The thrower-in may not be the first player to touch the ball after releasing it for the throw-in, unless it first touches another player. This is a violation.',
    ruleReference: 'Rule 8, Section III(c)',
    ruleLink: 'https://official.nba.com/rule-no-8-out-of-bounds-and-throw-in/',
  },
  {
    id: 'ball-004',
    category: 'Ball in Play',
    difficulty: 'expert',
    scenario: 'Following a made basket, A1 catches the ball as it comes through the net and immediately throws it to a referee who then hands it to B1 for the throw-in.',
    question: 'What happens to the game clock during this sequence?',
    options: {
      a: 'Clock starts when referee hands ball to B1',
      b: 'Clock starts when B1 releases the throw-in',
      c: 'Clock starts when the ball touches a player on court',
      d: 'Clock does not stop after made basket',
    },
    correctAnswer: 'c',
    ruling: 'After a successful field goal, the game clock starts when the ball is legally touched by a player on the court.',
    ruleReference: 'Rule 5, Section IX',
    ruleLink: 'https://official.nba.com/rule-no-5-scoring-and-timing/',
  },

  // ============================================
  // BASKET INTERFERENCE / GOALTENDING
  // ============================================
  {
    id: 'goal-001',
    category: 'Basket Interference / Goaltending',
    difficulty: 'rookie',
    scenario: 'A1 shoots and the ball is on its downward flight above the basket. B1 jumps and touches the ball while it is entirely above the rim level.',
    question: 'What is the ruling?',
    options: {
      a: 'Legal block - good defense',
      b: 'Goaltending - 2 or 3 points for Team A',
      c: 'Basket interference - 2 or 3 points for Team A',
      d: 'Jump ball situation',
    },
    correctAnswer: 'b',
    ruling: 'Touching the ball during a field goal attempt while it is on its downward flight, entirely above the rim level, and has a chance to enter the basket is goaltending. Points are awarded.',
    ruleReference: 'Rule 11, Section I',
    ruleLink: 'https://official.nba.com/rule-no-11-basket-interference-goaltending/',
  },
  {
    id: 'goal-002',
    category: 'Basket Interference / Goaltending',
    difficulty: 'veteran',
    scenario: 'A1 shoots and the ball bounces off the rim. While the ball is rolling on the rim with a chance to go in, A2 touches the ball trying to tip it in.',
    question: 'What is the ruling?',
    options: {
      a: 'If ball goes in, basket counts',
      b: 'Basket interference by A2 - no basket',
      c: 'Goaltending by A2 - basket counts',
      d: 'Legal play - continuation',
    },
    correctAnswer: 'b',
    ruling: 'An offensive player may not touch the ball while it is on or within the rim or has a chance to enter the basket. This is offensive basket interference.',
    ruleReference: 'Rule 11, Section II',
    ruleLink: 'https://official.nba.com/rule-no-11-basket-interference-goaltending/',
  },
  {
    id: 'goal-003',
    category: 'Basket Interference / Goaltending',
    difficulty: 'expert',
    scenario: 'B1 is hanging on the rim as A1\'s shot attempt hits the backboard and bounces toward the basket. The ball hits B1\'s arm while B1 is still on the rim.',
    question: 'What is the ruling?',
    options: {
      a: 'Legal - incidental contact',
      b: 'Technical foul on B1',
      c: 'Basket interference - basket counts',
      d: 'Goaltending - basket counts',
    },
    correctAnswer: 'c',
    ruling: 'A player may not touch the rim or net while the ball is on or within the basket, or touch the ball while it is in the cylinder above the rim. Basket interference by the defense awards the basket.',
    ruleReference: 'Rule 11, Section II',
    ruleLink: 'https://official.nba.com/rule-no-11-basket-interference-goaltending/',
  },
  {
    id: 'goal-004',
    category: 'Basket Interference / Goaltending',
    difficulty: 'rookie',
    scenario: 'A1 dunks the ball. After the ball clears the net, A1 continues to hang on the rim for a moment before dropping down.',
    question: 'What is the ruling?',
    options: {
      a: 'Technical foul on A1',
      b: 'Legal - basket counts, no foul',
      c: 'Basket interference - no basket',
      d: 'Flagrant foul',
    },
    correctAnswer: 'b',
    ruling: 'A player may hang on the rim after a dunk to prevent injury to themselves or another player. Brief hanging after the ball clears is permitted.',
    ruleReference: 'Rule 11, Section II(e)',
    ruleLink: 'https://official.nba.com/rule-no-11-basket-interference-goaltending/',
  },
  {
    id: 'goal-005',
    category: 'Basket Interference / Goaltending',
    difficulty: 'veteran',
    scenario: 'A1\'s shot hits the backboard and is on its way down toward the basket. B1 jumps and blocks the ball off the backboard before it reaches the rim.',
    question: 'What is the ruling?',
    options: {
      a: 'Legal block',
      b: 'Goaltending - basket counts',
      c: 'Basket interference - basket counts',
      d: 'Depends on the distance from the basket',
    },
    correctAnswer: 'b',
    ruling: 'Once the ball has touched the backboard during a field goal attempt, touching it while it is on its downward flight is goaltending.',
    ruleReference: 'Rule 11, Section I(a)',
    ruleLink: 'https://official.nba.com/rule-no-11-basket-interference-goaltending/',
  },
  {
    id: 'goal-006',
    category: 'Basket Interference / Goaltending',
    difficulty: 'expert',
    scenario: 'A1 attempts a layup. The ball rolls around the rim and is about to exit without going through. B1 touches the ball as it is leaving the rim.',
    question: 'What is the ruling?',
    options: {
      a: 'Goaltending - basket counts',
      b: 'Legal play - good defense',
      c: 'Basket interference - basket counts',
      d: 'Jump ball situation',
    },
    correctAnswer: 'b',
    ruling: 'If the ball clearly has no chance to go through the basket, touching it is legal. Once the ball is clearly exiting the cylinder, it may be touched.',
    ruleReference: 'Rule 11, Section I',
    ruleLink: 'https://official.nba.com/rule-no-11-basket-interference-goaltending/',
  },

  // ============================================
  // BLOOD PROTOCOL
  // ============================================
  {
    id: 'blood-001',
    category: 'Blood Protocol',
    difficulty: 'rookie',
    scenario: 'A1 is bleeding from a cut on their arm. The referee notices this during a dead ball.',
    question: 'What must happen?',
    options: {
      a: 'A1 may continue until the next timeout',
      b: 'A1 must be substituted immediately',
      c: 'A1 must leave and may return when bleeding stops and wound is covered',
      d: 'Game is delayed up to 5 minutes for treatment',
    },
    correctAnswer: 'c',
    ruling: 'A player who is bleeding or has blood on their uniform must be directed to leave the game. They may return when the bleeding has stopped and the wound is properly covered.',
    ruleReference: 'Rule 3, Section VI',
    ruleLink: 'https://official.nba.com/rule-no-3-players-substitutes-and-coaches/',
  },
  {
    id: 'blood-002',
    category: 'Blood Protocol',
    difficulty: 'veteran',
    scenario: 'A1 has blood on their jersey. The team has no replacement jersey available.',
    question: 'What happens?',
    options: {
      a: 'A1 is disqualified from the game',
      b: 'Team A forfeits the game',
      c: 'A1 may wear the jersey inside-out if blood is covered',
      d: 'A1 must play without a jersey',
    },
    correctAnswer: 'c',
    ruling: 'If no replacement jersey is available, the player may wear the bloody jersey inside-out, provided the blood is not visible and the number is still identifiable or announced.',
    ruleReference: 'Rule 3, Section VI',
    ruleLink: 'https://official.nba.com/rule-no-3-players-substitutes-and-coaches/',
  },

  // ============================================
  // BOUNDARY LINES
  // ============================================
  {
    id: 'bound-001',
    category: 'Boundary Lines',
    difficulty: 'rookie',
    scenario: 'A1 is dribbling near the sideline. A1\'s foot touches the boundary line while the ball is in their hand.',
    question: 'What is the ruling?',
    options: {
      a: 'Legal - ball must touch out of bounds',
      b: 'A1 is out of bounds - turnover',
      c: 'A1 is out of bounds only if they step completely over',
      d: 'Play continues if A1 returns inbounds',
    },
    correctAnswer: 'b',
    ruling: 'A player is out of bounds when they touch the floor or any object on or outside the boundary line. The ball is out of bounds if the player is out of bounds while touching it.',
    ruleReference: 'Rule 8, Section I',
    ruleLink: 'https://official.nba.com/rule-no-8-out-of-bounds-and-throw-in/',
  },
  {
    id: 'bound-002',
    category: 'Boundary Lines',
    difficulty: 'veteran',
    scenario: 'A loose ball is rolling toward the sideline. A1 dives and saves the ball while airborne, throwing it to A2 before landing out of bounds.',
    question: 'What is the ruling?',
    options: {
      a: 'Ball is out of bounds - Team B ball',
      b: 'Legal save - Team A ball',
      c: 'A1 must land inbounds for it to be legal',
      d: 'Jump ball situation',
    },
    correctAnswer: 'b',
    ruling: 'A player may save a ball while airborne by passing it before landing out of bounds. The player\'s out of bounds status is determined when they touch out of bounds, and the save is legal if the ball was released before that.',
    ruleReference: 'Rule 8, Section II',
    ruleLink: 'https://official.nba.com/rule-no-8-out-of-bounds-and-throw-in/',
  },
  {
    id: 'bound-003',
    category: 'Boundary Lines',
    difficulty: 'veteran',
    scenario: 'A1 has both feet inbounds and reaches out to save a ball that is over the out of bounds area but hasn\'t touched anything out of bounds.',
    question: 'If A1 catches the ball, what is the ruling?',
    options: {
      a: 'Ball is out of bounds - A1 cannot touch it',
      b: 'Legal save - ball is in play',
      c: 'Jump ball situation',
      d: 'Technical foul on A1',
    },
    correctAnswer: 'b',
    ruling: 'The ball is not out of bounds until it touches a player who is out of bounds, or any object out of bounds. A player who is inbounds may save a ball that is above but not touching out of bounds.',
    ruleReference: 'Rule 8, Section I',
    ruleLink: 'https://official.nba.com/rule-no-8-out-of-bounds-and-throw-in/',
  },
  {
    id: 'bound-004',
    category: 'Boundary Lines',
    difficulty: 'expert',
    scenario: 'A1 is standing out of bounds and B1 passes the ball directly to A1.',
    question: 'What is the ruling?',
    options: {
      a: 'Jump ball situation',
      b: 'Ball is out of bounds - Team A ball',
      c: 'Technical foul on B1',
      d: 'Play continues if A1 steps inbounds',
    },
    correctAnswer: 'b',
    ruling: 'The ball is caused to go out of bounds by the last player to touch it. If the ball touches a player who is standing out of bounds, that player caused it to go out of bounds. Since A1 is on Team A, Team A gets the ball.',
    ruleReference: 'Rule 8, Section II',
    ruleLink: 'https://official.nba.com/rule-no-8-out-of-bounds-and-throw-in/',
  },

  // ============================================
  // CHARGING / BLOCKING
  // ============================================
  {
    id: 'charge-001',
    category: 'Charging / Blocking',
    difficulty: 'rookie',
    scenario: 'B1 has established legal guarding position outside the restricted area. A1 drives and lowers their shoulder, making contact with B1\'s torso. B1 falls backward.',
    question: 'What is the ruling?',
    options: {
      a: 'Blocking foul on B1',
      b: 'Offensive foul (charge) on A1',
      c: 'No call - incidental contact',
      d: 'Double foul',
    },
    correctAnswer: 'b',
    ruling: 'When a defender has established legal guarding position and the offensive player lowers their shoulder or uses their forearm to create separation or dislodge the defender, it is an offensive foul (charge).',
    ruleReference: 'Rule 12B, Section I',
    ruleLink: 'https://official.nba.com/rule-no-12-fouls-and-penalties/',
  },
  {
    id: 'charge-002',
    category: 'Charging / Blocking',
    difficulty: 'rookie',
    scenario: 'B1 is sliding into position as A1 drives. At the moment of contact, B1\'s feet are still moving.',
    question: 'What is the ruling?',
    options: {
      a: 'Blocking foul on B1',
      b: 'Offensive foul on A1',
      c: 'No call - play on',
      d: 'Depends on who initiated contact',
    },
    correctAnswer: 'a',
    ruling: 'A defender must have established legal guarding position before contact. If the defender\'s feet are still moving when contact occurs, it is typically a blocking foul.',
    ruleReference: 'Rule 12B, Section I(a)',
    ruleLink: 'https://official.nba.com/rule-no-12-fouls-and-penalties/',
  },
  {
    id: 'charge-003',
    category: 'Charging / Blocking',
    difficulty: 'veteran',
    scenario: 'B1 is in the restricted area with legal guarding position established. A1 drives to the basket and collides with B1.',
    question: 'What is the ruling?',
    options: {
      a: 'Offensive foul on A1',
      b: 'Blocking foul on B1',
      c: 'No call - incidental contact',
      d: 'Flagrant foul on A1',
    },
    correctAnswer: 'b',
    ruling: 'A secondary defender (one who did not initially guard the ball handler) may not take a charge inside the restricted area. A blocking foul is called.',
    ruleReference: 'Rule 12B, Section I(b)',
    ruleLink: 'https://official.nba.com/rule-no-12-fouls-and-penalties/',
  },
  {
    id: 'charge-004',
    category: 'Charging / Blocking',
    difficulty: 'expert',
    scenario: 'A1 is driving. B1 is a secondary defender who jumps from inside the restricted area but contact occurs when B1 is outside the restricted area (having jumped forward).',
    question: 'Does the restricted area apply?',
    options: {
      a: 'Yes - B1 jumped from inside the area',
      b: 'No - contact occurred outside the area',
      c: 'No call - play on',
      d: 'Double foul',
    },
    correctAnswer: 'a',
    ruling: 'The restricted area rule applies based on where the defender\'s feet were when contact began or when they left the floor, not where contact occurs.',
    ruleReference: 'Rule 12B, Section I(b)',
    ruleLink: 'https://official.nba.com/rule-no-12-fouls-and-penalties/',
  },
  {
    id: 'charge-005',
    category: 'Charging / Blocking',
    difficulty: 'veteran',
    scenario: 'A1 catches the ball in the post. B1 is guarding A1 and has been in legal guarding position. A1 backs B1 down and creates contact, moving B1 backward.',
    question: 'What is the ruling?',
    options: {
      a: 'No call - normal post play',
      b: 'Offensive foul on A1',
      c: 'Blocking foul on B1',
      d: 'Held ball',
    },
    correctAnswer: 'b',
    ruling: 'An offensive player may not dislodge or displace a defender who has established and maintains legal guarding position. Using excessive force to back down a defender is an offensive foul.',
    ruleReference: 'Rule 12B, Section V',
    ruleLink: 'https://official.nba.com/rule-no-12-fouls-and-penalties/',
  },
  {
    id: 'charge-006',
    category: 'Charging / Blocking',
    difficulty: 'veteran',
    scenario: 'A1 is driving. B1 has legal guarding position. A1 goes into their shooting motion as contact occurs with B1. The ball goes in.',
    question: 'If the official rules this a charge, does the basket count?',
    options: {
      a: 'Yes - basket counts, offensive foul',
      b: 'No - offensive fouls cancel the basket',
      c: 'Only if A1 was fouled before the charge',
      d: 'Referee discretion',
    },
    correctAnswer: 'b',
    ruling: 'When an offensive foul is committed, any field goal made on that play is disallowed. The basket does not count.',
    ruleReference: 'Rule 5, Section I(b)',
    ruleLink: 'https://official.nba.com/rule-no-5-scoring-and-timing/',
  },
];

// Helper function to get a random question
export function getRandomQuestion(): CaseQuestion {
  const index = Math.floor(Math.random() * casebookQuestions.length);
  return casebookQuestions[index];
}

// Helper function to get questions by category
export function getQuestionsByCategory(category: string): CaseQuestion[] {
  return casebookQuestions.filter(q => q.category === category);
}

// Helper function to get questions by difficulty
export function getQuestionsByDifficulty(difficulty: Difficulty): CaseQuestion[] {
  return casebookQuestions.filter(q => q.difficulty === difficulty);
}

// Helper function to get today's question (based on date)
export function getDailyQuestion(): CaseQuestion {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const index = dayOfYear % casebookQuestions.length;
  return casebookQuestions[index];
}

// Get all unique categories
export function getCategories(): string[] {
  return [...new Set(casebookQuestions.map(q => q.category))];
}

// Get question by ID
export function getQuestionById(id: string): CaseQuestion | undefined {
  return casebookQuestions.find(q => q.id === id);
}
