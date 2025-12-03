// ============================================================
// RULEVISION - NEW QUESTIONS BATCH (Pages 19-35, Q53-116)
// 81 questions ready for integration
// ============================================================

import { CasebookQuestion } from './types';

// NEW CATEGORIES TO ADD TO YOUR TYPES:
// - 'Coaches'
// - 'Continuation of Play'
// - 'Correctable Errors'
// - 'Court Dimensions'
// - 'Delay-of-Game'
// - 'Disagreement By Officials'
// - 'Disconcertion of Free Throw Shooter'
// - 'Double Fouls'
// - 'Dribbling'
// - 'Eight-Second Violation'

export const casebookQuestionsBatch2: CasebookQuestion[] = [
  // ============================================
  // COACH'S CHALLENGE (Pages 21-24, Q53-59)
  // ============================================
  {
    id: 'coachs-challenge-101',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 3:13 remaining in the fourth period and the shot clock winding down, Player A1 uses an on-ball screen from A5 above the top of the key, drives toward the basket, and kicks the ball to A2 in the corner. After receiving the pass, A2 attempts a three-point shot around the time the shot-clock buzzer sounds. As A2 is in his shooting motion, a defensive foul is called on B2 on the close-out. The three-point field goal is successful. Team B\'s head coach immediately calls a timeout and legally challenges the foul on B2. Both mandatory timeouts in the period have already occurred. Replay clearly and conclusively shows that B2 did not commit illegal contact and that A2 released the shot before the shot-clock expired.',
    question:
      'After a successful Coach\'s Challenge in this situation, how should play be administered and what happens to Team B\'s timeout?',
    options: {
      a: 'The foul stands, A2 is awarded three free throws, and Team B keeps the ball afterward.',
      b: 'The foul is overturned, the three-point field goal counts, Team B is awarded the ball to start the next possession, and if this was Team B\'s first Challenge they retain the timeout; if it was their second Challenge, they are charged the timeout.',
      c: 'The basket is waved off, the foul is overturned, and play resumes with a jump ball at center circle.',
      d: 'The foul is overturned, the basket counts, and Team A retains possession for a throw-in at the spot of the original foul.'
    },
    correctAnswer: 'b',
    ruling:
      'Because replay shows no illegal contact and that the shot was released in time, the defensive foul on B2 is overturned and A2\'s three-point field goal counts. When the defense successfully challenges a defensive foul on a made shot and the foul is removed, the basket is scored and the defensive team is awarded the ball to start the next possession. If this was Team B\'s first Challenge, they retain the timeout; if it was their second Challenge, they are charged the timeout even though the Challenge was successful.',
    ruleReference: 'Rule 14, Section V (a, b); Rule 14, Section VI (1)',
    casebookReference: 'Page 21, Question 53 (1)'
  },
  {
    id: 'coachs-challenge-102',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 3:13 remaining in the fourth period, Player A1 uses an on-ball screen from A5, drives toward the basket, and passes to A2 in the corner. A2 attempts and makes a three-point field goal. Almost immediately after A2 starts his shooting motion, the calling official whistles A2 for an out-of-bounds violation, believing his heel touched the sideline before the shot. Team A\'s head coach immediately calls a timeout and legally challenges the out-of-bounds violation. At that point in the period, only one mandatory timeout has been assigned, and it was assigned to Team A. Replay review clearly and conclusively shows that A2 did not step out of bounds before releasing the shot.',
    question:
      'After a successful Coach\'s Challenge in this situation, how should play be administered and what is the impact on Team A\'s timeout?',
    options: {
      a: 'The violation is upheld, the basket is cancelled, and Team B receives the ball for a throw-in; Team A loses its timeout.',
      b: 'The violation is overturned, the three-point basket counts, Team B is awarded the ball to start the next possession, and Team A retains its timeout and gains a second Challenge.',
      c: 'The violation is overturned, the three-point basket counts, Team B is awarded the ball to start the next possession, but because the timeout coincided with the second mandatory timeout, Team A does not retain its timeout even though the Challenge is successful; if it was Team A\'s first Challenge, they are awarded a second Challenge.',
      d: 'The violation is overturned, the basket counts, and Team A keeps the ball for a throw-in at the sideline; Team A retains its timeout.'
    },
    correctAnswer: 'c',
    ruling:
      'Replay shows that A2 did not step out of bounds, so the out-of-bounds violation is overturned and the three-point field goal counts. In this type of successful offensive Challenge of an out-of-bounds call that occurred during a successful shot, the basket counts and the defensive team is awarded possession to start the next play. However, because the timeout used for the Challenge initiated the second mandatory timeout of the period, Team A does not retain that timeout even though the Challenge is successful. If this was Team A\'s first Challenge, they gain a second Challenge.',
    ruleReference: 'Rule 14, Section V (b); Rule 14, Section VI (2)',
    casebookReference: 'Page 21, Question 53 (2)'
  },
  {
    id: 'coachs-challenge-103',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 3:32 remaining in the fourth period, Player B5 is called for a foul on A1 as A1 drives into the lane. This would be B5\'s third personal foul and Team B\'s third team foul of the period. Team B calls a timeout and legally challenges the foul on B5. This is Team B\'s first Challenge of the game. At the time of the Challenge, the second mandatory timeout of the fourth period has not yet occurred, and the first mandatory timeout had previously been assigned to Team B. After replay, the foul is overturned and instead assessed to Player B1, which becomes B1\'s sixth personal foul.',
    question:
      'In this successful Coach\'s Challenge, what is the impact on Team B\'s timeout?',
    options: {
      a: 'Team B retains its timeout because the Challenge is successful and it was their first Challenge.',
      b: 'Team B loses its timeout because the timeout they called to initiate the Challenge became the second mandatory timeout of the period, even though the Challenge was successful.',
      c: 'Team B retains its timeout but loses the ability to challenge again in the game.',
      d: 'Team B automatically gains a second Challenge and keeps its timeout because the foul was reassigned to another player.'
    },
    correctAnswer: 'b',
    ruling:
      'The replay correctly changes the foul from B5 to B1, so the Challenge is successful. However, because Team B\'s timeout used to initiate the Challenge also served as the second mandatory timeout of the fourth period, Team B loses that timeout. For a team to keep the timeout associated with its first Challenge, two conditions must be satisfied: the Challenge must be successful, and both mandatory timeouts in that period must have already been assigned. Here, the second mandatory timeout had not yet occurred, so Team B is still charged the timeout.',
    ruleReference: 'Rule 14, Section V (b)',
    casebookReference: 'Page 22, Question 54 (1)'
  },
  {
    id: 'coachs-challenge-104',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'Same situation as above: with 3:32 remaining in the fourth period, B5 is called for a foul on A1, and Team B calls a timeout and legally challenges the foul on B5. It is still Team B\'s first Challenge, and replay overturns the foul on B5 and instead assigns it to B1, which becomes B1\'s sixth personal foul. This time, however, both mandatory timeouts for the fourth period had already been assigned before Team B\'s timeout for the Challenge.',
    question:
      'In this successful Coach\'s Challenge, what is the impact on Team B\'s timeout when both mandatory timeouts have already occurred?',
    options: {
      a: 'Team B loses its timeout because the foul was changed to a disqualifying foul on B1.',
      b: 'Team B does not lose its timeout because the Challenge is successful and the timeout did not initiate a mandatory timeout; Team B is also awarded a second Challenge.',
      c: 'Team B keeps its timeout, but no additional Challenge is awarded even though this was their first Challenge.',
      d: 'Team B must choose between retaining the timeout or accepting the change of the foul to B1.'
    },
    correctAnswer: 'b',
    ruling:
      'Because the foul is successfully overturned from B5 to B1, the Challenge is successful. Since both mandatory timeouts in the period had already been assigned before Team B called timeout to initiate the Challenge, Team B retains the timeout. In addition, as a team that wins its first Challenge of the game without that timeout serving as a mandatory timeout, Team B is awarded a second Challenge.',
    ruleReference: 'Rule 14, Section V (b)',
    casebookReference: 'Page 22, Question 54 (2)'
  },
  {
    id: 'coachs-challenge-105',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 4:02 remaining in the fourth period, Player A3 drives along the baseline toward the basket and collides with B5. Two officials blow their whistles almost simultaneously. The umpire calls a charging foul on A3, which would be his sixth personal foul. The crew chief instead calls an out-of-bounds violation on A3 just before the collision. Reacting to what he believes is a foul call on A3, Team A\'s head coach immediately calls a timeout and emphatically signals for a Coach\'s Challenge of the foul on A3. The crew chief and umpire then confer for more than 30 seconds and decide that the final ruling on the floor is an out-of-bounds violation on A3, not a foul. Once told this, the coach says, "In that case, I want to challenge the out-of-bounds call."',
    question:
      'Should Team A\'s request to challenge the out-of-bounds violation be granted, and why?',
    options: {
      a: 'No, because more than 30 seconds passed before the coach clearly challenged the out-of-bounds ruling.',
      b: 'No, because once the officials changed the call from a foul to an out-of-bounds violation, the original timeout and challenge signal become invalid.',
      c: 'Yes, because the head coach called a timeout immediately after the initial call and then challenged the final ruling on the play during the same interaction once the officials clarified the call.',
      d: 'Yes, but only if Team A had not previously used a Challenge in the game.'
    },
    correctAnswer: 'c',
    ruling:
      'Team A\'s Challenge of the out-of-bounds ruling should be granted. The coach immediately called a timeout and signaled for a Challenge on what he believed was a foul. The officials\' extended conference delayed his ability to target the correct call. Once the crew chief clarified that the call was out of bounds on A3, the coach promptly challenged that ruling during the same interaction. When officials\' actions or delays hinder a coach\'s ability to meet normal timing requirements, and the coach challenges the final ruling as soon as reasonably possible, the Challenge must be allowed.',
    ruleReference: 'Rule 14, Section II (a)',
    casebookReference: 'Page 22, Question 55'
  },
  {
    id: 'coachs-challenge-106',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'Player A2 drives to the basket and gathers the ball when a shooting foul is called on defender B2 for illegal contact across A2\'s arm. B2 immediately signals to his coach, asking for a Challenge of the foul. Team B\'s coach is hesitant and looks to his assistants. Meanwhile, Team B\'s players intentionally stall, repeatedly repositioning along the lane line to delay free-throw administration and extend the Challenge window.',
    question:
      'How should officials handle Team B\'s deliberate delay, and what is the effect on their ability to challenge the play?',
    options: {
      a: 'Allow the delay so the coach can gather more information; the Challenge window stays open until free throws begin.',
      b: 'Issue a Delay-of-Game warning or technical foul to Team B, and once such a Delay-of-Game is issued, Team B may no longer initiate a Challenge on the immediately preceding play.',
      c: 'Ignore the delay and simply administer the free throws without any penalty; Team B may still challenge.',
      d: 'Call a technical foul on Player B2 only, but Team B retains the ability to challenge.'
    },
    correctAnswer: 'b',
    ruling:
      'Officials must not allow a team to stall in order to extend a Challenge window. When a team delays the administration of play in this way, a Delay-of-Game warning or technical foul must be issued. Once a Delay-of-Game is assessed in connection with the delay, the offending team loses the right to challenge the play that immediately preceded the Delay-of-Game call.',
    ruleReference: 'Rule 12A, Section II (6); Rule 14, Section II (d)',
    casebookReference: 'Page 22, Question 56'
  },
  {
    id: 'coachs-challenge-107',
    category: "Coach's Challenge",
    difficulty: 'veteran',
    scenario:
      'With 1:25 remaining in the fourth period, Player A1 dribbles along the sideline in front of Team B\'s bench. B1 reaches across and knocks the ball out of bounds. The nearest official awards the ball to Team A. B1 twirls his finger in the air as if asking for replay review.',
    question:
      'Can officials initiate replay review based on the player\'s gesture, and how is a review properly triggered?',
    options: {
      a: 'Yes, the officials may initiate replay review if a defensive player signals for it.',
      b: 'Yes, because a player\'s gesture is equivalent to a coach\'s Challenge.',
      c: 'No, only a Coach\'s Challenge by the head coach—requiring a timeout and an available Challenge—can trigger a review of this out-of-bounds call.',
      d: 'No, out-of-bounds calls cannot be reviewed under any circumstances.'
    },
    correctAnswer: 'c',
    ruling:
      'A player\'s gesture has no procedural effect. A Coach\'s Challenge is the only mechanism to trigger replay review of this type of out-of-bounds call. Team B\'s head coach must have a Challenge available, call a timeout, and clearly challenge the ruling. If no Challenge is available, no review can occur.',
    ruleReference: 'Rule 14, Section I (c) (Note); Rule 14, Section III (b); Rule 14, Section IV (c)',
    casebookReference: 'Page 22, Question 57'
  },
  {
    id: 'coachs-challenge-108',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 11:24 remaining in the fourth period, Player A3 is called for a transition take foul on B2. Team A\'s head coach immediately calls timeout and legally challenges the foul. The timeout initiates the first mandatory timeout of the period. Replay shows that although A3 lunged toward B2, A3 made no contact.',
    question:
      'After replay review shows no contact on the alleged transition take foul, how should the play and timeout be administered?',
    options: {
      a: 'The foul on A3 is overturned, no foul is called, Team B retains the ball, and Team A retains its timeout.',
      b: 'The foul on A3 is overturned, no foul is called, Team B retains the ball, but because Team A\'s timeout initiated a mandatory timeout, Team A is charged the timeout.',
      c: 'Both fouls are cancelled and play resumes with a jump ball.',
      d: 'The foul stands, but A3 is not charged with a personal foul.'
    },
    correctAnswer: 'b',
    ruling:
      'Replay shows A3 made no illegal contact. The transition take foul is overturned, no foul is called, and Team B keeps the ball. Because Team A\'s timeout initiated a mandatory timeout, Team A is charged the timeout even though the Challenge was successful.',
    ruleReference: 'Rule 4, Section IV (i); Rule 14, Section I (c); Rule 14, Section III (a); Rule 14, Section V (b, c)',
    casebookReference: 'Page 23, Question 58 (1)'
  },
  {
    id: 'coachs-challenge-109',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 11:24 remaining in the fourth period, A3 is called for a transition take foul on B2. Team A\'s head coach calls timeout and legally challenges the foul. Replay clearly shows that A3 committed illegal contact, but the coach argues that the play was not a transition opportunity.',
    question:
      'What may the crew chief review and what is the outcome of the Challenge?',
    options: {
      a: 'The crew chief may downgrade the take foul to a common foul if transition criteria were not met; Team A retains its timeout.',
      b: 'Replay may only determine whether a foul occurred; because A3 committed a foul, the transition take foul stands, the Challenge fails, and Team A is charged the timeout.',
      c: 'The foul is cancelled entirely because transition criteria are unreviewable.',
      d: 'The foul is changed to a defensive three-second violation and the timeout is restored.'
    },
    correctAnswer: 'b',
    ruling:
      'Replay can confirm whether illegal contact occurred but cannot reclassify a transition take foul to a common foul based on transition interpretation. Because replay confirms A3 fouled B2, the transition take foul stands. The Challenge is unsuccessful and Team A is charged the timeout.',
    ruleReference: 'Rule 4, Section IV (i); Rule 14, Section I (c); Rule 14, Section III (a); Rule 14, Section V (a)',
    casebookReference: 'Page 23, Question 58 (2)'
  },
  {
    id: 'coachs-challenge-110',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 11:24 remaining in the fourth period, A3 is called for a transition take foul on B2 and Team A challenges. Replay shows that B4 pushed A3 into B2 before the foul.',
    question:
      'How should the foul and timeout be administered when replay reveals B4 pushed A3 into B2?',
    options: {
      a: 'The take foul on A3 stands and B4 is also charged with a foul.',
      b: 'The take foul on A3 is overturned, B4 is called for an offensive foul, and because the timeout initiated a mandatory timeout, Team A is charged the timeout despite the successful Challenge.',
      c: 'All fouls are cancelled and play resumes with a jump ball.',
      d: 'The foul is changed to a team control foul on B4 and Team A keeps its timeout.'
    },
    correctAnswer: 'b',
    ruling:
      'Replay shows B4 pushed A3 into B2. The take foul on A3 is overturned and an offensive foul is assessed to B4. Team A\'s Challenge is successful, but Team A is still charged the timeout because it initiated a mandatory timeout.',
    ruleReference: 'Rule 4, Section IV (i); Rule 14, Section I (c); Rule 14, Section III (a); Rule 14, Section V (b, c)',
    casebookReference: 'Page 23, Question 58 (3)'
  },
  {
    id: 'coachs-challenge-111',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 11:24 remaining in the fourth period, A3 is called for a transition take foul on B2 and Team A challenges. Replay shows B2 had already begun his upward shooting motion on a layup attempt.',
    question:
      'What should the officials do when replay shows the offensive player was already in his upward motion?',
    options: {
      a: 'Keep the transition take foul but award two free throws.',
      b: 'Downgrade to a common team-control foul on A3.',
      c: 'Change the call to a normal shooting foul on A3 and award B2 two free throws.',
      d: 'Cancel the foul because shooting motion cannot be reviewed.'
    },
    correctAnswer: 'c',
    ruling:
      'A transition take foul cannot occur when an offensive player is in his upward shooting motion. The foul must be changed to a standard shooting foul on A3, and B2 is awarded two free throws.',
    ruleReference: 'Rule 4, Section IV (i); Rule 14, Section I (c)',
    casebookReference: 'Page 23, Question 58 (4)'
  },
  {
    id: 'coachs-challenge-112',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 4:11 remaining in the fourth period, B5 is called for a shooting foul on A5. Team B challenges. Replay shows B5 made no illegal contact and that B3 would have imminently gained possession because no A players were nearby and B3 secured the ball immediately afterward.',
    question:
      'How should play and timeout status be administered after this successful Challenge?',
    options: {
      a: 'No foul is called, play resumes with a jump ball, and Team B loses its timeout.',
      b: 'No foul is called, Team A retains the ball, and Team B loses its timeout.',
      c: 'No foul is called, Team B is awarded possession based on imminent control, and because both mandatories were already taken, Team B retains its timeout.',
      d: 'No foul is called, Team B is awarded the ball, but Team B still loses its timeout.'
    },
    correctAnswer: 'c',
    ruling:
      'Replay overturns the foul and shows Team B would have imminently gained possession. Team B gets the ball. Because the Challenge is successful and both mandatory timeouts had already occurred, Team B retains its timeout.',
    ruleReference: 'Rule 4, Section XIV; Rule 14, Section I (c); Rule 14, Section III (a); Rule 14, Section V; Rule 14, Section VI',
    casebookReference: 'Page 24, Question 59 (1)'
  },
  {
    id: 'coachs-challenge-113',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 7:05 remaining in the fourth period, B5 is called for a shooting foul on A5 on a missed three-point attempt. Team B\'s first Challenge overturns the foul. Replay shows the ball was imminently going out of bounds and was last touched by A5.',
    question:
      'How should play and timeout status be administered after this successful Challenge?',
    options: {
      a: 'Foul overturned, ball to Team B, and Team B retains its timeout.',
      b: 'Foul overturned, ball to Team B because it was last touched by A5, but because the timeout initiated the second mandatory timeout, Team B does not retain its timeout even though the Challenge is successful; Team B earns a second Challenge.',
      c: 'Foul overturned, Team A keeps possession, and Team B loses its timeout.',
      d: 'Foul stands but free throws are cancelled.'
    },
    correctAnswer: 'b',
    ruling:
      'Replay shows no foul and that the ball was last touched by A5 before going out. Team B gets the ball. Even though the Challenge is successful and grants Team B a second Challenge, Team B does not retain the timeout because it initiated the second mandatory timeout of the period.',
    ruleReference: 'Rule 4, Section XIV; Rule 14, Section I (c); Rule 14, Section III (a); Rule 14, Section V; Rule 14, Section VI',
    casebookReference: 'Page 24, Question 59 (2)'
  },
  {
    id: 'coachs-challenge-114',
    category: "Coach's Challenge",
    difficulty: 'expert',
    scenario:
      'With 4:02 remaining in the fourth period, B5 is called for a shooting foul on A5 during a dunk attempt. Team B challenges. Replay shows B5 made no illegal contact. After the whistle, B1 taps the ball away from A1 and takes two steps toward it but never secures control.',
    question:
      'How should play and timeout status be administered after this successful Challenge?',
    options: {
      a: 'Foul overturned, ball to Team B because B1 made a clear attempt to secure it, and Team B loses its timeout.',
      b: 'Foul overturned, no team had possession or imminent possession, so play resumes with a jump ball; because the Challenge is successful and both mandatories were already taken, Team B retains its timeout and is awarded a second Challenge.',
      c: 'Foul overturned, Team A keeps the ball, and Team B retains its timeout.',
      d: 'Foul stands as a common foul but no free throws are awarded.'
    },
    correctAnswer: 'b',
    ruling:
      'Replay overturns the foul and shows no team had possession or imminent possession at the whistle. B1\'s tap does not constitute imminent control. Play resumes with a jump ball, and because the Challenge is successful and both mandatory timeouts had already occurred, Team B retains the timeout and is granted a second Challenge.',
    ruleReference: 'Rule 4, Section XIV; Rule 14, Section I (c); Rule 14, Section III (a); Rule 14, Section V; Rule 14, Section VI',
    casebookReference: 'Page 24, Question 59 (3)'
  },

  // ============================================
  // COACHES (Page 25, Q60-63)
  // ============================================
  {
    id: 'coaches-001',
    category: 'Coaches',
    difficulty: 'rookie',
    scenario:
      'Before the start of a period, a head coach wishes to speak with the officials to ask about a rule interpretation.',
    question:
      'May the officials grant a coach\'s request to discuss a rule interpretation before the start of a period, and what, if anything, must they do with the opposing coach?',
    options: {
      a: 'Yes, and the officials must also offer the opposing coach an opportunity to participate in the discussion; if the opposing coach refuses, the officials may still meet with the requesting coach.',
      b: 'Yes, but only if both coaches agree to meet together; if one refuses, the officials may not have the discussion at all.',
      c: 'No, officials may not discuss rule interpretations with coaches before a period begins; such questions must wait until after the game.',
      d: 'No, officials may only discuss rule interpretations with the official scorer or replay personnel, not with coaches.'
    },
    correctAnswer: 'a',
    ruling:
      'A coach may confer with the officials regarding a rule interpretation prior to the start of a period. However, the opposing coach must be given the opportunity to join the discussion. If the opposing coach declines, the officials are still permitted to conduct the meeting with just the requesting coach.',
    ruleReference: 'Rule 2, Section II (i)',
    casebookReference: 'Page 25, Question 60'
  },
  {
    id: 'coaches-002',
    category: 'Coaches',
    difficulty: 'rookie',
    scenario:
      'During play, the head coach of Team A beckons to the officials to request a timeout.',
    question:
      'Under what conditions should the officials grant a head coach\'s request for a timeout?',
    options: {
      a: 'The officials should grant the timeout immediately upon the head coach\'s request, regardless of ball status.',
      b: 'The officials should grant the timeout only when the ball is dead or when it is in the control of a player on the head coach\'s team.',
      c: 'The officials may grant the timeout only if the requesting team is on offense and in the frontcourt.',
      d: 'The officials may not grant a timeout requested by the head coach; only players on the court may request timeouts.'
    },
    correctAnswer: 'b',
    ruling:
      'A head coach\'s request for a timeout is valid and should be granted, but only at a time when the ball is dead or when a player on that coach\'s team has control of the ball. The timeout should not be granted during live-ball play when the opposing team controls the ball.',
    ruleReference: 'Rule 5, Section VI',
    casebookReference: 'Page 25, Question 61'
  },
  {
    id: 'coaches-003',
    category: 'Coaches',
    difficulty: 'veteran',
    scenario:
      'During a game, the officials eject a head coach from the contest for his behavior. After leaving the bench area, the coach still wants to communicate with his team.',
    question:
      'Once a coach has been ejected from the game, what restrictions apply to where the coach may be and how he may communicate with the bench?',
    options: {
      a: 'The coach must remain in the locker room area or leave the building and may not use messengers or electronic devices to send instructions to the bench; doing so is considered a violation subject to league penalties.',
      b: 'The coach may remain in the stands as long as he does not sit behind his own bench, but he may freely text or call assistants during the game.',
      c: 'The coach must leave the visual confines of the playing area but may communicate with the bench through assistant coaches or team staff in person.',
      d: 'The coach may stay in the arena anywhere outside the 28-foot coaching box and may communicate via radio headsets only.'
    },
    correctAnswer: 'a',
    ruling:
      'After ejection, a coach must either remain in the team\'s dressing room or leave the building entirely. Any use of messengers or electronic devices to transmit information from the ejected coach to the bench violates the spirit of the rule and is subject to appropriate penalties and reporting to the League Office.',
    ruleReference: 'Rule 3, Section IV (e); Rule 12A, Section VII (d)',
    casebookReference: 'Page 25, Question 62'
  },
  {
    id: 'coaches-004',
    category: 'Coaches',
    difficulty: 'rookie',
    scenario:
      'During a timeout, coaches, players, and team personnel leave the immediate bench area to diagram plays and talk. Some begin to wander toward midcourt and across the floor.',
    question:
      'Where on the court may coaches, players, and team personnel legally position themselves during timeouts?',
    options: {
      a: 'They may position themselves anywhere on their half of the court on the bench side of center court; if they cross the imaginary rim-to-rim line into the other half, they should be escorted back and reminded of the restriction.',
      b: 'They may position themselves anywhere on the playing floor, including the opponent\'s half, as long as they stay inside the three-point line.',
      c: 'They must remain seated in the bench area and may not step onto the court at all during a timeout.',
      d: 'They may use any space in the arena, including the tunnel and opposite sideline, as long as they return before the timeout ends.'
    },
    correctAnswer: 'a',
    ruling:
      'During timeouts, coaches, players, and team personnel are permitted to be anywhere on their own half of the court on the bench side of center court. If they cross beyond the imaginary line from rim to rim into the other half of the court, officials should escort them back to their proper area and advise them of the restriction.',
    ruleReference: 'Rule 3, Section IV (a)',
    casebookReference: 'Page 25, Question 63'
  },

  // ============================================
  // CONTINUATION OF PLAY (Pages 25-26, Q64-71)
  // ============================================
  {
    id: 'continuation-of-play-001',
    category: 'Continuation of Play',
    difficulty: 'rookie',
    scenario:
      'Player A1 is fouled in the act of shooting. The ball is knocked loose, but A1 is able to control it again in the same motion and complete the shot, and the basket is successful.',
    question: 'Should the basket count, and how is the play administered?',
    options: {
      a: 'Yes, the basket counts and A1 is awarded one free throw for a possible three-point play.',
      b: 'Yes, the basket counts but no free throws are awarded because the ball became loose.',
      c: 'No, the basket does not count and A1 is awarded two free throws.',
      d: 'No, the basket does not count and play resumes with a throw-in for Team A.'
    },
    correctAnswer: 'a',
    ruling:
      'When a player who has been fouled in the act of shooting can still score in one continuous motion after the ball is knocked loose, the basket shall count and the player is awarded one free throw. Any player who can score in the same motion after being fouled and having the ball knocked loose is credited with the basket.',
    ruleReference: 'Rule 4, Section XI',
    casebookReference: 'Page 25, Question 64'
  },
  {
    id: 'continuation-of-play-002',
    category: 'Continuation of Play',
    difficulty: 'rookie',
    scenario:
      'Player A1 attempts a field goal and is fouled after the ball has been released on the shot. The contact occurs while A1 is still airborne and has not yet returned to or regained a normal playing position.',
    question:
      'Is Player A1 still considered to be in the act of shooting when the foul occurs in this situation?',
    options: {
      a: 'Yes, A1 is still considered in the act of shooting until he regains some normal playing position, even if the ball has already been released or the period horn sounds.',
      b: 'No, once the ball leaves A1\'s hand, he is no longer in the act of shooting.',
      c: 'Yes, but only if the shot is a three-point attempt.',
      d: 'No, because airborne contact after release can only result in a loose-ball foul.'
    },
    correctAnswer: 'a',
    ruling:
      'A shooter remains in the act of shooting until he returns to or regains some normal playing position. Even if the ball has been released or the period horn has sounded, if the player is still airborne or has not yet regained a normal position, he is still considered to be in the act of shooting and any foul is penalized accordingly with free throws.',
    ruleReference: 'Rule 4, Section XI',
    casebookReference: 'Page 25, Question 65'
  },
  {
    id: 'continuation-of-play-003',
    category: 'Continuation of Play',
    difficulty: 'rookie',
    scenario:
      'Player A1 drives to the basket, ends his dribble, and gathers the ball. Just after he gathers, he is fouled by a defender but continues his shooting motion and scores a successful basket.',
    question:
      'In this situation, how many free throws should Player A1 be awarded, and does the basket count?',
    options: {
      a: 'The basket counts and A1 is awarded one free throw attempt.',
      b: 'The basket counts and A1 is awarded two free throws.',
      c: 'The basket is cancelled and A1 is awarded two free throws.',
      d: 'The basket is cancelled and A1 is awarded one free throw attempt.'
    },
    correctAnswer: 'a',
    ruling:
      'Because A1 had gathered the ball and continued his shooting motion through the foul to score, the shot is considered a continuation play. The basket counts and A1 is awarded one free throw attempt.',
    ruleReference: 'Rule 4, Section XI',
    casebookReference: 'Page 25, Question 66'
  },
  {
    id: 'continuation-of-play-004',
    category: 'Continuation of Play',
    difficulty: 'veteran',
    scenario:
      'Player A1 drives to the basket and gathers the ball. Defender B1 then grabs A1 in a way that prevents him from releasing the ball on a field goal attempt.',
    question:
      'How many free throws should Player A1 be awarded, and is he still considered a shooter even though he never releases the ball?',
    options: {
      a: 'Two free throws; A1 is still considered a shooter as long as his shooting motion continues, even if he cannot release the ball.',
      b: 'No free throws; since the ball was never released, it is a common foul on the floor.',
      c: 'One free throw; the grab converts it into a loose-ball foul with a bonus situation.',
      d: 'Two free throws only if the team is already in the penalty; otherwise a side-out.'
    },
    correctAnswer: 'a',
    ruling:
      'A1 does not need to release the ball in order to be given continuation. Once he has gathered the ball and continues his shooting motion, he is considered a shooter throughout the sequence. If he is grabbed and prevented from releasing the attempt, he is fouled in the act of shooting and should be awarded two free throws.',
    ruleReference: 'Rule 4, Section XI',
    casebookReference: 'Page 25, Question 67'
  },
  {
    id: 'continuation-of-play-005',
    category: 'Continuation of Play',
    difficulty: 'veteran',
    scenario:
      'Player A1 gathers the ball on a drive to the basket. Defender B1 pushes A1 in the back, which causes A1 to take three steps before scoring a successful basket.',
    question:
      'How is this play administered in terms of the basket and free throws?',
    options: {
      a: 'The basket counts and A1 is awarded one free throw because he was fouled in the act of shooting.',
      b: 'The basket is cancelled for traveling, but since A1 was fouled in the act of shooting, he is awarded two free throws.',
      c: 'The basket is cancelled and A1 is awarded the ball out of bounds because the foul occurred before the travel.',
      d: 'The basket counts, no free throws are awarded, and the foul is ignored because the defender displaced A1.'
    },
    correctAnswer: 'b',
    ruling:
      'A1 commits a traveling violation by taking three steps, so the basket cannot be scored. However, he was fouled in the act of shooting, so he is awarded two free throws. The continuation principle still applies to his shooting motion even though the field goal itself is nullified by the travelling violation.',
    ruleReference: 'Rule 4, Section XI',
    casebookReference: 'Page 25, Question 68'
  },
  {
    id: 'continuation-of-play-006',
    category: 'Continuation of Play',
    difficulty: 'expert',
    scenario:
      'Defensive player B1 is injured on the court while A2 advances the ball in the backcourt. B2 is instructed to foul his man to stop play. Just prior to the illegal contact by B2, A2 gathers the ball while still in the backcourt. After the foul, A2 takes two steps and launches a shot from the backcourt. Someone asserts that three free throws should be awarded if the shot is unsuccessful.',
    question:
      'Should Player A2 be awarded three free throws on this play if the backcourt shot is unsuccessful?',
    options: {
      a: 'Yes, three free throws should be awarded because A2 gathered the ball before the foul and then took two steps into his shooting motion.',
      b: 'Yes, three free throws should be awarded because any foul after a gather is considered in the act of shooting, regardless of where the player is on the floor.',
      c: 'No, three free throws should not be awarded because on a shot that is not a drive to the basket, the offensive player must already be in his upward motion at the time of contact to be in the act of shooting, except when the clocks are about to expire.',
      d: 'No, only two free throws may be awarded on any shot from the backcourt regardless of the type of foul.'
    },
    correctAnswer: 'c',
    ruling:
      'This is not a continuation drive to the basket. On shots that are not drives, the offensive player must be in his upward shooting motion at the time of contact to be awarded free throws for a shooting foul. Simply gathering the ball and then later going into an upward motion in the backcourt is not enough unless the shot is taken as time is about to expire, in which case the shooting motion may be deemed to start on the gather. Therefore, three free throws are not awarded here.',
    ruleReference: 'Rule 4, Section XI',
    casebookReference: 'Page 25, Question 69'
  },
  {
    id: 'continuation-of-play-007',
    category: 'Continuation of Play',
    difficulty: 'expert',
    scenario:
      'On the perimeter, defensive player B1 is guarding A1 with his arm extended forward. A1 "rips through" B1\'s extended arm from side to side and then continues into a jump shot.',
    question:
      'Under what circumstances is this considered continuation (a shooting foul) versus a simple non-shooting defensive foul?',
    options: {
      a: 'It is always continuation and a shooting foul any time A1 "rips through" an extended arm and then shoots.',
      b: 'It is never considered continuation; the foul is always non-shooting because A1 initiated the contact.',
      c: 'If A1 initiates contact by ripping through B1\'s extended arm from side to side, a defensive foul is assessed but A1 is not considered in the act of shooting at that moment. If the contact instead occurs after A1\'s side-to-side movement, during an upward shooting motion, continuation is awarded—unless A1 is in the lower defensive box and lunges his arms away from the basket, in which case a non-shooting foul is assessed.',
      d: 'It is a shooting foul only if B1 is in the restricted area and A1 drives all the way to the basket.'
    },
    correctAnswer: 'c',
    ruling:
      'When A1 initiates contact by ripping through B1\'s extended arm from side to side, the defender is charged with a foul but A1 is not yet in the act of shooting. If the illegal contact instead occurs as A1 is already moving the ball upward in a legitimate shooting motion, continuation applies and it is a shooting foul—except when A1 is in the lower defensive box and lunges his arms away from the basket in a non-legitimate shooting motion, in which case the foul is ruled non-shooting.',
    ruleReference: 'Rule 4, Section XI',
    casebookReference: 'Page 26, Question 70'
  },
  {
    id: 'continuation-of-play-008',
    category: 'Continuation of Play',
    difficulty: 'expert',
    scenario:
      'On the perimeter, defensive player B1 has his arm extended to his side while guarding A1 and is positioned outside the lower defensive box. In an attempt to draw a shooting foul, A1 lunges away from the basket, extends his shooting arm up and under B1\'s extended arm, and then shoots the ball toward the basket.',
    question:
      'In this situation, is this action by A1 considered a shooting foul on B1, and how should officials judge the play?',
    options: {
      a: 'Yes, this is a shooting foul on B1 because any contact on the shooter\'s arm in the act of shooting is penalized with free throws.',
      b: 'Yes, but only if the ball goes in the basket; otherwise it is a common foul on the floor.',
      c: 'No, this action should be deemed a no-call when B1 is outside the lower defensive box with his arm extended to the side and A1 initiates contact by abruptly swinging his arm side-to-side through B1\'s arm in a way that is not a legitimate shot attempt.',
      d: 'No, it is an offensive foul on A1 for flopping any time the shooter lunges away from the basket.'
    },
    correctAnswer: 'c',
    ruling:
      'This action is judged a non-legitimate attempt to draw a shooting foul. When B1 is outside the lower defensive box with his arm extended to the side, and A1 lunges away from the basket and abruptly swings his arm up and under B1\'s arm in an unnatural side-to-side motion, the contact should result in a no-call. Factors indicating a non-legitimate shot include the ball being moved upward away from the basket, the player not facing the basket, or other indicia that the motion is not a normal shooting attempt.',
    ruleReference: 'Rule 4, Section XI',
    casebookReference: 'Page 26, Question 71'
  },

  // ============================================
  // CORRECTABLE ERRORS (Pages 26-29, Q72-85)
  // ============================================
  {
    id: 'correctable-errors-001',
    category: 'Correctable Errors',
    difficulty: 'veteran',
    scenario:
      'To begin the game, the teams line up at the wrong baskets. Team A scores two points and six seconds run off the game clock before the officials recognize the error.',
    question:
      'How should the officials handle this situation once they recognize the incorrect lineup?',
    options: {
      a: 'Let play continue, keep the two points, and switch baskets at the next quarter break.',
      b: 'Immediately stop play, keep the two points, and switch baskets for the next possession only.',
      c: 'Erase all points and statistics from the game so far (except unsportsmanlike acts and flagrant fouls and their points), restart the game with the teams properly lined up, and reset the game clock as if no time had elapsed.',
      d: 'Declare a technical foul on both teams for improper lineup and resume play with a jump ball at center court using the correct baskets.'
    },
    correctAnswer: 'c',
    ruling:
      'Because the error is recognized with 24 seconds or less having elapsed, all points and statistics are erased except unsportsmanlike acts and all flagrant fouls and points scored there-from, and the game is restarted with the teams properly lined up. If the error were discovered after 24 seconds of play, the game would continue without changing baskets and all points would count.',
    ruleReference: 'Rule 2, Section VI (B)(2)',
    casebookReference: 'Page 26, Question 72'
  },
  {
    id: 'correctable-errors-002',
    category: 'Correctable Errors',
    difficulty: 'rookie',
    scenario:
      'A game ends tied 105–105. Before overtime begins, it is reported to the officials that Team A was granted an excessive timeout during the fourth period that was never penalized.',
    question:
      'How should the officials handle the discovery of an unpenalized excessive timeout after the end of regulation but before overtime begins?',
    options: {
      a: 'Assess a technical foul on Team A before the overtime tip and award one free throw to Team B.',
      b: 'Cancel the overtime and award the game to Team B because Team A gained an advantage from the unpenalized timeout.',
      c: 'Play the overtime period as scheduled; errors not discovered prior to the end of the fourth period cannot be penalized.',
      d: 'Restart the final two minutes of the fourth period to correct the error and then determine if overtime is needed.'
    },
    correctAnswer: 'c',
    ruling:
      'An overtime period will still be played. Any error that is not discovered prior to the end of the fourth period cannot be penalized, so the excessive timeout is no longer correctable once regulation has ended.',
    ruleReference: 'Rule 2, Section VI (D)',
    casebookReference: 'Page 26, Question 73'
  },
  {
    id: 'correctable-errors-003',
    category: 'Correctable Errors',
    difficulty: 'expert',
    scenario:
      'Player A1 is fouled, and the table informs the officials that Team B has committed five team fouls in the period. A1 is awarded two free throws: he makes the first and misses the second. Player A3 scores a field goal on the rebound of the second free throw. After 24 seconds have elapsed on the game clock, the officials are informed that the team foul information was wrong and that no free throws should have been awarded.',
    question:
      'How should this situation be corrected once the error is discovered after 24 seconds have elapsed?',
    options: {
      a: 'Cancel A1\'s successful free throw and A3\'s basket, and resume play with a throw-in for Team B at the spot of the original foul.',
      b: 'Allow A1\'s free throw and A3\'s field goal to stand because too much time has passed to correct the error.',
      c: 'Delete only the point scored by A1 on the successful free throw, allow A3\'s field goal to stand, and resume play from the current situation.',
      d: 'Replay the entire sequence from the time of the foul, nullifying all points and statistics from that stretch of play.'
    },
    correctAnswer: 'c',
    ruling:
      'Because the error is discovered after 24 seconds have elapsed, the point scored on A1\'s successful free throw is deleted, but the points scored on the successful field goal by A3 remain. If the error were discovered within 24 seconds, all play in the entire sequence would be deleted, except unsportsmanlike acts and all flagrant fouls and points scored there-from.',
    ruleReference: 'Rule 2, Section VI (A)(3)',
    casebookReference: 'Page 26, Question 74'
  },
  {
    id: 'correctable-errors-004',
    category: 'Correctable Errors',
    difficulty: 'veteran',
    scenario:
      'With 0:50.3 remaining in the fourth period, Player A2 commits a foul. Team B\'s coach believes it is A2\'s sixth personal foul, but the official scorer reports that A2 has only five. With 0:20.7 remaining, Player B2 fouls A2 on a shot attempt. It is then discovered that A2 actually committed his sixth personal foul on the earlier play and has been playing illegally.',
    question:
      'What should the officials do once they discover that Player A2 had already committed six personal fouls?',
    options: {
      a: 'Cancel all action since A2\'s sixth foul, nullify any points scored, and replay from the time of the sixth foul.',
      b: 'Allow A2 to finish the game since the mistake originated from the scorer\'s table and is not correctable.',
      c: 'Remove A2 from the game immediately; Team A\'s coach selects a substitute who will attempt A2\'s free throws and must remain in the game until he can legally be replaced.',
      d: 'Charge a technical foul to Team A for using an ineligible player and award two free throws to Team B, but allow A2 to remain in the game.'
    },
    correctAnswer: 'c',
    ruling:
      'Player A2 must be removed from the game immediately. The coach of Team A selects a substitute from the bench, and that substitute attempts the free throw(s) and must remain in the game until he can legally be replaced. Unless the official knows otherwise, he must accept the official scorer\'s records as to the number of fouls.',
    ruleReference: 'Rule 2, Section VI (D); Rule 3, Section V (e); Rule 9, Section II (a) (Exception 4)',
    casebookReference: 'Page 27, Question 75'
  },
  {
    id: 'correctable-errors-005',
    category: 'Correctable Errors',
    difficulty: 'veteran',
    scenario:
      'In the third period, offensive basket interference is called on Player A1 and the ball is awarded to Team B at the free throw line extended. The PA announcer informs the arena of the violation. In the closing seconds of the fourth period, it is discovered that the official scorer mistakenly awarded two points to Team A on that original basket-interference play.',
    question:
      'Once the scoring error is discovered late in the fourth period, how should it be corrected?',
    options: {
      a: 'Nullify the original basket-interference violation and allow the two points for Team A to stand.',
      b: 'Subtract two points from Team A\'s total and resume play from the point of interruption.',
      c: 'Cancel the game result and restart the second half because of the scorebook error.',
      d: 'Award two bonus free throws to Team B for the scoring error and keep the score as it currently stands.'
    },
    correctAnswer: 'b',
    ruling:
      'Two points must be subtracted from Team A\'s total because the basket should not have been scored on an offensive basket interference violation. Play is then resumed from the point of interruption.',
    ruleReference: 'Rule 2, Section VI (D)',
    casebookReference: 'Page 27, Question 76'
  },
  {
    id: 'correctable-errors-006',
    category: 'Correctable Errors',
    difficulty: 'expert',
    scenario:
      'Between periods, the officials are notified of two possible errors from the prior period: (1) Team A attempted an unmerited free throw or free throws that were successful, and (2) Team A did not attempt merited free throws after a common foul.',
    question:
      'How should the officials handle these two types of errors when they are discovered between periods?',
    options: {
      a: 'Situation (1): Always ignore the error once the period has ended. Situation (2): Always award the merited free throws, regardless of how much time has elapsed.',
      b: 'Situation (1): Subtract the point(s) from the score if more than 24 seconds have elapsed. Situation (2): If more than 24 seconds have elapsed, check the play-by-play; if Team A scored a field goal or was awarded free throws on the next possession from a personal foul, the error is ignored. If not, award the merited free throws. If 24 seconds or less have elapsed, reset the clock to the time of the foul, administer the free throws, resume play as after any free throws, and nullify all intervening play except unsportsmanlike acts and flagrant fouls and the points scored from them.',
      c: 'Situation (1): Replay the last 24 seconds of the period automatically. Situation (2): Resume the game from the current score and time, as correctable errors cannot be fixed between periods.',
      d: 'Situation (1): Award a technical foul to the team that benefited from the unmerited free throws. Situation (2): Restart the entire period if merited free throws were not attempted.'
    },
    correctAnswer: 'b',
    ruling:
      'For unmerited successful free throws, the point(s) are subtracted if more than 24 seconds have elapsed. For merited but unattempted free throws, the officials must check the play-by-play: if Team A scored a field goal or was awarded free throws due to a personal foul on the next possession, the error is ignored if more than 24 seconds have elapsed; if neither occurred, the offended player attempts his free throws and play resumes where it was interrupted. If 24 seconds or less have elapsed, the game clock is reset to the time of the foul, the merited free throws are administered, play resumes as after any free throws, and all intervening play is nullified except acts of unsportsmanlike conduct and all flagrant fouls and their points.',
    ruleReference: 'Rule 2, Section VI (A)(1 and 3)',
    casebookReference: 'Page 27, Question 77 (1 & 2)'
  },
  {
    id: 'correctable-errors-007',
    category: 'Correctable Errors',
    difficulty: 'expert',
    scenario:
      'With 5:15 remaining in the third period, Player A1 was fouled in a common foul situation, but he did not attempt the merited free throws. With 5:00 remaining in the third period, it is discovered that A1 never shot those free throws. Team A did not score on the possession that followed the missed opportunity.',
    question:
      'Because the error is discovered with 24 seconds or less having elapsed and Team A did not score on the subsequent possession, how should the officials correct the error?',
    options: {
      a: 'Allow play to continue from the current time and score since the period has already advanced.',
      b: 'Award Team A the ball out of bounds at the spot of the original foul but do not shoot any free throws.',
      c: 'Reset the game clock to the time of the original foul (5:15), administer A1\'s merited free throws, resume play as after any free throws, and nullify all subsequent play except unsportsmanlike acts and flagrant fouls and their points.',
      d: 'Replay only the last possession without resetting the clock, and then resume the game from the current time.'
    },
    correctAnswer: 'c',
    ruling:
      'Because the error is discovered within 24 seconds (as measured by the game clock) and no points were scored on the subsequent possession, the game clock is reset to the time of the personal foul (5:15), the free throws are administered, and play resumes as after any free throw attempts. All subsequent play is nullified except acts of unsportsmanlike conduct and flagrant fouls and the points scored from them.',
    ruleReference: 'Rule 2, Section VI (A)(1)',
    casebookReference: 'Page 28, Question 78'
  },
  {
    id: 'correctable-errors-008',
    category: 'Correctable Errors',
    difficulty: 'expert',
    scenario:
      'With 0:10.0 remaining in the first period, Player B4 fouls Player A4. The scoring table incorrectly informs the officials that it is the first team foul in the last two minutes, when in fact a penalty situation exists. Between periods, the officials are informed that penalty free throws should have been awarded at 0:10.0.',
    question:
      'How should the officials correct this error between the first and second periods?',
    options: {
      a: 'Start the second period normally and ignore the missed penalty free throws, since the period has ended.',
      b: 'Restart the first period from 0:10.0 with a jump ball at center court.',
      c: 'After the teams return to the floor, reset the game clock to 0:10.0, delete all action in the final 10 seconds except unsportsmanlike acts and flagrant fouls and their points, award A4 two free throws, and then play out the remaining 10 seconds before going directly into the second period.',
      d: 'Award Team A one technical free throw and possession to compensate for the missed penalty situation.'
    },
    correctAnswer: 'c',
    ruling:
      'After the teams return to the floor, the clock is reset to 0:10.0, and all action that took place in the final 10 seconds is deleted (except unsportsmanlike acts and all flagrant fouls and points scored there-from). Player A4 is given two free throws and play continues until the end of the period. The second period is then started without an additional break, and all action in the last 10 seconds counts in the first period.',
    ruleReference: 'Rule 2, Section VI (A)(1); Rule 2, Section VI (A)(f)',
    casebookReference: 'Page 28, Question 79'
  },
  {
    id: 'correctable-errors-009',
    category: 'Correctable Errors',
    difficulty: 'veteran',
    scenario:
      'With 7:30 remaining in the second period, it is discovered that Team B was erroneously awarded the ball to start the period instead of the correct team.',
    question:
      'What is the correct procedure for handling a throw-in that began with the wrong team being awarded possession to start a period?',
    options: {
      a: 'Switch possession at the next quarter break to give the other team the opening throw-in of the next period.',
      b: 'If the error is discovered after 24 seconds have elapsed, it cannot be corrected; if discovered with 24 seconds or less having elapsed, all play is nullified except unsportsmanlike acts and flagrant fouls and their points, and the throw-in is correctly re-administered.',
      c: 'Always replay the entire period regardless of when the error is discovered.',
      d: 'Award a technical foul to the team that incorrectly received the ball and give possession to the opposing team at midcourt.'
    },
    correctAnswer: 'b',
    ruling:
      'If any throw-in begins with the wrong team being awarded possession, and the error is discovered after 24 seconds have elapsed, the error cannot be corrected. If discovered with 24 seconds or less having elapsed, all play is nullified, except acts of unsportsmanlike conduct and all flagrant fouls and points scored there-from, and the throw-in is correctly re-administered.',
    ruleReference: 'Rule 2, Section VI (C)',
    casebookReference: 'Page 28, Question 80'
  },
  {
    id: 'correctable-errors-010',
    category: 'Correctable Errors',
    difficulty: 'veteran',
    scenario:
      'With 0:05.8 remaining in the first period, Player A1 is assessed a punching foul (which by rule requires ejection). The officials erroneously fail to eject A1, and he goes on to score the last field goal of the period after a throw-in violation by Team B. Between periods, it is brought to the officials\' attention that A1 should have been ejected.',
    question:
      'How should the officials handle the failure to eject Player A1 for a punching foul once the error is discovered?',
    options: {
      a: 'Nullify A1\'s field goal, eject him, and replay the last 5.8 seconds of the period.',
      b: 'Eject A1 immediately when the error is discovered, have his coach select a substitute, and resume play from the point of interruption; the failure to eject earlier is not a correctable error and prior play stands.',
      c: 'Issue a technical foul to Team A for illegal participation and allow A1 to continue playing.',
      d: 'Restart the entire period and remove all statistics associated with A1.'
    },
    correctAnswer: 'b',
    ruling:
      'Failure of the officials or the scorer\'s table to eject or disqualify a player when required is not a correctable error. Whenever the mistake is discovered, the player must be removed immediately, his coach selects a substitute, and play resumes from the point of interruption. Prior legal play, including A1\'s field goal, is not erased.',
    ruleReference: 'Rule 2, Section VI (D); Rule 12B, Section IX (b)',
    casebookReference: 'Page 28, Question 81'
  },
  {
    id: 'correctable-errors-011',
    category: 'Correctable Errors',
    difficulty: 'expert',
    scenario:
      'With 5:50 remaining in the period, Team A is in the penalty, but the scorer\'s table fails to notify the officials when a common foul occurs. The error is discovered with 2:30 remaining in the same period.',
    question:
      'Once the penalty error is discovered with 2:30 remaining, how should the officials administer the situation?',
    options: {
      a: 'Ignore the error because more than 24 seconds have elapsed since the foul.',
      b: 'Immediately stop play, reset the game clock to 5:50, and replay all action in the period.',
      c: 'At the next dead ball or when Team A has possession and is not on a fast break, have the scorer\'s table notify the officials. If the play-by-play shows that Team A scored a field goal or was awarded free throws on the next possession from a personal foul, the error is ignored; otherwise, the fouled player is awarded 1-and-1 for two free throws and play resumes at the point of interruption.',
      d: 'Automatically award two free throws to any player on Team A and then resume from the current time and score.'
    },
    correctAnswer: 'c',
    ruling:
      'As soon as the ball is dead or Team A has possession and is not on a fast break, the scorer\'s table must notify the officials. The officials check the play-by-play: if Team A scored a field goal or was awarded free throws as the result of a personal foul on the next possession, the error is ignored. If neither occurred, the fouled player is awarded 1 plus 1 for two free throws, and play is resumed at the point of interruption.',
    ruleReference: 'Rule 2, Section VI (A)(1) and (Exception)',
    casebookReference: 'Page 29, Question 82'
  },
  {
    id: 'correctable-errors-012',
    category: 'Correctable Errors',
    difficulty: 'expert',
    scenario:
      'At 6:56 of the third period, Player B1 flagrantly fouls Player A2 on a successful field goal. A2 should receive two free throws to score one additional point, but the officials incorrectly award only one free throw, which A2 misses. Team A inbounds at the free-throw line extended, and at 6:35 Player B3 fouls A4 in the act of shooting. It is then discovered that A2 should have received a second free throw for the flagrant foul.',
    question:
      'How should the officials correct this free-throw error, considering that the missed free throw was from a flagrant-foul situation where the ball would not have remained live?',
    options: {
      a: 'Nullify all play from 6:56 to 6:35, reset the clock to 6:56, and replay the sequence.',
      b: 'Leave everything as is because more than 24 seconds have elapsed and the error is no longer correctable.',
      c: 'Keep the clock at 6:35, have A2 attempt his second free throw (because he missed the first), and then continue play after A4\'s free throws, whether made or missed.',
      d: 'Award A2 two new free throws and then cancel A4\'s free throws entirely.'
    },
    correctAnswer: 'c',
    ruling:
      'Because the error involves a free throw attempt from a situation in which the ball would not have remained in play (a flagrant foul with no lane lineup), the 24-second exception does not apply. The clock remains at 6:35, A2 attempts his second free throw because he missed the first, and play then continues after A4\'s free throws, whether made or missed.',
    ruleReference: 'Rule 2, Section VI (A)(f) and (Exception 2)',
    casebookReference: 'Page 29, Question 83'
  },
  {
    id: 'correctable-errors-013',
    category: 'Correctable Errors',
    difficulty: 'expert',
    scenario:
      'With 4:42 remaining in the period, Player A1 is fouled while Team A is in the penalty, but the scorer\'s table fails to notify the officials. On the following possession, Player B1 flagrantly fouls A2 and A2 makes both free throws. At 4:20, the scorer\'s table notifies the officials that A1 should have shot penalty free throws at 4:42.',
    question:
      'How is this correctable error administered, given that it was discovered within 24 seconds of the original foul?',
    options: {
      a: 'Ignore the error since a flagrant foul occurred on the next possession.',
      b: 'Reset the game clock to 4:42, award A1 two free throws, do not nullify B1\'s personal foul, team foul, or the two points scored from the flagrant foul, and keep the ball in play after A1\'s free throws.',
      c: 'Cancel A2\'s two free throws from the flagrant foul and award only A1 two penalty free throws.',
      d: 'Replay all action from 4:42, nullifying all fouls and points, including those from the flagrant foul.'
    },
    correctAnswer: 'b',
    ruling:
      'Since the correctable error is discovered within 24 seconds, the game clock is reset to 4:42 and A1 is given two free throw attempts. The personal foul, team foul, and two points scored from the flagrant foul by B1 are not nullified. The ball remains in play after A1\'s free throw attempts, whether made or missed.',
    ruleReference: 'Rule 2, Section VI (A)(f) and (Exception 2)',
    casebookReference: 'Page 29, Question 84'
  },
  {
    id: 'correctable-errors-014',
    category: 'Correctable Errors',
    difficulty: 'expert',
    scenario:
      'Player A1 is injured on a play that is ruled a Flagrant Foul Penalty 1 (FF1) after instant replay review. Because there was no field goal attempt, A1 should receive two free throws to score one point and his team should retain possession. Instead, the officials incorrectly award only one free throw and possession out of bounds. The infraction occurred at 15.3 in the first period but is not discovered until later.',
    question:
      'How should this free-throw/possession error be handled if it is discovered (1) between the first and second period, and (2) at halftime?',
    options: {
      a: 'Situation (1): The error cannot be corrected because the period has ended. Situation (2): The error must be corrected at halftime before the third period begins.',
      b: 'Situation (1): Award A1 one additional free throw, with all intervening play standing and the clocks kept the same; resume from the point of interruption. Situation (2): The error may not be corrected at halftime because it was not discovered before the start of the second period.',
      c: 'Situation (1): Replay the final 15.3 seconds of the first period. Situation (2): Replay the entire first half.',
      d: 'Situation (1): Cancel all stats from the first period and restart. Situation (2): Ignore the error entirely.'
    },
    correctAnswer: 'b',
    ruling:
      'If discovered between the first and second periods, A1 is awarded one free throw. Because the error involves a free throw attempt where there is no lane lineup, the error is corrected, all intervening play stands, and play resumes from the point of interruption with the clocks remaining the same. By rule, errors that occur in the first or third periods must be discovered and rectified prior to the start of the next period. If the error is not discovered until halftime, it may not be corrected because it was not discovered before the start of the second period.',
    ruleReference: 'Rule 2, Section VI (A)(f) (Exception 2); Rule 2, Section VI (A)(b)',
    casebookReference: 'Page 29, Question 85 (1 & 2)'
  },

  // ============================================
  // COURT DIMENSIONS (Page 30, Q86)
  // ============================================
  {
    id: 'court-dimensions-001',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'An NBA playing court is described as being 94 feet long and 50 feet wide.',
    question: 'Is 94 feet by 50 feet the correct size for an NBA court?',
    options: {
      a: 'True – the official NBA court dimensions are 94 ft long by 50 ft wide',
      b: 'False – the NBA court is 92 ft by 48 ft',
      c: 'False – court size is not standardized in the NBA'
    },
    correctAnswer: 'a',
    ruling:
      'The official court size for NBA play is 94 feet in length by 50 feet in width.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (1)'
  },
  {
    id: 'court-dimensions-002',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'The free throw circle on an NBA court is described as having a radius of 6 feet.',
    question: 'Is a 6-foot radius the correct size for the free throw circle in the NBA?',
    options: {
      a: 'True – the free throw circle has a 6-foot radius',
      b: 'False – the free throw circle has a 9-foot radius',
      c: 'False – the free throw circle radius is not specified in the rules'
    },
    correctAnswer: 'a',
    ruling:
      'The free throw circle has a radius of 6 feet, centered on the free throw line.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (2)'
  },
  {
    id: 'court-dimensions-003',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'An NBA backboard is described as being 3½ feet high and 6 feet wide.',
    question:
      'Is 3½ feet high by 6 feet wide the correct size for an NBA backboard playing surface?',
    options: {
      a: 'True – the backboard is 3½ ft high by 6 ft wide',
      b: 'False – the backboard is 4 ft high by 6½ ft wide',
      c: 'False – backboard dimensions are left to the arena operator'
    },
    correctAnswer: 'a',
    ruling:
      'The official backboard size is 3½ feet in height and 6 feet in width for NBA play.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (3)'
  },
  {
    id: 'court-dimensions-004',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'The inside diameter of the basket ring on an NBA goal is specified as 18 inches.',
    question:
      'Is 18 inches the correct inside diameter of the basket ring in the NBA?',
    options: {
      a: 'True – the ring has an 18-inch inside diameter',
      b: 'False – the ring is 16 inches in diameter',
      c: 'False – the ring diameter can vary by arena'
    },
    correctAnswer: 'a',
    ruling:
      'The basket ring must have an inside diameter of 18 inches under NBA rules.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (4)'
  },
  {
    id: 'court-dimensions-005',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'The distance from the face of the backboard to the inside edge of the basket ring is specified as 6 inches.',
    question:
      'Is 6 inches the correct distance from the face of the backboard to the inside of the basket ring in the NBA?',
    options: {
      a: 'True – the inside of the ring is 6 inches from the face of the backboard',
      b: 'False – the distance is 8 inches',
      c: 'False – that distance is not regulated'
    },
    correctAnswer: 'a',
    ruling:
      'The face of the backboard is 6 inches from the inside edge of the basket ring according to NBA specifications.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (5)'
  },
  {
    id: 'court-dimensions-006',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'The height of the basket ring above the playing floor is described as 10 feet.',
    question:
      'Is 10 feet the correct height of the basket ring above the floor in NBA play?',
    options: {
      a: 'True – the ring is exactly 10 feet above the floor',
      b: 'False – the NBA uses a 9½-foot rim height',
      c: 'False – rim height can vary based on arena design'
    },
    correctAnswer: 'a',
    ruling:
      'The basket ring is fixed at a height of 10 feet above the playing floor.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (6)'
  },
  {
    id: 'court-dimensions-007',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'The width of the foul lane (key area) on an NBA court is specified as 16 feet.',
    question:
      'Is 16 feet the correct width of the foul lane (key area) in the NBA?',
    options: {
      a: 'True – the key is 16 feet wide',
      b: 'False – the key is 12 feet wide in the NBA',
      c: 'False – lane width is only specified for the painted area, not the actual key'
    },
    correctAnswer: 'a',
    ruling:
      'The foul lane (key area) is 16 feet wide from outside edge to outside edge.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (7)'
  },
  {
    id: 'court-dimensions-008',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'The free throw line is described as being 15 feet from the face of the backboard.',
    question:
      'Is 15 feet the correct distance from the free throw line to the backboard in the NBA?',
    options: {
      a: 'True – the free throw line is 15 feet from the backboard',
      b: 'False – the distance is 13 feet',
      c: 'False – the measurement is taken from the rim, not the backboard'
    },
    correctAnswer: 'a',
    ruling:
      'The free throw line is 15 feet from the plane of the backboard as specified in NBA rules.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (8)'
  },
  {
    id: 'court-dimensions-009',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'The backboard is described as being positioned 4 feet in from the endline.',
    question:
      'Is 4 feet the correct distance from the endline to the face of the backboard in the NBA?',
    options: {
      a: 'True – the backboard is set 4 feet in from the endline',
      b: 'False – the backboard is flush with the endline',
      c: 'False – the distance is 6 feet from the endline'
    },
    correctAnswer: 'a',
    ruling:
      'The face of the backboard is located 4 feet inside the endline on an NBA court.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (9)'
  },
  {
    id: 'court-dimensions-010',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'The hash mark on the sideline, used as a reference for certain player and coach positions, is specified as 28 feet from the endline.',
    question:
      'Is 28 feet from the endline the correct location of the sideline hash mark in the NBA?',
    options: {
      a: 'True – the hash mark is 28 feet from the endline',
      b: 'False – the hash mark is 25 feet from the endline',
      c: 'False – the NBA court does not use a hash mark measurement'
    },
    correctAnswer: 'a',
    ruling:
      'The sideline hash mark is located 28 feet from the endline according to the NBA court markings.',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (10)'
  },
  {
    id: 'court-dimensions-011',
    category: 'Court Dimensions',
    difficulty: 'rookie',
    scenario:
      'The standard NBA three-point field goal line is described as being 23 feet, 9 inches from the basket (except in the corners where it is closer).',
    question:
      'Is 23 feet, 9 inches the correct distance for the NBA three-point field goal line at the arc?',
    options: {
      a: 'True – the three-point line is 23 ft, 9 in from the basket along the arc',
      b: 'False – the three-point line is 22 ft at all points',
      c: 'False – the NBA does not have a standardized three-point distance'
    },
    correctAnswer: 'a',
    ruling:
      'The NBA three-point line is 23 feet, 9 inches from the center of the basket along the arc (it is closer in the corners, but the standard distance given is 23\'9").',
    ruleReference: 'Rule 1, Sections I and II',
    casebookReference: 'Page 30, Question 86 (11)'
  },

  // ============================================
  // DELAY-OF-GAME (Pages 30-31, Q87-97)
  // ============================================
  {
    id: 'delay-of-game-001',
    category: 'Delay-of-Game',
    difficulty: 'rookie',
    scenario:
      'Team A has just scored a field goal or free throw. As the ball is dropping to the floor after passing through the basket, Player A2 bats the ball away so that Team B cannot immediately inbound it.',
    question:
      'What is the correct ruling when an offensive player bats the ball away after a score as it is dropping to the floor?',
    options: {
      a: 'Issue a delay-of-game warning to Team A and notify the scorer; if Team A already has a prior delay-of-game warning, assess a technical foul. In either case, Team B retains the right to run the baseline, and repeated acts after a warning and technical foul become an unsportsmanlike act on the head coach.',
      b: 'Call an immediate technical foul on Player A2 with no prior warning and give Team B two free throws and the ball at midcourt.',
      c: 'Ignore the action as incidental since the ball was already dead once the goal was scored.'
    },
    correctAnswer: 'a',
    ruling:
      'The official must issue a delay-of-game warning and notify the official scorer. If Team A had previously committed a delay-of-game violation, a technical foul is called. Following the warning or technical foul, Team B retains the privilege of running the baseline. If, despite the warning and subsequent technical foul(s), this act is repeated, the official informs the head coach that he is responsible and any further violations become an unsportsmanlike act charged to the head coach for making a travesty of the game.',
    ruleReference: 'Rule 12A, Section II (a)(2) and Penalty',
    casebookReference: 'Page 30, Question 87'
  },
  {
    id: 'delay-of-game-002',
    category: 'Delay-of-Game',
    difficulty: 'veteran',
    scenario:
      'With 3.5 seconds remaining in the fourth period, Team A leads 110–109 and Team B has a throw-in. Player A1, defending the thrower-in, repeatedly jumps and lands with his feet breaking the plane of the out-of-bounds line and landing out-of-bounds while attempting to disrupt the throw-in.',
    question:
      'In the last 2:00 of the fourth period, what is the correct ruling when the defender of the thrower-in repeatedly breaks the plane of the boundary line with his feet?',
    options: {
      a: 'Issue only a delay-of-game warning and retain the ball for Team B at the spot of the throw-in.',
      b: 'Assess a non-unsportsmanlike technical foul on Team A because the violation occurs in the last two minutes of the fourth period.',
      c: 'Assess an unsportsmanlike technical foul on Player A1 and automatically eject him from the game.'
    },
    correctAnswer: 'b',
    ruling:
      'A non-unsportsmanlike technical foul shall be called because the game is in the last two minutes of the fourth period. It is recommended that the official administering the throw-in warn Player A1 to keep his hands and feet from breaking the vertical plane of the boundary line prior to awarding the ball to the thrower-in, but in this late-game situation the violation results in a technical foul.',
    ruleReference: 'Rule 12A, Section II (a)(5) and Penalty (Exception)',
    casebookReference: 'Page 30, Question 88'
  },
  {
    id: 'delay-of-game-003',
    category: 'Delay-of-Game',
    difficulty: 'veteran',
    scenario:
      'Team A scores a field goal. Player B1 retrieves the ball near the sideline and attempts to pass it along the baseline to Player B2, who is out-of-bounds and ready to inbound. Before the ball reaches B2, Player A1 steps in and intercepts the pass.',
    question:
      'How should the officials rule when a defender intercepts a baseline pass between two out-of-bounds teammates after a made basket?',
    options: {
      a: 'Award the ball to Team A because Player A1 legally intercepted a live pass.',
      b: 'Issue a delay-of-game warning to Team A (or a technical foul if a prior warning exists) if the interception is deemed deliberate, and award the ball back to Team B on the baseline.',
      c: 'Call a personal foul on Player A1 for interfering with the throw-in passer\'s teammate.'
    },
    correctAnswer: 'b',
    ruling:
      'If the official feels Player A1\'s interception of the pass between out-of-bounds teammates was deliberate, he will issue a delay-of-game warning to Team A and award the ball to Team B on the baseline. If Team A has already received a delay-of-game warning, a technical foul will be assessed.',
    ruleReference: 'Rule 12A, Section II (a)(6)',
    casebookReference: 'Page 31, Question 89'
  },
  {
    id: 'delay-of-game-004',
    category: 'Delay-of-Game',
    difficulty: 'rookie',
    scenario:
      'At 4:33 of the first period, Team A has a throw-in. As Player A1 holds the ball for the throw-in, Player B1 slaps the ball out of A1\'s hands, interrupting the administration of the throw-in.',
    question:
      'What is the correct ruling when a defender slaps the ball out of the thrower-in\'s hands during a throw-in?',
    options: {
      a: 'Award a personal foul to Player B1 and give Team A two free throws.',
      b: 'Issue a delay-of-game warning to Team B (or a technical foul if a prior warning exists) and award the ball back to Team A at the same spot.',
      c: 'Call a jump ball at center circle because the ball was loose during the throw-in.'
    },
    correctAnswer: 'b',
    ruling:
      'The official issues a delay-of-game warning to Team B and awards the ball back to Team A at the same throw-in spot. If a previous delay-of-game warning has already been issued to Team B, a technical foul is assessed.',
    ruleReference: 'Rule 12A, Section II (a)(4)',
    casebookReference: 'Page 31, Question 90'
  },
  {
    id: 'delay-of-game-005',
    category: 'Delay-of-Game',
    difficulty: 'veteran',
    scenario:
      'A traveling violation is called on Player A1 in the frontcourt. Instead of giving the ball to the nearby official who will administer the throw-in, A1 throws the ball all the way to the official at the other end of the floor.',
    question:
      'How should the officials rule when a player who has just committed a violation throws the ball away from the administering official?',
    options: {
      a: 'Issue a delay-of-game warning to Team A and, if the act is clearly a show of displeasure, consider assessing an unsportsmanlike technical foul on Player A1.',
      b: 'Ignore the action and simply retrieve the ball, as there is no delay caused.',
      c: 'Automatically assess a flagrant technical foul on Player A1 for throwing the ball away from the official.'
    },
    correctAnswer: 'a',
    ruling:
      'The official issues a delay-of-game warning to Team A. If, in the official\'s judgment, A1\'s action was a deliberate attempt to express displeasure at the call rather than simply misdirecting the ball, an unsportsmanlike technical foul may also be assessed.',
    ruleReference: 'Rule 12A, Section II (a)(3)',
    casebookReference: 'Page 31, Question 91'
  },
  {
    id: 'delay-of-game-006',
    category: 'Delay-of-Game',
    difficulty: 'rookie',
    scenario:
      'Following a successful field goal by Team A, Player B1 attempts an immediate throw-in but forgets to step out-of-bounds and instead throws the ball in while standing inbounds.',
    question:
      'Is B1\'s failure to step out-of-bounds before the throw-in a delay-of-game, and how should it be handled?',
    options: {
      a: 'Yes, it is a delay-of-game and a warning must be issued to Team B.',
      b: 'No, it is not a delay-of-game; Team A is awarded the ball at the spot of the attempted throw-in because B1 did not properly administer the throw-in within five seconds.',
      c: 'It is an automatic technical foul on Player B1 for improper throw-in procedure.'
    },
    correctAnswer: 'b',
    ruling:
      'This is not a delay-of-game. Team A is awarded the ball at the spot of the attempted throw-in. Player B1 is responsible for properly administering the throw-in by stepping out-of-bounds and doing so within five seconds.',
    ruleReference: 'Rule 4, Section XII; Rule 8, Section III (c)',
    casebookReference: 'Page 31, Question 92'
  },
  {
    id: 'delay-of-game-007',
    category: 'Delay-of-Game',
    difficulty: 'veteran',
    scenario:
      'A bad pass from Player A1 to Player A2 is heading toward the sideline near Team B\'s bench. The ball crosses the plane of the sideline, and the coach of Team B—standing on the sideline—grabs the ball. The official judges that Player A2 could have saved the ball from going out-of-bounds but was denied that opportunity by the coach\'s action. There are fewer than 14 seconds on the shot clock when this occurs.',
    question:
      'What is the ruling when the opposing coach interferes with a live ball near the sideline and prevents an opponent from saving it, with less than 14 seconds on the shot clock?',
    options: {
      a: 'Award possession to Team B at the spot because the ball had broken the boundary plane.',
      b: 'Issue a delay-of-game warning to Team B (or a technical foul if previously warned), award the ball to Team A on the sideline nearest the violation, and reset the shot clock to 14 seconds.',
      c: 'Call a double technical foul on both benches and resume play with a jump ball at center court.'
    },
    correctAnswer: 'b',
    ruling:
      'A delay-of-game warning is issued to Team B and the ball is awarded to Team A on the sideline nearest the spot of the violation. If Team B had previously received a delay-of-game warning, a technical foul is assessed. Because Team A was disadvantaged, the shot clock is reset to 14 seconds.',
    ruleReference: 'Rule 7, Section IV (e)(3); Rule 8, Section II (e); Rule 12A, Section II (a)(7)',
    casebookReference: 'Page 31, Question 93'
  },
  {
    id: 'delay-of-game-008',
    category: 'Delay-of-Game',
    difficulty: 'expert',
    scenario:
      'Following a successful field goal by Team B, Player A1 makes a backcourt pass toward Player A2. Player B6, seated on Team B\'s bench, reaches toward the ball and touches it. There are 18 seconds remaining on the shot clock, and the officials believe A2 could have saved the errant pass.',
    question:
      'What is the correct ruling when a bench player interferes with a backcourt pass after a made basket, and how does it differ depending on whether the ball has crossed the boundary line?',
    options: {
      a: 'If the ball has crossed the boundary plane and B6 touches it, issue a delay-of-game warning to Team B; if B6 reaches onto the court to touch the ball, assess an unsportsmanlike technical foul on B6. In either case, Team A receives a new 8 seconds to advance the ball into the frontcourt.',
      b: 'Treat all such interference as a common technical foul on the bench, with no effect on the shot clock or backcourt count.',
      c: 'Call a personal foul on B6 and award A1 two free throws and the ball at midcourt, with no change to the backcourt count.'
    },
    correctAnswer: 'a',
    ruling:
      'If the ball had already crossed over the boundary line when it was interfered with by Player B6, a delay-of-game warning is issued to Team B. If B6 instead reached onto the court to touch a live ball, he is assessed an unsportsmanlike technical foul. In either case, Team A is given a new 8 seconds to advance the ball into the frontcourt (the "magic number" for the backcourt count is 9).',
    ruleReference:
      'Rule 8, Section II (e); Rule 10, Section VIII (Exception 1); Rule 12A, Section II (a)(7)',
    casebookReference: 'Page 31, Question 94'
  },
  {
    id: 'delay-of-game-009',
    category: 'Delay-of-Game',
    difficulty: 'veteran',
    scenario:
      'Player A1 fumbles a pass near the sideline at Team B\'s bench. The ball crosses the plane of the sideline and touches Team B\'s head coach, who is standing on the sideline, not seated. The official believes A1 would have been able to recover the ball if it had not been touched by the coach.',
    question:
      'What is the ruling when the opposing head coach, standing on the sideline, is contacted by a live ball in a way that prevents an opponent from recovering it?',
    options: {
      a: 'Award the ball to Team B because the ball broke the boundary plane and was therefore out-of-bounds.',
      b: 'Issue a delay-of-game warning to Team B and award the ball out-of-bounds to Team A on the sideline nearest the violation.',
      c: 'Assess an automatic unsportsmanlike technical foul on the coach and resume play with a jump ball.'
    },
    correctAnswer: 'b',
    ruling:
      'A delay-of-game warning is issued to Team B. Team A is awarded the ball out-of-bounds on the sideline nearest the spot of the violation. A coach who is not seated on the bench has a responsibility not to interfere with a live ball.',
    ruleReference: 'Rule 8, Section II (e); Rule 12A, Section II (a)(7)',
    casebookReference: 'Page 31, Question 95'
  },
  {
    id: 'delay-of-game-010',
    category: 'Delay-of-Game',
    difficulty: 'rookie',
    scenario:
      'Player A6 reports to the scorer\'s table as a substitute. The timer sounds the horn for him to enter the game. As the beckoning official allows him onto the court, the official notices that A6\'s shirt is not tucked into his shorts.',
    question:
      'What is the ruling when a substitute who has been beckoned from the scorer\'s table enters with his shirt not tucked in?',
    options: {
      a: 'No penalty; the player is simply instructed to tuck in his shirt before play resumes.',
      b: 'Team A is assessed a delay-of-game violation for having a substitute enter the game with his shirt not tucked in.',
      c: 'Assess a technical foul on Player A6 for improper uniform.'
    },
    correctAnswer: 'b',
    ruling:
      'Team A is assessed a delay-of-game violation whenever a substitute is beckoned from the scorer\'s table and his shirt is not tucked into his shorts.',
    ruleReference: 'Rule 12A, Section II (a)(9)',
    casebookReference: 'Page 31, Question 96'
  },
  {
    id: 'delay-of-game-011',
    category: 'Delay-of-Game',
    difficulty: 'rookie',
    scenario:
      'Player A1 is shooting two free throws. Between his first and second attempts, A1 walks all the way out to the midcourt line before returning to the free throw line.',
    question:
      'Is there a penalty when the free throw shooter walks fully beyond the three-point line (to midcourt) between free throw attempts?',
    options: {
      a: 'Yes, a delay-of-game violation is assessed if the free throw shooter ventures fully beyond the three-point line between free throw attempts.',
      b: 'No, the shooter may move anywhere on the court between attempts as long as he returns before the referee is ready.',
      c: 'Yes, it is an automatic technical foul for leaving the free throw semicircle between attempts.'
    },
    correctAnswer: 'a',
    ruling:
      'A delay-of-game violation shall be assessed if a free throw shooter ventures fully beyond the three-point line between free throw attempts.',
    ruleReference: 'Rule 12A, Section II (a)(8)',
    casebookReference: 'Page 31, Question 97'
  },

  // ============================================
  // DISAGREEMENT BY OFFICIALS (Page 32, Q98)
  // ============================================
  {
    id: 'disagreement-by-officials-001',
    category: 'Disagreement By Officials',
    difficulty: 'veteran',
    scenario:
      'On a drive to the basket that does not involve the restricted area, there is significant contact between Player A1 (the dribbler) and defender Player B1. One official immediately signals a blocking foul on B1, while another official simultaneously signals an offensive foul (charge) on A1.',
    question:
      'When two officials disagree on the same play, with one calling a blocking foul on B1 and the other calling an offensive foul on A1 (not involving the restricted area), how should the play be administered?',
    options: {
      a: 'Count the foul on the defense only (blocking foul on B1) and award A1 two free throws or the ball out of bounds, depending on the situation.',
      b: 'Treat it as an offensive foul only on A1, cancel the goal if it was made, and award the ball to Team B out of bounds.',
      c: 'Assess a personal foul on both A1 and B1 and resume play with a jump ball at center circle between any two opposing players in the game.',
      d: 'Ignore both fouls because the calls are conflicting, declare a held ball, and use the alternating-possession arrow to resume play.'
    },
    correctAnswer: 'c',
    ruling:
      'When officials disagree on a block/charge situation on the same play (not involving the restricted area), with one calling a blocking foul on the defender and another calling an offensive foul on the dribbler, a personal foul is assessed on both players. Play is then resumed with a jump ball at the center circle between any two opposing players who are in the game.',
    ruleReference: 'Rule 6, Section V (a)(7) and (b); Rule 12B, Section VI (f)',
    casebookReference: 'Page 32, Question 98'
  },

  // ============================================
  // DISCONCERTION OF FREE THROW SHOOTER (Page 32, Q99-101)
  // ============================================
  {
    id: 'disconcertion-001',
    category: 'Disconcertion of Free Throw Shooter',
    difficulty: 'rookie',
    scenario:
      'Player A1 is attempting the first of two free throws. During the attempt, defensive Player B1 engages in various distracting actions while positioned either on the lane line or in the shooter\'s visual field.',
    question:
      'In which of the following situations has Player B1 committed a disconcertion violation against the free throw shooter?',
    options: {
      a: 'If B1 raises his arms above his head, makes a sudden dash upcourt within A1\'s visual field, waves his arms, yells to a teammate, talks loudly, or enters the lane while continuing to move.',
      b: 'Only if B1 physically contacts the shooter during the free throw.',
      c: 'Only if B1 steps into the paint before the ball leaves the shooter\'s hand.',
      d: 'Never — disconcertion is not a violation in the NBA.'
    },
    correctAnswer: 'a',
    ruling:
      'In situations (1) through (6), Player B1 has disconcerted the free throw shooter. The penalty is a substitute free throw only if the attempt is unsuccessful. Additionally, players on the bench must remain seated during live play except to spontaneously react to notable plays or report to the scorer\'s table.',
    ruleReference: 'Rule 9, Section I (f)',
    casebookReference: 'Page 32, Question 99'
  },
  {
    id: 'disconcertion-002',
    category: 'Disconcertion of Free Throw Shooter',
    difficulty: 'veteran',
    scenario:
      'Player A1 attempts a free throw following a successful field goal. During the attempt, Player B2 violates by entering the lane early. A1\'s free throw attempt does not touch the rim.',
    question:
      'What is the correct ruling when the defender violates the free throw lane and the free throw does not hit the rim?',
    options: {
      a: 'Award A1 a substitute free throw automatically.',
      b: 'Call a double violation and resume play with a jump ball at center circle unless B2\'s action is ruled disconcertion.',
      c: 'Ignore the violation and award the ball to Team B because the shot did not hit the rim.',
      d: 'Assess a technical foul on Player B2 for interfering with the free throw.'
    },
    correctAnswer: 'b',
    ruling:
      'This is a double violation because A1\'s attempt did not hit the rim and B2 violated the lane. Play is resumed with a jump ball at center court. The ONLY way A1 receives a substitute free throw is if the official rules that B2\'s action was disconcerting. The official must notify the PA announcer immediately.',
    ruleReference: 'Rule 9, Section I (a), Penalty',
    casebookReference: 'Page 32, Question 100'
  },
  {
    id: 'disconcertion-003',
    category: 'Disconcertion of Free Throw Shooter',
    difficulty: 'veteran',
    scenario:
      'Player A1 is attempting a free throw. Player B6, seated on Team B\'s bench, jumps up and yells loudly in an attempt to distract A1 during the free throw.',
    question:
      'How should officials rule when a bench player attempts to distract the free throw shooter by yelling or jumping during the attempt?',
    options: {
      a: 'This is a disconcertion violation, and A1 is awarded a substitute free throw if the shot is missed.',
      b: 'This is not a disconcertion violation because B6 is not in the game, but it violates Team Bench Decorum rules and may result in a technical foul.',
      c: 'Ignore the action because bench players may react however they choose during free throws.',
      d: 'Charge Player B6 with a flagrant technical foul and eject him automatically.'
    },
    correctAnswer: 'b',
    ruling:
      'This is NOT a disconcerting-the-shooter violation because B6 is not in the game. However, Team Bench Decorum rules prohibit players or coaches from attempting to distract their opponents during game action. Violators are subject to in-game penalties such as a technical foul.',
    ruleReference: 'Rule 9, Section I (f)',
    casebookReference: 'Page 32, Question 101'
  },

  // ============================================
  // DOUBLE FOULS (Page 33, Q102-105)
  // ============================================
  {
    id: 'double-fouls-001',
    category: 'Double Fouls',
    difficulty: 'rookie',
    scenario:
      'Player A2 is dribbling the ball in the backcourt when the officials call a double foul on Players A1 and B1 away from the ball.',
    question:
      'How should play be administered after a double foul on A1 and B1 while Team A has player control in the backcourt?',
    options: {
      a: 'Charge a personal and team foul to both A1 and B1, award two free throws to Team B, and give Team B the ball at midcourt.',
      b: 'Charge a personal foul to both A1 and B1, charge a team foul to each team, and resume with a jump ball at center circle.',
      c: 'Charge a personal foul to both A1 and B1, do not charge team fouls to either team, do not award free throws, and award the ball to Team A on the sideline at the nearest spot (no nearer than the free throw line extended), with the shot clock reset to 24 seconds.',
      d: 'Wipe out both fouls, resume with Team A\'s original possession at the point of interruption, and leave the shot clock unchanged.'
    },
    correctAnswer: 'c',
    ruling:
      'A personal foul is charged to Players A1 and B1. No team fouls are charged to either team and no free throws are awarded. The ball is awarded to Team A on the sideline at the nearest spot where play was interrupted, but no nearer the baseline than the free throw line extended. The shot clock is reset to 24 seconds.',
    ruleReference: 'Rule 12B, Section VI (b and c)',
    casebookReference: 'Page 33, Question 102'
  },
  {
    id: 'double-fouls-002',
    category: 'Double Fouls',
    difficulty: 'veteran',
    scenario:
      'Player A1 attempts a field goal that misses. While the shot is in the air, the officials call a double foul on Players A2 and B2.',
    question:
      'What is the correct procedure after a double foul by A2 and B2 while A1\'s unsuccessful field goal attempt is in the air?',
    options: {
      a: 'Charge personal fouls to A2 and B2, charge team fouls to both teams, and award the ball to Team B on the endline as after a defensive rebound.',
      b: 'Charge personal fouls to A2 and B2, do not charge team fouls to either team, do not award free throws, and resume play with a jump ball at center circle between any two players who were in the game when the double foul occurred, with the shot clock reset to 24 seconds.',
      c: 'Ignore both fouls because they offset and continue play as if no fouls were called, with the rebound determining possession.',
      d: 'Assess a technical foul on both A2 and B2 and resume play with Team A\'s ball at the spot of the foul, with the shot clock reset to 14 seconds.'
    },
    correctAnswer: 'b',
    ruling:
      'A personal foul is charged to Players A2 and B2. No team fouls are charged to either team and no free throws are awarded. Play is resumed with a jump ball at the center circle between any two players who were in the game when the double foul occurred. The shot clock is reset to 24 seconds.',
    ruleReference:
      'Rule 6, Section V (a)(4); Rule 7, Section IV (c)(4); Rule 12B, Section VI (d)',
    casebookReference: 'Page 33, Question 103'
  },
  {
    id: 'double-fouls-003',
    category: 'Double Fouls',
    difficulty: 'veteran',
    scenario:
      'Player A1 attempts a two-point field goal and, while the ball is in the air, a double foul is called on Players A2 and B2. The field goal attempt by A1 is successful.',
    question:
      'How should play be administered after a made field goal when a double foul on A2 and B2 occurs while the ball is in the air?',
    options: {
      a: 'Count the basket, charge personal fouls and team fouls to both teams, and award Team A the ball at midcourt.',
      b: 'Disallow the basket because of the double foul, charge personal fouls to A2 and B2, and resume with a jump ball at center circle.',
      c: 'Count the basket, charge personal fouls to A2 and B2, do not charge team fouls, reset the shot clock to 24 seconds, and award the ball to Team B on the baseline as after any score.',
      d: 'Ignore the fouls since they offset and simply proceed as after a normal score.'
    },
    correctAnswer: 'c',
    ruling:
      'Two points are awarded to Team A and personal fouls are charged to Players A2 and B2. No team fouls are assessed to either team. The shot clock is reset to 24 seconds, and play resumes with Team B inbounding the ball on the baseline as after any score.',
    ruleReference: 'Rule 7, Section IV (c)(1); Rule 12B, Section VI (e)',
    casebookReference: 'Page 33, Question 104'
  },
  {
    id: 'double-fouls-004',
    category: 'Double Fouls',
    difficulty: 'expert',
    scenario:
      'While Player A1 is dribbling near the 28-foot hash mark, the lead official calls an offensive foul on Player A2 in the post. At the same time, the slot official calls an impede foul on defensive Player B5 for not allowing Player A5 the freedom to move. The fouls are not on the same contact.',
    question:
      'How should the officials administer play when simultaneous fouls are called on A2 (offensive) and B5 (defensive) on separate contacts, while A1 is dribbling the ball?',
    options: {
      a: 'Treat the situation as a disagreement on the same play, assess a foul on both A2 and B5, and resume with a jump ball at center circle.',
      b: 'Charge team fouls to both teams, award Team B the ball since A2\'s foul was offensive, and reset the shot clock to 24 seconds.',
      c: 'Charge personal fouls to both A2 and B5, do not charge team fouls to either team, and award Team A a sideline throw-in nearest the point of interruption, with the shot clock staying the same or reset to 14 seconds, whichever is greater. This is a double foul but not a difference of opinion because the fouls involve different contact.',
      d: 'Cancel both fouls because they offset, and allow Team A to continue its original dribble, leaving the shot clock unchanged.'
    },
    correctAnswer: 'c',
    ruling:
      'Players A2 and B5 are charged with personal fouls, but no team fouls are charged. Team A retains the ball and will inbound on the sideline nearest the point of interruption. The shot clock remains as is or is reset to 14 seconds, whichever is greater. This is not considered a difference of opinion since the officials are not ruling on the same contact, but rather simultaneous separate fouls.',
    ruleReference: 'Rule 12B, Section VI (c)',
    casebookReference: 'Page 33, Question 105'
  },

  // ============================================
  // DRIBBLING (Page 34, Q106-109)
  // ============================================
  {
    id: 'dribbling-001',
    category: 'Dribbling',
    difficulty: 'rookie',
    scenario:
      'To begin a dribble, Player A1 either throws the ball over his defender\'s head or throws it far out in front of himself. In each case, the ball touches the floor before A1 continues dribbling.',
    question:
      'Is it legal for a player to begin a dribble by throwing the ball over a defender or far out ahead, provided the ball hits the floor before the player touches it again?',
    options: {
      a: 'Yes, both are legal as long as A1 does not touch the ball again before it hits the floor.',
      b: 'No, both are illegal because a dribble must start with the hand pushing the ball downward.',
      c: 'Legal only in the backcourt but illegal in the frontcourt.',
      d: 'Both plays are considered traveling violations.'
    },
    correctAnswer: 'a',
    ruling:
      'Both situations are legal. A player may throw the ball over an opponent or far ahead to start a dribble, provided he does not touch the ball again before it touches the floor. Touching it again first would constitute an illegal self-pass.',
    ruleReference: 'Rule 4, Section II',
    casebookReference: 'Page 34, Question 106'
  },
  {
    id: 'dribbling-002',
    category: 'Dribbling',
    difficulty: 'rookie',
    scenario:
      'While dribbling, Player A1 steps out-of-bounds without touching the ball, then comes back inbounds and continues dribbling.',
    question:
      'Is it legal for a dribbler who steps out-of-bounds without touching the ball to return inbounds and continue the dribble?',
    options: {
      a: 'Yes, as long as he never touched the ball while out-of-bounds.',
      b: 'No, because A1 may not be the first to touch the ball after coming from out-of-bounds until another player touches it on the court.',
      c: 'Legal only if the ball was simultaneously touched by a defender.',
      d: 'Legal if the official determines A1 had no advantage by stepping out-of-bounds.'
    },
    correctAnswer: 'b',
    ruling:
      'It is illegal. A player who goes out-of-bounds cannot be the first to touch the ball after returning inbounds until another player on the court touches it.',
    ruleReference: 'Rule 10, Section II (b)',
    casebookReference: 'Page 34, Question 107'
  },
  {
    id: 'dribbling-003',
    category: 'Dribbling',
    difficulty: 'veteran',
    scenario:
      'Below the free throw line extended, Player A5 has his back to the basket while dribbling to back down his defender. The official begins a 5-second back-to-the-basket count.',
    question:
      'When should the official call a 5-second back-to-the-basket violation on a player who is backing down while dribbling below the free throw line extended?',
    options: {
      a: 'Only after 5 seconds if the player continues dribbling and remains below the foul line extended with his back to the basket.',
      b: 'Immediately when the player turns his back to the basket, regardless of location.',
      c: 'Only if the defender requests the call.',
      d: 'Never — backing down while dribbling is always legal.'
    },
    correctAnswer: 'a',
    ruling:
      'A 5-second violation occurs if the player continues dribbling below the free throw line extended with his back to the basket for five seconds. The count ends if the dribble ends, the dribbler moves above the free throw line extended, or the defender deflects the ball. If the player turns to face the basket while dribbling, the violation ends.',
    ruleReference: 'Rule 10, Section XVI',
    casebookReference: 'Page 34, Question 108'
  },
  {
    id: 'dribbling-004',
    category: 'Dribbling',
    difficulty: 'rookie',
    scenario:
      'Player A1 is holding the ball and touches the ball to the floor one or more times without releasing it for a dribble.',
    question:
      'Is it a violation if a player holding the ball touches it to the floor without beginning a dribble?',
    options: {
      a: 'Yes, this is an illegal dribble.',
      b: 'Yes, it is a traveling violation because the ball touches the floor while the player is holding it.',
      c: 'No, a player holding the ball may touch it to the floor without penalty.',
      d: 'It depends on whether the defensive player is closely guarding him.'
    },
    correctAnswer: 'c',
    ruling:
      'This is not a violation. A player holding the ball may touch it to the floor without penalty.',
    ruleReference: 'Rule 4, Section II',
    casebookReference: 'Page 34, Question 109'
  },

  // ============================================
  // EIGHT-SECOND VIOLATION (Page 35, Q110-116)
  // ============================================
  {
    id: 'eight-second-violation-001',
    category: 'Eight-Second Violation',
    difficulty: 'rookie',
    scenario:
      'Team A has just secured possession in its backcourt and is advancing the ball toward the midcourt line.',
    question:
      'How many seconds is Team A allowed to control the ball in the backcourt before committing an eight-second violation, and when does that restriction end?',
    options: {
      a: 'Eight seconds; the restriction ends when the ball attains frontcourt status (ball and both feet of the dribbler in the frontcourt, or the ball itself crossing the midcourt plane when not in player control).',
      b: 'Ten seconds; the restriction ends as soon as any part of the dribbler\'s body crosses the midcourt line.',
      c: 'Eight seconds; the restriction ends only when the offense attempts a field goal.',
      d: 'Five seconds; the restriction ends when the offense starts a new dribble.'
    },
    correctAnswer: 'a',
    ruling:
      'Team A is allowed eight seconds to control the ball in the backcourt. The backcourt restriction ends when the ball breaks the plane of the midcourt line while not in player control, or, when dribbling, when the ball and both feet of the dribbler are in the frontcourt.',
    ruleReference: 'Rule 4, Section VI (d, e, and f); Rule 10, Section VIII',
    casebookReference: 'Page 35, Question 110'
  },
  {
    id: 'eight-second-violation-002',
    category: 'Eight-Second Violation',
    difficulty: 'veteran',
    scenario:
      'Team A is advancing the ball in the backcourt against defensive pressure. Team B deflects several passes out-of-bounds in Team A\'s backcourt.',
    question:
      'With the ball still in Team A\'s backcourt and multiple defensive deflections out-of-bounds, how many total seconds is Team A allowed to advance the ball into the frontcourt, and when does Team A receive a new eight-second count?',
    options: {
      a: 'Team A always receives a new eight seconds after any defensive deflection out-of-bounds.',
      b: 'Team A is allowed only the original eight seconds, regardless of the number of deflections, and receives a new eight seconds only if the defense commits certain actions such as a non-penalty personal foul, deliberate kick or punch, technical foul, delay-of-game warning, infection-control suspension, or after a jump ball recovered in the backcourt.',
      c: 'Team A has ten seconds in total and never receives a new count in the backcourt.',
      d: 'Team A\'s eight-second count pauses but never resets on deflections or fouls.'
    },
    correctAnswer: 'b',
    ruling:
      'Team A is allowed a total of eight seconds to advance the ball into the frontcourt, regardless of how many times the defense deflects the ball out-of-bounds. A new eight-second count is granted only when Team B (1) commits a personal foul while not in the penalty, (2) deliberately kicks the ball, (3) deliberately punches the ball, (4) is assessed a technical foul, (5) receives a delay-of-game warning, (6) play is suspended for infection control, or when Team A recovers the ball in the backcourt following any jump ball.',
    ruleReference:
      'Rule 4, Section VI (f) (Exception); Rule 10, Section VIII (Exception 1 and 2)',
    casebookReference: 'Page 35, Question 111'
  },
  {
    id: 'eight-second-violation-003',
    category: 'Eight-Second Violation',
    difficulty: 'rookie',
    scenario:
      'Following a successful field goal by Team B, Player A1 is advancing the ball toward midcourt. As the ball approaches the midcourt line, the shot clock shows 16 seconds remaining.',
    question:
      'Has Team A committed an eight-second violation if the shot clock shows 16 while A1 is still in the backcourt?',
    options: {
      a: 'Yes, an eight-second violation occurs as soon as the shot clock shows 16.',
      b: 'No, the "magic number" on the shot clock is 15; the ball must attain frontcourt status by the time the shot clock reaches 15 to avoid a violation.',
      c: 'Yes, because the ball must cross midcourt before the shot clock reaches 18.',
      d: 'No, because the eight-second rule only applies when the shot clock starts below 20.'
    },
    correctAnswer: 'b',
    ruling:
      'No violation has occurred. The "magic number" for the eight-second rule is 15 on the shot clock. The ball must attain frontcourt status by the time the shot clock reaches 15, or an eight-second violation is committed.',
    ruleReference: 'Rule 4, Section VI (f); Rule 10, Section VIII',
    casebookReference: 'Page 35, Question 112'
  },
  {
    id: 'eight-second-violation-004',
    category: 'Eight-Second Violation',
    difficulty: 'veteran',
    scenario:
      'Team A has the ball in its backcourt when a technical foul is called, either on offensive Player A1 or on defensive Player B1.',
    question:
      'After a technical foul is called with Team A in the backcourt, when does Team A receive a new eight-second count to advance the ball into the frontcourt?',
    options: {
      a: 'Team A always receives a new eight-second count after any technical foul, regardless of which team committed it.',
      b: 'Team A does not receive a new eight-second count in either case; the original count continues.',
      c: 'Team A receives a new eight-second count only if the technical foul is on the defensive team (Player B1), but not if it is on the offensive team (Player A1).',
      d: 'Team A receives a new eight-second count only if the technical foul is also a flagrant foul.'
    },
    correctAnswer: 'c',
    ruling:
      'If the technical foul is on Player A1 (the offensive team), Team A does not receive a new eight-second count. If the technical foul is on Player B1 (the defensive team), Team A does receive a new eight-second count to advance the ball into the frontcourt.',
    ruleReference: 'Rule 4, Section VI (f); Rule 10, Section VIII (Exception 1 and 2)',
    casebookReference: 'Page 35, Question 113'
  },
  {
    id: 'eight-second-violation-005',
    category: 'Eight-Second Violation',
    difficulty: 'rookie',
    scenario:
      'Team A calls a timeout while controlling the ball in the backcourt with 17 seconds remaining on the shot clock.',
    question:
      'After a timeout taken in the backcourt with 17 seconds on the shot clock, how much time does Team A have remaining to legally advance the ball into the frontcourt?',
    options: {
      a: 'Exactly one second remains to get the ball into the frontcourt.',
      b: 'More than one second remains; the "magic number" on the shot clock for an eight-second violation is 15.',
      c: 'Eight new seconds, since a timeout always resets the eight-second count.',
      d: 'No time restriction applies after a timeout in the backcourt.'
    },
    correctAnswer: 'b',
    ruling:
      'Team A has more than one second remaining. The "magic number" for the eight-second rule is 15 on the shot clock. With 17 seconds showing when the timeout is called, Team A still has time to legally advance the ball before the shot clock reaches 15.',
    ruleReference: 'Rule 4, Section VI (f); Rule 10, Section VIII',
    casebookReference: 'Page 35, Question 114'
  },
  {
    id: 'eight-second-violation-006',
    category: 'Eight-Second Violation',
    difficulty: 'veteran',
    scenario:
      'Team A is attempting to advance the ball from its backcourt. With 17 seconds on the shot clock, the ball is passed into the frontcourt and then batted by a Team B player back into the backcourt, where Team A regains control.',
    question:
      'When Team A\'s frontcourt pass is batted by the defense back into the backcourt and Team A regains control there, does a new eight-second count begin?',
    options: {
      a: 'No, the original eight-second count continues because the offense never lost control.',
      b: 'Yes, a new eight-second count begins because the ball broke the midcourt plane into the frontcourt before going back to the backcourt.',
      c: 'No, because once the ball enters the frontcourt, the eight-second rule no longer applies for that possession.',
      d: 'Yes, but only if the ball was also deflected out-of-bounds.'
    },
    correctAnswer: 'b',
    ruling:
      'Yes. The eight-second rule ends once the ball breaks the plane of the midcourt line (when not in player control). When Team A regains control of the loose ball in the backcourt after it was in the frontcourt, a new continuous possession and a new eight-second count begin.',
    ruleReference: 'Rule 4, Section VI (e)',
    casebookReference: 'Page 35, Question 115'
  },
  {
    id: 'eight-second-violation-007',
    category: 'Eight-Second Violation',
    difficulty: 'expert',
    scenario:
      'Following a successful field goal by Team A1, the ball is inbounded to Team B. With 19 seconds on the shot clock, Players A2 and B2 become involved in a verbal altercation, and the official calls a technical foul on each of them. After the double technicals are administered, Team B inbounds the ball and Player B2 is dribbling in the backcourt when the shot clock reads 15.',
    question:
      'After offsetting technical fouls on A2 and B2 during Team B\'s backcourt possession, has Team B committed an eight-second violation when the shot clock reaches 15 while still in the backcourt?',
    options: {
      a: 'Yes, because the shot clock has already reached the "magic number" of 15.',
      b: 'No, because a new eight-second count is awarded to the offensive team when a technical foul is called on the defensive team, making the "magic number" 10 in this situation.',
      c: 'Yes, because double technical fouls never affect the eight-second count.',
      d: 'No, because the eight-second rule does not apply after a double technical.'
    },
    correctAnswer: 'b',
    ruling:
      'No violation has occurred. When a technical foul is called on the defensive team, the offensive team is awarded a new eight-second count. Because B2\'s team was on offense and received a new count due to the defensive technical, the "magic number" on the shot clock is now 10, not 15. Thus, at 15 seconds there is no eight-second violation.',
    ruleReference: 'Rule 4, Section VI (f)(3); Rule 10, Section VIII (Exception 1)',
    casebookReference: 'Page 35, Question 116'
  }
];
