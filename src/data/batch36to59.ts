// casebook-questions-batch13.ts

import { CasebookQuestion } from './types';

export const casebookQuestionsBatch13: CasebookQuestion[] = [
  {
    id: 'flagrant-fouls-127',
    category: 'Flagrant Fouls',
    difficulty: 'expert',
    scenario: 'With 1:36 remaining in overtime, Player A1 scores a field goal. Before the ball is released on the ensuing throw-in by Team B, Player A2 swings his elbow and makes hard contact with Player B2. The referee rules a personal foul on A2, and the crew believes the contact may meet the criteria for a flagrant foul. After instant replay review, the contact is ruled a Flagrant Foul Penalty 1 (FF1) on A2.',
    question: 'After the personal foul on Player A2 is upgraded to a Flagrant Foul Penalty 1, how should play be administered?',
    options: {
      a: 'Any player on Team B attempts two free throws, Team B is awarded the ball at the free throw line extended in the frontcourt, and Player A2 is ejected',
      b: 'Any player on Team B attempts two free throws, and Team B is awarded the ball out-of-bounds at the free throw line extended in the frontcourt; Player A2 remains in the game',
      c: 'Player B2 attempts one free throw, and Team B is awarded the ball at the spot nearest the foul; Player A2 is automatically ejected',
      d: 'Player B2 attempts two free throws, then play resumes with a jump ball at center court'
    },
    correctAnswer: 'b',
    ruling: 'Instant replay should be utilized if the officials are not reasonably certain whether a personal foul called at any time met the criteria for a flagrant foul. The officials would review the video to determine (1) whether the personal foul should stand or be ruled a flagrant foul—penalty 1 (FF1), flagrant foul—penalty 2 (FF2) or a technical foul, and (2) whether any other players committed unsportsmanlike acts or unnecessary contact immediately prior to and/or immediately following the calling of the foul.\n\nIf a FF1 is assessed, any player in the game may attempt two free throws and Team B will be awarded the ball out-of-bounds at the free throw line extended in the frontcourt. If a FF2 is assessed, and there are no further penalties, any player in the game may attempt two free throws and Team B will be awarded the ball out-of-bounds at the free throw line extended in the frontcourt and Player A2 will be ejected immediately.\n\nIf the contact did not meet the criteria for a flagrant foul, an away-from-the-play foul should be assessed, or if there was no contact at all, the personal foul will be changed to a technical foul for unsportsmanlike tactics.',
    ruleReference: 'Rule 12A, Section V (d)(6); Rule 12B, Section IV; Rule 12B, Section X (b); Rule 13, Section I (a)(3–4); Rule 13, Section II (c–d)',
    casebookReference: 'Page 39, Question 127'
  },
  {
    id: 'flagrant-fouls-128',
    category: 'Flagrant Fouls',
    difficulty: 'expert',
    scenario: 'Player A1 is fouled hard in the act of shooting a three-point field goal by Player B1. After the whistle, Player B2 commits additional unsportsmanlike contact against A1. Upon instant replay review, B1’s foul is ruled a common foul and B2’s contact is ruled a flagrant foul (FF1). The three-point attempt is unsuccessful.',
    question: 'In this situation, with a missed three-point attempt, B1’s foul ruled common and B2’s contact ruled a Flagrant Foul Penalty 1, how should play be administered?',
    options: {
      a: 'Player A1 attempts three free throws for the shooting foul and two additional free throws for the flagrant foul (five total), and Team A retains the ball at the free throw line extended',
      b: 'Player A1 attempts three free throws for the shooting foul only; the flagrant foul by B2 results in two free throws for any Team A player but no additional possession',
      c: 'Any player on Team A attempts two free throws for the flagrant foul only, and play resumes with a jump ball at center court',
      d: 'Player A1 attempts three free throws for the shooting foul, and Team B is awarded the ball at the free throw line extended regardless of the flagrant foul'
    },
    correctAnswer: 'a',
    ruling: 'The officials should utilize instant replay to determine if the contact by Player B1 is a common foul, FF1 or FF2 and to rule on the unsportsmanlike contact by Player B2.\n\nFor an unsuccessful three-point field goal attempt, if Player B1 is assessed a common foul and Player B2 a flagrant foul, Player A1 is awarded five free throw attempts to score four points and Team A will retain possession of the ball at the free throw line extended. Other combinations (e.g., B1 common/B2 technical, B1 flagrant/B2 technical) are administered with the technical free throw(s) first, followed by free throws for the personal or flagrant foul, and Team A retaining the ball when a flagrant foul is assessed.',
    ruleReference: 'Rule 12B, Section I (Penalty 3–4); Rule 12B, Section IV; Rule 12B, Section V (b–c); Rule 13, Section I (a)(3); Rule 13, Section II (c)(1–2)',
    casebookReference: 'Page 40, Question 128'
  },
  {
    id: 'flagrant-fouls-129',
    category: 'Flagrant Fouls',
    difficulty: 'veteran',
    scenario: 'Player A1 is in the act of shooting a two-point field goal when Player B1 commits a hard foul. After instant replay review, the foul on B1 is ruled a Flagrant Foul Penalty 1 (FF1) and the field goal is successful.',
    question: 'Once the common foul on Player B1 is upgraded to a Flagrant Foul Penalty 1 and the two-point field goal by A1 is successful, how is the play administered?',
    options: {
      a: 'Player A1 is awarded one free throw, Team A retains the ball at the free throw line extended, and a maximum of two points may be scored on the play',
      b: 'Player A1 is awarded two free throws to score one additional point, Team A is awarded the ball at the free throw line extended in the frontcourt, and a maximum of three points may be scored on the play',
      c: 'Any player on Team A is awarded two free throws, but Team B gains possession on the baseline because the basket was made',
      d: 'Player A1 is awarded two free throws with players lined up on the lane, and the ball becomes live on the last free throw; no additional possession is granted'
    },
    correctAnswer: 'b',
    ruling: 'Following instant replay review, if a FF1 is assessed against Player B1 as Player A1 is in the act of shooting a successful two-point field goal attempt, Player A1 is awarded two free throw attempts to score one additional point. Team A is awarded the ball out-of-bounds at the free throw line extended in the frontcourt whether the free throw attempts are made or missed, and there is no line-up on the free throw lane lines. By rule, a maximum of three points can be scored on this play.\n\nIf the field goal is unsuccessful, Player A1 is awarded two free throw attempts and Team A is still awarded the ball at the free throw line extended whether the free throws are made or missed, with no lane line lineup.',
    ruleReference: 'Rule 12B, Section IV; Rule 12B, Section V (b); Rule 13, Section I (a)(3); Rule 13, Section II (c)(1–2)',
    casebookReference: 'Page 40, Question 129'
  },
  {
    id: 'flagrant-fouls-130',
    category: 'Flagrant Fouls',
    difficulty: 'veteran',
    scenario: 'Following instant replay review, Player B1 is assessed a Flagrant Foul Penalty 1 (FF1) and Player A1 is awarded two free throw attempts and possession of the ball out-of-bounds. Earlier in the game, Player B1 had been assessed a technical foul for an unsportsmanlike act.',
    question: 'How do B1’s previous technical foul and a possible injury to A1 affect this situation?',
    options: {
      a: 'B1 is automatically ejected because a FF1 plus any prior technical foul requires ejection; if A1 is injured, Team B’s coach selects the free throw shooter',
      b: 'B1 is not automatically ejected by a FF1 plus one prior technical; if A1 is injured, Coach A selects one of the four remaining players on the court to shoot the free throws',
      c: 'B1 is automatically ejected only if the FF1 is upgraded to a FF2 by replay; if A1 is injured, the officials select the shooter from Team A’s bench',
      d: 'B1 remains in the game regardless of any additional conduct; if A1 is injured, any Team A player (including bench) may shoot without restriction'
    },
    correctAnswer: 'b',
    ruling: 'A Flagrant Foul Penalty 2 (FF2) results in an automatic ejection, but a FF1 does not. A prior unsportsmanlike technical foul on Player B1 does not by itself cause an automatic ejection when combined with a FF1.\n\nIf Player A1 is injured on the FF1, Coach A will select one of the four remaining players on the court to attempt the free throws. Player A1 may not return to the game, except that he will be permitted to re-enter if he was removed for a concussion evaluation, completed the evaluation required pursuant to the NBA Concussion Policy, and is deemed not to have a concussion.',
    ruleReference: 'Rule 9, Section II (a)(2); Rule 12A, Section V (b); Rule 12B, Section IV; Rule 13, Section I (a)(3); Rule 13, Section II (c)(1–2)',
    casebookReference: 'Page 41, Question 130'
  },
  {
    id: 'flagrant-fouls-131',
    category: 'Flagrant Fouls',
    difficulty: 'veteran',
    scenario: 'On a three-point field goal attempt by Player A1, Player B2 throws Player A2 to the floor away from the ball. After instant replay review, B2’s contact is ruled a Flagrant Foul Penalty 1 (FF1). The three-point attempt by A1 is successful.',
    question: 'With a successful three-point field goal and B2’s contact ruled a Flagrant Foul Penalty 1, how should the play be administered?',
    options: {
      a: 'Player A2 is awarded two free throws to score one additional point, and Team A is awarded the ball out-of-bounds at the free throw line extended; a maximum of four points can be scored on the play',
      b: 'Player A1 is awarded one free throw for the flagrant foul, and Team B is awarded the ball on the baseline as after any successful field goal',
      c: 'Any player on Team A is awarded two free throws, with players lined up on the lane, and play resumes live on the last free throw',
      d: 'Player A2 is awarded one free throw only, and no additional possession is granted because the basket counted'
    },
    correctAnswer: 'a',
    ruling: 'Following an instant replay review, if a FF1 is assessed to Player B2 for throwing Player A2 to the floor on a successful three-point field goal attempt by Player A1, Player A2 is awarded two free throw attempts to score one point. A maximum of four points can be scored on the play (three for the field goal and one from the flagrant foul free throws). The ball is then awarded to Team A out-of-bounds at the free throw line extended.\n\nIf the three-point field goal attempt by Player A1 is unsuccessful, Player A2 is awarded two free throw attempts, and Team A is still awarded the ball out-of-bounds at the free throw line extended.',
    ruleReference: 'Rule 12B, Section IV; Rule 12B, Section V (c); Rule 13, Section I (a)(3–4); Rule 13, Section II (c)(1–2), (d)',
    casebookReference: 'Page 41, Question 131'
  },
  {
    id: 'flagrant-fouls-132',
    category: 'Flagrant Fouls',
    difficulty: 'expert',
    scenario: 'Player A1 is attempting to cause a held ball situation when Player B1 fouls him. Clearly after the personal foul is called and during a dead ball, Player B1 throws Player A1 to the floor.',
    question: 'How should the two separate actions by Player B1 be officiated?',
    options: {
      a: 'Both acts are treated as a single common foul on B1 because the whistle had already sounded',
      b: 'The first act is a common foul, and the throw to the floor is penalized separately as either a technical foul or a flagrant foul depending on the severity; if ruled flagrant, instant replay must be used to determine FF1 vs. FF2',
      c: 'The initial foul is ignored and only a Flagrant Foul Penalty 2 is assessed, with B1 ejected and two free throws plus the ball awarded to Team A',
      d: 'The initial foul becomes a flagrant automatically, and any additional contact after the whistle is disregarded since the ball is dead'
    },
    correctAnswer: 'b',
    ruling: 'The first foul on Player B1 is a common foul. The second foul can be a flagrant or a technical foul depending on the circumstances, assuming each foul is interpreted as a separate act and the second foul is deemed to have occurred during a dead ball. By rule, anyone guilty of illegal contact which occurs during a dead ball may be assessed (1) a technical foul if the contact is deemed unsportsmanlike in nature, or (2) a flagrant foul if unnecessary and/or excessive contact occurs. If a flagrant foul is assessed, instant replay must be reviewed to determine whether a FF1 or FF2 shall be assessed.',
    ruleReference: 'Rule 12A, Section V (i); Rule 12B, Section IV; Rule 13, Section I (a)(3); Rule 13, Section II (c)(1–2)',
    casebookReference: 'Page 42, Question 132'
  },
  {
    id: 'flagrant-fouls-133',
    category: 'Flagrant Fouls',
    difficulty: 'rookie',
    scenario: 'Player A1 is injured on a play where Player B1 has been assessed a Flagrant Foul Penalty 1 following instant replay review. A1 remains in the game long enough to attempt his free throws and then is substituted out before the ensuing throw-in.',
    question: 'After attempting his free throws following a Flagrant Foul Penalty 1, is Player A1 eligible to return to the game later?',
    options: {
      a: 'Yes, A1 may return later because he attempted his own free throws and remains an eligible substitute',
      b: 'No, any player who is injured on a flagrant foul and then substituted out may not re-enter the game',
      c: 'Yes, but only if he re-enters before the next dead ball',
      d: 'No, unless the opposing coach agrees to waive the restriction'
    },
    correctAnswer: 'a',
    ruling: 'Player A1 is injured on a play where Player B1 has been assessed a FF1 following instant replay review. Player A1 attempts his free throws and Player A6 substitutes for him prior to the throw-in. The only restriction for Player A1 is that he attempt his free throws to remain an eligible substitute. Once he has attempted his free throws, he may return to the game later as a legal substitute.',
    ruleReference: 'Rule 3, Section V (a); Rule 9, Section II (a) (Exception 2); Rule 13, Section I (a)(3)',
    casebookReference: 'Page 42, Question 133'
  },
  {
    id: 'flagrant-fouls-134',
    category: 'Flagrant Fouls',
    difficulty: 'expert',
    scenario: 'On a successful two-point field goal by Player A1, a personal foul is called on Player B1. Immediately following B1’s personal foul, a separate flagrant foul by Player B2 against A1 is called and ruled a Flagrant Foul Penalty 1 following replay.',
    question: 'With A1’s two-point field goal successful, a personal foul on B1, and a Flagrant Foul Penalty 1 on B2 against A1, how should play be administered?',
    options: {
      a: 'Player A1 is awarded one free throw for the personal foul only, and Team B is awarded the ball on the baseline as after any score',
      b: 'Player A1 is awarded three free throw attempts to score one additional point, and Team A is awarded the ball out-of-bounds at the free throw line extended; a maximum of three points can be scored by the same team on this play',
      c: 'Any player on Team A is awarded two free throws for the flagrant foul only, with no additional possession because the basket counted',
      d: 'Player A1 is awarded two free throws for the flagrant foul and Team B is awarded the ball, since the personal foul occurred during a successful field goal'
    },
    correctAnswer: 'b',
    ruling: 'On a successful two-point field goal attempt by Player A1, a personal foul is called on Player B1. Immediately following the personal foul on Player B1, a flagrant foul is called on Player B2 (also against Player A1) and ruled a FF1 following instant replay review. Player A1 is awarded three free throw attempts to score one point, and Team A will be awarded the ball out-of-bounds at the free throw line extended. By rule, a maximum of three points can be scored by the same team on a successful two-point field goal attempt.',
    ruleReference: 'Rule 12B, Section IV; Rule 12B, Section V (b); Rule 13, Section I (a)(3)',
    casebookReference: 'Page 42, Question 134'
  },
  {
    id: 'flagrant-fouls-135',
    category: 'Flagrant Fouls',
    difficulty: 'veteran',
    scenario: 'Following a successful field goal by Player A1, a flagrant foul on Player B2 for physical contact with Player A2 is ruled a Flagrant Foul Penalty 1 following instant replay review. The contact occurs either (1) prior to Team B gaining possession of the ball out-of-bounds, or (2) after Team B gains possession of the ball out-of-bounds.',
    question: 'In both timing situations around Team B’s throw-in (before or after the thrower-in has the ball), how is the flagrant foul by B2 on A2 administered?',
    options: {
      a: 'A2 is awarded two free throws and Team B retains the right to inbound as after any score',
      b: 'A2 is awarded one free throw only, and play resumes with a jump ball at center court',
      c: 'A2 is awarded two free throws and Team A is awarded the ball out-of-bounds at the free throw line extended, regardless of whether Team B had already gained possession for the throw-in',
      d: 'Any player on Team A is awarded one free throw, and Team B is charged with a delay-of-game warning'
    },
    correctAnswer: 'c',
    ruling: 'Following a successful field goal by Player A1, a flagrant foul is ruled a FF1 following instant replay and is called on Player B2 for physical contact with Player A2. Whether this action occurs (1) prior to possession of the ball out-of-bounds by Team B or (2) after possession of the ball out-of-bounds by Team B, Player A2 will be awarded two free throw attempts. Play will be resumed by awarding Team A the ball out-of-bounds at the free throw line extended. Possession or non-possession of the ball out-of-bounds does not change this procedure.',
    ruleReference: 'Rule 12B, Section IV; Rule 13, Section I (a)(3)',
    casebookReference: 'Page 42, Question 135'
  },
  {
    id: 'flagrant-fouls-136',
    category: 'Flagrant Fouls',
    difficulty: 'expert',
    scenario: 'Player B1 commits a hard foul against Player A2 which may meet the criteria for a flagrant foul. In frustration, Player A2 then throws the ball at Player B1 and is assessed a technical foul for this act.',
    question: 'Assuming replay confirms B1’s contact is a Flagrant Foul Penalty 2 (FF2) and A2 is assessed a technical foul for throwing the ball, how should the penalties be administered?',
    options: {
      a: 'Team A shoots two free throws for the flagrant foul first, then Team B shoots one free throw for A2’s technical, and Team B gets the ball',
      b: 'Any player on Team B in the game attempts the technical free throw first; then Player A2 is awarded two free throws for the flagrant foul and Team A is awarded the ball at the free throw line extended. If A2 is also ejected, Coach B selects a shooter from Team A’s bench for the flagrant free throws',
      c: 'Only the flagrant foul is penalized; B1 is ejected and A2’s technical is disregarded because he was the offended player',
      d: 'Both fouls offset; no free throws are taken and play resumes with a jump ball at center court'
    },
    correctAnswer: 'b',
    ruling: 'Instant replay should be utilized if the officials are not reasonably certain whether a personal foul called at any time met the criteria for a flagrant foul. The officials also should review the video to determine whether any other players committed unsportsmanlike acts or unnecessary contact immediately prior to and/or immediately following the calling of the foul.\n\nIf a FF2 is assessed and Player B1 is therefore ejected, any of the four remaining players on the floor for Team B will be allowed to attempt the free throw resulting from Player A2’s technical foul, since free throws for a technical must be attempted by a player in the game when the technical is assessed. After Team B attempts the free throw for the technical foul, Player A2 will be awarded two free throw attempts for the flagrant foul and play will be resumed by awarding Team A the ball out-of-bounds at the free throw line extended. If Player A2 also is ejected for his unsportsmanlike act, Team B’s coach shall select the shooter from Team A’s bench to shoot the two free throws for the flagrant foul.',
    ruleReference: 'Rule 12A, Section V (j); Rule 12B, Section IV (b); Rule 13, Section I (a)(3); Rule 13, Section II (c)',
    casebookReference: 'Page 43, Question 136'
  },
  {
    id: 'flagrant-fouls-137',
    category: 'Flagrant Fouls',
    difficulty: 'expert',
    scenario: 'With 0:56 remaining in the third period, Player A1 is fouled by Player B1. A1 reacts and hits B1 in the chest with an elbow. B1 then throws a punch that misses A1, and A1 responds by throwing the ball at B1. Team B has committed five team fouls.',
    question: 'Assuming the play stands exactly as described, how are the personal, flagrant, and technical fouls and resulting free throws and possession administered?',
    options: {
      a: 'B1 is charged with only one personal foul; A1 is charged with a technical; A1 shoots two free throws for the personal foul, and Team A retains the ball at the free throw line extended',
      b: 'B1 is charged with a personal foul and a technical foul for throwing a punch and is ejected; A1 is charged with a Flagrant Foul Penalty 1 and a technical foul for throwing the ball, creating offsetting technicals. A1 is awarded one free throw plus a penalty free throw for B1’s personal foul. Coach A selects a substitute from Team B’s bench to shoot two free throws for A1’s flagrant foul, and Team B retains possession at the free throw line extended',
      c: 'Both players are ejected and no free throws are taken; play resumes with a jump ball at center court because of multiple unsportsmanlike acts',
      d: 'B1 is charged with a Flagrant Foul Penalty 2 only, and A1’s actions are ignored because he was fouled first'
    },
    correctAnswer: 'b',
    ruling: 'The officials will utilize instant replay to review the altercation and determine the appropriate penalties for all those involved, including any other unsportsmanlike acts or unnecessary contact immediately prior to and/or after the punch.\n\nIf the play stands as described, Player B1 is charged with the initial personal foul and a technical foul for throwing a punch and is ejected. Player A1 is charged with a FF1 and a technical foul for throwing the ball at Player B1, thus creating double technical fouls. Player A1 is awarded one free throw attempt plus a penalty free throw for the personal foul on B1. Because Player B1 is ejected, the coach of Team A will select a substitute from Team B’s bench to shoot the two free throws for the flagrant foul by A1, and Team B will retain possession at the free throw line extended.',
    ruleReference: 'Rule 9, Section II (a) (Exception 1); Rule 12A, Section V (o); Rule 12B, Section IV (a); Rule 12B, Section IX (b); Rule 13, Section I (a)(4); Rule 13, Section II (d)',
    casebookReference: 'Page 43, Question 137'
  },
  {
    id: 'flagrant-fouls-138',
    category: 'Flagrant Fouls',
    difficulty: 'expert',
    scenario: 'Player B1 commits a personal foul on Player A1, with the penalty not yet in effect. Player A2 rushes over and gets in B1’s face, and B1 reacts by head-butting A2.',
    question: 'How should this sequence be officiated once instant replay confirms that B1 head-butted A2 (a hostile act)?',
    options: {
      a: 'B1 is charged with a common foul only; the head butt is ignored because no punch connected',
      b: 'B1 is charged with a personal foul and a Flagrant Foul Penalty 2 for the head butt and is ejected; A2 is charged with a technical foul for taunting. Any of the four remaining Team B players may shoot the technical free throw, then A2 attempts two free throws for the flagrant foul, and Team A retains possession at the free throw line extended',
      c: 'Double technical fouls are assessed to A2 and B1 only, with no personal or flagrant fouls and no change of possession',
      d: 'B1 receives only a technical foul for unsportsmanlike conduct, and the ball is awarded to Team B at the point of interruption'
    },
    correctAnswer: 'b',
    ruling: 'A head butt is considered a hostile act. As such, the officials should use instant replay to review the contact and rule it a FF2 and eject Player B1. They also will rule on any other unsportsmanlike acts or unnecessary contact immediately prior to and/or after the head butt. If no other illegal acts are viewed, Player B1 is charged with a personal foul, Player A2 with a technical foul for taunting, and Player B1 with a FF2 and ejected. Any of the four remaining players on Team B may attempt the free throw for the technical foul. Player A2 will attempt two free throws for the flagrant foul, and Team A will retain possession at the free throw line extended.',
    ruleReference: 'Rule 12A, Section V (d)(7); Rule 12B, Section IV (b); Rule 13, Section I (a)(3–4)',
    casebookReference: 'Page 43, Question 138'
  },
  {
    id: 'flagrant-fouls-139',
    category: 'Flagrant Fouls',
    difficulty: 'veteran',
    scenario: 'Player A1 is assessed a flagrant foul between the third and fourth periods. Team A had gained the first possession of the game by rule.',
    question: 'Which team is entitled to the first possession of the fourth period after the flagrant foul between periods?',
    options: {
      a: 'Team A keeps the first possession of the fourth period',
      b: 'Team B is awarded the first possession of the fourth period as part of the penalty for the flagrant foul',
      c: 'The period begins with a jump ball because the foul occurred between periods',
      d: 'Possession is determined by the alternating-possession arrow',
    },
    correctAnswer: 'a',
    ruling: 'Team A will get the first possession of the fourth period. The ball should be put into play by the team entitled to the throw-in in the period which follows. By rule, after a free throw for a foul which occurs during a dead ball which immediately precedes any period, the ball shall be put into play by the team entitled to the throw-in in the period which follows. This includes flagrant and punching fouls.',
    ruleReference: 'Rule 9, Section III (Exception)',
    casebookReference: 'Page 44, Question 139'
  },
  {
    id: 'flagrant-fouls-140',
    category: 'Flagrant Fouls',
    difficulty: 'veteran',
    scenario: 'Player A2 is assessed a hard foul which may meet the criteria for a flagrant foul when he unintentionally elbows Player B2 in the upper chest on an unsuccessful field goal attempt by Player A1. A2’s elbow then glances off B2’s chest and contacts B2 on the chin. Instant replay is used to review the contact.',
    question: 'After replay confirms the elbow glancing from chest to chin, how should the foul on A2 be ruled and administered?',
    options: {
      a: 'The foul is ruled a common shooting foul on A2; B2 is awarded two free throws and Team B gets the ball as after any common foul',
      b: 'The foul is ruled a Flagrant Foul Penalty 1 on A2; B2 is awarded two free throws and possession of the ball out-of-bounds at his free throw line extended on either side of the frontcourt',
      c: 'The foul is ruled a Flagrant Foul Penalty 2 on A2 with automatic ejection; B2 is awarded two free throws and Team B retains the ball at the point of interruption',
      d: 'The foul is deemed incidental contact and no foul is charged; play resumes with a jump ball at center court'
    },
    correctAnswer: 'b',
    ruling: 'Player A2 is assessed a hard foul which may meet the criteria for a flagrant foul when he unintentionally elbows Player B2 in the upper chest area on an unsuccessful field goal attempt by Player A1, and his elbow glances off B2’s chest and contacts him on the chin. Following instant replay review, Player A2 shall be assessed a FF1. Player B2 is awarded two free throw attempts and possession of the ball out-of-bounds at his free throw line extended on either side of the frontcourt.',
    ruleReference: 'Rule 12B, Section IV (a); Rule 13, Section I (a)(3)',
    casebookReference: 'Page 44, Question 140'
  },
  {
    id: 'flagrant-fouls-141',
    category: 'Flagrant Fouls',
    difficulty: 'veteran',
    scenario: 'During a dead ball, Player A3 takes a swing (not a punch) at Player B3 and hits him in the shoulder.',
    question: 'How should this swinging contact by A3 during a dead ball be ruled and penalized?',
    options: {
      a: 'It is a common dead-ball foul; B3 is awarded two free throws and play resumes with a jump ball',
      b: 'It is a technical foul only, with one free throw for any Team B player and Team B retaining the ball',
      c: 'It is ruled a Flagrant Foul Penalty 2; A3 is ejected, B3 is awarded two free throws, and Team B is awarded the ball out-of-bounds at the free throw line extended',
      d: 'No foul is called because the ball was dead and the contact did not involve the head or neck'
    },
    correctAnswer: 'c',
    ruling: 'During a dead ball, Player A3 takes a swing (not a punch) at Player B3 and hits him in the shoulder. Following instant replay review, Player A3 is assessed a FF2. Any player who swings at an opponent and makes contact will be assessed a FF2 and ejected. A flagrant foul may be assessed whether the ball is dead or alive.',
    ruleReference: 'Rule 13, Section I (a)(3); Rule 13, Section II (c); Rule 12B, Section IV (b, c, d)',
    casebookReference: 'Page 44, Question 141'
  },
  {
    id: 'flagrant-fouls-142',
    category: 'Flagrant Fouls',
    difficulty: 'expert',
    scenario: 'Following an unsuccessful field goal attempt by Player A1, a loose ball foul is called on Player A2. Player B2 reacts to that foul by hitting Player A2 with an elbow and is assessed a flagrant foul. It is also the sixth personal foul on Player A2. Instant replay review confirms that B2’s contact is a Flagrant Foul Penalty 2 (FF2). Consider the situation where Team A is in the penalty.',
    question: 'When Team A is in the penalty and B2’s elbow is ruled a Flagrant Foul Penalty 2, how should the penalties and free throws be administered?',
    options: {
      a: 'Because A2 has fouled out, all personal and flagrant penalties are canceled and play resumes with a jump ball at center court',
      b: 'Coach B selects a substitute from Team A’s bench to shoot the free throws for B2’s flagrant foul, and Team B is awarded the ball because they were originally fouled on the loose ball',
      c: 'Coach of Team A selects a substitute from Team B’s bench to shoot the free throws awarded to Player B2 for the loose ball foul, and no free throws are taken for the flagrant because A2 fouled out',
      d: 'Coach of Team A selects a substitute from Team B’s bench to shoot the free throws awarded to Player B2 for the loose ball foul (with no lane line lineup); Coach of Team A then selects an eligible substitute for A2, who attempts two free throws for the flagrant foul, and Team A inbounds the ball at the free throw line extended'
    },
    correctAnswer: 'd',
    ruling: 'Following the ruling on the floor, the officials will use instant replay to review the flagrant foul and to rule on any other unsportsmanlike acts which may have gone unnoticed immediately prior to and/or after the foul. If the foul is ruled a FF2, personal fouls and team fouls are charged to Team A and Team B respectively in both situations.\n\nSituation (1) – Team A in the penalty: The coach of Team A will select a substitute from Team B’s bench to shoot the free throws awarded to Player B2 for the loose ball foul by A2. No players will occupy the free throw lane lines. The coach of Team A will then select an eligible substitute for Player A2, who fouled out. That substitute will attempt the two free throws awarded for the flagrant foul, and Team A will inbound the ball at the free throw line extended.\n\nSituation (2) – Team A not in the penalty: The coach of Team B selects an eligible substitute for Player B2. The coach of Team A selects an eligible substitute to replace Player A2, who fouled out. That substitute attempts the two free throws for the flagrant foul, and Team A inbounds the ball at the free throw line extended.',
    ruleReference: 'Rule 9, Section II (a) (Exception 1 and 3); Rule 13, Section I (a)(4); Rule 13, Section II (c)',
    casebookReference: 'Page 44, Question 142'
  }
];// casebook-questions-batch5.ts
// Free Throws – Casebook Questions 147–170

import { CasebookQuestion } from './types';

export const casebookQuestionsBatch5: CasebookQuestion[] = [
  {
    id: 'freethrows-001',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'Player A1 is preparing to attempt a free throw. He has already taken about seven seconds with the ball in his hands, then throws the ball back to the official because he “needs more time.” There is no confusion about the number of free throws or lane positions – A1 is simply stalling.',
    question: 'How should the official handle Player A1 throwing the ball back in this situation?',
    options: {
      a: 'Accept the ball, reset the 10-second count, and let A1 restart his routine',
      b: 'Refuse to accept the ball and continue the existing 10-second count',
      c: 'Immediately call a technical foul on A1 for delay-of-game',
      d: 'Declare a violation on A1 and award the ball to Team B at the free throw line extended'
    },
    correctAnswer: 'b',
    ruling:
      'If there is confusion about the free throw (line-up, number of attempts, etc.), the official may accept the ball and restart. But if A1 is simply trying to gain extra time, the official should not accept the ball and must continue the 10-second count.',
    ruleReference: 'Rule 9, Section I (a)',
    casebookReference: 'Page 46, Question 147'
  },
  {
    id: 'freethrows-002',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'During a free throw that will remain in play, Player A1 tries to deliberately miss by throwing the ball extremely hard toward the basket in hopes of getting the rebound.',
    question: 'What must happen for this deliberate miss to be considered legal?',
    options: {
      a: 'The ball must hit the backboard and stay inbounds',
      b: 'The ball must hit either the backboard or the rim',
      c: 'The ball must make contact with the ring and all normal free-throw provisions must be observed',
      d: 'The ball only needs to leave the shooter’s hand before 10 seconds elapse'
    },
    correctAnswer: 'c',
    ruling:
      'For a deliberate miss to be legal, the ball must contact the basket ring and all other free-throw provisions must be observed.',
    ruleReference: 'Rule 9, Section I (b)',
    casebookReference: 'Page 47, Question 148'
  },
  {
    id: 'freethrows-003',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'On a free throw that will remain in play, Player A1 purposely fakes his free throw motion without releasing the ball. This causes Players A2, A3, B1 and B2 to enter the free throw lane early.',
    question: 'What is the correct ruling?',
    options: {
      a: 'Double violation; jump ball at center circle between any two opponents',
      b: 'Violation on all players who entered early; re-administer the same free throw',
      c: 'Violation on Player A1; ball awarded to Team B at the free throw line extended',
      d: 'Ignore the fake and administer the free throw as normal'
    },
    correctAnswer: 'c',
    ruling:
      'This is a violation by Player A1 for purposely faking the free throw. The ball is awarded to Team B out-of-bounds at the free throw line extended. A1 does not need to release the ball for this violation to occur, and if it was the first of multiple free throws, any remaining merited free throws are still attempted.',
    ruleReference: 'Rule 9, Section I (c)',
    casebookReference: 'Page 47, Question 149'
  },
  {
    id: 'freethrows-004',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'Player A1 has been awarded a free throw following a successful field goal. As he begins his routine, he loses firm control of the ball without releasing the attempt. Two lane-line players (A2 and B2) instinctively step into the lane.',
    question: 'What should the officials do?',
    options: {
      a: 'Call a violation on A1 for faking the free throw and award the ball to Team B',
      b: 'Call a double violation on A2 and B2 and administer a jump ball',
      c: 'Blow the whistle, reset the players to their original spots, and re-administer A1’s free throw',
      d: 'Charge A1 with a delay-of-game warning and resume with the same free throw'
    },
    correctAnswer: 'c',
    ruling:
      'The official should immediately suspend play, retrieve the ball, and allow A2 and B2 to resume their original positions. The ball is then returned to A1 so he can properly attempt his free throw.',
    ruleReference: 'Rule 9, Section I (i)',
    casebookReference: 'Page 47, Question 150'
  },
  {
    id: 'freethrows-005',
    category: 'Free Throws',
    difficulty: 'expert',
    scenario:
      'During a free throw (to remain in play), Team B has only four players on the court. This is not noticed until after the free throw has been attempted.',
    question:
      'How is this situation penalized once it is discovered that Team B had only four players on the court during the free throw?',
    options: {
      a: 'No penalty; play continues with the existing score and possession',
      b: 'Non-unsportsmanlike technical foul on Team B; if the free throw was successful, it counts and the ball is awarded to Team B after the technical; if it was missed, the ball is awarded to the team that has possession when the violation is discovered after the technical is attempted',
      c: 'Double technical fouls on both teams for failing to have five players on the court',
      d: 'Immediate replay of the free throw with proper player count, nullifying the original attempt'
    },
    correctAnswer: 'b',
    ruling:
      'Each team is responsible for having the proper number of players on the court. If Team B had only four players during a free throw that remains in play, a non-unsportsmanlike technical foul is assessed to Team B when discovered. If the original free throw was successful, it stands and the ball is then awarded to Team B for a throw-in after the technical free throw. If it was unsuccessful, the ball is awarded to the team that has possession at the time the error is discovered after the technical is attempted.',
    ruleReference: 'Rule 12A, Section III (b)',
    casebookReference: 'Page 47, Question 151'
  },
  {
    id: 'freethrows-006',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'Players are lining up for a free throw attempt. The two spaces closest to the basket and the next adjacent spaces on each lane line must be filled according to free-throw rules.',
    question: 'Which of the following describes a legal lane-line lineup for a free throw?',
    options: {
      a: 'The two spaces nearest the basket may be occupied by either team, in any order',
      b: 'The two spaces nearest the basket must be occupied by teammates of the shooter',
      c: 'The two spaces nearest the basket must be occupied by opponents of the shooter, followed by two spaces for teammates of the shooter',
      d: 'All three spaces on each lane line must be filled, with at least two offensive players on each side'
    },
    correctAnswer: 'c',
    ruling:
      'On each lane line, the two spaces nearest the basket must be occupied by opponents of the free throw shooter. The next adjacent spaces must be occupied by the shooter’s teammates. The third adjacent space on each side may or may not be occupied by an opponent. There can never be more than two teammates or three opponents of the shooter on the lane lines.',
    ruleReference: 'Rule 9, Section I (d)',
    casebookReference: 'Page 47, Question 152'
  },
  {
    id: 'freethrows-007',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'On the lane line during A1’s last free throw, defensive players B3 and B5 stand in the first and second lane spaces and extend their arms in front of offensive player A5, trying to block him from moving toward the basket.',
    question: 'Are B3 and B5 allowed to have their arms extended in front of A5 before the ball is released on the free throw?',
    options: {
      a: 'Yes, as long as they are set before the shooter receives the ball',
      b: 'Yes, as long as they do not touch A5',
      c: 'No, lane-line players may not extend themselves in front of an opponent until the ball is released',
      d: 'No, any arm extension by lane players is an automatic technical foul'
    },
    correctAnswer: 'c',
    ruling:
      'Players on the lane lines may not extend themselves in front of an opponent until the ball is released on the free throw attempt.',
    ruleReference: 'Rule 9, Section I (d)',
    casebookReference: 'Page 48, Question 153'
  },
  {
    id: 'freethrows-008',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'A2 is preparing to shoot a free throw that will remain in play. Before the ball is released, players commit various lane-space violations: one offensive player steps into the lane early, one defender steps in early, and in another case a third-space defender incorrectly steps in from behind the three-point line.',
    question:
      'If the official suspends play before the free throw is released because of these lane-space issues, how should the situation be handled?',
    options: {
      a: 'Call lane violations on all offending players and award the ball to the defense',
      b: 'Charge a technical foul to the team with the first violation and re-administer the free throw',
      c: 'Suspend play with no violations charged, correct the players’ positions, and re-administer the same free throw',
      d: 'Automatically declare a double violation and conduct a jump ball at center court'
    },
    correctAnswer: 'c',
    ruling:
      'If an official suspends play before the free throw is released, no lane violations can occur. The official should stop play, correct the players’ positions (including sending any improperly positioned players back to legal spots), and then re-administer the same free throw.',
    ruleReference: 'Rule 9, Section I (i)',
    casebookReference: 'Page 48, Question 154'
  },
  {
    id: 'freethrows-009',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'Player A1 drives to the basket, gathers the ball, and then has his arms clamped by defender B1 so that he cannot release the ball, even though he is clearly in his shooting motion.',
    question: 'How many free throws should be awarded to A1?',
    options: {
      a: 'No free throws; side-out for Team A',
      b: 'One free throw, because the ball was never released',
      c: 'Two free throw attempts, because A1 is considered in the act of shooting',
      d: 'Free throws only if the ball leaves A1’s hand'
    },
    correctAnswer: 'c',
    ruling:
      'A1 does not need to release the ball to be considered in the act of shooting. Once he has gathered and continues his shooting motion, he is a shooter. If illegally prevented from releasing the ball, he is awarded two free throws.',
    ruleReference: 'Rule 4, Section XI',
    casebookReference: 'Page 48, Question 155'
  },
  {
    id: 'freethrows-010',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'On A2’s final free throw, both A1 and B1 violate the lane restrictions during the attempt.',
    question: 'How should this double violation on the final free throw be administered?',
    options: {
      a: 'Re-administer the same free throw to A2',
      b: 'Ignore both violations and let the result of the free throw stand',
      c: 'Award one substitute free throw to A2',
      d: 'No point can be scored and a jump ball is held at center circle between any two opponents'
    },
    correctAnswer: 'd',
    ruling:
      'When both teams violate on a free throw and it is the final attempt, no points can be scored and the game is resumed with a jump ball at center circle between any two opponents in the game.',
    ruleReference: 'Rule 6, Section V (a)(3); Rule 9, Section I (a) Penalty',
    casebookReference: 'Page 48, Question 156'
  },
  {
    id: 'freethrows-011',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'On a free throw by A1, teammates A2 and A3 choose to stand just outside the three-point line rather than on the lane lines. Defenders B2 and B3 want to take defensive positions closer to the lane, inside of A2 and A3.',
    question:
      'What are the restrictions on players who are not lined up in the lane spaces during a free throw that will remain in play?',
    options: {
      a: 'They may stand anywhere on the court as long as they are outside the paint',
      b: 'They must remain behind the three-point line and above the free throw line extended until the ball is released',
      c: 'Defenders may stand inside the three-point line while offensive players must stay behind it',
      d: 'All non-lane players must stand in their team’s backcourt until the free throw is released'
    },
    correctAnswer: 'b',
    ruling:
      'All players who are not lined up on the lane lines must remain behind the three-point line and above the free throw line extended until the ball is released by the shooter. If opponents want the same spot, the shooter’s teammate has first choice.',
    ruleReference: 'Rule 9, Section I (d)',
    casebookReference: 'Page 48, Question 157'
  },
  {
    id: 'freethrows-012',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'While attempting to block A1’s field goal attempt, B1 contacts A1’s shooting hand at the exact same time the hand is in contact with the ball.',
    question: 'Is this contact by B1 a personal foul?',
    options: {
      a: 'Yes, any contact with the shooter’s hand above the wrist is a foul',
      b: 'Yes, because the hand is never considered part of the ball',
      c: 'No, the shooter’s hand in contact with the ball is considered part of the ball',
      d: 'No, but it automatically results in a jump ball'
    },
    correctAnswer: 'c',
    ruling:
      'The hand (or that part of the hand) in contact with the ball is considered part of the ball. Contact in this situation is not a personal foul.',
    ruleReference: 'Rule 12B, Section I (e)',
    casebookReference: 'Page 48, Question 158'
  },
  {
    id: 'freethrows-013',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'On a free throw by A1, B1 occupies a marked lane space. As soon as A1 releases the ball, B1 steps off the lane line to secure a better rebounding position.',
    question: 'Is B1’s movement after the ball is released a violation?',
    options: {
      a: 'Yes, lane players must hold their positions until the ball hits the ring or backboard',
      b: 'Yes, unless the ball has already reached the rim',
      c: 'No, lane players may move once the ball is released; only the shooter is restricted',
      d: 'No, because defensive players may move at any time on the free throw'
    },
    correctAnswer: 'c',
    ruling:
      'Once the free throw shooter releases the ball, any player on the lane lines may move and enter the key area. Only the shooter is restricted from stepping over the plane of the free throw line until the ball contacts the ring or backboard or the free throw ends.',
    ruleReference: 'Rule 6, Section III (a)(3); Rule 9, Section I (b)',
    casebookReference: 'Page 49, Question 159'
  },
  {
    id: 'freethrows-014',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'Player A1 scores a field goal. During the flight of the ball, B2 fouls A2. A2 is awarded free throws. On A2’s final free throw, which will remain in play, B2 illegally interferes with the ball in two different ways: (1) catching or deflecting the free throw before it reaches the basket, and (2) touching the ball while it is bouncing on the rim.',
    question: 'How should each of B2’s actions on A2’s final free throw be administered?',
    options: {
      a: 'In both cases, the free throw is simply repeated with no point scored',
      b: 'In both cases, one point is awarded and Team A retains possession at the free throw line extended',
      c: 'In case (1), one point is awarded and A2 receives another free throw; in case (2), one point is awarded and Team B is awarded the ball as after any score',
      d: 'In case (1), no point is awarded and the ball is live; in case (2), goaltending is called and A2 is given an extra free throw'
    },
    correctAnswer: 'c',
    ruling:
      'If B2 catches or deflects the free throw before it reaches the basket, one point is awarded to A2 and he is given an additional free throw. If B2 touches the ball while it is on the rim, one point is awarded to A2 and the ball is awarded to Team B on the baseline as after any score.',
    ruleReference: 'Rule 9, Section I (g and h)',
    casebookReference: 'Page 49, Question 160'
  },
  {
    id: 'freethrows-015',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'Player A1 has been awarded two free throws. After his first attempt, officials realize that Team A and/or Team B had only four players on the court during that first free throw.',
    question:
      'How should officials handle discovering that one or both teams had only four players on the court after A1’s first free throw (with the ball not yet in play)?',
    options: {
      a: 'Assess a non-unsportsmanlike technical foul immediately to any team with four players',
      b: 'Ignore the situation and allow play to continue, because the ball was not yet live',
      c: 'No penalty for the first free throw; if the same error is discovered after the second free throw is released, assess a technical foul to the offending team(s)',
      d: 'Nullify A1’s first free throw and replay it with the correct number of players'
    },
    correctAnswer: 'c',
    ruling:
      'Because the ball will not be in play following the first free throw attempt, there is no penalty for discovering that a team had only four players on the court. However, if the same situation is discovered after the second free throw has been released, a technical foul is assessed to any offending team, and if both teams violate, no technical free throws are attempted.',
    ruleReference: 'Rule 12A, Section III (b) (Exception)',
    casebookReference: 'Page 49, Question 161'
  },
  {
    id: 'freethrows-016',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'During the first of multiple free throws, shooter A1 steps over the plane of the free throw line before the ball hits the rim or backboard or the free throw otherwise ends.',
    question: 'Is A1’s early step over the free throw line a violation?',
    options: {
      a: 'Yes, the shooter may not step over the line early on any free throw attempt',
      b: 'No, this is only a violation on the last free throw',
      c: 'No, as long as the ball hits the rim',
      d: 'Yes, but only if the defense complains'
    },
    correctAnswer: 'a',
    ruling:
      'The shooter may not violate the free throw line restriction on any free throw attempt. Stepping over the plane of the line before the ball hits the ring or backboard is a violation.',
    ruleReference: 'Rule 9, Section I (b); Rule 9, Section I (a) Penalty',
    casebookReference: 'Page 49, Question 162'
  },
  {
    id: 'freethrows-017',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'A1 is fouled on a successful field goal attempt and is awarded one free throw. As he releases the free throw, B2 disconcerts the shooter and A2 enters the key too soon.',
    question: 'What is the correct ruling when both disconcertion by B2 and a lane violation by A2 occur on the same free throw?',
    options: {
      a: 'Award a substitute free throw to A1 due to disconcertion and ignore A2’s violation',
      b: 'Count the free throw if it is successful, since both teams violated',
      c: 'Call a double violation and resume play with a jump ball at center circle; no point can be scored',
      d: 'Call only the first violation observed and administer the appropriate penalty'
    },
    correctAnswer: 'c',
    ruling:
      'Because both teams violate (disconcertion by B2 and a lane violation by A2) on the same free throw, this is a double violation. No point can be scored and play resumes with a jump ball at center circle between any two opponents in the game.',
    ruleReference: 'Rule 9, Section I (a)',
    casebookReference: 'Page 49, Question 163'
  },
  {
    id: 'freethrows-018',
    category: 'Free Throws',
    difficulty: 'expert',
    scenario:
      'A1 is fouled in the act of shooting by B1 with the game clock showing :00.0 in the fourth period and the score tied. Officials must determine whether the foul occurred before or after the period ended and whether the ball was released in time.',
    question:
      'How should officials use replay and administer the free throws when a shooting foul occurs with :00.0 on the clock at the end of regulation?',
    options: {
      a: 'If the clock shows :00.0, the period is over and no foul can ever be administered',
      b: 'Use instant replay to determine if the foul occurred and/or the ball was released before time expired; if so, award the appropriate free throws and adjust the clock as needed',
      c: 'Automatically award A1 two free throws after the horn because the foul occurred in the act of shooting',
      d: 'Ignore replay; base the decision only on the initial call on the floor'
    },
    correctAnswer: 'b',
    ruling:
      'Officials must use instant replay to determine (1) whether the foul occurred with time remaining and (2) whether the ball was released before the clock expired. If the foul occurred before time expired, free throws are awarded and time is placed back on the clock per the replay. If the foul occurs after the clock expires but the ball was released in time, free throws are administered accordingly. If the game clock expires before the ball is released, no common foul can be administered because the period has ended.',
    ruleReference: 'Rule 13, Section I (a)(2); Rule 13, Section II (b)',
    casebookReference: 'Page 50, Question 164'
  },
  {
    id: 'freethrows-019',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'A1 has been awarded two free throws. On the first attempt, Team B is erroneously allowed to have two defenders in the third lane-space position (i.e., too many players from B on the lane line). After the first shot, an official notices and has one defender vacate the spot, then allows A1 to shoot a substitute free throw for the first attempt.',
    question: 'Is the official correct in granting a substitute free throw for the first attempt in this situation?',
    options: {
      a: 'Yes, any illegal lane-line lineup requires replaying the free throw',
      b: 'Yes, but only if the first attempt was missed',
      c: 'No, the violation is ignored because the ball will not remain in play after the first free throw',
      d: 'No, instead a technical foul must be assessed to Team B'
    },
    correctAnswer: 'c',
    ruling:
      'Although players are responsible for knowing the lineup rule, the official was also at fault for allowing two players in the third spot. Because the ball will not remain in play after the first free throw, the violation is ignored and the first attempt is not replayed. If the same violation occurs on a one-shot foul or the last of multiple free throws and the attempt is unsuccessful, a substitute free throw is then awarded.',
    ruleReference: 'Rule 9, Section I (d) Penalty',
    casebookReference: 'Page 50, Question 165'
  },
  {
    id: 'freethrows-020',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'Team A is in the penalty. A1 has just attempted his final free throw. While the ball is in the air, B2 commits a personal foul on A2.',
    question:
      'How many free throws should A2 receive in each case when B2 fouls while A1’s final free throw is in the air?',
    options: {
      a: 'One free throw whether A1’s free throw is successful or not',
      b: 'One free throw if A1’s free throw is successful; one plus the penalty free throw if A1’s free throw is unsuccessful',
      c: 'Two free throws if A1’s free throw is successful; three free throws if it is unsuccessful',
      d: 'No free throws; the ball is simply awarded to Team A out-of-bounds'
    },
    correctAnswer: 'b',
    ruling:
      'If A1’s final free throw is successful, A2 receives one free throw. If A1’s final free throw is unsuccessful, A2 receives one free throw plus one penalty free throw because Team A is already in the penalty.',
    ruleReference: 'Rule 12B, Section I (Penalty 3 and 5)',
    casebookReference: 'Page 50, Question 166'
  },
  {
    id: 'freethrows-021',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'A1 is dribbling under the basket and behind the backboard when B1 nudges him out-of-bounds. A foul is called on B1. As A1 is falling out-of-bounds behind the backboard, he tries a shot that would have to go directly behind the backboard to score.',
    question:
      'If this is Team B’s first team foul of the period, how many free throws are awarded to A1 for this play?',
    options: {
      a: 'Two free throws because A1 was in the act of shooting',
      b: 'One free throw because it is Team B’s first team foul',
      c: 'No free throws; the ball is awarded to Team A at the free throw line extended',
      d: 'Two free throws only if the ball actually enters the basket'
    },
    correctAnswer: 'c',
    ruling:
      'No free throws are awarded. The ball is awarded to Team A at the free throw line extended on either side of the court. Because a shot that must travel directly behind the backboard cannot score, it is not considered a field goal attempt. This is different from a foul in front of the backboard where momentum carries the shooter behind it.',
    ruleReference: 'Rule 8, Section II (b)',
    casebookReference: 'Page 50, Question 167'
  },
  {
    id: 'freethrows-022',
    category: 'Free Throws',
    difficulty: 'rookie',
    scenario:
      'A1 secures an offensive rebound of an unsuccessful field goal attempt. While still in the air as he attempts another field goal, A1 is fouled by B1 and the shot is unsuccessful. The question is whether Team B is in its fourth or fifth team foul of the period.',
    question:
      'How many free throws is A1 awarded whether this is Team B’s fourth team foul or fifth team foul of the period?',
    options: {
      a: 'Two free throws in both situations',
      b: 'One free throw on the fourth team foul and two free throws on the fifth team foul',
      c: 'No free throws on the fourth team foul; two free throws on the fifth team foul',
      d: 'Three free throws in both situations because A1 was airborne'
    },
    correctAnswer: 'a',
    ruling:
      'In both cases, A1 is in the act of shooting when fouled and the try is unsuccessful. Therefore, he is awarded two free throws whether this is Team B’s fourth or fifth team foul.',
    ruleReference: 'Rule 4, Section XI; Rule 12B, Section I (Penalty 4)',
    casebookReference: 'Page 50, Question 168'
  },
  {
    id: 'freethrows-023',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'With 2:57 remaining in the fourth period, a personal foul is called on B2 against A2 before the ball is released by A1 on a throw-in. The foul clearly occurs prior to the ball being released on the throw-in.',
    question: 'How should this foul by B2 be administered?',
    options: {
      a: 'Common foul on B2; Team A receives the ball out-of-bounds at the original spot',
      b: 'Team-control foul on Team B; ball awarded to Team A at the free throw line extended',
      c: 'Away-from-the-play foul: any player on Team A shoots one free throw and Team A inbounds at the original throw-in spot with full privileges',
      d: 'Technical foul on B2 with two free throws and possession to Team A at midcourt'
    },
    correctAnswer: 'c',
    ruling:
      'Because the foul occurs prior to the ball being released on the throw-in in the last two minutes, it is an away-from-the-play foul. Any player in the game on Team A attempts one free throw, and Team A then inbounds the ball at the original throw-in spot with all privileges. If there is doubt about whether the ball had been released, instant replay is used to determine timing.',
    ruleReference: 'Rule 12B, Section X (a)(3); Rule 13, Section I (a)(13)',
    casebookReference: 'Page 51, Question 169'
  },
  {
    id: 'freethrows-024',
    category: 'Free Throws',
    difficulty: 'veteran',
    scenario:
      'A1 is in the act of shooting a two-point field goal when B1 pushes A2 into A1, causing contact with the shooter. Team B is in the penalty.',
    question: 'How should this play be administered when B1 pushes A2 into A1, the shooter?',
    options: {
      a: 'Personal foul on A2 for illegal contact with the shooter; two free throws for A1',
      b: 'Personal foul on B1. If A1 scores, A2 shoots one free throw; if A1 misses, A1 shoots two free throws',
      c: 'Double foul on A2 and B1 with no free throws and a jump ball at center court',
      d: 'Common foul on B1 with only A1 shooting two free throws regardless of whether the field goal is successful'
    },
    correctAnswer: 'b',
    ruling:
      'A personal foul is assessed to B1 for pushing A2 into A1. If A1’s field goal is successful, A2 is awarded one free throw regardless of the penalty situation. If the field goal attempt is unsuccessful, A1 is awarded two free throws.',
    ruleReference: 'Rule 12B, Section I (Penalty 3 and 4)',
    casebookReference: 'Page 51, Question 170'
  }
];// casebook-questions-gameclock.ts
// Game Clock – Casebook Questions 171–184

import { CasebookQuestion } from './types';

export const casebookQuestionsGameClock: CasebookQuestion[] = [
  {
    id: 'gameclock-001',
    category: 'Game Clock & Timing',
    difficulty: 'rookie',
    scenario:
      'With 3.9 seconds remaining in the third period, A1 and B1 are in a jump ball. A1 “steals the tap” (taps the ball before it reaches its apex / before it is legally tappable) and is called for a violation. When the whistle blows, the game clock reads 3.1 seconds.',
    question: 'How should the game clock be handled after A1’s “steal-the-tap” violation?',
    options: {
      a: 'Leave the game clock at 3.1 seconds because the ball was tossed and time ran',
      b: 'Reset the game clock to 3.9 seconds because the violation occurred before the ball was legally tapped',
      c: 'Reset the game clock to 4.0 seconds and administer a re-jump',
      d: 'Subtract one second as a delay-of-game and set the game clock to 2.9 seconds'
    },
    correctAnswer: 'b',
    ruling:
      'Time may not be reduced from the shot or game clock if the violation occurs before the ball is legally tapped. The clock is reset to the time at the toss – 3.9 seconds.',
    ruleReference: 'Rule 2, Section VIII (b); Rule 5, Section VIII (a)(3)',
    casebookReference: 'Page 51, Question 171'
  },
  {
    id: 'gameclock-002',
    category: 'Game Clock & Timing',
    difficulty: 'rookie',
    scenario:
      'You are crew chief and want to confirm when the game clock should start in three basic situations: (a) a jumped ball to begin a period, (b) a throw-in from out-of-bounds, and (c) a missed free throw that will remain in play.',
    question: 'When does the game clock properly start in each of these situations?',
    options: {
      a: '(a) When the ball leaves the referee’s hand; (b) when it leaves the thrower’s hand; (c) when the ball hits the ring',
      b: '(a) When the ball is legally tapped by a jumper; (b) when the ball is legally touched by any player on the court; (c) when the ball is legally touched by any player on the court',
      c: '(a) When the ball reaches its apex; (b) when the thrower releases the ball; (c) when the rebound is secured',
      d: '(a) When either jumper touches the ball, legal or not; (b) when the thrower crosses the boundary plane; (c) when the ball hits the floor'
    },
    correctAnswer: 'b',
    ruling:
      'On a jump ball, the clock starts when the ball is legally tapped by one of the jumpers. On both a throw-in and a missed free throw, the game clock starts when the ball is legally touched by any player on the court.',
    ruleReference: 'Rule 2, Section VIII (b, c, d); Rule 5, Section VIII',
    casebookReference: 'Page 51, Question 172'
  },
  {
    id: 'gameclock-003',
    category: 'Game Clock & Timing',
    difficulty: 'rookie',
    scenario:
      'You are explaining a simple guideline to a new official about when the game clock should be stopped.',
    question: 'Which of the following is the simplest correct way to describe when the game clock stops?',
    options: {
      a: 'Only when the ball goes out-of-bounds or an official calls a timeout',
      b: 'Any time the ball is dead for any reason',
      c: 'Each time an official sounds the whistle, and on certain made field goals late in each period as specified by rule',
      d: 'Only under replay review or during timeouts'
    },
    correctAnswer: 'c',
    ruling:
      'The clock stops (1) each time an official sounds the whistle, (2) in the last minute of the first, second, and third periods on successful field goals, and (3) in the last two minutes of the fourth period and any overtimes on successful field goals.',
    ruleReference: 'Rule 5, Section V',
    casebookReference: 'Page 51, Question 173'
  },
  {
    id: 'gameclock-004',
    category: 'Game Clock & Timing',
    difficulty: 'expert',
    scenario:
      'Team A has the ball in its backcourt as the period nears its end. A1 throws a pass toward A2. While the pass is in the air, the horn sounds to end the period. After the horn, B1 deflects the pass and the ball goes into Team B’s basket.',
    question: 'How should this “after the horn” deflection and score be handled?',
    options: {
      a: 'Automatically count the basket for Team B since the ball became dead only when it passed through the hoop',
      b: 'Automatically wave off the basket because the horn had sounded before the deflection',
      c: 'Use instant replay to determine whether B1 deflected the ball before or after the period ended; the basket counts only if the deflection occurred before time expired',
      d: 'Administer a jump ball at center court to begin the next period and ignore the result of the play'
    },
    correctAnswer: 'c',
    ruling:
      'Officials must use instant replay. If the Replay Center Official determines that the deflection toward the basket occurred before the period ended, the goal counts; otherwise it does not.',
    ruleReference: 'Rule 4, Section XI; Rule 13, Section I (a)(1)',
    casebookReference: 'Page 51, Question 174'
  },
  {
    id: 'gameclock-005',
    category: 'Game Clock & Timing',
    difficulty: 'rookie',
    scenario:
      'With 2:01 remaining in the fourth period, Team A scores a field goal. As the ball passes through the net, the game clock rolls from 2:01 to 2:00.',
    question: 'Should the official timer stop the game clock at 2:00 in this situation?',
    options: {
      a: 'Yes, because the last two minutes of the fourth period require the clock to stop when the ball is not live',
      b: 'No, the clock should only stop in the last minute of the fourth period on made baskets',
      c: 'No, the clock continues to run until a timeout or whistle',
      d: 'Yes, but only if a team immediately requests a timeout'
    },
    correctAnswer: 'a',
    ruling:
      'In the last two minutes of the fourth period and overtime, the game clock stops whenever the ball is not actually in play after a successful field goal.',
    ruleReference: 'Rule 2, Section VIII (e); Rule 4, Section XIII; Rule 5, Section V (b)(2)',
    casebookReference: 'Page 51, Question 175'
  },
  {
    id: 'gameclock-006',
    category: 'Game Clock & Timing',
    difficulty: 'rookie',
    scenario:
      'Team A scores a field goal with 1:04 left in the first period. Before the ensuing throw-in, the official timer stops the clock at 1:00.',
    question: 'Is the timer correct to stop the clock at 1:00 in this first-period situation?',
    options: {
      a: 'Yes, in the last minute of the first, second, and third periods the clock stops when the ball is not in play',
      b: 'No, clock stoppages inside one minute apply only to the fourth period',
      c: 'No, the clock must continue to run except for timeouts and fouls',
      d: 'Yes, but only if the scoring team requests a timeout'
    },
    correctAnswer: 'a',
    ruling:
      'In the last minute of the first, second, and third periods, the game clock shall be stopped whenever the ball is not actually in play.',
    ruleReference: 'Rule 2, Section VIII (e); Rule 5, Section V (b)(1)',
    casebookReference: 'Page 51–52, Question 176'
  },
  {
    id: 'gameclock-007',
    category: 'Game Clock & Timing',
    difficulty: 'veteran',
    scenario:
      'A1 scores a field goal with 31.0 seconds left in the period. Later in the same possession, B2 attempts a shot with 1 second left on the shot clock that fails to hit the ring. A1 secures the rebound and immediately calls timeout. The game clock shows 5.0 seconds when the timeout is granted.',
    question: 'How should the officials handle the game clock in this shot-clock-violation situation?',
    options: {
      a: 'Leave the game clock at 5.0 seconds because that is when the timeout was granted',
      b: 'Reset the game clock to 7.0 seconds to reflect the time at which the shot clock violation actually occurred',
      c: 'Reset the game clock to 6.0 seconds, splitting the difference between the horn and the timeout',
      d: 'Cancel the timeout and resume from the shot clock violation only'
    },
    correctAnswer: 'b',
    ruling:
      'When the shot-clock horn sounds at 0 and the shot fails to hit the ring, the violation occurs at that moment. If the clock has continued to run to 5.0, it must be reset to 7.0 to reflect when the violation actually occurred.',
    ruleReference: 'Rule 7, Section II (d)(2)',
    casebookReference: 'Page 52, Question 177'
  },
  {
    id: 'gameclock-008',
    category: 'Game Clock & Timing',
    difficulty: 'veteran',
    scenario:
      'Team B scores a field goal with 27.0 seconds left, still trailing 121–120. Team A advances the ball into the frontcourt. With 4.0 seconds on the game clock, A1 throws the ball high toward the ceiling to run out the clock. Before the ball returns to the floor, both the shot clock and game clock reach 0.0.',
    question: 'How should the officials adjust the game clock in this situation?',
    options: {
      a: 'Let the period end with 0.0 on the clock since the ball was tossed before time expired',
      b: 'Reset the game clock to 4.0 seconds and give Team B the ball',
      c: 'Reset the game clock to 3.0 seconds to reflect the actual time of the shot-clock violation',
      d: 'Order a jump ball at center court with 4.0 seconds remaining'
    },
    correctAnswer: 'c',
    ruling:
      'By rule, when a shot-clock violation occurs and extra time runs off the game clock, officials must reset to the proper time of the violation. In this case, the clock is reset to 3.0 seconds.',
    ruleReference: 'Rule 7, Section II (d)(2)',
    casebookReference: 'Page 52, Question 178'
  },
  {
    id: 'gameclock-009',
    category: 'Game Clock & Timing',
    difficulty: 'veteran',
    scenario:
      'After Team A scores with 1.0 second left in the fourth period, Team B calls timeout and elects to advance the ball. On the ensuing inbounds pass, B1’s throw-in is kicked by A1 before any player on the court has legally touched the ball.',
    question: 'What is the correct procedure for the game clock and possession after the kicked ball on the throw-in?',
    options: {
      a: 'Start the game clock at the moment of the kick and let it run to 0.0; Team B retains the ball',
      b: 'Game clock remains at 1.0 second and Team B retains possession at the original throw-in spot',
      c: 'Reset the game clock to 2.0 seconds because of the violation and give the ball to Team A',
      d: 'Game clock remains at 1.0 second, but the ball is awarded to Team A at midcourt'
    },
    correctAnswer: 'b',
    ruling:
      'The clock does not start until the ball is legally touched by a player inbounds. Since A1 kicks the throw-in before any legal touch, the game clock remains at 1.0 second and Team B keeps the ball at the original advancement spot.',
    ruleReference: 'Rule 2, Section VIII (c); Rule 5, Section VIII (a)(2); Rule 6, Section I (h)',
    casebookReference: 'Page 52, Question 179'
  },
  {
    id: 'gameclock-010',
    category: 'Game Clock & Timing',
    difficulty: 'expert',
    scenario:
      'With 0.1 seconds remaining in the fourth period, A1 is throwing the ball inbounds after a timeout. The pass goes to A2, who catches the ball and then attempts a field goal before the horn.',
    question: 'What is the ruling on A2’s catch-and-shoot attempt with 0.1 seconds on the clock?',
    options: {
      a: 'Count the field goal if the ball leaves A2’s hand before 0.0 on the game clock',
      b: 'Wave off the attempt; with 0.1 seconds, only a tip-in is legal, and control by A2 ends the period immediately upon the catch',
      c: 'Allow the shot only if A2 is outside the three-point line',
      d: 'Administer a replay to check timing; if inconclusive, award two free throws to A2'
    },
    correctAnswer: 'b',
    ruling:
      'With 0.1 (or 0.2) seconds remaining, the only legal scoring play is a tip-in or direct tap. As soon as A2 secures possession of the ball, the period is over, so a catch-and-shoot is not permitted.',
    ruleReference: 'Comments on the Rules, Section II (L)',
    casebookReference: 'Page 52, Question 180'
  },
  {
    id: 'gameclock-011',
    category: 'Game Clock & Timing',
    difficulty: 'expert',
    scenario:
      'With 0.1 seconds remaining in the third period, A1 throws a “high lob” inbounds pass near the rim. A2 tips or dunks the lob and the ball goes in before the clock reaches 0.0.',
    question: 'Is this tip/dunk by A2 with 0.1 seconds remaining a legal field goal?',
    options: {
      a: 'Yes, if the lob is adjacent to the rim and A2 only tips or dunks the ball without controlling it',
      b: 'No, any made basket with less than 0.3 on the clock must be waved off',
      c: 'Yes, but only if A2 controls the ball fully and then shoots',
      d: 'No, because any throw-in must begin with at least 0.3 seconds for a score to count'
    },
    correctAnswer: 'a',
    ruling:
      'With 0.1 or 0.2 seconds remaining, a player may legally tip or “slam dunk” a lob thrown adjacent to the rim. A controlled catch-and-shot is not allowed, but a tip from anywhere on the floor is legal as long as the ball is only tapped.',
    ruleReference: 'Comments on the Rules, Section II (L)',
    casebookReference: 'Page 52, Question 181'
  },
  {
    id: 'gameclock-012',
    category: 'Game Clock & Timing',
    difficulty: 'expert',
    scenario:
      'With 0.2 seconds remaining in an overtime period, A2 secures possession of an unsuccessful free throw attempt while still in mid-air and immediately signals for a timeout.',
    question: 'How should this “airborne possession and timeout” be administered with 0.2 seconds on the game clock?',
    options: {
      a: 'Grant the timeout because the player had possession, even if airborne',
      b: 'Deny the timeout but allow play to continue until 0.0',
      c: 'Rule that the period has ended because less than 0.3 seconds cannot expire after a player secures possession',
      d: 'Put 0.3 seconds back on the clock and grant the timeout'
    },
    correctAnswer: 'c',
    ruling:
      'No less than 0.3 seconds must expire when a player secures possession of the ball. Because A2 secures possession when only 0.2 seconds remain, the period is considered over and no timeout can be granted.',
    ruleReference: 'Comments on the Rules, Section II (L)',
    casebookReference: 'Page 52, Question 182'
  },
  {
    id: 'gameclock-013',
    category: 'Game Clock & Timing',
    difficulty: 'veteran',
    scenario:
      'After Team B scores with 1:50 left in the fourth period, A is inbounding from the baseline. The inbounds pass is kicked by B2 before any player inbounds touches the ball.',
    question:
      'What is the correct procedure for (1) the game clock, (2) the shot clock, and (3) the throw-in spot after B2 kicks the inbounds pass?',
    options: {
      a: '(1) Game clock runs; (2) shot clock stays as is; (3) inbound at nearest sideline',
      b: '(1) Game clock remains at 1:50; (2) shot clock is reset to 24 seconds; (3) Team A inbounds again on the baseline with all privileges',
      c: '(1) Game clock is reset to 2:00; (2) shot clock stays where it was; (3) inbound at midcourt',
      d: '(1) Game clock is reset to 1:49; (2) shot clock resets only if Team A requests; (3) inbound at free throw line extended'
    },
    correctAnswer: 'b',
    ruling:
      'Since the inbounds pass was never legally touched, the game clock remains at 1:50. The kick resets the shot clock to 24 seconds, and Team A retains the baseline throw-in with all running-baseline privileges.',
    ruleReference: 'Rule 2, Section VIII (c); Rule 6, Section I (h)',
    casebookReference: 'Page 52, Question 183'
  },
  {
    id: 'gameclock-014',
    category: 'Game Clock & Timing',
    difficulty: 'veteran',
    scenario:
      'After a made basket with 27.2 seconds left in the game, A2 dribbles into the frontcourt. A2 then requests a timeout with 23.0 seconds on the game clock and 19 seconds on the shot clock. Officials consider resetting the game clock to 3.2 seconds, mirroring a previous shot-clock reset scenario.',
    question:
      'Are officials correct to reset the game clock based purely on the difference between the game clock and shot clock in this situation?',
    options: {
      a: 'Yes, they should reset the game clock to 3.2 seconds since that is the difference between 27.2 and 23.0',
      b: 'Yes, they should always reset the game clock when the shot clock and game clock differ by more than four seconds',
      c: 'No, the game clock is only reset in connection with a shot-clock violation situation; here it remains at 23.0',
      d: 'No, the game clock should instead be reset to 24.0 seconds to match the shot clock'
    },
    correctAnswer: 'c',
    ruling:
      'The game clock is only reset in the specific case of a shot-clock violation where time continues to run. There is no violation here, just a standard timeout request, so the clock remains at 23.0.',
    ruleReference: 'Rule 7, Section II (d)',
    casebookReference: 'Page 52, Question 184'
  }// casebook-questions-batch7.ts

import { CasebookQuestion } from './types';

export const casebookQuestionsBatch7: CasebookQuestion[] = [
  {
    id: 'goaltending-001',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'veteran',
    scenario:
      'On a throw-in, the ball is passed so that it enters the area directly above the basket cylinder before any player on the court touches it. As it hovers above the ring, a player from either team reaches in and bats or catches the ball.',
    question: 'What is the correct ruling when a throw-in passes over the basket and is touched above the cylinder?',
    options: {
      a: 'Goaltending on the defense – award two points to the throwing team',
      b: 'Basket interference on whichever team touches the ball first – no points can score',
      c: 'No violation – the ball is live and either team may play it since it has not come from the court',
      d: 'Automatic jump ball because the ball entered the cylinder on a throw-in'
    },
    correctAnswer: 'c',
    ruling:
      'This is not goaltending or basket interference. For those violations to occur, a live ball from the playing court must enter the cylinder area after having been legally touched on the court. A throw-in over the basket is treated like any other throw-in and any player may try to gain possession without penalty.',
    ruleReference: 'Rule 11, Section I (f)',
    casebookReference: 'Page 54, Question 185'
  },
  {
    id: 'goaltending-002',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'rookie',
    scenario:
      'Both teams are rebounding at Team A’s basket. Player B1 accidentally taps the ball up into the cylinder above the rim. While the ball is within the cylinder, Player B2 bats it away.',
    question: 'What is the correct ruling when a defender bats a ball out of the cylinder after a teammate accidentally tapped it there?',
    options: {
      a: 'Legal play – no violation because there was no field goal attempt',
      b: 'Goaltending violation – award two points to Team A',
      c: 'Offensive basket interference – ball to Team B on the baseline',
      d: 'Jump ball at center circle between any two players'
    },
    correctAnswer: 'b',
    ruling:
      'This is a goaltending violation. Even though a field goal attempt did not cause the ball to be in the cylinder, once a live ball is in the cylinder over the basket, neither team may touch it.',
    ruleReference: 'Rule 11, Section I (b)',
    casebookReference: 'Page 54, Question 186'
  },
  {
    id: 'goaltending-003',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'rookie',
    scenario:
      'Player A1 drives and is rising to dunk. While the ball is still in A1’s hands, moving downward toward the rim as part of the dunk motion, defender B1 blocks the ball out of A1’s hands.',
    question: 'Is B1’s block on A1’s attempted dunk considered goaltending?',
    options: {
      a: 'Yes, because the ball was moving downward toward the rim',
      b: 'Yes, because any contact above the rim on a dunk is goaltending',
      c: 'No, because the ball was still in A1’s hands and had not started a downward flight as a try',
      d: 'No, but it is basket interference instead of goaltending'
    },
    correctAnswer: 'c',
    ruling:
      'This is a legal defensive play and not goaltending. The rule prohibits touching a field-goal attempt on its downward flight toward the basket. There is no downward flight until the ball leaves the shooter’s hands.',
    ruleReference: 'Rule 11, Section I (f)',
    casebookReference: 'Page 54, Question 187'
  },
  {
    id: 'goaltending-004',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'rookie',
    scenario:
      'On a shot attempt by Player A1, a personal foul is called on the defender. After the whistle, while the ball is still in the air, Player B blocks the shot as part of his defensive motion.',
    question: 'Is the block by Player B after the whistle considered goaltending?',
    options: {
      a: 'Yes, any attempt to block the ball after a foul is goaltending',
      b: 'No, it is a legal continuation of the defensive motion as long as the goaltending rules themselves are not violated',
      c: 'Yes, but only if the ball is above the rim',
      d: 'No, but it is a technical foul for unsportsmanlike conduct'
    },
    correctAnswer: 'b',
    ruling:
      'A blocked shot by the defense after the whistle in this situation is part of a continuous defensive movement. As long as the defender does not violate the goaltending rule, the play is legal.',
    ruleReference: 'Rule 11, Section I',
    casebookReference: 'Page 54, Question 188'
  },
  {
    id: 'goaltending-005',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'rookie',
    scenario:
      'On a jump ball tap by Player A1, the ball travels toward A1’s basket, is on its downward flight, and clearly has a chance to score.',
    question: 'Once a live ball tapped from a jump ball is on a downward path toward the basket with a chance to score, may either team touch the ball?',
    options: {
      a: 'Yes, either team may try to tip or catch the ball',
      b: 'Only the offensive team may touch it',
      c: 'No, neither team may touch the ball once it has a chance to score',
      d: 'Only the defensive team may touch it, but not above the rim'
    },
    correctAnswer: 'c',
    ruling:
      'When a live ball from the playing court (including a jump ball tap) is in flight and has a chance to score, neither team is permitted to touch the ball. Touching it in this situation would be goaltending or basket interference.',
    ruleReference: 'Rule 4, Section XI; Rule 11, Section I (f)',
    casebookReference: 'Page 54, Question 189'
  },
  {
    id: 'goaltending-006',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'expert',
    scenario:
      'With 1:23 remaining in the fourth period, Player A1 is fouled by Player B1 while in the act of shooting. While the ball is in the air, Player B2 is called for goaltending, but the official is unsure whether the ball had actually started its downward flight toward the basket when B2 touched it.',
    question:
      'After instant replay review of the potential goaltending on B2, how should the officials administer the play based on what the replay shows?',
    options: {
      a: 'Always award two free throws to A1 and ignore the goaltending, regardless of the replay outcome',
      b: 'If replay shows the ball had not yet started downward, award A1 two free throws; if replay confirms downward flight or is inconclusive, score two points for A1 and award one free throw',
      c: 'Automatically score two points for A1 and do not award any free throws, since goaltending was called on the floor',
      d: 'Always go with the original on-court goaltending call; replay cannot change the ruling in this situation'
    },
    correctAnswer: 'b',
    ruling:
      'The officials should use instant replay to determine the status of the ball. If clear and conclusive visual evidence shows the ball had not started its downward flight, the goaltending is removed and Player A1 is awarded two free throws for the shooting foul. If replay confirms the ball had started its downward flight—or if the replay is inconclusive—two points are awarded to Player A1 for goaltending and he receives one free throw attempt.',
    ruleReference: 'Rule 11, Section I (Penalty); Rule 13, Section I (a)(12); Rule 13, Section II (l)',
    casebookReference: 'Page 54, Question 190'
  },
  {
    id: 'goaltending-007',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'veteran',
    scenario:
      'Player A1’s field goal attempt is on its downward flight toward the basket ring. However, the officials judge that the ball will clearly not touch the ring. Player B2 or Player A2 bats the ball away or gains possession.',
    question: 'What is the correct ruling when a ball on a downward flight clearly has no chance to touch the ring?',
    options: {
      a: 'Goaltending, because any ball on a downward path toward the basket may not be touched',
      b: 'Basket interference, because the ball is above the rim',
      c: 'No violation, because the ball does not have a chance to score',
      d: 'Jump ball at center circle because the officials cannot know for sure whether it might have scored'
    },
    correctAnswer: 'c',
    ruling:
      'A live ball from the playing court must have a chance to score for goaltending or basket interference to occur. If the officials determine that the ball will not touch the ring and has no chance to score, either team may legally touch or secure the ball.',
    ruleReference: 'Rule 11, Section I (f)',
    casebookReference: 'Page 55, Question 191'
  },
  {
    id: 'goaltending-008',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'rookie',
    scenario:
      'Player A1 is fouled in the act of shooting a two-point field goal. The try enters the cylinder above the rim, and then offensive teammate A2 touches the ball while it is still in the cylinder, committing offensive basket interference.',
    question: 'After A2 commits offensive basket interference on A1’s shot, how many free throws are awarded to A1?',
    options: {
      a: 'No free throws – the interference nullifies the foul',
      b: 'One free throw for A1',
      c: 'Two free throws for A1',
      d: 'Three free throws for A1'
    },
    correctAnswer: 'c',
    ruling:
      'Because the offensive basket interference by A2 nullifies the possibility of scoring the goal, the play is treated as any other unsuccessful field-goal attempt by a fouled shooter. A1 is awarded two free throw attempts.',
    ruleReference: 'Rule 11, Section I (Penalty)',
    casebookReference: 'Page 55, Question 192'
  },
  {
    id: 'goaltending-009',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'veteran',
    scenario:
      'Player A1 attempts a field goal that hits the ring and continues in play. Either just before or as the ball hits the ring, defender B1 makes contact with the net while attempting to block or contest the shot.',
    question: 'Is B1’s contact with the net automatically a goaltending violation on A1’s field goal attempt?',
    options: {
      a: 'Yes, touching the net while the ball is on or near the rim is always goaltending',
      b: 'Yes, but only if B1 is also touching the backboard',
      c: 'No, net contact is only a violation if it is the primary cause of the shot being missed',
      d: 'No, net contact is never considered in goaltending rulings'
    },
    correctAnswer: 'c',
    ruling:
      'Merely touching or pulling the net is not, by itself, goaltending. The contact with the net must be such that it is the primary cause of the field-goal attempt being missed. The same standard applies to slapping the backboard.',
    ruleReference: 'Rule 11, Section I (h)',
    casebookReference: 'Page 55, Question 193'
  },
  {
    id: 'goaltending-010',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'veteran',
    scenario:
      'On an unsuccessful two-point field goal attempt by Player A1, defensive rebounder B2 is pushed in the back by Player A2 while the ball is still in the cylinder. The push causes B2 to contact the ball while it is in the cylinder.',
    question: 'What is the correct ruling when defender B2 is pushed into goaltending while the ball is in the cylinder?',
    options: {
      a: 'Play on – there can be no violation because the defender was pushed',
      b: 'Loose-ball foul on A2 only; no score since the ball was interfered with by the defense',
      c: 'Score two points for Team A and charge A2 with a loose-ball foul; free throws depend on the penalty situation',
      d: 'Double foul on A2 and B2; resume with a jump ball'
    },
    correctAnswer: 'c',
    ruling:
      'Two points are awarded to Team A for a goaltending violation. Player A2 is charged with a loose-ball foul for pushing B2 into the ball. Whether free throws are awarded depends on the team-foul penalty situation.',
    ruleReference: 'Rule 11, Section I (b)',
    casebookReference: 'Page 55, Question 194'
  },
  {
    id: 'goaltending-011',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'expert',
    scenario:
      'Player A1’s field goal attempt is on its downward flight toward the basket when the game clock expires, ending the period. After the horn sounds, the ball is touched while still in the air by (1) offensive player A3, or (2) defensive player B3.',
    question:
      'After time expires on A1’s shot, what is the correct ruling if the ball is then touched in the air by A3 versus by B3?',
    options: {
      a: 'In both cases the ball is dead and the period simply ends with no score',
      b: 'If touched by A3, the basket counts; if touched by B3, it does not count',
      c: 'If touched by A3, the period ends with no score; if touched by B3, the field goal is ruled successful',
      d: 'In both cases it is defensive goaltending and the basket is awarded'
    },
    correctAnswer: 'c',
    ruling:
      'If an offensive player (A3) touches the ball after the horn, the period ends when that touch occurs and no goal can be scored. If a defensive player (B3) touches the ball after the horn on a shot that still has a chance to score, the field goal is ruled successful.',
    ruleReference: 'Rule 5, Section III (a)(1 and 3); Rule 11, Section I (f)',
    casebookReference: 'Page 55, Question 195'
  },
  {
    id: 'goaltending-012',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'rookie',
    scenario:
      'On an attempted “slam dunk,” Player A1’s try hits him on the head before it clears the net, causing the ball to reverse direction and go back up through the basket ring from below.',
    question: 'What is the correct ruling when A1’s dunk attempt hits his head and the ball goes back up through the basket?',
    options: {
      a: 'Score two points for Team A because the ball passed through the ring',
      b: 'No basket; offensive basket interference on A1, ball to Team B at the free-throw line extended',
      c: 'Jump ball at center circle because the play is unusual',
      d: 'Technical foul on A1 for kicking or striking the ball with his body'
    },
    correctAnswer: 'b',
    ruling:
      'Player A1 is charged with offensive basket interference and the ball is awarded to Team B at the free-throw line extended. The ball going back up through the ring from below on the shooter’s contact constitutes offensive interference.',
    ruleReference: 'Rule 5, Section I (a); Rule 11, Section I (i)',
    casebookReference: 'Page 55, Question 196'
  },
  {
    id: 'goaltending-013',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'rookie',
    scenario:
      'Player A1’s field goal attempt is rolling on the basket ring and then drops off the outside edge of the ring. Immediately after it falls off the outside edge, Player A2 or Player B2 touches the ball.',
    question: 'Once a shot has rolled off the outside edge of the ring, may either team touch the ball without a violation?',
    options: {
      a: 'No, touching the ball is still goaltending until it hits the floor',
      b: 'Yes, the try has ended, so any player may touch the ball without violation',
      c: 'Only the defensive team may touch it without violating',
      d: 'Only the offensive team may touch it without violating'
    },
    correctAnswer: 'b',
    ruling:
      'Since the ball has dropped off the outside edge of the basket ring, the field-goal attempt has ended and any player may touch the ball without committing goaltending or basket interference.',
    ruleReference: 'Rule 11, Section I (a)',
    casebookReference: 'Page 56, Question 197'
  },
  {
    id: 'goaltending-014',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'veteran',
    scenario:
      'On a field goal or free-throw attempt by Player A1, the ball is rolling around the top or inside edge of the basket ring. During this, the basket ring itself is contacted by (1) defender B1, or (2) offensive player A2.',
    question: 'What is the correct ruling if the ring is contacted while the ball is on the rim?',
    options: {
      a: 'In both cases it is basket interference on the offensive team',
      b: 'In both cases it is goaltending on the defensive team',
      c: 'Goaltending if B1 contacts the ring and offensive basket interference if A2 contacts the ring',
      d: 'No violation unless the contact clearly causes the shot to miss'
    },
    correctAnswer: 'c',
    ruling:
      'When the ball is on the basket ring, contacting the ring by a defender (B1) is goaltending, and contacting the ring by an offensive player (A2) is basket interference. Officials do not have to judge whether that contact changed the result of the try.',
    ruleReference: 'Rule 11, Section I (a)',
    casebookReference: 'Page 56, Question 198'
  },
  {
    id: 'goaltending-015',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'veteran',
    scenario:
      'During a field goal attempt by Player A1, defender B2 grasps the basket in an attempt to block the shot. The shot itself is actually blocked cleanly by another defender, B1, preventing B2 from touching the ball. While A1 still has the ball in his possession, B2 is hanging on the ring.',
    question: 'What is the correct penalty when B2 grasps the ring while attempting to defend A1’s shot?',
    options: {
      a: 'No call – the shot was blocked cleanly by B1',
      b: 'Goaltending on B2, award two points to Team A',
      c: 'Non-unsportsmanlike technical foul on B2; ball awarded to Team A at the free-throw line extended',
      d: 'Flagrant foul on B2 for grasping the ring during a shot attempt'
    },
    correctAnswer: 'c',
    ruling:
      'A non-unsportsmanlike technical foul is assessed against Player B2 for grasping the basket. The ball is awarded to Team A at the free-throw line extended on either side of the court.',
    ruleReference: 'Rule 12A, Section IV (b)',
    casebookReference: 'Page 56, Question 199'
  },
  {
    id: 'goaltending-016',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'veteran',
    scenario:
      'Following an unsuccessful shot by Player A1, teammate A5 attempts to rebound and, to prevent injury to another player, grabs the rim and hangs briefly. While A5 is still hanging on the rim, Player A2 rebounds the ball and immediately shoots a successful basket.',
    question: 'What is the correct ruling when a teammate scores while A5 is still hanging on the rim?',
    options: {
      a: 'Score the basket because A5 was hanging only to prevent injury',
      b: 'Offensive basket interference; cancel the basket and award the ball to Team B',
      c: 'No violation; resume play with a throw-in for Team B after the score',
      d: 'Technical foul on A5 but the basket by A2 counts'
    },
    correctAnswer: 'b',
    ruling:
      'This is offensive basket interference because Player A5 was hanging on the rim when the ball entered the basket. It is irrelevant whether the ball hit the rim or went in clean, whether the rim was off-center, or whether A5 was hanging to protect from injury.',
    ruleReference: 'Rule 11, Section I (h)',
    casebookReference: 'Page 56, Question 200'
  },
  {
    id: 'goaltending-017',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'expert',
    scenario:
      'Defender B5 jumps on a shot fake and, as he comes down, pulls the rim down so that it does not return to its normal position. Player A5 then goes up and releases a shot while the rim is still down. Only after the release do the officials notice the rim malfunction.',
    question: 'How should the officials rule when B5 pulls the rim off-center and A5’s shot is released before the problem is noticed?',
    options: {
      a: 'Suspend play immediately with a jump ball because the basket is not legal',
      b: 'Ignore the rim issue and judge the shot strictly on whether it goes in',
      c: 'Call goaltending on B5 because he caused the rim to be down when the shot was taken',
      d: 'Order a replay of the possession after the rim is fixed'
    },
    correctAnswer: 'c',
    ruling:
      'Since B5 was responsible for the rim being down and the failure of the rim to return to its normal position was not noticed until after the ball was released, goaltending is the correct call. The officials cannot suspend play retroactively in this situation.',
    ruleReference: 'Rule 11, Section I (h)',
    casebookReference: 'Page 56, Question 201'
  },
  {
    id: 'goaltending-018',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'veteran',
    scenario:
      'Player A1 attempts a dunk that hits the back of the rim and bounces straight up. To prevent injury, A1 hangs on the rim as the ball rises. While A1 is still hanging, the ball comes down and goes through the basket.',
    question: 'What is the correct ruling when the ball goes in while A1 is still hanging on the rim after a missed dunk?',
    options: {
      a: 'Score two points because the original dunk attempt caused the ball to enter',
      b: 'Basket interference on A1; cancel the score',
      c: 'No violation because A1 was hanging only to prevent injury',
      d: 'Technical foul on A1 but the basket counts'
    },
    correctAnswer: 'b',
    ruling:
      'This is basket interference. The dunk attempt and immediate follow-through ended when A1 initially missed, and he was still hanging on the rim when the ball later entered the basket. The reason he was hanging does not affect the ruling.',
    ruleReference: 'Rule 11, Section I (a)',
    casebookReference: 'Page 56, Question 202'
  },
  {
    id: 'goaltending-019',
    category: 'Goaltending (Basket Interference)',
    difficulty: 'expert',
    scenario:
      'Player A1 attempts a dunk that hits the back of the rim and bounces straight up. A1 hangs on the rim and bends it to an off-center position. While the rim remains off-center, the ball comes down and passes through the basket.',
    question:
      'What is the correct ruling if the ball passes through while the rim is still off-center from A1 hanging on it?',
    options: {
      a: 'Score two points because the ball passed through from above',
      b: 'No points can be scored while the rim is off-center; the basket is cancelled',
      c: 'Score the basket but also assess a technical foul on A1 for hanging',
      d: 'Award two points only if the ball does not touch the rim again on the way down'
    },
    correctAnswer: 'b',
    ruling:
      'No points can be scored if the rim is in an off-center position when the ball passes through. Had A1 released the rim and it returned to its normal position before the ball passed through, two points would be scored.',
    ruleReference: 'Rule 11, Section I (h)',
    casebookReference: 'Page 57, Question 203'
  }
];

];

// casebook-questions-batch8.ts

import { CasebookQuestion } from './types';

export const casebookQuestionsBatch8: CasebookQuestion[] = [
  {
    id: 'hostile-acts-001',
    category: 'Hostile Acts',
    difficulty: 'expert',
    scenario:
      'During a timeout, players from Team A are walking toward their bench. Player A3 and a second-row assistant coach from Team B angrily exchange words, and the second-row assistant coach shoves A3. After regaining his balance, A3 aggressively tries to pursue the assistant coach and has to be restrained by teammates and other Team B assistants. While being held back, A3 is pushed in the back by Team B’s trainer.',
    question:
      'How should the officials administer this situation under the NBA rules on hostile acts and bench decorum?',
    options: {
      a: 'Immediately assess one double technical on A3 and the second-row assistant coach and resume play with a jump ball',
      b: 'Eject only the second-row assistant coach for leaving his seat; no replay is permitted on bench personnel',
      c: 'Use instant replay to identify everyone involved, determine each person’s level of involvement, and assess technicals and possible ejections accordingly; then award the ball back to the team that had possession when the technical was assessed',
      d: 'Charge a team technical to Team B only, with no individual penalties, and resume at the point of interruption'
    },
    correctAnswer: 'c',
    ruling:
      'Officials must use instant replay to (1) identify all players, coaches, trainers, and bench personnel involved and their actions before and after the altercation, (2) determine each individual’s level of involvement, and (3) assess the appropriate penalties. Any bench person (including trainers and second-row assistants) may receive a technical and may be ejected for a single unsportsmanlike act. After any technical free throw(s), the ball is awarded to the team that had possession at the time the technical was assessed, regardless of whether the free throw is made.',
    ruleReference: 'Rule 12A, Section V (a, b, h); Rule 13, Section I (a)(4); Rule 13, Section II (d)',
    casebookReference: 'Page 57, Question 204'
  },
  {
    id: 'hostile-acts-002',
    category: 'Hostile Acts',
    difficulty: 'expert',
    scenario:
      'During a game at Team A’s arena, Player B3 dives into the stands trying to save a ball and ends up among the spectators. A nearby fan (Fan #1) holds out his cell phone very close to B3’s face to record him. Player B3 responds by forcefully swiping the phone out of Fan #1’s hand, leading to unrest among nearby fans.',
    question:
      'How should officials handle Player B3’s action toward the spectator and the overall situation?',
    options: {
      a: 'Ignore the contact because the fan initiated the interaction; resume play with a throw-in',
      b: 'Automatically eject Player B3 with no replay and award Team A two free throws and the ball',
      c: 'Use instant replay to review the hostile act against a spectator, determine the appropriate penalty (technical and/or ejection), notify arena security to restore order, and report the incident to the League Office',
      d: 'Charge a delay-of-game warning to Team B and instruct security to remove Fan #1 only'
    },
    correctAnswer: 'c',
    ruling:
      'Any hostile act by a player against a spectator (including forcefully knocking away an object) requires instant replay to determine the nature and level of the act and the correct penalty. Player B3 can receive an unsportsmanlike technical foul and may be ejected depending on the circumstances. Arena security must be involved to restore order and evaluate fan consequences, and the entire incident must be documented by the crew chief and reported to the League Office.',
    ruleReference: 'Rule 12A, Section V (a, b, h); Rule 13, Section I (a)(4); Rule 13, Section II (d)',
    casebookReference: 'Page 57, Question 205'
  },
  {
    id: 'inadvertent-001',
    category: 'Inadvertent Whistle',
    difficulty: 'veteran',
    scenario:
      'Player A1 attempts a field goal that hits the basket ring. A1 then secures the rebound. An official mistakenly blows the whistle and calls traveling on A1, believing the ball never hit the ring. After conferring with the crew, the officials realize the whistle was in error and there was no violation.',
    question:
      'How should the officials administer the play, and what are the limits on timeouts and substitutions following this inadvertent whistle?',
    options: {
      a: 'Resume with a jump ball at center circle; both teams may be granted timeouts and make substitutions',
      b: 'Award the ball to Team B at the nearest sideline; either team may call timeout and substitute freely',
      c: 'Treat it as an inadvertent whistle, return the ball to Team A on the sideline nearest the point of interruption, allow only Team A to request a timeout, and allow substitutions only if a timeout is granted',
      d: 'Award the ball back to A1 at the spot of the rebound with no opportunity for any timeout or substitution by either team'
    },
    correctAnswer: 'c',
    ruling:
      'Because the whistle was erroneous, this becomes an inadvertent whistle and a suspension-of-play situation. Team A, which had clear possession when the whistle sounded, retains the ball at the sideline nearest the point of interruption. Only the team in possession at the time of the inadvertent whistle (Team A) may be granted a timeout, and no substitutions are allowed unless a timeout is taken.',
    ruleReference: 'Rule 2, Section V (d); Rule 3, Section V (k)(3); Rule 4, Section XIV',
    casebookReference: 'Page 58, Question 206'
  },
  {
    id: 'inadvertent-002',
    category: 'Inadvertent Whistle',
    difficulty: 'expert',
    scenario:
      'With 24.8 seconds remaining in the fourth quarter, Team A trails 119–114. Player B4 misses a free throw, and no one from Team B is near the rebound. In an effort to preserve time, Player A1 waits to pick up the ball, which remains easily within his reach. However, the game clock erroneously starts even though no player has touched the ball. The officials then blow the whistle to stop play. At the time of the whistle, A1 still has not touched the ball, and no players from either team are close to it.',
    question:
      'How should the officials administer this timing error and team possession?',
    options: {
      a: 'Declare a jump ball at center circle because no team had official possession when the whistle sounded',
      b: 'Award the ball to Team B since the free throw was theirs and the rebound was never controlled',
      c: 'Award possession to Team A, since A1 would have imminently secured the ball, reset the game clock to 24.8, and reset the shot clock to 24 seconds',
      d: 'Let the time run and resume play with a throw-in for Team A at the sideline, keeping the clock and shot clock where they stopped'
    },
    correctAnswer: 'c',
    ruling:
      'Because Team A clearly would have imminently gained possession (no defenders nearby and the ball easily within A1’s grasp), possession is awarded to Team A. The game clock is reset to 24.8 seconds—the time of the original error—and the shot clock is reset to 24 seconds.',
    ruleReference: 'Rule 4, Section XIV; Rule 5, Section VIII; Rule 7, Section VI (a)',
    casebookReference: 'Page 58, Question 207'
  }
{
  id: 'fighting-120',
  category: 'Fighting',
  difficulty: 'veteran',
  scenario:
    'During a dead ball situation, Players A1 and B1 become involved in a fight. After reviewing the video to determine the appropriate penalties, the officials assess technical fouls on both A1 and B1 for fighting and eject both players.',
  question: 'After both players are assessed technical fouls for fighting and ejected during a dead ball, how is the ball put back into play?',
  options: {
    a: 'Award one free throw to each team and resume play with a jump ball at center circle',
    b: 'Award two free throws to Team A and then give Team B the ball at the point of interruption',
    c: 'Resume play at the same spot where it would have been had the altercation never taken place, with no free throws awarded',
    d: 'Charge a flagrant technical foul to both players and resume with Team A inbounding at midcourt'
  },
  correctAnswer: 'c',
  ruling:
    'When Players A1 and B1 are involved in a fight during a dead ball, and both are assessed technical fouls for fighting and ejected after replay review, no free throws are awarded for the fighting fouls. Play is resumed at the same spot where it would have been had the altercation never taken place.',
  ruleReference: 'Rule 12A, Section VI (a and c)',
  casebookReference: 'Page 37, Question 120'
},
{
  id: 'fighting-121',
  category: 'Fighting',
  difficulty: 'rookie',
  scenario:
    'During an on-court altercation, players from the bench area start to come onto the court, appearing to try to stop or help teammates involved in the fight.',
  question:
    'Is there a penalty for players leaving the bench area during a fight, even if they appear to be trying to stop or help a teammate?',
  options: {
    a: 'No, as long as they act as peacemakers and do not throw punches, there is no penalty',
    b: 'Yes, all players not in the game must remain in the immediate vicinity of their bench during an altercation and are subject to automatic in-game technical fouls if they step onto the court',
    c: 'Yes, all players not in the game must remain in the immediate vicinity of their bench; violators are subject to suspension without pay (minimum one game) and fines, and if they become involved in the altercation they may also be assessed an unsportsmanlike technical foul and/or ejected. Coaches may come onto the floor to act as peacemakers',
    d: 'No, because leaving the bench during a dead ball is always legal provided they return before play resumes'
  },
  correctAnswer: 'c',
  ruling:
    'During an altercation, all players who are not participating in the game must remain in the immediate vicinity of their bench. Violators are subject to suspension without pay for a minimum of one game and may be fined up to $100,000 by the League. If a bench player who has left the bench area becomes involved in the altercation, he may also be assessed an unsportsmanlike technical foul and/or ejected from the game. The head coach and assistant coaches are permitted to leave the bench area to act as peacemakers.',
  ruleReference: 'Rule 12A, Section VII (c)',
  casebookReference: 'Page 37, Question 121'
},
{
  id: 'fighting-122',
  category: 'Fighting',
  difficulty: 'expert',
  scenario:
    'Player A1 is fouled by Player B1 and is awarded two free throw attempts. Before A1 attempts his free throws, A1 and B1 become involved in a fight.',
  question:
    'If instant replay confirms that A1 should be ejected for fighting before attempting his free throws, how are the free throws and subsequent play administered?',
  options: {
    a: 'The foul by B1 is cancelled because A1 is ejected for fighting; play resumes with a jump ball at center court',
    b: 'Any player on Team A in the game attempts A1’s free throws, and Team A retains the ball for a throw-in at the free throw line extended; no further penalties are assessed',
    c: 'The coach of Team B selects a substitute from Team A’s bench to attempt A1’s two free throws; after those free throws, play resumes as after any normal free throw attempt, with no free throws awarded for the fighting foul',
    d: 'Team B is awarded two free throws for A1’s fighting foul, followed by Team B possession at the point of interruption; A1’s original free throws are cancelled'
  },
  correctAnswer: 'c',
  ruling:
    'After replay, the officials identify all involved in the altercation and determine the proper penalties. If Player A1 is ejected for fighting before attempting his awarded free throws, the coach of Team B selects a substitute from Team A’s bench to attempt the two free throws that A1 would have taken. Play then resumes as it would after any other free throw attempt, whether the last free throw is made or missed. No free throws are awarded specifically for the fighting foul itself.',
  ruleReference:
    'Rule 9, Section II (a) (Exception 1); Rule 13, Section I (a)(4); Rule 13, Section II (d)',
  casebookReference: 'Page 37, Question 122'
},
{
  id: 'fighting-123',
  category: 'Fighting',
  difficulty: 'veteran',
  scenario:
    'Following instant replay review, Players A1 and B1 are ejected from the game for fighting. When the fight began, Player A1 had team control of the ball in his frontcourt.',
  question:
    'After A1 and B1 are ejected for fighting while Team A had frontcourt possession, how is play resumed and what happens to the shot clock?',
  options: {
    a: 'Award Team A two free throws for the fighting fouls and then give Team A the ball on the endline with the shot clock reset to 24',
    b: 'No free throws are attempted; Team A is awarded the ball on the sideline nearest the point of interruption (no nearer than the free throw line extended), and the shot clock remains the same or is reset to 14 seconds, whichever is greater',
    c: 'No free throws are attempted; Team B is awarded the ball at midcourt with the shot clock reset to 24',
    d: 'Both fighting fouls offset; resume with a jump ball at center circle and the original shot clock time'
  },
  correctAnswer: 'b',
  ruling:
    'No free throws are attempted as a penalty for the fighting fouls. Because Team A had frontcourt team control when the fight occurred, play is resumed by awarding Team A the ball out-of-bounds on the sideline nearest the point of interruption, but no nearer to the baseline than the free throw line extended. The shot clock remains the same as when play was interrupted or is reset to 14 seconds, whichever is greater.',
  ruleReference:
    'Rule 7, Section IV (e)(3); Rule 12A, Section VI (a and c); Rule 13, Section I (a)(4); Rule 13, Section II (d)',
  casebookReference: 'Page 37, Question 123'
},
{
  id: 'fighting-124',
  category: 'Fighting',
  difficulty: 'expert',
  scenario:
    'Player A2 is dribbling the ball in the backcourt with 20 seconds remaining on the shot clock when Players A1 and B1 become involved in a fight. Replay is used to review the altercation.',
  question:
    'After replay confirms that A1 and B1 are both assessed technical fouls for fighting and ejected while A2 was dribbling in the backcourt with 20 seconds on the shot clock, how is play resumed, what happens to the shot clock, and what is the new eight-second “magic number”?',
  options: {
    a: 'Team A inbounds at the point of interruption with the shot clock reset to 24 and a new eight-second count, making the magic number 16',
    b: 'Team A inbounds at the point of interruption with the shot clock remaining at 20 and no new eight-second count because the fouls are technical on both teams',
    c: 'Team A inbounds on the sideline nearest the point of interruption (no nearer than the free throw line extended), the shot clock remains at 20, Team A is granted a new eight-second count in the backcourt because the defensive team was assessed a technical foul, and the new magic number is 11',
    d: 'Team B is awarded the ball at midcourt because both teams received technical fouls; the shot clock is reset to 14 and no new eight-second count applies'
  },
  correctAnswer: 'c',
  ruling:
    'After replay, both A1 and B1 are assessed technical fouls for fighting and are ejected. No free throws are attempted for the fighting fouls. Team A will inbound the ball on the sideline nearest the point of interruption, but no nearer to the baseline than the free throw line extended. The shot clock remains at 20 seconds (because it is greater than 14). Since the defensive team (Team B) was assessed a technical foul, Team A is awarded a new eight-second count to advance the ball from the backcourt. With 20 seconds on the shot clock and a new eight-second count, the “magic number” for an eight-second violation becomes 11.',
  ruleReference:
    'Rule 4, Section VI (f)(3); Rule 7, Section IV (e)(3); Rule 10, Section VIII (Exception 1); Rule 12A, Section VI (a and c); Rule 13, Section I (a); Rule 13, Section II (d)',
  casebookReference: 'Page 37, Question 124'
},
{
  id: 'fighting-125',
  category: 'Fighting',
  difficulty: 'veteran',
  scenario:
    'Players A1 and B1 are involved in a fight. After reviewing the play with instant replay, the officials determine that A1 was the clear aggressor and responsible for starting the incident, while B1 simply retaliated after A1 initiated the fight.',
  question:
    'Once replay shows that A1 was the aggressor and B1 retaliated, what fouls and penalties should be assessed to A1 and B1?',
  options: {
    a: 'Assess a technical foul for fighting and eject only A1 as the aggressor; allow B1 to remain in the game because he was provoked',
    b: 'Assess a flagrant foul on A1 and a common personal foul on B1, and allow both to remain in the game with a final warning',
    c: 'Assess technical fouls to both A1 and B1 for fighting and eject both players immediately; the officials may note that A1 was the aggressor, but this does not prevent B1 from being ejected for retaliating',
    d: 'Assess no fouls because the players share responsibility, but report the incident to the League Office'
  },
  correctAnswer: 'c',
  ruling:
    'Technical fouls for fighting are assessed to both Player A1 and Player B1, and both players are ejected immediately. The officials may note that A1 was the aggressor, but this has no bearing on whether B1 should be ejected. There is no justification for fighting in an NBA game; a player who chooses to retaliate can expect to be subject to the same disciplinary penalties as the aggressor.',
  ruleReference:
    'Rule 12A, Section VI (a); Rule 13, Section I (a)(4); Rule 13, Section II (d); Comments on the Rules, Section II (k)',
  casebookReference: 'Page 37, Question 125'
},
{
  id: 'fighting-126a',
  category: 'Fighting',
  difficulty: 'expert',
  scenario:
    'Player A1 has a clear-path-to-the-basket in Team A’s frontcourt and is fouled by Player B1 while not in the act of shooting (a clear-path foul situation). Immediately after the foul, A1 punches B1.',
  question:
    'In this clear-path situation where B1 fouls A1 and then A1 punches B1, how are the clear-path foul and punching foul administered, including free throws and possession?',
  options: {
    a: 'Assess only a clear-path foul on B1: any player on Team A shoots two free throws and Team A retains the ball at the point of interruption; the punch is penalized later by the League only',
    b: 'Assess a clear-path foul on B1 and a punching foul on A1; Team A is awarded two free throws for the clear-path foul, shot by a substitute from Team A’s bench chosen by Coach B, with no players lined up on the lane; then B1 is awarded two free throws for the punching foul, and Team B is awarded the ball at the free throw line extended',
    c: 'Assess offsetting technical fouls for fighting with no clear-path penalty; resume with a jump ball at center circle and no free throws',
    d: 'Assess a flagrant foul on B1 and ignore the punch by A1 because he was the offended player; Team A shoots two free throws and keeps the ball'
  },
  correctAnswer: 'b',
  ruling:
    'In Situation (1), a clear-path foul is assessed to Player B1, and Player A1 is charged with a punching foul and ejected. Team A is awarded two free throw attempts for the clear-path foul. Because A1 has been ejected, the coach of Team B selects the substitute from Team A’s bench who will attempt the two free throws, and no players line up on the lane. After those free throws, Player B1 then attempts two free throws for the punching foul, and Team B is awarded the ball at the free throw line extended for the ensuing throw-in.',
  ruleReference:
    'Rule 9, Section II (a) (Exception 1); Rule 12A, Section VI (a); Rule 12B, Section IX (a and b); Rule 13, Section I (a)(4); Rule 13, Section II (d)',
  casebookReference: 'Page 38, Question 126 (1)'
},
{
  id: 'fighting-126b',
  category: 'Fighting',
  difficulty: 'expert',
  scenario:
    'Player A1 has a clear-path-to-the-basket in Team A’s frontcourt and is fouled by Player B1 while not in the act of shooting (a clear-path foul situation). After the foul, Players A1 and B1 engage in a fight.',
  question:
    'In this clear-path situation where B1 fouls A1 and then A1 and B1 engage in a fight, how are the clear-path foul and fighting technicals administered, including free throws and possession?',
  options: {
    a: 'Assess only the clear-path foul on B1: any player on Team A shoots two free throws and Team A retains the ball at the free throw line extended; no penalties for the fight are administered in-game',
    b: 'Assess a clear-path foul on B1 and technical fouls for fighting on both A1 and B1 with ejections; Team A is awarded two free throws for the personal foul by B1, shot by a substitute from Team A’s bench selected by Coach B, and Team A then retains possession on the sideline where play was interrupted (no nearer the baseline than the free throw line extended); no free throws are attempted for the fighting fouls',
    c: 'Treat the fighting fouls as offsetting technicals and cancel the clear-path foul; resume with a jump ball at center circle and no free throws',
    d: 'Assess a clear-path foul on B1 and technicals for fighting on both players; B1 shoots the clear-path free throws, and Team B is awarded possession at midcourt because the fouls offset'
  },
  correctAnswer: 'b',
  ruling:
    'In Situation (2), a clear-path foul is assessed to Player B1. Players A1 and B1 are both assessed technical fouls for fighting and are ejected. Team A is awarded two free throw attempts for the personal foul committed by B1. Because A1 is ejected, the coach of Team B selects the substitute from Team A’s bench who will attempt those free throws. After the free throws, Team A retains possession on the sideline where play was interrupted, but no nearer to the baseline than the free throw line extended. No free throws are attempted as a penalty for the fighting technical fouls.',
  ruleReference:
    'Rule 9, Section II (a) (Exception 1); Rule 12A, Section VI (a); Rule 12B, Section IX (a and b); Rule 13, Section I (a)(4); Rule 13, Section II (d)',
  casebookReference: 'Page 38, Question 126 (2)'
}

{
  id: 'flagrant-fouls-127',
  category: 'Flagrant Fouls',
  difficulty: 'expert',
  scenario:
    'Following a successful field goal by Player A1 with 1:36 remaining in overtime, Player A2 is assessed a personal foul when he elbows Player B2 prior to the ball being released on the throw-in. The officials believe the foul may meet the criteria for a flagrant foul.',
  question:
    'When a personal foul on A2 for elbowing B2 before a throw-in may meet flagrant criteria, how should the officials use replay and what are the possible outcomes for administration?',
  options: {
    a: 'Replay is not permitted; the original personal foul must stand and is administered as a common foul only',
    b: 'Use instant replay, and if the contact is ruled a FF1 or FF2, award Team B two free throws and the ball at the free throw line extended; if the contact is not flagrant but there was contact, downgrade to an away-from-the-play foul; if there was no contact, change the foul to a technical foul for an unsportsmanlike elbow, with one free throw and play resuming at the point of interruption',
    c: 'Use instant replay only to determine whether A2 should be ejected; the classification of the foul and free throw administration are unchanged',
    d: 'Use instant replay, and if there was no contact, simply cancel the foul with no further penalty'
  },
  correctAnswer: 'b',
  ruling:
    'If the officials are not reasonably certain whether a called personal foul met the criteria for a flagrant foul, instant replay must be used. They review to determine whether the foul should remain a personal foul, be upgraded to a Flagrant Foul Penalty 1 (FF1), upgraded to a Flagrant Foul Penalty 2 (FF2), or be changed to a technical foul. If a FF1 is assessed, any player in the game may attempt two free throws and Team B is awarded the ball out-of-bounds at the free throw line extended in the frontcourt. If a FF2 is assessed, any player in the game attempts two free throws, Team B is awarded the ball at the free throw line extended, and A2 is ejected. If the contact does not meet flagrant criteria but there was contact, an away-from-the-play foul is assessed. If there was no contact, the personal foul is changed to a technical foul for unsportsmanlike tactics, with any player on Team B shooting one free throw and play resuming from the point of interruption.',
  ruleReference:
    'Rule 12A, Section V (d)(6); Rule 12B, Section IV; Rule 12B, Section X (b); Rule 13, Section I (a)(3 and 4); Rule 13, Section II (c and d)',
  casebookReference: 'Page 39, Question 127'
},
{
  id: 'flagrant-fouls-128',
  category: 'Flagrant Fouls',
  difficulty: 'expert',
  scenario:
    'Player A1 is fouled hard while in the act of shooting a three-point field goal attempt by Player B1. The official also rules that Player B2 commits unsportsmanlike contact immediately after the foul by B1, which may meet the criteria for a flagrant foul.',
  question:
    'In Situation (2), where A1’s three-point attempt is unsuccessful, if replay confirms that B1 committed a common foul on the shot and B2 committed a flagrant foul, how should the free throws and possession be administered?',
  options: {
    a: 'Any player on Team A shoots one technical free throw for B2’s flagrant, then A1 is awarded three free throws for B1’s common foul; play resumes normally with Team B receiving the ball if the last free throw is successful',
    b: 'A1 is awarded three free throws for B1’s common foul and two additional free throws for B2’s flagrant foul (five attempts to score four points total), and Team A retains possession at the free throw line extended in the frontcourt',
    c: 'A1 shoots three free throws for B1’s foul only; B2’s flagrant foul carries no additional free throws but Team A retains the ball at the free throw line extended',
    d: 'Any player on Team A shoots two free throws for B2’s flagrant first, then A1 shoots three free throws for B1’s common foul, and Team B is awarded the ball at midcourt'
  },
  correctAnswer: 'b',
  ruling:
    'When A1 is fouled attempting a three-point field goal and B2 also commits unsportsmanlike contact that is ruled a flagrant foul, replay is used to determine the classifications. In Situation (2) (unsuccessful three-point attempt), if B1 is assessed a common foul and B2 a flagrant foul, Player A1 is awarded five free throw attempts to score four points, and Team A will retain possession of the ball at the free throw line extended. The full Casebook ruling explains the other combinations: if B1 is common and B2 technical, any player on Team A shoots the technical free throw first, then A1 is awarded three free throws and play continues; if B1 is flagrant and B2 technical, any player on Team A shoots the technical free throw first, then A1 is awarded three free throws and Team A retains possession at the free throw line extended.',
  ruleReference:
    'Rule 12B, Section I (Penalty 3 and 4); Rule 12B, Section IV; Rule 12B, Section V (b and c); Rule 13, Section I (a)(3); Rule 13, Section II (c)(1 and 2)',
  casebookReference: 'Page 39, Question 128'
},
{
  id: 'flagrant-fouls-129',
  category: 'Flagrant Fouls',
  difficulty: 'veteran',
  scenario:
    'Following instant replay review, a Flagrant Foul Penalty 1 (FF1) is assessed against Player B1 as Player A1 is in the act of shooting a two-point field goal attempt, either successful or unsuccessful.',
  question:
    'After replay upgrades B1’s foul on A1’s two-point attempt to a FF1, how is the play administered in the cases of a successful vs. unsuccessful shot?',
  options: {
    a: 'Whether the shot is successful or not, A1 is awarded one free throw and play resumes with Team B inbounding at the endline',
    b: 'If the shot is successful, A1 is awarded one free throw; if the shot is unsuccessful, A1 is awarded two free throws; in both cases, Team A retains the ball at the free throw line extended in the frontcourt, with no players lined up on the lane',
    c: 'If the shot is successful, no free throws are awarded and Team A simply inbounds at the free throw line extended; if unsuccessful, A1 gets two free throws but Team B gets the ball after the last attempt',
    d: 'In both situations, A1 is awarded two free throws and Team B gets the ball at midcourt after the last free throw'
  },
  correctAnswer: 'b',
  ruling:
    'After replay, if B1’s foul on A1’s two-point attempt is ruled a FF1, the administration depends on whether the try is successful or not. In Situation (1) (successful two-point field goal), A1 is awarded two free throw attempts to score one additional point, and Team A is awarded the ball out-of-bounds at the free throw line extended in the frontcourt, with no lineup on the free throw lane lines; a maximum of three points can be scored on the play. In Situation (2) (unsuccessful attempt), A1 is awarded two free throw attempts, and Team A is again awarded the ball out-of-bounds at the free throw line extended in the frontcourt, with no players lined up on the lane.',
  ruleReference:
    'Rule 12B, Section IV; Rule 12B, Section V (b); Rule 13, Section I (a)(3); Rule 13, Section II (c)(1 and 2)',
  casebookReference: 'Page 40, Question 129'
},
{
  id: 'flagrant-fouls-130a',
  category: 'Flagrant Fouls',
  difficulty: 'rookie',
  scenario:
    'Following instant replay review, Player B1 is assessed a Flagrant Foul Penalty 1 (FF1) and Player A1 is awarded two free throws and possession at the free throw line extended. Earlier in the game, B1 had been assessed a technical foul for an unsportsmanlike act.',
  question:
    'Does a player who has already received a technical foul get automatically ejected when he is later assessed a FF1?',
  options: {
    a: 'Yes, a FF1 combined with any prior technical foul always results in an automatic ejection',
    b: 'Yes, but only if the prior technical foul was for taunting or disrespect to an official',
    c: 'No, a FF1 does not result in an automatic ejection; only a FF2 triggers automatic ejection regardless of prior technical fouls',
    d: 'Yes, but only if the FF1 occurs in the last two minutes of regulation or overtime'
  },
  correctAnswer: 'c',
  ruling:
    'A Flagrant Foul Penalty 1, by itself or in combination with a prior technical foul, does not create an automatic ejection. Only a Flagrant Foul Penalty 2 results in automatic ejection. In the described play, B1 remains in the game unless the foul is upgraded to a FF2.',
  ruleReference:
    'Rule 9, Section II (a)(2); Rule 12A, Section V (b); Rule 12B, Section IV; Rule 13, Section I (a)(3); Rule 13, Section II (c)(1 and 2)',
  casebookReference: 'Page 40, Question 130 (1)'
},
{
  id: 'flagrant-fouls-130b',
  category: 'Flagrant Fouls',
  difficulty: 'veteran',
  scenario:
    'Following instant replay review, Player B1 is assessed a FF1 and Player A1 is awarded two free throws and possession at the free throw line extended. A1 is injured on the play and cannot attempt his free throws.',
  question:
    'If A1 is injured on a play where he would shoot free throws after B1’s FF1, who selects the free throw shooter for Team A, and under what circumstances (if any) may A1 return to the game?',
  options: {
    a: 'Any player on Team A may shoot, chosen by the officials; A1 may not return under any circumstances',
    b: 'Coach A must select one of the four remaining players on the court to shoot the free throws; A1 generally may not return, except if he was removed solely for concussion evaluation and is later cleared under the NBA Concussion Policy',
    c: 'Coach B chooses the shooter from Team A’s bench; A1 may return at the next dead ball if he feels better',
    d: 'The shooter must be selected from Team A’s bench; A1 is automatically ineligible for the rest of the game whenever a FF1 causes him to leave'
  },
  correctAnswer: 'b',
  ruling:
    'When a player who is entitled to free throws cannot attempt them due to injury after a FF1, Coach A selects one of the four remaining players on the court to shoot the free throws. Player A1 may not return to the game as a general rule. The only exception is if A1 was removed for a concussion evaluation and, after completing all protocols under the NBA Concussion Policy, is determined not to have a concussion; in that specific case, he may reenter.',
  ruleReference:
    'Rule 9, Section II (a)(2); Rule 12A, Section V (b); Rule 12B, Section IV; Rule 13, Section I (a)(3); Rule 13, Section II (c)(1 and 2)',
  casebookReference: 'Page 40, Question 130 (2)'
},
{
  id: 'flagrant-fouls-131',
  category: 'Flagrant Fouls',
  difficulty: 'veteran',
  scenario:
    'Following instant replay review, a FF1 is assessed to Player B2 for throwing Player A2 to the floor while Player A1 attempts a three-point field goal, either successful or unsuccessful.',
  question:
    'In Situation (1), where A1’s three-point field goal is successful and B2 is assessed a FF1 for throwing A2 to the floor, how is the play administered?',
  options: {
    a: 'A2 is awarded two free throws to score one additional point (maximum of four points on the play), and Team A is then awarded the ball out-of-bounds at the free throw line extended in the frontcourt',
    b: 'A1 is awarded one free throw and Team B gets the ball at the free throw line extended',
    c: 'A2 is awarded two free throws with no limit on points, and Team B gets the ball after the last free throw',
    d: 'No free throws are awarded; Team A only retains the ball at the free throw line extended'
  },
  correctAnswer: 'a',
  ruling:
    'When A1 makes a three-point field goal and B2 is assessed a FF1 for throwing A2 to the floor, Player A2 is awarded two free throw attempts to score one point. A maximum of four points can be scored on the play. In both Situation (1) and Situation (2) (missed three-point attempt), the ball is awarded to Team A out-of-bounds at the free throw line extended in the frontcourt after A2’s free throws.',
  ruleReference:
    'Rule 12B, Section IV; Rule 12B, Section V (c); Rule 13, Section I (a)(3 and 4); Rule 13, Section II (c)(1 and 2) and (d)',
  casebookReference: 'Page 40, Question 131'
},
{
  id: 'flagrant-fouls-132',
  category: 'Flagrant Fouls',
  difficulty: 'expert',
  scenario:
    'Player A1 is fouled by Player B1 while attempting to cause a jump ball. Clearly after the personal foul is called, and during a dead ball, B1 throws A1 to the floor.',
  question:
    'How should the two separate fouls by B1 be categorized and administered when he first commits a common foul trying to cause a jump ball and then throws A1 to the floor during the dead ball?',
  options: {
    a: 'Both fouls are treated as a single flagrant foul because they occur in the same sequence, and A1 is awarded two free throws and the ball',
    b: 'The initial foul is a common foul; the second foul during the dead ball may be ruled either a technical foul (if unsportsmanlike) or a flagrant foul (if unnecessary and/or excessive), with instant replay used if it is ruled flagrant to determine FF1 or FF2',
    c: 'The initial foul is ignored, and only the dead-ball throw-down is penalized as a flagrant foul with ejection',
    d: 'Both fouls are technical fouls because they occur around a dead ball situation; no personal foul is charged'
  },
  correctAnswer: 'b',
  ruling:
    'The first foul by B1 while attempting to cause a jump ball is a common personal foul. The second foul, where B1 throws A1 to the floor after the whistle and during a dead ball, is a separate act that can be ruled either a technical foul if the contact is deemed unsportsmanlike in nature, or a flagrant foul if unnecessary and/or excessive contact occurs. By rule, illegal contact during a dead ball can be penalized this way. If the second foul is ruled flagrant, instant replay must be used to determine whether it is a FF1 or FF2.',
  ruleReference:
    'Rule 12A, Section V (i); Rule 12B, Section IV; Rule 13, Section I (a)(3); Rule 13, Section II (c)(1 and 2)',
  casebookReference: 'Page 41, Question 132'
},
{
  id: 'flagrant-fouls-137',
  category: 'Flagrant Fouls',
  difficulty: 'expert',
  scenario:
    'With 0:56 remaining in the third period, Player A1 is fouled by Player B1. A1 reacts and hits B1 in the chest with an elbow. B1 then throws a punch that misses, and A1 responds by throwing the ball at B1. Team B has committed five team fouls.',
  question:
    'Assuming replay confirms the described sequence, how are the personal, flagrant, and technical fouls administered, who shoots which free throws, and which team gets possession?',
  options: {
    a: 'B1’s personal foul is cancelled; A1 is assessed a FF2 only and ejected; Team B shoots two free throws and gets the ball',
    b: 'B1 is charged with the initial personal foul and a technical foul for throwing a punch and is ejected; A1 is charged with a FF1 and a technical foul for throwing the ball (creating double technicals). A1 is awarded one free throw plus one penalty free throw for B1’s personal foul. Because B1 is ejected, Coach A selects a substitute from Team B’s bench to shoot the two free throws for A1’s flagrant; after those, Team B retains possession at the free throw line extended',
    c: 'Both players receive offsetting technical fouls only; no free throws are taken and play resumes with a jump ball',
    d: 'A1 receives all free throws because he was fouled first; B1’s actions are reported only to the League Office'
  },
  correctAnswer: 'b',
  ruling:
    'Replay is used to sort out all penalties and any additional unsportsmanlike acts. In this scenario, B1 is charged with the initial personal foul and also a technical foul for throwing a punch; he is ejected. A1 is charged with a Flagrant Foul Penalty 1 and a technical foul for throwing the ball back at B1, creating double technical fouls. Player A1 is awarded one free throw attempt plus a penalty free throw for B1’s personal foul (Team B is in the penalty). Because B1 is ejected, the coach of Team A selects a substitute from Team B’s bench to shoot the two free throws awarded for A1’s flagrant foul. After those free throws, Team B will retain possession at the free throw line extended.',
  ruleReference:
    'Rule 9, Section II (a) (Exception 1); Rule 12A, Section V (o); Rule 12B, Section IV (a); Rule 12B, Section IX (b); Rule 13, Section I (a)(4); Rule 13, Section II (d)',
  casebookReference: 'Page 42, Question 137'
},
{
  id: 'flagrant-fouls-138',
  category: 'Flagrant Fouls',
  difficulty: 'expert',
  scenario:
    'Player B1 fouls Player A1, and the penalty situation is not yet in effect. Player A2 rushes over and gets in B1’s face, and B1 reacts by head-butting A2.',
  question:
    'How should the officials use replay, and how are the fouls, free throws, and possession administered when B1 responds to A2’s taunt with a head butt?',
  options: {
    a: 'Treat the head butt as a common technical; A2 shoots one free throw and Team B retains the ball',
    b: 'Use instant replay, rule the head butt a FF2 (hostile act) on B1 and eject him, charge A2 with a technical foul for taunting; any of the four remaining Team B players attempts the technical free throw, A2 then shoots two free throws for the flagrant foul, and Team A retains possession at the free throw line extended',
    c: 'Offset B1’s head butt with A2’s taunt; no free throws are taken and play resumes at the point of interruption',
    d: 'Automatically eject both players with no free throws and award the ball to Team B at midcourt'
  },
  correctAnswer: 'b',
  ruling:
    'A head butt is considered a hostile act and requires replay review. The officials use instant replay to confirm the contact and rule it a Flagrant Foul Penalty 2 on B1, resulting in his ejection. They also rule on any other unsportsmanlike acts; in this play, A2 is charged with a technical foul for taunting. Any of the four remaining players on Team B may attempt the free throw for A2’s technical foul. Player A2 is awarded two free throw attempts for the flagrant foul by B1, and Team A then retains possession at the free throw line extended in the frontcourt.',
  ruleReference:
    'Rule 12A, Section V (d)(7); Rule 12B, Section IV (b); Rule 13, Section I (a)(3 and 4)',
  casebookReference: 'Page 42, Question 138'
},
{
  id: 'flagrant-fouls-139',
  category: 'Flagrant Fouls',
  difficulty: 'rookie',
  scenario:
    'Player A1 is assessed a flagrant foul between the third and fourth periods. Team A had gained the first possession of the game.',
  question:
    'When a flagrant foul occurs between periods, which team is entitled to the ball to begin the next period in this scenario?',
  options: {
    a: 'Team B automatically gets the first possession of the fourth period because the flagrant foul was on Team A',
    b: 'Team A still receives the first possession of the fourth period because the ball must be put into play by the team entitled to the throw-in in the period that follows, even after free throws for a dead-ball foul',
    c: 'The period begins with a jump ball at center circle because of the flagrant foul between periods',
    d: 'Possession is determined by the alternating-possession arrow, ignoring who started the game'
  },
  correctAnswer: 'b',
  ruling:
    'When a foul, including a flagrant or punching foul, occurs during a dead ball that immediately precedes a period, any free throws are administered, but the ball is then put into play by the team that is entitled to the throw-in to start the next period. In this example, Team A had gained the first possession of the game and is therefore entitled to the first possession of the fourth period, even though A1 has been assessed a flagrant foul between the third and fourth periods.',
  ruleReference: 'Rule 9, Section III (Exception)',
  casebookReference: 'Page 43, Question 139'
},
{
  id: 'flagrant-fouls-140',
  category: 'Flagrant Fouls',
  difficulty: 'veteran',
  scenario:
    'Player A2 is assessed a hard foul that may meet the criteria for a flagrant foul when he unintentionally elbows Player B2 in the upper chest on an unsuccessful field goal attempt by A1. A2’s elbow glances off B2’s chest and contacts him on the chin.',
  question:
    'After replay review of A2’s glancing elbow that ends up contacting B2 on the chin, how should the foul be classified and how is play administered?',
  options: {
    a: 'It remains a common foul because the elbow was unintentional; B2 shoots two free throws only if Team A is in the penalty',
    b: 'A2 is assessed a FF1; B2 is awarded two free throws and Team B is awarded possession at the free throw line extended in the frontcourt',
    c: 'A2 is assessed a FF2 and automatically ejected; B2 is awarded two free throws and Team B retains possession at midcourt',
    d: 'A2’s contact is downgraded to a technical foul with one free throw and play resuming at the point of interruption'
  },
  correctAnswer: 'b',
  ruling:
    'Even though the elbow initially contacts the upper chest and then glances to the chin, replay shows that the contact meets the criteria for a Flagrant Foul Penalty 1. Player A2 is assessed a FF1. Player B2 is awarded two free throw attempts and Team B receives the ball out-of-bounds at its free throw line extended on either side of the frontcourt.',
  ruleReference: 'Rule 12B, Section IV (a); Rule 13, Section I (a)(3)',
  casebookReference: 'Page 43, Question 140'
},
{
  id: 'flagrant-fouls-141',
  category: 'Flagrant Fouls',
  difficulty: 'veteran',
  scenario:
    'During a dead ball, Player A3 takes a swing (not a punch) at Player B3 and hits him in the shoulder.',
  question:
    'After replay review confirms that A3 swung at and made contact with B3 during a dead ball, how should the foul be classified and penalized?',
  options: {
    a: 'It is a common technical foul only; B3 shoots one free throw and play resumes at the point of interruption',
    b: 'It is a FF1 because the swing was not a closed-fist punch; A3 remains in the game after two free throws and possession to Team B',
    c: 'It is a FF2 because any swing that makes contact with an opponent is penalized as a FF2, and A3 is ejected; a flagrant foul may be called whether the ball is dead or alive',
    d: 'No in-game penalty applies because the ball was dead; the incident is only reported to the League Office'
  },
  correctAnswer: 'c',
  ruling:
    'Following replay, Player A3 is assessed a Flagrant Foul Penalty 2. Any player who swings at an opponent and makes contact will be assessed a FF2 and ejected from the game. A flagrant foul may be called whether the ball is live or dead.',
  ruleReference:
    'Rule 13, Section I (a)(3); Rule 13, Section II (c); Rule 12B, Section IV (b, c and d)',
  casebookReference: 'Page 43, Question 141'
},
{
  id: 'flagrant-fouls-142',
  category: 'Flagrant Fouls',
  difficulty: 'expert',
  scenario:
    'Following an unsuccessful field goal attempt by Player A1, a loose ball foul is called on Player A2. Player B2 reacts to that foul by hitting A2 with an elbow and is assessed a flagrant foul (ultimately ruled a FF2 on replay). It is also A2’s sixth personal foul. The Casebook addresses administration both when Team A is in the penalty and when it is not.',
  question:
    'In Situation (1), where Team A is in the penalty when A2 commits the loose ball foul and B2’s retaliation is ruled a FF2, how are the free throws and substitutions administered and who gets possession?',
  options: {
    a: 'Because Team A is in the penalty, B2 shoots two free throws for A2’s loose ball foul; then A2 shoots two free throws for B2’s FF2, and Team B gets the ball at the free throw line extended',
    b: 'Coach A selects a substitute from Team B’s bench to shoot the free throws awarded to B2 for A2’s loose ball foul; no players line up on the lane. Coach A also selects an eligible substitute for A2 (who has fouled out) to shoot the two free throws for B2’s FF2, and Team A then inbounds the ball at the free throw line extended',
    c: 'All fouls offset; no free throws are taken and play resumes with a jump ball',
    d: 'Only B2’s FF2 is penalized; A2’s loose ball foul is ignored since he was hit afterward'
  },
  correctAnswer: 'b',
  ruling:
    'After replay confirms B2’s action as a FF2, personal and team fouls are charged to both sides: Team A for A2’s loose ball foul and Team B for B2’s flagrant. In Situation (1), with Team A in the penalty, the coach of Team A selects a substitute from Team B’s bench to shoot the free throws awarded to Player B2 for the loose ball foul; no players occupy the lane lines. Because A2 has fouled out, Coach A selects an eligible substitute to replace him, and that substitute attempts the two free throws awarded for B2’s flagrant foul. After those free throws, Team A inbounds the ball at the free throw line extended. In Situation (2) (Team A not in the penalty), there are no free throws for the loose ball foul, but the same substitution and free-throw procedure applies for the flagrant foul, with Team A again inbounding at the free throw line extended.',
  ruleReference:
    'Rule 9, Section II (a) (Exception 1 and 3); Rule 13, Section I (a)(4); Rule 13, Section II (c)',
  casebookReference: 'Page 44, Question 142'
}

{
  id: 'inadvertent-whistle-206',
  category: 'Inadvertent Whistle',
  difficulty: 'veteran',
  scenario:
    'Player A1 secures the rebound of his field goal attempt, which has contacted the basket ring. An official, thinking the ball did not touch the ring, erroneously blows his whistle and calls a traveling violation on A1. After conferring with the crew, the calling official realizes his whistle was in error.',
  question:
    'Once the crew determines the whistle for traveling was erroneous after A1 had already secured the rebound, how is the play administered regarding possession, timeouts, and substitutions?',
  options: {
    a: 'Team B is awarded the ball on the sideline nearest the violation, and either team may request a timeout or substitute',
    b: 'The call stands as traveling since the whistle was blown; Team B gets the ball and normal timeout and substitution rules apply',
    c: 'The play is treated as an inadvertent whistle; Team A retains possession on the sideline nearest the point of interruption, only Team A may be granted a timeout, and no substitutions are allowed unless a timeout is taken',
    d: 'The ball becomes dead with no team in control; resume with a jump ball at center circle and allow substitutions but no timeouts'
  },
  correctAnswer: 'c',
  ruling:
    'Because the whistle and traveling call were erroneous after A1 had already secured the rebound, the situation is interpreted as an inadvertent whistle. Team A retains possession on the sideline nearest the point of interruption. Since the whistle sounded after Team A had clear possession, only Team A may be granted a timeout. No substitutions are permitted unless a timeout is granted. This situation is treated the same as a suspension-of-play.',
  ruleReference:
    'Rule 2, Section V (d); Rule 3, Section V (k)(3); Rule 4, Section XIV',
  casebookReference: 'Page 58, Question 206'
},
{
  id: 'inadvertent-whistle-207',
  category: 'Inadvertent Whistle',
  difficulty: 'expert',
  scenario:
    'With 24.8 seconds remaining in the fourth quarter and Team A trailing 119–114, Player A1 deliberately waits to grab a rebound after a missed free throw by B4 in order to preserve time, as no Team B players are near the ball. Although no player has touched the ball following the miss, the game clock erroneously starts, prompting the officials to stop the game. At the time of the whistle, A1 still has not touched the ball, though the ball is easily within his grasp and no other players are nearby.',
  question:
    'When the clock starts erroneously after a missed free throw and officials stop play before anyone touches the ball, but A1 is clearly about to secure an uncontested rebound, how should possession and the clocks be administered?',
  options: {
    a: 'Declare a jump ball at center circle since no player had obtained possession when the whistle sounded; reset both the game clock and shot clock to 24 seconds',
    b: 'Award possession to Team B because Team A delayed touching the ball, and reset the game clock to the time at the whistle with the shot clock at 24 seconds',
    c: 'Award Team A possession because A1 would have imminently gained control of the ball, reset the game clock to 24.8 seconds, and reset the shot clock to 24 seconds',
    d: 'Use the alternating-possession arrow to determine possession, keep the game clock at the time of the whistle, and reset the shot clock to 14 seconds'
  },
  correctAnswer: 'c',
  ruling:
    'Team A is awarded possession because Player A1 would have imminently gained control of the rebound at the time of the whistle—no Team B players were close to the ball and it was easily within A1’s grasp. The game clock is reset to 24.8 seconds (the correct time when the error occurred), and the shot clock is reset to 24 seconds. This treatment recognizes imminent, uncontested possession at the time of the inadvertent stoppage.',
  ruleReference:
    'Rule 4, Section XIV; Rule 5, Section VIII; Rule 7, Section VI (a)',
  casebookReference: 'Page 58, Question 207'
},
{
  id: 'injury-ejection-208',
  category: 'Injury/Ejection of Players',
  difficulty: 'rookie',
  scenario:
    'Player A1 is unable to participate in a jump ball because he has been injured or ejected.',
  question:
    'If A1 cannot participate in a jump ball due to injury or ejection, how is his replacement jumper selected and may A1 return to the game?',
  options: {
    a: 'Coach A chooses any eligible teammate as the substitute jumper, and A1 may re-enter the game after the next dead ball if his condition allows',
    b: 'The opposing coach chooses an eligible substitute jumper from Team A’s bench, and A1 may not re-enter the game',
    c: 'The officials select the substitute jumper from Team A’s bench, and A1 may return after sitting one full period',
    d: 'The jump ball is cancelled and play resumes with a throw-in for Team B; A1’s eligibility to return is not affected'
  },
  correctAnswer: 'b',
  ruling:
    'When a player is unable to participate in a jump ball due to injury or ejection, the opposing coach selects an eligible substitute jumper from the affected team’s bench. In this scenario, the opposing coach chooses a substitute from Team A’s bench. Player A1 may not re-enter the game.',
  ruleReference: 'Rule 6, Section VI (b)',
  casebookReference: 'Page 58, Question 208'
},
{
  id: 'injury-ejection-209',
  category: 'Injury/Ejection of Players',
  difficulty: 'veteran',
  scenario:
    'Player A1 is unable to attempt his free throw(s) due to an injury and/or ejection. The Casebook outlines different replacement shooter rules depending on the cause of the injury (ordinary foul, flagrant foul penalty 1, or unsportsmanlike act).',
  question:
    'When A1 cannot attempt his free throws because of injury or ejection, which statement correctly summarizes how the replacement shooter is chosen and when A1 may return, depending on the cause of the injury?',
  options: {
    a: 'In all cases, the opposing coach selects the substitute from Team A’s bench to shoot the free throws, and A1 may never return once he leaves due to injury',
    b: 'Ordinary foul: opposing coach chooses a substitute from Team A’s bench and A1 may not re-enter; injury from a FF1 by an opponent: Coach A selects one of the four remaining players in the game and A1 may not re-enter; injury from an unsportsmanlike act: Coach A may select any player as the shooter and A1 may return at any time after the free throws',
    c: 'Ordinary foul: Coach A chooses any player from the bench and A1 may immediately return; FF1 injury: opposing coach chooses the shooter and A1 may return after one possession; unsportsmanlike act: officials choose the shooter and A1 is out for the remainder of the period only',
    d: 'Ordinary foul: officials choose the shooter and A1 may not return; FF1 injury: officials choose from the bench and A1 may return if he clears a concussion check; unsportsmanlike act: no free throws are taken and A1 must be replaced'
  },
  correctAnswer: 'b',
  ruling:
    'When a player cannot attempt his free throws due to injury or ejection, the default rule is that the opposing coach selects an eligible substitute from the injured player’s bench to shoot the free throws, and the injured player may not re-enter. If the injury is caused by a Flagrant Foul Penalty 1 by an opponent, the injured player’s coach selects one of the four remaining players in the game to shoot the free throws, and the injured player may not re-enter. If the injury is sustained from an unsportsmanlike act (technical foul), the injured player’s coach may select the shooter from anywhere (starter, substitute, or player on the floor), and the injured player may return to the game at any time following the free throw attempts.',
  ruleReference: 'Rule 9, Section II (a) (Exception 1 and 2)',
  casebookReference: 'Page 58, Question 209'
},
{
  id: 'injury-ejection-210a',
  category: 'Injury/Ejection of Players',
  difficulty: 'expert',
  scenario:
    'Player A1 is injured on a play where the official rules that Player B1 will be assessed a flagrant foul. A1 is unable to attempt his free throws. The Casebook addresses whether B1 may be ejected depending on the type of flagrant foul.',
  question:
    'In this scenario, may B1 be ejected from the game, and how does the answer depend on whether his foul is ruled a Flagrant Foul Penalty 1 (FF1) or Flagrant Foul Penalty 2 (FF2)?',
  options: {
    a: 'Yes, B1 may be ejected whether the foul is an FF1 or an FF2 because any flagrant foul allows for ejection at the officials’ discretion',
    b: 'No, B1 cannot be ejected for a flagrant foul that injures A1; only technical fouls for fighting lead to automatic ejection',
    c: 'Yes, B1 may be ejected only if the foul is ruled an FF2; if the foul is ruled an FF1, B1 may not be ejected based solely on that flagrant classification',
    d: 'B1 is automatically ejected for any flagrant foul that causes injury, regardless of whether it is FF1 or FF2'
  },
  correctAnswer: 'c',
  ruling:
    'The Casebook specifies that B1 may be ejected if the personal foul is ruled a Flagrant Foul Penalty 2 (FF2 – Penalty 2). However, if the personal foul is ruled a Flagrant Foul Penalty 1 (FF1 – Penalty 1), B1 is not subject to automatic ejection based solely on that classification.',
  ruleReference: 'Rule 9, Section II (2); Rule 12B, Section IV',
  casebookReference: 'Page 58, Question 210 (1)'
},
{
  id: 'injury-ejection-210b',
  category: 'Injury/Ejection of Players',
  difficulty: 'expert',
  scenario:
    'Player A1 is injured on a play where B1 is ruled to have committed a flagrant foul. A1 is unable to attempt his free throws. The Casebook addresses whether A1 may return to the game depending on whether the foul is an FF1 or FF2.',
  question:
    'In this same play, may A1 return to the game later, and how does that depend on whether B1’s foul is classified as a Flagrant Foul Penalty 1 (FF1) or Flagrant Foul Penalty 2 (FF2)?',
  options: {
    a: 'A1 may never return to the game once he is unable to shoot his free throws, regardless of the type of flagrant foul',
    b: 'A1 may return to the game later only if the foul is ruled an FF1; if it is ruled an FF2, he may not return',
    c: 'A1 may return to the game later only if the foul is ruled an FF2; if it is ruled an FF1, he may not return',
    d: 'A1 may always return at the next dead ball, regardless of the classification of the flagrant foul'
  },
  correctAnswer: 'c',
  ruling:
    'According to the Casebook, if the personal foul is a Flagrant Foul Penalty 2 (FF2 – Penalty 2), A1 may return to the game later even though he could not attempt his free throws. If the personal foul is a Flagrant Foul Penalty 1 (FF1 – Penalty 1), A1 may not re-enter the game once he is unable to attempt his free throws.',
  ruleReference: 'Rule 9, Section II (3); Rule 12B, Section IV',
  casebookReference: 'Page 58, Question 210 (2)'
}
{
  id: 'instant-replay-211',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Player A1 is fouled just as he releases the ball on a field goal attempt and the horn sounds to end the period at approximately the same time.',
  question:
    'When a foul on A1’s shot and the period-ending horn occur nearly simultaneously, how should instant replay be used and how is the play administered depending on when the foul and release occurred?',
  options: {
    a: 'No replay is allowed; if the horn sounds, the period is over and the foul cannot be administered',
    b: 'Use replay only to see if the shot was a two or three; the foul automatically counts if called',
    c: 'Use replay to determine the time of the foul and the time of the release: (1) if the foul occurred before time expired, reset the clock to the time of the foul and award free throws; (2) if the foul occurred after time expired, but the ball was released before 0:00, award free throws based on the shot; (3) if the clock expired before the ball was released, do not administer a common foul because the period has ended',
    d: 'Use replay only to determine if the ball was released before 0:00; if it was, count the basket and ignore the foul'
  },
  correctAnswer: 'c',
  ruling:
    'The officials will use instant replay, and the Replay Center Official will have the calling official stop the video at the time of the foul. If the foul occurred before time expired, the game clock is reset to the time of the foul and free throws are awarded accordingly. If the foul occurred after the clock expired but the player was still in his shooting motion, the Replay Center Official must determine whether the ball was released before 0:00; if it was, free throws are awarded. If the clock expired before the ball was released, no common foul can be administered because the period has ended.',
  ruleReference:
    'Rule 4, Section XI; Rule 13, Section II (a)(2) and (b)(2)',
  casebookReference: 'Page 59, Question 211'
},
{
  id: 'instant-replay-212',
  category: 'Instant Replay',
  difficulty: 'rookie',
  scenario:
    'Player A1’s successful basket at 0:00 is initially ruled a three-pointer. There is a question whether A1’s foot was on the three-point line.',
  question:
    'When a successful basket occurs with 0:00 on the game clock and is initially scored as a three-pointer, may the officials use instant replay to change it to a two-pointer if A1’s foot was on the line?',
  options: {
    a: 'No, once a basket is scored at 0:00 it cannot be changed from three to two points',
    b: 'Yes, any successful basket with 0:00 on the game clock is automatically reviewed and may be changed from three to two points if the shooter’s foot was on the line',
    c: 'No, replay may only be used for last-second shot timing, not whether the shooter was behind the arc',
    d: 'Yes, but only if the defensive coach requests a Coach’s Challenge'
  },
  correctAnswer: 'b',
  ruling:
    'Any successful basket with 0:00 on the game clock is a replay trigger and must be reviewed. Whether the basket should count as a two- or three-point field goal is a reviewable matter, so the officials may change the score if replay shows the shooter’s foot was on the line.',
  ruleReference:
    'Rule 13, Section I (a)(1 and 6); Rule 13, Section II (a)(1)',
  casebookReference: 'Page 59, Question 212'
},
{
  id: 'instant-replay-213',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'At the end of the first period, Player A1’s successful three-point basket is reviewed. The Replay Center Official sees that A1’s heel was on the sideline when he jumped to shoot, but the shot was clearly released before 0:00.',
  question:
    'If replay shows that A1 was out-of-bounds on the sideline when he jumped to shoot, even though the ball was released before 0:00, should the basket count?',
  options: {
    a: 'Yes, because the ball was released before 0:00, the three-point basket counts',
    b: 'No, because A1 was out-of-bounds when he jumped, the basket is nullified, time is put back on the clock, and Team B inbounds at the spot of the boundary violation',
    c: 'Yes, but it is changed from a three-point goal to a two-point goal since he stepped on the sideline',
    d: 'The basket counts only if Team B does not call a timeout to request a review'
  },
  correctAnswer: 'b',
  ruling:
    'Because A1’s heel was on the sideline when he jumped, he was out-of-bounds and therefore cannot legally score. The Replay Center Official determines how much time should be restored to the game clock and the basket is nullified. Team B is awarded the ball at the spot of the boundary violation. If this play occurs at the end of the second, fourth, or overtime period, both teams must remain on the court until the review is completed.',
  ruleReference:
    'Rule 13, Section II (a)(1 and 2); Rule 13, Section II (a)',
  casebookReference: 'Page 59, Question 213'
},
{
  id: 'instant-replay-214',
  category: 'Instant Replay',
  difficulty: 'rookie',
  scenario:
    'Player A1 has a throw-in with 0.2 seconds on the game clock. His pass is caught and immediately shot into the basket.',
  question:
    'On a throw-in that starts with 0.2 on the game clock, followed by an immediate catch-and-shoot basket, is instant replay utilized to determine if the goal should count?',
  options: {
    a: 'Yes, replay must be used on all successful field goals with 0.3 seconds or less on the clock',
    b: 'Yes, but only if the basket affects the outcome of the game',
    c: 'No, instant replay is not utilized on any throw-in, jump ball, or free throw that starts with 0.2 or 0.1 and is followed by a successful basket',
    d: 'Yes, but only to determine whether it was a two- or three-point field goal'
  },
  correctAnswer: 'c',
  ruling:
    'Instant replay is not utilized on any throw-in, jump ball, or free throw that starts with 0.2 or 0.1 on the game clock or shot clock and is followed by a successful basket. By rule, there is insufficient time to legally catch and shoot, so replay is not used to validate such a score.',
  ruleReference: 'Rule 13, Section I (a)(1) (NOTE)',
  casebookReference: 'Page 59, Question 214'
},
{
  id: 'instant-replay-215',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Following an instant replay review, a Flagrant Foul Penalty 2 is assessed against Player B1 for contact against Player A1. During the review, the officials also observe that as A1 got up from the floor, he threw a punch at Player B2 which missed.',
  question:
    'After replay confirms a FF2 on B1 against A1 and also reveals that A1 threw a punch at B2 that missed, how are the penalties, free throw shooters, and ejections administered?',
  options: {
    a: 'B1 is ejected for the FF2 and A1 is ignored since his punch missed; any player from Team A shoots two free throws and Team A gets the ball',
    b: 'B1 is assessed a FF2 and ejected; A1 is assessed a technical foul and ejected for throwing a punch; any of the four remaining Team B players attempts one free throw for A1’s technical, and Coach B selects a shooter from Team A’s bench to attempt the two free throws for B1’s flagrant foul',
    c: 'Both players receive offsetting technical fouls only; no free throws are taken and play resumes with a jump ball',
    d: 'A1 is ejected, but only B1’s FF2 carries free throws (shot by any Team A player); no technical free throw is shot for A1’s punch since no contact occurred'
  },
  correctAnswer: 'b',
  ruling:
    'Replay reveals both the FF2 by B1 and the punch by A1 that misses B2. A technical foul is assessed to A1 for throwing a punch and he is ejected. B1 is assessed a Flagrant Foul Penalty 2 and ejected. Any of the four remaining players on Team B will attempt the one free throw for A1’s technical foul. For the FF2, Coach B selects the shooter from Team A’s bench to attempt the two free throws for the flagrant foul.',
  ruleReference:
    'Rule 3, Section V (d); Rule 9, Section II (a) (Exceptions); Rule 12, Section V (j)',
  casebookReference: 'Page 60, Question 215'
},
{
  id: 'instant-replay-216',
  category: 'Instant Replay',
  difficulty: 'rookie',
  scenario:
    'Following a hard foul by Player B1 on Player A1, they come face-to-face and exchange words. The officials quickly separate them and assess double technical fouls. There is no physical altercation.',
  question:
    'In this situation, should the officials use instant replay to review the double technical fouls on A1 and B1?',
  options: {
    a: 'Yes, all technical fouls after a hard foul must be reviewed by instant replay',
    b: 'Yes, but only if a coach requests a review',
    c: 'No, as long as the players were separated in a reasonable amount of time and no altercation occurred, there is no trigger to use instant replay',
    d: 'Yes, but only to see if either player’s technical should be upgraded to a flagrant foul'
  },
  correctAnswer: 'c',
  ruling:
    'Since the players were quickly separated, no fight or altercation occurred, and the officials did not observe hostile or fighting acts, there is no replay trigger. Instant replay should not be used in this situation.',
  ruleReference: 'Rule 13, Section I (a)(4)',
  casebookReference: 'Page 60, Question 216'
},
{
  id: 'instant-replay-217',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'Players A1 and B1 are engaged in a fight and numerous other players are pushing and shoving.',
  question:
    'When a fight breaks out involving A1 and B1 with multiple other players pushing and shoving, what is the proper instant replay procedure?',
  options: {
    a: 'No replay is allowed on fighting situations; the officials must rule based only on what they saw live',
    b: 'Replay may only be used to determine if initial punches landed, not to assess other players’ involvement',
    c: 'Officials must use instant replay to review the level of involvement of each player and then assess the appropriate penalties to each player',
    d: 'Replay is used only to identify who threw the first punch; all others receive the same penalty automatically'
  },
  correctAnswer: 'c',
  ruling:
    'In fighting situations with multiple players involved, the officials will use instant replay to review the level of involvement of each player, including those pushing, shoving, or leaving the bench area, and then assess the appropriate penalties to each player.',
  ruleReference:
    'Rule 13, Section I (a)(4); Rule 13, Section II (d)',
  casebookReference: 'Page 60, Question 217'
},
{
  id: 'instant-replay-218',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Following a rebounding sequence, Player A5 punches Player B5 and is assessed a punching foul and ejected. Unseen by the officials was an intentional elbow thrown by B5 that contacted A5 in the back of the head just before the punch.',
  question:
    'How should the officials use instant replay to administer penalties when replay reveals that B5 intentionally elbowed A5 in the head immediately before A5’s punch?',
  options: {
    a: 'Replay cannot be used to add a foul on B5 since the elbow was unseen; only A5’s original punching foul and ejection stand',
    b: 'Replay is used only to confirm A5’s punch; B5’s elbow is ignored because the whistle was for the punch',
    c: 'Replay is used to review the punching foul and ejection; upon seeing B5’s elbow to the head immediately followed by A5’s punch, the officials may assess fighting technical fouls to both players and eject both',
    d: 'The earlier elbow by B5 cancels A5’s punch; no one is ejected once replay shows both actions'
  },
  correctAnswer: 'c',
  ruling:
    'The officials use instant replay to review the punching foul and A5’s ejection. When replay shows B5’s intentional elbow to A5’s head immediately preceding the punch, the officials may now assess fighting technical fouls to each player and eject both A5 and B5 for their roles in the altercation.',
  ruleReference:
    'Rule 13, Section I (a)(4); Rule 13, Section II (d)',
  casebookReference: 'Page 60, Question 218'
},
{
  id: 'instant-replay-219',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'As Team A advances the ball into the frontcourt during live play, Team B’s head coach inadvertently steps outside the coaches box and onto the playing court while giving instructions. Player A4 takes a looping path and appears to intentionally collide with the coach. The coach for Team B is assessed a technical foul for a coaches box violation and entering the court.',
  question:
    'Can instant replay be used to determine whether Player A4 should also be penalized for intentionally colliding with Team B’s head coach, and what types of penalties may be assessed?',
  options: {
    a: 'No, replay may never be used to review contact between a player and a coach',
    b: 'Yes, replay may be utilized if a player commits a hostile act against a coach; if A4 is found to have intentionally initiated physical contact or engaged in an unsportsmanlike act toward the coach, he may be assessed a technical foul and, if warranted, ejected',
    c: 'Yes, but replay may only confirm the technical foul on the coach, not add a foul on A4',
    d: 'No, because the coach caused the contact by being on the floor, A4 cannot be penalized even if replay is used'
  },
  correctAnswer: 'b',
  ruling:
    'Instant replay may be utilized if a player commits a hostile act against a coach. Replay can be used to examine A4’s conduct immediately prior to and following the contact, determine his level of involvement, and then assess the appropriate penalty. If A4 is deemed to have engaged in an unsportsmanlike act toward the opposing coach (such as intentionally initiating physical contact), he may be assessed a technical foul and, depending on the circumstances, ejected from the game.',
  ruleReference:
    'Rule 12A, Section V (a and b); Rule 13, Section I (a)(4); Rule 13, Section II (d)',
  casebookReference: 'Page 60, Question 219'
},
{
  id: 'instant-replay-220',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'During a review to confirm that a successful basket was released prior to the end of a period, the Replay Center Official notices that the game clock froze for approximately 0.3 seconds.',
  question:
    'If the game clock is discovered on replay to have frozen for about 0.3 seconds during a last-second scoring play, what should the Replay Center Official do?',
  options: {
    a: 'Ignore the freeze, since minor clock malfunctions cannot be corrected once play stops',
    b: 'Immediately order a replay of the final possession with the correct time on the clock',
    c: 'Digitally time how long the game clock froze, or time the play from start to release, and make a ruling on whether the shot beat the clock based on that information',
    d: 'Automatically nullify the basket because the clock malfunctioned during the play'
  },
  correctAnswer: 'c',
  ruling:
    'When the game clock is seen to have frozen during a last-second scoring play, the Replay Center Official will digitally time how long the clock froze or time the play from the start of the sequence until the ball is released. Based on that precise timing, the Replay Center Official will rule whether the shot was released before the end of the period and whether the basket should count.',
  ruleReference: 'Rule 13, Section I (a)(5)',
  casebookReference: 'Page 61, Question 220'
}
{
  id: 'instant-replay-221',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Player A1’s frontcourt pass is deflected into the backcourt. As Player B1 retreats to retrieve the ball, he is fouled from behind. The officials assess a common foul but are not reasonably certain whether B1 was fouled prior to or after controlling the ball.',
  question:
    'When officials are unsure whether Player B1 was fouled before or after gaining control of the ball on a deflection into the backcourt, how should instant replay be used?',
  options: {
    a: 'Replay may not be used on common fouls unless a coach challenges',
    b: 'Replay should only determine who committed the foul, not the timing of the foul',
    c: 'Replay should determine whether the foul met the criteria to be ruled a clear-path foul, and the Replay Center Official will instruct the calling official on the correct penalty',
    d: 'Replay is used only to see whether B1 had started a shooting motion'
  },
  correctAnswer: 'c',
  ruling:
    'The officials use instant replay to determine the timing of the foul relative to B1’s control of the ball. The Replay Center Official will determine whether the foul met the criteria to be ruled a clear-path foul and inform the calling official of the correct ruling.',
  ruleReference: 'Rule 13, Section I (a)(8)',
  casebookReference: 'Page 61, Question 221'
},
{
  id: 'instant-replay-222',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Player A1 throws a long pass to A2, who dribbles once and is fouled from behind by B2 as he gathers the ball to shoot. Officials rule a common foul but are not reasonably certain whether A2 gathered the ball before the foul.',
  question:
    'How should replay be used when officials are unsure whether A2 gathered the ball before being fouled from behind on a long pass?',
  options: {
    a: 'Replay cannot be used unless the pass was tipped',
    b: 'Replay determines whether the foul occurred before or after the gather: before = clear-path foul; after = common shooting foul',
    c: 'Replay automatically upgrades the foul to a flagrant if contact occurs from behind',
    d: 'Replay is used only if the shot goes in'
  },
  correctAnswer: 'b',
  ruling:
    'The Replay Center Official stops the video at the moment of the foul and determines whether the foul occurred prior to the gather (clear-path) or after the gather (common shooting foul).',
  ruleReference: 'Rule 13, Section I (a)(8)',
  casebookReference: 'Page 61, Question 222'
},
{
  id: 'instant-replay-223',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'With 1:23 remaining in the fourth period, the ball goes out of bounds. The officials are uncertain whether A1 or B1 last touched the ball.',
  question:
    'If officials doubt which player last touched the ball with 1:23 remaining in the fourth period, how should the situation be administered?',
  options: {
    a: 'Officials immediately use replay, since all out-of-bounds plays under 2:00 are automatically reviewable',
    b: 'Officials signal a jump ball because they are unsure, and replay may only be triggered through a Coach’s Challenge',
    c: 'Play continues with the original ruling because replay is not allowed during the final two minutes',
    d: 'Officials award alternating-possession'
  },
  correctAnswer: 'b',
  ruling:
    'Because officials are unsure, they should signal a jump ball. Replay cannot automatically be used for out-of-bounds decisions except through a Coach’s Challenge. Thus, one of the coaches must use a Challenge to trigger replay review.',
  ruleReference:
    'Rule 6, Section V (a)(10); Rule 6, Section VI (a)(3); Rule 8, Section II (d); Rule 14, Section I (c) (NOTE)',
  casebookReference: 'Page 61, Question 223'
},
{
  id: 'instant-replay-224',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Player A1 is fouled on a field goal attempt just as the shot clock expires. Officials are uncertain whether the foul occurred before or after the expiration of the shot clock.',
  question:
    'When a foul and a shot-clock expiration occur nearly simultaneously, how does instant replay determine the correct outcome?',
  options: {
    a: 'Replay cannot be used because the foul occurred before the horn',
    b: 'Replay determines only whether the ball hit the rim, not the timing of the foul',
    c: 'Replay determines whether the foul occurred before the expiration and whether the shot was released before the horn, awarding free throws accordingly',
    d: 'Replay is used only if the shot goes in'
  },
  correctAnswer: 'c',
  ruling:
    'The Replay Center Official stops the video at the moment of the foul and determines whether it occurred before the expiration. If the shot was released before the horn, free throws are administered. If the foul occurred after the expiration and the ball had been released, free throws may still apply; if the ball was still in hand, no foul is administered.',
  ruleReference: 'Rule 13, Section I (a)(7)',
  casebookReference: 'Page 61, Question 224'
},
{
  id: 'instant-replay-225',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'Players A1 and B1 are assessed double technical fouls, but the altercation does not immediately resolve itself. Officials trigger instant replay.',
  question:
    'During replay review of an altercation with double technical fouls, may either technical foul be upgraded or downgraded?',
  options: {
    a: 'No, technical fouls cannot be changed during replay, only confirmed',
    b: 'Yes, either or both technical fouls may be upgraded or downgraded after reviewing involvement and actions',
    c: 'Replay may only downgrade, never upgrade a technical foul',
    d: 'Replay can change the fouls only if both coaches agree'
  },
  correctAnswer: 'b',
  ruling:
    'Replay may be used to upgrade or downgrade any technical foul for an altercation. Officials also evaluate each player’s level of involvement and assess appropriate penalties.',
  ruleReference:
    'Rule 13, Section I (a)(4); Rule 13, Section II (c); Rule 13, Section II (d)(1 and 3)',
  casebookReference: 'Page 61, Question 225'
},
{
  id: 'instant-replay-226',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Player B1 is assessed a common foul that is being reviewed for potential flagrant criteria. Immediately afterward, Player A3 is assessed a technical foul for escalating the situation. Replay shows A3 was actually a peacemaker, not an escalator.',
  question:
    'Can A3’s technical foul for escalating be rescinded after instant replay shows he acted as a peacemaker?',
  options: {
    a: 'No, once a technical foul is called it cannot be removed',
    b: 'Yes, replay may downgrade or rescind technical fouls during reviews of altercations or flagrant fouls',
    c: 'Yes, but only if the opposing coach agrees',
    d: 'No, replay may only upgrade fouls, not downgrade them'
  },
  correctAnswer: 'b',
  ruling:
    'Technical fouls may be upgraded or downgraded during replay review of a Player Altercation or flagrant foul. Therefore, A3’s technical foul may be rescinded.',
  ruleReference:
    'Rule 13, Section I (a)(3); Rule 13, Section II (c)',
  casebookReference: 'Page 61, Question 226'
},
{
  id: 'instant-replay-227',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 1:23 of the fourth period, officials rule that Team A hit the ball out-of-bounds. Team A calls timeout and legally challenges the ruling. Replay shows B1 had his hand on the ball and A1 struck that part of the hand, causing it to go out.',
  question:
    'After a Challenge, replay shows A1 hit B1’s hand while it was in contact with the ball, causing it to go out of bounds. How should the Replay Center Official rule?',
  options: {
    a: 'Award the ball to Team A, since A1 made contact with the defender’s hand',
    b: 'Award the ball to Team B, because the defender’s hand is considered part of the ball',
    c: 'Order a jump ball because both players touched the ball simultaneously',
    d: 'Nullify the challenge because replay cannot overturn hand-contact rulings'
  },
  correctAnswer: 'b',
  ruling:
    'The defender’s hand, when in contact with the ball, is considered part of the ball. Since A1 hit that part of the “ball” out of bounds, the original ruling is confirmed and the ball is awarded to Team B.',
  ruleReference:
    'Rule 8, Section II (c); Rule 14, Section I (c); Rule 14, Section III (b)',
  casebookReference: 'Page 61, Question 227'
},
{
  id: 'instant-replay-228',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Player A1 inbounds the ball at 0.8. The game clock starts early due to a timer error. A2 receives the pass, turns, shoots, and scores as the horn sounds.',
  question:
    'If the clock starts early during a last-second play and A2 makes a successful basket, what should replay determine?',
  options: {
    a: 'Replay is not permitted because the timer error occurred before the inbounds was touched',
    b: 'Replay must determine how much time improperly ran off the clock prior to the legal touch, whether the shot was released before 0:00, and reset the clock accordingly',
    c: 'Replay automatically nullifies the basket because of the early start',
    d: 'Replay only determines whether the ball was released before 0:00, not clock-start issues'
  },
  correctAnswer: 'b',
  ruling:
    'Replay determines how much time incorrectly ran off the clock before the legal touch. If the shot was released before 0:00 and the time from touch to basket is less than 0.8 seconds, the basket counts and the clock is reset to the lost time.',
  ruleReference: 'Rule 13, Section I (a)(5)',
  casebookReference: 'Page 61–62, Question 228'
},
{
  id: 'instant-replay-229',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 0.8, A1 inbounds to A2. A2 dribbles twice on a drive to the basket. Officials notice the game clock only starts after his second dribble. A2 scores.',
  question:
    'If the clock starts late on a last-second play, how does replay determine whether the successful basket counts?',
  options: {
    a: 'Replay subtracts 0.3 seconds automatically',
    b: 'Replay times the play digitally from touch to release; the ball must be out of A2’s hands at 0.8 to count',
    c: 'Replay cannot correct clock-start errors',
    d: 'Replay counts the basket automatically because play continued uninterrupted'
  },
  correctAnswer: 'b',
  ruling:
    'Replay uses the digital clock to time the play from the moment the ball is legally touched until release. The shot must be released by 0.8 seconds to count.',
  ruleReference: 'Rule 13, Section I (a)(5)',
  casebookReference: 'Page 62, Question 229'
},
{
  id: 'instant-replay-230',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'A loose ball foul on B5 occurs at 4:44 of the first period and is incorrectly recorded as the 4th team foul. At 3:44, the officials are informed that it was the 5th team foul and Team A never shot free throws. The officials are unsure who was fouled.',
  question:
    'May instant replay be used to determine which Team A player was fouled so that the correct free throw shooter can be identified?',
  options: {
    a: 'No, replay may only be used for last-second timing issues',
    b: 'Yes, replay may determine who was fouled and who should shoot the free throws, but not who committed the foul',
    c: 'Replay may determine who committed the foul but not who was fouled',
    d: 'Replay cannot be used because the error occurred more than one minute earlier'
  },
  correctAnswer: 'b',
  ruling:
    'Replay is used to determine who was fouled at 4:44 so the proper shooter can attempt the two penalty free throws. Replay cannot be used to determine who committed the foul.',
  ruleReference:
    'Rule 2, Section VI (a); Rule 13, Section I (a)(9)',
  casebookReference: 'Page 62, Question 230'
}
{
  id: 'instant-replay-231',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'Player A1 attempts the first of two free throws. Team B’s coach argues that Player A3, not A1, should be the shooter and requests replay.',
  question:
    'May officials use instant replay to determine whether the correct free throw shooter was at the line after the first free throw has already been released?',
  options: {
    a: 'Yes, officials may use replay at any time to verify the correct shooter',
    b: 'No, replay must occur before the release of the first free throw',
    c: 'Yes, but only if the incorrect shooter made the first free throw',
    d: 'Replay may only be used if the play occurred in the last two minutes'
  },
  correctAnswer: 'b',
  ruling:
    'Instant replay must be used prior to the release of the first free throw. After the shot is released, replay cannot be used. However, if the officials *know* the wrong shooter attempted the free throw, the attempt is nullified and the proper shooter attempts both free throws.',
  ruleReference:
    'Rule 2, Section VI (a)(4); Rule 13, Section II (l)',
  casebookReference: 'Page 62, Question 231'
},
{
  id: 'instant-replay-232',
  category: 'Instant Replay',
  difficulty: 'rookie',
  scenario:
    'A technical foul is assessed to Team B. Team A takes a timeout. After the timeout, the officials realize they are unsure whether Player A6 was in the game and eligible to shoot the technical free throw.',
  question:
    'May instant replay be utilized to determine whether Player A6 was in the game at the time the technical foul was assessed?',
  options: {
    a: 'Yes, replay may be used to determine the eligibility of any shooter',
    b: 'Yes, but only during the last two minutes of the fourth period',
    c: 'No, officials must check the play-by-play and lineup information instead',
    d: 'Yes, if the opposing coach requests a Coach’s Challenge'
  },
  correctAnswer: 'c',
  ruling:
    'Instant replay is not permitted for determining whether a player was in the game for technical free throw eligibility. Officials must use the play-by-play and scorer’s records to confirm the five players who were on the court.',
  ruleReference: 'Rule 13, Section I (a)(9)',
  casebookReference: 'Page 62, Question 232'
},
{
  id: 'instant-replay-233',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Team A inbounds with 1:24 left in the fourth period and 24 on the shot clock. A1’s field goal attempt comes very close to the rim. The shot clock resets from 1 to 14. A5 immediately rebounds and scores. Officials have doubt whether the ball touched the rim.',
  question:
    'If any official has doubt whether A1’s shot touched the rim on a possession under 2:00, how must the play be handled?',
  options: {
    a: 'Play continues; replay cannot be used unless a Coach’s Challenge is available',
    b: 'Play is stopped before Team B inbounds, and replay determines whether the rim was hit and whether the clock reset was correct',
    c: 'Replay is only used if the basket affects the margin of the game',
    d: 'Officials must award alternating possession if unsure'
  },
  correctAnswer: 'b',
  ruling:
    'Officials must stop play before the next inbounds and have the Replay Center Official review whether the ball hit the rim. If it did, the basket counts. If it did not and the shot clock was incorrectly reset, the Replay Center Official marks in from the throw-in and applies the digital timing rule for the 24-second window.',
  ruleReference:
    'Rule 7, Section IV (d)(1); Rule 13, Section I (a)(10); Rule 13, Section II (j)',
  casebookReference: 'Page 62–63, Question 233'
},
{
  id: 'instant-replay-234',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Team A inbounds at 1:24 of the fourth with 24 on the shot clock. A1’s shot barely misses or grazes the rim, and the shot clock is *not* reset. A5 rebounds and dunks just as the shot clock expires. Officials whistle a violation.',
  question:
    'If the officials have doubt whether A1’s shot touched the rim before ruling a shot clock violation on A5’s dunk, how should the play be administered?',
  options: {
    a: 'Officials must uphold the violation; replay cannot adjust shot clock resets',
    b: 'Replay determines rim contact. If the rim was hit, the basket counts; if not, the violation stands',
    c: 'Replay determines only whether A5 released the dunk before 0.0 on the shot clock, not rim contact',
    d: 'The violation is ignored because A5 was in a shooting motion'
  },
  correctAnswer: 'b',
  ruling:
    'Replay reviews whether A1’s shot hit the rim. If the rim was contacted and the shot clock should have reset, A5’s basket is scored. If not, the shot clock violation stands. Replay may also check whether A5 released the shot before expiration.',
  ruleReference:
    'Rule 7, Section IV (d)(1); Rule 13, Section I (a)(7 and 10); Rule 13, Section II (g and j)',
  casebookReference: 'Page 63, Question 234'
},
{
  id: 'instant-replay-235',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 1:24 of overtime, A1’s shot comes close to the rim and the shot clock is reset from 1 to 14. A5 rebounds and is fouled on the put-back. Officials doubt whether the ball touched the rim.',
  question:
    'When a shot-clock reset is questionable under 2:00 of overtime and a foul occurs during the extended possession, how must replay be applied?',
  options: {
    a: 'Replay cannot be used once a foul occurs; the put-back free throws must stand',
    b: 'Replay reviews only whether the foul was a shooting foul',
    c: 'Replay determines whether the ball hit the rim. If not, digital timing is applied to determine whether 24 seconds elapsed before the foul or shot release, nullifying the foul if a violation occurred first',
    d: 'Replay automatically upholds the foul regardless of rim contact'
  },
  correctAnswer: 'c',
  ruling:
    'If the ball hit the rim, the foul stands. If not, the officials use digital timing from the throw-in to determine whether 24 seconds expired before the shot or foul. If the violation occurred first, the foul is nullified and a shot clock violation is assessed.',
  ruleReference:
    'Rule 7, Section IV (d)(1); Rule 13, Section I (a)(10); Rule 13, Section II (j)',
  casebookReference: 'Page 63, Question 235'
},
{
  id: 'instant-replay-236',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'In overtime at 1:14, A1’s shot comes close to hitting the rim and the shot clock is not reset. A5 rebounds and is fouled hard on a put-back that scores as the shot clock horn sounds. Officials doubt whether A1’s shot touched the rim.',
  question:
    'If a potential flagrant foul and a potential shot clock violation occur simultaneously under 2:00, how does replay determine the correct outcome?',
  options: {
    a: 'Replay first evaluates the shot clock; flagrant fouls may not be reviewed afterward',
    b: 'Replay evaluates the flagrant only; the shot clock violation cannot be overturned',
    c: 'Replay reviews both: whether the foul meets FF criteria, AND whether the ball hit the rim; if no rim contact, digital timing determines whether the put-back should count or a violation occurred first',
    d: 'Replay cannot be used because the horn sounded during a shooting motion'
  },
  correctAnswer: 'c',
  ruling:
    'Replay reviews both (1) whether the foul was a FF1 and (2) whether A1’s shot hit the rim. If not, timing determines whether 14 seconds elapsed before the foul or put-back release. If 14 seconds expired, the basket is nullified and A5 shoots two free throws with Team A inbounding as after a flagrant.',
  ruleReference:
    'Rule 7, Section IV (d)(1); Rule 13, Section I (a)(10); Rule 13, Section II (j)',
  casebookReference: 'Page 63–64, Question 236'
},
{
  id: 'instant-replay-237',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'At 1:24 in the fourth, A1’s shot barely misses or grazes the rim. The shot clock resets from 3 to 14. A5 rebounds and passes to A3 for an immediate made corner jumper. Officials are uncertain whether A1’s shot hit the rim.',
  question:
    'How must officials handle a made field goal when there is doubt whether a prior shot touched the rim under 2:00?',
  options: {
    a: 'Allow the basket and review the play at the next stoppage',
    b: 'Stop play before Team B inbounds and use replay to confirm rim contact; if the reset was incorrect, apply digital-timing rules',
    c: 'Automatically rule a shot clock violation',
    d: 'Use alternating possession to resume play'
  },
  correctAnswer: 'b',
  ruling:
    'Officials must stop play prior to the inbound and signal for replay. If A1’s shot touched the rim, the basket stands. If not, the reset was incorrect and digital timing is applied from the throw-in at 1:24.',
  ruleReference:
    'Rule 7, Section IV (d)(1); Rule 13, Section I (a)(10); Rule 13, Section II (j)',
  casebookReference: 'Page 64, Question 237'
},
{
  id: 'instant-replay-238',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'At 1:24 in the fourth, A1’s shot comes close to the rim and the shot clock is not reset. As A5 and B5 battle for the loose ball, the shot clock expires and a violation is whistled. Officials are unsure whether A1’s shot touched the rim.',
  question:
    'How is a shot clock violation administered when replay must determine whether the ball hit the rim under 2:00?',
  options: {
    a: 'Replay is not permitted because a violation was already called',
    b: 'Replay determines rim contact: if no rim contact, violation stands; if rim contact occurred, the shot clock resets and play resumes with a center-court jump ball unless imminent possession is determined',
    c: 'Officials overturn the violation automatically because contact was uncertain',
    d: 'Replay determines only whether A5 or B5 had possession, not rim contact'
  },
  correctAnswer: 'b',
  ruling:
    'Replay may confirm whether the ball hit the rim. If not, the violation stands. If it did, the shot clock should have been reset and play resumes with a jump ball at center court unless imminent possession is established.',
  ruleReference:
    'Rule 7, Section IV (c)(4); Rule 13, Section I (a)(10); Rule 13, Section II (j)',
  casebookReference: 'Page 64, Question 238'
},
{
  id: 'instant-replay-239',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 1:24 of the fourth, A1’s shot does not reset the clock. A5 rebounds and passes to A3, whose immediate shot is ruled late and a shot-clock violation is called. Officials are not sure whether A1’s shot hit the rim.',
  question:
    'When A3’s shot is ruled late but officials doubt whether A1’s earlier shot touched the rim, how must replay resolve the sequence?',
  options: {
    a: 'Replay cannot overturn a shot clock violation once it is called',
    b: 'If A1’s shot did not hit the rim, the violation stands; if it did, replay must determine whether Team A or Team B had actual or imminent possession at the whistle—or order a center-court jump ball',
    c: 'Replay awards the ball to Team A automatically if the whistle occurred during A3’s motion',
    d: 'Replay resets the shot clock to 14 regardless of rim contact'
  },
  correctAnswer: 'b',
  ruling:
    'Replay determines rim contact. If the ball did not hit the rim, the violation stands. If it did, then replay evaluates whether the whistle occurred while A3 had the ball (Team A retains) or after release (possession awarded to team with actual or imminent control). If neither team had control, a jump ball is administered.',
  ruleReference:
    'Rule 4, Section IV (i); Rule 13, Section I (a)(10); Rule 13, Section II (j)',
  casebookReference: 'Page 64–65, Question 239'
},
{
  id: 'instant-replay-240',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'With 1.3 on the game clock, A1 inbounds the ball and B1 immediately deflects it out of bounds. The clock erroneously runs to 0:00 before stopping.',
  question:
    'If the game clock improperly runs to 0:00 on a deflected inbounds pass with 1.3 remaining, how must replay be applied?',
  options: {
    a: 'Officials simply add 0.3 seconds back to the clock',
    b: 'Replay must time from legal touch to out-of-bounds and reduce the game clock accordingly; if the clock did not reach 0:00, a standard 0.3 subtraction applies',
    c: 'Replay cannot adjust the game clock during live-ball sequences',
    d: 'The ball is awarded to the defense because the clock error creates a dead ball'
  },
  correctAnswer: 'b',
  ruling:
    'Because the game clock incorrectly ran to 0:00, replay timing overrides the automatic 0.3 deduction rule. The Replay Center Official times the sequence from touch to out-of-bounds and subtracts that exact duration from 1.3.',
  ruleReference:
    'Rule 13, Section I (a)(5); Rule 13, Section II (e)',
  casebookReference: 'Page 65, Question 240'
}
{
  id: 'instant-replay-241',
  category: 'Instant Replay',
  difficulty: 'rookie',
  scenario:
    'Player A1’s field goal attempt at 2:01 of the fourth period comes close to hitting the rim. Officials stop play at 1:58 and are uncertain whether the ball hit the rim.',
  question:
    'May instant replay be used to determine whether the ball hit the rim on A1’s shot at 2:01 since play was stopped at 1:58?',
  options: {
    a: 'No, replay may only be used on rim questions inside the final minute',
    b: 'Yes, replay may be used anytime after 2:00 to review rim contact',
    c: 'Yes, because whenever officials stop play with 2:00 or less in the fourth, replay may determine rim contact',
    d: 'No, rim contact determinations may only occur after a Coach’s Challenge'
  },
  correctAnswer: 'c',
  ruling:
    'Whenever officials stop play and there is 2:00 or less remaining in the fourth period, instant replay may be used to determine whether the ball touched the rim.',
  ruleReference: 'Rule 13, Section I (a)(10)',
  casebookReference: 'Page 65, Question 241'
},
{
  id: 'instant-replay-242',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 1:45 of overtime, Player A1’s layup is ruled goaltended by B1 for touching the ball after it hit the backboard. The official then has doubt whether the ball was touched before or after the backboard.',
  question:
    'How is replay used when officials have doubt whether a goaltending violation in overtime occurred before or after the ball hit the backboard?',
  options: {
    a: 'Replay may not be used unless the shot was a potential game-winner',
    b: 'Replay determines only vertical cylinder violations, not backboard timing',
    c: 'Replay reviews whether the goaltending call was correct; if overturned, possession is awarded based on actual or imminent control at the whistle—or a jump ball if neither team had control',
    d: 'Replay automatically nullifies the goaltending and awards the ball to the defense'
  },
  correctAnswer: 'c',
  ruling:
    'Replay determines whether the goaltending was correctly assessed. If overturned, the play is treated as a suspension of play. Possession goes to the team with actual or imminent possession; otherwise, a jump ball is held at center court. If the offensive player was in a continuous shooting motion and the shot was successful, two points are awarded.',
  ruleReference:
    'Rule 4, Section IV (i); Rule 13, Section I (a)(12); Rule 13, Section II (l)',
  casebookReference: 'Page 65, Question 242'
},
{
  id: 'instant-replay-243',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 2:01 of the fourth period, A1’s shot is goaltended by B5 at 2:00. The official doubts whether the ball had begun its downward flight.',
  question:
    'How should officials use replay when a goaltending call occurs exactly at 2:00 and there is doubt whether the ball was on its downward flight?',
  options: {
    a: 'Replay cannot be used because only buzzer-beaters are reviewable at 2:00',
    b: 'Replay may review only basket interference, not downward-flight goaltending',
    c: 'Replay must be used to confirm or overturn the goaltending call since it occurred in the final two minutes',
    d: 'Replay is used only if the defensive team requests it'
  },
  correctAnswer: 'c',
  ruling:
    'Because the call occurs in the last two minutes of the fourth period, replay must be used to determine whether the goaltending was correctly assessed. If overturned, the play becomes a suspension-of-play ruling with possession determined by actual or imminent control.',
  ruleReference:
    'Rule 4, Section IV (i); Rule 13, Section I (a)(12); Rule 13, Section II (l)',
  casebookReference: 'Page 65–66, Question 243'
},
{
  id: 'instant-replay-244',
  category: 'Instant Replay',
  difficulty: 'rookie',
  scenario:
    'At 4:56 of the second period, the official doubts whether a goaltending violation was correctly called because the ball may have been blocked prior to touching the backboard.',
  question:
    'May instant replay be used to review a goaltending call at 4:56 of the second period?',
  options: {
    a: 'Yes, replay may be used to review any goaltending call at any time',
    b: 'Yes, but only if the ball touches the rim after the block',
    c: 'No, replay may only be used on goaltending violations in the last two minutes of the fourth period or overtime',
    d: 'Yes, but only if one coach challenges'
  },
  correctAnswer: 'c',
  ruling:
    'Replay review of goaltending is only permitted during the last two minutes of the fourth period or the last two minutes of any overtime period.',
  ruleReference: 'Rule 13, Section I (a)(12)',
  casebookReference: 'Page 66, Question 244'
},
{
  id: 'instant-replay-245',
  category: 'Instant Replay',
  difficulty: 'rookie',
  scenario:
    'At 1:23 of the fourth period, officials call a good blocked shot but are unsure whether the ball had started its downward flight.',
  question:
    'May instant replay be used to determine whether a no-call on potential goaltending was correct?',
  options: {
    a: 'Yes, replay may always review downward-flight calls',
    b: 'No, replay may only be used on called goaltending violations, not no-calls',
    c: 'Yes, but only if the shot clock was under 1.0',
    d: 'Replay can be used if the defensive team requests it'
  },
  correctAnswer: 'b',
  ruling:
    'Replay may be used only when a goaltending violation is *called*. It cannot be used to review no-calls.',
  ruleReference: 'Rule 13, Section I (a)(12)',
  casebookReference: 'Page 66, Question 245'
},
{
  id: 'instant-replay-246',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'At 23.4 of the fourth period, Player A5 taps in A1’s long shot. The official whistles offensive basket interference but is not certain whether the shot was short and legally tapped.',
  question:
    'May instant replay be used to review an offensive basket interference call in the last two minutes, and how is the play administered?',
  options: {
    a: 'No, basket interference is never reviewable',
    b: 'Yes, but replay may only determine possession, not scoring',
    c: 'Yes—replay determines if the shot had a chance to score. If it did, the violation is confirmed; if not, the tap-in counts',
    d: 'Replay is allowed only if the defense challenges the call'
  },
  correctAnswer: 'c',
  ruling:
    'Because this occurs inside the final two minutes, replay may determine whether the shot had a chance to score. If the shot was going to be short and the tap was legal, two points are awarded; otherwise, the violation is confirmed.',
  ruleReference: 'Rule 13, Section I (a)(12)',
  casebookReference: 'Page 66, Question 246'
},
{
  id: 'instant-replay-247',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 1:34 of the fourth period, A2 shoots a runner and B5 may have touched the ball on its downward flight. A5 rebounds and begins his put-back motion. At 1:33, just before A5 releases the successful put-back, an official whistles goaltending on B5. Replay is initiated.',
  question:
    'How should replay adjudicate a goaltending whistle that occurs while A5 is in a continuous shooting motion for a successful put-back?',
  options: {
    a: 'If goaltending is overturned, no basket can count because the whistle stopped play',
    b: 'If goaltending is confirmed, score A2’s original shot, not A5’s put-back',
    c: 'If goaltending is confirmed, score A2’s basket and reset the clock to 1:34; if overturned, score A5’s put-back and keep the clock at 1:33',
    d: 'Replay may only determine whether B5 touched the ball; scoring cannot be adjusted'
  },
  correctAnswer: 'c',
  ruling:
    'If replay confirms goaltending, two points are awarded for A2’s shot, the clock resets to 1:34, and Team B inbounds. If overturned, replay checks ball location at the whistle: A5 was in his continuous shooting motion and scored, so the put-back counts and the clock stays at 1:33.',
  ruleReference:
    'Rule 4, Section XV; Rule 13, Section I (a)(12); Rule 13, Section I (l)',
  casebookReference: 'Page 66–67, Question 247'
},
{
  id: 'instant-replay-248',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 1:23 of the fourth period, the lead official calls a blocking foul on B3, believing his heel was in the Restricted Area. The slot official believes both feet were out. Doubt is created.',
  question:
    'When a blocking foul is called because the defender was thought to be in the Restricted Area but doubt exists, how should instant replay be used?',
  options: {
    a: 'Replay may not be used for RA determinations',
    b: 'Replay must be used; if B3 was outside the RA and legal, the foul becomes an offensive foul',
    c: 'Replay is used only to confirm whether B3 was stationary, not to determine RA location',
    d: 'Replay automatically turns all RA block calls into double fouls'
  },
  correctAnswer: 'b',
  ruling:
    'Inside the last two minutes, replay must be utilized to determine whether the defender was inside or outside the RA. If outside and in legal guarding position, the foul is changed to an offensive foul. If inside or illegal, the blocking foul is confirmed.',
  ruleReference:
    'Rule 13, Section I (a)(11); Rule 13, Section II (k)',
  casebookReference: 'Page 67, Question 248'
},
{
  id: 'instant-replay-249',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 1:45 of overtime, the lead official whistles a blocking foul on B3 but does not point to the Restricted Area. The slot official believes B3’s feet were outside the RA.',
  question:
    'When a blocking foul is called for reasons unrelated to RA positioning, may replay be used to review whether B3 was inside or outside the Restricted Area?',
  options: {
    a: 'Yes, all RA plays are automatically reviewable',
    b: 'No, replay may only be used if the reason for the blocking foul was RA proximity',
    c: 'Yes, but only if the offensive coach challenges',
    d: 'Replay is mandatory on all blocking fouls inside the final two minutes'
  },
  correctAnswer: 'b',
  ruling:
    'Replay is permitted only when the blocking foul is called *because* the defender may have been inside the RA. If the official does not indicate RA involvement, replay cannot be used for RA review.',
  ruleReference: 'Rule 13, Section I (a)(11)',
  casebookReference: 'Page 67, Question 249'
},
{
  id: 'instant-replay-250',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 1:35 of double overtime, the slot official whistles an offensive foul on A1 after contact with secondary defender B3. The lead official observes B3 inside the RA. There is doubt about B3’s position.',
  question:
    'How does replay resolve conflicting observations about a defender’s RA location and legal guarding position in the last two minutes of overtime?',
  options: {
    a: 'Replay cannot be used because the foul was called offensive',
    b: 'Replay determines RA location and guarding position; if B3 was in RA or not legal, the foul becomes blocking unless A1 used unnatural contact (e.g., wipeout, knee), in which case A1 is charged',
    c: 'Replay always confirms the original call unless both officials disagree',
    d: 'Replay automatically results in a double foul if RA involvement is unclear'
  },
  correctAnswer: 'b',
  ruling:
    'Replay is used to determine whether B3 was inside or outside the RA and whether he was in legal guarding position. If B3 was illegal, a blocking foul is assessed—unless A1 initiated illegal contact (unnatural knee, wipeout), in which case an offensive foul is ruled.',
  ruleReference:
    'Rule 13, Section I (a)(11); Rule 13, Section II (k)',
  casebookReference: 'Page 67, Question 250'
}

{
  id: 'instant-replay-251',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'At 3:45 of the third period, defender B3 fouls screener A3 as A1 attempts a successful basket. Officials are uncertain whether A1 had started his upward shooting motion prior to the foul.',
  question:
    'When a foul occurs close to the shooter’s upward motion, may instant replay be used to determine whether to score the basket?',
  options: {
    a: 'No, replay cannot be used to determine when the shooting motion began',
    b: 'Yes, but only if the offensive coach requests a coach’s challenge',
    c: 'Yes, replay may determine whether the shooter had begun his upward motion before the foul; the on-court ruling is overturned only with clear and conclusive evidence',
    d: 'Yes, but only during the final two minutes of regulation'
  },
  correctAnswer: 'c',
  ruling:
    'Replay may be used whenever officials are not reasonably certain whether the shooter began his shooting motion before the foul. A preliminary call must be made on the court, and it may only be overturned with clear and conclusive evidence.',
  ruleReference: 'Rule 13, Section I (a)(13)',
  casebookReference: 'Page 67, Question 251'
},
{
  id: 'instant-replay-252',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'An illegal screen is called on A5 at nearly the same moment A1 releases a successful two-point shot. Officials are uncertain whether the ball was still in A1’s hands.',
  question:
    'May instant replay be used to determine whether the foul occurred before or after the release of A1’s shot?',
  options: {
    a: 'No, offensive fouls cannot be reviewed on replay',
    b: 'Yes, replay determines whether the foul occurred before or after release; if before, the basket is disallowed; if after, it is scored as a loose-ball foul',
    c: 'Replay only determines whether the screen was legal, not timing',
    d: 'Replay is used only if the shot is a potential game-winner'
  },
  correctAnswer: 'b',
  ruling:
    'Replay is used to determine whether the ball was still in A1’s hands when the illegal screen occurred. The Replay Center Official stops the video at the time of the foul to determine whether A1 had released the shot.',
  ruleReference: 'Rule 13, Section I (a)(13)',
  casebookReference: 'Page 68, Question 252'
},
{
  id: 'instant-replay-253',
  category: 'Instant Replay',
  difficulty: 'rookie',
  scenario:
    'At 6:54 of the first period, defender B2 trips A2 during a throw-in. Officials are not certain whether the ball had been released prior to the foul.',
  question:
    'May replay be used to determine if a throw-in foul is an Away-From-the-Play (AFTP) foul?',
  options: {
    a: 'No, replay cannot be used on throw-in timing issues',
    b: 'Yes, replay determines the timing of the foul relative to the release of the throw-in and whether it meets AFTP criteria',
    c: 'Yes, but only if the foul is called in the last two minutes',
    d: 'Replay may only determine who committed the foul, not the timing'
  },
  correctAnswer: 'b',
  ruling:
    'Replay is permitted to determine exactly when the foul occurred relative to the release of the throw-in and whether the AFTP penalty applies.',
  ruleReference: 'Rule 13, Section I (a)(13)',
  casebookReference: 'Page 68, Question 253'
},
{
  id: 'instant-replay-254',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Player B1 fouls A1 very close to the buzzer ending the first period. Officials rule a two-shot foul. During replay, they observe B1’s foul meets the criteria for a FF1.',
  question:
    'May the common foul be upgraded to a flagrant foul during replay review of an end-of-period foul?',
  options: {
    a: 'No, replay may only confirm timing and cannot change the type of foul',
    b: 'Yes, any flagrant-level unsportsmanlike act seen on replay may be penalized even if not initially called',
    c: 'No, because the clock expired after the foul',
    d: 'Yes, but only if the shot was released before 0:00'
  },
  correctAnswer: 'b',
  ruling:
    'During replay the officials may upgrade, downgrade, or newly assess unsportsmanlike acts or unnecessary contact, including a Flagrant Foul Penalty 1.',
  ruleReference:
    'Rule 13, Section I (a)(3); Rule 13, Section II (e)(9)',
  casebookReference: 'Page 68, Question 254'
},
{
  id: 'instant-replay-255',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'During a block/charge instant replay review involving the Restricted Area, officials determine B5 was outside the RA but still sliding laterally after A1 began his upward shooting motion.',
  question:
    'If replay shows the defender was outside the Restricted Area but still moving illegally, what is the correct ruling?',
  options: {
    a: 'Offensive foul on A1 because the defender was outside the RA',
    b: 'Blocking foul on B5 because he was not in legal guarding position',
    c: 'Double foul since both players were moving',
    d: 'No call; play resumes with alternating possession'
  },
  correctAnswer: 'b',
  ruling:
    'Being outside the RA alone does not establish legal guarding position. Because B5 was still moving sideways after A1 began his shooting motion, replay confirms a blocking foul.',
  ruleReference: 'Rule 13, Section I (a)(11)',
  casebookReference: 'Page 68, Question 255'
},
{
  id: 'instant-replay-256',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'At 12.3 of the fourth, B5 is assessed a blocking foul for being inside the RA. Replay shows B5 was indeed inside the RA, but also shows A1 initiated contact with an unnaturally extended knee.',
  question:
    'How does replay adjudicate RA position when the offensive player initiates the first illegal contact?',
  options: {
    a: 'Blocking foul must remain because the defender was in the RA',
    b: 'Offensive foul on A1 because the unnaturally extended knee is the first illegal contact, unless the contact meets flagrant criteria',
    c: 'Double foul because both players committed illegal contact',
    d: 'Replay cannot alter an RA foul once called'
  },
  correctAnswer: 'b',
  ruling:
    'Although B5 was illegally inside the RA, A1’s unnaturally extended knee constitutes the first illegal contact and takes precedence. Replay instructs officials to assess an offensive foul unless the action meets flagrant criteria.',
  ruleReference: 'Rule 13, Section I (a)(11)',
  casebookReference: 'Page 68, Question 256'
},
{
  id: 'instant-replay-257',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'Following a timeout at 2:34 of the 1st period, Team A scores a 3-pointer. Officials have uncertainty whether Team A had six players on the court during the play.',
  question:
    'May replay be used to determine if Team A had too many players on the court, and what is the penalty if confirmed?',
  options: {
    a: 'No, replay cannot be used to count players',
    b: 'Yes; if six players are confirmed, Team B shoots one technical free throw and may choose to keep or erase the 3 points and resume from 2:34',
    c: 'Yes, but only if Team B challenges the play',
    d: 'Replay only determines whether a player was inbounds, not how many players were on the court'
  },
  correctAnswer: 'b',
  ruling:
    'Replay is permitted whenever officials have doubt regarding the number of players on the floor. If Team A had six players, Team B shoots one free throw for the technical. Team B’s coach then chooses: (1) resume from point-of-interruption OR (2) erase the 3 points, reset to 2:34, and award Team B the ball.',
  ruleReference: 'Rule 13, Section I (a)(14)',
  casebookReference: 'Page 68–69, Question 257'
},
{
  id: 'instant-replay-258',
  category: 'Instant Replay',
  difficulty: 'veteran',
  scenario:
    'After a traveling violation by B1 at 3:45 of the 2nd period, Team A inbounds and scores. Before the throw-in, officials discover Team B had six players on the court.',
  question:
    'When the defensive team had six players on the court before the throw-in, how is the penalty administered?',
  options: {
    a: 'The basket automatically counts and Team B loses a timeout',
    b: 'Team A shoots one technical free throw; then Team A’s coach chooses either to keep the score and resume at point-of-interruption or delete the score and replay from 3:45',
    c: 'Replay always deletes the made basket',
    d: 'Possession goes to Team B automatically'
  },
  correctAnswer: 'b',
  ruling:
    'A technical foul is issued to Team B. Any Team A player shoots one free throw. Team A’s coach then chooses: keep play from the point-of-interruption or delete the basket and reset the clock to 3:45 for a new inbound.',
  ruleReference: 'Rule 13, Section I (a)(14)',
  casebookReference: 'Page 69, Question 258'
},
{
  id: 'instant-replay-259',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Officials are asked: Who has authority to trigger instant replay in two different situations involving made baskets near the three-point line during different times of the game?',
  question:
    'Who may trigger replay, and when, for: (1) a made basket with 4:32 in the 1st period where the officials are unsure 2 vs 3; and (2) the same situation with 0:32 remaining in the second overtime?',
  options: {
    a: 'Only the on-court officials may trigger in both situations',
    b: 'Only the Replay Center Official may trigger in both situations',
    c: 'Replay Center and on-court officials may trigger in (1) before next timeout; in (2) only on-court officials may trigger immediately after the basket',
    d: 'Replay can only be triggered via Coach’s Challenge'
  },
  correctAnswer: 'c',
  ruling:
    'Situation (1): During the first 46 minutes of regulation or first 3 minutes of OT, either the Replay Center Official or on-court officials may trigger replay prior to the end of the next timeout/period break.  
Situation (2): During the last 2 minutes of the fourth or any OT, only the on-court officials may trigger replay, and it must occur immediately following the basket.',
  ruleReference:
    'Rule 13, Section I (b)(1); Rule 13, Section II (b)(1); Rule 13, Section II (f)(1)',
  casebookReference: 'Page 69–70, Question 259'
},
{
  id: 'instant-replay-260',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'With 17 seconds remaining in the fourth period, A3 is fouled by B3 while attempting a jumper near the three-point line. Officials are uncertain whether it was a 2- or 3-point attempt.',
  question:
    'Who may trigger replay in this situation, and what are the timing limits?',
  options: {
    a: 'Only the on-court officials may trigger, and only before the next dead ball',
    b: 'Only the Replay Center Official may trigger, and only after the first free throw',
    c: 'Replay Center Official has first opportunity; either party may trigger, but review must occur before A3’s first free throw is released',
    d: 'Replay may not be used for fouls near the three-point line'
  },
  correctAnswer: 'c',
  ruling:
    'Replay Center Official must immediately trigger replay if uncertain, but must do so before A3’s first free throw. If the Replay Center Official does not trigger, the on-court officials may independently trigger replay before the release of the first free throw.',
  ruleReference:
    'Rule 13, Section I (a)(6); Rule 13, Section II (f)(2)',
  casebookReference: 'Page 70, Question 260'
},
{
  id: 'instant-replay-261',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'Two situations involving a made three at different times: (1) with 5:15 in the second period and uncertainty whether the shot beat the shot clock; (2) with 0:32 in the fourth under the same circumstances.',
  question:
    'Who may trigger replay for possible shot-clock expiration in situations occurring (1) in the second period and (2) in the final 32 seconds of the fourth period?',
  options: {
    a: 'Replay is only allowed when the defense challenges',
    b: 'Replay Center Official triggers in both situations',
    c: 'Replay Center or on-court officials may trigger in (1) before the next timeout; but in (2), only on-court officials may trigger and must do so immediately',
    d: 'Only the on-court officials may trigger in both situations'
  },
  correctAnswer: 'c',
  ruling:
    'Situation (1): During the first 46 minutes of regulation, the Replay Center Official has first responsibility to trigger replay if uncertain, and may do so before the next timeout or period break.  
Situation (2): In the last two minutes, only the on-court officials may trigger replay, and they must do so immediately following the basket.',
  ruleReference:
    'Rule 13, Section II (a)(1); Rule 13, Section II (a)(7); Rule 13, Section II (g)',
  casebookReference: 'Page 70–71, Question 261'
},
{
  id: 'instant-replay-262',
  category: 'Instant Replay',
  difficulty: 'expert',
  scenario:
    'With 0:58 remaining in the fourth, B5 is called for goaltending on A2’s shot. Replay shows B5 did NOT goaltend, and B2 (already near the ball) secured possession immediately after the whistle.',
  question:
    'After overturning a goaltending call in the final minute, how should possession be determined?',
  options: {
    a: 'Jump ball at center court is mandatory',
    b: 'Award possession to Team A because they shot the ball',
    c: 'Award possession to Team B because B2 would have imminently gained possession at the time of the whistle, as evidenced by replay',
    d: 'Nullify the play entirely and resume at the previous point-of-interruption'
  },
  correctAnswer: 'c',
  ruling:
    'Replay overturns the goaltending call. Because B2 had actual or imminent possession in the natural continuation of the play, possession is awarded to Team B.',
  ruleReference:
    'Rule 4, Section XIV; Rule 13, Section I (a)(12); Rule 13, Section II (l)',
  casebookReference: 'Page 71, Question 262'
}
]; 
