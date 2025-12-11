// NBA Casebook Questions - 2025-26 Season
// Source: Official NBA Casebook 2025-26
// Generated: 2025-12-10
// Total Questions: 479

import { CasebookQuestion, Difficulty, ParentCategory, AnswerKey, PARENT_CATEGORY_NAMES } from './types';

export const casebookQuestions: CasebookQuestion[] = [
  {
    "id": "casebook-2025-001",
    "case_number": 1,
    "casebook_category": "AWAY-FROM-THE-PLAY FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION X",
      "RULE 4, SECTION IV"
    ],
    "question_text": "During the last two minutes of the fourth period, Player A1 is attempting a throw-in from out-of-bounds to Player A2. As the ball is in the air and Player A2 awaits the pass, he is fouled by Player B1. How is this administered?",
    "options": {
      "A": "Away-from-the-play foul: one free throw plus possession at the point of interruption",
      "B": "Common foul on the defender; free throws only if the team is in the bonus",
      "C": "Transition take foul: one free throw for any player plus possession at sideline",
      "D": "Technical foul for intentional off-ball contact; one free throw plus possession",
      "a": "Away-from-the-play foul: one free throw plus possession at the point of interruption",
      "b": "Common foul on the defender; free throws only if the team is in the bonus",
      "c": "Transition take foul: one free throw for any player plus possession at sideline",
      "d": "Technical foul for intentional off-ball contact; one free throw plus possession"
    },
    "correct_answer": "B",
    "explanation": "This is a common foul, as Player A2 was involved in the play.",
    "distractor_rationale": {
      "A": "Player was involved in the play, so away-from-play doesn't apply here",
      "C": "Take fouls apply to transition situations, not off-ball fouls during set plays",
      "D": "Contact fouls are not assessed as technicals unless unsportsmanlike"
    },
    "category": "AWAY-FROM-THE-PLAY FOULS",
    "scenario": "",
    "question": "During the last two minutes of the fourth period, Player A1 is attempting a throw-in from out-of-bounds to Player A2. As the ball is in the air and Player A2 awaits the pass, he is fouled by Player B1. How is this administered?",
    "correctAnswer": "b",
    "ruling": "This is a common foul, as Player A2 was involved in the play.",
    "ruleReference": "RULE 12B, SECTION X, RULE 4, SECTION IV",
    "casebookReference": "Case 1"
  },
  {
    "id": "casebook-2025-002",
    "case_number": 2,
    "casebook_category": "AWAY-FROM-THE-PLAY FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12A, SECTION II"
    ],
    "question_text": "During the last two minutes of the fourth period, Player A1 is out-of-bounds and is attempting to inbound the ball. Player B1 reaches across the boundary line and fouls Player A1. How is this administered?",
    "options": {
      "A": "Away-from-the-play foul: one free throw for any player plus possession",
      "B": "Common foul; standard team foul penalty applies based on bonus status",
      "C": "Transition take foul: one free throw plus possession at the sideline",
      "D": "Delay-of-game warning; no free throws unless repeated violation",
      "a": "Away-from-the-play foul: one free throw for any player plus possession",
      "b": "Common foul; standard team foul penalty applies based on bonus status",
      "c": "Transition take foul: one free throw plus possession at the sideline",
      "d": "Delay-of-game warning; no free throws unless repeated violation"
    },
    "correct_answer": "A",
    "explanation": "Player B1 is assessed a Delay-of-Game technical foul since the game is in the last two minutes of the fourth period and he broke the plane of the boundary line first.",
    "distractor_rationale": {
      "B": "Off-ball fouls in last 2 minutes have specific away-from-play penalties",
      "C": "Take fouls are for transition, not deliberate off-ball contact",
      "D": "This is a personal foul, not a delay-of-game situation"
    },
    "category": "AWAY-FROM-THE-PLAY FOULS",
    "scenario": "",
    "question": "During the last two minutes of the fourth period, Player A1 is out-of-bounds and is attempting to inbound the ball. Player B1 reaches across the boundary line and fouls Player A1. How is this administered?",
    "correctAnswer": "a",
    "ruling": "Player B1 is assessed a Delay-of-Game technical foul since the game is in the last two minutes of the fourth period and he broke the plane of the boundary line first.",
    "ruleReference": "RULE 12A, SECTION II",
    "casebookReference": "Case 2"
  },
  {
    "id": "casebook-2025-003",
    "case_number": 3,
    "casebook_category": "AWAY-FROM-THE-PLAY FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION X",
      "RULE 7, SECTION IV",
      "RULE 4, SECTION IV"
    ],
    "question_text": "During the last two minutes of any period, Player A1 is dribbling the ball in the frontcourt and Player B2 deliberately fouls Player A2 who is not in the play. What is the ruling?",
    "options": {
      "A": "Away-from-the-play foul: one free throw for any player plus possession",
      "B": "Common foul; standard team foul penalty applies based on bonus status",
      "C": "Transition take foul: one free throw plus possession at the sideline",
      "D": "Delay-of-game warning; no free throws unless repeated violation",
      "a": "Away-from-the-play foul: one free throw for any player plus possession",
      "b": "Common foul; standard team foul penalty applies based on bonus status",
      "c": "Transition take foul: one free throw plus possession at the sideline",
      "d": "Delay-of-game warning; no free throws unless repeated violation"
    },
    "correct_answer": "A",
    "explanation": "Player B2 is assessed an away-from-the-play foul and Team B a team foul.",
    "distractor_rationale": {
      "B": "Off-ball fouls in last 2 minutes have specific away-from-play penalties",
      "C": "Take fouls are for transition, not deliberate off-ball contact",
      "D": "This is a personal foul, not a delay-of-game situation"
    },
    "category": "AWAY-FROM-THE-PLAY FOULS",
    "scenario": "",
    "question": "During the last two minutes of any period, Player A1 is dribbling the ball in the frontcourt and Player B2 deliberately fouls Player A2 who is not in the play. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "Player B2 is assessed an away-from-the-play foul and Team B a team foul.",
    "ruleReference": "RULE 12B, SECTION X, RULE 7, SECTION IV, RULE 4, SECTION IV",
    "casebookReference": "Case 3"
  },
  {
    "id": "casebook-2025-004",
    "case_number": 4,
    "casebook_category": "AWAY-FROM-THE-PLAY FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION X",
      "RULE 4, SECTION IV"
    ],
    "question_text": "Player A3 is tripped prior to Player A1 releasing the ball during a throw-in at any time of the game. What is the penalty?",
    "options": {
      "A": "Away-from-the-play foul: one free throw for any player plus possession",
      "B": "Common foul; standard team foul penalty applies based on bonus status",
      "C": "Transition take foul: one free throw plus possession at the sideline",
      "D": "Delay-of-game warning; no free throws unless repeated violation",
      "a": "Away-from-the-play foul: one free throw for any player plus possession",
      "b": "Common foul; standard team foul penalty applies based on bonus status",
      "c": "Transition take foul: one free throw plus possession at the sideline",
      "d": "Delay-of-game warning; no free throws unless repeated violation"
    },
    "correct_answer": "A",
    "explanation": "An away-from-the-play foul shall be assessed. Any player in the game will attempt one free throw and Team A will retain possession at the original throw-in spot.",
    "distractor_rationale": {
      "B": "Off-ball fouls in last 2 minutes have specific away-from-play penalties",
      "C": "Take fouls are for transition, not deliberate off-ball contact",
      "D": "This is a personal foul, not a delay-of-game situation"
    },
    "category": "AWAY-FROM-THE-PLAY FOULS",
    "scenario": "",
    "question": "Player A3 is tripped prior to Player A1 releasing the ball during a throw-in at any time of the game. What is the penalty?",
    "correctAnswer": "a",
    "ruling": "An away-from-the-play foul shall be assessed. Any player in the game will attempt one free throw and Team A will retain possession at the original throw-in spot.",
    "ruleReference": "RULE 12B, SECTION X, RULE 4, SECTION IV",
    "casebookReference": "Case 4"
  },
  {
    "id": "casebook-2025-005",
    "case_number": 5,
    "casebook_category": "AWAY-FROM-THE-PLAY FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION X",
      "RULE 4, SECTION IV"
    ],
    "question_text": "Prior to Player A1 releasing the ball on a throw-in at 5:43 of the first period, a flagrant foul is ruled when Player B2 knocks Player A2 to the floor. How is this play administered?",
    "options": {
      "A": "Away-from-the-play foul: one free throw for any player plus possession",
      "B": "Common foul; standard team foul penalty applies based on bonus status",
      "C": "Transition take foul: one free throw plus possession at the sideline",
      "D": "Delay-of-game warning; no free throws unless repeated violation",
      "a": "Away-from-the-play foul: one free throw for any player plus possession",
      "b": "Common foul; standard team foul penalty applies based on bonus status",
      "c": "Transition take foul: one free throw plus possession at the sideline",
      "d": "Delay-of-game warning; no free throws unless repeated violation"
    },
    "correct_answer": "A",
    "explanation": "Player B2 is charged with a flagrant foul and since it is away-from-theplay, any player in the game for Team A shall attempt two free throws, and the ball is awarded to Team A at the free throw line.",
    "distractor_rationale": {
      "B": "Off-ball fouls in last 2 minutes have specific away-from-play penalties",
      "C": "Take fouls are for transition, not deliberate off-ball contact",
      "D": "This is a personal foul, not a delay-of-game situation"
    },
    "category": "AWAY-FROM-THE-PLAY FOULS",
    "scenario": "",
    "question": "Prior to Player A1 releasing the ball on a throw-in at 5:43 of the first period, a flagrant foul is ruled when Player B2 knocks Player A2 to the floor. How is this play administered?",
    "correctAnswer": "a",
    "ruling": "Player B2 is charged with a flagrant foul and since it is away-from-theplay, any player in the game for Team A shall attempt two free throws, and the ball is awarded to Team A at the free throw line.",
    "ruleReference": "RULE 12B, SECTION X, RULE 4, SECTION IV",
    "casebookReference": "Case 5"
  },
  {
    "id": "casebook-2025-006",
    "case_number": 6,
    "casebook_category": "AWAY-FROM-THE-PLAY FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION X"
    ],
    "question_text": "At 1:23 of any period, Player A1 is holding the ball on the right side of the floor near the 28\u2019 mark. Player A3, who is located down in the left corner, starts to run the baseline towards the right side of the court when he is fouled by B3. Is this an Away-from-the Play foul?",
    "options": {
      "A": "Away-from-the-play foul: one free throw plus possession at the point of interruption",
      "B": "Common foul on the defender; free throws only if the team is in the bonus",
      "C": "Transition take foul: one free throw for any player plus possession at sideline",
      "D": "Technical foul for intentional off-ball contact; one free throw plus possession",
      "a": "Away-from-the-play foul: one free throw plus possession at the point of interruption",
      "b": "Common foul on the defender; free throws only if the team is in the bonus",
      "c": "Transition take foul: one free throw for any player plus possession at sideline",
      "d": "Technical foul for intentional off-ball contact; one free throw plus possession"
    },
    "correct_answer": "B",
    "explanation": "No, since A3 was actively moving to the side of the court with the ball it should be assumed he was positioning himself as part of the play and a common foul should be ruled.",
    "distractor_rationale": {
      "A": "Player was involved in the play, so away-from-play doesn't apply here",
      "C": "Take fouls apply to transition situations, not off-ball fouls during set plays",
      "D": "Contact fouls are not assessed as technicals unless unsportsmanlike"
    },
    "category": "AWAY-FROM-THE-PLAY FOULS",
    "scenario": "",
    "question": "At 1:23 of any period, Player A1 is holding the ball on the right side of the floor near the 28\u2019 mark. Player A3, who is located down in the left corner, starts to run the baseline towards the right side of the court when he is fouled by B3. Is this an Away-from-the Play foul?",
    "correctAnswer": "b",
    "ruling": "No, since A3 was actively moving to the side of the court with the ball it should be assumed he was positioning himself as part of the play and a common foul should be ruled.",
    "ruleReference": "RULE 12B, SECTION X",
    "casebookReference": "Case 6"
  },
  {
    "id": "casebook-2025-007",
    "case_number": 7,
    "casebook_category": "AWAY-FROM-THE-PLAY FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION X"
    ],
    "question_text": "During the last two minutes of the second period, Player A1 releases a throwin towards Player A3 in the left corner. Player B2 fouls Player A2, who is on the opposite side of the court and not part of the play. How is this play administered?",
    "options": {
      "A": "Away-from-the-play foul: one free throw for any player plus possession",
      "B": "Common foul; standard team foul penalty applies based on bonus status",
      "C": "Transition take foul: one free throw plus possession at the sideline",
      "D": "Delay-of-game warning; no free throws unless repeated violation",
      "a": "Away-from-the-play foul: one free throw for any player plus possession",
      "b": "Common foul; standard team foul penalty applies based on bonus status",
      "c": "Transition take foul: one free throw plus possession at the sideline",
      "d": "Delay-of-game warning; no free throws unless repeated violation"
    },
    "correct_answer": "A",
    "explanation": "Player B2 is assessed an away-from-the-play foul and Team B a team foul.",
    "distractor_rationale": {
      "B": "Off-ball fouls in last 2 minutes have specific away-from-play penalties",
      "C": "Take fouls are for transition, not deliberate off-ball contact",
      "D": "This is a personal foul, not a delay-of-game situation"
    },
    "category": "AWAY-FROM-THE-PLAY FOULS",
    "scenario": "",
    "question": "During the last two minutes of the second period, Player A1 releases a throwin towards Player A3 in the left corner. Player B2 fouls Player A2, who is on the opposite side of the court and not part of the play. How is this play administered?",
    "correctAnswer": "a",
    "ruling": "Player B2 is assessed an away-from-the-play foul and Team B a team foul.",
    "ruleReference": "RULE 12B, SECTION X",
    "casebookReference": "Case 7"
  },
  {
    "id": "casebook-2025-008",
    "case_number": 8,
    "casebook_category": "BACKBOARD",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION II"
    ],
    "question_text": "On an unsuccessful field goal attempt, the ball hits the basket ring and rebounds over and behind the face of the backboard. The ball returns to the floor and touches inbounds without having touched any of the backboard supports. Is the ball to remain in play?",
    "options": {
      "A": "Legal play; ball can travel any path while remaining inbounds",
      "B": "Violation; ball passed behind the backboard illegally",
      "C": "Out-of-bounds; ball contacted the backboard support structure",
      "D": "Goaltending violation; illegal interference with the shot",
      "a": "Legal play; ball can travel any path while remaining inbounds",
      "b": "Violation; ball passed behind the backboard illegally",
      "c": "Out-of-bounds; ball contacted the backboard support structure",
      "d": "Goaltending violation; illegal interference with the shot"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Ball cannot pass directly behind the backboard",
      "C": "Supports weren't contacted; behind backboard is the issue",
      "D": "Goaltending has different criteria than backboard rules"
    },
    "category": "BACKBOARD",
    "scenario": "",
    "question": "On an unsuccessful field goal attempt, the ball hits the basket ring and rebounds over and behind the face of the backboard. The ball returns to the floor and touches inbounds without having touched any of the backboard supports. Is the ball to remain in play?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 8, SECTION II",
    "casebookReference": "Case 8"
  },
  {
    "id": "casebook-2025-009",
    "case_number": 9,
    "casebook_category": "BACKBOARD",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION II"
    ],
    "question_text": "Player A1 has control of the ball near the endline and passes the ball behind the backboard (never touching the supports) to Player A2. Is this legal or illegal?",
    "options": {
      "A": "Legal play; ball can travel any path while remaining inbounds",
      "B": "Violation; ball passed behind the backboard illegally",
      "C": "Out-of-bounds; ball contacted the backboard support structure",
      "D": "Goaltending violation; illegal interference with the shot",
      "a": "Legal play; ball can travel any path while remaining inbounds",
      "b": "Violation; ball passed behind the backboard illegally",
      "c": "Out-of-bounds; ball contacted the backboard support structure",
      "d": "Goaltending violation; illegal interference with the shot"
    },
    "correct_answer": "B",
    "explanation": "Illegal. Same reason as #8 above.",
    "distractor_rationale": {
      "A": "Ball cannot pass directly behind the backboard",
      "C": "Supports weren't contacted; behind backboard is the issue",
      "D": "Goaltending has different criteria than backboard rules"
    },
    "category": "BACKBOARD",
    "scenario": "",
    "question": "Player A1 has control of the ball near the endline and passes the ball behind the backboard (never touching the supports) to Player A2. Is this legal or illegal?",
    "correctAnswer": "b",
    "ruling": "Illegal. Same reason as #8 above.",
    "ruleReference": "RULE 8, SECTION II",
    "casebookReference": "Case 9"
  },
  {
    "id": "casebook-2025-010",
    "case_number": 10,
    "casebook_category": "BACKBOARD",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION I"
    ],
    "question_text": "On an unsuccessful field goal attempt, the ball rebounds off the basket ring and rolls along the top edge of the backboard. Is the ball still in play?",
    "options": {
      "A": "Violation; ball went to illegal area of backboard",
      "B": "Legal play; all four sides of backboard are inbounds",
      "C": "Dead ball; top edge of backboard is out of play",
      "D": "Goaltending; ball touched backboard after shot attempt",
      "a": "Violation; ball went to illegal area of backboard",
      "b": "Legal play; all four sides of backboard are inbounds",
      "c": "Dead ball; top edge of backboard is out of play",
      "d": "Goaltending; ball touched backboard after shot attempt"
    },
    "correct_answer": "B",
    "explanation": "Yes. All four sides of the backboard are considered inbounds.",
    "distractor_rationale": {
      "A": "All sides of backboard face are legal/inbounds",
      "C": "Top edge is part of legal playing surface",
      "D": "Backboard contact isn't goaltending by itself"
    },
    "category": "BACKBOARD",
    "scenario": "",
    "question": "On an unsuccessful field goal attempt, the ball rebounds off the basket ring and rolls along the top edge of the backboard. Is the ball still in play?",
    "correctAnswer": "b",
    "ruling": "Yes. All four sides of the backboard are considered inbounds.",
    "ruleReference": "RULE 4, SECTION I",
    "casebookReference": "Case 10"
  },
  {
    "id": "casebook-2025-011",
    "case_number": 11,
    "casebook_category": "BACKBOARD",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XIII"
    ],
    "question_text": "Player A1 passes the ball and it hits his backboard. May Player A1 be the first to touch the ball?",
    "options": {
      "A": "Violation; ball went to illegal area of backboard",
      "B": "Legal play; all four sides of backboard are inbounds",
      "C": "Dead ball; top edge of backboard is out of play",
      "D": "Goaltending; ball touched backboard after shot attempt",
      "a": "Violation; ball went to illegal area of backboard",
      "b": "Legal play; all four sides of backboard are inbounds",
      "c": "Dead ball; top edge of backboard is out of play",
      "d": "Goaltending; ball touched backboard after shot attempt"
    },
    "correct_answer": "B",
    "explanation": "Yes. A player may be the first to touch his own pass, or shot, if the ball touches his basket ring, backboard or another player.",
    "distractor_rationale": {
      "A": "All sides of backboard face are legal/inbounds",
      "C": "Top edge is part of legal playing surface",
      "D": "Backboard contact isn't goaltending by itself"
    },
    "category": "BACKBOARD",
    "scenario": "",
    "question": "Player A1 passes the ball and it hits his backboard. May Player A1 be the first to touch the ball?",
    "correctAnswer": "b",
    "ruling": "Yes. A player may be the first to touch his own pass, or shot, if the ball touches his basket ring, backboard or another player.",
    "ruleReference": "RULE 10, SECTION XIII",
    "casebookReference": "Case 11"
  },
  {
    "id": "casebook-2025-012",
    "case_number": 12,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION IX"
    ],
    "question_text": "Player A1 taps the ball into his backcourt while rebounding. Player A2 retrieves the ball in the backcourt and continues to advance the ball toward the frontcourt. Is this legal?",
    "options": {
      "A": "Backcourt violation; ball was in frontcourt and returned",
      "B": "Legal play; no backcourt violation on this sequence",
      "C": "8-second violation; team took too long in backcourt",
      "D": "Turnover; ball illegally advanced to frontcourt",
      "a": "Backcourt violation; ball was in frontcourt and returned",
      "b": "Legal play; no backcourt violation on this sequence",
      "c": "8-second violation; team took too long in backcourt",
      "d": "Turnover; ball illegally advanced to frontcourt"
    },
    "correct_answer": "B",
    "explanation": "Yes. Any player may recover a ball which is tapped into the backcourt during rebounding or when the ball is loose. The shot clock will also be reset to 14.",
    "distractor_rationale": {
      "A": "Exception applies; frontcourt status not established",
      "C": "No 8-second issue in this scenario",
      "D": "No illegal advancement occurred"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Player A1 taps the ball into his backcourt while rebounding. Player A2 retrieves the ball in the backcourt and continues to advance the ball toward the frontcourt. Is this legal?",
    "correctAnswer": "b",
    "ruling": "Yes. Any player may recover a ball which is tapped into the backcourt during rebounding or when the ball is loose. The shot clock will also be reset to 14.",
    "ruleReference": "RULE 10, SECTION IX",
    "casebookReference": "Case 12"
  },
  {
    "id": "casebook-2025-013",
    "case_number": 13,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I",
      "RULE 4, SECTION VI",
      "RULE 10, SECTION IX"
    ],
    "question_text": "A player in control of the ball has stopped his dribble in the frontcourt and is very close to the midcourt line. While being played extremely close by an opponent he steps into the backcourt. Is this a backcourt violation?",
    "options": {
      "A": "Legal play; no backcourt violation occurred on this sequence",
      "B": "Backcourt violation; ball to opponent at midcourt line",
      "C": "Traveling violation; illegal foot movement caused the error",
      "D": "Out-of-bounds violation; ball touched boundary line",
      "a": "Legal play; no backcourt violation occurred on this sequence",
      "b": "Backcourt violation; ball to opponent at midcourt line",
      "c": "Traveling violation; illegal foot movement caused the error",
      "d": "Out-of-bounds violation; ball touched boundary line"
    },
    "correct_answer": "B",
    "explanation": "The official must judge this as: (1) a personal foul on the defensive player if illegal contact caused him to step into the backcourt (2) a traveling violation if the step was illegal, or (3) a.",
    "distractor_rationale": {
      "A": "Ball illegally returned to backcourt after frontcourt status",
      "C": "This is a backcourt issue, not traveling",
      "D": "Midcourt line is not out-of-bounds"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "A player in control of the ball has stopped his dribble in the frontcourt and is very close to the midcourt line. While being played extremely close by an opponent he steps into the backcourt. Is this a backcourt violation?",
    "correctAnswer": "b",
    "ruling": "The official must judge this as: (1) a personal foul on the defensive player if illegal contact caused him to step into the backcourt (2) a traveling violation if the step was illegal, or (3) a.",
    "ruleReference": "RULE 12B, SECTION I, RULE 4, SECTION VI, RULE 10, SECTION IX",
    "casebookReference": "Case 13"
  },
  {
    "id": "casebook-2025-014",
    "case_number": 14,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION IX"
    ],
    "question_text": "Player B1 deflects a pass from Player A1 to Player A2, causing it to hit Player A2\u2019s knee and continue into Team A\u2019s backcourt. May any player from Team A be the first to legally touch the ball while it is in the backcourt?",
    "options": {
      "A": "Backcourt violation; ball was in frontcourt and returned",
      "B": "Legal play; no backcourt violation on this sequence",
      "C": "8-second violation; team took too long in backcourt",
      "D": "Turnover; ball illegally advanced to frontcourt",
      "a": "Backcourt violation; ball was in frontcourt and returned",
      "b": "Legal play; no backcourt violation on this sequence",
      "c": "8-second violation; team took too long in backcourt",
      "d": "Turnover; ball illegally advanced to frontcourt"
    },
    "correct_answer": "B",
    "explanation": "Yes. The deflection by Player B1 caused team control to cease and the ball became loose. Any player from either team may be the first to touch and/or recover a loose ball.",
    "distractor_rationale": {
      "A": "Exception applies; frontcourt status not established",
      "C": "No 8-second issue in this scenario",
      "D": "No illegal advancement occurred"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Player B1 deflects a pass from Player A1 to Player A2, causing it to hit Player A2\u2019s knee and continue into Team A\u2019s backcourt. May any player from Team A be the first to legally touch the ball while it is in the backcourt?",
    "correctAnswer": "b",
    "ruling": "Yes. The deflection by Player B1 caused team control to cease and the ball became loose. Any player from either team may be the first to touch and/or recover a loose ball.",
    "ruleReference": "RULE 10, SECTION IX",
    "casebookReference": "Case 14"
  },
  {
    "id": "casebook-2025-015",
    "case_number": 15,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION VI"
    ],
    "question_text": "Having been the first to gain possession after a jump ball, Player A1 dribbles or passes the ball into the backcourt. This is done after Player A1 has assumed a positive position in the frontcourt. Legal or illegal?",
    "options": {
      "A": "Legal play; no backcourt violation occurred on this sequence",
      "B": "Backcourt violation; ball to opponent at midcourt line",
      "C": "Traveling violation; illegal foot movement caused the error",
      "D": "Out-of-bounds violation; ball touched boundary line",
      "a": "Legal play; no backcourt violation occurred on this sequence",
      "b": "Backcourt violation; ball to opponent at midcourt line",
      "c": "Traveling violation; illegal foot movement caused the error",
      "d": "Out-of-bounds violation; ball touched boundary line"
    },
    "correct_answer": "B",
    "explanation": "Illegal since Player A1 has established a positive position in the frontcourt.",
    "distractor_rationale": {
      "A": "Ball illegally returned to backcourt after frontcourt status",
      "C": "This is a backcourt issue, not traveling",
      "D": "Midcourt line is not out-of-bounds"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Having been the first to gain possession after a jump ball, Player A1 dribbles or passes the ball into the backcourt. This is done after Player A1 has assumed a positive position in the frontcourt. Legal or illegal?",
    "correctAnswer": "b",
    "ruling": "Illegal since Player A1 has established a positive position in the frontcourt.",
    "ruleReference": "RULE 4, SECTION VI",
    "casebookReference": "Case 15"
  },
  {
    "id": "casebook-2025-016",
    "case_number": 16,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION IX",
      "RULE 8, SECTION I"
    ],
    "question_text": "Player A1 has possession of the ball in the frontcourt. He passes the ball to Player A2 who is still in the air after having leaped from his backcourt. Is this legal?",
    "options": {
      "A": "Legal play; no backcourt violation occurred on this sequence",
      "B": "Backcourt violation; ball to opponent at midcourt line",
      "C": "Traveling violation; illegal foot movement caused the error",
      "D": "Out-of-bounds violation; ball touched boundary line",
      "a": "Legal play; no backcourt violation occurred on this sequence",
      "b": "Backcourt violation; ball to opponent at midcourt line",
      "c": "Traveling violation; illegal foot movement caused the error",
      "d": "Out-of-bounds violation; ball touched boundary line"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Ball illegally returned to backcourt after frontcourt status",
      "C": "This is a backcourt issue, not traveling",
      "D": "Midcourt line is not out-of-bounds"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Player A1 has possession of the ball in the frontcourt. He passes the ball to Player A2 who is still in the air after having leaped from his backcourt. Is this legal?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 10, SECTION IX, RULE 8, SECTION I",
    "casebookReference": "Case 16"
  },
  {
    "id": "casebook-2025-017",
    "case_number": 17,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION VI"
    ],
    "question_text": "Player A1 straddles the midcourt line and, without moving forward, dribbles the ball in the frontcourt while in this position. Is this a violation?",
    "options": {
      "A": "Backcourt violation; ball was in frontcourt and returned",
      "B": "Legal play; no backcourt violation on this sequence",
      "C": "8-second violation; team took too long in backcourt",
      "D": "Turnover; ball illegally advanced to frontcourt",
      "a": "Backcourt violation; ball was in frontcourt and returned",
      "b": "Legal play; no backcourt violation on this sequence",
      "c": "8-second violation; team took too long in backcourt",
      "d": "Turnover; ball illegally advanced to frontcourt"
    },
    "correct_answer": "B",
    "explanation": "No. A player dribbling the ball is considered in the backcourt if either foot or the ball is in the backcourt.",
    "distractor_rationale": {
      "A": "Exception applies; frontcourt status not established",
      "C": "No 8-second issue in this scenario",
      "D": "No illegal advancement occurred"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Player A1 straddles the midcourt line and, without moving forward, dribbles the ball in the frontcourt while in this position. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "No. A player dribbling the ball is considered in the backcourt if either foot or the ball is in the backcourt.",
    "ruleReference": "RULE 4, SECTION VI",
    "casebookReference": "Case 17"
  },
  {
    "id": "casebook-2025-018",
    "case_number": 18,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION VI"
    ],
    "question_text": "A player in control of the ball in backcourt approaches the midcourt line. After stopping his dribble in the backcourt, he straddles the midcourt line. Is this a violation?",
    "options": {
      "A": "Backcourt violation; ball was in frontcourt and returned",
      "B": "Legal play; no backcourt violation on this sequence",
      "C": "8-second violation; team took too long in backcourt",
      "D": "Turnover; ball illegally advanced to frontcourt",
      "a": "Backcourt violation; ball was in frontcourt and returned",
      "b": "Legal play; no backcourt violation on this sequence",
      "c": "8-second violation; team took too long in backcourt",
      "d": "Turnover; ball illegally advanced to frontcourt"
    },
    "correct_answer": "B",
    "explanation": "No. As long as any part of his person is touching the backcourt, Player A1 is considered backcourt. He may legally bring his front foot (non pivot) back and forth between the front and the backcourt.",
    "distractor_rationale": {
      "A": "Exception applies; frontcourt status not established",
      "C": "No 8-second issue in this scenario",
      "D": "No illegal advancement occurred"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "A player in control of the ball in backcourt approaches the midcourt line. After stopping his dribble in the backcourt, he straddles the midcourt line. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "No. As long as any part of his person is touching the backcourt, Player A1 is considered backcourt. He may legally bring his front foot (non pivot) back and forth between the front and the backcourt.",
    "ruleReference": "RULE 4, SECTION VI",
    "casebookReference": "Case 18"
  },
  {
    "id": "casebook-2025-019",
    "case_number": 19,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION III",
      "RULE 10, SECTION IX"
    ],
    "question_text": "Where and how is the ball put into play on all backcourt violations?",
    "options": {
      "A": "Legal play; no backcourt violation occurred on this sequence",
      "B": "Backcourt violation; ball to opponent at midcourt line",
      "C": "Traveling violation; illegal foot movement caused the error",
      "D": "Out-of-bounds violation; ball touched boundary line",
      "a": "Legal play; no backcourt violation occurred on this sequence",
      "b": "Backcourt violation; ball to opponent at midcourt line",
      "c": "Traveling violation; illegal foot movement caused the error",
      "d": "Out-of-bounds violation; ball touched boundary line"
    },
    "correct_answer": "B",
    "explanation": "On all backcourt violations, the ball is moved to the midcourt line and must be passed into the frontcourt of the team now in possession.",
    "distractor_rationale": {
      "A": "Ball illegally returned to backcourt after frontcourt status",
      "C": "This is a backcourt issue, not traveling",
      "D": "Midcourt line is not out-of-bounds"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Where and how is the ball put into play on all backcourt violations?",
    "correctAnswer": "b",
    "ruling": "On all backcourt violations, the ball is moved to the midcourt line and must be passed into the frontcourt of the team now in possession.",
    "ruleReference": "RULE 8, SECTION III, RULE 10, SECTION IX",
    "casebookReference": "Case 19"
  },
  {
    "id": "casebook-2025-020",
    "case_number": 20,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION VI"
    ],
    "question_text": "Player B1 rebounds an unsuccessful field goal attempt by Player A1 and attempts a pass to Player B2 near the midcourt line. Player A2 intercepts the pass while in midair and lands (in what would have been) Team B\u2019s frontcourt. Is this a backcourt violation by Player A2?",
    "options": {
      "A": "Backcourt violation; ball was in frontcourt and returned",
      "B": "Legal play; no backcourt violation on this sequence",
      "C": "8-second violation; team took too long in backcourt",
      "D": "Turnover; ball illegally advanced to frontcourt",
      "a": "Backcourt violation; ball was in frontcourt and returned",
      "b": "Legal play; no backcourt violation on this sequence",
      "c": "8-second violation; team took too long in backcourt",
      "d": "Turnover; ball illegally advanced to frontcourt"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Exception applies; frontcourt status not established",
      "C": "No 8-second issue in this scenario",
      "D": "No illegal advancement occurred"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Player B1 rebounds an unsuccessful field goal attempt by Player A1 and attempts a pass to Player B2 near the midcourt line. Player A2 intercepts the pass while in midair and lands (in what would have been) Team B\u2019s frontcourt. Is this a backcourt violation by Player A2?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 4, SECTION VI",
    "casebookReference": "Case 20"
  },
  {
    "id": "casebook-2025-021",
    "case_number": 21,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION VI"
    ],
    "question_text": "Following a jump ball at the center circle, the ball is tapped toward the sideline. Player A1 leaps across the mid-court line into the frontcourt, having last touched the playing surface in his backcourt. He controls the ball while in mid-air and throws it to Player A2 who is positioned in his backcourt. Is this a backcourt violation?",
    "options": {
      "A": "Backcourt violation; ball was in frontcourt and returned",
      "B": "Legal play; no backcourt violation on this sequence",
      "C": "8-second violation; team took too long in backcourt",
      "D": "Turnover; ball illegally advanced to frontcourt",
      "a": "Backcourt violation; ball was in frontcourt and returned",
      "b": "Legal play; no backcourt violation on this sequence",
      "c": "8-second violation; team took too long in backcourt",
      "d": "Turnover; ball illegally advanced to frontcourt"
    },
    "correct_answer": "B",
    "explanation": "No. Player A1 never established a positive position in the frontcourt.",
    "distractor_rationale": {
      "A": "Exception applies; frontcourt status not established",
      "C": "No 8-second issue in this scenario",
      "D": "No illegal advancement occurred"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Following a jump ball at the center circle, the ball is tapped toward the sideline. Player A1 leaps across the mid-court line into the frontcourt, having last touched the playing surface in his backcourt. He controls the ball while in mid-air and throws it to Player A2 who is positioned in his backcourt. Is this a backcourt violation?",
    "correctAnswer": "b",
    "ruling": "No. Player A1 never established a positive position in the frontcourt.",
    "ruleReference": "RULE 4, SECTION VI",
    "casebookReference": "Case 21"
  },
  {
    "id": "casebook-2025-022",
    "case_number": 22,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION IX"
    ],
    "question_text": "A field goal attempt by Player A1 is blocked by Player B1 and the ball becomes loose over the baseline. Player A1, having last touched the playing surface inbounds, leaps over the baseline, gains possession of the ball while still in mid-air and throws it into his backcourt. It is recovered by Player A2. Is this a backcourt violation?",
    "options": {
      "A": "Legal play; no backcourt violation occurred on this sequence",
      "B": "Backcourt violation; ball to opponent at midcourt line",
      "C": "Traveling violation; illegal foot movement caused the error",
      "D": "Out-of-bounds violation; ball touched boundary line",
      "a": "Legal play; no backcourt violation occurred on this sequence",
      "b": "Backcourt violation; ball to opponent at midcourt line",
      "c": "Traveling violation; illegal foot movement caused the error",
      "d": "Out-of-bounds violation; ball touched boundary line"
    },
    "correct_answer": "B",
    "explanation": "Yes. The saving and throwing of the ball by Player A1 in the frontcourt is considered positive position. Therefore, a violation has occurred.",
    "distractor_rationale": {
      "A": "Ball illegally returned to backcourt after frontcourt status",
      "C": "This is a backcourt issue, not traveling",
      "D": "Midcourt line is not out-of-bounds"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "A field goal attempt by Player A1 is blocked by Player B1 and the ball becomes loose over the baseline. Player A1, having last touched the playing surface inbounds, leaps over the baseline, gains possession of the ball while still in mid-air and throws it into his backcourt. It is recovered by Player A2. Is this a backcourt violation?",
    "correctAnswer": "b",
    "ruling": "Yes. The saving and throwing of the ball by Player A1 in the frontcourt is considered positive position. Therefore, a violation has occurred.",
    "ruleReference": "RULE 10, SECTION IX",
    "casebookReference": "Case 22"
  },
  {
    "id": "casebook-2025-023",
    "case_number": 23,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION III"
    ],
    "question_text": "Team A is granted a t i m e o u t with the ball in the frontcourt and :21.5 remaining in the fourth period. On the throw-in, the ball is thrown into the backcourt where it is caught and controlled by Player A2. Is this a violation?",
    "options": {
      "A": "Backcourt violation; ball was in frontcourt and returned",
      "B": "Legal play; no backcourt violation on this sequence",
      "C": "8-second violation; team took too long in backcourt",
      "D": "Turnover; ball illegally advanced to frontcourt",
      "a": "Backcourt violation; ball was in frontcourt and returned",
      "b": "Legal play; no backcourt violation on this sequence",
      "c": "8-second violation; team took too long in backcourt",
      "d": "Turnover; ball illegally advanced to frontcourt"
    },
    "correct_answer": "B",
    "explanation": "No. During the last two minutes of the fourth period and last two minutes of overtime, the ball may be inbounded anywhere on the court.",
    "distractor_rationale": {
      "A": "Exception applies; frontcourt status not established",
      "C": "No 8-second issue in this scenario",
      "D": "No illegal advancement occurred"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Team A is granted a t i m e o u t with the ball in the frontcourt and :21.5 remaining in the fourth period. On the throw-in, the ball is thrown into the backcourt where it is caught and controlled by Player A2. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "No. During the last two minutes of the fourth period and last two minutes of overtime, the ball may be inbounded anywhere on the court.",
    "ruleReference": "RULE 8, SECTION III",
    "casebookReference": "Case 23"
  },
  {
    "id": "casebook-2025-024",
    "case_number": 24,
    "casebook_category": "BACKCOURT",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION I"
    ],
    "question_text": "Player A1 passes the ball from his backcourt to Player A2 who has jumped from the frontcourt but does not receive the ball until he has broken the midcourt plane. Is this a violation if he lands in the backcourt?",
    "options": {
      "A": "Legal play; no backcourt violation occurred on this sequence",
      "B": "Backcourt violation; ball to opponent at midcourt line",
      "C": "Traveling violation; illegal foot movement caused the error",
      "D": "Out-of-bounds violation; ball touched boundary line",
      "a": "Legal play; no backcourt violation occurred on this sequence",
      "b": "Backcourt violation; ball to opponent at midcourt line",
      "c": "Traveling violation; illegal foot movement caused the error",
      "d": "Out-of-bounds violation; ball touched boundary line"
    },
    "correct_answer": "B",
    "explanation": "Yes, Player A2\u2019s status is from where he left the court. Therefore the ball gained frontcourt status when he received the ball and a violation occurred when he landed in the backcourt.",
    "distractor_rationale": {
      "A": "Ball illegally returned to backcourt after frontcourt status",
      "C": "This is a backcourt issue, not traveling",
      "D": "Midcourt line is not out-of-bounds"
    },
    "category": "BACKCOURT",
    "scenario": "",
    "question": "Player A1 passes the ball from his backcourt to Player A2 who has jumped from the frontcourt but does not receive the ball until he has broken the midcourt plane. Is this a violation if he lands in the backcourt?",
    "correctAnswer": "b",
    "ruling": "Yes, Player A2\u2019s status is from where he left the court. Therefore the ball gained frontcourt status when he received the ball and a violation occurred when he landed in the backcourt.",
    "ruleReference": "RULE 8, SECTION I",
    "casebookReference": "Case 24"
  },
  {
    "id": "casebook-2025-025",
    "case_number": 25,
    "casebook_category": "BATTED BALL",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1 attempts a field goal that Player B1 bats against the backboard. Is this a violation?",
    "options": {
      "A": "Team A retains possession at nearest sideline spot",
      "B": "Team B ball; last touched by Team A player",
      "C": "Jump ball; unclear which player touched last",
      "D": "Replay required; officials couldn't determine touch",
      "a": "Team A retains possession at nearest sideline spot",
      "b": "Team B ball; last touched by Team A player",
      "c": "Jump ball; unclear which player touched last",
      "d": "Replay required; officials couldn't determine touch"
    },
    "correct_answer": "B",
    "explanation": "No. The batting of the ball is legal unless it violates Rule 11.",
    "distractor_rationale": {
      "A": "Team A player touched the ball last",
      "C": "Last touch was determinable",
      "D": "Officials made clear determination"
    },
    "category": "BATTED BALL",
    "scenario": "",
    "question": "Player A1 attempts a field goal that Player B1 bats against the backboard. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "No. The batting of the ball is legal unless it violates Rule 11.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 25"
  },
  {
    "id": "casebook-2025-026",
    "case_number": 26,
    "casebook_category": "BATTED BALL",
    "parent_category": "out-of-bounds",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION II"
    ],
    "question_text": "Player A1 saves a loose ball from going out-of-bounds by batting the ball back onto the playing court. May Player A1 be the first to touch the ball when he returns onto the court?",
    "options": {
      "A": "Team A retains possession at nearest sideline spot",
      "B": "Team B ball; last touched by Team A player",
      "C": "Jump ball; unclear which player touched last",
      "D": "Replay required; officials couldn't determine touch",
      "a": "Team A retains possession at nearest sideline spot",
      "b": "Team B ball; last touched by Team A player",
      "c": "Jump ball; unclear which player touched last",
      "d": "Replay required; officials couldn't determine touch"
    },
    "correct_answer": "B",
    "explanation": "Yes. The batting of the ball does not constitute player control, therefore Player A1 may be the first to touch the ball.",
    "distractor_rationale": {
      "A": "Team A player touched the ball last",
      "C": "Last touch was determinable",
      "D": "Officials made clear determination"
    },
    "category": "BATTED BALL",
    "scenario": "",
    "question": "Player A1 saves a loose ball from going out-of-bounds by batting the ball back onto the playing court. May Player A1 be the first to touch the ball when he returns onto the court?",
    "correctAnswer": "b",
    "ruling": "Yes. The batting of the ball does not constitute player control, therefore Player A1 may be the first to touch the ball.",
    "ruleReference": "RULE 10, SECTION II",
    "casebookReference": "Case 26"
  },
  {
    "id": "casebook-2025-027",
    "case_number": 27,
    "casebook_category": "BLOCKING FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "Player A1 is running up the court and catches an outlet pass near midcourt and immediately crashes into defender B1 who is standing in a stationary position. Is this a legal defensive position to draw an offensive foul?",
    "options": {
      "A": "Offensive foul (charge): defender established legal guarding position first",
      "B": "Blocking foul: defender failed to establish legal guarding position",
      "C": "No-call: incidental contact that didn't affect the play significantly",
      "D": "Double foul: both players initiated illegal contact simultaneously",
      "a": "Offensive foul (charge): defender established legal guarding position first",
      "b": "Blocking foul: defender failed to establish legal guarding position",
      "c": "No-call: incidental contact that didn't affect the play significantly",
      "d": "Double foul: both players initiated illegal contact simultaneously"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Defender didn't meet legal guarding position requirements",
      "C": "Contact was significant enough to affect the play",
      "D": "Only one player committed a foul on this play"
    },
    "category": "BLOCKING FOULS",
    "scenario": "",
    "question": "Player A1 is running up the court and catches an outlet pass near midcourt and immediately crashes into defender B1 who is standing in a stationary position. Is this a legal defensive position to draw an offensive foul?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "",
    "casebookReference": "Case 27"
  },
  {
    "id": "casebook-2025-028",
    "case_number": 28,
    "casebook_category": "BLOCKING FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "Player A1 drives past his primary defender and crashes into secondary defender B5 who is stationary and trying to draw an offensive foul. A defensive foul should be called if Player B5\u2019s heel is in the Restricted Area (RA)?",
    "options": {
      "A": "Offensive foul (charge): defender established legal guarding position first",
      "B": "Blocking foul: defender failed to establish legal guarding position",
      "C": "No-call: incidental contact that didn't affect the play significantly",
      "D": "Double foul: both players initiated illegal contact simultaneously",
      "a": "Offensive foul (charge): defender established legal guarding position first",
      "b": "Blocking foul: defender failed to establish legal guarding position",
      "c": "No-call: incidental contact that didn't affect the play significantly",
      "d": "Double foul: both players initiated illegal contact simultaneously"
    },
    "correct_answer": "A",
    "explanation": "Yes.",
    "distractor_rationale": {
      "B": "Defender had legal position before offensive player's upward motion",
      "C": "Contact was significant and affected the play",
      "D": "Only the offensive player committed a foul"
    },
    "category": "BLOCKING FOULS",
    "scenario": "",
    "question": "Player A1 drives past his primary defender and crashes into secondary defender B5 who is stationary and trying to draw an offensive foul. A defensive foul should be called if Player B5\u2019s heel is in the Restricted Area (RA)?",
    "correctAnswer": "a",
    "ruling": "Yes.",
    "ruleReference": "",
    "casebookReference": "Case 28"
  },
  {
    "id": "casebook-2025-029",
    "case_number": 29,
    "casebook_category": "BLOCKING FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "Is it always a blocking foul if the secondary defender is inside the restricted area?",
    "options": {
      "A": "Offensive foul (charge): defender established legal guarding position first",
      "B": "Blocking foul: defender failed to establish legal guarding position",
      "C": "No-call: incidental contact that didn't affect the play significantly",
      "D": "Double foul: both players initiated illegal contact simultaneously",
      "a": "Offensive foul (charge): defender established legal guarding position first",
      "b": "Blocking foul: defender failed to establish legal guarding position",
      "c": "No-call: incidental contact that didn't affect the play significantly",
      "d": "Double foul: both players initiated illegal contact simultaneously"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Defender didn't meet legal guarding position requirements",
      "C": "Contact was significant enough to affect the play",
      "D": "Only one player committed a foul on this play"
    },
    "category": "BLOCKING FOULS",
    "scenario": "",
    "question": "Is it always a blocking foul if the secondary defender is inside the restricted area?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "",
    "casebookReference": "Case 29"
  },
  {
    "id": "casebook-2025-030",
    "case_number": 30,
    "casebook_category": "BLOCKING FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "Player A1 is driving to the basket for a lay-up. What is the deciding point between block or charge?",
    "options": {
      "A": "Offensive foul (charge): defender established legal guarding position first",
      "B": "Blocking foul: defender failed to establish legal guarding position",
      "C": "No-call: incidental contact that didn't affect the play significantly",
      "D": "Double foul: both players initiated illegal contact simultaneously",
      "a": "Offensive foul (charge): defender established legal guarding position first",
      "b": "Blocking foul: defender failed to establish legal guarding position",
      "c": "No-call: incidental contact that didn't affect the play significantly",
      "d": "Double foul: both players initiated illegal contact simultaneously"
    },
    "correct_answer": "A",
    "explanation": "The defender must get his body directly into the offensive player\u2019s path and be at the spot prior to the upward motion, defined as shoulder starting upward, in order to draw an offensive foul.",
    "distractor_rationale": {
      "B": "Defender had legal position before offensive player's upward motion",
      "C": "Contact was significant and affected the play",
      "D": "Only the offensive player committed a foul"
    },
    "category": "BLOCKING FOULS",
    "scenario": "",
    "question": "Player A1 is driving to the basket for a lay-up. What is the deciding point between block or charge?",
    "correctAnswer": "a",
    "ruling": "The defender must get his body directly into the offensive player\u2019s path and be at the spot prior to the upward motion, defined as shoulder starting upward, in order to draw an offensive foul.",
    "ruleReference": "",
    "casebookReference": "Case 30"
  },
  {
    "id": "casebook-2025-031",
    "case_number": 31,
    "casebook_category": "BLOCKING FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "Player A1 is dribbling the ball and Player B1 jumps into his path. What is the deciding point between block or charge?",
    "options": {
      "A": "Offensive foul (charge): defender established legal guarding position first",
      "B": "Blocking foul: defender failed to establish legal guarding position",
      "C": "No-call: incidental contact that didn't affect the play significantly",
      "D": "Double foul: both players initiated illegal contact simultaneously",
      "a": "Offensive foul (charge): defender established legal guarding position first",
      "b": "Blocking foul: defender failed to establish legal guarding position",
      "c": "No-call: incidental contact that didn't affect the play significantly",
      "d": "Double foul: both players initiated illegal contact simultaneously"
    },
    "correct_answer": "B",
    "explanation": "A dribbler is expected to be in control at all times and if a defender can legally get to a \u2018spot\u2019 in the path of the dribbler, it is the dribbler\u2019s responsibility to avoid contact immediately.",
    "distractor_rationale": {
      "A": "Defender didn't meet legal guarding position requirements",
      "C": "Contact was significant enough to affect the play",
      "D": "Only one player committed a foul on this play"
    },
    "category": "BLOCKING FOULS",
    "scenario": "",
    "question": "Player A1 is dribbling the ball and Player B1 jumps into his path. What is the deciding point between block or charge?",
    "correctAnswer": "b",
    "ruling": "A dribbler is expected to be in control at all times and if a defender can legally get to a \u2018spot\u2019 in the path of the dribbler, it is the dribbler\u2019s responsibility to avoid contact immediately.",
    "ruleReference": "",
    "casebookReference": "Case 31"
  },
  {
    "id": "casebook-2025-032",
    "case_number": 32,
    "casebook_category": "BLOCKING FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "Defensive Player B5 gets to a legal position and jumps vertically on Player A3\u2019s drive to the basket. As player A3 attempts to shoot, B5 lowers his arm and contacts A3 on the elbow. Is this a foul?",
    "options": {
      "A": "Offensive foul (charge): defender established legal guarding position first",
      "B": "Blocking foul: defender failed to establish legal guarding position",
      "C": "No-call: incidental contact that didn't affect the play significantly",
      "D": "Double foul: both players initiated illegal contact simultaneously",
      "a": "Offensive foul (charge): defender established legal guarding position first",
      "b": "Blocking foul: defender failed to establish legal guarding position",
      "c": "No-call: incidental contact that didn't affect the play significantly",
      "d": "Double foul: both players initiated illegal contact simultaneously"
    },
    "correct_answer": "A",
    "explanation": "Yes, B5 did not maintain his verticality when he lowered his arm and since he made contact with A3\u2019s elbow, a shooting foul should be assessed.",
    "distractor_rationale": {
      "B": "Defender had legal position before offensive player's upward motion",
      "C": "Contact was significant and affected the play",
      "D": "Only the offensive player committed a foul"
    },
    "category": "BLOCKING FOULS",
    "scenario": "",
    "question": "Defensive Player B5 gets to a legal position and jumps vertically on Player A3\u2019s drive to the basket. As player A3 attempts to shoot, B5 lowers his arm and contacts A3 on the elbow. Is this a foul?",
    "correctAnswer": "a",
    "ruling": "Yes, B5 did not maintain his verticality when he lowered his arm and since he made contact with A3\u2019s elbow, a shooting foul should be assessed.",
    "ruleReference": "",
    "casebookReference": "Case 32"
  },
  {
    "id": "casebook-2025-033",
    "case_number": 33,
    "casebook_category": "CAPTAINS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 3, SECTION III"
    ],
    "question_text": "Team A calls a timeout. The captain of Team B wishes to discuss a rule interpretation with the officials. Is this allowed?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "No. Only the captain of the team charged the timeout may question the officials. At this time he may only ask about a specific rule interpretation, but not about a judgment call.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "CAPTAINS",
    "scenario": "",
    "question": "Team A calls a timeout. The captain of Team B wishes to discuss a rule interpretation with the officials. Is this allowed?",
    "correctAnswer": "b",
    "ruling": "No. Only the captain of the team charged the timeout may question the officials. At this time he may only ask about a specific rule interpretation, but not about a judgment call.",
    "ruleReference": "RULE 3, SECTION III",
    "casebookReference": "Case 33"
  },
  {
    "id": "casebook-2025-034",
    "case_number": 34,
    "casebook_category": "CAPTAINS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 3, SECTION III"
    ],
    "question_text": "The playing captain of Team A is seated on the bench after being disqualified because of six personal fouls. Team A calls a timeout and one of the other players on the court wishes to discuss a rule with the officials. Is this legal?",
    "options": {
      "A": "Request is granted; captain may address officials",
      "B": "Request denied; only specific captain privileges apply",
      "C": "Technical foul for improper communication",
      "D": "Coach must make the request instead of captain",
      "a": "Request is granted; captain may address officials",
      "b": "Request denied; only specific captain privileges apply",
      "c": "Technical foul for improper communication",
      "d": "Coach must make the request instead of captain"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Captain privileges are limited to specific situations",
      "C": "Improper requests aren't technical fouls",
      "D": "Captains have certain direct communication rights"
    },
    "category": "CAPTAINS",
    "scenario": "",
    "question": "The playing captain of Team A is seated on the bench after being disqualified because of six personal fouls. Team A calls a timeout and one of the other players on the court wishes to discuss a rule with the officials. Is this legal?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 3, SECTION III",
    "casebookReference": "Case 34"
  },
  {
    "id": "casebook-2025-035",
    "case_number": 35,
    "casebook_category": "CHOICE OF BASKETS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 4, SECTION I"
    ],
    "question_text": "Which team has the choice of baskets prior to the start of the game?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "The visiting team, or for a neutral site game, the first team named in the official schedule, has its choice of baskets for the first half. Its choice must be made when it first takes the court.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "CHOICE OF BASKETS",
    "scenario": "",
    "question": "Which team has the choice of baskets prior to the start of the game?",
    "correctAnswer": "a",
    "ruling": "The visiting team, or for a neutral site game, the first team named in the official schedule, has its choice of baskets for the first half. Its choice must be made when it first takes the court.",
    "ruleReference": "RULE 4, SECTION I",
    "casebookReference": "Case 35"
  },
  {
    "id": "casebook-2025-036",
    "case_number": 36,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "How is \u201ctransition scoring opportunity\u201d defined for purposes of the clear path foul rule?",
    "options": {
      "A": "Common foul; free throws only if the offensive team is in the bonus",
      "B": "Clear-path foul: two free throws plus possession at the sideline",
      "C": "Transition take foul: one free throw plus possession at sideline",
      "D": "Flagrant 1: two free throws plus possession due to contact from behind",
      "a": "Common foul; free throws only if the offensive team is in the bonus",
      "b": "Clear-path foul: two free throws plus possession at the sideline",
      "c": "Transition take foul: one free throw plus possession at sideline",
      "d": "Flagrant 1: two free throws plus possession due to contact from behind"
    },
    "correct_answer": "B",
    "explanation": "For purposes of the clear path foul rule, a \u201ctransition scoring opportunity\u201d exists when, following a change in possession, the offensive team is continuously advancing the ball while it has an.",
    "distractor_rationale": {
      "A": "All clear-path criteria met; more severe penalty applies",
      "C": "Clear-path is more severe than take foul (2 FTs vs 1 FT)",
      "D": "Clear-path and flagrant are separate determinations"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "How is \u201ctransition scoring opportunity\u201d defined for purposes of the clear path foul rule?",
    "correctAnswer": "b",
    "ruling": "For purposes of the clear path foul rule, a \u201ctransition scoring opportunity\u201d exists when, following a change in possession, the offensive team is continuously advancing the ball while it has an.",
    "ruleReference": "",
    "casebookReference": "Case 36"
  },
  {
    "id": "casebook-2025-037",
    "case_number": 37,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "Player A1 is dribbling in the frontcourt toward the basket during a transition scoring opportunity. Player B1 fouls him from the rear and no other defender is ahead of Player A1 at the time of the foul. What is the ruling?",
    "options": {
      "A": "Common foul; free throws only if the offensive team is in the bonus",
      "B": "Clear-path foul: two free throws plus possession at the sideline",
      "C": "Transition take foul: one free throw plus possession at sideline",
      "D": "Flagrant 1: two free throws plus possession due to contact from behind",
      "a": "Common foul; free throws only if the offensive team is in the bonus",
      "b": "Clear-path foul: two free throws plus possession at the sideline",
      "c": "Transition take foul: one free throw plus possession at sideline",
      "d": "Flagrant 1: two free throws plus possession due to contact from behind"
    },
    "correct_answer": "B",
    "explanation": "This is a clear path foul.",
    "distractor_rationale": {
      "A": "All clear-path criteria met; more severe penalty applies",
      "C": "Clear-path is more severe than take foul (2 FTs vs 1 FT)",
      "D": "Clear-path and flagrant are separate determinations"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "Player A1 is dribbling in the frontcourt toward the basket during a transition scoring opportunity. Player B1 fouls him from the rear and no other defender is ahead of Player A1 at the time of the foul. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "This is a clear path foul.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 37"
  },
  {
    "id": "casebook-2025-038",
    "case_number": 38,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I",
      "RULE 4, SECTION IV"
    ],
    "question_text": "Player A2 secures a rebound from an unsuccessful field goal attempt by Player B1, while Player A2 is standing beneath the free throw line in Team A\u2019s backcourt. Immediately after Player A2 secured the rebound and turned to throw a long pass to Player A1 for an uncontested layup, Player A2 is fouled by Player B3. What is the ruling?",
    "options": {
      "A": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "B": "Common foul; penalty based on team foul count and bonus status",
      "C": "Transition take foul: one free throw plus possession at point of interruption",
      "D": "Flagrant 1 foul: two free throws plus possession for contact from behind",
      "a": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "b": "Common foul; penalty based on team foul count and bonus status",
      "c": "Transition take foul: one free throw plus possession at point of interruption",
      "d": "Flagrant 1 foul: two free throws plus possession for contact from behind"
    },
    "correct_answer": "B",
    "explanation": "This play should result in either a common foul or transition take foul depending on whether Player B3 committed a take foul or made a legitimate play on the ball.",
    "distractor_rationale": {
      "A": "A defender was ahead of the ball, negating clear-path criteria",
      "C": "May apply if deliberate, but standard foul rules apply here",
      "D": "Contact wasn't unnecessary or excessive enough for flagrant"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "Player A2 secures a rebound from an unsuccessful field goal attempt by Player B1, while Player A2 is standing beneath the free throw line in Team A\u2019s backcourt. Immediately after Player A2 secured the rebound and turned to throw a long pass to Player A1 for an uncontested layup, Player A2 is fouled by Player B3. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "This play should result in either a common foul or transition take foul depending on whether Player B3 committed a take foul or made a legitimate play on the ball.",
    "ruleReference": "RULE 12B, SECTION I, RULE 4, SECTION IV",
    "casebookReference": "Case 38"
  },
  {
    "id": "casebook-2025-039",
    "case_number": 39,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "Player A1, who has a clear-path-to-the-basket, is grabbed from behind on a twopoint field goal attempt. What is the procedure if the attempt is: (1) successful, (2) unsuccessful?",
    "options": {
      "A": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "B": "Common foul; penalty based on team foul count and bonus status",
      "C": "Transition take foul: one free throw plus possession at point of interruption",
      "D": "Flagrant 1 foul: two free throws plus possession for contact from behind",
      "a": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "b": "Common foul; penalty based on team foul count and bonus status",
      "c": "Transition take foul: one free throw plus possession at point of interruption",
      "d": "Flagrant 1 foul: two free throws plus possession for contact from behind"
    },
    "correct_answer": "B",
    "explanation": "In both situations (1) and (2), a common foul should be called.",
    "distractor_rationale": {
      "A": "A defender was ahead of the ball, negating clear-path criteria",
      "C": "May apply if deliberate, but standard foul rules apply here",
      "D": "Contact wasn't unnecessary or excessive enough for flagrant"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "Player A1, who has a clear-path-to-the-basket, is grabbed from behind on a twopoint field goal attempt. What is the procedure if the attempt is: (1) successful, (2) unsuccessful?",
    "correctAnswer": "b",
    "ruling": "In both situations (1) and (2), a common foul should be called.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 39"
  },
  {
    "id": "casebook-2025-040",
    "case_number": 40,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "Player A1 throws a pass from his backcourt to Player A2 who receives it under the backboard near the baseline. Simultaneous with Player A2 receiving the pass, he is fouled by Player B2. What is the ruling?",
    "options": {
      "A": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "B": "Common foul; penalty based on team foul count and bonus status",
      "C": "Transition take foul: one free throw plus possession at point of interruption",
      "D": "Flagrant 1 foul: two free throws plus possession for contact from behind",
      "a": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "b": "Common foul; penalty based on team foul count and bonus status",
      "c": "Transition take foul: one free throw plus possession at point of interruption",
      "d": "Flagrant 1 foul: two free throws plus possession for contact from behind"
    },
    "correct_answer": "B",
    "explanation": "This is a common foul.",
    "distractor_rationale": {
      "A": "A defender was ahead of the ball, negating clear-path criteria",
      "C": "May apply if deliberate, but standard foul rules apply here",
      "D": "Contact wasn't unnecessary or excessive enough for flagrant"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "Player A1 throws a pass from his backcourt to Player A2 who receives it under the backboard near the baseline. Simultaneous with Player A2 receiving the pass, he is fouled by Player B2. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "This is a common foul.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 40"
  },
  {
    "id": "casebook-2025-041",
    "case_number": 41,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "Prior to Team A advancing the ball into its frontcourt, a pass from Player A1 to Player A2 is stolen by Player B3. Immediately after gaining possession in Team B\u2019s frontcourt, Player B3 drives toward the basket and is fouled at the free throw line extended by Player A2 prior to Player B3 starting his shooting motion. No other defenders from Team A are ahead of Player B3 at the time of the foul. What is the ruling?",
    "options": {
      "A": "Common foul; free throws only if the offensive team is in the bonus",
      "B": "Clear-path foul: two free throws plus possession at the sideline",
      "C": "Transition take foul: one free throw plus possession at sideline",
      "D": "Flagrant 1: two free throws plus possession due to contact from behind",
      "a": "Common foul; free throws only if the offensive team is in the bonus",
      "b": "Clear-path foul: two free throws plus possession at the sideline",
      "c": "Transition take foul: one free throw plus possession at sideline",
      "d": "Flagrant 1: two free throws plus possession due to contact from behind"
    },
    "correct_answer": "B",
    "explanation": "This is a clear path foul.",
    "distractor_rationale": {
      "A": "All clear-path criteria met; more severe penalty applies",
      "C": "Clear-path is more severe than take foul (2 FTs vs 1 FT)",
      "D": "Clear-path and flagrant are separate determinations"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "Prior to Team A advancing the ball into its frontcourt, a pass from Player A1 to Player A2 is stolen by Player B3. Immediately after gaining possession in Team B\u2019s frontcourt, Player B3 drives toward the basket and is fouled at the free throw line extended by Player A2 prior to Player B3 starting his shooting motion. No other defenders from Team A are ahead of Player B3 at the time of the foul. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "This is a clear path foul.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 41"
  },
  {
    "id": "casebook-2025-042",
    "case_number": 42,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I",
      "RULE 4, SECTION IV"
    ],
    "question_text": "With 5:56 remaining in the fourth period, Player B1 intercepts a pass in Team A\u2019s frontcourt and, as Player B1 continuously advances the ball with the dribble during a transition scoring opportunity, he is grabbed from behind by Player A2 (who did not make a legitimate play on the ball) as Player B1 crosses into Team B\u2019s frontcourt on the left side of the court. At the time of the foul, Player A3 is slightly ahead of Player B1 on the far-right side of the court, but Player A3 probably would be unable to position himself between Player B1 and the basket before Player B1 has the opportunity to score. Is this a clear path foul?",
    "options": {
      "A": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "B": "Common foul; penalty based on team foul count and bonus status",
      "C": "Transition take foul: one free throw plus possession at point of interruption",
      "D": "Flagrant 1 foul: two free throws plus possession for contact from behind",
      "a": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "b": "Common foul; penalty based on team foul count and bonus status",
      "c": "Transition take foul: one free throw plus possession at point of interruption",
      "d": "Flagrant 1 foul: two free throws plus possession for contact from behind"
    },
    "correct_answer": "B",
    "explanation": "No, this is not a clear path foul because, at the time of the foul, Player A3 is ahead of Player B1.",
    "distractor_rationale": {
      "A": "A defender was ahead of the ball, negating clear-path criteria",
      "C": "May apply if deliberate, but standard foul rules apply here",
      "D": "Contact wasn't unnecessary or excessive enough for flagrant"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "With 5:56 remaining in the fourth period, Player B1 intercepts a pass in Team A\u2019s frontcourt and, as Player B1 continuously advances the ball with the dribble during a transition scoring opportunity, he is grabbed from behind by Player A2 (who did not make a legitimate play on the ball) as Player B1 crosses into Team B\u2019s frontcourt on the left side of the court. At the time of the foul, Player A3 is slightly ahead of Player B1 on the far-right side of the court, but Player A3 probably would be unable to position himself between Player B1 and the basket before Player B1 has the opportunity to score. Is this a clear path foul?",
    "correctAnswer": "b",
    "ruling": "No, this is not a clear path foul because, at the time of the foul, Player A3 is ahead of Player B1.",
    "ruleReference": "RULE 12B, SECTION I, RULE 4, SECTION IV",
    "casebookReference": "Case 42"
  },
  {
    "id": "casebook-2025-043",
    "case_number": 43,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "As Player A1 advances the ball up the court during a transition scoring opportunity, he makes a long, accurate pass ahead to his teammate, Player A5, who is running toward the basket in his team\u2019s frontcourt. As Player A5 jumps to catch the pass, Player B5 pushes Player A5 in the back (rather than making a play on the ball). At the time of the foul, no defenders are located between Player A5 and the basket. What is the call?",
    "options": {
      "A": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "B": "Common foul; penalty based on team foul count and bonus status",
      "C": "Transition take foul: one free throw plus possession at point of interruption",
      "D": "Flagrant 1 foul: two free throws plus possession for contact from behind",
      "a": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "b": "Common foul; penalty based on team foul count and bonus status",
      "c": "Transition take foul: one free throw plus possession at point of interruption",
      "d": "Flagrant 1 foul: two free throws plus possession for contact from behind"
    },
    "correct_answer": "B",
    "explanation": "This is a clear path foul.",
    "distractor_rationale": {
      "A": "A defender was ahead of the ball, negating clear-path criteria",
      "C": "May apply if deliberate, but standard foul rules apply here",
      "D": "Contact wasn't unnecessary or excessive enough for flagrant"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "As Player A1 advances the ball up the court during a transition scoring opportunity, he makes a long, accurate pass ahead to his teammate, Player A5, who is running toward the basket in his team\u2019s frontcourt. As Player A5 jumps to catch the pass, Player B5 pushes Player A5 in the back (rather than making a play on the ball). At the time of the foul, no defenders are located between Player A5 and the basket. What is the call?",
    "correctAnswer": "b",
    "ruling": "This is a clear path foul.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 43"
  },
  {
    "id": "casebook-2025-044",
    "case_number": 44,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "Player A1 throws an errant pass that is intercepted by Player B2 at the three-point line of Team A\u2019s frontcourt. Player B2 immediately advances the ball with the dribble. In an effort to stop Team B\u2019s transition scoring opportunity, Player A5 sprints into Team B\u2019s frontcourt and establishes clear position in front of Player B2. As Player B2 approaches the defender, Player A5, in Team B\u2019s frontcourt, Player B2 makes an impressive dribble move to get completely by Player A5. After Player A5 realizes that he is beat on the play, Player A5 turns and grabs Player B2 from behind prior to Player B2 beginning his shooting motion. What is the ruling?",
    "options": {
      "A": "Common foul; free throws only if the offensive team is in the bonus",
      "B": "Clear-path foul: two free throws plus possession at the sideline",
      "C": "Transition take foul: one free throw plus possession at sideline",
      "D": "Flagrant 1: two free throws plus possession due to contact from behind",
      "a": "Common foul; free throws only if the offensive team is in the bonus",
      "b": "Clear-path foul: two free throws plus possession at the sideline",
      "c": "Transition take foul: one free throw plus possession at sideline",
      "d": "Flagrant 1: two free throws plus possession due to contact from behind"
    },
    "correct_answer": "B",
    "explanation": "This is a clear path foul.",
    "distractor_rationale": {
      "A": "All clear-path criteria met; more severe penalty applies",
      "C": "Clear-path is more severe than take foul (2 FTs vs 1 FT)",
      "D": "Clear-path and flagrant are separate determinations"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "Player A1 throws an errant pass that is intercepted by Player B2 at the three-point line of Team A\u2019s frontcourt. Player B2 immediately advances the ball with the dribble. In an effort to stop Team B\u2019s transition scoring opportunity, Player A5 sprints into Team B\u2019s frontcourt and establishes clear position in front of Player B2. As Player B2 approaches the defender, Player A5, in Team B\u2019s frontcourt, Player B2 makes an impressive dribble move to get completely by Player A5. After Player A5 realizes that he is beat on the play, Player A5 turns and grabs Player B2 from behind prior to Player B2 beginning his shooting motion. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "This is a clear path foul.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 44"
  },
  {
    "id": "casebook-2025-045",
    "case_number": 45,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "As Team A pushes the ball during a transition scoring opportunity, Player A1 throws the ball ahead to Player A4 who is running toward the basket in Team A\u2019s frontcourt and appears to be wide open. As Player A4 is about to catch the pass, Player B2 sprints toward the play, jumps up with his arms stretching toward the ball, and nearly deflects the pass intended for Player A4. In the process of trying to deflect the pass, Player B2 collides with Player A4 and a foul is called on Player B2. At the time of the foul, no defender is ahead of Player A4 (i.e., the player with the transition scoring opportunity). Is this a clear path foul?",
    "options": {
      "A": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "B": "Common foul; penalty based on team foul count and bonus status",
      "C": "Transition take foul: one free throw plus possession at point of interruption",
      "D": "Flagrant 1 foul: two free throws plus possession for contact from behind",
      "a": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "b": "Common foul; penalty based on team foul count and bonus status",
      "c": "Transition take foul: one free throw plus possession at point of interruption",
      "d": "Flagrant 1 foul: two free throws plus possession for contact from behind"
    },
    "correct_answer": "B",
    "explanation": "No, this is a common foul.",
    "distractor_rationale": {
      "A": "A defender was ahead of the ball, negating clear-path criteria",
      "C": "May apply if deliberate, but standard foul rules apply here",
      "D": "Contact wasn't unnecessary or excessive enough for flagrant"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "As Team A pushes the ball during a transition scoring opportunity, Player A1 throws the ball ahead to Player A4 who is running toward the basket in Team A\u2019s frontcourt and appears to be wide open. As Player A4 is about to catch the pass, Player B2 sprints toward the play, jumps up with his arms stretching toward the ball, and nearly deflects the pass intended for Player A4. In the process of trying to deflect the pass, Player B2 collides with Player A4 and a foul is called on Player B2. At the time of the foul, no defender is ahead of Player A4 (i.e., the player with the transition scoring opportunity). Is this a clear path foul?",
    "correctAnswer": "b",
    "ruling": "No, this is a common foul.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 45"
  },
  {
    "id": "casebook-2025-046",
    "case_number": 46,
    "casebook_category": "CLEAR-PATH-TO-THE-BASKET",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "After Player A4 inbounds the ball in Team A\u2019s backcourt, Player A1 briskly advances the ball into the frontcourt as Player A4 trails the play and Team A\u2019s wing players (Players A2 and A3) position themselves much higher on the wing than usual in an effort to distort the spacing of the defenders on Team B. Player A5, who is positioned slightly above the elbow, seals his defender, Player B5, as Player B5 attempts to front Player A5. Player A1 lobs a post entry pass to Player A5 (over the top of Player B5). Recognizing that he is beat on the play, Player B5 grasps Player A5\u2019s jersey from behind as Player A5 catches the pass and a foul is called on Player B5. At the time of the foul, no defender is between Player A5 and the basket and Player A5 presumably would have had an easy dunk if the foul had not occurred. Is this a clear path foul?",
    "options": {
      "A": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "B": "Common foul; penalty based on team foul count and bonus status",
      "C": "Transition take foul: one free throw plus possession at point of interruption",
      "D": "Flagrant 1 foul: two free throws plus possession for contact from behind",
      "a": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "b": "Common foul; penalty based on team foul count and bonus status",
      "c": "Transition take foul: one free throw plus possession at point of interruption",
      "d": "Flagrant 1 foul: two free throws plus possession for contact from behind"
    },
    "correct_answer": "B",
    "explanation": "No, this is a common foul on Player B5.",
    "distractor_rationale": {
      "A": "A defender was ahead of the ball, negating clear-path criteria",
      "C": "May apply if deliberate, but standard foul rules apply here",
      "D": "Contact wasn't unnecessary or excessive enough for flagrant"
    },
    "category": "CLEAR-PATH-TO-THE-BASKET",
    "scenario": "",
    "question": "After Player A4 inbounds the ball in Team A\u2019s backcourt, Player A1 briskly advances the ball into the frontcourt as Player A4 trails the play and Team A\u2019s wing players (Players A2 and A3) position themselves much higher on the wing than usual in an effort to distort the spacing of the defenders on Team B. Player A5, who is positioned slightly above the elbow, seals his defender, Player B5, as Player B5 attempts to front Player A5. Player A1 lobs a post entry pass to Player A5 (over the top of Player B5). Recognizing that he is beat on the play, Player B5 grasps Player A5\u2019s jersey from behind as Player A5 catches the pass and a foul is called on Player B5. At the time of the foul, no defender is between Player A5 and the basket and Player A5 presumably would have had an easy dunk if the foul had not occurred. Is this a clear path foul?",
    "correctAnswer": "b",
    "ruling": "No, this is a common foul on Player B5.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 46"
  },
  {
    "id": "casebook-2025-047",
    "case_number": 47,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION V",
      "RULE 14, SECTION II",
      "RULE 14, SECTION VI"
    ],
    "question_text": "With 9:58 remaining in the fourth period, as Player A1 advances the ball into his team\u2019s frontcourt with the dribble, Player B1 attempts to steal the ball from Player A1. Player B1 is called for a defensive foul. Team A\u2019s head coach immediately calls a timeout, thereby triggering the first mandatory timeout of the fourth period. (1) What is required of Team B to challenge the foul called on Player B1?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "(2) Assuming the Challenge is legally triggered and deemed successful, how is play resumed and what impact does it have on Team B\u2019s timeouts?",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "With 9:58 remaining in the fourth period, as Player A1 advances the ball into his team\u2019s frontcourt with the dribble, Player B1 attempts to steal the ball from Player A1. Player B1 is called for a defensive foul. Team A\u2019s head coach immediately calls a timeout, thereby triggering the first mandatory timeout of the fourth period. (1) What is required of Team B to challenge the foul called on Player B1?",
    "correctAnswer": "b",
    "ruling": "(2) Assuming the Challenge is legally triggered and deemed successful, how is play resumed and what impact does it have on Team B\u2019s timeouts?",
    "ruleReference": "RULE 14, SECTION V, RULE 14, SECTION II, RULE 14, SECTION VI",
    "casebookReference": "Case 47"
  },
  {
    "id": "casebook-2025-048",
    "case_number": 48,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "expert",
    "rule_references": [
      "RULE 14, SECTION V",
      "RULE 12B, SECTION IV",
      "RULE 14, SECTION III",
      "RULE 14, SECTION VI"
    ],
    "question_text": "With 13.8 seconds remaining in the fourth period and Team A ahead 106-104, Player B5 is called for a hard foul on Player A2 immediately after Player A2 crosses the half-court line. As a result of this contact, Player A2 falls into the first row of the spectator stands. Although it is an obvious foul on Player B5, Team B\u2019s head coach uses Team B\u2019s last timeout to challenge the foul called on Player B5. At the time of Team B\u2019s Challenge, both mandatory timeouts previously had been assigned. During instant replay review, the video clearly and conclusively shows that (i) Team A committed an 8-second backcourt violation before Player A2 was fouled by Player B5, and (ii) Player B5\u2019s contact on Player A2 did not rise to the level of a Flagrant Foul. How is this situation administered?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "Because video evidence clearly and conclusively showed that Team A committed an 8-second backcourt violation before the foul committed by Player B5, the foul called on Player B5 is reversed and Team.",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "With 13.8 seconds remaining in the fourth period and Team A ahead 106-104, Player B5 is called for a hard foul on Player A2 immediately after Player A2 crosses the half-court line. As a result of this contact, Player A2 falls into the first row of the spectator stands. Although it is an obvious foul on Player B5, Team B\u2019s head coach uses Team B\u2019s last timeout to challenge the foul called on Player B5. At the time of Team B\u2019s Challenge, both mandatory timeouts previously had been assigned. During instant replay review, the video clearly and conclusively shows that (i) Team A committed an 8-second backcourt violation before Player A2 was fouled by Player B5, and (ii) Player B5\u2019s contact on Player A2 did not rise to the level of a Flagrant Foul. How is this situation administered?",
    "correctAnswer": "b",
    "ruling": "Because video evidence clearly and conclusively showed that Team A committed an 8-second backcourt violation before the foul committed by Player B5, the foul called on Player B5 is reversed and Team.",
    "ruleReference": "RULE 14, SECTION V, RULE 12B, SECTION IV, RULE 14, SECTION III, RULE 14, SECTION VI",
    "casebookReference": "Case 48"
  },
  {
    "id": "casebook-2025-049",
    "case_number": 49,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "expert",
    "rule_references": [
      "RULE 14, SECTION V",
      "RULE 14, SECTION III",
      "RULE 14, SECTION VI",
      "RULE 12B, SECTION V"
    ],
    "question_text": "With 14.4 seconds remaining in the fourth period, Player B1 is called for a defensive foul on Player A1 as Player A1 attempts an unsuccessful three-point field goal. The game officials deem the foul a shooting foul, which is Team B\u2019s third foul of the fourth period and first foul in the last two minutes of the fourth period. Both mandatory timeouts have previously been assigned in the quarter. Team B has a Challenge remaining. Team B\u2019s head coach immediately calls timeout and legally challenges the foul called on Player B1. During the review, the video provides no basis to overturn the call on the floor that Player B1 committed a defensive foul on Player A1, clearly and conclusively establishes that the foul occurred with 15.1 (not 14.4) seconds remaining in the fourth period, and clearly and conclusively establishes that Player A1 had not yet started his upward shooting motion at the time of the foul. How is this play administered?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "The Challenge is unsuccessful.",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "With 14.4 seconds remaining in the fourth period, Player B1 is called for a defensive foul on Player A1 as Player A1 attempts an unsuccessful three-point field goal. The game officials deem the foul a shooting foul, which is Team B\u2019s third foul of the fourth period and first foul in the last two minutes of the fourth period. Both mandatory timeouts have previously been assigned in the quarter. Team B has a Challenge remaining. Team B\u2019s head coach immediately calls timeout and legally challenges the foul called on Player B1. During the review, the video provides no basis to overturn the call on the floor that Player B1 committed a defensive foul on Player A1, clearly and conclusively establishes that the foul occurred with 15.1 (not 14.4) seconds remaining in the fourth period, and clearly and conclusively establishes that Player A1 had not yet started his upward shooting motion at the time of the foul. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "The Challenge is unsuccessful.",
    "ruleReference": "RULE 14, SECTION V, RULE 14, SECTION III, RULE 14, SECTION VI, RULE 12B, SECTION V",
    "casebookReference": "Case 49"
  },
  {
    "id": "casebook-2025-050",
    "case_number": 50,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION VI",
      "RULE 14, SECTION III",
      "RULE 6, SECTION V",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "After catching a pass from Player A1 in the corner, Player A2 beat his defender (Player B2) on a drive toward the basket, took two dribbles along the baseline, and crashed into Player B5 near the low block area as he attempted a running lay-up. How would each of the following situations be administered?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "(1) No call was made on the collision involving Player A2 and Player B5, but Player B4 was called for goaltending.",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "After catching a pass from Player A1 in the corner, Player A2 beat his defender (Player B2) on a drive toward the basket, took two dribbles along the baseline, and crashed into Player B5 near the low block area as he attempted a running lay-up. How would each of the following situations be administered?",
    "correctAnswer": "b",
    "ruling": "(1) No call was made on the collision involving Player A2 and Player B5, but Player B4 was called for goaltending.",
    "ruleReference": "RULE 14, SECTION VI, RULE 14, SECTION III, RULE 6, SECTION V, RULE 4, SECTION XIV",
    "casebookReference": "Case 50"
  },
  {
    "id": "casebook-2025-051",
    "case_number": 51,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION III"
    ],
    "question_text": "As Player A3 drove along the baseline toward the basket and Player B5 rotated over to play defense, Player B5 was called for a blocking foul a few feet outside the lane. Team B\u2019s head coach immediately called timeout and legally challenged the foul called on Player B5. How would each of the following situations be administered?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "During instant replay review, the video clearly and conclusively showed that: (1) Player B5 beat Player A3 to the spot and established a legal guarding position in Player A3\u2019s path prior to Player A3.",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "As Player A3 drove along the baseline toward the basket and Player B5 rotated over to play defense, Player B5 was called for a blocking foul a few feet outside the lane. Team B\u2019s head coach immediately called timeout and legally challenged the foul called on Player B5. How would each of the following situations be administered?",
    "correctAnswer": "b",
    "ruling": "During instant replay review, the video clearly and conclusively showed that: (1) Player B5 beat Player A3 to the spot and established a legal guarding position in Player A3\u2019s path prior to Player A3.",
    "ruleReference": "RULE 14, SECTION III",
    "casebookReference": "Case 51"
  },
  {
    "id": "casebook-2025-052",
    "case_number": 52,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION III",
      "RULE 12A, SECTION V",
      "RULE 14, SECTION V",
      "RULE 14, SECTION II",
      "RULE 14, SECTION I"
    ],
    "question_text": "With 2:17 remaining in the fourth period, Player B1 is called for a defensive foul on Player A3 for swiping at the ball as Player A3 starts a shot attempt in the lane after securing an offensive rebound. How is the play administered in each of the following scenarios?",
    "options": {
      "A": "Challenge successful: foul is overturned entirely",
      "B": "Challenge unsuccessful: foul stands as originally called",
      "C": "Challenge successful: foul changed to different type/player",
      "D": "Challenge denied: play type not subject to challenge",
      "a": "Challenge successful: foul is overturned entirely",
      "b": "Challenge unsuccessful: foul stands as originally called",
      "c": "Challenge successful: foul changed to different type/player",
      "d": "Challenge denied: play type not subject to challenge"
    },
    "correct_answer": "C",
    "explanation": "(1) Team B\u2019s head coach calls a timeout immediately after the called foul on Player B1.",
    "distractor_rationale": {
      "A": "Foul occurred but was assigned to wrong player/type",
      "B": "Evidence showed different ruling was correct",
      "D": "This type of play is reviewable via challenge"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "With 2:17 remaining in the fourth period, Player B1 is called for a defensive foul on Player A3 for swiping at the ball as Player A3 starts a shot attempt in the lane after securing an offensive rebound. How is the play administered in each of the following scenarios?",
    "correctAnswer": "c",
    "ruling": "(1) Team B\u2019s head coach calls a timeout immediately after the called foul on Player B1.",
    "ruleReference": "RULE 14, SECTION III, RULE 12A, SECTION V, RULE 14, SECTION V, RULE 14, SECTION II, RULE 14, SECTION I",
    "casebookReference": "Case 52"
  },
  {
    "id": "casebook-2025-053",
    "case_number": 53,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION V",
      "RULE 5, SECTION VI",
      "RULE 14, SECTION III",
      "RULE 14, SECTION VI"
    ],
    "question_text": "With 3:13 remaining in the fourth period and the shot clock winding down, Player A1 maneuvers his way around an on-ball screen set by Player A5 above the top of the key, drives toward the basket, and passes to Player A2 in the corner. How is the play administered in each of the following scenarios?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "(1) After receiving the pass from Player A1, Player A2 attempts a three-point shot around the time the shot clock buzzer goes off.",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "With 3:13 remaining in the fourth period and the shot clock winding down, Player A1 maneuvers his way around an on-ball screen set by Player A5 above the top of the key, drives toward the basket, and passes to Player A2 in the corner. How is the play administered in each of the following scenarios?",
    "correctAnswer": "b",
    "ruling": "(1) After receiving the pass from Player A1, Player A2 attempts a three-point shot around the time the shot clock buzzer goes off.",
    "ruleReference": "RULE 14, SECTION V, RULE 5, SECTION VI, RULE 14, SECTION III, RULE 14, SECTION VI",
    "casebookReference": "Case 53"
  },
  {
    "id": "casebook-2025-054",
    "case_number": 54,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION V"
    ],
    "question_text": "For each of the two situations below involving a successful Coach\u2019s Challenge, what is the impact on the challenging team\u2019s timeouts?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "(1) With 3:32 remaining in the fourth period, Player B5 is called for a foul on Player A1 as Player A1 drives into the lane.",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "For each of the two situations below involving a successful Coach\u2019s Challenge, what is the impact on the challenging team\u2019s timeouts?",
    "correctAnswer": "b",
    "ruling": "(1) With 3:32 remaining in the fourth period, Player B5 is called for a foul on Player A1 as Player A1 drives into the lane.",
    "ruleReference": "RULE 14, SECTION V",
    "casebookReference": "Case 54"
  },
  {
    "id": "casebook-2025-055",
    "case_number": 55,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION II"
    ],
    "question_text": "With 4:02 remaining in the fourth period, Player A3 drove toward the basket along the baseline and collided with Player B5. Two officials blew their whistles almost simultaneously. The umpire called Player A3 for a charging foul, which would have been his sixth personal foul of the game. The crew chief called Player A3 for an outof-bounds violation immediately before his collision with Player B5. In reaction to the umpire\u2019s apparent foul call on Player A3, Team A\u2019s head coach immediately called timeout and demonstratively signaled for a Challenge of the foul called on Player A3. Immediately thereafter, the crew chief and umpire convened for more than 30 seconds and concluded that the final ruling on the floor was an out-ofbounds violation on Player A3. As the crew chief walked over to Team A\u2019s head coach to explain the ruling on the floor, Team A\u2019s head coach protested the foul called on Player A3 for about 10 seconds. Once the crew chief explained to Team A\u2019s head coach that the call on the floor was an out-of-bounds violation on Player A3, Team A\u2019s head coach responded by saying, \u201cIn that case, I want to challenge the out-of-bounds call.\u201d How is this situation administered?",
    "options": {
      "A": "Challenge successful: foul is overturned entirely",
      "B": "Challenge unsuccessful: foul stands as originally called",
      "C": "Challenge successful: foul changed to different type/player",
      "D": "Challenge denied: play type not subject to challenge",
      "a": "Challenge successful: foul is overturned entirely",
      "b": "Challenge unsuccessful: foul stands as originally called",
      "c": "Challenge successful: foul changed to different type/player",
      "d": "Challenge denied: play type not subject to challenge"
    },
    "correct_answer": "C",
    "explanation": "Team A\u2019s Challenge of the out-of-bounds violation called on Player A3 should be granted because Team A\u2019s head coach immediately called a timeout after the initial call on the floor and, once the crew.",
    "distractor_rationale": {
      "A": "Foul occurred but was assigned to wrong player/type",
      "B": "Evidence showed different ruling was correct",
      "D": "This type of play is reviewable via challenge"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "With 4:02 remaining in the fourth period, Player A3 drove toward the basket along the baseline and collided with Player B5. Two officials blew their whistles almost simultaneously. The umpire called Player A3 for a charging foul, which would have been his sixth personal foul of the game. The crew chief called Player A3 for an outof-bounds violation immediately before his collision with Player B5. In reaction to the umpire\u2019s apparent foul call on Player A3, Team A\u2019s head coach immediately called timeout and demonstratively signaled for a Challenge of the foul called on Player A3. Immediately thereafter, the crew chief and umpire convened for more than 30 seconds and concluded that the final ruling on the floor was an out-ofbounds violation on Player A3. As the crew chief walked over to Team A\u2019s head coach to explain the ruling on the floor, Team A\u2019s head coach protested the foul called on Player A3 for about 10 seconds. Once the crew chief explained to Team A\u2019s head coach that the call on the floor was an out-of-bounds violation on Player A3, Team A\u2019s head coach responded by saying, \u201cIn that case, I want to challenge the out-of-bounds call.\u201d How is this situation administered?",
    "correctAnswer": "c",
    "ruling": "Team A\u2019s Challenge of the out-of-bounds violation called on Player A3 should be granted because Team A\u2019s head coach immediately called a timeout after the initial call on the floor and, once the crew.",
    "ruleReference": "RULE 14, SECTION II",
    "casebookReference": "Case 55"
  },
  {
    "id": "casebook-2025-056",
    "case_number": 56,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION II",
      "RULE 14, SECTION II"
    ],
    "question_text": "Player A2 drives to the basket and gathers the ball when a shooting foul is called on Defender B2 for illegal contact across the arm of Player A2. Defender B2 immediately signals his coach to challenge the called foul. However, Team B\u2019s coach is hesitant to challenge and looks to his assistants for additional information on the play. In an effort to extend the challenge window, Team B\u2019s players are \u201cunorganized\u201d, \u201cconfused\u201d and continuously change positions along the free throw lane line in an effort to delay the administration of Player A2\u2019s free throws. How should this situation be handled?",
    "options": {
      "A": "Challenge successful: foul is overturned entirely",
      "B": "Challenge unsuccessful: foul stands as originally called",
      "C": "Challenge successful: foul changed to different type/player",
      "D": "Challenge denied: play type not subject to challenge",
      "a": "Challenge successful: foul is overturned entirely",
      "b": "Challenge unsuccessful: foul stands as originally called",
      "c": "Challenge successful: foul changed to different type/player",
      "d": "Challenge denied: play type not subject to challenge"
    },
    "correct_answer": "C",
    "explanation": "Once any team delays play from commencing in a timely manner, a Delay-of-Game should be issued.",
    "distractor_rationale": {
      "A": "Foul occurred but was assigned to wrong player/type",
      "B": "Evidence showed different ruling was correct",
      "D": "This type of play is reviewable via challenge"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "Player A2 drives to the basket and gathers the ball when a shooting foul is called on Defender B2 for illegal contact across the arm of Player A2. Defender B2 immediately signals his coach to challenge the called foul. However, Team B\u2019s coach is hesitant to challenge and looks to his assistants for additional information on the play. In an effort to extend the challenge window, Team B\u2019s players are \u201cunorganized\u201d, \u201cconfused\u201d and continuously change positions along the free throw lane line in an effort to delay the administration of Player A2\u2019s free throws. How should this situation be handled?",
    "correctAnswer": "c",
    "ruling": "Once any team delays play from commencing in a timely manner, a Delay-of-Game should be issued.",
    "ruleReference": "RULE 12A, SECTION II, RULE 14, SECTION II",
    "casebookReference": "Case 56"
  },
  {
    "id": "casebook-2025-057",
    "case_number": 57,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION III",
      "RULE 14, SECTION II",
      "RULE 14, SECTION IV",
      "RULE 14, SECTION I"
    ],
    "question_text": "With 1:25 remaining in the 4th period, as Player A1 dribbles the ball along the sideline in front of Team B\u2019s bench, Player B1 reaches across the body of A1 and knocks the ball out-of-bounds. The nearest official calls an out-of-bounds violation and awards the ball to Team A. How would the situation be administered if Player B1 appears to advocate for replay of the out-of-bounds call by twirling his finger?",
    "options": {
      "A": "Challenge successful: foul is overturned entirely",
      "B": "Challenge unsuccessful: foul stands as originally called",
      "C": "Challenge successful: foul changed to different type/player",
      "D": "Challenge denied: play type not subject to challenge",
      "a": "Challenge successful: foul is overturned entirely",
      "b": "Challenge unsuccessful: foul stands as originally called",
      "c": "Challenge successful: foul changed to different type/player",
      "d": "Challenge denied: play type not subject to challenge"
    },
    "correct_answer": "C",
    "explanation": "A Coach\u2019s Challenge is the only mechanism to trigger replay review of an out-of-bounds call at any point during the game.",
    "distractor_rationale": {
      "A": "Foul occurred but was assigned to wrong player/type",
      "B": "Evidence showed different ruling was correct",
      "D": "This type of play is reviewable via challenge"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "With 1:25 remaining in the 4th period, as Player A1 dribbles the ball along the sideline in front of Team B\u2019s bench, Player B1 reaches across the body of A1 and knocks the ball out-of-bounds. The nearest official calls an out-of-bounds violation and awards the ball to Team A. How would the situation be administered if Player B1 appears to advocate for replay of the out-of-bounds call by twirling his finger?",
    "correctAnswer": "c",
    "ruling": "A Coach\u2019s Challenge is the only mechanism to trigger replay review of an out-of-bounds call at any point during the game.",
    "ruleReference": "RULE 14, SECTION III, RULE 14, SECTION II, RULE 14, SECTION IV, RULE 14, SECTION I",
    "casebookReference": "Case 57"
  },
  {
    "id": "casebook-2025-058",
    "case_number": 58,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION V",
      "RULE 14, SECTION III",
      "RULE 4, SECTION IV",
      "RULE 14, SECTION I"
    ],
    "question_text": "With 11:24 remaining in the fourth period, Player A3 is called for a transition take foul on Player B2, which prompts Team A\u2019s head coach to immediately call a timeout and legally challenge the foul called on Player B2. The timeout called by Team A\u2019s head coach initiated the first mandatory timeout of the fourth period. How should each of the following situations be administered?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "(1) Replay clearly and conclusively shows that, although Player A3 overtly lunged toward Player B2, Player A3 did not make any contact with Player B2.",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "With 11:24 remaining in the fourth period, Player A3 is called for a transition take foul on Player B2, which prompts Team A\u2019s head coach to immediately call a timeout and legally challenge the foul called on Player B2. The timeout called by Team A\u2019s head coach initiated the first mandatory timeout of the fourth period. How should each of the following situations be administered?",
    "correctAnswer": "b",
    "ruling": "(1) Replay clearly and conclusively shows that, although Player A3 overtly lunged toward Player B2, Player A3 did not make any contact with Player B2.",
    "ruleReference": "RULE 14, SECTION V, RULE 14, SECTION III, RULE 4, SECTION IV, RULE 14, SECTION I",
    "casebookReference": "Case 58"
  },
  {
    "id": "casebook-2025-059",
    "case_number": 59,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 14, SECTION III",
      "RULE 4, SECTION XIV",
      "RULE 14, SECTION VI",
      "RULE 14, SECTION V",
      "RULE 14, SECTION I"
    ],
    "question_text": "How should each of the following situations be administered?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "(1) With 4:11 remaining in the fourth period, Player B5 is called for a shooting foul on Player A5 as Player A5 drives to the basket.",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "How should each of the following situations be administered?",
    "correctAnswer": "b",
    "ruling": "(1) With 4:11 remaining in the fourth period, Player B5 is called for a shooting foul on Player A5 as Player A5 drives to the basket.",
    "ruleReference": "RULE 14, SECTION III, RULE 4, SECTION XIV, RULE 14, SECTION VI, RULE 14, SECTION V, RULE 14, SECTION I",
    "casebookReference": "Case 59"
  },
  {
    "id": "casebook-2025-060",
    "case_number": 60,
    "casebook_category": "COACH'S CHALLENGE",
    "parent_category": "instant-replay",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12B, SECTION I",
      "RULE 14, SECTION III",
      "RULE 14, SECTION IV",
      "RULE 8, SECTION II",
      "RULE 14, SECTION V",
      "RULE 14, SECTION I"
    ],
    "question_text": "With 3:57 left in the fourth period, Player A1 dribbles the ball along the baseline toward the basket as he is guarded by Player B1. Player B1 reaches across Player A1\u2019s body and knocks the ball off Player A1\u2019s knee, and the ball subsequently goes out-ofbounds. The nearest official calls an out-of-bounds violation and awards the ball to Team B. Team A\u2019s head coach immediately calls timeout and legally uses the team\u2019s first Challenge to trigger instant replay review of the out-of-bounds ruling. Both mandatory timeouts have already occurred in the period, and Team B has already committed three team fouls. How would each of the following situations be administered?",
    "options": {
      "A": "Challenge unsuccessful: original call stands and team loses timeout",
      "B": "Challenge successful: call is overturned with appropriate adjustments",
      "C": "Challenge denied: this type of play is not reviewable via challenge",
      "D": "Inconclusive: original call stands but team retains timeout",
      "a": "Challenge unsuccessful: original call stands and team loses timeout",
      "b": "Challenge successful: call is overturned with appropriate adjustments",
      "c": "Challenge denied: this type of play is not reviewable via challenge",
      "d": "Inconclusive: original call stands but team retains timeout"
    },
    "correct_answer": "B",
    "explanation": "(1) During replay review, the Replay Center Official determines there is clear and conclusive visual evidence that a foul by Player B1 proximate to the out-of-bounds violation should have been called.",
    "distractor_rationale": {
      "A": "Clear and conclusive evidence supports overturning the call",
      "C": "This play type is challengeable under current rules",
      "D": "Evidence was conclusive enough to make a determination"
    },
    "category": "COACH'S CHALLENGE",
    "scenario": "",
    "question": "With 3:57 left in the fourth period, Player A1 dribbles the ball along the baseline toward the basket as he is guarded by Player B1. Player B1 reaches across Player A1\u2019s body and knocks the ball off Player A1\u2019s knee, and the ball subsequently goes out-ofbounds. The nearest official calls an out-of-bounds violation and awards the ball to Team B. Team A\u2019s head coach immediately calls timeout and legally uses the team\u2019s first Challenge to trigger instant replay review of the out-of-bounds ruling. Both mandatory timeouts have already occurred in the period, and Team B has already committed three team fouls. How would each of the following situations be administered?",
    "correctAnswer": "b",
    "ruling": "(1) During replay review, the Replay Center Official determines there is clear and conclusive visual evidence that a foul by Player B1 proximate to the out-of-bounds violation should have been called.",
    "ruleReference": "RULE 12B, SECTION I, RULE 14, SECTION III, RULE 14, SECTION IV, RULE 8, SECTION II, RULE 14, SECTION V, RULE 14, SECTION I",
    "casebookReference": "Case 60"
  },
  {
    "id": "casebook-2025-061",
    "case_number": 61,
    "casebook_category": "COACHES",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION II"
    ],
    "question_text": "A coach wishes to speak with the officials concerning a rule interpretation prior to the start of a period. Is this granted?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "Yes. However, the opposing coach must be given the opportunity to participate in the discussion. If he refuses to join the discussion, the officials may conduct the meeting with one coach.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "COACHES",
    "scenario": "",
    "question": "A coach wishes to speak with the officials concerning a rule interpretation prior to the start of a period. Is this granted?",
    "correctAnswer": "a",
    "ruling": "Yes. However, the opposing coach must be given the opportunity to participate in the discussion. If he refuses to join the discussion, the officials may conduct the meeting with one coach.",
    "ruleReference": "RULE 2, SECTION II",
    "casebookReference": "Case 61"
  },
  {
    "id": "casebook-2025-062",
    "case_number": 62,
    "casebook_category": "COACHES",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "A head coach beckons to the officials that he wants a timeout. Is this granted?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "Yes. The head coach\u2019s request for a timeout shall be granted at the time of the request when the ball is dead or in control by a player of his team.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "COACHES",
    "scenario": "",
    "question": "A head coach beckons to the officials that he wants a timeout. Is this granted?",
    "correctAnswer": "b",
    "ruling": "Yes. The head coach\u2019s request for a timeout shall be granted at the time of the request when the ball is dead or in control by a player of his team.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 62"
  },
  {
    "id": "casebook-2025-063",
    "case_number": 63,
    "casebook_category": "COACHES",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12A, SECTION VII",
      "RULE 3, SECTION IV"
    ],
    "question_text": "The officials eject a coach from the game. After leaving the bench, what restrictions are placed on him?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "Once a coach is ejected from the game, he must remain in the dressing room of his team or leave the building.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "COACHES",
    "scenario": "",
    "question": "The officials eject a coach from the game. After leaving the bench, what restrictions are placed on him?",
    "correctAnswer": "a",
    "ruling": "Once a coach is ejected from the game, he must remain in the dressing room of his team or leave the building.",
    "ruleReference": "RULE 12A, SECTION VII, RULE 3, SECTION IV",
    "casebookReference": "Case 63"
  },
  {
    "id": "casebook-2025-064",
    "case_number": 64,
    "casebook_category": "COACHES",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 3, SECTION IV"
    ],
    "question_text": "During timeouts, what restrictions are on Coaches, Players and Team Personnel as to where they may position themselves on the court?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "Coaches, Players and Team Personnel may position themselves anywhere on their half of the court on the bench side of center court.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "COACHES",
    "scenario": "",
    "question": "During timeouts, what restrictions are on Coaches, Players and Team Personnel as to where they may position themselves on the court?",
    "correctAnswer": "a",
    "ruling": "Coaches, Players and Team Personnel may position themselves anywhere on their half of the court on the bench side of center court.",
    "ruleReference": "RULE 3, SECTION IV",
    "casebookReference": "Case 64"
  },
  {
    "id": "casebook-2025-065",
    "case_number": 65,
    "casebook_category": "CONTINUATION OF PLAY",
    "parent_category": "continuation-shooting-motion",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI"
    ],
    "question_text": "Player A1 is fouled in the act of shooting and the ball becomes loose. Player A1 is able to continue his shooting motion after being fouled and the basket is successful. Should 2 points be scored?",
    "options": {
      "A": "Two free throws; basket does not count due to foul timing",
      "B": "Basket counts plus one free throw (and-one opportunity)",
      "C": "Non-shooting foul; free throws only if team in bonus",
      "D": "No free throws; foul occurred after shot was released",
      "a": "Two free throws; basket does not count due to foul timing",
      "b": "Basket counts plus one free throw (and-one opportunity)",
      "c": "Non-shooting foul; free throws only if team in bonus",
      "d": "No free throws; foul occurred after shot was released"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Basket was made during continuous shooting motion",
      "C": "Foul was during shooting motion; shooting foul rules apply",
      "D": "Foul during motion means and-one opportunity"
    },
    "category": "CONTINUATION OF PLAY",
    "scenario": "",
    "question": "Player A1 is fouled in the act of shooting and the ball becomes loose. Player A1 is able to continue his shooting motion after being fouled and the basket is successful. Should 2 points be scored?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 4, SECTION XI",
    "casebookReference": "Case 65"
  },
  {
    "id": "casebook-2025-066",
    "case_number": 66,
    "casebook_category": "CONTINUATION OF PLAY",
    "parent_category": "continuation-shooting-motion",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI"
    ],
    "question_text": "Player A1 attempts a field goal and is fouled after the ball has been released. The foul occurs with Player A1 still in the air and/or not having regained a normal position. Is Player A1 still considered in the act of shooting?",
    "options": {
      "A": "Shooting foul; free throws awarded to fouled player",
      "B": "Non-shooting foul; standard team foul penalty applies",
      "C": "Continuation; basket counts plus one free throw",
      "D": "No foul; contact was incidental during the shot",
      "a": "Shooting foul; free throws awarded to fouled player",
      "b": "Non-shooting foul; standard team foul penalty applies",
      "c": "Continuation; basket counts plus one free throw",
      "d": "No foul; contact was incidental during the shot"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Foul occurred before upward shooting motion",
      "C": "No basket was made on this play",
      "D": "Contact was significant enough to constitute foul"
    },
    "category": "CONTINUATION OF PLAY",
    "scenario": "",
    "question": "Player A1 attempts a field goal and is fouled after the ball has been released. The foul occurs with Player A1 still in the air and/or not having regained a normal position. Is Player A1 still considered in the act of shooting?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 4, SECTION XI",
    "casebookReference": "Case 66"
  },
  {
    "id": "casebook-2025-067",
    "case_number": 67,
    "casebook_category": "CONTINUATION OF PLAY",
    "parent_category": "continuation-shooting-motion",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI"
    ],
    "question_text": "Player A1 is fouled just as he ended his dribble and gathered the ball on his drive to the basket. If he continues his shooting motion and scores a successful basket, how many free throws are awarded?",
    "options": {
      "A": "Two free throws; basket does not count due to foul timing",
      "B": "Basket counts plus one free throw (and-one opportunity)",
      "C": "Non-shooting foul; free throws only if team in bonus",
      "D": "No free throws; foul occurred after shot was released",
      "a": "Two free throws; basket does not count due to foul timing",
      "b": "Basket counts plus one free throw (and-one opportunity)",
      "c": "Non-shooting foul; free throws only if team in bonus",
      "d": "No free throws; foul occurred after shot was released"
    },
    "correct_answer": "B",
    "explanation": "Since the player\u2019s shooting motion continued and he was fouled after gathering the ball on his drive to the basket, the basket shall count and Player A1 will receive one free throw attempt.",
    "distractor_rationale": {
      "A": "Basket was made during continuous shooting motion",
      "C": "Foul was during shooting motion; shooting foul rules apply",
      "D": "Foul during motion means and-one opportunity"
    },
    "category": "CONTINUATION OF PLAY",
    "scenario": "",
    "question": "Player A1 is fouled just as he ended his dribble and gathered the ball on his drive to the basket. If he continues his shooting motion and scores a successful basket, how many free throws are awarded?",
    "correctAnswer": "b",
    "ruling": "Since the player\u2019s shooting motion continued and he was fouled after gathering the ball on his drive to the basket, the basket shall count and Player A1 will receive one free throw attempt.",
    "ruleReference": "RULE 4, SECTION XI",
    "casebookReference": "Case 67"
  },
  {
    "id": "casebook-2025-068",
    "case_number": 68,
    "casebook_category": "CONTINUATION OF PLAY",
    "parent_category": "continuation-shooting-motion",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI"
    ],
    "question_text": "Player A1 gathers the ball on a drive to the basket and defender B1 grabs him in a manner which does not allow him to release his field goal attempt. How many free throws are awarded?",
    "options": {
      "A": "Shooting foul; free throws awarded to fouled player",
      "B": "Non-shooting foul; standard team foul penalty applies",
      "C": "Continuation; basket counts plus one free throw",
      "D": "No foul; contact was incidental during the shot",
      "a": "Shooting foul; free throws awarded to fouled player",
      "b": "Non-shooting foul; standard team foul penalty applies",
      "c": "Continuation; basket counts plus one free throw",
      "d": "No foul; contact was incidental during the shot"
    },
    "correct_answer": "B",
    "explanation": "Two. Player A1 does not have to release the ball to be given continuation. As long as he continues his shooting motion throughout the sequence he is considered a shooter.",
    "distractor_rationale": {
      "A": "Foul occurred before upward shooting motion",
      "C": "No basket was made on this play",
      "D": "Contact was significant enough to constitute foul"
    },
    "category": "CONTINUATION OF PLAY",
    "scenario": "",
    "question": "Player A1 gathers the ball on a drive to the basket and defender B1 grabs him in a manner which does not allow him to release his field goal attempt. How many free throws are awarded?",
    "correctAnswer": "b",
    "ruling": "Two. Player A1 does not have to release the ball to be given continuation. As long as he continues his shooting motion throughout the sequence he is considered a shooter.",
    "ruleReference": "RULE 4, SECTION XI",
    "casebookReference": "Case 68"
  },
  {
    "id": "casebook-2025-069",
    "case_number": 69,
    "casebook_category": "CONTINUATION OF PLAY",
    "parent_category": "continuation-shooting-motion",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI"
    ],
    "question_text": "Player A1 gathers the ball on a drive to the basket and defender B1 pushes him in the back which causes Player A1 to take 3 steps prior to scoring a successful basket. How many free throws are awarded?",
    "options": {
      "A": "Non-shooting foul; team foul penalty rules apply",
      "B": "Shooting foul; two free throws for unsuccessful attempt",
      "C": "One free throw only; player was fouled on gather",
      "D": "No free throws; foul was before shooting motion began",
      "a": "Non-shooting foul; team foul penalty rules apply",
      "b": "Shooting foul; two free throws for unsuccessful attempt",
      "c": "One free throw only; player was fouled on gather",
      "d": "No free throws; foul was before shooting motion began"
    },
    "correct_answer": "B",
    "explanation": "Two. The basket cannot be scored as Player A1 committed a traveling violation. However, since he was fouled in the act of shooting, he will receive two free throws.",
    "distractor_rationale": {
      "A": "Foul occurred during continuous shooting motion",
      "C": "Two FTs for missed shot during shooting motion",
      "D": "Upward shooting motion had commenced"
    },
    "category": "CONTINUATION OF PLAY",
    "scenario": "",
    "question": "Player A1 gathers the ball on a drive to the basket and defender B1 pushes him in the back which causes Player A1 to take 3 steps prior to scoring a successful basket. How many free throws are awarded?",
    "correctAnswer": "b",
    "ruling": "Two. The basket cannot be scored as Player A1 committed a traveling violation. However, since he was fouled in the act of shooting, he will receive two free throws.",
    "ruleReference": "RULE 4, SECTION XI",
    "casebookReference": "Case 69"
  },
  {
    "id": "casebook-2025-070",
    "case_number": 70,
    "casebook_category": "CONTINUATION OF PLAY",
    "parent_category": "continuation-shooting-motion",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI"
    ],
    "question_text": "Defensive Player B1 is injured on the court as Player A2 advances the ball in the backcourt. Player B2 is told to foul his man and just prior to illegal contact, Player A2 gathers the ball. Following the foul Player A2 takes 2 steps and shoots the ball from the backcourt. Should three free throws be awarded if the shot is unsuccessful?",
    "options": {
      "A": "Shooting foul; free throws awarded to fouled player",
      "B": "Non-shooting foul; standard team foul penalty applies",
      "C": "Continuation; basket counts plus one free throw",
      "D": "No foul; contact was incidental during the shot",
      "a": "Shooting foul; free throws awarded to fouled player",
      "b": "Non-shooting foul; standard team foul penalty applies",
      "c": "Continuation; basket counts plus one free throw",
      "d": "No foul; contact was incidental during the shot"
    },
    "correct_answer": "B",
    "explanation": "",
    "distractor_rationale": {
      "A": "Foul occurred before upward shooting motion",
      "C": "No basket was made on this play",
      "D": "Contact was significant enough to constitute foul"
    },
    "category": "CONTINUATION OF PLAY",
    "scenario": "",
    "question": "Defensive Player B1 is injured on the court as Player A2 advances the ball in the backcourt. Player B2 is told to foul his man and just prior to illegal contact, Player A2 gathers the ball. Following the foul Player A2 takes 2 steps and shoots the ball from the backcourt. Should three free throws be awarded if the shot is unsuccessful?",
    "correctAnswer": "b",
    "ruling": "False. On any shot which is not considered a drive to the basket, the offensive player must be in his upward motion to shoot when the contact occurs to be awarded a shooting foul. (EXCEPTION – if the clocks are about to expire, the shooting motion starts on the gather.)",
    "ruleReference": "RULE 4, SECTION XI",
    "casebookReference": "Case 70"
  },
  {
    "id": "casebook-2025-071",
    "case_number": 71,
    "casebook_category": "CONTINUATION OF PLAY",
    "parent_category": "continuation-shooting-motion",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI"
    ],
    "question_text": "Defensive Player B1 has his arm extended forward while guarding Player A1 on the perimeter. Player A1 \u201crips-through\u201d the extended arm and continues to shoot a jump shot. Is this continuation?",
    "options": {
      "A": "Shooting foul; free throws awarded to fouled player",
      "B": "Non-shooting foul; standard team foul penalty applies",
      "C": "Continuation; basket counts plus one free throw",
      "D": "No foul; contact was incidental during the shot",
      "a": "Shooting foul; free throws awarded to fouled player",
      "b": "Non-shooting foul; standard team foul penalty applies",
      "c": "Continuation; basket counts plus one free throw",
      "d": "No foul; contact was incidental during the shot"
    },
    "correct_answer": "B",
    "explanation": "If Player A1 initiates contact with Player B1 by \u201cripping-through\u201d Player B1\u2019s extended arm from side-to-side, a defensive foul will be assessed, but Player A1 will not be considered in the act of.",
    "distractor_rationale": {
      "A": "Foul occurred before upward shooting motion",
      "C": "No basket was made on this play",
      "D": "Contact was significant enough to constitute foul"
    },
    "category": "CONTINUATION OF PLAY",
    "scenario": "",
    "question": "Defensive Player B1 has his arm extended forward while guarding Player A1 on the perimeter. Player A1 \u201crips-through\u201d the extended arm and continues to shoot a jump shot. Is this continuation?",
    "correctAnswer": "b",
    "ruling": "If Player A1 initiates contact with Player B1 by \u201cripping-through\u201d Player B1\u2019s extended arm from side-to-side, a defensive foul will be assessed, but Player A1 will not be considered in the act of.",
    "ruleReference": "RULE 4, SECTION XI",
    "casebookReference": "Case 71"
  },
  {
    "id": "casebook-2025-072",
    "case_number": 72,
    "casebook_category": "CONTINUATION OF PLAY",
    "parent_category": "continuation-shooting-motion",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI"
    ],
    "question_text": "Defensive Player B1 has his arm extended to his side while guarding Player A1 on the perimeter. In an attempt to draw a shooting foul, Player A1 lunges away from the basket and extends his shooting arm up and under the defender\u2019s arm and then shoots the ball towards the basket. Is this a shooting foul?",
    "options": {
      "A": "Shooting foul; free throws awarded to fouled player",
      "B": "Non-shooting foul; standard team foul penalty applies",
      "C": "Continuation; basket counts plus one free throw",
      "D": "No foul; contact was incidental during the shot",
      "a": "Shooting foul; free throws awarded to fouled player",
      "b": "Non-shooting foul; standard team foul penalty applies",
      "c": "Continuation; basket counts plus one free throw",
      "d": "No foul; contact was incidental during the shot"
    },
    "correct_answer": "B",
    "explanation": "This action will be deemed a no-call if Player B1 is outside the lower defensive box and has his arm extended to his side, and Player A1 initiates contact with Player B1 by abruptly swinging his.",
    "distractor_rationale": {
      "A": "Foul occurred before upward shooting motion",
      "C": "No basket was made on this play",
      "D": "Contact was significant enough to constitute foul"
    },
    "category": "CONTINUATION OF PLAY",
    "scenario": "",
    "question": "Defensive Player B1 has his arm extended to his side while guarding Player A1 on the perimeter. In an attempt to draw a shooting foul, Player A1 lunges away from the basket and extends his shooting arm up and under the defender\u2019s arm and then shoots the ball towards the basket. Is this a shooting foul?",
    "correctAnswer": "b",
    "ruling": "This action will be deemed a no-call if Player B1 is outside the lower defensive box and has his arm extended to his side, and Player A1 initiates contact with Player B1 by abruptly swinging his.",
    "ruleReference": "RULE 4, SECTION XI",
    "casebookReference": "Case 72"
  },
  {
    "id": "casebook-2025-073",
    "case_number": 73,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "The teams line up improperly to begin the game. Team A scores two points and six seconds have elapsed from the game clock. At this point, the officials recognize the error. How is this administered?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "Since the error is recognized with 24 seconds or less having elapsed, all points and statistics are erased except unsportsmanlike acts and all flagrant fouls and points scored there-from and the game.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "The teams line up improperly to begin the game. Team A scores two points and six seconds have elapsed from the game clock. At this point, the officials recognize the error. How is this administered?",
    "correctAnswer": "b",
    "ruling": "Since the error is recognized with 24 seconds or less having elapsed, all points and statistics are erased except unsportsmanlike acts and all flagrant fouls and points scored there-from and the game.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 73"
  },
  {
    "id": "casebook-2025-074",
    "case_number": 74,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "The game ends tied, 105-105. Prior to the beginning of the overtime, it is brought to the attention of the officials that Team A had requested and received an excessive timeout in the fourth period. How is this handled?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "An overtime period will be played. Any error not discovered prior to the end of the fourth period cannot be penalized.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "The game ends tied, 105-105. Prior to the beginning of the overtime, it is brought to the attention of the officials that Team A had requested and received an excessive timeout in the fourth period. How is this handled?",
    "correctAnswer": "b",
    "ruling": "An overtime period will be played. Any error not discovered prior to the end of the fourth period cannot be penalized.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 74"
  },
  {
    "id": "casebook-2025-075",
    "case_number": 75,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "Player A1 is fouled and the officials are notified that Team B has committed five team fouls in the period. Player A1\u2019s first free throw attempt is successful and the second free throw attempt is unsuccessful. However, Player A3 scores a field goal on the rebound of the second free throw attempt. After 24 seconds have elapsed, the officials are notified that the team foul information given was incorrect and no free throw attempts should have been awarded. How is this play administered?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "The point scored on the successful free throw attempt is deleted and the points scored on the successful field goal by Player A3 remain.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "Player A1 is fouled and the officials are notified that Team B has committed five team fouls in the period. Player A1\u2019s first free throw attempt is successful and the second free throw attempt is unsuccessful. However, Player A3 scores a field goal on the rebound of the second free throw attempt. After 24 seconds have elapsed, the officials are notified that the team foul information given was incorrect and no free throw attempts should have been awarded. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "The point scored on the successful free throw attempt is deleted and the points scored on the successful field goal by Player A3 remain.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 75"
  },
  {
    "id": "casebook-2025-076",
    "case_number": 76,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 3, SECTION V",
      "RULE 2, SECTION VI"
    ],
    "question_text": "Player A2 commits a foul with :50.3 remaining in the fourth period. The coach of Team B believes that it is his sixth personal foul, but the official scorer states that he only has five personal fouls. With :20.7 remaining, Player B2 fouls Player A2 while attempting to block his shot. It is now discovered that Player A2 has committed six personal fouls. What is the ruling?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "Player A2 is removed from the game immediately.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "Player A2 commits a foul with :50.3 remaining in the fourth period. The coach of Team B believes that it is his sixth personal foul, but the official scorer states that he only has five personal fouls. With :20.7 remaining, Player B2 fouls Player A2 while attempting to block his shot. It is now discovered that Player A2 has committed six personal fouls. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Player A2 is removed from the game immediately.",
    "ruleReference": "RULE 9, SECTION II, RULE 3, SECTION V, RULE 2, SECTION VI",
    "casebookReference": "Case 76"
  },
  {
    "id": "casebook-2025-077",
    "case_number": 77,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "In the third period, offensive basket interference is called on Player A1 and the ball is awarded to Team B at the free throw line extended. The Public Address announcer notifies those in the arena of the infraction. In the closing seconds of the fourth period, it is discovered that the official scorer mistakenly awarded two points to Team A on that violation. What is the ruling?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "Two points are subtracted from Team A\u2019s total and play is resumed from the point of interruption.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "In the third period, offensive basket interference is called on Player A1 and the ball is awarded to Team B at the free throw line extended. The Public Address announcer notifies those in the arena of the infraction. In the closing seconds of the fourth period, it is discovered that the official scorer mistakenly awarded two points to Team A on that violation. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Two points are subtracted from Team A\u2019s total and play is resumed from the point of interruption.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 77"
  },
  {
    "id": "casebook-2025-078",
    "case_number": 78,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "What is the ruling if the officials are notified of the following between periods?",
    "options": {
      "A": "Error cannot be corrected; correction window has closed",
      "B": "Error is correctable; appropriate adjustments will be made",
      "C": "Jump ball to restart play after the error",
      "D": "Technical foul on scorer's table for the error",
      "a": "Error cannot be corrected; correction window has closed",
      "b": "Error is correctable; appropriate adjustments will be made",
      "c": "Jump ball to restart play after the error",
      "d": "Technical foul on scorer's table for the error"
    },
    "correct_answer": "B",
    "explanation": "(1) Team A attempted an unmerited free throw(s) which was successful.",
    "distractor_rationale": {
      "A": "Error was discovered within correction window",
      "C": "Correction procedure applies, not jump ball",
      "D": "No foul for scoring/timing errors"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "What is the ruling if the officials are notified of the following between periods?",
    "correctAnswer": "b",
    "ruling": "(1) Team A attempted an unmerited free throw(s) which was successful.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 78"
  },
  {
    "id": "casebook-2025-079",
    "case_number": 79,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "With 5:00 remaining in the third period and with Team B in possession of the ball, it is discovered that Player A1 did not shoot merited free throws that should have been awarded as the result of a common foul by Player B1 that occurred with 5:15 remaining in the third period. No points were scored by Team A during the 15-second period from the common foul by Player B1 and the discovery of the error. What is the ruling?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "Because the error is discovered before 24 seconds have elapsed (as measured by the game clock), the appropriate ruling is as follows: (i) the game clock shall be reset to the time the personal foul.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "With 5:00 remaining in the third period and with Team B in possession of the ball, it is discovered that Player A1 did not shoot merited free throws that should have been awarded as the result of a common foul by Player B1 that occurred with 5:15 remaining in the third period. No points were scored by Team A during the 15-second period from the common foul by Player B1 and the discovery of the error. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Because the error is discovered before 24 seconds have elapsed (as measured by the game clock), the appropriate ruling is as follows: (i) the game clock shall be reset to the time the personal foul.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 79"
  },
  {
    "id": "casebook-2025-080",
    "case_number": 80,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "Player B4 fouls Player A4 with :10.0 remaining in the first period. The scoring table incorrectly informs the officials that it is the first team foul in the last two minutes. Between periods, it is brought to the attention of the officials that a penalty situation existed. How is this handled?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "After the teams return to the floor, the clock will be reset to :10.0, all action which took place in the final 10 seconds will be deleted (except  for unsportsmanlike acts and all flagrant fouls and.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "Player B4 fouls Player A4 with :10.0 remaining in the first period. The scoring table incorrectly informs the officials that it is the first team foul in the last two minutes. Between periods, it is brought to the attention of the officials that a penalty situation existed. How is this handled?",
    "correctAnswer": "b",
    "ruling": "After the teams return to the floor, the clock will be reset to :10.0, all action which took place in the final 10 seconds will be deleted (except  for unsportsmanlike acts and all flagrant fouls and.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 80"
  },
  {
    "id": "casebook-2025-081",
    "case_number": 81,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "With 7:30 remaining in the second period, it is discovered that Team B was erroneously awarded the ball to start the period. How is the error corrected?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "If any throw-in begins with the wrong team being awarded possession, and the error is discovered: (1) after 24 seconds have elapsed, the error cannot be corrected.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "With 7:30 remaining in the second period, it is discovered that Team B was erroneously awarded the ball to start the period. How is the error corrected?",
    "correctAnswer": "b",
    "ruling": "If any throw-in begins with the wrong team being awarded possession, and the error is discovered: (1) after 24 seconds have elapsed, the error cannot be corrected.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 81"
  },
  {
    "id": "casebook-2025-082",
    "case_number": 82,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12B, SECTION IX",
      "RULE 2, SECTION VI"
    ],
    "question_text": "With :05.8 remaining in the first period, Player A1 is assessed a punching foul. The officials erroneously fail to eject Player A1, who then scores the last field goal of the period, following a throw-in violation by Team B. Between periods, it is brought to their attention that a rule has been set aside. What is the ruling?",
    "options": {
      "A": "Error cannot be corrected; correction window has closed",
      "B": "Error is correctable; appropriate adjustments will be made",
      "C": "Jump ball to restart play after the error",
      "D": "Technical foul on scorer's table for the error",
      "a": "Error cannot be corrected; correction window has closed",
      "b": "Error is correctable; appropriate adjustments will be made",
      "c": "Jump ball to restart play after the error",
      "d": "Technical foul on scorer's table for the error"
    },
    "correct_answer": "B",
    "explanation": "Failure of the officials, or of the scorer\u2019s table to notify the officials, to eject or disqualify a player is not a correctable error.",
    "distractor_rationale": {
      "A": "Error was discovered within correction window",
      "C": "Correction procedure applies, not jump ball",
      "D": "No foul for scoring/timing errors"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "With :05.8 remaining in the first period, Player A1 is assessed a punching foul. The officials erroneously fail to eject Player A1, who then scores the last field goal of the period, following a throw-in violation by Team B. Between periods, it is brought to their attention that a rule has been set aside. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Failure of the officials, or of the scorer\u2019s table to notify the officials, to eject or disqualify a player is not a correctable error.",
    "ruleReference": "RULE 12B, SECTION IX, RULE 2, SECTION VI",
    "casebookReference": "Case 82"
  },
  {
    "id": "casebook-2025-083",
    "case_number": 83,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "The Scorer\u2019s Table fails to notify the officials that Team A is in the penalty when a common foul occurs with 5:50 remaining in the period. The error is discovered with 2:30 remaining in the same period. How is the play administered?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "As soon as the ball is dead or Team A has possession and not on a fast break, the scorer\u2019s table shall notify the officials.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "The Scorer\u2019s Table fails to notify the officials that Team A is in the penalty when a common foul occurs with 5:50 remaining in the period. The error is discovered with 2:30 remaining in the same period. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "As soon as the ball is dead or Team A has possession and not on a fast break, the scorer\u2019s table shall notify the officials.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 83"
  },
  {
    "id": "casebook-2025-084",
    "case_number": 84,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "At 6:56 of the 3rd period, Player B1 flagrantly fouls Player A2 on a successful field goal. The officials incorrectly award Player A2 one free throw attempt which he misses. Team A inbounds the ball at the free throw line extended and Player B3 fouls Player A4 in the act of shooting at 6:35. It is then discovered that Player A2 should have received two free throw attempts to score one point because of the flagrant foul. How is the play administered?",
    "options": {
      "A": "Error must be corrected regardless of when discovered",
      "B": "Error cannot be corrected; play results stand as recorded",
      "C": "Instant replay review to correct the error",
      "D": "Coach's challenge required to correct error",
      "a": "Error must be corrected regardless of when discovered",
      "b": "Error cannot be corrected; play results stand as recorded",
      "c": "Instant replay review to correct the error",
      "d": "Coach's challenge required to correct error"
    },
    "correct_answer": "B",
    "explanation": "The fact that the error is from a free throw attempt that would not have remained in play, the 24 second exception does not apply.",
    "distractor_rationale": {
      "A": "Correction window has passed; error stands",
      "C": "This type of error isn't correctable via replay",
      "D": "Error is outside challenge/correction rules"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "At 6:56 of the 3rd period, Player B1 flagrantly fouls Player A2 on a successful field goal. The officials incorrectly award Player A2 one free throw attempt which he misses. Team A inbounds the ball at the free throw line extended and Player B3 fouls Player A4 in the act of shooting at 6:35. It is then discovered that Player A2 should have received two free throw attempts to score one point because of the flagrant foul. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "The fact that the error is from a free throw attempt that would not have remained in play, the 24 second exception does not apply.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 84"
  },
  {
    "id": "casebook-2025-085",
    "case_number": 85,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "The Scorer\u2019s Table fails to notify the officials that Team A is in the penalty with 4:42 left in the period when Player A1 is fouled. On the following possession, Player B1 flagrantly fouls Player A2 and he makes both free throws. At 4:20 the Scorer\u2019s Table notifies the officials that Player A1 should have shot the penalty when he was fouled at 4:42. How is the play administered?",
    "options": {
      "A": "Error cannot be corrected; correction window has closed",
      "B": "Error is correctable; appropriate adjustments will be made",
      "C": "Jump ball to restart play after the error",
      "D": "Technical foul on scorer's table for the error",
      "a": "Error cannot be corrected; correction window has closed",
      "b": "Error is correctable; appropriate adjustments will be made",
      "c": "Jump ball to restart play after the error",
      "d": "Technical foul on scorer's table for the error"
    },
    "correct_answer": "B",
    "explanation": "Since the correctable error was discovered within 24 seconds, the game clock is reset to 4:42 and Player A1 is given two free throw attempts.",
    "distractor_rationale": {
      "A": "Error was discovered within correction window",
      "C": "Correction procedure applies, not jump ball",
      "D": "No foul for scoring/timing errors"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "The Scorer\u2019s Table fails to notify the officials that Team A is in the penalty with 4:42 left in the period when Player A1 is fouled. On the following possession, Player B1 flagrantly fouls Player A2 and he makes both free throws. At 4:20 the Scorer\u2019s Table notifies the officials that Player A1 should have shot the penalty when he was fouled at 4:42. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "Since the correctable error was discovered within 24 seconds, the game clock is reset to 4:42 and Player A1 is given two free throw attempts.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 85"
  },
  {
    "id": "casebook-2025-086",
    "case_number": 86,
    "casebook_category": "CORRECTABLE ERRORS",
    "parent_category": "correctable-errors",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VI"
    ],
    "question_text": "Player A1 is injured on a play which is ruled a FF1 following instant replay review. As there was no field goal attempt, the official incorrectly awards only one free throw attempt and possession of the ball out-of-bounds. The infraction occurred at 15.3 in the first period but is not discovered until: (1) between the first and second period, or (2) halftime. May this error be corrected?",
    "options": {
      "A": "Error cannot be corrected; correction window has closed",
      "B": "Error is correctable; appropriate adjustments will be made",
      "C": "Jump ball to restart play after the error",
      "D": "Technical foul on scorer's table for the error",
      "a": "Error cannot be corrected; correction window has closed",
      "b": "Error is correctable; appropriate adjustments will be made",
      "c": "Jump ball to restart play after the error",
      "d": "Technical foul on scorer's table for the error"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): Yes.",
    "distractor_rationale": {
      "A": "Error was discovered within correction window",
      "C": "Correction procedure applies, not jump ball",
      "D": "No foul for scoring/timing errors"
    },
    "category": "CORRECTABLE ERRORS",
    "scenario": "",
    "question": "Player A1 is injured on a play which is ruled a FF1 following instant replay review. As there was no field goal attempt, the official incorrectly awards only one free throw attempt and possession of the ball out-of-bounds. The infraction occurred at 15.3 in the first period but is not discovered until: (1) between the first and second period, or (2) halftime. May this error be corrected?",
    "correctAnswer": "b",
    "ruling": "Situation (1): Yes.",
    "ruleReference": "RULE 2, SECTION VI",
    "casebookReference": "Case 86"
  },
  {
    "id": "casebook-2025-087",
    "case_number": 87,
    "casebook_category": "COURT DIMENSIONS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [],
    "question_text": "What are the proper measurements of the following?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "(1) Court size (2) Free throw circle radius (3) Height and width of the backboard (4) Inside diameter of the basket ring (5) Face of backboard to inside the basket ring (6) Height of the basket ring.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "COURT DIMENSIONS",
    "scenario": "",
    "question": "What are the proper measurements of the following?",
    "correctAnswer": "a",
    "ruling": "(1) Court size (2) Free throw circle radius (3) Height and width of the backboard (4) Inside diameter of the basket ring (5) Face of backboard to inside the basket ring (6) Height of the basket ring.",
    "ruleReference": "",
    "casebookReference": "Case 87"
  },
  {
    "id": "casebook-2025-088",
    "case_number": 88,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 12A, SECTION II"
    ],
    "question_text": "Team A has just scored a field goal or a free throw. As the ball is dropping to the floor, Player A2 bats the ball away. What is the correct ruling?",
    "options": {
      "A": "Technical foul assessed immediately for the conduct",
      "B": "Delay-of-game warning; technical foul on next violation",
      "C": "No penalty; action doesn't constitute delay of game",
      "D": "Personal foul for contact during the delay",
      "a": "Technical foul assessed immediately for the conduct",
      "b": "Delay-of-game warning; technical foul on next violation",
      "c": "No penalty; action doesn't constitute delay of game",
      "d": "Personal foul for contact during the delay"
    },
    "correct_answer": "B",
    "explanation": "The official will issue a delay-of-game warning and notify the official scorer.",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "Team A has just scored a field goal or a free throw. As the ball is dropping to the floor, Player A2 bats the ball away. What is the correct ruling?",
    "correctAnswer": "b",
    "ruling": "The official will issue a delay-of-game warning and notify the official scorer.",
    "ruleReference": "RULE 12A, SECTION II",
    "casebookReference": "Case 88"
  },
  {
    "id": "casebook-2025-089",
    "case_number": 89,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 12A, SECTION II"
    ],
    "question_text": "With :03.5 remaining in the fourth period and Team A leading 110-109, Team B has the ball out-of-bounds. Player A1, who is guarding the thrower-in, jumps up and down attempting to make it difficult for Player B1 to execute the throw-in. In so doing, he breaks the plane of the out-of-bounds line by landing out-of-bounds on several jumps. What is the ruling?",
    "options": {
      "A": "Warning only; this is first delay-of-game offense",
      "B": "Delay-of-game technical foul; one free throw awarded",
      "C": "Personal foul assessed for the contact",
      "D": "No violation; conduct was within rules",
      "a": "Warning only; this is first delay-of-game offense",
      "b": "Delay-of-game technical foul; one free throw awarded",
      "c": "Personal foul assessed for the contact",
      "d": "No violation; conduct was within rules"
    },
    "correct_answer": "B",
    "explanation": "A non-unsportsmanlike technical foul shall be called because the game is in the last two minutes of the fourth period.",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "With :03.5 remaining in the fourth period and Team A leading 110-109, Team B has the ball out-of-bounds. Player A1, who is guarding the thrower-in, jumps up and down attempting to make it difficult for Player B1 to execute the throw-in. In so doing, he breaks the plane of the out-of-bounds line by landing out-of-bounds on several jumps. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "A non-unsportsmanlike technical foul shall be called because the game is in the last two minutes of the fourth period.",
    "ruleReference": "RULE 12A, SECTION II",
    "casebookReference": "Case 89"
  },
  {
    "id": "casebook-2025-090",
    "case_number": 90,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 12A, SECTION II"
    ],
    "question_text": "Team A scores a field goal and Player B1 retrieves the ball near the sideline. He attempts to pass the ball to Player B2, who is out-of-bounds on the baseline, ready to throw the ball inbounds. Player A1 intercepts the ball. What is the ruling?",
    "options": {
      "A": "Technical foul assessed immediately for the conduct",
      "B": "Delay-of-game warning; technical foul on next violation",
      "C": "No penalty; action doesn't constitute delay of game",
      "D": "Personal foul for contact during the delay",
      "a": "Technical foul assessed immediately for the conduct",
      "b": "Delay-of-game warning; technical foul on next violation",
      "c": "No penalty; action doesn't constitute delay of game",
      "d": "Personal foul for contact during the delay"
    },
    "correct_answer": "B",
    "explanation": "The official will issue a delay-of-game warning on Team A and award the ball to Team B on the baseline, if he feels that Player A1\u2019s action was deliberate.",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "Team A scores a field goal and Player B1 retrieves the ball near the sideline. He attempts to pass the ball to Player B2, who is out-of-bounds on the baseline, ready to throw the ball inbounds. Player A1 intercepts the ball. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The official will issue a delay-of-game warning on Team A and award the ball to Team B on the baseline, if he feels that Player A1\u2019s action was deliberate.",
    "ruleReference": "RULE 12A, SECTION II",
    "casebookReference": "Case 90"
  },
  {
    "id": "casebook-2025-091",
    "case_number": 91,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 12A, SECTION II"
    ],
    "question_text": "At 4:33 of the first period, a throw-in by Team A is interrupted when Player B1 slaps the ball out of Player A1\u2019s hands. What is the ruling?",
    "options": {
      "A": "Technical foul assessed immediately for the conduct",
      "B": "Delay-of-game warning; technical foul on next violation",
      "C": "No penalty; action doesn't constitute delay of game",
      "D": "Personal foul for contact during the delay",
      "a": "Technical foul assessed immediately for the conduct",
      "b": "Delay-of-game warning; technical foul on next violation",
      "c": "No penalty; action doesn't constitute delay of game",
      "d": "Personal foul for contact during the delay"
    },
    "correct_answer": "B",
    "explanation": "The official will issue a delay-of-game warning to Team B and award the ball to Team A at the same spot.",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "At 4:33 of the first period, a throw-in by Team A is interrupted when Player B1 slaps the ball out of Player A1\u2019s hands. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The official will issue a delay-of-game warning to Team B and award the ball to Team A at the same spot.",
    "ruleReference": "RULE 12A, SECTION II",
    "casebookReference": "Case 91"
  },
  {
    "id": "casebook-2025-092",
    "case_number": 92,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 12A, SECTION II"
    ],
    "question_text": "A traveling violation is called on Player A1. Player A1 throws the ball to the official at the other end of the floor, instead of the official administering the throwin. What is the ruling?",
    "options": {
      "A": "Technical foul assessed immediately for the conduct",
      "B": "Delay-of-game warning; technical foul on next violation",
      "C": "No penalty; action doesn't constitute delay of game",
      "D": "Personal foul for contact during the delay",
      "a": "Technical foul assessed immediately for the conduct",
      "b": "Delay-of-game warning; technical foul on next violation",
      "c": "No penalty; action doesn't constitute delay of game",
      "d": "Personal foul for contact during the delay"
    },
    "correct_answer": "B",
    "explanation": "The official will issue a delay-of-game warning to Team A and could assess Player A1 with an unsportsmanlike technical foul, if he feels that the act was a deliberate attempt to express displeasure.",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "A traveling violation is called on Player A1. Player A1 throws the ball to the official at the other end of the floor, instead of the official administering the throwin. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The official will issue a delay-of-game warning to Team A and could assess Player A1 with an unsportsmanlike technical foul, if he feels that the act was a deliberate attempt to express displeasure.",
    "ruleReference": "RULE 12A, SECTION II",
    "casebookReference": "Case 92"
  },
  {
    "id": "casebook-2025-093",
    "case_number": 93,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 4, SECTION XII",
      "RULE 8, SECTION III"
    ],
    "question_text": "Following a successful field goal attempt, Player B1 attempts a throw-in but fails to step out-of-bounds. Is this a delay-of-game?",
    "options": {
      "A": "Warning only; this is first delay-of-game offense",
      "B": "Delay-of-game technical foul; one free throw awarded",
      "C": "Personal foul assessed for the contact",
      "D": "No violation; conduct was within rules",
      "a": "Warning only; this is first delay-of-game offense",
      "b": "Delay-of-game technical foul; one free throw awarded",
      "c": "Personal foul assessed for the contact",
      "d": "No violation; conduct was within rules"
    },
    "correct_answer": "B",
    "explanation": "No. Team A is awarded the ball at the spot of the attempted throwin. Player B1 is responsible for proper administration of the throw-in within five seconds.",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "Following a successful field goal attempt, Player B1 attempts a throw-in but fails to step out-of-bounds. Is this a delay-of-game?",
    "correctAnswer": "b",
    "ruling": "No. Team A is awarded the ball at the spot of the attempted throwin. Player B1 is responsible for proper administration of the throw-in within five seconds.",
    "ruleReference": "RULE 4, SECTION XII, RULE 8, SECTION III",
    "casebookReference": "Case 93"
  },
  {
    "id": "casebook-2025-094",
    "case_number": 94,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 12A, SECTION II",
      "RULE 8, SECTION II",
      "RULE 7, SECTION IV"
    ],
    "question_text": "A bad pass from Player A1 to Player A2 is grabbed by the coach of Team B on the sideline. It is determined by the official that Player A2 could have saved the ball from going out-of-bounds, but was denied that opportunity by action of the coach. There are less than 14 seconds on the shot clock when this occurs. What is the ruling?",
    "options": {
      "A": "Technical foul assessed immediately for the conduct",
      "B": "Delay-of-game warning; technical foul on next violation",
      "C": "No penalty; action doesn't constitute delay of game",
      "D": "Personal foul for contact during the delay",
      "a": "Technical foul assessed immediately for the conduct",
      "b": "Delay-of-game warning; technical foul on next violation",
      "c": "No penalty; action doesn't constitute delay of game",
      "d": "Personal foul for contact during the delay"
    },
    "correct_answer": "B",
    "explanation": "A delay-of-game warning is issued to Team B and ball is awarded to Team A on the sideline nearest the spot of the violation.",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "A bad pass from Player A1 to Player A2 is grabbed by the coach of Team B on the sideline. It is determined by the official that Player A2 could have saved the ball from going out-of-bounds, but was denied that opportunity by action of the coach. There are less than 14 seconds on the shot clock when this occurs. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "A delay-of-game warning is issued to Team B and ball is awarded to Team A on the sideline nearest the spot of the violation.",
    "ruleReference": "RULE 12A, SECTION II, RULE 8, SECTION II, RULE 7, SECTION IV",
    "casebookReference": "Case 94"
  },
  {
    "id": "casebook-2025-095",
    "case_number": 95,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [],
    "question_text": "Following a successful field goal by Team B, Player A1\u2019s backcourt pass to Player A2 is touched by Player B6 who is seated on Team B\u2019s bench. There are 18 seconds remaining on the shot clock. It is the opinion of the officials that Player A2 could have saved the errant pass. What is the ruling?",
    "options": {
      "A": "Technical foul assessed immediately for the conduct",
      "B": "Delay-of-game warning; technical foul on next violation",
      "C": "No penalty; action doesn't constitute delay of game",
      "D": "Personal foul for contact during the delay",
      "a": "Technical foul assessed immediately for the conduct",
      "b": "Delay-of-game warning; technical foul on next violation",
      "c": "No penalty; action doesn't constitute delay of game",
      "d": "Personal foul for contact during the delay"
    },
    "correct_answer": "B",
    "explanation": "A delay-of-game warning is issued to Team B if the ball had crossed over the boundary line when it was interfered with by Player B6.",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "Following a successful field goal by Team B, Player A1\u2019s backcourt pass to Player A2 is touched by Player B6 who is seated on Team B\u2019s bench. There are 18 seconds remaining on the shot clock. It is the opinion of the officials that Player A2 could have saved the errant pass. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "A delay-of-game warning is issued to Team B if the ball had crossed over the boundary line when it was interfered with by Player B6.",
    "ruleReference": "",
    "casebookReference": "Case 95"
  },
  {
    "id": "casebook-2025-096",
    "case_number": 96,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [],
    "question_text": "Player A1 fumbles a pass near the sideline at the bench of Team B. The ball crosses the plane of the sideline and touches the coach of Team B who is standing on the sideline. Player A1 would have been able to recover the ball, if it had not been touched. What is the correct ruling?",
    "options": {
      "A": "Warning only; this is first delay-of-game offense",
      "B": "Delay-of-game technical foul; one free throw awarded",
      "C": "Personal foul assessed for the contact",
      "D": "No violation; conduct was within rules",
      "a": "Warning only; this is first delay-of-game offense",
      "b": "Delay-of-game technical foul; one free throw awarded",
      "c": "Personal foul assessed for the contact",
      "d": "No violation; conduct was within rules"
    },
    "correct_answer": "B",
    "explanation": "",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "Player A1 fumbles a pass near the sideline at the bench of Team B. The ball crosses the plane of the sideline and touches the coach of Team B who is standing on the sideline. Player A1 would have been able to recover the ball, if it had not been touched. What is the correct ruling?",
    "correctAnswer": "b",
    "ruling": "A delay-of-game shall be issued to Team B. Team A is awarded the ball out-of-bounds on the sideline nearest the spot of the violation. A coach not seated on the bench has a responsibility not to interfere with a live ball.",
    "ruleReference": "",
    "casebookReference": "Case 96"
  },
  {
    "id": "casebook-2025-097",
    "case_number": 97,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [],
    "question_text": "Player A6 is at the scorer\u2019s table and the timer sounds the horn for him to enter the game. At this time the beckoning official observes the player\u2019s shirt is not tucked in. What is the ruling?",
    "options": {
      "A": "Warning only; this is first delay-of-game offense",
      "B": "Delay-of-game technical foul; one free throw awarded",
      "C": "Personal foul assessed for the contact",
      "D": "No violation; conduct was within rules",
      "a": "Warning only; this is first delay-of-game offense",
      "b": "Delay-of-game technical foul; one free throw awarded",
      "c": "Personal foul assessed for the contact",
      "d": "No violation; conduct was within rules"
    },
    "correct_answer": "B",
    "explanation": "Team A is assessed a delay-of-game whenever a substitute is beckoned from the scorer\u2019s table and his shirt is not tucked into his shorts. RULE 12A - SECTION II (a)(9)",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "Player A6 is at the scorer\u2019s table and the timer sounds the horn for him to enter the game. At this time the beckoning official observes the player\u2019s shirt is not tucked in. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Team A is assessed a delay-of-game whenever a substitute is beckoned from the scorer\u2019s table and his shirt is not tucked into his shorts. RULE 12A - SECTION II (a)(9)",
    "ruleReference": "",
    "casebookReference": "Case 97"
  },
  {
    "id": "casebook-2025-098",
    "case_number": 98,
    "casebook_category": "DELAY-OF-GAME",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 12A, SECTION II"
    ],
    "question_text": "Between his 1st and 2nd free throw attempt, Player A1 walks to the midcourt line. Is there a penalty?",
    "options": {
      "A": "Warning only; this is first delay-of-game offense",
      "B": "Delay-of-game technical foul; one free throw awarded",
      "C": "Personal foul assessed for the contact",
      "D": "No violation; conduct was within rules",
      "a": "Warning only; this is first delay-of-game offense",
      "b": "Delay-of-game technical foul; one free throw awarded",
      "c": "Personal foul assessed for the contact",
      "d": "No violation; conduct was within rules"
    },
    "correct_answer": "B",
    "explanation": "Yes. A delay-of-game shall be assessed if a free throw shooter ventures fully beyond the 3-point line between free throw attempts.",
    "distractor_rationale": {
      "A": "This is repeat offense or conduct warrants immediate tech",
      "C": "This is a delay violation, not a contact foul",
      "D": "Conduct clearly violated delay-of-game rules"
    },
    "category": "DELAY-OF-GAME",
    "scenario": "",
    "question": "Between his 1st and 2nd free throw attempt, Player A1 walks to the midcourt line. Is there a penalty?",
    "correctAnswer": "b",
    "ruling": "Yes. A delay-of-game shall be assessed if a free throw shooter ventures fully beyond the 3-point line between free throw attempts.",
    "ruleReference": "RULE 12A, SECTION II",
    "casebookReference": "Case 98"
  },
  {
    "id": "casebook-2025-099",
    "case_number": 99,
    "casebook_category": "DISAGREEMENT BY OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12B, SECTION VI",
      "RULE 6, SECTION V"
    ],
    "question_text": "Officials disagree on a block/charge situation not involving the restricted area, with one official immediately signaling a blocking foul on Player B1, while the other official is signaling an offensive foul on Player A1. How is this play administered?",
    "options": {
      "A": "Jump ball violation on one of the participants",
      "B": "Legal jump ball procedure was followed correctly",
      "C": "Re-toss required; ball wasn't tossed properly",
      "D": "Technical foul for improper jump ball conduct",
      "a": "Jump ball violation on one of the participants",
      "b": "Legal jump ball procedure was followed correctly",
      "c": "Re-toss required; ball wasn't tossed properly",
      "d": "Technical foul for improper jump ball conduct"
    },
    "correct_answer": "B",
    "explanation": "A personal foul is assessed both players and play is resumed with a jump ball at the center circle between any two opposing players in the game.",
    "distractor_rationale": {
      "A": "No violation occurred during the jump",
      "C": "Jump ball was properly executed",
      "D": "No unsportsmanlike conduct occurred"
    },
    "category": "DISAGREEMENT BY OFFICIALS",
    "scenario": "",
    "question": "Officials disagree on a block/charge situation not involving the restricted area, with one official immediately signaling a blocking foul on Player B1, while the other official is signaling an offensive foul on Player A1. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "A personal foul is assessed both players and play is resumed with a jump ball at the center circle between any two opposing players in the game.",
    "ruleReference": "RULE 12B, SECTION VI, RULE 6, SECTION V",
    "casebookReference": "Case 99"
  },
  {
    "id": "casebook-2025-100",
    "case_number": 100,
    "casebook_category": "DISCONCERTION OF FREE THROW SHOOTER",
    "parent_category": "free-throws",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "Player A1 is attempting a free throw which is to be followed by another free throw. Player B1: (1) raises his arms above his head while positioned on the lane line, or (2) makes a sudden dash upcourt while within the visual field of Player A1, or (3) waves his arms, or (4) yells to a teammate, or (5) talks in a loud manner, or (6) enters the lane and continues to move. Has Player B1 disconcerted the free throw shooter in these situations?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "DISCONCERTION OF FREE THROW SHOOTER",
    "scenario": "",
    "question": "Player A1 is attempting a free throw which is to be followed by another free throw. Player B1: (1) raises his arms above his head while positioned on the lane line, or (2) makes a sudden dash upcourt while within the visual field of Player A1, or (3) waves his arms, or (4) yells to a teammate, or (5) talks in a loud manner, or (6) enters the lane and continues to move. Has Player B1 disconcerted the free throw shooter in these situations?",
    "correctAnswer": "a",
    "ruling": "In Situations (1) through (6) above, Player B1 has disconcerted the free throw shooter. The violation is penalized by awarding a substitute free throw only if the attempt is unsuccessful. Further, during games, players must remain seated on the bench while the ball is live, except (a) to spontaneously react to a notable play, or (b) to approach the scorer's table to report into the game. Players not in the game may not remain standing at or away from their team's bench during game action.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 100"
  },
  {
    "id": "casebook-2025-101",
    "case_number": 101,
    "casebook_category": "DISCONCERTION OF FREE THROW SHOOTER",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "Player A1 is attempting a free throw following a successful field goal. During the attempt, Player B2 violates the free throw lane. Player A1\u2019s free throw attempt does not touch the rim. What is the ruling?",
    "options": {
      "A": "Free throw counts; violation occurred after release",
      "B": "Free throw doesn't count; offensive lane violation",
      "C": "Re-shoot the free throw after the violation",
      "D": "Technical foul on the shooter for violation",
      "a": "Free throw counts; violation occurred after release",
      "b": "Free throw doesn't count; offensive lane violation",
      "c": "Re-shoot the free throw after the violation",
      "d": "Technical foul on the shooter for violation"
    },
    "correct_answer": "B",
    "explanation": "This is a double violation.",
    "distractor_rationale": {
      "A": "Offensive violations void the free throw attempt",
      "C": "No re-shoot; ball goes to opponent",
      "D": "Lane violations are not technical fouls"
    },
    "category": "DISCONCERTION OF FREE THROW SHOOTER",
    "scenario": "",
    "question": "Player A1 is attempting a free throw following a successful field goal. During the attempt, Player B2 violates the free throw lane. Player A1\u2019s free throw attempt does not touch the rim. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "This is a double violation.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 101"
  },
  {
    "id": "casebook-2025-102",
    "case_number": 102,
    "casebook_category": "DISCONCERTION OF FREE THROW SHOOTER",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "Player A1 is attempting a free throw. Player B6, who is on Team B\u2019s bench, jumps up and down and yells in an attempt to upset Player A1. How is this handled?",
    "options": {
      "A": "Free throw counts; violation occurred after release",
      "B": "Free throw doesn't count; offensive lane violation",
      "C": "Re-shoot the free throw after the violation",
      "D": "Technical foul on the shooter for violation",
      "a": "Free throw counts; violation occurred after release",
      "b": "Free throw doesn't count; offensive lane violation",
      "c": "Re-shoot the free throw after the violation",
      "d": "Technical foul on the shooter for violation"
    },
    "correct_answer": "B",
    "explanation": "This is not a disconcerting the shooter violation because the player was not in the game.",
    "distractor_rationale": {
      "A": "Offensive violations void the free throw attempt",
      "C": "No re-shoot; ball goes to opponent",
      "D": "Lane violations are not technical fouls"
    },
    "category": "DISCONCERTION OF FREE THROW SHOOTER",
    "scenario": "",
    "question": "Player A1 is attempting a free throw. Player B6, who is on Team B\u2019s bench, jumps up and down and yells in an attempt to upset Player A1. How is this handled?",
    "correctAnswer": "b",
    "ruling": "This is not a disconcerting the shooter violation because the player was not in the game.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 102"
  },
  {
    "id": "casebook-2025-103",
    "case_number": 103,
    "casebook_category": "DOUBLE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VI"
    ],
    "question_text": "A double foul is called on Players A1 and B1, while Player A2 is dribbling the ball in the backcourt. What is the ruling?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "A personal foul is charged to Player A1 and Player B1.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "DOUBLE FOULS",
    "scenario": "",
    "question": "A double foul is called on Players A1 and B1, while Player A2 is dribbling the ball in the backcourt. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "A personal foul is charged to Player A1 and Player B1.",
    "ruleReference": "RULE 12B, SECTION VI",
    "casebookReference": "Case 103"
  },
  {
    "id": "casebook-2025-104",
    "case_number": 104,
    "casebook_category": "DOUBLE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VI",
      "RULE 7, SECTION IV",
      "RULE 6, SECTION V"
    ],
    "question_text": "While Player A1\u2019s unsuccessful field goal is in the air, a double foul is called on Players A2 and B2. What is the correct procedure?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "A personal foul is charged to Player A2 and Player B2.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "DOUBLE FOULS",
    "scenario": "",
    "question": "While Player A1\u2019s unsuccessful field goal is in the air, a double foul is called on Players A2 and B2. What is the correct procedure?",
    "correctAnswer": "a",
    "ruling": "A personal foul is charged to Player A2 and Player B2.",
    "ruleReference": "RULE 12B, SECTION VI, RULE 7, SECTION IV, RULE 6, SECTION V",
    "casebookReference": "Case 104"
  },
  {
    "id": "casebook-2025-105",
    "case_number": 105,
    "casebook_category": "DOUBLE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VI",
      "RULE 7, SECTION IV"
    ],
    "question_text": "Player A1 attempts a two-point field goal and, while the ball is in the air, Players A2 and B2 are called for a double foul. The field goal is successful. What is the ruling?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Award two points to Team A and charge a personal foul to Player A2 and Player B2.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "DOUBLE FOULS",
    "scenario": "",
    "question": "Player A1 attempts a two-point field goal and, while the ball is in the air, Players A2 and B2 are called for a double foul. The field goal is successful. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "Award two points to Team A and charge a personal foul to Player A2 and Player B2.",
    "ruleReference": "RULE 12B, SECTION VI, RULE 7, SECTION IV",
    "casebookReference": "Case 105"
  },
  {
    "id": "casebook-2025-106",
    "case_number": 106,
    "casebook_category": "DOUBLE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VI"
    ],
    "question_text": "While Player A1 is dribbling the ball near the 28\u2019 hash mark, the lead official calls an offensive foul on Player A2 in the post and simultaneously the slot official calls an impede on defensive Player B5 for not giving Player A5 the freedom to move. How is this handled?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Players A2 and B5 shall be charged with personal fouls but no team fouls will be charged.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "DOUBLE FOULS",
    "scenario": "",
    "question": "While Player A1 is dribbling the ball near the 28\u2019 hash mark, the lead official calls an offensive foul on Player A2 in the post and simultaneously the slot official calls an impede on defensive Player B5 for not giving Player A5 the freedom to move. How is this handled?",
    "correctAnswer": "a",
    "ruling": "Players A2 and B5 shall be charged with personal fouls but no team fouls will be charged.",
    "ruleReference": "RULE 12B, SECTION VI",
    "casebookReference": "Case 106"
  },
  {
    "id": "casebook-2025-107",
    "case_number": 107,
    "casebook_category": "DRIBBLING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "To start his dribble, Player A1: (1) throws the ball over his opponent\u2019s head, or (2) throws the ball a long distance out in front of him. In both (1) and (2) the ball touches the floor and he continues to dribble. Is this legal?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "Yes in both situations (1) and (2). Player A1 may not touch the ball before it touches the floor or he will be guilty of passing the ball to himself. RULE 4,SECTION II",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "DRIBBLING",
    "scenario": "",
    "question": "To start his dribble, Player A1: (1) throws the ball over his opponent\u2019s head, or (2) throws the ball a long distance out in front of him. In both (1) and (2) the ball touches the floor and he continues to dribble. Is this legal?",
    "correctAnswer": "b",
    "ruling": "Yes in both situations (1) and (2). Player A1 may not touch the ball before it touches the floor or he will be guilty of passing the ball to himself. RULE 4,SECTION II",
    "ruleReference": "",
    "casebookReference": "Case 107"
  },
  {
    "id": "casebook-2025-108",
    "case_number": 108,
    "casebook_category": "DRIBBLING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION II"
    ],
    "question_text": "When dribbling, Player A1 steps out-of-bounds but is not in contact with the ball. He then returns inbounds and continues his dribble. Is this legal or illegal?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "Illegal. Player A1 cannot be the first player to touch the ball after going out-of-bounds, until it is touched by another player on the court.",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "DRIBBLING",
    "scenario": "",
    "question": "When dribbling, Player A1 steps out-of-bounds but is not in contact with the ball. He then returns inbounds and continues his dribble. Is this legal or illegal?",
    "correctAnswer": "b",
    "ruling": "Illegal. Player A1 cannot be the first player to touch the ball after going out-of-bounds, until it is touched by another player on the court.",
    "ruleReference": "RULE 10, SECTION II",
    "casebookReference": "Case 108"
  },
  {
    "id": "casebook-2025-109",
    "case_number": 109,
    "casebook_category": "DRIBBLING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 10, SECTION XVI"
    ],
    "question_text": "Player A5 has his back to the basket below the free throw line extended and starts dribbling to back-down his defender. Should the official call a violation when Player A5 is still dribbling below the foul line extended on the count of 5?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "DRIBBLING",
    "scenario": "",
    "question": "Player A5 has his back to the basket below the free throw line extended and starts dribbling to back-down his defender. Should the official call a violation when Player A5 is still dribbling below the foul line extended on the count of 5?",
    "correctAnswer": "b",
    "ruling": "Yes. This is a 5-second back to the basket violation. The count ends when (1) the player picks up the ball, (2) dribbles above the free throw line extended or (3) a defensive player deflects the ball away. Should Player A5 turn and face the basket while still dribbling, he is no longer violating the rule.",
    "ruleReference": "RULE 10, SECTION XVI",
    "casebookReference": "Case 109"
  },
  {
    "id": "casebook-2025-110",
    "case_number": 110,
    "casebook_category": "DRIBBLING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION II"
    ],
    "question_text": "Player A1 who is holding the ball, touches the floor with the ball one or more times. Is this a violation?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "No. A player holding the ball can touch the ball to the floor without penalty.",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "DRIBBLING",
    "scenario": "",
    "question": "Player A1 who is holding the ball, touches the floor with the ball one or more times. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "No. A player holding the ball can touch the ball to the floor without penalty.",
    "ruleReference": "RULE 4, SECTION II",
    "casebookReference": "Case 110"
  },
  {
    "id": "casebook-2025-111",
    "case_number": 111,
    "casebook_category": "EIGHT-SECOND VIOLATION",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION VI",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "How many seconds is Team A allowed to control the ball while in the backcourt?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "Eight seconds.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "EIGHT-SECOND VIOLATION",
    "scenario": "",
    "question": "How many seconds is Team A allowed to control the ball while in the backcourt?",
    "correctAnswer": "b",
    "ruling": "Eight seconds.",
    "ruleReference": "RULE 4, SECTION VI, RULE 10, SECTION VIII",
    "casebookReference": "Case 111"
  },
  {
    "id": "casebook-2025-112",
    "case_number": 112,
    "casebook_category": "EIGHT-SECOND VIOLATION",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION VI",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "With the ball still in Team A\u2019s backcourt, Team B causes the ball to go out-of- bounds. How many total seconds is Team A allowed to advance the ball into front-court?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "Team A is allowed a total of 8 seconds to advance the ball into the frontcourt, regardless of the number of times the ball is deflected outof- bounds by the defense.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "EIGHT-SECOND VIOLATION",
    "scenario": "",
    "question": "With the ball still in Team A\u2019s backcourt, Team B causes the ball to go out-of- bounds. How many total seconds is Team A allowed to advance the ball into front-court?",
    "correctAnswer": "b",
    "ruling": "Team A is allowed a total of 8 seconds to advance the ball into the frontcourt, regardless of the number of times the ball is deflected outof- bounds by the defense.",
    "ruleReference": "RULE 4, SECTION VI, RULE 10, SECTION VIII",
    "casebookReference": "Case 112"
  },
  {
    "id": "casebook-2025-113",
    "case_number": 113,
    "casebook_category": "EIGHT-SECOND VIOLATION",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION VI",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "Following a successful field goal, Player A1 is advancing the ball toward the midcourt line. The shot clock now indicates 16. Has a violation occurred?",
    "options": {
      "A": "Shot clock resets to 24 seconds for this situation",
      "B": "Shot clock resets to 14 seconds per current rules",
      "C": "Shot clock continues; no reset is triggered here",
      "D": "Shot clock turns off until next possession change",
      "a": "Shot clock resets to 24 seconds for this situation",
      "b": "Shot clock resets to 14 seconds per current rules",
      "c": "Shot clock continues; no reset is triggered here",
      "d": "Shot clock turns off until next possession change"
    },
    "correct_answer": "C",
    "explanation": "No. The \u201cmagic number\u201d on the shot clock is 15. The ball must attain frontcourt status by that time or a violation of the 8-second rule has occurred.",
    "distractor_rationale": {
      "A": "No event occurred that triggers a reset",
      "B": "14-second reset requires specific criteria not met here",
      "D": "Shot clock continues running or resumes"
    },
    "category": "EIGHT-SECOND VIOLATION",
    "scenario": "",
    "question": "Following a successful field goal, Player A1 is advancing the ball toward the midcourt line. The shot clock now indicates 16. Has a violation occurred?",
    "correctAnswer": "c",
    "ruling": "No. The \u201cmagic number\u201d on the shot clock is 15. The ball must attain frontcourt status by that time or a violation of the 8-second rule has occurred.",
    "ruleReference": "RULE 4, SECTION VI, RULE 10, SECTION VIII",
    "casebookReference": "Case 113"
  },
  {
    "id": "casebook-2025-114",
    "case_number": 114,
    "casebook_category": "EIGHT-SECOND VIOLATION",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION VI",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "With the ball in Team A\u2019s backcourt, a technical foul is called on: (1) Player A1 (2) Player B1. Upon resumption of play, does Team A get a new eight seconds to get the ball into the frontcourt?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "(1) No. (2) Yes.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "EIGHT-SECOND VIOLATION",
    "scenario": "",
    "question": "With the ball in Team A\u2019s backcourt, a technical foul is called on: (1) Player A1 (2) Player B1. Upon resumption of play, does Team A get a new eight seconds to get the ball into the frontcourt?",
    "correctAnswer": "b",
    "ruling": "(1) No. (2) Yes.",
    "ruleReference": "RULE 4, SECTION VI, RULE 10, SECTION VIII",
    "casebookReference": "Case 114"
  },
  {
    "id": "casebook-2025-115",
    "case_number": 115,
    "casebook_category": "EIGHT-SECOND VIOLATION",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION VI",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "A timeout is called by Team A with the ball in the backcourt and 17 seconds remaining on the shot clock. How much time does Team A have remaining to legally advance the ball into the frontcourt?",
    "options": {
      "A": "Shot clock resets to 24 seconds automatically",
      "B": "Shot clock resets to 14 seconds for this situation",
      "C": "Shot clock continues from the current time shown",
      "D": "Shot clock is turned off for remainder of period",
      "a": "Shot clock resets to 24 seconds automatically",
      "b": "Shot clock resets to 14 seconds for this situation",
      "c": "Shot clock continues from the current time shown",
      "d": "Shot clock is turned off for remainder of period"
    },
    "correct_answer": "C",
    "explanation": "More than 1 second. 15 is the \u201cmagic number\u201d on the shot clock.",
    "distractor_rationale": {
      "A": "Reset criteria not met for this situation",
      "B": "14-second reset requires specific conditions",
      "D": "Shot clock remains active"
    },
    "category": "EIGHT-SECOND VIOLATION",
    "scenario": "",
    "question": "A timeout is called by Team A with the ball in the backcourt and 17 seconds remaining on the shot clock. How much time does Team A have remaining to legally advance the ball into the frontcourt?",
    "correctAnswer": "c",
    "ruling": "More than 1 second. 15 is the \u201cmagic number\u201d on the shot clock.",
    "ruleReference": "RULE 4, SECTION VI, RULE 10, SECTION VIII",
    "casebookReference": "Case 115"
  },
  {
    "id": "casebook-2025-116",
    "case_number": 116,
    "casebook_category": "EIGHT-SECOND VIOLATION",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION VI"
    ],
    "question_text": "Team A is attempting to advance the ball into the frontcourt. With 17 seconds remaining on the shot clock, the ball is passed into the frontcourt where a player on Team B bats it back into the backcourt. Team A retrieves the ball in the backcourt. Is there a new 8-second count?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "EIGHT-SECOND VIOLATION",
    "scenario": "",
    "question": "Team A is attempting to advance the ball into the frontcourt. With 17 seconds remaining on the shot clock, the ball is passed into the frontcourt where a player on Team B bats it back into the backcourt. Team A retrieves the ball in the backcourt. Is there a new 8-second count?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 4, SECTION VI",
    "casebookReference": "Case 116"
  },
  {
    "id": "casebook-2025-117",
    "case_number": 117,
    "casebook_category": "EIGHT-SECOND VIOLATION",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION VI",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "Following the throw-in after a successful field goal by Player A1, Players A2 and B2 are engaged in a verbal altercation. With 19 seconds on the shot clock, the official blows his whistle, and calls a technical foul on Players A2 and B2. When play resumes, Player B2 is dribbling the ball in the backcourt when the shot clock reads 15. What is the ruling?",
    "options": {
      "A": "Shot clock resets to 24 seconds for this situation",
      "B": "Shot clock resets to 14 seconds per current rules",
      "C": "Shot clock continues; no reset is triggered here",
      "D": "Shot clock turns off until next possession change",
      "a": "Shot clock resets to 24 seconds for this situation",
      "b": "Shot clock resets to 14 seconds per current rules",
      "c": "Shot clock continues; no reset is triggered here",
      "d": "Shot clock turns off until next possession change"
    },
    "correct_answer": "C",
    "explanation": "No violation has occurred. The offensive team shall receive a new 8-second count on a technical foul on the defensive team. Therefore, the \u201cmagic number\u201d on the shot clock would be 10.",
    "distractor_rationale": {
      "A": "No event occurred that triggers a reset",
      "B": "14-second reset requires specific criteria not met here",
      "D": "Shot clock continues running or resumes"
    },
    "category": "EIGHT-SECOND VIOLATION",
    "scenario": "",
    "question": "Following the throw-in after a successful field goal by Player A1, Players A2 and B2 are engaged in a verbal altercation. With 19 seconds on the shot clock, the official blows his whistle, and calls a technical foul on Players A2 and B2. When play resumes, Player B2 is dribbling the ball in the backcourt when the shot clock reads 15. What is the ruling?",
    "correctAnswer": "c",
    "ruling": "No violation has occurred. The offensive team shall receive a new 8-second count on a technical foul on the defensive team. Therefore, the \u201cmagic number\u201d on the shot clock would be 10.",
    "ruleReference": "RULE 4, SECTION VI, RULE 10, SECTION VIII",
    "casebookReference": "Case 117"
  },
  {
    "id": "casebook-2025-118",
    "case_number": 118,
    "casebook_category": "EJECTION - NO TECHNICAL FOUL",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "With 1:45 remaining in the second period, Player A5 commits a personal foul and is replaced by a substitute. Upon his return to the bench area, he enters the stands and becomes involved in an altercation with a spectator. What is the procedure?",
    "options": {
      "A": "Player may return after sitting out for 5 minutes",
      "B": "Player is disqualified and cannot return; substitute required",
      "C": "Technical foul assessed but player remains in game",
      "D": "Team plays short-handed; no substitute required",
      "a": "Player may return after sitting out for 5 minutes",
      "b": "Player is disqualified and cannot return; substitute required",
      "c": "Technical foul assessed but player remains in game",
      "d": "Team plays short-handed; no substitute required"
    },
    "correct_answer": "B",
    "explanation": "Instant replay may be utilized if a player commits a hostile act (e.g., initiates physical contact of any type) against a spectator.",
    "distractor_rationale": {
      "A": "Disqualification is permanent for remainder of game",
      "C": "Disqualification requires leaving the game",
      "D": "Substitute must enter for disqualified player"
    },
    "category": "EJECTION - NO TECHNICAL FOUL",
    "scenario": "",
    "question": "With 1:45 remaining in the second period, Player A5 commits a personal foul and is replaced by a substitute. Upon his return to the bench area, he enters the stands and becomes involved in an altercation with a spectator. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "Instant replay may be utilized if a player commits a hostile act (e.g., initiates physical contact of any type) against a spectator.",
    "ruleReference": "RULE 13, SECTION II, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 118"
  },
  {
    "id": "casebook-2025-119",
    "case_number": 119,
    "casebook_category": "EJECTION - NO TECHNICAL FOUL",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION IV"
    ],
    "question_text": "A team employee sitting in the stands is acting in an unsportsmanlike manner. What is the ruling?",
    "options": {
      "A": "Player is eligible to participate in game",
      "B": "Player is ineligible; cannot participate currently",
      "C": "Technical foul for eligibility violation",
      "D": "Warning issued; player may continue",
      "a": "Player is eligible to participate in game",
      "b": "Player is ineligible; cannot participate currently",
      "c": "Technical foul for eligibility violation",
      "d": "Warning issued; player may continue"
    },
    "correct_answer": "A",
    "explanation": "All personnel associated with a team may be reported to the League Office for unsportsmanlike conduct. An official cannot assess a technical foul since the individual is not seated on the bench.",
    "distractor_rationale": {
      "B": "Player meets all eligibility requirements",
      "C": "No eligibility violation occurred",
      "D": "No warning needed; player is eligible"
    },
    "category": "EJECTION - NO TECHNICAL FOUL",
    "scenario": "",
    "question": "A team employee sitting in the stands is acting in an unsportsmanlike manner. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "All personnel associated with a team may be reported to the League Office for unsportsmanlike conduct. An official cannot assess a technical foul since the individual is not seated on the bench.",
    "ruleReference": "RULE 3, SECTION IV",
    "casebookReference": "Case 119"
  },
  {
    "id": "casebook-2025-120",
    "case_number": 120,
    "casebook_category": "EQUIPMENT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION V"
    ],
    "question_text": "Player A1 has lost his shoe while the ball is in play. Should an official stop play and allow him time to replace it?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "No. If Player A1 wishes for play to be stopped to replace his shoe, he must call a timeout.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "EQUIPMENT",
    "scenario": "",
    "question": "Player A1 has lost his shoe while the ball is in play. Should an official stop play and allow him time to replace it?",
    "correctAnswer": "b",
    "ruling": "No. If Player A1 wishes for play to be stopped to replace his shoe, he must call a timeout.",
    "ruleReference": "RULE 5, SECTION V",
    "casebookReference": "Case 120"
  },
  {
    "id": "casebook-2025-121",
    "case_number": 121,
    "casebook_category": "FIGHTING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION VI"
    ],
    "question_text": "Player A1 and Player B1 are involved in a fight during a dead ball situation. After reviewing the video to determine the appropriate penalty for Player A1 and B1, the officials call a technical foul on both players for fighting and eject both players. How is the ball put into play?",
    "options": {
      "A": "Technical foul assessed: one free throw plus possession",
      "B": "No violation: conduct was acceptable within rules",
      "C": "Warning only: first offense doesn't warrant penalty",
      "D": "Flagrant foul: contact was unnecessary or excessive",
      "a": "Technical foul assessed: one free throw plus possession",
      "b": "No violation: conduct was acceptable within rules",
      "c": "Warning only: first offense doesn't warrant penalty",
      "d": "Flagrant foul: contact was unnecessary or excessive"
    },
    "correct_answer": "A",
    "explanation": "Play is resumed at the same spot where it would have been had the altercation never taken place. No free throws are awarded.",
    "distractor_rationale": {
      "B": "Conduct violated rules and must be penalized",
      "C": "Conduct warrants immediate penalty, not warning",
      "D": "No physical contact; technical is appropriate call"
    },
    "category": "FIGHTING",
    "scenario": "",
    "question": "Player A1 and Player B1 are involved in a fight during a dead ball situation. After reviewing the video to determine the appropriate penalty for Player A1 and B1, the officials call a technical foul on both players for fighting and eject both players. How is the ball put into play?",
    "correctAnswer": "a",
    "ruling": "Play is resumed at the same spot where it would have been had the altercation never taken place. No free throws are awarded.",
    "ruleReference": "RULE 12A, SECTION VI",
    "casebookReference": "Case 121"
  },
  {
    "id": "casebook-2025-122",
    "case_number": 122,
    "casebook_category": "FIGHTING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION VII"
    ],
    "question_text": "Is there a penalty for coming off the bench to stop or help a teammate involved in a fight?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "FIGHTING",
    "scenario": "",
    "question": "Is there a penalty for coming off the bench to stop or help a teammate involved in a fight?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 12A, SECTION VII",
    "casebookReference": "Case 122"
  },
  {
    "id": "casebook-2025-123",
    "case_number": 123,
    "casebook_category": "FIGHTING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 is fouled by Player B1 and is awarded two free throw attempts. Prior to Player A1 attempting his free throws, he and Player B1 get involved in a fight. What is the correct ruling and how is the ball put into play?",
    "options": {
      "A": "Technical foul: player receives warning and remains in game",
      "B": "Player is ejected: two technical fouls result in disqualification",
      "C": "Flagrant 1: player remains unless they receive second flagrant",
      "D": "Suspension only: player may finish game but misses next",
      "a": "Technical foul: player receives warning and remains in game",
      "b": "Player is ejected: two technical fouls result in disqualification",
      "c": "Flagrant 1: player remains unless they receive second flagrant",
      "d": "Suspension only: player may finish game but misses next"
    },
    "correct_answer": "B",
    "explanation": "The officials will use instant replay to determine (1) the identity of any player, coach, trainer, or team bench person involved in the altercation and the action immediately prior to and immediately.",
    "distractor_rationale": {
      "A": "Two technicals means automatic ejection, no warning",
      "C": "This was a technical foul situation, not flagrant",
      "D": "Ejection is immediate; suspension may also apply"
    },
    "category": "FIGHTING",
    "scenario": "",
    "question": "Player A1 is fouled by Player B1 and is awarded two free throw attempts. Prior to Player A1 attempting his free throws, he and Player B1 get involved in a fight. What is the correct ruling and how is the ball put into play?",
    "correctAnswer": "b",
    "ruling": "The officials will use instant replay to determine (1) the identity of any player, coach, trainer, or team bench person involved in the altercation and the action immediately prior to and immediately.",
    "ruleReference": "RULE 9, SECTION II, RULE 13, SECTION I",
    "casebookReference": "Case 123"
  },
  {
    "id": "casebook-2025-124",
    "case_number": 124,
    "casebook_category": "FIGHTING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION VI",
      "RULE 7, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Following instant replay review, Players A1 and B1 are ejected from the game for fighting. Player A1 had possession of the ball in his frontcourt when the fight started. What is the ruling?",
    "options": {
      "A": "Technical foul assessed: one free throw plus possession",
      "B": "No violation: conduct was acceptable within rules",
      "C": "Warning only: first offense doesn't warrant penalty",
      "D": "Flagrant foul: contact was unnecessary or excessive",
      "a": "Technical foul assessed: one free throw plus possession",
      "b": "No violation: conduct was acceptable within rules",
      "c": "Warning only: first offense doesn't warrant penalty",
      "d": "Flagrant foul: contact was unnecessary or excessive"
    },
    "correct_answer": "A",
    "explanation": "No free throws will be attempted as a penalty for the fighting fouls.",
    "distractor_rationale": {
      "B": "Conduct violated rules and must be penalized",
      "C": "Conduct warrants immediate penalty, not warning",
      "D": "No physical contact; technical is appropriate call"
    },
    "category": "FIGHTING",
    "scenario": "",
    "question": "Following instant replay review, Players A1 and B1 are ejected from the game for fighting. Player A1 had possession of the ball in his frontcourt when the fight started. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "No free throws will be attempted as a penalty for the fighting fouls.",
    "ruleReference": "RULE 12A, SECTION VI, RULE 7, SECTION IV, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 124"
  },
  {
    "id": "casebook-2025-125",
    "case_number": 125,
    "casebook_category": "FIGHTING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 10, SECTION VIII",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II",
      "RULE 12A, SECTION VI",
      "RULE 4, SECTION VI"
    ],
    "question_text": "Player A1 and Player B1 are involved in a fight while Player A2 is dribbling in the backcourt with 20 seconds on the shot clock. What type of foul is assessed and how is the ball put back into play?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "After utilizing instant replay to review the altercation and determine the appropriate penalties for all those involved, both Player A1 and Player B1 should be assessed a technical foul for fighting.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "FIGHTING",
    "scenario": "",
    "question": "Player A1 and Player B1 are involved in a fight while Player A2 is dribbling in the backcourt with 20 seconds on the shot clock. What type of foul is assessed and how is the ball put back into play?",
    "correctAnswer": "b",
    "ruling": "After utilizing instant replay to review the altercation and determine the appropriate penalties for all those involved, both Player A1 and Player B1 should be assessed a technical foul for fighting.",
    "ruleReference": "RULE 7, SECTION IV, RULE 10, SECTION VIII, RULE 13, SECTION I, RULE 13, SECTION II, RULE 12A, SECTION VI, RULE 4, SECTION VI",
    "casebookReference": "Case 125"
  },
  {
    "id": "casebook-2025-126",
    "case_number": 126,
    "casebook_category": "FIGHTING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION VI",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Player A1 and Player B1 are involved in a fight and, with the use of instant replay, the officials determine that Player A1 is the clear aggressor and responsible for the incident, while Player B1 simply acted in a retaliatory fashion after Player A1 initiated the fight. With what type of foul is appropriate for Player A1 and Player B1?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Technical fouls shall be assessed to Player A1 and Player B1 for fighting and both players will be ejected immediately.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "FIGHTING",
    "scenario": "",
    "question": "Player A1 and Player B1 are involved in a fight and, with the use of instant replay, the officials determine that Player A1 is the clear aggressor and responsible for the incident, while Player B1 simply acted in a retaliatory fashion after Player A1 initiated the fight. With what type of foul is appropriate for Player A1 and Player B1?",
    "correctAnswer": "b",
    "ruling": "Technical fouls shall be assessed to Player A1 and Player B1 for fighting and both players will be ejected immediately.",
    "ruleReference": "RULE 12A, SECTION VI, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 126"
  },
  {
    "id": "casebook-2025-127",
    "case_number": 127,
    "casebook_category": "FIGHTING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12B, SECTION IX",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II",
      "RULE 12A, SECTION VI",
      "RULE 9, SECTION II"
    ],
    "question_text": "Player A1, who has a clear-path-to-the-basket in Team A's frontcourt, is fouled by Player B1 while not in the act of shooting. The following action then occurs: (1) Player A1 punches Player B1, or (2) Players A1 and B1 engage in a fight. How should these situations be administered?",
    "options": {
      "A": "Technical foul assessed: one free throw plus possession",
      "B": "No violation: conduct was acceptable within rules",
      "C": "Warning only: first offense doesn't warrant penalty",
      "D": "Flagrant foul: contact was unnecessary or excessive",
      "a": "Technical foul assessed: one free throw plus possession",
      "b": "No violation: conduct was acceptable within rules",
      "c": "Warning only: first offense doesn't warrant penalty",
      "d": "Flagrant foul: contact was unnecessary or excessive"
    },
    "correct_answer": "A",
    "explanation": "",
    "distractor_rationale": {
      "B": "Conduct violated rules and must be penalized",
      "C": "Conduct warrants immediate penalty, not warning",
      "D": "No physical contact; technical is appropriate call"
    },
    "category": "FIGHTING",
    "scenario": "",
    "question": "Player A1, who has a clear-path-to-the-basket in Team A's frontcourt, is fouled by Player B1 while not in the act of shooting. The following action then occurs: (1) Player A1 punches Player B1, or (2) Players A1 and B1 engage in a fight. How should these situations be administered?",
    "correctAnswer": "a",
    "ruling": "In both (1) and (2), the officials will utilize instant replay to review the altercation and determine the appropriate penalties for all those involved. Situation (1): A clear path foul is assessed to Player B1. Player A1 is charged with a punching foul and ejected. Team A is awarded two free throw attempts. The coach of Team B will select the substitute from Team A's bench who will attempt the two free throws. No players will be lined-up on the free throw lane lines. Player B1 will then attempt two free throws for the punching foul and Team B is awarded the ball at the free throw line extended for the throw-in. Situation (2): A clear path foul is assessed to Player B1. Player A1 and Player B1 are both assessed a technical foul for fighting and ejected. Team A is awarded two free throw attempts for the personal foul committed by Player B1. The coach of Team B will select the substitute from Team A's bench who will attempt the free throws. Team A will retain possession on the sideline where the play was interrupted, but no nearer the baseline than the free throw line extended. No free throws will be attempted as a penalty for the fighting fouls.",
    "ruleReference": "RULE 12B, SECTION IX, RULE 13, SECTION I, RULE 13, SECTION II, RULE 12A, SECTION VI, RULE 9, SECTION II",
    "casebookReference": "Case 127"
  },
  {
    "id": "casebook-2025-128",
    "case_number": 128,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12B, SECTION X",
      "RULE 12B, SECTION IV",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION II"
    ],
    "question_text": "Following a successful field goal by Player A1 with 1:36 remaining in overtime, Player A2 is assessed a personal foul when he elbows Player B2 prior to the ball being released on the throw-in. The officials believe the foul may meet the criteria for a flagrant foul. How is this play administered?",
    "options": {
      "A": "Flagrant 1: two free throws plus possession; player remains in game",
      "B": "Flagrant 2: two free throws plus possession; player is ejected",
      "C": "Technical foul: one free throw plus possession; player warned",
      "D": "Common foul: unnecessary but not excessive contact occurred",
      "a": "Flagrant 1: two free throws plus possession; player remains in game",
      "b": "Flagrant 2: two free throws plus possession; player is ejected",
      "c": "Technical foul: one free throw plus possession; player warned",
      "d": "Common foul: unnecessary but not excessive contact occurred"
    },
    "correct_answer": "B",
    "explanation": "Instant replay should be utilized if the officials are not reasonably certain whether a personal foul called at any time met the criteria for a flagrant foul.",
    "distractor_rationale": {
      "A": "Contact was excessive, not just unnecessary; FF2 required",
      "C": "Contact fouls are not assessed as technical fouls",
      "D": "Contact clearly exceeded normal basketball play"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Following a successful field goal by Player A1 with 1:36 remaining in overtime, Player A2 is assessed a personal foul when he elbows Player B2 prior to the ball being released on the throw-in. The officials believe the foul may meet the criteria for a flagrant foul. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "Instant replay should be utilized if the officials are not reasonably certain whether a personal foul called at any time met the criteria for a flagrant foul.",
    "ruleReference": "RULE 12B, SECTION X, RULE 12B, SECTION IV, RULE 12A, SECTION V, RULE 13, SECTION II",
    "casebookReference": "Case 128"
  },
  {
    "id": "casebook-2025-129",
    "case_number": 129,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12B, SECTION I",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II",
      "RULE 12B, SECTION V",
      "RULE 12B, SECTION IV"
    ],
    "question_text": "Player A1 is fouled hard while in the act of shooting by Player B1 on: (1) a successful three-point field goal attempt, or (2) an unsuccessful three-point field goal attempt. The official also rules there was unsportsmanlike contact by Player B2, which followed the personal foul that may meet the criteria for a flagrant foul by Player B1. How is this play administered?",
    "options": {
      "A": "Flagrant 1: two free throws plus possession; player remains in game",
      "B": "Flagrant 2: two free throws plus possession; player is ejected",
      "C": "Technical foul: one free throw plus possession; player warned",
      "D": "Common foul: unnecessary but not excessive contact occurred",
      "a": "Flagrant 1: two free throws plus possession; player remains in game",
      "b": "Flagrant 2: two free throws plus possession; player is ejected",
      "c": "Technical foul: one free throw plus possession; player warned",
      "d": "Common foul: unnecessary but not excessive contact occurred"
    },
    "correct_answer": "B",
    "explanation": "The officials should utilize instant replay to determine if the contact by Player B1 is a common foul, FF1 or FF2.",
    "distractor_rationale": {
      "A": "Contact was excessive, not just unnecessary; FF2 required",
      "C": "Contact fouls are not assessed as technical fouls",
      "D": "Contact clearly exceeded normal basketball play"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Player A1 is fouled hard while in the act of shooting by Player B1 on: (1) a successful three-point field goal attempt, or (2) an unsuccessful three-point field goal attempt. The official also rules there was unsportsmanlike contact by Player B2, which followed the personal foul that may meet the criteria for a flagrant foul by Player B1. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "The officials should utilize instant replay to determine if the contact by Player B1 is a common foul, FF1 or FF2.",
    "ruleReference": "RULE 12B, SECTION I, RULE 13, SECTION I, RULE 13, SECTION II, RULE 12B, SECTION V, RULE 12B, SECTION IV",
    "casebookReference": "Case 129"
  },
  {
    "id": "casebook-2025-130",
    "case_number": 130,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 12B, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 12B, SECTION V"
    ],
    "question_text": "Following an instant replay review, a FF1 is assessed against Player B1 as Player A1 is in the act of shooting: (1) a successful two-point field goal attempt, or (2) an unsuccessful two-point field goal attempt. How is the play administered?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): Player A1 is awarded two free throw attempts to score one point.",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Following an instant replay review, a FF1 is assessed against Player B1 as Player A1 is in the act of shooting: (1) a successful two-point field goal attempt, or (2) an unsuccessful two-point field goal attempt. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "Situation (1): Player A1 is awarded two free throw attempts to score one point.",
    "ruleReference": "RULE 13, SECTION II, RULE 12B, SECTION IV, RULE 13, SECTION I, RULE 12B, SECTION V",
    "casebookReference": "Case 130"
  },
  {
    "id": "casebook-2025-131",
    "case_number": 131,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V",
      "RULE 13, SECTION II",
      "RULE 13, SECTION I",
      "RULE 12B, SECTION IV",
      "RULE 9, SECTION II"
    ],
    "question_text": "Following an instant replay review, Player B1 is assessed a FF1 and Player A1 is awarded two free throw attempts and possession of the ball out-of-bounds. Earlier in the game Player B1 was assessed a technical foul for an unsportsmanlike act. (1) Is Player B1 automatically ejected?",
    "options": {
      "A": "Flagrant 1: two free throws plus possession; player remains in game",
      "B": "Flagrant 2: two free throws plus possession; player is ejected",
      "C": "Technical foul: one free throw plus possession; player warned",
      "D": "Common foul: unnecessary but not excessive contact occurred",
      "a": "Flagrant 1: two free throws plus possession; player remains in game",
      "b": "Flagrant 2: two free throws plus possession; player is ejected",
      "c": "Technical foul: one free throw plus possession; player warned",
      "d": "Common foul: unnecessary but not excessive contact occurred"
    },
    "correct_answer": "B",
    "explanation": "(2) Does the coach of Team A select the free throw shooter if Player A1 is injured on the play?",
    "distractor_rationale": {
      "A": "Contact was excessive, not just unnecessary; FF2 required",
      "C": "Contact fouls are not assessed as technical fouls",
      "D": "Contact clearly exceeded normal basketball play"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Following an instant replay review, Player B1 is assessed a FF1 and Player A1 is awarded two free throw attempts and possession of the ball out-of-bounds. Earlier in the game Player B1 was assessed a technical foul for an unsportsmanlike act. (1) Is Player B1 automatically ejected?",
    "correctAnswer": "b",
    "ruling": "(2) Does the coach of Team A select the free throw shooter if Player A1 is injured on the play?",
    "ruleReference": "RULE 12A, SECTION V, RULE 13, SECTION II, RULE 13, SECTION I, RULE 12B, SECTION IV, RULE 9, SECTION II",
    "casebookReference": "Case 131"
  },
  {
    "id": "casebook-2025-132",
    "case_number": 132,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 12B, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 12B, SECTION V"
    ],
    "question_text": "Following an instant replay review, a FF1 is assessed to Player B2 for throwing Player A2 to the floor on: (1) a successful three-point field goal attempt by Player A1, or (2) an unsuccessful three-point field goal attempt by Player A1. How is the play administered?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): Player A2 is awarded two free throw attempts to score one point.",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Following an instant replay review, a FF1 is assessed to Player B2 for throwing Player A2 to the floor on: (1) a successful three-point field goal attempt by Player A1, or (2) an unsuccessful three-point field goal attempt by Player A1. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "Situation (1): Player A2 is awarded two free throw attempts to score one point.",
    "ruleReference": "RULE 13, SECTION II, RULE 12B, SECTION IV, RULE 13, SECTION I, RULE 12B, SECTION V",
    "casebookReference": "Case 132"
  },
  {
    "id": "casebook-2025-133",
    "case_number": 133,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 12B, SECTION IV",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 is fouled by Player B1 while attempting to cause a jump ball. Clearly after the personal foul is called, Player B1 throws Player A1 to the floor. What is the ruling?",
    "options": {
      "A": "Flagrant 1: two free throws plus possession; player remains in game",
      "B": "Flagrant 2: two free throws plus possession; player is ejected",
      "C": "Technical foul: one free throw plus possession; player warned",
      "D": "Common foul: unnecessary but not excessive contact occurred",
      "a": "Flagrant 1: two free throws plus possession; player remains in game",
      "b": "Flagrant 2: two free throws plus possession; player is ejected",
      "c": "Technical foul: one free throw plus possession; player warned",
      "d": "Common foul: unnecessary but not excessive contact occurred"
    },
    "correct_answer": "B",
    "explanation": "The first foul is a common foul.",
    "distractor_rationale": {
      "A": "Contact was excessive, not just unnecessary; FF2 required",
      "C": "Contact fouls are not assessed as technical fouls",
      "D": "Contact clearly exceeded normal basketball play"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Player A1 is fouled by Player B1 while attempting to cause a jump ball. Clearly after the personal foul is called, Player B1 throws Player A1 to the floor. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The first foul is a common foul.",
    "ruleReference": "RULE 13, SECTION II, RULE 12B, SECTION IV, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 133"
  },
  {
    "id": "casebook-2025-134",
    "case_number": 134,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 3, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 is injured on a play where Player B1 has been assessed a FF1 following instant replay review. Player A1 attempts his free throws and Player A6 substitutes for him prior to the throw-in. Can Player A1 return to the game?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "Yes. The only restrictions for Player A1 is that he attempt his free throws to remain an eligible substitute.",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Player A1 is injured on a play where Player B1 has been assessed a FF1 following instant replay review. Player A1 attempts his free throws and Player A6 substitutes for him prior to the throw-in. Can Player A1 return to the game?",
    "correctAnswer": "b",
    "ruling": "Yes. The only restrictions for Player A1 is that he attempt his free throws to remain an eligible substitute.",
    "ruleReference": "RULE 9, SECTION II, RULE 3, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 134"
  },
  {
    "id": "casebook-2025-135",
    "case_number": 135,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION IV",
      "RULE 12B, SECTION V"
    ],
    "question_text": "On a successful two-point field goal attempt by Player A1, a personal foul is called on Player B1. Immediately following the personal foul on Player B1, a flagrant foul is called on Player B2 (also against Player A1) and ruled a FF1 following instant replay review. How is the play administered?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "Player A1 is awarded three free throw attempts to score one point and Team A will be awarded the ball out-of-bounds at the free throw line extended.",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "On a successful two-point field goal attempt by Player A1, a personal foul is called on Player B1. Immediately following the personal foul on Player B1, a flagrant foul is called on Player B2 (also against Player A1) and ruled a FF1 following instant replay review. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "Player A1 is awarded three free throw attempts to score one point and Team A will be awarded the ball out-of-bounds at the free throw line extended.",
    "ruleReference": "RULE 12B, SECTION IV, RULE 12B, SECTION V",
    "casebookReference": "Case 135"
  },
  {
    "id": "casebook-2025-136",
    "case_number": 136,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12B, SECTION IV",
      "RULE 13, SECTION I"
    ],
    "question_text": "Following a successful field goal by Player A1, a flagrant foul is ruled a FF1 following instant replay and is called on Player B2 for physical contact with Player A2. This action occurs: (1) prior to possession of the ball out-of-bounds by Team B, or (2) after possession of the ball out-of-bounds by Team B. How is play resumed in both situations?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Following a successful field goal by Player A1, a flagrant foul is ruled a FF1 following instant replay and is called on Player B2 for physical contact with Player A2. This action occurs: (1) prior to possession of the ball out-of-bounds by Team B, or (2) after possession of the ball out-of-bounds by Team B. How is play resumed in both situations?",
    "correctAnswer": "b",
    "ruling": "In both situations (1) and (2), Player A2 will be awarded two free throw attempts. Play will be resumed by awarding Team A the ball out-of-bounds at the free throw line extended. Possession or non-possession of the ball out-of-bounds does not change this procedure.",
    "ruleReference": "RULE 12B, SECTION IV, RULE 13, SECTION I",
    "casebookReference": "Case 136"
  },
  {
    "id": "casebook-2025-137",
    "case_number": 137,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 12B, SECTION IV",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player B1 commits a hard foul against Player A2 which may meet the criteria for a flagrant foul. In frustration, Player A2 then throws the ball at Player B1 and a technical foul is assessed to Player A2. How is this play administered?",
    "options": {
      "A": "Flagrant 1: two free throws plus possession; player remains in game",
      "B": "Flagrant 2: two free throws plus possession; player is ejected",
      "C": "Technical foul: one free throw plus possession; player warned",
      "D": "Common foul: unnecessary but not excessive contact occurred",
      "a": "Flagrant 1: two free throws plus possession; player remains in game",
      "b": "Flagrant 2: two free throws plus possession; player is ejected",
      "c": "Technical foul: one free throw plus possession; player warned",
      "d": "Common foul: unnecessary but not excessive contact occurred"
    },
    "correct_answer": "B",
    "explanation": "Instant replay should be utilized if the officials are not reasonably certain whether a personal foul called at any time met the criteria for a flagrant foul.",
    "distractor_rationale": {
      "A": "Contact was excessive, not just unnecessary; FF2 required",
      "C": "Contact fouls are not assessed as technical fouls",
      "D": "Contact clearly exceeded normal basketball play"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Player B1 commits a hard foul against Player A2 which may meet the criteria for a flagrant foul. In frustration, Player A2 then throws the ball at Player B1 and a technical foul is assessed to Player A2. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "Instant replay should be utilized if the officials are not reasonably certain whether a personal foul called at any time met the criteria for a flagrant foul.",
    "ruleReference": "RULE 13, SECTION II, RULE 12B, SECTION IV, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 137"
  },
  {
    "id": "casebook-2025-138",
    "case_number": 138,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION IX",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II",
      "RULE 12B, SECTION IV",
      "RULE 9, SECTION II"
    ],
    "question_text": "With 0:56 remaining in the third period, Player A1 is fouled by Player B1. Player A1 reacts and hits Player B1 in the chest with an elbow. Player B1 throws a punch that misses Player A1, who in turn throws the ball at him. Team B has committed five team fouls. What is the ruling?",
    "options": {
      "A": "Flagrant 1: two free throws plus possession; player remains in game",
      "B": "Flagrant 2: two free throws plus possession; player is ejected",
      "C": "Technical foul: one free throw plus possession; player warned",
      "D": "Common foul: unnecessary but not excessive contact occurred",
      "a": "Flagrant 1: two free throws plus possession; player remains in game",
      "b": "Flagrant 2: two free throws plus possession; player is ejected",
      "c": "Technical foul: one free throw plus possession; player warned",
      "d": "Common foul: unnecessary but not excessive contact occurred"
    },
    "correct_answer": "B",
    "explanation": "The officials will utilize instant replay to review the altercation and determine the appropriate penalties for all those involved.",
    "distractor_rationale": {
      "A": "Contact was excessive, not just unnecessary; FF2 required",
      "C": "Contact fouls are not assessed as technical fouls",
      "D": "Contact clearly exceeded normal basketball play"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "With 0:56 remaining in the third period, Player A1 is fouled by Player B1. Player A1 reacts and hits Player B1 in the chest with an elbow. Player B1 throws a punch that misses Player A1, who in turn throws the ball at him. Team B has committed five team fouls. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The officials will utilize instant replay to review the altercation and determine the appropriate penalties for all those involved.",
    "ruleReference": "RULE 12B, SECTION IX, RULE 12A, SECTION V, RULE 13, SECTION I, RULE 13, SECTION II, RULE 12B, SECTION IV, RULE 9, SECTION II",
    "casebookReference": "Case 138"
  },
  {
    "id": "casebook-2025-139",
    "case_number": 139,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION IV",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player B1 fouls Player A1 and the penalty is not in effect. Player A2 rushes over and gets in Player B1\u2019s face and he reacts by head butting Player A2. How is the play administered?",
    "options": {
      "A": "Flagrant 1: two free throws plus possession; player remains in game",
      "B": "Flagrant 2: two free throws plus possession; player is ejected",
      "C": "Technical foul: one free throw plus possession; player warned",
      "D": "Common foul: unnecessary but not excessive contact occurred",
      "a": "Flagrant 1: two free throws plus possession; player remains in game",
      "b": "Flagrant 2: two free throws plus possession; player is ejected",
      "c": "Technical foul: one free throw plus possession; player warned",
      "d": "Common foul: unnecessary but not excessive contact occurred"
    },
    "correct_answer": "B",
    "explanation": "A head butt is considered a hostile act.",
    "distractor_rationale": {
      "A": "Contact was excessive, not just unnecessary; FF2 required",
      "C": "Contact fouls are not assessed as technical fouls",
      "D": "Contact clearly exceeded normal basketball play"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Player B1 fouls Player A1 and the penalty is not in effect. Player A2 rushes over and gets in Player B1\u2019s face and he reacts by head butting Player A2. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "A head butt is considered a hostile act.",
    "ruleReference": "RULE 12B, SECTION IV, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 139"
  },
  {
    "id": "casebook-2025-140",
    "case_number": 140,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 9, SECTION III"
    ],
    "question_text": "Player A1 is assessed a flagrant foul between the third and fourth periods. Team A had gained the first possession of the game. Which team will get the first possession of the fourth period?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "Team A.",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Player A1 is assessed a flagrant foul between the third and fourth periods. Team A had gained the first possession of the game. Which team will get the first possession of the fourth period?",
    "correctAnswer": "b",
    "ruling": "Team A.",
    "ruleReference": "RULE 9, SECTION III",
    "casebookReference": "Case 140"
  },
  {
    "id": "casebook-2025-141",
    "case_number": 141,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION IV",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A2 is assessed a hard foul which may meet the criteria for a flagrant foul when he unintentionally elbows Player B2 in the upper chest area on an unsuccessful field goal attempt by Player A1. His elbow glances off Player B2\u2019s chest and contacts him on the chin. What is the ruling?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "Following instant replay review, Player A2 shall be assessed a FF1.",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Player A2 is assessed a hard foul which may meet the criteria for a flagrant foul when he unintentionally elbows Player B2 in the upper chest area on an unsuccessful field goal attempt by Player A1. His elbow glances off Player B2\u2019s chest and contacts him on the chin. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Following instant replay review, Player A2 shall be assessed a FF1.",
    "ruleReference": "RULE 12B, SECTION IV, RULE 13, SECTION I",
    "casebookReference": "Case 141"
  },
  {
    "id": "casebook-2025-142",
    "case_number": 142,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "During a dead ball, Player A3 takes a swing (not a punch) at Player B3 and hits him in the shoulder. How is this handled?",
    "options": {
      "A": "Flagrant 1: two free throws plus possession; player remains in game",
      "B": "Flagrant 2: two free throws plus possession; player is ejected",
      "C": "Technical foul: one free throw plus possession; player warned",
      "D": "Common foul: unnecessary but not excessive contact occurred",
      "a": "Flagrant 1: two free throws plus possession; player remains in game",
      "b": "Flagrant 2: two free throws plus possession; player is ejected",
      "c": "Technical foul: one free throw plus possession; player warned",
      "d": "Common foul: unnecessary but not excessive contact occurred"
    },
    "correct_answer": "B",
    "explanation": "Following instant replay review, Player A3 is assessed a FF2.",
    "distractor_rationale": {
      "A": "Contact was excessive, not just unnecessary; FF2 required",
      "C": "Contact fouls are not assessed as technical fouls",
      "D": "Contact clearly exceeded normal basketball play"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "During a dead ball, Player A3 takes a swing (not a punch) at Player B3 and hits him in the shoulder. How is this handled?",
    "correctAnswer": "b",
    "ruling": "Following instant replay review, Player A3 is assessed a FF2.",
    "ruleReference": "RULE 12B, SECTION IV, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 142"
  },
  {
    "id": "casebook-2025-143",
    "case_number": 143,
    "casebook_category": "FLAGRANT FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Following an unsuccessful field goal attempt by Player A1, a loose ball foul is called on Player A2. Player B2 reacts to that foul by hitting Player A2 with an elbow, and is assessed a flagrant foul. It was also the sixth personal foul on Player A2. How is this play administered if: (1) Team A is in the penalty, or (2) Team A is not in the penalty?",
    "options": {
      "A": "Flagrant 1: two free throws plus possession; player remains in game",
      "B": "Flagrant 2: two free throws plus possession; player is ejected",
      "C": "Technical foul: one free throw plus possession; player warned",
      "D": "Common foul: unnecessary but not excessive contact occurred",
      "a": "Flagrant 1: two free throws plus possession; player remains in game",
      "b": "Flagrant 2: two free throws plus possession; player is ejected",
      "c": "Technical foul: one free throw plus possession; player warned",
      "d": "Common foul: unnecessary but not excessive contact occurred"
    },
    "correct_answer": "B",
    "explanation": "Following the ruling on the floor, the officials will use instant replay to review the flagrant foul and to rule on any other unsportsmanlike acts which may have gone unnoticed immediately prior to.",
    "distractor_rationale": {
      "A": "Contact was excessive, not just unnecessary; FF2 required",
      "C": "Contact fouls are not assessed as technical fouls",
      "D": "Contact clearly exceeded normal basketball play"
    },
    "category": "FLAGRANT FOULS",
    "scenario": "",
    "question": "Following an unsuccessful field goal attempt by Player A1, a loose ball foul is called on Player A2. Player B2 reacts to that foul by hitting Player A2 with an elbow, and is assessed a flagrant foul. It was also the sixth personal foul on Player A2. How is this play administered if: (1) Team A is in the penalty, or (2) Team A is not in the penalty?",
    "correctAnswer": "b",
    "ruling": "Following the ruling on the floor, the officials will use instant replay to review the flagrant foul and to rule on any other unsportsmanlike acts which may have gone unnoticed immediately prior to.",
    "ruleReference": "RULE 9, SECTION II, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 143"
  },
  {
    "id": "casebook-2025-144",
    "case_number": 144,
    "casebook_category": "FLOPPING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 10, SECTION XVII"
    ],
    "question_text": "With 9:02 remaining in the first period, Player A5 and Player B5 are jostling for position in the post. Following minimal contact by Player A5, Player B5 theatrically flails his arms and stumbles a considerable distance backwards toward the baseline in an exaggerated manner inconsistent with the contact. How should this be administered?",
    "options": {
      "A": "Technical foul assessed: one free throw plus possession",
      "B": "No violation: conduct was acceptable within rules",
      "C": "Warning only: first offense doesn't warrant penalty",
      "D": "Flagrant foul: contact was unnecessary or excessive",
      "a": "Technical foul assessed: one free throw plus possession",
      "b": "No violation: conduct was acceptable within rules",
      "c": "Warning only: first offense doesn't warrant penalty",
      "d": "Flagrant foul: contact was unnecessary or excessive"
    },
    "correct_answer": "A",
    "explanation": "The official should signal that Player B5 has committed a flop and wait until the next neutral opportunity to administer the flopping penalty.",
    "distractor_rationale": {
      "B": "Conduct violated rules and must be penalized",
      "C": "Conduct warrants immediate penalty, not warning",
      "D": "No physical contact; technical is appropriate call"
    },
    "category": "FLOPPING",
    "scenario": "",
    "question": "With 9:02 remaining in the first period, Player A5 and Player B5 are jostling for position in the post. Following minimal contact by Player A5, Player B5 theatrically flails his arms and stumbles a considerable distance backwards toward the baseline in an exaggerated manner inconsistent with the contact. How should this be administered?",
    "correctAnswer": "a",
    "ruling": "The official should signal that Player B5 has committed a flop and wait until the next neutral opportunity to administer the flopping penalty.",
    "ruleReference": "RULE 10, SECTION XVII",
    "casebookReference": "Case 144"
  },
  {
    "id": "casebook-2025-145",
    "case_number": 145,
    "casebook_category": "FLOPPING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 10, SECTION XVII"
    ],
    "question_text": "With 7:58 remaining in the second period, Player A2 is closely guarded by Player B2 and attempts a three-pointer. Player A2 reflexively positions himself for impact with Player B2 as the shot is released. Player B2 never makes contact with Player A2, and Player A2 naturally falls to the floor after his jump shot. Should a flopping violation be assessed?",
    "options": {
      "A": "Technical foul assessed: one free throw plus possession",
      "B": "No violation: conduct was acceptable within rules",
      "C": "Warning only: first offense doesn't warrant penalty",
      "D": "Flagrant foul: contact was unnecessary or excessive",
      "a": "Technical foul assessed: one free throw plus possession",
      "b": "No violation: conduct was acceptable within rules",
      "c": "Warning only: first offense doesn't warrant penalty",
      "d": "Flagrant foul: contact was unnecessary or excessive"
    },
    "correct_answer": "A",
    "explanation": "No.",
    "distractor_rationale": {
      "B": "Conduct violated rules and must be penalized",
      "C": "Conduct warrants immediate penalty, not warning",
      "D": "No physical contact; technical is appropriate call"
    },
    "category": "FLOPPING",
    "scenario": "",
    "question": "With 7:58 remaining in the second period, Player A2 is closely guarded by Player B2 and attempts a three-pointer. Player A2 reflexively positions himself for impact with Player B2 as the shot is released. Player B2 never makes contact with Player A2, and Player A2 naturally falls to the floor after his jump shot. Should a flopping violation be assessed?",
    "correctAnswer": "a",
    "ruling": "No.",
    "ruleReference": "RULE 10, SECTION XVII",
    "casebookReference": "Case 145"
  },
  {
    "id": "casebook-2025-146",
    "case_number": 146,
    "casebook_category": "FLOPPING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 10, SECTION XVII",
      "RULE 14, SECTION III",
      "RULE 14, SECTION VI",
      "RULE 14, SECTION V",
      "RULE 14, SECTION I"
    ],
    "question_text": "With 3:34 remaining in the third period, how are each of the following situations administered?",
    "options": {
      "A": "Technical foul assessed: one free throw plus possession",
      "B": "No violation: conduct was acceptable within rules",
      "C": "Warning only: first offense doesn't warrant penalty",
      "D": "Flagrant foul: contact was unnecessary or excessive",
      "a": "Technical foul assessed: one free throw plus possession",
      "b": "No violation: conduct was acceptable within rules",
      "c": "Warning only: first offense doesn't warrant penalty",
      "d": "Flagrant foul: contact was unnecessary or excessive"
    },
    "correct_answer": "A",
    "explanation": "(1) Player B1 is guarding Player A1 as Player A1 attempts an unsuccessful three-point shot.",
    "distractor_rationale": {
      "B": "Conduct violated rules and must be penalized",
      "C": "Conduct warrants immediate penalty, not warning",
      "D": "No physical contact; technical is appropriate call"
    },
    "category": "FLOPPING",
    "scenario": "",
    "question": "With 3:34 remaining in the third period, how are each of the following situations administered?",
    "correctAnswer": "a",
    "ruling": "(1) Player B1 is guarding Player A1 as Player A1 attempts an unsuccessful three-point shot.",
    "ruleReference": "RULE 10, SECTION XVII, RULE 14, SECTION III, RULE 14, SECTION VI, RULE 14, SECTION V, RULE 14, SECTION I",
    "casebookReference": "Case 146"
  },
  {
    "id": "casebook-2025-147",
    "case_number": 147,
    "casebook_category": "FLOPPING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 10, SECTION XVII",
      "RULE 12A, SECTION V"
    ],
    "question_text": "With 0:07 remaining in the fourth period, Player B1 sets a screen on Player A1. Following minimal contact by Player B1, Player A1 theatrically throws his arms into the air, spins around in an exaggerated manner inconsistent with the contact, and travels a considerable distance away from the play. The official signals that a flop has taken place but does not stop play as Team B continues its scoring opportunity. Player B2 misses a shot attempt as time expires with the score tied, 108-108. How is this handled?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "A non-unsportsmanlike technical foul shall be assessed to Player A1 for flopping.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "FLOPPING",
    "scenario": "",
    "question": "With 0:07 remaining in the fourth period, Player B1 sets a screen on Player A1. Following minimal contact by Player B1, Player A1 theatrically throws his arms into the air, spins around in an exaggerated manner inconsistent with the contact, and travels a considerable distance away from the play. The official signals that a flop has taken place but does not stop play as Team B continues its scoring opportunity. Player B2 misses a shot attempt as time expires with the score tied, 108-108. How is this handled?",
    "correctAnswer": "b",
    "ruling": "A non-unsportsmanlike technical foul shall be assessed to Player A1 for flopping.",
    "ruleReference": "RULE 10, SECTION XVII, RULE 12A, SECTION V",
    "casebookReference": "Case 147"
  },
  {
    "id": "casebook-2025-148",
    "case_number": 148,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "Player A1 is attempting a free throw and has already taken seven seconds in preparing to shoot. Because he needs additional time, he throws the ball to the official. How is this treated?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "If there is confusion of any kind (lining up, number of free throws, etc.), the official will accept the ball and return it to Player A1 for the free throw attempt.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 is attempting a free throw and has already taken seven seconds in preparing to shoot. Because he needs additional time, he throws the ball to the official. How is this treated?",
    "correctAnswer": "a",
    "ruling": "If there is confusion of any kind (lining up, number of free throws, etc.), the official will accept the ball and return it to Player A1 for the free throw attempt.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 148"
  },
  {
    "id": "casebook-2025-149",
    "case_number": 149,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "While attempting a free throw, Player A1 throws the ball extremely hard toward the basket in an attempt to deliberately miss the shot and gain possession. Is this legal?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "The ball must make contact with the basket ring and all free throw provisions must be observed for this to be a legal play.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "While attempting a free throw, Player A1 throws the ball extremely hard toward the basket in an attempt to deliberately miss the shot and gain possession. Is this legal?",
    "correctAnswer": "a",
    "ruling": "The ball must make contact with the basket ring and all free throw provisions must be observed for this to be a legal play.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 149"
  },
  {
    "id": "casebook-2025-150",
    "case_number": 150,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "During a free throw attempt when the ball is to remain in play, Player A1 is guilty of purposely faking a free throw attempt. Such action causes Players A2, A3, B1 and B2 to enter the free throw lane. What is the ruling?",
    "options": {
      "A": "Free throw counts; violation occurred after release",
      "B": "Free throw doesn't count; offensive lane violation",
      "C": "Re-shoot the free throw after the violation",
      "D": "Technical foul on the shooter for violation",
      "a": "Free throw counts; violation occurred after release",
      "b": "Free throw doesn't count; offensive lane violation",
      "c": "Re-shoot the free throw after the violation",
      "d": "Technical foul on the shooter for violation"
    },
    "correct_answer": "B",
    "explanation": "Violation by Player A1.",
    "distractor_rationale": {
      "A": "Offensive violations void the free throw attempt",
      "C": "No re-shoot; ball goes to opponent",
      "D": "Lane violations are not technical fouls"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "During a free throw attempt when the ball is to remain in play, Player A1 is guilty of purposely faking a free throw attempt. Such action causes Players A2, A3, B1 and B2 to enter the free throw lane. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Violation by Player A1.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 150"
  },
  {
    "id": "casebook-2025-151",
    "case_number": 151,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "Player A1 has been awarded a free throw following a successful field goal. Without releasing the ball, Player A1 loses firm control of the ball and stops his free throw attempt. Players A2 and B2 step into the free throw lane. What is the ruling?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "An official will blow his whistle immediately and retrieve the ball from Player A1.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 has been awarded a free throw following a successful field goal. Without releasing the ball, Player A1 loses firm control of the ball and stops his free throw attempt. Players A2 and B2 step into the free throw lane. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "An official will blow his whistle immediately and retrieve the ball from Player A1.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 151"
  },
  {
    "id": "casebook-2025-152",
    "case_number": 152,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12A, SECTION III"
    ],
    "question_text": "Following (1) a successful, (2) an unsuccessful free throw attempt by Player A1 which is to remain in play, it is discovered that Team B has only four players on the court. What is the correct ruling?",
    "options": {
      "A": "Free throw counts; violation occurred after release",
      "B": "Free throw doesn't count; offensive lane violation",
      "C": "Re-shoot the free throw after the violation",
      "D": "Technical foul on the shooter for violation",
      "a": "Free throw counts; violation occurred after release",
      "b": "Free throw doesn't count; offensive lane violation",
      "c": "Re-shoot the free throw after the violation",
      "d": "Technical foul on the shooter for violation"
    },
    "correct_answer": "B",
    "explanation": "(1) A non-unsportsmanlike technical foul is assessed Team B.",
    "distractor_rationale": {
      "A": "Offensive violations void the free throw attempt",
      "C": "No re-shoot; ball goes to opponent",
      "D": "Lane violations are not technical fouls"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Following (1) a successful, (2) an unsuccessful free throw attempt by Player A1 which is to remain in play, it is discovered that Team B has only four players on the court. What is the correct ruling?",
    "correctAnswer": "b",
    "ruling": "(1) A non-unsportsmanlike technical foul is assessed Team B.",
    "ruleReference": "RULE 12A, SECTION III",
    "casebookReference": "Case 152"
  },
  {
    "id": "casebook-2025-153",
    "case_number": 153,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "What is the rule covering the line-up of players on the foul lane prior to the attempt of a free throw?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "The two spaces nearest the basket must be occupied by opponents of the free throw shooter.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "What is the rule covering the line-up of players on the foul lane prior to the attempt of a free throw?",
    "correctAnswer": "a",
    "ruling": "The two spaces nearest the basket must be occupied by opponents of the free throw shooter.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 153"
  },
  {
    "id": "casebook-2025-154",
    "case_number": 154,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "Players B3 and B5 are on the lane line for Player A1\u2019s last free throw attempt. May they have their arms in front of Player A5 when the ball is released?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "No. Players on the lane lines may not extend themselves in front of an opponent until the ball is released on a free throw attempt.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Players B3 and B5 are on the lane line for Player A1\u2019s last free throw attempt. May they have their arms in front of Player A5 when the ball is released?",
    "correctAnswer": "a",
    "ruling": "No. Players on the lane lines may not extend themselves in front of an opponent until the ball is released on a free throw attempt.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 154"
  },
  {
    "id": "casebook-2025-155",
    "case_number": 155,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "After Player A2 receives the ball on a free throw attempt which will remain in play but prior to Player A2 attempting the free throw: (1) Player A1 violates the free throw lane provisions. (2) Player B1 violates the free throw lane provisions. (3) Players A1 and B1 violate the free throw lane provisions. (4) Player B3 moves from behind the three point line into the third lane space. What is the correct ruling?",
    "options": {
      "A": "Free throw counts; violation occurred after release",
      "B": "Free throw doesn't count; offensive lane violation",
      "C": "Re-shoot the free throw after the violation",
      "D": "Technical foul on the shooter for violation",
      "a": "Free throw counts; violation occurred after release",
      "b": "Free throw doesn't count; offensive lane violation",
      "c": "Re-shoot the free throw after the violation",
      "d": "Technical foul on the shooter for violation"
    },
    "correct_answer": "B",
    "explanation": "If an official suspends play before the free throw attempt is released, no violations can occur.",
    "distractor_rationale": {
      "A": "Offensive violations void the free throw attempt",
      "C": "No re-shoot; ball goes to opponent",
      "D": "Lane violations are not technical fouls"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "After Player A2 receives the ball on a free throw attempt which will remain in play but prior to Player A2 attempting the free throw: (1) Player A1 violates the free throw lane provisions. (2) Player B1 violates the free throw lane provisions. (3) Players A1 and B1 violate the free throw lane provisions. (4) Player B3 moves from behind the three point line into the third lane space. What is the correct ruling?",
    "correctAnswer": "b",
    "ruling": "If an official suspends play before the free throw attempt is released, no violations can occur.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 155"
  },
  {
    "id": "casebook-2025-156",
    "case_number": 156,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION XI"
    ],
    "question_text": "Player A1 is in his shooting motion on a two-point field goal attempt when his arms are clamped by Player B1. How many free throw attempts are awarded if Player A1 has not been able to release the ball?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "Two attempts. Player A1 is considered in the act of shooting.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 is in his shooting motion on a two-point field goal attempt when his arms are clamped by Player B1. How many free throw attempts are awarded if Player A1 has not been able to release the ball?",
    "correctAnswer": "a",
    "ruling": "Two attempts. Player A1 is considered in the act of shooting.",
    "ruleReference": "RULE 4, SECTION XI",
    "casebookReference": "Case 156"
  },
  {
    "id": "casebook-2025-157",
    "case_number": 157,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I",
      "RULE 6, SECTION V"
    ],
    "question_text": "Players A1 and B1 violate the free throw lane provisions and restrictions during Player A2\u2019s final free throw attempt. How is the play ruled if: (1) The free throw attempt is successful?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "(2) The free throw attempt is unsuccessful? In both situations (1) and (2) no points may be scored and a jump ball between any two opponents in the game takes place at the center circle.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Players A1 and B1 violate the free throw lane provisions and restrictions during Player A2\u2019s final free throw attempt. How is the play ruled if: (1) The free throw attempt is successful?",
    "correctAnswer": "a",
    "ruling": "(2) The free throw attempt is unsuccessful? In both situations (1) and (2) no points may be scored and a jump ball between any two opponents in the game takes place at the center circle.",
    "ruleReference": "RULE 9, SECTION I, RULE 6, SECTION V",
    "casebookReference": "Case 157"
  },
  {
    "id": "casebook-2025-158",
    "case_number": 158,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "On an attempted free throw by Player A1, Players A2 and A3 take a position next to the 3-point line. Players B2 and B3 wish to take a defensive position inside (toward the free throw lane line) them. What are the restrictions on the players not lined up on the free throw lane lines?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "All players not lined up on the free throw lane lines must remain behind the 3-point line above the free throw line extended until the ball is released by the shooter.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "On an attempted free throw by Player A1, Players A2 and A3 take a position next to the 3-point line. Players B2 and B3 wish to take a defensive position inside (toward the free throw lane line) them. What are the restrictions on the players not lined up on the free throw lane lines?",
    "correctAnswer": "a",
    "ruling": "All players not lined up on the free throw lane lines must remain behind the 3-point line above the free throw line extended until the ball is released by the shooter.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 158"
  },
  {
    "id": "casebook-2025-159",
    "case_number": 159,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "While attempting to block a field goal attempt by Player A1, Player B1 comes in contact with Player A1\u2019s shooting hand and the ball simultaneously. Is this a personal foul?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "No. The hand, or that part of the hand, is considered as part of the ball when it is in contact with the ball.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "While attempting to block a field goal attempt by Player A1, Player B1 comes in contact with Player A1\u2019s shooting hand and the ball simultaneously. Is this a personal foul?",
    "correctAnswer": "a",
    "ruling": "No. The hand, or that part of the hand, is considered as part of the ball when it is in contact with the ball.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 159"
  },
  {
    "id": "casebook-2025-160",
    "case_number": 160,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I",
      "RULE 6, SECTION III"
    ],
    "question_text": "As soon as Player A1 releases the ball for a free throw, Player B1 leaves the foul lane to secure a better position against his opponent. Is this a violation?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "No.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "As soon as Player A1 releases the ball for a free throw, Player B1 leaves the foul lane to secure a better position against his opponent. Is this a violation?",
    "correctAnswer": "a",
    "ruling": "No.",
    "ruleReference": "RULE 9, SECTION I, RULE 6, SECTION III",
    "casebookReference": "Case 160"
  },
  {
    "id": "casebook-2025-161",
    "case_number": 161,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "Player A1 scores a field goal and during the flight of the ball, Player B2 fouls Player A2. As Player A2 attempts his final free throw which will remain in play, the following occurs: (1) Player B2 catches or deflects the free throw attempt before it reaches the basket. (2) Player B2 touches the ball as it bounces on the rim. How are these situations handled?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "Situation (1): One point is awarded to Player A2.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 scores a field goal and during the flight of the ball, Player B2 fouls Player A2. As Player A2 attempts his final free throw which will remain in play, the following occurs: (1) Player B2 catches or deflects the free throw attempt before it reaches the basket. (2) Player B2 touches the ball as it bounces on the rim. How are these situations handled?",
    "correctAnswer": "a",
    "ruling": "Situation (1): One point is awarded to Player A2.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 161"
  },
  {
    "id": "casebook-2025-162",
    "case_number": 162,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12A, SECTION III"
    ],
    "question_text": "Player A1 is awarded two free throw attempts. Following his first attempt it is brought to the attention of the officials that Team A and/or Team B had only four players on the court. How is this administered?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "Since the ball will not be in play following the first free throw attempt, there is no penalty assessed.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 is awarded two free throw attempts. Following his first attempt it is brought to the attention of the officials that Team A and/or Team B had only four players on the court. How is this administered?",
    "correctAnswer": "a",
    "ruling": "Since the ball will not be in play following the first free throw attempt, there is no penalty assessed.",
    "ruleReference": "RULE 12A, SECTION III",
    "casebookReference": "Case 162"
  },
  {
    "id": "casebook-2025-163",
    "case_number": 163,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "During the first of multiple free throws, shooter A1 steps over the plane of the free throw line prior to the ball hitting the rim, backboard or it ends. Is this a violation?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "Yes, the shooter may not violate this provision on any free throw attempt.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "During the first of multiple free throws, shooter A1 steps over the plane of the free throw line prior to the ball hitting the rim, backboard or it ends. Is this a violation?",
    "correctAnswer": "a",
    "ruling": "Yes, the shooter may not violate this provision on any free throw attempt.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 163"
  },
  {
    "id": "casebook-2025-164",
    "case_number": 164,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "Player A1 is fouled on a successful field goal attempt. As he releases the ball on his free throw attempt, Player B2 is guilty of disconcertion and Player A2 enters the \u201ckey\u201d area too soon. What is the ruling?",
    "options": {
      "A": "Free throw counts; violation occurred after release",
      "B": "Free throw doesn't count; offensive lane violation",
      "C": "Re-shoot the free throw after the violation",
      "D": "Technical foul on the shooter for violation",
      "a": "Free throw counts; violation occurred after release",
      "b": "Free throw doesn't count; offensive lane violation",
      "c": "Re-shoot the free throw after the violation",
      "d": "Technical foul on the shooter for violation"
    },
    "correct_answer": "B",
    "explanation": "Double violation. Play will resume with a jump ball at the center circle between any two opponents in the game and no point can be scored.",
    "distractor_rationale": {
      "A": "Offensive violations void the free throw attempt",
      "C": "No re-shoot; ball goes to opponent",
      "D": "Lane violations are not technical fouls"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 is fouled on a successful field goal attempt. As he releases the ball on his free throw attempt, Player B2 is guilty of disconcertion and Player A2 enters the \u201ckey\u201d area too soon. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Double violation. Play will resume with a jump ball at the center circle between any two opponents in the game and no point can be scored.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 164"
  },
  {
    "id": "casebook-2025-165",
    "case_number": 165,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Player A1 is fouled in the act of shooting by Player B1 with :00.0 remaining on the game clock. The game is in the fourth period and the score is tied. What is the procedure?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "The officials must go to instant replay to see if the foul occurred with time remaining on the clock.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 is fouled in the act of shooting by Player B1 with :00.0 remaining on the game clock. The game is in the fourth period and the score is tied. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "The officials must go to instant replay to see if the foul occurred with time remaining on the clock.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 165"
  },
  {
    "id": "casebook-2025-166",
    "case_number": 166,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION I"
    ],
    "question_text": "Player A1 has been awarded two free throw attempts. On the first attempt, Team B is erroneously allowed to have four players on the lane line. Following the first free throw attempt, an official recognizes the violation and requests that one of the players vacate the third spot. He then allows Player A1 a substitute free throw. Is this correct?",
    "options": {
      "A": "Free throw counts; violation occurred after release",
      "B": "Free throw doesn't count; offensive lane violation",
      "C": "Re-shoot the free throw after the violation",
      "D": "Technical foul on the shooter for violation",
      "a": "Free throw counts; violation occurred after release",
      "b": "Free throw doesn't count; offensive lane violation",
      "c": "Re-shoot the free throw after the violation",
      "d": "Technical foul on the shooter for violation"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Offensive violations void the free throw attempt",
      "C": "No re-shoot; ball goes to opponent",
      "D": "Lane violations are not technical fouls"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 has been awarded two free throw attempts. On the first attempt, Team B is erroneously allowed to have four players on the lane line. Following the first free throw attempt, an official recognizes the violation and requests that one of the players vacate the third spot. He then allows Player A1 a substitute free throw. Is this correct?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 9, SECTION I",
    "casebookReference": "Case 166"
  },
  {
    "id": "casebook-2025-167",
    "case_number": 167,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "Team A is in the penalty situation. Player A1 has just attempted his final free throw. While the ball is in the air, a personal foul is called on Player B2 for fouling Player A2. How is this play administered if: (1) the free throw is successful?",
    "options": {
      "A": "Two free throws; shooting foul on unsuccessful attempt",
      "B": "One free throw; basket was made (and-one opportunity)",
      "C": "No free throws; team not in bonus situation",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws; shooting foul on unsuccessful attempt",
      "b": "One free throw; basket was made (and-one opportunity)",
      "c": "No free throws; team not in bonus situation",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "B",
    "explanation": "(2) the free throw is unsuccessful? (1) Player A2 will receive one free throw attempt (2) Player A2 will receive one free throw attempt plus one penalty free throw attempt.",
    "distractor_rationale": {
      "A": "Basket was successful; only one FT for and-one",
      "C": "Shooting fouls always result in free throws",
      "D": "This was not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Team A is in the penalty situation. Player A1 has just attempted his final free throw. While the ball is in the air, a personal foul is called on Player B2 for fouling Player A2. How is this play administered if: (1) the free throw is successful?",
    "correctAnswer": "b",
    "ruling": "(2) the free throw is unsuccessful? (1) Player A2 will receive one free throw attempt (2) Player A2 will receive one free throw attempt plus one penalty free throw attempt.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 167"
  },
  {
    "id": "casebook-2025-168",
    "case_number": 168,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION II"
    ],
    "question_text": "Player A1 is dribbling under the basket and behind the backboard when he is nudged out-of-bounds by Player B1. A foul is called on Player B1, and, as Player A1 is falling out-of-bounds, he attempts a field goal which must pass directly behind the backboard. How many free throw attempts are awarded if this is the first team foul on Team B?",
    "options": {
      "A": "Two free throws awarded to the fouled player",
      "B": "One free throw; successful basket plus and-one",
      "C": "No free throws; foul occurred before shooting motion",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws awarded to the fouled player",
      "b": "One free throw; successful basket plus and-one",
      "c": "No free throws; foul occurred before shooting motion",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "A",
    "explanation": "None.",
    "distractor_rationale": {
      "B": "Basket was not successful on this attempt",
      "C": "Foul was during shooting motion; FTs awarded",
      "D": "Not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 is dribbling under the basket and behind the backboard when he is nudged out-of-bounds by Player B1. A foul is called on Player B1, and, as Player A1 is falling out-of-bounds, he attempts a field goal which must pass directly behind the backboard. How many free throw attempts are awarded if this is the first team foul on Team B?",
    "correctAnswer": "a",
    "ruling": "None.",
    "ruleReference": "RULE 8, SECTION II",
    "casebookReference": "Case 168"
  },
  {
    "id": "casebook-2025-169",
    "case_number": 169,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION XI",
      "RULE 12B, SECTION I"
    ],
    "question_text": "Player A1 has secured possession of an unsuccessful field goal attempt. While still in the air, he is fouled by Player B1 as he attempts a field goal which is unsuccessful. How is the play administered if it is Team B\u2019s: (1) fourth team foul of the period, or (2) fifth team foul of the period?",
    "options": {
      "A": "One free throw; this is an and-one situation",
      "B": "Two free throws; shooting foul on unsuccessful attempt",
      "C": "No free throws; non-shooting foul with team not in bonus",
      "D": "Three free throws; foul occurred on three-point try",
      "a": "One free throw; this is an and-one situation",
      "b": "Two free throws; shooting foul on unsuccessful attempt",
      "c": "No free throws; non-shooting foul with team not in bonus",
      "d": "Three free throws; foul occurred on three-point try"
    },
    "correct_answer": "B",
    "explanation": "In both situations (1) and (2), Player A1 is awarded two free throw attempts.",
    "distractor_rationale": {
      "A": "Shot was unsuccessful; two FTs awarded",
      "C": "Foul occurred during shooting motion",
      "D": "Attempt was a two-point shot, not three"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 has secured possession of an unsuccessful field goal attempt. While still in the air, he is fouled by Player B1 as he attempts a field goal which is unsuccessful. How is the play administered if it is Team B\u2019s: (1) fourth team foul of the period, or (2) fifth team foul of the period?",
    "correctAnswer": "b",
    "ruling": "In both situations (1) and (2), Player A1 is awarded two free throw attempts.",
    "ruleReference": "RULE 4, SECTION XI, RULE 12B, SECTION I",
    "casebookReference": "Case 169"
  },
  {
    "id": "casebook-2025-170",
    "case_number": 170,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION X",
      "RULE 13, SECTION I"
    ],
    "question_text": "With 2:57 remaining in the fourth period, a personal foul is called on Player B2 against Player A2 prior to the ball being released by Player A1 on a throw-in. What is the ruling?",
    "options": {
      "A": "Two free throws; shooting foul on unsuccessful attempt",
      "B": "One free throw; basket was made (and-one opportunity)",
      "C": "No free throws; team not in bonus situation",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws; shooting foul on unsuccessful attempt",
      "b": "One free throw; basket was made (and-one opportunity)",
      "c": "No free throws; team not in bonus situation",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "B",
    "explanation": "This is an away-from-the-play foul and any player in the game on Team A will attempt one free throw, and Team A will inbound at the original throw-in spot with all privileges remaining.",
    "distractor_rationale": {
      "A": "Basket was successful; only one FT for and-one",
      "C": "Shooting fouls always result in free throws",
      "D": "This was not a three-point attempt"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "With 2:57 remaining in the fourth period, a personal foul is called on Player B2 against Player A2 prior to the ball being released by Player A1 on a throw-in. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "This is an away-from-the-play foul and any player in the game on Team A will attempt one free throw, and Team A will inbound at the original throw-in spot with all privileges remaining.",
    "ruleReference": "RULE 12B, SECTION X, RULE 13, SECTION I",
    "casebookReference": "Case 170"
  },
  {
    "id": "casebook-2025-171",
    "case_number": 171,
    "casebook_category": "FREE THROWS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "Player A1 is in the act of shooting a two-point field goal. Player B1 pushes Player A2 into Player A1 (the shooter) How is this play administered if Team B is in the penalty?",
    "options": {
      "A": "One free throw; this is an and-one situation",
      "B": "Two free throws; shooting foul on unsuccessful attempt",
      "C": "No free throws; non-shooting foul with team not in bonus",
      "D": "Three free throws; foul occurred on three-point try",
      "a": "One free throw; this is an and-one situation",
      "b": "Two free throws; shooting foul on unsuccessful attempt",
      "c": "No free throws; non-shooting foul with team not in bonus",
      "d": "Three free throws; foul occurred on three-point try"
    },
    "correct_answer": "B",
    "explanation": "A personal foul is assessed Player B1.",
    "distractor_rationale": {
      "A": "Shot was unsuccessful; two FTs awarded",
      "C": "Foul occurred during shooting motion",
      "D": "Attempt was a two-point shot, not three"
    },
    "category": "FREE THROWS",
    "scenario": "",
    "question": "Player A1 is in the act of shooting a two-point field goal. Player B1 pushes Player A2 into Player A1 (the shooter) How is this play administered if Team B is in the penalty?",
    "correctAnswer": "b",
    "ruling": "A personal foul is assessed Player B1.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 171"
  },
  {
    "id": "casebook-2025-172",
    "case_number": 172,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION VIII",
      "RULE 5, SECTION VIII"
    ],
    "question_text": "With :03.9 remaining on the clock in the third period, Players A1 and B1 are in a jump ball situation. Player A1 \u201csteals the tap\u201d and is called for the violation. The game clock now indicates :03.1 to play. How is this handled?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "The game clock is reset to :03.9. Time may not be reduced from the shot or game clock if the violation occurs before the ball is legally tapped.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "With :03.9 remaining on the clock in the third period, Players A1 and B1 are in a jump ball situation. Player A1 \u201csteals the tap\u201d and is called for the violation. The game clock now indicates :03.1 to play. How is this handled?",
    "correctAnswer": "b",
    "ruling": "The game clock is reset to :03.9. Time may not be reduced from the shot or game clock if the violation occurs before the ball is legally tapped.",
    "ruleReference": "RULE 2, SECTION VIII, RULE 5, SECTION VIII",
    "casebookReference": "Case 172"
  },
  {
    "id": "casebook-2025-173",
    "case_number": 173,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION VIII",
      "RULE 5, SECTION VIII"
    ],
    "question_text": "When does the game clock start on the following plays?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "(a) Jump ball.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "When does the game clock start on the following plays?",
    "correctAnswer": "b",
    "ruling": "(a) Jump ball.",
    "ruleReference": "RULE 2, SECTION VIII, RULE 5, SECTION VIII",
    "casebookReference": "Case 173"
  },
  {
    "id": "casebook-2025-174",
    "case_number": 174,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 5, SECTION V"
    ],
    "question_text": "What is the simplest way to state when the game clock should be stopped?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "The game clock stops: (1) Each time an official sounds his/her whistle, or (2) In the last minute of play in the first, second and third periods, if a field goal is successful, or (3) In the last two.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "What is the simplest way to state when the game clock should be stopped?",
    "correctAnswer": "b",
    "ruling": "The game clock stops: (1) Each time an official sounds his/her whistle, or (2) In the last minute of play in the first, second and third periods, if a field goal is successful, or (3) In the last two.",
    "ruleReference": "RULE 5, SECTION V",
    "casebookReference": "Case 174"
  },
  {
    "id": "casebook-2025-175",
    "case_number": 175,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI",
      "RULE 13, SECTION I"
    ],
    "question_text": "Team A has possession of the ball in its backcourt as the period is nearing its end, Player A1 attempts to pass to Player A2 and, with the ball in the air, the horn sounds to end the period. Player B1 then deflects the pass (after the horn has sounded) and the ball now goes into Team B\u2019s basket for a field goal. Is this a legal score by Team B?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "The officials must go to instant replay and the Replay Center Official will determine if the ball was deflected towards the basket before or after the period ended.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "Team A has possession of the ball in its backcourt as the period is nearing its end, Player A1 attempts to pass to Player A2 and, with the ball in the air, the horn sounds to end the period. Player B1 then deflects the pass (after the horn has sounded) and the ball now goes into Team B\u2019s basket for a field goal. Is this a legal score by Team B?",
    "correctAnswer": "b",
    "ruling": "The officials must go to instant replay and the Replay Center Official will determine if the ball was deflected towards the basket before or after the period ended.",
    "ruleReference": "RULE 4, SECTION XI, RULE 13, SECTION I",
    "casebookReference": "Case 175"
  },
  {
    "id": "casebook-2025-176",
    "case_number": 176,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "expert",
    "rule_references": [
      "RULE 4, SECTION XIII",
      "RULE 2, SECTION VIII",
      "RULE 5, SECTION V"
    ],
    "question_text": "Team A scores a field goal with 2:01 remaining in the fourth period. As the ball is passing through the net the game clock indicates 2:00. Is it proper for the official timer to stop the game clock?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "Yes. Anytime the ball is not actually in play during the last two minutes of the fourth period and last two minutes of overtime, the game clock shall be stopped.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "Team A scores a field goal with 2:01 remaining in the fourth period. As the ball is passing through the net the game clock indicates 2:00. Is it proper for the official timer to stop the game clock?",
    "correctAnswer": "b",
    "ruling": "Yes. Anytime the ball is not actually in play during the last two minutes of the fourth period and last two minutes of overtime, the game clock shall be stopped.",
    "ruleReference": "RULE 4, SECTION XIII, RULE 2, SECTION VIII, RULE 5, SECTION V",
    "casebookReference": "Case 176"
  },
  {
    "id": "casebook-2025-177",
    "case_number": 177,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION VIII",
      "RULE 5, SECTION V"
    ],
    "question_text": "Team A scores a field goal with 1:04 to play in the first period. Prior to the ball being inbounded, is it proper for the official timekeeper to stop the game clock at 1:00?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "Yes. Any time the ball is not actually in play during the last minute of the first, second and third periods, the game clock shall be stopped.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "Team A scores a field goal with 1:04 to play in the first period. Prior to the ball being inbounded, is it proper for the official timekeeper to stop the game clock at 1:00?",
    "correctAnswer": "b",
    "ruling": "Yes. Any time the ball is not actually in play during the last minute of the first, second and third periods, the game clock shall be stopped.",
    "ruleReference": "RULE 2, SECTION VIII, RULE 5, SECTION V",
    "casebookReference": "Case 177"
  },
  {
    "id": "casebook-2025-178",
    "case_number": 178,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION II"
    ],
    "question_text": "Player A1 scores a field goal with :31.0 remaining on the game clock in the period. Following this, Player B2 attempts a field goal with one second remaining on the shot clock, which does not touch the basket ring. Player A1 secures possession of the ball and immediately calls timeout with: 05.0 on the game clock. What is the procedure regarding the amount of time remaining?",
    "options": {
      "A": "Shot clock resets to 24 seconds automatically",
      "B": "Shot clock resets to 14 seconds for this situation",
      "C": "Shot clock continues from the current time shown",
      "D": "Shot clock is turned off for remainder of period",
      "a": "Shot clock resets to 24 seconds automatically",
      "b": "Shot clock resets to 14 seconds for this situation",
      "c": "Shot clock continues from the current time shown",
      "d": "Shot clock is turned off for remainder of period"
    },
    "correct_answer": "C",
    "explanation": "Officials shall direct the clock operator to reset the game clock to read :07.0.",
    "distractor_rationale": {
      "A": "Reset criteria not met for this situation",
      "B": "14-second reset requires specific conditions",
      "D": "Shot clock remains active"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "Player A1 scores a field goal with :31.0 remaining on the game clock in the period. Following this, Player B2 attempts a field goal with one second remaining on the shot clock, which does not touch the basket ring. Player A1 secures possession of the ball and immediately calls timeout with: 05.0 on the game clock. What is the procedure regarding the amount of time remaining?",
    "correctAnswer": "c",
    "ruling": "Officials shall direct the clock operator to reset the game clock to read :07.0.",
    "ruleReference": "RULE 7, SECTION II",
    "casebookReference": "Case 178"
  },
  {
    "id": "casebook-2025-179",
    "case_number": 179,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION II"
    ],
    "question_text": "Team B scores a successful field goal with :27.0 remaining in the period and still trails, 121-120. Team A advances the ball into the frontcourt and with :04.0 on the game clock, Player A1 throws the ball towards the ceiling. Before the ball returns to the floor, both the shot clock and the game clock reads zero. What is the ruling?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "Officials shall direct the official timer to reset the game clock to :03.0.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "Team B scores a successful field goal with :27.0 remaining in the period and still trails, 121-120. Team A advances the ball into the frontcourt and with :04.0 on the game clock, Player A1 throws the ball towards the ceiling. Before the ball returns to the floor, both the shot clock and the game clock reads zero. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Officials shall direct the official timer to reset the game clock to :03.0.",
    "ruleReference": "RULE 7, SECTION II",
    "casebookReference": "Case 179"
  },
  {
    "id": "casebook-2025-180",
    "case_number": 180,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION VIII",
      "RULE 5, SECTION VIII",
      "RULE 6, SECTION I"
    ],
    "question_text": "Following a successful field goal by Team A with :01.0 left in the fourth period, Team B calls a timeout and exercises its option to advance the ball. On the inbounds pass by Player B1, the ball is kicked by Player A1 prior to being touched by any other player on the court. What is the correct procedure with the game clock?",
    "options": {
      "A": "Clock starts when the ball is released by the thrower",
      "B": "Clock starts when the ball is legally touched inbounds",
      "C": "Clock starts when the official signals to begin play",
      "D": "Clock starts when the ball crosses the boundary line",
      "a": "Clock starts when the ball is released by the thrower",
      "b": "Clock starts when the ball is legally touched inbounds",
      "c": "Clock starts when the official signals to begin play",
      "d": "Clock starts when the ball crosses the boundary line"
    },
    "correct_answer": "B",
    "explanation": "The game clock shall remain at :01.0 since the clock does not start until the ball is legally touched by a player inbounds. Team B will retain possession at the original throw-in spot.",
    "distractor_rationale": {
      "A": "Clock starts on touch inbounds, not on release",
      "C": "Official's signal doesn't start game clock",
      "D": "Crossing boundary doesn't trigger clock start"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "Following a successful field goal by Team A with :01.0 left in the fourth period, Team B calls a timeout and exercises its option to advance the ball. On the inbounds pass by Player B1, the ball is kicked by Player A1 prior to being touched by any other player on the court. What is the correct procedure with the game clock?",
    "correctAnswer": "b",
    "ruling": "The game clock shall remain at :01.0 since the clock does not start until the ball is legally touched by a player inbounds. Team B will retain possession at the original throw-in spot.",
    "ruleReference": "RULE 2, SECTION VIII, RULE 5, SECTION VIII, RULE 6, SECTION I",
    "casebookReference": "Case 180"
  },
  {
    "id": "casebook-2025-181",
    "case_number": 181,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [],
    "question_text": "With :00.1 remaining in the fourth period, Player A1 is attempting a throw-in following a timeout. The ball is inbounded to Player A2 who catches the ball and attempts a field goal. What is the ruling on this field goal attempt?",
    "options": {
      "A": "Any legal field goal attempt is permitted with this time",
      "B": "Only a tip-in or tap toward basket is legal; no catch-and-shoot",
      "C": "No scoring play is possible with this little time",
      "D": "Alley-oop dunk is permitted since no catch is required",
      "a": "Any legal field goal attempt is permitted with this time",
      "b": "Only a tip-in or tap toward basket is legal; no catch-and-shoot",
      "c": "No scoring play is possible with this little time",
      "d": "Alley-oop dunk is permitted since no catch is required"
    },
    "correct_answer": "B",
    "explanation": "The official shall rule that the period has ended as soon as Player A2 has possession of the ball.",
    "distractor_rationale": {
      "A": "With 0.3 or less, only tips/taps are permitted",
      "C": "Tips and taps are possible with any time on clock",
      "D": "Alley-oop requires catching/controlling the ball"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "With :00.1 remaining in the fourth period, Player A1 is attempting a throw-in following a timeout. The ball is inbounded to Player A2 who catches the ball and attempts a field goal. What is the ruling on this field goal attempt?",
    "correctAnswer": "b",
    "ruling": "The official shall rule that the period has ended as soon as Player A2 has possession of the ball.",
    "ruleReference": "",
    "casebookReference": "Case 181"
  },
  {
    "id": "casebook-2025-182",
    "case_number": 182,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [],
    "question_text": "With :00.1 remaining in the third period, Player A2 tips a \u201chigh lob\u201d throw-in from Player A1 which results in a successful field goal. Shall the field goal be scored?",
    "options": {
      "A": "Play is legal if ball is released before buzzer sounds",
      "B": "Play is illegal; cannot catch and shoot in 0.3 seconds or less",
      "C": "Play is legal; time rules don't apply to made baskets",
      "D": "Play depends on referee's judgment of release timing",
      "a": "Play is legal if ball is released before buzzer sounds",
      "b": "Play is illegal; cannot catch and shoot in 0.3 seconds or less",
      "c": "Play is legal; time rules don't apply to made baskets",
      "d": "Play depends on referee's judgment of release timing"
    },
    "correct_answer": "B",
    "explanation": "If the \u201chigh lob\u201d is adjacent to the rim, Player A2 may tip or \u201cslam dunk\u201d the ball.",
    "distractor_rationale": {
      "A": "Catch-and-shoot physically impossible in 0.3 seconds",
      "C": "Time rules apply regardless of whether shot goes in",
      "D": "Rule is objective, not judgment-based"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "With :00.1 remaining in the third period, Player A2 tips a \u201chigh lob\u201d throw-in from Player A1 which results in a successful field goal. Shall the field goal be scored?",
    "correctAnswer": "b",
    "ruling": "If the \u201chigh lob\u201d is adjacent to the rim, Player A2 may tip or \u201cslam dunk\u201d the ball.",
    "ruleReference": "",
    "casebookReference": "Case 182"
  },
  {
    "id": "casebook-2025-183",
    "case_number": 183,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [],
    "question_text": "With :00.2 remaining in the overtime period, Player A2 secures possession of an unsuccessful free throw attempt. While still in mid-air he immediately requests a timeout. How is this play administered?",
    "options": {
      "A": "Play is legal if ball is released before buzzer sounds",
      "B": "Play is illegal; cannot catch and shoot in 0.3 seconds or less",
      "C": "Play is legal; time rules don't apply to made baskets",
      "D": "Play depends on referee's judgment of release timing",
      "a": "Play is legal if ball is released before buzzer sounds",
      "b": "Play is illegal; cannot catch and shoot in 0.3 seconds or less",
      "c": "Play is legal; time rules don't apply to made baskets",
      "d": "Play depends on referee's judgment of release timing"
    },
    "correct_answer": "B",
    "explanation": "The official shall rule that the period has ended.",
    "distractor_rationale": {
      "A": "Catch-and-shoot physically impossible in 0.3 seconds",
      "C": "Time rules apply regardless of whether shot goes in",
      "D": "Rule is objective, not judgment-based"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "With :00.2 remaining in the overtime period, Player A2 secures possession of an unsuccessful free throw attempt. While still in mid-air he immediately requests a timeout. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "The official shall rule that the period has ended.",
    "ruleReference": "",
    "casebookReference": "Case 183"
  },
  {
    "id": "casebook-2025-184",
    "case_number": 184,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION VIII",
      "RULE 6, SECTION I"
    ],
    "question_text": "Following a successful field goal by Team B with 1:50 remaining in the fourth period, the inbounds pass is kicked by Player B2. What is the correct procedure with the: (1) game clock, (2) shot clock, (3) spot of throw-in?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new team possession",
      "B": "Shot clock resets to 14 seconds per recent rule changes",
      "C": "Shot clock continues; change of possession doesn't reset",
      "D": "Shot clock turns off until ball is touched inbounds",
      "a": "Shot clock resets to 24 seconds for new team possession",
      "b": "Shot clock resets to 14 seconds per recent rule changes",
      "c": "Shot clock continues; change of possession doesn't reset",
      "d": "Shot clock turns off until ball is touched inbounds"
    },
    "correct_answer": "A",
    "explanation": "Situation (1): Game clock shall remain at 1:50, since the ball had not been legally touched.",
    "distractor_rationale": {
      "B": "Full 24-second reset applies for change of possession",
      "C": "New possession triggers full shot clock reset",
      "D": "Shot clock displays time during dead ball"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "Following a successful field goal by Team B with 1:50 remaining in the fourth period, the inbounds pass is kicked by Player B2. What is the correct procedure with the: (1) game clock, (2) shot clock, (3) spot of throw-in?",
    "correctAnswer": "a",
    "ruling": "Situation (1): Game clock shall remain at 1:50, since the ball had not been legally touched.",
    "ruleReference": "RULE 2, SECTION VIII, RULE 6, SECTION I",
    "casebookReference": "Case 184"
  },
  {
    "id": "casebook-2025-185",
    "case_number": 185,
    "casebook_category": "GAME CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION II"
    ],
    "question_text": "Player A2 dribbles the ball into his frontcourt, following a successful field goal attempt with :27.2 remaining on the game clock. Upon reaching the frontcourt, Player A2 requests a timeout with :23.0 on the game clock and 19 seconds on the shot clock. Are the officials correct in resetting the game clock at this time?",
    "options": {
      "A": "Shot clock resets to 24 seconds for this situation",
      "B": "Shot clock resets to 14 seconds per current rules",
      "C": "Shot clock continues; no reset is triggered here",
      "D": "Shot clock turns off until next possession change",
      "a": "Shot clock resets to 24 seconds for this situation",
      "b": "Shot clock resets to 14 seconds per current rules",
      "c": "Shot clock continues; no reset is triggered here",
      "d": "Shot clock turns off until next possession change"
    },
    "correct_answer": "C",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "No event occurred that triggers a reset",
      "B": "14-second reset requires specific criteria not met here",
      "D": "Shot clock continues running or resumes"
    },
    "category": "GAME CLOCK",
    "scenario": "",
    "question": "Player A2 dribbles the ball into his frontcourt, following a successful field goal attempt with :27.2 remaining on the game clock. Upon reaching the frontcourt, Player A2 requests a timeout with :23.0 on the game clock and 19 seconds on the shot clock. Are the officials correct in resetting the game clock at this time?",
    "correctAnswer": "c",
    "ruling": "No.",
    "ruleReference": "RULE 7, SECTION II",
    "casebookReference": "Case 185"
  },
  {
    "id": "casebook-2025-186",
    "case_number": 186,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "A throw-in enters the area above the basket cylinder. If any player interferes with the ball, is it considered a violation?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "A throw-in enters the area above the basket cylinder. If any player interferes with the ball, is it considered a violation?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 186"
  },
  {
    "id": "casebook-2025-187",
    "case_number": 187,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Both teams are rebounding at Team A\u2019s basket. Player B1 accidentally taps the ball into the cylinder area above the basket. At this point Player B2 bats the ball away while rebounding. Is this a violation?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "Yes. This is a goaltending violation. Although a field goal attempt was not the cause of the ball being in the cylinder area, neither team may touch the ball.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Both teams are rebounding at Team A\u2019s basket. Player B1 accidentally taps the ball into the cylinder area above the basket. At this point Player B2 bats the ball away while rebounding. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "Yes. This is a goaltending violation. Although a field goal attempt was not the cause of the ball being in the cylinder area, neither team may touch the ball.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 187"
  },
  {
    "id": "casebook-2025-188",
    "case_number": 188,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1 is on his downward motion about to dunk the ball. Player B1 blocks the attempt. Is this goaltending?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1 is on his downward motion about to dunk the ball. Player B1 blocks the attempt. Is this goaltending?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 188"
  },
  {
    "id": "casebook-2025-189",
    "case_number": 189,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "A player of Team B blocks a field goal attempt after the whistle has been sounded for a personal foul. Is this goaltending?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "No. A blocked shot by Team B after the whistle has sounded is part of a continuous defensive movement. So long as Player B does not violate the goaltending rule, it is a legal defensive play.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "A player of Team B blocks a field goal attempt after the whistle has been sounded for a personal foul. Is this goaltending?",
    "correctAnswer": "b",
    "ruling": "No. A blocked shot by Team B after the whistle has sounded is part of a continuous defensive movement. So long as Player B does not violate the goaltending rule, it is a legal defensive play.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 189"
  },
  {
    "id": "casebook-2025-190",
    "case_number": 190,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I",
      "RULE 4, SECTION XI"
    ],
    "question_text": "Player A1 has tapped a jump ball and it is now on its downward flight toward his basket and has a chance to score. Is either team allowed to interfere with the ball?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "No. Anytime a live ball is in flight from the playing court and has a chance to score, neither team is allowed to touch the ball.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1 has tapped a jump ball and it is now on its downward flight toward his basket and has a chance to score. Is either team allowed to interfere with the ball?",
    "correctAnswer": "b",
    "ruling": "No. Anytime a live ball is in flight from the playing court and has a chance to score, neither team is allowed to touch the ball.",
    "ruleReference": "RULE 11, SECTION I, RULE 4, SECTION XI",
    "casebookReference": "Case 190"
  },
  {
    "id": "casebook-2025-191",
    "case_number": 191,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "At 1:23 of the fourth period, Player A1 is fouled by Player B1 while in the act of shooting. Player B2 is called for goaltending but the official has doubt whether the ball started its downward motion. How is this handled?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "The officials will signal for an instant replay review and the Replay Center Official will determine the status of the ball.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "At 1:23 of the fourth period, Player A1 is fouled by Player B1 while in the act of shooting. Player B2 is called for goaltending but the official has doubt whether the ball started its downward motion. How is this handled?",
    "correctAnswer": "b",
    "ruling": "The officials will signal for an instant replay review and the Replay Center Official will determine the status of the ball.",
    "ruleReference": "RULE 11, SECTION I, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 191"
  },
  {
    "id": "casebook-2025-192",
    "case_number": 192,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1\u2019s field goal attempt is on its downward flight toward the basket ring. The officials ascertain that the ball will not touch the basket ring. Player B2 or Player A2 bats the ball away or secures possession. Is this a violation?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "A live ball from the playing court must have a chance to score for goal tending or basket interference to occur.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1\u2019s field goal attempt is on its downward flight toward the basket ring. The officials ascertain that the ball will not touch the basket ring. Player B2 or Player A2 bats the ball away or secures possession. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "A live ball from the playing court must have a chance to score for goal tending or basket interference to occur.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 192"
  },
  {
    "id": "casebook-2025-193",
    "case_number": 193,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1 is fouled in the act of shooting a two-pointer. The field goal attempt enters the cylinder area and Player A2 commits offensive basket interference. How many free throw attempts are awarded?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "Two. The violation nullifies the possibility of a successful field goal. Therefore, it is administered the same as any other unsuccessful field goal attempt.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1 is fouled in the act of shooting a two-pointer. The field goal attempt enters the cylinder area and Player A2 commits offensive basket interference. How many free throw attempts are awarded?",
    "correctAnswer": "b",
    "ruling": "Two. The violation nullifies the possibility of a successful field goal. Therefore, it is administered the same as any other unsuccessful field goal attempt.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 193"
  },
  {
    "id": "casebook-2025-194",
    "case_number": 194,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1 attempts a field goal that bounces off the basket ring and continues in play. Either immediately before or as the ball hits the basket ring, Player B1 makes contact with the net. Is this a goal tending violation?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1 attempts a field goal that bounces off the basket ring and continues in play. Either immediately before or as the ball hits the basket ring, Player B1 makes contact with the net. Is this a goal tending violation?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 194"
  },
  {
    "id": "casebook-2025-195",
    "case_number": 195,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player B2 is pushed by Player A2 on an unsuccessful two-point field goal attempt by Player A1. The contact causes Player B2 to interfere with the ball which is still in the cylinder. What is the ruling?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "Award two points to Team A for a goaltending violation. Player A2 is charged with a loose ball foul. Free throws may or may not be awarded depending on the penalty situation.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player B2 is pushed by Player A2 on an unsuccessful two-point field goal attempt by Player A1. The contact causes Player B2 to interfere with the ball which is still in the cylinder. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Award two points to Team A for a goaltending violation. Player A2 is charged with a loose ball foul. Free throws may or may not be awarded depending on the penalty situation.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 195"
  },
  {
    "id": "casebook-2025-196",
    "case_number": 196,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I",
      "RULE 5, SECTION III"
    ],
    "question_text": "Player A1\u2019s field goal attempt is on its downward flight toward the basket when time expires indicating the end of the period. After the horn has sounded, the ball is touched by: (1) Player A3, (2) Player B3. What is the ruling?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): The period ends when the ball is touched by an offensive player. Situation (2): The field goal shall be ruled successful.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1\u2019s field goal attempt is on its downward flight toward the basket when time expires indicating the end of the period. After the horn has sounded, the ball is touched by: (1) Player A3, (2) Player B3. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Situation (1): The period ends when the ball is touched by an offensive player. Situation (2): The field goal shall be ruled successful.",
    "ruleReference": "RULE 11, SECTION I, RULE 5, SECTION III",
    "casebookReference": "Case 196"
  },
  {
    "id": "casebook-2025-197",
    "case_number": 197,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION I",
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1\u2019s attempted \u201cslam dunk\u201d hits him on the head prior to clearing the net, causing the ball to return back up through the basket ring. What is the ruling?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "Player A1 shall be charged with offensive basket interference, and the ball shall be awarded to Team B at the free throw line extended.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1\u2019s attempted \u201cslam dunk\u201d hits him on the head prior to clearing the net, causing the ball to return back up through the basket ring. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Player A1 shall be charged with offensive basket interference, and the ball shall be awarded to Team B at the free throw line extended.",
    "ruleReference": "RULE 5, SECTION I, RULE 11, SECTION I",
    "casebookReference": "Case 197"
  },
  {
    "id": "casebook-2025-198",
    "case_number": 198,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1\u2019s field goal attempt is rolling on the basket ring and drops off the outside edge. What is the ruling if Player A2 or Player B2 touches the ball at this time?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "No violation. Since the ball has dropped off the outside edge of the basket ring, the field goal attempt has ended and any player may touch the ball.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1\u2019s field goal attempt is rolling on the basket ring and drops off the outside edge. What is the ruling if Player A2 or Player B2 touches the ball at this time?",
    "correctAnswer": "b",
    "ruling": "No violation. Since the ball has dropped off the outside edge of the basket ring, the field goal attempt has ended and any player may touch the ball.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 198"
  },
  {
    "id": "casebook-2025-199",
    "case_number": 199,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "The ball is rolling around the top or inside edge of the basket ring on a field goal/ free throw attempt by Player A1. The basket ring is contacted by: (1) Player B1, or (2) Player A2. What is the ruling?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): Goaltending has occurred.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "The ball is rolling around the top or inside edge of the basket ring on a field goal/ free throw attempt by Player A1. The basket ring is contacted by: (1) Player B1, or (2) Player A2. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Situation (1): Goaltending has occurred.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 199"
  },
  {
    "id": "casebook-2025-200",
    "case_number": 200,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12A, SECTION IV"
    ],
    "question_text": "Player B2 grasps the basket in an attempt to block Player A1\u2019s field goal attempt. However, the field goal attempt is blocked by Player B1, preventing Player B2 from making contact with the ball, Player A1 has the ball in his possession when Player B2 hangs on the basket ring. What is the ruling?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "A non-unsportsmanlike technical foul is assessed Player B2. The ball is awarded to Team A at the free throw line extended on either side of the court.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player B2 grasps the basket in an attempt to block Player A1\u2019s field goal attempt. However, the field goal attempt is blocked by Player B1, preventing Player B2 from making contact with the ball, Player A1 has the ball in his possession when Player B2 hangs on the basket ring. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "A non-unsportsmanlike technical foul is assessed Player B2. The ball is awarded to Team A at the free throw line extended on either side of the court.",
    "ruleReference": "RULE 12A, SECTION IV",
    "casebookReference": "Case 200"
  },
  {
    "id": "casebook-2025-201",
    "case_number": 201,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A5 attempts to rebound Player A1\u2019s unsuccessful basket and grabs the rim to prevent injury to another player. As he is hanging on the rim, Player A2 rebounds the ball and immediately shoots a successful basket. What is the ruling?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "This is offensive basket interference because Player A5 was hanging on the rim when the shot entered.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A5 attempts to rebound Player A1\u2019s unsuccessful basket and grabs the rim to prevent injury to another player. As he is hanging on the rim, Player A2 rebounds the ball and immediately shoots a successful basket. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "This is offensive basket interference because Player A5 was hanging on the rim when the shot entered.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 201"
  },
  {
    "id": "casebook-2025-202",
    "case_number": 202,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Defender B5 jumps on a ball fake and pulls the rim to an off-center position as he comes down. Player A5 goes up and releases his shot when the officials see the rim malfunctioned and did not return to a normal position. How is this play handled?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "Since Player B5 was responsible for the rim being down, goaltending should be the call.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Defender B5 jumps on a ball fake and pulls the rim to an off-center position as he comes down. Player A5 goes up and releases his shot when the officials see the rim malfunctioned and did not return to a normal position. How is this play handled?",
    "correctAnswer": "b",
    "ruling": "Since Player B5 was responsible for the rim being down, goaltending should be the call.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 202"
  },
  {
    "id": "casebook-2025-203",
    "case_number": 203,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1 attempts a dunk and the ball bounces off the back of the rim and straight up. Player A1 hangs on the rim to prevent injury and the ball comes down and swishes while he is still hanging on the rim. What is the procedure?",
    "options": {
      "A": "Legal block; ball was not in downward flight yet",
      "B": "Goaltending/basket interference; basket counts for shooting team",
      "C": "Offensive basket interference; basket is disallowed",
      "D": "Jump ball; incidental contact with ball near basket",
      "a": "Legal block; ball was not in downward flight yet",
      "b": "Goaltending/basket interference; basket counts for shooting team",
      "c": "Offensive basket interference; basket is disallowed",
      "d": "Jump ball; incidental contact with ball near basket"
    },
    "correct_answer": "B",
    "explanation": "This is basket interference.",
    "distractor_rationale": {
      "A": "Ball was in protected status when defender touched it",
      "C": "Defensive player made the illegal touch",
      "D": "Not a jump ball situation; clear violation"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1 attempts a dunk and the ball bounces off the back of the rim and straight up. Player A1 hangs on the rim to prevent injury and the ball comes down and swishes while he is still hanging on the rim. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "This is basket interference.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 203"
  },
  {
    "id": "casebook-2025-204",
    "case_number": 204,
    "casebook_category": "GOALTENDING (BASKET INTERFERENCE)",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1 attempts a dunk that bounces off the back of the rim and straight up. He hangs on the rim and bends it to an off center position. What is the ruling if the ball now passes through the basket?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "No points can be scored if the rim is in an off center position when the ball passes through.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "GOALTENDING (BASKET INTERFERENCE)",
    "scenario": "",
    "question": "Player A1 attempts a dunk that bounces off the back of the rim and straight up. He hangs on the rim and bends it to an off center position. What is the ruling if the ball now passes through the basket?",
    "correctAnswer": "b",
    "ruling": "No points can be scored if the rim is in an off center position when the ball passes through.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 204"
  },
  {
    "id": "casebook-2025-205",
    "case_number": 205,
    "casebook_category": "HOSTILE ACTS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "As the players from Team A walk toward their team bench during a timeout, Player A3 and a second-row assistant coach from Team B angrily exchange words and the second-row assistant coach from Team B shoves Player A3. After Player A3 regains his balance, he aggressively attempts to pursue the second-row assistant coach from Team B. Player A3 is eventually restrained by his teammates and other assistant coaches from Team B, but not before he is pushed in the back by the trainer from Team B. How is this situation administered?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "The officials will use instant replay to determine (1) the identity of all players, coaches, trainers, or team bench persons involved in the altercation and the action immediately prior to and.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "HOSTILE ACTS",
    "scenario": "",
    "question": "As the players from Team A walk toward their team bench during a timeout, Player A3 and a second-row assistant coach from Team B angrily exchange words and the second-row assistant coach from Team B shoves Player A3. After Player A3 regains his balance, he aggressively attempts to pursue the second-row assistant coach from Team B. Player A3 is eventually restrained by his teammates and other assistant coaches from Team B, but not before he is pushed in the back by the trainer from Team B. How is this situation administered?",
    "correctAnswer": "b",
    "ruling": "The officials will use instant replay to determine (1) the identity of all players, coaches, trainers, or team bench persons involved in the altercation and the action immediately prior to and.",
    "ruleReference": "RULE 13, SECTION II, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 205"
  },
  {
    "id": "casebook-2025-206",
    "case_number": 206,
    "casebook_category": "HOSTILE ACTS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "During a game at Team A's home arena, Player B3 ends up in the spectator stands after trying unsuccessfully to save the ball from going out-of-bounds. As Player B3 is in the spectator stands, Fan #1 holds out his cell phone close to Player B3 in an attempt to record the player on his cell phone camera. Player B3 responds by forcefully swiping the cell phone out of Fan #1's hand, which leads to unrest and negative reactions from Team B's fans. What is the correct ruling?",
    "options": {
      "A": "Technical foul assessed: one free throw plus possession",
      "B": "No violation: conduct was acceptable within rules",
      "C": "Warning only: first offense doesn't warrant penalty",
      "D": "Flagrant foul: contact was unnecessary or excessive",
      "a": "Technical foul assessed: one free throw plus possession",
      "b": "No violation: conduct was acceptable within rules",
      "c": "Warning only: first offense doesn't warrant penalty",
      "d": "Flagrant foul: contact was unnecessary or excessive"
    },
    "correct_answer": "A",
    "explanation": "",
    "distractor_rationale": {
      "B": "Conduct violated rules and must be penalized",
      "C": "Conduct warrants immediate penalty, not warning",
      "D": "No physical contact; technical is appropriate call"
    },
    "category": "HOSTILE ACTS",
    "scenario": "",
    "question": "During a game at Team A's home arena, Player B3 ends up in the spectator stands after trying unsuccessfully to save the ball from going out-of-bounds. As Player B3 is in the spectator stands, Fan #1 holds out his cell phone close to Player B3 in an attempt to record the player on his cell phone camera. Player B3 responds by forcefully swiping the cell phone out of Fan #1's hand, which leads to unrest and negative reactions from Team B's fans. What is the correct ruling?",
    "correctAnswer": "a",
    "ruling": "Instant replay shall be utilized if a player commits a hostile act (e.g., initiates physical contact of any type) against a spectator. In this case, the review is used to determine the level and nature of the player's involvement and the appropriate penalty to be assessed against the player. An unsportsmanlike technical foul may be assessed on Player B3 and, if the circumstances warrant, Player B3 could be ejected. Arena security should be notified to bring order to the fans in this section and determine whether any adverse action should be taken against any of Team B's fans. The entire incident must be reported to the League Office and recorded by the Crew Chief on the game report.",
    "ruleReference": "RULE 13, SECTION II, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 206"
  },
  {
    "id": "casebook-2025-207",
    "case_number": 207,
    "casebook_category": "INADVERTENT WHISTLE",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION V",
      "RULE 3, SECTION V",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "Player A1 secures the rebound of his field goal attempt which made contact with the basket ring. An official erroneously blows his whistle and calls a traveling violation, thinking that the ball had failed to touch the basket ring. Upon conferring with his fellow officials, he realizes that his whistle was sounded in error. What is the interpretation concerning a timeout or substitution by either team?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "The play shall be interpreted as an inadvertent whistle and Team A will retain possession on the sideline nearest the point of interruption.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "INADVERTENT WHISTLE",
    "scenario": "",
    "question": "Player A1 secures the rebound of his field goal attempt which made contact with the basket ring. An official erroneously blows his whistle and calls a traveling violation, thinking that the ball had failed to touch the basket ring. Upon conferring with his fellow officials, he realizes that his whistle was sounded in error. What is the interpretation concerning a timeout or substitution by either team?",
    "correctAnswer": "b",
    "ruling": "The play shall be interpreted as an inadvertent whistle and Team A will retain possession on the sideline nearest the point of interruption.",
    "ruleReference": "RULE 2, SECTION V, RULE 3, SECTION V, RULE 4, SECTION XIV",
    "casebookReference": "Case 207"
  },
  {
    "id": "casebook-2025-208",
    "case_number": 208,
    "casebook_category": "INADVERTENT WHISTLE",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 7, SECTION VI",
      "RULE 5, SECTION VIII",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "How should the following situation be administered?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "With 24.8 seconds remaining in the fourth quarter and Team A trailing Team B, 119-114, Player A1, in an effort to preserve time on the game clock, waited to grab a rebound following a missed free.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "INADVERTENT WHISTLE",
    "scenario": "",
    "question": "How should the following situation be administered?",
    "correctAnswer": "a",
    "ruling": "With 24.8 seconds remaining in the fourth quarter and Team A trailing Team B, 119-114, Player A1, in an effort to preserve time on the game clock, waited to grab a rebound following a missed free.",
    "ruleReference": "RULE 7, SECTION VI, RULE 5, SECTION VIII, RULE 4, SECTION XIV",
    "casebookReference": "Case 208"
  },
  {
    "id": "casebook-2025-209",
    "case_number": 209,
    "casebook_category": "INJURY/EJECTION OF PLAYERS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 6, SECTION VI"
    ],
    "question_text": "Player A1 is unable to participate in a jump ball due to an injury and/or ejection. What is the ruling?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "The opposing coach shall choose an eligible substitute jumper from Team A\u2019s bench. Player A1 may not re-enter the game.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "INJURY/EJECTION OF PLAYERS",
    "scenario": "",
    "question": "Player A1 is unable to participate in a jump ball due to an injury and/or ejection. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The opposing coach shall choose an eligible substitute jumper from Team A\u2019s bench. Player A1 may not re-enter the game.",
    "ruleReference": "RULE 6, SECTION VI",
    "casebookReference": "Case 209"
  },
  {
    "id": "casebook-2025-210",
    "case_number": 210,
    "casebook_category": "INJURY/EJECTION OF PLAYERS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION II"
    ],
    "question_text": "Player A1 is unable to attempt his free throw due to an injury and/or ejection. What rule is applied?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "The opposing coach shall choose an eligible substitute from Team A\u2019s bench to attempt the free throw(s).",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "INJURY/EJECTION OF PLAYERS",
    "scenario": "",
    "question": "Player A1 is unable to attempt his free throw due to an injury and/or ejection. What rule is applied?",
    "correctAnswer": "b",
    "ruling": "The opposing coach shall choose an eligible substitute from Team A\u2019s bench to attempt the free throw(s).",
    "ruleReference": "RULE 9, SECTION II",
    "casebookReference": "Case 210"
  },
  {
    "id": "casebook-2025-211",
    "case_number": 211,
    "casebook_category": "INJURY/EJECTION OF PLAYERS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 12B, SECTION IV"
    ],
    "question_text": "Player A1 is injured on a play where the official rules that Player B1 will be assessed a flagrant foul. Player A1 is unable to attempt his free throws. May Player B1: (1) Be ejected, and (2) Player A1 return to the game?",
    "options": {
      "A": "Player is eligible to participate in game",
      "B": "Player is ineligible; cannot participate currently",
      "C": "Technical foul for eligibility violation",
      "D": "Warning issued; player may continue",
      "a": "Player is eligible to participate in game",
      "b": "Player is ineligible; cannot participate currently",
      "c": "Technical foul for eligibility violation",
      "d": "Warning issued; player may continue"
    },
    "correct_answer": "A",
    "explanation": "(1) Yes, if the personal foul is a FF2 - Penalty (2).",
    "distractor_rationale": {
      "B": "Player meets all eligibility requirements",
      "C": "No eligibility violation occurred",
      "D": "No warning needed; player is eligible"
    },
    "category": "INJURY/EJECTION OF PLAYERS",
    "scenario": "",
    "question": "Player A1 is injured on a play where the official rules that Player B1 will be assessed a flagrant foul. Player A1 is unable to attempt his free throws. May Player B1: (1) Be ejected, and (2) Player A1 return to the game?",
    "correctAnswer": "a",
    "ruling": "(1) Yes, if the personal foul is a FF2 - Penalty (2).",
    "ruleReference": "RULE 9, SECTION II, RULE 12B, SECTION IV",
    "casebookReference": "Case 211"
  },
  {
    "id": "casebook-2025-212",
    "case_number": 212,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XI",
      "RULE 13, SECTION II"
    ],
    "question_text": "Player A1 is fouled just as he releases the ball on a field goal attempt and the horn sounds to end the period at approximately the same time. How is this administered?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "The officials will utilize instant replay and the Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1 is fouled just as he releases the ball on a field goal attempt and the horn sounds to end the period at approximately the same time. How is this administered?",
    "correctAnswer": "b",
    "ruling": "The officials will utilize instant replay and the Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "ruleReference": "RULE 4, SECTION XI, RULE 13, SECTION II",
    "casebookReference": "Case 212"
  },
  {
    "id": "casebook-2025-213",
    "case_number": 213,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Player A1\u2019s successful basket at 0:00 is ruled a three-pointer. May the officials use instant replay to change the basket to a two-pointer if his foot was on the line?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "Yes - Any successful basket with 0:00 on the game clock is a trigger and must be reviewed. Whether the basket was a two or three-pointer is a reviewable matter.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1\u2019s successful basket at 0:00 is ruled a three-pointer. May the officials use instant replay to change the basket to a two-pointer if his foot was on the line?",
    "correctAnswer": "b",
    "ruling": "Yes - Any successful basket with 0:00 on the game clock is a trigger and must be reviewed. Whether the basket was a two or three-pointer is a reviewable matter.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 213"
  },
  {
    "id": "casebook-2025-214",
    "case_number": 214,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION II"
    ],
    "question_text": "Player A1\u2019s successful 3-point basket is reviewed at the end of the first period and the Replay Center Official sees that his heel was on the sideline when he jumped to shoot. Should the basket count if it was released before 0:00?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1\u2019s successful 3-point basket is reviewed at the end of the first period and the Replay Center Official sees that his heel was on the sideline when he jumped to shoot. Should the basket count if it was released before 0:00?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 13, SECTION II",
    "casebookReference": "Case 214"
  },
  {
    "id": "casebook-2025-215",
    "case_number": 215,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1\u2019s throw-in with :00.2 on the game clock is caught and immediately shot into the basket. Is instant replay utilized?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "No. Instant replay is not utilized on any throw-in, jump ball or free throw that starts with :00.2 or :00.1 on the game clock or shot clock and is then followed by a successful basket.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1\u2019s throw-in with :00.2 on the game clock is caught and immediately shot into the basket. Is instant replay utilized?",
    "correctAnswer": "a",
    "ruling": "No. Instant replay is not utilized on any throw-in, jump ball or free throw that starts with :00.2 or :00.1 on the game clock or shot clock and is then followed by a successful basket.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 215"
  },
  {
    "id": "casebook-2025-216",
    "case_number": 216,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 12, SECTION V",
      "RULE 3, SECTION V"
    ],
    "question_text": "Following an instant replay review, a flagrant foul Penalty 2 is assessed against Player B1 for contact against Player A1. During the review the officials also observed that as Player A1 got up from the floor that he threw a punch at Player B2 which missed. How should this situation be administered?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Following an instant replay review, a flagrant foul Penalty 2 is assessed against Player B1 for contact against Player A1. During the review the officials also observed that as Player A1 got up from the floor that he threw a punch at Player B2 which missed. How should this situation be administered?",
    "correctAnswer": "a",
    "ruling": "A technical foul will be assessed against Player A1 and he will be ejected. Any of the four remaining players on Team B will attempt the one free throw for the technical foul. The coach of Team B will select the shooter from Team A's bench to attempt the 2 free throws for the flagrant foul.",
    "ruleReference": "RULE 9, SECTION II, RULE 12, SECTION V, RULE 3, SECTION V",
    "casebookReference": "Case 216"
  },
  {
    "id": "casebook-2025-217",
    "case_number": 217,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Following a hard foul by Player B1 on Player A1, they come face to face and have words. The officials are able to immediately separate them and double technical fouls are assessed. Should the officials use replay to review the technical fouls?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "No. As long as the players were separated in a reasonable amount of time and the officials do not see an altercation occur during the sequence, there is no trigger to use instant replay.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Following a hard foul by Player B1 on Player A1, they come face to face and have words. The officials are able to immediately separate them and double technical fouls are assessed. Should the officials use replay to review the technical fouls?",
    "correctAnswer": "b",
    "ruling": "No. As long as the players were separated in a reasonable amount of time and the officials do not see an altercation occur during the sequence, there is no trigger to use instant replay.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 217"
  },
  {
    "id": "casebook-2025-218",
    "case_number": 218,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Players A1 and B1 are engaged in a fight and numerous other players are pushing and shoving. What is the procedure?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "The officials will use instant replay to review the level of involvement of each player and assess the appropriate penalty to each player.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Players A1 and B1 are engaged in a fight and numerous other players are pushing and shoving. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "The officials will use instant replay to review the level of involvement of each player and assess the appropriate penalty to each player.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 218"
  },
  {
    "id": "casebook-2025-219",
    "case_number": 219,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Following a rebounding sequence, Player A5 punches Player B5 and is assessed a punching foul. However, unseen by the officials was an intentional elbow thrown by Player B5 which contacted Player A5 in the back of the head prior to the punch. How is this administered?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "The officials will use instant replay to review the punching foul and ejection.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Following a rebounding sequence, Player A5 punches Player B5 and is assessed a punching foul. However, unseen by the officials was an intentional elbow thrown by Player B5 which contacted Player A5 in the back of the head prior to the punch. How is this administered?",
    "correctAnswer": "a",
    "ruling": "The officials will use instant replay to review the punching foul and ejection.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 219"
  },
  {
    "id": "casebook-2025-220",
    "case_number": 220,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "As Team A advances the ball into its frontcourt during live play, the head coach for Team B inadvertently ventures outside the coaches box and enters the playing court as he provides instruction to his players. Player A4 takes a looping path as he runs up the court and appears to intentionally collide with Team B\u2019s head coach. The head coach for Team B is assessed a technical foul for committing a coaches box violation and entering the playing court. Can replay be utilized to determine whether Player A4 also should be penalized for intentionally colliding with Team B\u2019s head coach?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Yes, instant replay may be utilized if a player commits a hostile act against a coach.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "As Team A advances the ball into its frontcourt during live play, the head coach for Team B inadvertently ventures outside the coaches box and enters the playing court as he provides instruction to his players. Player A4 takes a looping path as he runs up the court and appears to intentionally collide with Team B\u2019s head coach. The head coach for Team B is assessed a technical foul for committing a coaches box violation and entering the playing court. Can replay be utilized to determine whether Player A4 also should be penalized for intentionally colliding with Team B\u2019s head coach?",
    "correctAnswer": "a",
    "ruling": "Yes, instant replay may be utilized if a player commits a hostile act against a coach.",
    "ruleReference": "RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 220"
  },
  {
    "id": "casebook-2025-221",
    "case_number": 221,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "During a review to confirm a successful basket was released prior to the end of a period, the Replay Center Official notices the game clock froze for approximately 0.3 seconds. What is the procedure?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "The Replay Center Official will digitally time how long the game clock froze, or time the play from the start until the ball is released, and make a ruling based on that information.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "During a review to confirm a successful basket was released prior to the end of a period, the Replay Center Official notices the game clock froze for approximately 0.3 seconds. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "The Replay Center Official will digitally time how long the game clock froze, or time the play from the start until the ball is released, and make a ruling based on that information.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 221"
  },
  {
    "id": "casebook-2025-222",
    "case_number": 222,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1\u2019s frontcourt pass is deflected into the backcourt and Player B1 is fouled from behind just as he retrieves the ball. The officials assess a common foul but are not reasonably certain whether Player B1 was fouled prior to or after controlling the ball. What is the procedure?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "The officials will use instant replay and the Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1\u2019s frontcourt pass is deflected into the backcourt and Player B1 is fouled from behind just as he retrieves the ball. The officials assess a common foul but are not reasonably certain whether Player B1 was fouled prior to or after controlling the ball. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "The officials will use instant replay and the Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 222"
  },
  {
    "id": "casebook-2025-223",
    "case_number": 223,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 throws a long pass to Player A2 who dribbles once and is fouled from behind by Player B2 as he gathers the ball to shoot. The officials assess a common foul but are not reasonably certain Player A2 gathered the ball prior to the foul. What is the ruling?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "The officials will use instant replay and the Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1 throws a long pass to Player A2 who dribbles once and is fouled from behind by Player B2 as he gathers the ball to shoot. The officials assess a common foul but are not reasonably certain Player A2 gathered the ball prior to the foul. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "The officials will use instant replay and the Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 223"
  },
  {
    "id": "casebook-2025-224",
    "case_number": 224,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 6, SECTION VI",
      "RULE 8, SECTION II",
      "RULE 6, SECTION V",
      "RULE 14, SECTION I"
    ],
    "question_text": "With 1:23 remaining in the fourth period, the ball goes out-of-bounds. The officials are not reasonably certain if the ball was last touched by Player A1 or B1. What is the procedure?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "Since the officials have doubt as to which player last touched the ball, they should signal for a jump ball which should be administered at the nearest jump circle between Players A1 and B1.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "With 1:23 remaining in the fourth period, the ball goes out-of-bounds. The officials are not reasonably certain if the ball was last touched by Player A1 or B1. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "Since the officials have doubt as to which player last touched the ball, they should signal for a jump ball which should be administered at the nearest jump circle between Players A1 and B1.",
    "ruleReference": "RULE 6, SECTION VI, RULE 8, SECTION II, RULE 6, SECTION V, RULE 14, SECTION I",
    "casebookReference": "Case 224"
  },
  {
    "id": "casebook-2025-225",
    "case_number": 225,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 is fouled on his field goal attempt just as the shot clock expires and the officials are not reasonably certain if the foul occurred prior to or after the expiration of the shot clock. What is the procedure?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "The officials will use instant replay and the Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1 is fouled on his field goal attempt just as the shot clock expires and the officials are not reasonably certain if the foul occurred prior to or after the expiration of the shot clock. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "The officials will use instant replay and the Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 225"
  },
  {
    "id": "casebook-2025-226",
    "case_number": 226,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Players A1 and B1 are assessed double technical fouls and the ensuing altercation does not immediately resolve itself. During the instant replay review, may either technical foul be upgraded or downgraded?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Yes\u2014either or both technical fouls may be upgraded or downgraded during the review.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Players A1 and B1 are assessed double technical fouls and the ensuing altercation does not immediately resolve itself. During the instant replay review, may either technical foul be upgraded or downgraded?",
    "correctAnswer": "a",
    "ruling": "Yes\u2014either or both technical fouls may be upgraded or downgraded during the review.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 226"
  },
  {
    "id": "casebook-2025-227",
    "case_number": 227,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Player B1 is assessed a common foul which will be reviewed to see if it meets the criteria for a flagrant foul and immediately following Player A3 is assessed a technical foul for being an escalator. During the review, it is observed that Player A3 was not an escalator but acted as a peacemaker. Can his technical foul be rescinded?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Yes, technical fouls may be upgraded or downgraded during instant replay review for a Player Altercation or flagrant foul.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player B1 is assessed a common foul which will be reviewed to see if it meets the criteria for a flagrant foul and immediately following Player A3 is assessed a technical foul for being an escalator. During the review, it is observed that Player A3 was not an escalator but acted as a peacemaker. Can his technical foul be rescinded?",
    "correctAnswer": "a",
    "ruling": "Yes, technical fouls may be upgraded or downgraded during instant replay review for a Player Altercation or flagrant foul.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 227"
  },
  {
    "id": "casebook-2025-228",
    "case_number": 228,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 inbounds the ball at 0.8 of the period and the game clock starts early when the timer thought the ball was deflected. Player A2 receives the ball and the game horn sounds as he immediately turns to shoot a successful basket. How is this handled?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "The on-court officials will signal for replay and the Replay Center Official will determine how much time ran off the clock prior to it being legally touched.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1 inbounds the ball at 0.8 of the period and the game clock starts early when the timer thought the ball was deflected. Player A2 receives the ball and the game horn sounds as he immediately turns to shoot a successful basket. How is this handled?",
    "correctAnswer": "b",
    "ruling": "The on-court officials will signal for replay and the Replay Center Official will determine how much time ran off the clock prior to it being legally touched.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 228"
  },
  {
    "id": "casebook-2025-229",
    "case_number": 229,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 inbounds the ball at 0.8 of the period. Player A2 receives the ball and after his second dribble on a drive to the basket the officials notice the clock just started. How is this handled if A2 scores a successful basket?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "The on-court officials will signal for replay and the Replay Center Official will use the digital clock in the Replay Center and time the play from touch to release.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1 inbounds the ball at 0.8 of the period. Player A2 receives the ball and after his second dribble on a drive to the basket the officials notice the clock just started. How is this handled if A2 scores a successful basket?",
    "correctAnswer": "b",
    "ruling": "The on-court officials will signal for replay and the Replay Center Official will use the digital clock in the Replay Center and time the play from touch to release.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 229"
  },
  {
    "id": "casebook-2025-230",
    "case_number": 230,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION VI",
      "RULE 13, SECTION I"
    ],
    "question_text": "A loose ball foul is assessed against Player B5 with 4:44 remaining in the first period and the officials are informed it is the 4th team foul. At 3:44, the officials are informed the loose ball foul on Player B5 was the 5th team foul and Team A did not score or attempt free throws on the following possession. The officials are not reasonably certain who was fouled at 4:44. May instant replay be used?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Yes, instant replay should be used to determine who was fouled at 4:44 by Player B5 and that player for Team A will attempt the 2 penalty free throws.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "A loose ball foul is assessed against Player B5 with 4:44 remaining in the first period and the officials are informed it is the 4th team foul. At 3:44, the officials are informed the loose ball foul on Player B5 was the 5th team foul and Team A did not score or attempt free throws on the following possession. The officials are not reasonably certain who was fouled at 4:44. May instant replay be used?",
    "correctAnswer": "a",
    "ruling": "Yes, instant replay should be used to determine who was fouled at 4:44 by Player B5 and that player for Team A will attempt the 2 penalty free throws.",
    "ruleReference": "RULE 2, SECTION VI, RULE 13, SECTION I",
    "casebookReference": "Case 230"
  },
  {
    "id": "casebook-2025-231",
    "case_number": 231,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION VI",
      "RULE 13, SECTION II"
    ],
    "question_text": "Player A1 attempts the first of 2 free throws and the coach of Team B complains that Player A3 should be the shooter. May the officials use instant replay to confirm who the shooter is?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "No, instant replay must be used prior to the release of the 1st free throw.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1 attempts the first of 2 free throws and the coach of Team B complains that Player A3 should be the shooter. May the officials use instant replay to confirm who the shooter is?",
    "correctAnswer": "b",
    "ruling": "No, instant replay must be used prior to the release of the 1st free throw.",
    "ruleReference": "RULE 2, SECTION VI, RULE 13, SECTION II",
    "casebookReference": "Case 231"
  },
  {
    "id": "casebook-2025-232",
    "case_number": 232,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "A technical foul is assessed Team B and Team A is granted a timeout. Following the timeout there is a doubt if Player A6 was in the game when the technical was assessed and eligible to attempt the free throw. May instant replay be utilized?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "No, the officials should go to the play-by-play to see which 5 players were in the game at the time of the technical foul and eligible to attempt the free throw.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "A technical foul is assessed Team B and Team A is granted a timeout. Following the timeout there is a doubt if Player A6 was in the game when the technical was assessed and eligible to attempt the free throw. May instant replay be utilized?",
    "correctAnswer": "a",
    "ruling": "No, the officials should go to the play-by-play to see which 5 players were in the game at the time of the technical foul and eligible to attempt the free throw.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 232"
  },
  {
    "id": "casebook-2025-233",
    "case_number": 233,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is reset from 1 to 14. Offensive Player A5 gets the rebound and immediately scores. How is this handled if any official has doubt as to whether the ball touched the rim on A1\u2019s shot?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "The officials must stop the play prior to Team B inbounding the ball and have the Replay Center Official review the play if there is doubt whether the ball hit the rim or not.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is reset from 1 to 14. Offensive Player A5 gets the rebound and immediately scores. How is this handled if any official has doubt as to whether the ball touched the rim on A1\u2019s shot?",
    "correctAnswer": "b",
    "ruling": "The officials must stop the play prior to Team B inbounding the ball and have the Replay Center Official review the play if there is doubt whether the ball hit the rim or not.",
    "ruleReference": "RULE 7, SECTION IV, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 233"
  },
  {
    "id": "casebook-2025-234",
    "case_number": 234,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is not reset. Offensive Player A5 gets the rebound and the shot clock horn sounds just prior to him dunking the ball and an official whistles a shot clock violation after the ball is released. How is this handled?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "If the officials have doubt whether Player A1\u2019s field goal attempt hit the rim or not, they must have the play reviewed prior to the inbounding of the ball.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is not reset. Offensive Player A5 gets the rebound and the shot clock horn sounds just prior to him dunking the ball and an official whistles a shot clock violation after the ball is released. How is this handled?",
    "correctAnswer": "b",
    "ruling": "If the officials have doubt whether Player A1\u2019s field goal attempt hit the rim or not, they must have the play reviewed prior to the inbounding of the ball.",
    "ruleReference": "RULE 7, SECTION IV, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 234"
  },
  {
    "id": "casebook-2025-235",
    "case_number": 235,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "expert",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Team A inbounds at 1:24 of overtime and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is reset from 1 to 14. Offensive Player A5 gets the rebound and is fouled on his immediate put back. How is this handled if the officials have doubt whether the ball touched the rim or not?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "If the officials have doubt whether the ball hit the rim or not, they must review the play prior to the first free throw being released.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Team A inbounds at 1:24 of overtime and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is reset from 1 to 14. Offensive Player A5 gets the rebound and is fouled on his immediate put back. How is this handled if the officials have doubt whether the ball touched the rim or not?",
    "correctAnswer": "b",
    "ruling": "If the officials have doubt whether the ball hit the rim or not, they must review the play prior to the first free throw being released.",
    "ruleReference": "RULE 7, SECTION IV, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 235"
  },
  {
    "id": "casebook-2025-236",
    "case_number": 236,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "expert",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Team A rebounds a missed field goal by A1 at 1:14 of overtime. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is not reset. Offensive Player A5 gets the rebound and is fouled hard on his immediate put back, which is successful, as the shot clock horn sounds. The officials have doubt whether the ball hit the rim or not. How is this handled?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "The officials will review the hard foul if they have doubt whether it met the criteria for a flagrant foul and ruled it a FF1.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Team A rebounds a missed field goal by A1 at 1:14 of overtime. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is not reset. Offensive Player A5 gets the rebound and is fouled hard on his immediate put back, which is successful, as the shot clock horn sounds. The officials have doubt whether the ball hit the rim or not. How is this handled?",
    "correctAnswer": "b",
    "ruling": "The officials will review the hard foul if they have doubt whether it met the criteria for a flagrant foul and ruled it a FF1.",
    "ruleReference": "RULE 7, SECTION IV, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 236"
  },
  {
    "id": "casebook-2025-237",
    "case_number": 237,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is reset from 3 to 14. Offensive Player A5 gets the rebound and passes the ball to A3 in the corner who attempts an immediate field goal which is successful. The officials are not reasonably certain whether Player A1\u2019s field goal touched the rim or not. How is this handled?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "Play must be stopped prior to the ball being inbound and on-court officials must signal for an instant replay review.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is reset from 3 to 14. Offensive Player A5 gets the rebound and passes the ball to A3 in the corner who attempts an immediate field goal which is successful. The officials are not reasonably certain whether Player A1\u2019s field goal touched the rim or not. How is this handled?",
    "correctAnswer": "b",
    "ruling": "Play must be stopped prior to the ball being inbound and on-court officials must signal for an instant replay review.",
    "ruleReference": "RULE 7, SECTION IV, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 237"
  },
  {
    "id": "casebook-2025-238",
    "case_number": 238,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "expert",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is not reset. As Players A5 and B5 battle for the loose ball, the official whistles a shot clock violation when the shot clock expires. At this point there is doubt whether Player A1\u2019s shot touched the rim or not. How is this handled?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "Play must be stopped prior to the ball being inbound and on-court officials must signal for an instant replay review.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is not reset. As Players A5 and B5 battle for the loose ball, the official whistles a shot clock violation when the shot clock expires. At this point there is doubt whether Player A1\u2019s shot touched the rim or not. How is this handled?",
    "correctAnswer": "b",
    "ruling": "Play must be stopped prior to the ball being inbound and on-court officials must signal for an instant replay review.",
    "ruleReference": "RULE 7, SECTION IV, RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 238"
  },
  {
    "id": "casebook-2025-239",
    "case_number": 239,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 4, SECTION IV",
      "RULE 13, SECTION I"
    ],
    "question_text": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is not reset. Offensive Player A5 gets the rebound and passes the ball to A3 in the corner who attempts an immediate unsuccessful field goal which is ruled late and a shot clock violation is assessed. The officials are not reasonably certain whether Player A1\u2019s field goal touched the rim or not. How is this handled?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "Play must be stopped prior to the ball being inbound and the on-court officials must signal for an instant replay review.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Team A inbounds at 1:24 of the fourth period and 24 on the shot clock. Player A1\u2019s field goal attempt comes very close to the rim and the shot clock is not reset. Offensive Player A5 gets the rebound and passes the ball to A3 in the corner who attempts an immediate unsuccessful field goal which is ruled late and a shot clock violation is assessed. The officials are not reasonably certain whether Player A1\u2019s field goal touched the rim or not. How is this handled?",
    "correctAnswer": "b",
    "ruling": "Play must be stopped prior to the ball being inbound and the on-court officials must signal for an instant replay review.",
    "ruleReference": "RULE 13, SECTION II, RULE 4, SECTION IV, RULE 13, SECTION I",
    "casebookReference": "Case 239"
  },
  {
    "id": "casebook-2025-240",
    "case_number": 240,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Player A1\u2019s throw-in with 1.3 on the game clock (any period) is immediately hit out-of-bounds by defender B1 and the game clock runs to 0:00. How is this handled as the officials know the clock did not stop correctly?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "Since the game clock improperly ran to 0:00 and time is being added, instant replay shall be used trumping the procedure of automatically deducting 0.3 from 1.3.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1\u2019s throw-in with 1.3 on the game clock (any period) is immediately hit out-of-bounds by defender B1 and the game clock runs to 0:00. How is this handled as the officials know the clock did not stop correctly?",
    "correctAnswer": "b",
    "ruling": "Since the game clock improperly ran to 0:00 and time is being added, instant replay shall be used trumping the procedure of automatically deducting 0.3 from 1.3.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 240"
  },
  {
    "id": "casebook-2025-241",
    "case_number": 241,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1\u2019s field goal attempt comes close to hitting the rim at 2:01 of the fourth period and the officials stop play when there is a pause in action at 1:58. May instant replay be used to see if the ball hit the rim or not at 2:01?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Yes, whenever the officials stop play and there is 2:00 or less in the fourth period, instant replay may be utilized to see if the ball touched the rim or not.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1\u2019s field goal attempt comes close to hitting the rim at 2:01 of the fourth period and the officials stop play when there is a pause in action at 1:58. May instant replay be used to see if the ball hit the rim or not at 2:01?",
    "correctAnswer": "a",
    "ruling": "Yes, whenever the officials stop play and there is 2:00 or less in the fourth period, instant replay may be utilized to see if the ball touched the rim or not.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 241"
  },
  {
    "id": "casebook-2025-242",
    "case_number": 242,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "expert",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 4, SECTION IV",
      "RULE 13, SECTION I"
    ],
    "question_text": "At 1:45 of overtime, goaltending is whistled on Player A1\u2019s layup for defender B1 touching the ball after it hit the backboard. Following the whistle, the official has doubt whether the ball was touched prior to or after hitting the backboard. What is the procedure?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Officials will signal for an instant replay review and the Replay Center Official will determine if the goaltending call was correctly assessed or if there is clear and conclusive visual evidence.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "At 1:45 of overtime, goaltending is whistled on Player A1\u2019s layup for defender B1 touching the ball after it hit the backboard. Following the whistle, the official has doubt whether the ball was touched prior to or after hitting the backboard. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "Officials will signal for an instant replay review and the Replay Center Official will determine if the goaltending call was correctly assessed or if there is clear and conclusive visual evidence.",
    "ruleReference": "RULE 13, SECTION II, RULE 4, SECTION IV, RULE 13, SECTION I",
    "casebookReference": "Case 242"
  },
  {
    "id": "casebook-2025-243",
    "case_number": 243,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "expert",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 4, SECTION IV",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1\u2019s field goal attempt at 2:01 of the fourth period is goaltended by B5 at 2:00 and the official has doubt whether the ball had started is downward flight. What is the procedure?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Since the call was made in the last two minutes of the fourth period, the officials will signal for an instant replay review and the Replay Center Official will determine if the goaltending call was.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player A1\u2019s field goal attempt at 2:01 of the fourth period is goaltended by B5 at 2:00 and the official has doubt whether the ball had started is downward flight. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "Since the call was made in the last two minutes of the fourth period, the officials will signal for an instant replay review and the Replay Center Official will determine if the goaltending call was.",
    "ruleReference": "RULE 13, SECTION II, RULE 4, SECTION IV, RULE 13, SECTION I",
    "casebookReference": "Case 243"
  },
  {
    "id": "casebook-2025-244",
    "case_number": 244,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "At 4:56 of the second period, the official has doubt whether a called goaltending violation was correctly assessed as the ball may have been blocked prior to touching the backboard. May instant replay be utilized?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "No, instant replay may only be utilized on a called goaltending in the last two minutes of the fourth period and the last two minutes of any overtime period.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "At 4:56 of the second period, the official has doubt whether a called goaltending violation was correctly assessed as the ball may have been blocked prior to touching the backboard. May instant replay be utilized?",
    "correctAnswer": "a",
    "ruling": "No, instant replay may only be utilized on a called goaltending in the last two minutes of the fourth period and the last two minutes of any overtime period.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 244"
  },
  {
    "id": "casebook-2025-245",
    "case_number": 245,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "At 1:23 of the fourth period, the officials rule a good blocked shot but are not certain if the ball may had started its downward flight. May instant replay be utilized?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "No, instant replay may only be utilized on goaltending violations which are assessed, not on no-calls.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "At 1:23 of the fourth period, the officials rule a good blocked shot but are not certain if the ball may had started its downward flight. May instant replay be utilized?",
    "correctAnswer": "a",
    "ruling": "No, instant replay may only be utilized on goaltending violations which are assessed, not on no-calls.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 245"
  },
  {
    "id": "casebook-2025-246",
    "case_number": 246,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "At 23.4 of the fourth period, Player A1\u2019s long field attempt is tapped in by A5 and the official whistles offensive basket interference but is not reasonably certain if the shot was short of the rim and legally tapped into the basket. May instant replay be utilized?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "Yes, since there is doubt whether the call on the court was correctly assessed and the game is in the last two minutes of the fourth period, replay should be utilized.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "At 23.4 of the fourth period, Player A1\u2019s long field attempt is tapped in by A5 and the official whistles offensive basket interference but is not reasonably certain if the shot was short of the rim and legally tapped into the basket. May instant replay be utilized?",
    "correctAnswer": "b",
    "ruling": "Yes, since there is doubt whether the call on the court was correctly assessed and the game is in the last two minutes of the fourth period, replay should be utilized.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 246"
  },
  {
    "id": "casebook-2025-247",
    "case_number": 247,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XV",
      "RULE 13, SECTION I"
    ],
    "question_text": "In the 4th period with 1:34 on the game clock, Player A2 shoots a runner. Defender B5 appears to touch the ball on its downward flight as he attempts to block Player A2\u2019s shot. Player A5 jumps, rebounds the missed runner and immediately starts his shooting motion. At 1:33, just prior to the release of the successful put back by Player A5, an official blows her/his whistle to call a goaltending violation. If officials have doubt concerning the called violation and use instant replay to determine whether a goaltending violation occurred or not, what is the procedure for adjudicating the play?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "(1) If the Replay Center Official determines that Defender B5 did touch the ball on its downward flight, the violation would be confirmed, two points would be added to Team A\u2019s score, the game clock.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "In the 4th period with 1:34 on the game clock, Player A2 shoots a runner. Defender B5 appears to touch the ball on its downward flight as he attempts to block Player A2\u2019s shot. Player A5 jumps, rebounds the missed runner and immediately starts his shooting motion. At 1:33, just prior to the release of the successful put back by Player A5, an official blows her/his whistle to call a goaltending violation. If officials have doubt concerning the called violation and use instant replay to determine whether a goaltending violation occurred or not, what is the procedure for adjudicating the play?",
    "correctAnswer": "a",
    "ruling": "(1) If the Replay Center Official determines that Defender B5 did touch the ball on its downward flight, the violation would be confirmed, two points would be added to Team A\u2019s score, the game clock.",
    "ruleReference": "RULE 4, SECTION XV, RULE 13, SECTION I",
    "casebookReference": "Case 247"
  },
  {
    "id": "casebook-2025-248",
    "case_number": 248,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "At 1:23 of the fourth period, the lead official calls a blocking foul on B3 because his heel is in the Restricted Area (RA). The slot official believes both feet are out and following a quick conference, doubt is created. What is the procedure?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "The officials will utilize instant replay since the foul is in the last two minutes of the fourth period and there is doubt whether the defender, B3, was inside the RA or outside.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "At 1:23 of the fourth period, the lead official calls a blocking foul on B3 because his heel is in the Restricted Area (RA). The slot official believes both feet are out and following a quick conference, doubt is created. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "The officials will utilize instant replay since the foul is in the last two minutes of the fourth period and there is doubt whether the defender, B3, was inside the RA or outside.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 248"
  },
  {
    "id": "casebook-2025-249",
    "case_number": 249,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "At 1:45 of overtime during a drive to the basket by A1, the lead official whistles a blocking foul on B3 but does not point to the Restricted Area. The slot official observes defender B3 with both feet outside the RA. What is the procedure?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Since the lead official did not point to the RA, he is calling a blocking foul for reasons other than the defender being inside the RA.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "At 1:45 of overtime during a drive to the basket by A1, the lead official whistles a blocking foul on B3 but does not point to the Restricted Area. The slot official observes defender B3 with both feet outside the RA. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "Since the lead official did not point to the RA, he is calling a blocking foul for reasons other than the defender being inside the RA.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 249"
  },
  {
    "id": "casebook-2025-250",
    "case_number": 250,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "At 1:35 of the second overtime during a drive to the basket by A1, the slot official whistles an offensive foul when A1 crashes into secondary defender B3. The lead official observes B3 inside the RA. What is the procedure?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "Following a quick conference, if there is any doubt whether defender B3 is inside or outside the RA, instant replay shall be utilized.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "At 1:35 of the second overtime during a drive to the basket by A1, the slot official whistles an offensive foul when A1 crashes into secondary defender B3. The lead official observes B3 inside the RA. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "Following a quick conference, if there is any doubt whether defender B3 is inside or outside the RA, instant replay shall be utilized.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 250"
  },
  {
    "id": "casebook-2025-251",
    "case_number": 251,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "At 3:45 of the third period, defender B3 fouls screener A3 as A1 attempts a successful basket. May instant replay be utilized if the officials are not reasonably certain if Player A1 had started his shooting motion prior to the foul occurring?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Yes, if the officials have doubt whether to score the basket or not because they are not reasonably certain whether the shooter started his shooting motion prior to the foul, instant replay should be.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "At 3:45 of the third period, defender B3 fouls screener A3 as A1 attempts a successful basket. May instant replay be utilized if the officials are not reasonably certain if Player A1 had started his shooting motion prior to the foul occurring?",
    "correctAnswer": "a",
    "ruling": "Yes, if the officials have doubt whether to score the basket or not because they are not reasonably certain whether the shooter started his shooting motion prior to the foul, instant replay should be.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 251"
  },
  {
    "id": "casebook-2025-252",
    "case_number": 252,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "An illegal screen is assessed against A5 very close to the time A1 releases the ball on a successful 2-point basket. May instant replay be utilized?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Yes.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "An illegal screen is assessed against A5 very close to the time A1 releases the ball on a successful 2-point basket. May instant replay be utilized?",
    "correctAnswer": "a",
    "ruling": "Yes.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 252"
  },
  {
    "id": "casebook-2025-253",
    "case_number": 253,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Defender B2 trips Player A2 during a throw-in by Team A at 6:54 of the first period. The officials are not reasonably certain if the ball was released prior to the foul and whether this should be an Away-From-the-Play foul. Can instant replay be used?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Yes \u2014 The Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Defender B2 trips Player A2 during a throw-in by Team A at 6:54 of the first period. The officials are not reasonably certain if the ball was released prior to the foul and whether this should be an Away-From-the-Play foul. Can instant replay be used?",
    "correctAnswer": "a",
    "ruling": "Yes \u2014 The Replay Center Official will ask the calling official to stop the video when the foul occurred.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 253"
  },
  {
    "id": "casebook-2025-254",
    "case_number": 254,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Player B1 fouls Player A1 very close to the buzzer at the end of the first period and the ruling on the court is a 2-shot foul. During instant replay review the officials observe the foul meets the criteria for a FF1. May the foul be upgraded?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Yes \u2014 during any instant replay review officials may rule on any unsportsmanlike acts or unnecessary contact not seen during play.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Player B1 fouls Player A1 very close to the buzzer at the end of the first period and the ruling on the court is a 2-shot foul. During instant replay review the officials observe the foul meets the criteria for a FF1. May the foul be upgraded?",
    "correctAnswer": "a",
    "ruling": "Yes \u2014 during any instant replay review officials may rule on any unsportsmanlike acts or unnecessary contact not seen during play.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 254"
  },
  {
    "id": "casebook-2025-255",
    "case_number": 255,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "During an instant replay review for a block/charge involving the Restricted Area, it is determined that defender B5 was outside the Restricted Area however he was still moving sideways after A1 started his upward shooting motion. How is this administered?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "The Replay Center Official will inform the calling official to assess Defender B5 with a blocking foul for not being in a legal guarding position.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "During an instant replay review for a block/charge involving the Restricted Area, it is determined that defender B5 was outside the Restricted Area however he was still moving sideways after A1 started his upward shooting motion. How is this administered?",
    "correctAnswer": "a",
    "ruling": "The Replay Center Official will inform the calling official to assess Defender B5 with a blocking foul for not being in a legal guarding position.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 255"
  },
  {
    "id": "casebook-2025-256",
    "case_number": 256,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "At 12.3 of the fourth period, defender B5 is assessed a blocking foul for being in the Restricted Area but the officials are not reasonably certain whether he was in or out. During the review they observe B5 was inside the RA but Player A1 initiated the contact with an unnatural extended knee. How is this administered?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "The Replay Center Official will inform the calling official to assess Player A1 with an offensive foul, unless the contact met the criteria to be ruled a Flagrant Foul by the on-court officials.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "At 12.3 of the fourth period, defender B5 is assessed a blocking foul for being in the Restricted Area but the officials are not reasonably certain whether he was in or out. During the review they observe B5 was inside the RA but Player A1 initiated the contact with an unnatural extended knee. How is this administered?",
    "correctAnswer": "a",
    "ruling": "The Replay Center Official will inform the calling official to assess Player A1 with an offensive foul, unless the contact met the criteria to be ruled a Flagrant Foul by the on-court officials.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 256"
  },
  {
    "id": "casebook-2025-257",
    "case_number": 257,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Following a timeout in the 1st period, Team A inbounds the ball at 2:34 and scores a successful 3-point basket at which time there is uncertainty by the officials if Team A had 6 players on the court. May instant replay be utilized and what is the penalty if confirmed Team A had 6 players?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Following a timeout in the 1st period, Team A inbounds the ball at 2:34 and scores a successful 3-point basket at which time there is uncertainty by the officials if Team A had 6 players on the court. May instant replay be utilized and what is the penalty if confirmed Team A had 6 players?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 257"
  },
  {
    "id": "casebook-2025-258",
    "case_number": 258,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "Following a traveling violation by B1 at 3:45-2nd, Team A inbounds and scores. Prior to the throw-in it is discovered Team B had 6 players on the court. What is the procedure?",
    "options": {
      "A": "Replay confirms the original call on the floor",
      "B": "Replay overturns call; adjustments made accordingly",
      "C": "Replay inconclusive; original call stands by default",
      "D": "Replay not permitted for this type of play",
      "a": "Replay confirms the original call on the floor",
      "b": "Replay overturns call; adjustments made accordingly",
      "c": "Replay inconclusive; original call stands by default",
      "d": "Replay not permitted for this type of play"
    },
    "correct_answer": "A",
    "explanation": "Any player in the game on Team A will shoot one free throw for the technical foul and the head coach of Team A will be given the option of continuing play from the point-of-interruption with Team B.",
    "distractor_rationale": {
      "B": "Evidence supports the original call",
      "C": "Evidence was conclusive enough for determination",
      "D": "This play type is subject to replay review"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Following a traveling violation by B1 at 3:45-2nd, Team A inbounds and scores. Prior to the throw-in it is discovered Team B had 6 players on the court. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "Any player in the game on Team A will shoot one free throw for the technical foul and the head coach of Team A will be given the option of continuing play from the point-of-interruption with Team B.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 258"
  },
  {
    "id": "casebook-2025-259",
    "case_number": 259,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "Who has the authority to trigger instant replay in each of the following situations? And what are the time constraints within which the review must take place?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "(1) With 4:32 remaining in the first period, Player A1 makes a jump-shot while in close proximity to the three-point line, and the officials are not reasonably certain whether Team A\u2019s successful.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Who has the authority to trigger instant replay in each of the following situations? And what are the time constraints within which the review must take place?",
    "correctAnswer": "b",
    "ruling": "(1) With 4:32 remaining in the first period, Player A1 makes a jump-shot while in close proximity to the three-point line, and the officials are not reasonably certain whether Team A\u2019s successful.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 259"
  },
  {
    "id": "casebook-2025-260",
    "case_number": 260,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION I",
      "RULE 13, SECTION II"
    ],
    "question_text": "With 17 seconds remaining in the fourth period, Player A3 is fouled by Player B3 as Player A3 attempts a jump-shot in close proximity to the three-point line, and the officials are not reasonably certain whether Player A3 was attempting a 2-point or 3-point field goal. Who has the authority to trigger instant replay in this situation? And what are the time constraints within which the review must take place?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "The Replay Center Official and the on-court game officials possess the authority to trigger instant replay in this situation, but the Replay Center Official possesses the first opportunity to do so.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "With 17 seconds remaining in the fourth period, Player A3 is fouled by Player B3 as Player A3 attempts a jump-shot in close proximity to the three-point line, and the officials are not reasonably certain whether Player A3 was attempting a 2-point or 3-point field goal. Who has the authority to trigger instant replay in this situation? And what are the time constraints within which the review must take place?",
    "correctAnswer": "b",
    "ruling": "The Replay Center Official and the on-court game officials possess the authority to trigger instant replay in this situation, but the Replay Center Official possesses the first opportunity to do so.",
    "ruleReference": "RULE 13, SECTION I, RULE 13, SECTION II",
    "casebookReference": "Case 260"
  },
  {
    "id": "casebook-2025-261",
    "case_number": 261,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION II"
    ],
    "question_text": "Who has the authority to trigger instant replay in each of the following situations? And what are the time constraints within which the review must take place?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "(1) With 5:15 remaining in the second period and the shot clock winding down, Player A2 made a three-point field goal, and it is reasonably uncertain whether the shot was released prior to expiration.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "Who has the authority to trigger instant replay in each of the following situations? And what are the time constraints within which the review must take place?",
    "correctAnswer": "b",
    "ruling": "(1) With 5:15 remaining in the second period and the shot clock winding down, Player A2 made a three-point field goal, and it is reasonably uncertain whether the shot was released prior to expiration.",
    "ruleReference": "RULE 13, SECTION II",
    "casebookReference": "Case 261"
  },
  {
    "id": "casebook-2025-262",
    "case_number": 262,
    "casebook_category": "INSTANT REPLAY",
    "parent_category": "instant-replay",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XIV",
      "RULE 13, SECTION I"
    ],
    "question_text": "How should the following situation be administered?",
    "options": {
      "A": "No replay: officials' on-court ruling is final",
      "B": "Mandatory replay trigger: officials must review this play",
      "C": "Coach's challenge required: not an automatic trigger",
      "D": "Replay at officials' discretion: may or may not review",
      "a": "No replay: officials' on-court ruling is final",
      "b": "Mandatory replay trigger: officials must review this play",
      "c": "Coach's challenge required: not an automatic trigger",
      "d": "Replay at officials' discretion: may or may not review"
    },
    "correct_answer": "B",
    "explanation": "With 0:58 remaining in the fourth quarter, Player B5 is called for goaltending on a two-point field goal attempt in the lane by Player A2.",
    "distractor_rationale": {
      "A": "This situation requires mandatory replay review",
      "C": "No challenge needed; this is automatic trigger",
      "D": "Not discretionary; review is required by rule"
    },
    "category": "INSTANT REPLAY",
    "scenario": "",
    "question": "How should the following situation be administered?",
    "correctAnswer": "b",
    "ruling": "With 0:58 remaining in the fourth quarter, Player B5 is called for goaltending on a two-point field goal attempt in the lane by Player A2.",
    "ruleReference": "RULE 4, SECTION XIV, RULE 13, SECTION I",
    "casebookReference": "Case 262"
  },
  {
    "id": "casebook-2025-263",
    "case_number": 263,
    "casebook_category": "JUMP BALLS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 10, SECTION V",
      "RULE 4, SECTION IV"
    ],
    "question_text": "During a jump ball, a personal foul is called against Player A1. What is the penalty?",
    "options": {
      "A": "Jump ball violation on one of the participants",
      "B": "Legal jump ball procedure was followed correctly",
      "C": "Re-toss required; ball wasn't tossed properly",
      "D": "Technical foul for improper jump ball conduct",
      "a": "Jump ball violation on one of the participants",
      "b": "Legal jump ball procedure was followed correctly",
      "c": "Re-toss required; ball wasn't tossed properly",
      "d": "Technical foul for improper jump ball conduct"
    },
    "correct_answer": "B",
    "explanation": "Player A1 is charged with a loose ball foul.",
    "distractor_rationale": {
      "A": "No violation occurred during the jump",
      "C": "Jump ball was properly executed",
      "D": "No unsportsmanlike conduct occurred"
    },
    "category": "JUMP BALLS",
    "scenario": "",
    "question": "During a jump ball, a personal foul is called against Player A1. What is the penalty?",
    "correctAnswer": "b",
    "ruling": "Player A1 is charged with a loose ball foul.",
    "ruleReference": "RULE 10, SECTION V, RULE 4, SECTION IV",
    "casebookReference": "Case 263"
  },
  {
    "id": "casebook-2025-264",
    "case_number": 264,
    "casebook_category": "JUMP BALLS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 6, SECTION VII"
    ],
    "question_text": "After legally tapping a jump ball, one of the jumpers gains possession of the ball before it has touched one of the other players, but after it has touched the floor. Is this a violation?",
    "options": {
      "A": "Jump ball violation on one of the participants",
      "B": "Legal jump ball procedure was followed correctly",
      "C": "Re-toss required; ball wasn't tossed properly",
      "D": "Technical foul for improper jump ball conduct",
      "a": "Jump ball violation on one of the participants",
      "b": "Legal jump ball procedure was followed correctly",
      "c": "Re-toss required; ball wasn't tossed properly",
      "d": "Technical foul for improper jump ball conduct"
    },
    "correct_answer": "B",
    "explanation": "No. The jump ball ended as soon as the ball touched the floor.",
    "distractor_rationale": {
      "A": "No violation occurred during the jump",
      "C": "Jump ball was properly executed",
      "D": "No unsportsmanlike conduct occurred"
    },
    "category": "JUMP BALLS",
    "scenario": "",
    "question": "After legally tapping a jump ball, one of the jumpers gains possession of the ball before it has touched one of the other players, but after it has touched the floor. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "No. The jump ball ended as soon as the ball touched the floor.",
    "ruleReference": "RULE 6, SECTION VII",
    "casebookReference": "Case 264"
  },
  {
    "id": "casebook-2025-265",
    "case_number": 265,
    "casebook_category": "JUMP BALLS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 4, SECTION VII",
      "RULE 6, SECTION VI"
    ],
    "question_text": "Player A1 jumps to attempt a field goal and Player B1 touches the ball causing him to come to the floor without having lost possession of the ball. Is this a traveling violation?",
    "options": {
      "A": "Legal jump ball procedure; play continues",
      "B": "Jump ball violation; ball awarded to opposing team",
      "C": "Re-toss required due to procedural error",
      "D": "Technical foul for jump ball interference",
      "a": "Legal jump ball procedure; play continues",
      "b": "Jump ball violation; ball awarded to opposing team",
      "c": "Re-toss required due to procedural error",
      "d": "Technical foul for jump ball interference"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Violation occurred during jump ball",
      "C": "Violation results in ball to opponent, not re-toss",
      "D": "Jump ball violations aren't technical fouls"
    },
    "category": "JUMP BALLS",
    "scenario": "",
    "question": "Player A1 jumps to attempt a field goal and Player B1 touches the ball causing him to come to the floor without having lost possession of the ball. Is this a traveling violation?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 4, SECTION VII, RULE 6, SECTION VI",
    "casebookReference": "Case 265"
  },
  {
    "id": "casebook-2025-266",
    "case_number": 266,
    "casebook_category": "JUMP BALLS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 6, SECTION VII"
    ],
    "question_text": "During a jump ball, Player A1 is in his proper half of the jumping circle and: (1) Is not facing his basket. Is this a violation?",
    "options": {
      "A": "Legal jump ball procedure; play continues",
      "B": "Jump ball violation; ball awarded to opposing team",
      "C": "Re-toss required due to procedural error",
      "D": "Technical foul for jump ball interference",
      "a": "Legal jump ball procedure; play continues",
      "b": "Jump ball violation; ball awarded to opposing team",
      "c": "Re-toss required due to procedural error",
      "d": "Technical foul for jump ball interference"
    },
    "correct_answer": "B",
    "explanation": "(2) Does not jump to tap the ball.",
    "distractor_rationale": {
      "A": "Violation occurred during jump ball",
      "C": "Violation results in ball to opponent, not re-toss",
      "D": "Jump ball violations aren't technical fouls"
    },
    "category": "JUMP BALLS",
    "scenario": "",
    "question": "During a jump ball, Player A1 is in his proper half of the jumping circle and: (1) Is not facing his basket. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "(2) Does not jump to tap the ball.",
    "ruleReference": "RULE 6, SECTION VII",
    "casebookReference": "Case 266"
  },
  {
    "id": "casebook-2025-267",
    "case_number": 267,
    "casebook_category": "JUMP BALLS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 6, SECTION V"
    ],
    "question_text": "A free throw or a field goal attempt comes to rest on the basket ring flange or becomes wedged between the basket ring and backboard. How is this play administered?",
    "options": {
      "A": "Jump ball violation on one of the participants",
      "B": "Legal jump ball procedure was followed correctly",
      "C": "Re-toss required; ball wasn't tossed properly",
      "D": "Technical foul for improper jump ball conduct",
      "a": "Jump ball violation on one of the participants",
      "b": "Legal jump ball procedure was followed correctly",
      "c": "Re-toss required; ball wasn't tossed properly",
      "d": "Technical foul for improper jump ball conduct"
    },
    "correct_answer": "B",
    "explanation": "The field goal or free throw is considered as unsuccessful. If there is not another free throw to be attempted a jump ball shall take place between any two players in the game at the center circle.",
    "distractor_rationale": {
      "A": "No violation occurred during the jump",
      "C": "Jump ball was properly executed",
      "D": "No unsportsmanlike conduct occurred"
    },
    "category": "JUMP BALLS",
    "scenario": "",
    "question": "A free throw or a field goal attempt comes to rest on the basket ring flange or becomes wedged between the basket ring and backboard. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "The field goal or free throw is considered as unsuccessful. If there is not another free throw to be attempted a jump ball shall take place between any two players in the game at the center circle.",
    "ruleReference": "RULE 6, SECTION V",
    "casebookReference": "Case 267"
  },
  {
    "id": "casebook-2025-268",
    "case_number": 268,
    "casebook_category": "JUMP BALLS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 10, SECTION V",
      "RULE 12B, SECTION VIII"
    ],
    "question_text": "Where is the ball put into play when a common personal foul or a violation occurs during a jump ball and a penalty situation does not exist?",
    "options": {
      "A": "Jump ball violation on one of the participants",
      "B": "Legal jump ball procedure was followed correctly",
      "C": "Re-toss required; ball wasn't tossed properly",
      "D": "Technical foul for improper jump ball conduct",
      "a": "Jump ball violation on one of the participants",
      "b": "Legal jump ball procedure was followed correctly",
      "c": "Re-toss required; ball wasn't tossed properly",
      "d": "Technical foul for improper jump ball conduct"
    },
    "correct_answer": "B",
    "explanation": "If the jump ball was administered at the center circle, the throw-in shall be administered at midcourt.",
    "distractor_rationale": {
      "A": "No violation occurred during the jump",
      "C": "Jump ball was properly executed",
      "D": "No unsportsmanlike conduct occurred"
    },
    "category": "JUMP BALLS",
    "scenario": "",
    "question": "Where is the ball put into play when a common personal foul or a violation occurs during a jump ball and a penalty situation does not exist?",
    "correctAnswer": "b",
    "ruling": "If the jump ball was administered at the center circle, the throw-in shall be administered at midcourt.",
    "ruleReference": "RULE 10, SECTION V, RULE 12B, SECTION VIII",
    "casebookReference": "Case 268"
  },
  {
    "id": "casebook-2025-269",
    "case_number": 269,
    "casebook_category": "JUMP BALLS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 6, SECTION VIII",
      "RULE 6, SECTION I"
    ],
    "question_text": "On the opening jump ball, Player B1 catches the ball prior to it touching the floor or one of the eight non-jumpers. Which team will be awarded the throw-in at the start of the second and third periods?",
    "options": {
      "A": "Legal jump ball procedure; play continues",
      "B": "Jump ball violation; ball awarded to opposing team",
      "C": "Re-toss required due to procedural error",
      "D": "Technical foul for jump ball interference",
      "a": "Legal jump ball procedure; play continues",
      "b": "Jump ball violation; ball awarded to opposing team",
      "c": "Re-toss required due to procedural error",
      "d": "Technical foul for jump ball interference"
    },
    "correct_answer": "B",
    "explanation": "Team B. Team A has first possession because of the jump ball violation by Player B1.",
    "distractor_rationale": {
      "A": "Violation occurred during jump ball",
      "C": "Violation results in ball to opponent, not re-toss",
      "D": "Jump ball violations aren't technical fouls"
    },
    "category": "JUMP BALLS",
    "scenario": "",
    "question": "On the opening jump ball, Player B1 catches the ball prior to it touching the floor or one of the eight non-jumpers. Which team will be awarded the throw-in at the start of the second and third periods?",
    "correctAnswer": "b",
    "ruling": "Team B. Team A has first possession because of the jump ball violation by Player B1.",
    "ruleReference": "RULE 6, SECTION VIII, RULE 6, SECTION I",
    "casebookReference": "Case 269"
  },
  {
    "id": "casebook-2025-270",
    "case_number": 270,
    "casebook_category": "JUMP BALLS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION VIII",
      "RULE 2, SECTION VI"
    ],
    "question_text": "A jump ball is administered at the free throw circle with the jumpers facing the wrong direction. After being legally tapped, the ball is touched by two nonjumpers and goes out-of-bounds near the midcourt line. The officials are unable to determine who last touched the ball. How is this play administered?",
    "options": {
      "A": "Jump ball violation on one of the participants",
      "B": "Legal jump ball procedure was followed correctly",
      "C": "Re-toss required; ball wasn't tossed properly",
      "D": "Technical foul for improper jump ball conduct",
      "a": "Jump ball violation on one of the participants",
      "b": "Legal jump ball procedure was followed correctly",
      "c": "Re-toss required; ball wasn't tossed properly",
      "d": "Technical foul for improper jump ball conduct"
    },
    "correct_answer": "B",
    "explanation": "The original jump ball will be readministered at the free throw circle with the original players facing the correct direction.",
    "distractor_rationale": {
      "A": "No violation occurred during the jump",
      "C": "Jump ball was properly executed",
      "D": "No unsportsmanlike conduct occurred"
    },
    "category": "JUMP BALLS",
    "scenario": "",
    "question": "A jump ball is administered at the free throw circle with the jumpers facing the wrong direction. After being legally tapped, the ball is touched by two nonjumpers and goes out-of-bounds near the midcourt line. The officials are unable to determine who last touched the ball. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "The original jump ball will be readministered at the free throw circle with the original players facing the correct direction.",
    "ruleReference": "RULE 2, SECTION VIII, RULE 2, SECTION VI",
    "casebookReference": "Case 270"
  },
  {
    "id": "casebook-2025-271",
    "case_number": 271,
    "casebook_category": "LOOSE BALL FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION VIII",
      "RULE 4, SECTION IV"
    ],
    "question_text": "While rebounding an unsuccessful field goal attempt, Player A1 is fouled by Player B1. It is the: (1) first team foul, or (2) fifth team foul, or (3) second team foul in the last two minutes of the period or overtime. What is the ruling?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "(1) Player B1 is charged with a personal foul and Team B with a team foul.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "LOOSE BALL FOULS",
    "scenario": "",
    "question": "While rebounding an unsuccessful field goal attempt, Player A1 is fouled by Player B1. It is the: (1) first team foul, or (2) fifth team foul, or (3) second team foul in the last two minutes of the period or overtime. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "(1) Player B1 is charged with a personal foul and Team B with a team foul.",
    "ruleReference": "RULE 12B, SECTION VIII, RULE 4, SECTION IV",
    "casebookReference": "Case 271"
  },
  {
    "id": "casebook-2025-272",
    "case_number": 272,
    "casebook_category": "LOOSE BALL FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION VIII",
      "RULE 4, SECTION IV"
    ],
    "question_text": "After Player B1 bats the ball away he is fouled by Player A1, while the ball is loose. It is the: (1) first team foul, or (2) fifth team foul, or (3) second team foul in the last two minutes of the period or overtime. What is the ruling?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Situation (1): Player A1 is charged with a personal foul and Team A with a team foul.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "LOOSE BALL FOULS",
    "scenario": "",
    "question": "After Player B1 bats the ball away he is fouled by Player A1, while the ball is loose. It is the: (1) first team foul, or (2) fifth team foul, or (3) second team foul in the last two minutes of the period or overtime. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "Situation (1): Player A1 is charged with a personal foul and Team A with a team foul.",
    "ruleReference": "RULE 12B, SECTION VIII, RULE 4, SECTION IV",
    "casebookReference": "Case 272"
  },
  {
    "id": "casebook-2025-273",
    "case_number": 273,
    "casebook_category": "LOOSE BALL FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VIII"
    ],
    "question_text": "With 2:39 remaining in the first period, Player A2 is fouled by Player B2 after Player A1\u2019s free throw attempt has been released. It is the fourth team foul of the period and the free throw attempt is: (1) successful, or (2) unsuccessful. How is the play administered?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Situation (1): Player A2 is awarded one free throw attempt.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "LOOSE BALL FOULS",
    "scenario": "",
    "question": "With 2:39 remaining in the first period, Player A2 is fouled by Player B2 after Player A1\u2019s free throw attempt has been released. It is the fourth team foul of the period and the free throw attempt is: (1) successful, or (2) unsuccessful. How is the play administered?",
    "correctAnswer": "a",
    "ruling": "Situation (1): Player A2 is awarded one free throw attempt.",
    "ruleReference": "RULE 12B, SECTION VIII",
    "casebookReference": "Case 273"
  },
  {
    "id": "casebook-2025-274",
    "case_number": 274,
    "casebook_category": "LOOSE BALL FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VIII",
      "RULE 6, SECTION I"
    ],
    "question_text": "With 4:49 remaining in the fourth period, Player B2 is fouled by Player A2 after Player A1\u2019s free throw attempt has been released. It is the third team foul of the period and the free throw attempt is: (1) successful, or (2) unsuccessful. How is the play administered?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Situation (1): This is a loose ball foul and Team B is awarded the ball out-of-bounds on the baseline as after any score, since a penalty situation does not exist.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "LOOSE BALL FOULS",
    "scenario": "",
    "question": "With 4:49 remaining in the fourth period, Player B2 is fouled by Player A2 after Player A1\u2019s free throw attempt has been released. It is the third team foul of the period and the free throw attempt is: (1) successful, or (2) unsuccessful. How is the play administered?",
    "correctAnswer": "a",
    "ruling": "Situation (1): This is a loose ball foul and Team B is awarded the ball out-of-bounds on the baseline as after any score, since a penalty situation does not exist.",
    "ruleReference": "RULE 12B, SECTION VIII, RULE 6, SECTION I",
    "casebookReference": "Case 274"
  },
  {
    "id": "casebook-2025-275",
    "case_number": 275,
    "casebook_category": "LOOSE BALL FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "Following an unsuccessful field goal attempt by Player A1, Player A2 pushes Player A3 into Player B3, causing him to lose control of the ball. What is the ruling?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "A loose ball foul is called on Player A3 as he made illegal contact with the opposing player.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "LOOSE BALL FOULS",
    "scenario": "",
    "question": "Following an unsuccessful field goal attempt by Player A1, Player A2 pushes Player A3 into Player B3, causing him to lose control of the ball. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "A loose ball foul is called on Player A3 as he made illegal contact with the opposing player.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 275"
  },
  {
    "id": "casebook-2025-276",
    "case_number": 276,
    "casebook_category": "LOOSE BALL FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VIII"
    ],
    "question_text": "While rebounding at his own basket, Player A1 tips the ball into his basket immediately before, during or after he commits a loose ball foul. What is the procedure?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Player A1 is charged with a personal foul and Team A with a team foul.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "LOOSE BALL FOULS",
    "scenario": "",
    "question": "While rebounding at his own basket, Player A1 tips the ball into his basket immediately before, during or after he commits a loose ball foul. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "Player A1 is charged with a personal foul and Team A with a team foul.",
    "ruleReference": "RULE 12B, SECTION VIII",
    "casebookReference": "Case 276"
  },
  {
    "id": "casebook-2025-277",
    "case_number": 277,
    "casebook_category": "LOOSE BALL FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VIII"
    ],
    "question_text": "Player A1 is on the floor attempting to secure a loose ball. Player B1 jumps on top of Player A1 in an attempt to reach the ball. Is this legal?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "No.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "LOOSE BALL FOULS",
    "scenario": "",
    "question": "Player A1 is on the floor attempting to secure a loose ball. Player B1 jumps on top of Player A1 in an attempt to reach the ball. Is this legal?",
    "correctAnswer": "a",
    "ruling": "No.",
    "ruleReference": "RULE 12B, SECTION VIII",
    "casebookReference": "Case 277"
  },
  {
    "id": "casebook-2025-278",
    "case_number": 278,
    "casebook_category": "OFFENSIVE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "Player A1 fakes a field goal attempt causing Player B1 to leave his feet in an attempt to block his shot. While Player B1 is still in the air and in a vertical position above his original spot on the court, Player A1 moves into Player B1\u2019s vertical plane. When Player B1 returns to the court, contact is made with Player A1. Is this a personal foul against Player B1?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "No.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "OFFENSIVE FOULS",
    "scenario": "",
    "question": "Player A1 fakes a field goal attempt causing Player B1 to leave his feet in an attempt to block his shot. While Player B1 is still in the air and in a vertical position above his original spot on the court, Player A1 moves into Player B1\u2019s vertical plane. When Player B1 returns to the court, contact is made with Player A1. Is this a personal foul against Player B1?",
    "correctAnswer": "a",
    "ruling": "No.",
    "ruleReference": "",
    "casebookReference": "Case 278"
  },
  {
    "id": "casebook-2025-279",
    "case_number": 279,
    "casebook_category": "OFFENSIVE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "While dribbling the ball, Player A1 notices that Player B1 is advancing from the rear. Player A1 changes his direction so that Player B1 runs into him. On whom is the personal foul called? Why?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "An offensive foul is called on Player A1.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "OFFENSIVE FOULS",
    "scenario": "",
    "question": "While dribbling the ball, Player A1 notices that Player B1 is advancing from the rear. Player A1 changes his direction so that Player B1 runs into him. On whom is the personal foul called? Why?",
    "correctAnswer": "a",
    "ruling": "An offensive foul is called on Player A1.",
    "ruleReference": "",
    "casebookReference": "Case 279"
  },
  {
    "id": "casebook-2025-280",
    "case_number": 280,
    "casebook_category": "OFFENSIVE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [],
    "question_text": "Player B1 is guarding Player A1 in a normal position with his arms extended upward to prevent a shot. In his attempt to shoot, Player A1 causes contact with Player B1\u2019s arms which are still extended upward. (1) Is this a personal foul against Player B1?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "(2) Is this a personal foul against Player A1?",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "OFFENSIVE FOULS",
    "scenario": "",
    "question": "Player B1 is guarding Player A1 in a normal position with his arms extended upward to prevent a shot. In his attempt to shoot, Player A1 causes contact with Player B1\u2019s arms which are still extended upward. (1) Is this a personal foul against Player B1?",
    "correctAnswer": "a",
    "ruling": "(2) Is this a personal foul against Player A1?",
    "ruleReference": "",
    "casebookReference": "Case 280"
  },
  {
    "id": "casebook-2025-281",
    "case_number": 281,
    "casebook_category": "OFFENSIVE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION III"
    ],
    "question_text": "Player A1 has set a legal screen on Player B1. In an attempt to determine his position on the court, Player B1 touches or feels for Player A1 (the screener). Player A1 now slaps away Player B1\u2019s hands or forearm. Is this legal or illegal?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Illegal. Player A1 will normally be given a warning to stop this sort of action. If he persists and the contact with Player B1 is anything but incidental, an offensive foul has occurred.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "OFFENSIVE FOULS",
    "scenario": "",
    "question": "Player A1 has set a legal screen on Player B1. In an attempt to determine his position on the court, Player B1 touches or feels for Player A1 (the screener). Player A1 now slaps away Player B1\u2019s hands or forearm. Is this legal or illegal?",
    "correctAnswer": "a",
    "ruling": "Illegal. Player A1 will normally be given a warning to stop this sort of action. If he persists and the contact with Player B1 is anything but incidental, an offensive foul has occurred.",
    "ruleReference": "RULE 12B, SECTION III",
    "casebookReference": "Case 281"
  },
  {
    "id": "casebook-2025-282",
    "case_number": 282,
    "casebook_category": "OFFENSIVE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VII",
      "RULE 4, SECTION XVI",
      "RULE 4, SECTION IV"
    ],
    "question_text": "Player A1 has possession of the ball. As he attempts to pass to Player A2, a personal foul is called on Player A3. What type of foul has occurred?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Offensive foul.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "OFFENSIVE FOULS",
    "scenario": "",
    "question": "Player A1 has possession of the ball. As he attempts to pass to Player A2, a personal foul is called on Player A3. What type of foul has occurred?",
    "correctAnswer": "a",
    "ruling": "Offensive foul.",
    "ruleReference": "RULE 12B, SECTION VII, RULE 4, SECTION XVI, RULE 4, SECTION IV",
    "casebookReference": "Case 282"
  },
  {
    "id": "casebook-2025-283",
    "case_number": 283,
    "casebook_category": "OFFENSIVE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VII",
      "RULE 4, SECTION IV"
    ],
    "question_text": "Player A1 has a \u201c2 on 1\u201d advantage in his frontcourt and the play is approaching the free throw line. Player B1 has taken a legal defensive position and is knocked down by Player A1 after a pass to Player A2. What is the ruling?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "An offensive foul shall be assessed Player A1. The officials should make certain that Player B1 does not flop on the play or that it is not incidental contact which occurs.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "OFFENSIVE FOULS",
    "scenario": "",
    "question": "Player A1 has a \u201c2 on 1\u201d advantage in his frontcourt and the play is approaching the free throw line. Player B1 has taken a legal defensive position and is knocked down by Player A1 after a pass to Player A2. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "An offensive foul shall be assessed Player A1. The officials should make certain that Player B1 does not flop on the play or that it is not incidental contact which occurs.",
    "ruleReference": "RULE 12B, SECTION VII, RULE 4, SECTION IV",
    "casebookReference": "Case 283"
  },
  {
    "id": "casebook-2025-284",
    "case_number": 284,
    "casebook_category": "OFFENSIVE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 13, SECTION I"
    ],
    "question_text": "With 1:46 remaining in the fourth period, contact occurs between Player A1, as he engages in an upward shooting motion, and Player B1. Player B1 is located inside the restricted area \u2013 he is not in a legal guarding position outside the restricted area prior to Player A1\u2019s upward shooting motion. However, the contact is initiated when Player A1 extends his left leg in an unnatural movement and contacts Player B1. What is the ruling?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "An offensive foul shall be assessed against any player who initiates contact in a non-basketball manner such as leading with a foot or an unnatural extended knee.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "OFFENSIVE FOULS",
    "scenario": "",
    "question": "With 1:46 remaining in the fourth period, contact occurs between Player A1, as he engages in an upward shooting motion, and Player B1. Player B1 is located inside the restricted area \u2013 he is not in a legal guarding position outside the restricted area prior to Player A1\u2019s upward shooting motion. However, the contact is initiated when Player A1 extends his left leg in an unnatural movement and contacts Player B1. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "An offensive foul shall be assessed against any player who initiates contact in a non-basketball manner such as leading with a foot or an unnatural extended knee.",
    "ruleReference": "RULE 13, SECTION I",
    "casebookReference": "Case 284"
  },
  {
    "id": "casebook-2025-285",
    "case_number": 285,
    "casebook_category": "OFFENSIVE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VII",
      "RULE 4, SECTION IV"
    ],
    "question_text": "Offensive Player A1 pump fakes a 3-point field goal attempt and Defender B1 clearly jumps/runs to the side of A1 and would not make any contact. Player A1 jumps sideways and initiates contact with Defender B1. How is this handled?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Since Defender B1 was not going to contact Player A1, a foul cannot be called on him assuming he did not reach over and hit his opponent.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "OFFENSIVE FOULS",
    "scenario": "",
    "question": "Offensive Player A1 pump fakes a 3-point field goal attempt and Defender B1 clearly jumps/runs to the side of A1 and would not make any contact. Player A1 jumps sideways and initiates contact with Defender B1. How is this handled?",
    "correctAnswer": "a",
    "ruling": "Since Defender B1 was not going to contact Player A1, a foul cannot be called on him assuming he did not reach over and hit his opponent.",
    "ruleReference": "RULE 12B, SECTION VII, RULE 4, SECTION IV",
    "casebookReference": "Case 285"
  },
  {
    "id": "casebook-2025-286",
    "case_number": 286,
    "casebook_category": "OFFENSIVE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VII",
      "RULE 4, SECTION IV"
    ],
    "question_text": "Offensive Player A1 pump fakes Defender B1 on the perimeter. B1 jumps towards A1 and lands prior to contact when A1 naturally jumps forward. Is this an offensive foul?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "If Defender B1 lands and his forward movement stops, an offensive foul should be assessed if the contact initiated by A1 is more than incidental.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "OFFENSIVE FOULS",
    "scenario": "",
    "question": "Offensive Player A1 pump fakes Defender B1 on the perimeter. B1 jumps towards A1 and lands prior to contact when A1 naturally jumps forward. Is this an offensive foul?",
    "correctAnswer": "a",
    "ruling": "If Defender B1 lands and his forward movement stops, an offensive foul should be assessed if the contact initiated by A1 is more than incidental.",
    "ruleReference": "RULE 12B, SECTION VII, RULE 4, SECTION IV",
    "casebookReference": "Case 286"
  },
  {
    "id": "casebook-2025-287",
    "case_number": 287,
    "casebook_category": "OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 8, SECTION II"
    ],
    "question_text": "Player A1 has possession of the ball in his frontcourt. In an attempt to pass the ball to Player A2, the ball strikes an official who is standing out-of-bounds. What is the ruling?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "Violation by Player A1.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "OFFICIALS",
    "scenario": "",
    "question": "Player A1 has possession of the ball in his frontcourt. In an attempt to pass the ball to Player A2, the ball strikes an official who is standing out-of-bounds. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "Violation by Player A1.",
    "ruleReference": "RULE 8, SECTION II",
    "casebookReference": "Case 287"
  },
  {
    "id": "casebook-2025-288",
    "case_number": 288,
    "casebook_category": "OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 4, SECTION VI",
      "RULE 10, SECTION IX"
    ],
    "question_text": "As Player A1 is passing the ball from his backcourt to Player A2 in his frontcourt, the ball touches an official who is positioned in the frontcourt and goes into the backcourt. What happens if: (1) Player B2 obtains possession, or (2) Player A3 obtains possession?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "Situation (1): Ball remains in play.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "OFFICIALS",
    "scenario": "",
    "question": "As Player A1 is passing the ball from his backcourt to Player A2 in his frontcourt, the ball touches an official who is positioned in the frontcourt and goes into the backcourt. What happens if: (1) Player B2 obtains possession, or (2) Player A3 obtains possession?",
    "correctAnswer": "a",
    "ruling": "Situation (1): Ball remains in play.",
    "ruleReference": "RULE 4, SECTION VI, RULE 10, SECTION IX",
    "casebookReference": "Case 288"
  },
  {
    "id": "casebook-2025-289",
    "case_number": 289,
    "casebook_category": "OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 8, SECTION III"
    ],
    "question_text": "Following a successful field goal by Team B, Player A1 attempts a throw-in to Player A2. The pass hits an official who is: (1) standing out-of-bounds, or (2) standing in-bounds. What is the ruling?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "Situation (1): Violation.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "OFFICIALS",
    "scenario": "",
    "question": "Following a successful field goal by Team B, Player A1 attempts a throw-in to Player A2. The pass hits an official who is: (1) standing out-of-bounds, or (2) standing in-bounds. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "Situation (1): Violation.",
    "ruleReference": "RULE 8, SECTION III",
    "casebookReference": "Case 289"
  },
  {
    "id": "casebook-2025-290",
    "case_number": 290,
    "casebook_category": "OPTION TO ADVANCE THE BALL",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "With 1:51 remaining in the fourth period, Player A1 is called for a traveling violation in his frontcourt. Following a timeout by Team A, does Team B have the option of putting the ball into play at the 28\u2019 hash mark?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "No. Team B must be charged with the timeout for the option to be available.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "OPTION TO ADVANCE THE BALL",
    "scenario": "",
    "question": "With 1:51 remaining in the fourth period, Player A1 is called for a traveling violation in his frontcourt. Following a timeout by Team A, does Team B have the option of putting the ball into play at the 28\u2019 hash mark?",
    "correctAnswer": "b",
    "ruling": "No. Team B must be charged with the timeout for the option to be available.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 290"
  },
  {
    "id": "casebook-2025-291",
    "case_number": 291,
    "casebook_category": "OPTION TO ADVANCE THE BALL",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 4, SECTION VI",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "With :44.8 remaining in the fourth period and the ball in Team A\u2019s backcourt, Player B1 causes the ball to go out-of-bounds with 17 seconds remaining on the shot clock. Team A is granted a timeout and, upon resumption of play, wishes to exercise its option to move the ball to the 28\u2019 hash mark. (1) Is this option allowed?",
    "options": {
      "A": "Throw-in from baseline under the basket only",
      "B": "Throw-in from sideline nearest the foul location",
      "C": "Option to advance ball to frontcourt at 28-foot mark",
      "D": "Throw-in from midcourt line only",
      "a": "Throw-in from baseline under the basket only",
      "b": "Throw-in from sideline nearest the foul location",
      "c": "Option to advance ball to frontcourt at 28-foot mark",
      "d": "Throw-in from midcourt line only"
    },
    "correct_answer": "C",
    "explanation": "(2) \u0007What is the \u201cmagic number\u201d if the ball is advanced and then inbounded into backcourt? (1) Yes. (2) The \u201cmagic number\u201d is 8.",
    "distractor_rationale": {
      "A": "Advancement option allows throw-in at 28-foot mark",
      "B": "Can advance further than nearest sideline spot",
      "D": "28-foot mark is the correct advancement spot"
    },
    "category": "OPTION TO ADVANCE THE BALL",
    "scenario": "",
    "question": "With :44.8 remaining in the fourth period and the ball in Team A\u2019s backcourt, Player B1 causes the ball to go out-of-bounds with 17 seconds remaining on the shot clock. Team A is granted a timeout and, upon resumption of play, wishes to exercise its option to move the ball to the 28\u2019 hash mark. (1) Is this option allowed?",
    "correctAnswer": "c",
    "ruling": "(2) \u0007What is the \u201cmagic number\u201d if the ball is advanced and then inbounded into backcourt? (1) Yes. (2) The \u201cmagic number\u201d is 8.",
    "ruleReference": "RULE 5, SECTION VI, RULE 4, SECTION VI, RULE 10, SECTION VIII",
    "casebookReference": "Case 291"
  },
  {
    "id": "casebook-2025-292",
    "case_number": 292,
    "casebook_category": "OPTION TO ADVANCE THE BALL",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "Team A is granted a timeout with 16 seconds remaining in the game and the ball in Team A\u2019s backcourt after having advanced the ball. Following the timeout, Team A is granted another timeout. Upon resumption of play Team A wishes to exercise its option to move the ball to the 28\u2019 hash mark. Is this option allowed?",
    "options": {
      "A": "Throw-in from baseline under the basket only",
      "B": "Throw-in from sideline nearest the foul location",
      "C": "Option to advance ball to frontcourt at 28-foot mark",
      "D": "Throw-in from midcourt line only",
      "a": "Throw-in from baseline under the basket only",
      "b": "Throw-in from sideline nearest the foul location",
      "c": "Option to advance ball to frontcourt at 28-foot mark",
      "d": "Throw-in from midcourt line only"
    },
    "correct_answer": "C",
    "explanation": "Yes. After having advanced the ball, if Team A is granted two consecutive timeouts, the option is available.",
    "distractor_rationale": {
      "A": "Advancement option allows throw-in at 28-foot mark",
      "B": "Can advance further than nearest sideline spot",
      "D": "28-foot mark is the correct advancement spot"
    },
    "category": "OPTION TO ADVANCE THE BALL",
    "scenario": "",
    "question": "Team A is granted a timeout with 16 seconds remaining in the game and the ball in Team A\u2019s backcourt after having advanced the ball. Following the timeout, Team A is granted another timeout. Upon resumption of play Team A wishes to exercise its option to move the ball to the 28\u2019 hash mark. Is this option allowed?",
    "correctAnswer": "c",
    "ruling": "Yes. After having advanced the ball, if Team A is granted two consecutive timeouts, the option is available.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 292"
  },
  {
    "id": "casebook-2025-293",
    "case_number": 293,
    "casebook_category": "OPTION TO ADVANCE THE BALL",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 10, SECTION IX"
    ],
    "question_text": "Team B is called for a backcourt violation with :02.1 remaining in the fourth period. Following a timeout by Team A, may the ball be advanced to the 28\u2019 hash mark?",
    "options": {
      "A": "Throw-in from baseline under the basket only",
      "B": "Throw-in from sideline nearest the foul location",
      "C": "Option to advance ball to frontcourt at 28-foot mark",
      "D": "Throw-in from midcourt line only",
      "a": "Throw-in from baseline under the basket only",
      "b": "Throw-in from sideline nearest the foul location",
      "c": "Option to advance ball to frontcourt at 28-foot mark",
      "d": "Throw-in from midcourt line only"
    },
    "correct_answer": "C",
    "explanation": "No, the ball must be out-of-bounds in the backcourt in order for Team A to advance the ball.",
    "distractor_rationale": {
      "A": "Advancement option allows throw-in at 28-foot mark",
      "B": "Can advance further than nearest sideline spot",
      "D": "28-foot mark is the correct advancement spot"
    },
    "category": "OPTION TO ADVANCE THE BALL",
    "scenario": "",
    "question": "Team B is called for a backcourt violation with :02.1 remaining in the fourth period. Following a timeout by Team A, may the ball be advanced to the 28\u2019 hash mark?",
    "correctAnswer": "c",
    "ruling": "No, the ball must be out-of-bounds in the backcourt in order for Team A to advance the ball.",
    "ruleReference": "RULE 5, SECTION VI, RULE 10, SECTION IX",
    "casebookReference": "Case 293"
  },
  {
    "id": "casebook-2025-294",
    "case_number": 294,
    "casebook_category": "OPTION TO ADVANCE THE BALL",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION XIII",
      "RULE 5, SECTION VI"
    ],
    "question_text": "The clock shows exactly 2:01 left to play in the period. Team A has the ball in the backcourt, out-of-bounds, and requests a timeout. Upon resumption of play, they wish to move the ball to the 28\u2019 hash mark. Is this legal?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "No. All rules of play that apply to the last two minutes of the fourth period or overtime do not go into effect until the game clock shows 2:00 or less to play.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "OPTION TO ADVANCE THE BALL",
    "scenario": "",
    "question": "The clock shows exactly 2:01 left to play in the period. Team A has the ball in the backcourt, out-of-bounds, and requests a timeout. Upon resumption of play, they wish to move the ball to the 28\u2019 hash mark. Is this legal?",
    "correctAnswer": "b",
    "ruling": "No. All rules of play that apply to the last two minutes of the fourth period or overtime do not go into effect until the game clock shows 2:00 or less to play.",
    "ruleReference": "RULE 4, SECTION XIII, RULE 5, SECTION VI",
    "casebookReference": "Case 294"
  },
  {
    "id": "casebook-2025-295",
    "case_number": 295,
    "casebook_category": "OPTION TO ADVANCE THE BALL",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "Following a successful field goal by Player A1 with :25.8 remaining in overtime, Player B1 advances the ball into his frontcourt. Player A3 blocks a field goal attempt by Player B1 and bats the ball into Team B\u2019s backcourt where it is retrieved by Player B2 with :07.8 remaining. Player B2 then requests a timeout prior to advancing the ball. Does Team B have the option of moving the ball to the 28\u2019 hash mark?",
    "options": {
      "A": "Throw-in from baseline under the basket only",
      "B": "Throw-in from sideline nearest the foul location",
      "C": "Option to advance ball to frontcourt at 28-foot mark",
      "D": "Throw-in from midcourt line only",
      "a": "Throw-in from baseline under the basket only",
      "b": "Throw-in from sideline nearest the foul location",
      "c": "Option to advance ball to frontcourt at 28-foot mark",
      "d": "Throw-in from midcourt line only"
    },
    "correct_answer": "C",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Advancement option allows throw-in at 28-foot mark",
      "B": "Can advance further than nearest sideline spot",
      "D": "28-foot mark is the correct advancement spot"
    },
    "category": "OPTION TO ADVANCE THE BALL",
    "scenario": "",
    "question": "Following a successful field goal by Player A1 with :25.8 remaining in overtime, Player B1 advances the ball into his frontcourt. Player A3 blocks a field goal attempt by Player B1 and bats the ball into Team B\u2019s backcourt where it is retrieved by Player B2 with :07.8 remaining. Player B2 then requests a timeout prior to advancing the ball. Does Team B have the option of moving the ball to the 28\u2019 hash mark?",
    "correctAnswer": "c",
    "ruling": "No.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 295"
  },
  {
    "id": "casebook-2025-296",
    "case_number": 296,
    "casebook_category": "OPTION TO ADVANCE THE BALL",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12A, SECTION I",
      "RULE 5, SECTION VI"
    ],
    "question_text": "Team A is granted an excessive timeout at 1:23 of overtime following a successful basket by B1. Is the option to advance available?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "No. Team A loses possession of the ball on the excessive timeout and Team B is awarded possession on the baseline.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "OPTION TO ADVANCE THE BALL",
    "scenario": "",
    "question": "Team A is granted an excessive timeout at 1:23 of overtime following a successful basket by B1. Is the option to advance available?",
    "correctAnswer": "b",
    "ruling": "No. Team A loses possession of the ball on the excessive timeout and Team B is awarded possession on the baseline.",
    "ruleReference": "RULE 12A, SECTION I, RULE 5, SECTION VI",
    "casebookReference": "Case 296"
  },
  {
    "id": "casebook-2025-297",
    "case_number": 297,
    "casebook_category": "OPTION TO ADVANCE THE BALL",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 6, SECTION I"
    ],
    "question_text": "At 1:23 of the 4th period, Player B5 rebounds a missed field goal attempt by Player A1 in the lane but on the right side of the rim. May Team B advance the ball to either side of the court following a timeout?",
    "options": {
      "A": "Throw-in from baseline under the basket only",
      "B": "Throw-in from sideline nearest the foul location",
      "C": "Option to advance ball to frontcourt at 28-foot mark",
      "D": "Throw-in from midcourt line only",
      "a": "Throw-in from baseline under the basket only",
      "b": "Throw-in from sideline nearest the foul location",
      "c": "Option to advance ball to frontcourt at 28-foot mark",
      "d": "Throw-in from midcourt line only"
    },
    "correct_answer": "C",
    "explanation": "Yes. Anytime the ball is in the middle of the court the team has the option to advance the ball to either side. For the purposes of this rule, the middle of the court is the 16\u2019 lane extended.",
    "distractor_rationale": {
      "A": "Advancement option allows throw-in at 28-foot mark",
      "B": "Can advance further than nearest sideline spot",
      "D": "28-foot mark is the correct advancement spot"
    },
    "category": "OPTION TO ADVANCE THE BALL",
    "scenario": "",
    "question": "At 1:23 of the 4th period, Player B5 rebounds a missed field goal attempt by Player A1 in the lane but on the right side of the rim. May Team B advance the ball to either side of the court following a timeout?",
    "correctAnswer": "c",
    "ruling": "Yes. Anytime the ball is in the middle of the court the team has the option to advance the ball to either side. For the purposes of this rule, the middle of the court is the 16\u2019 lane extended.",
    "ruleReference": "RULE 6, SECTION I",
    "casebookReference": "Case 297"
  },
  {
    "id": "casebook-2025-298",
    "case_number": 298,
    "casebook_category": "PENALTY FREE THROW SITUATIONS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION VIII",
      "RULE 12B, SECTION I"
    ],
    "question_text": "Player A1 taps an unsuccessful field goal attempt into the basket and is fouled by Player B1. How is the play administered if it is Team B\u2019s: (1) first team foul of the period, or (2) fifth team foul of the period?",
    "options": {
      "A": "Two free throws; shooting foul on unsuccessful attempt",
      "B": "One free throw; basket was made (and-one opportunity)",
      "C": "No free throws; team not in bonus situation",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws; shooting foul on unsuccessful attempt",
      "b": "One free throw; basket was made (and-one opportunity)",
      "c": "No free throws; team not in bonus situation",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "B",
    "explanation": "In both situations (1) & (2), Player B1 is charged with a personal foul and Team B is charged with a team foul. Player A1 is awarded one free throw attempt.",
    "distractor_rationale": {
      "A": "Basket was successful; only one FT for and-one",
      "C": "Shooting fouls always result in free throws",
      "D": "This was not a three-point attempt"
    },
    "category": "PENALTY FREE THROW SITUATIONS",
    "scenario": "",
    "question": "Player A1 taps an unsuccessful field goal attempt into the basket and is fouled by Player B1. How is the play administered if it is Team B\u2019s: (1) first team foul of the period, or (2) fifth team foul of the period?",
    "correctAnswer": "b",
    "ruling": "In both situations (1) & (2), Player B1 is charged with a personal foul and Team B is charged with a team foul. Player A1 is awarded one free throw attempt.",
    "ruleReference": "RULE 12B, SECTION VIII, RULE 12B, SECTION I",
    "casebookReference": "Case 298"
  },
  {
    "id": "casebook-2025-299",
    "case_number": 299,
    "casebook_category": "PENALTY FREE THROW SITUATIONS",
    "parent_category": "free-throws",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION V"
    ],
    "question_text": "Player A1 has secured possession of an unsuccessful field goal attempt. While still in the air, he is fouled by Player B1 as he is preparing to pass the ball or return to the floor with the ball in his possession. How is the play administered if it is Team B\u2019s: (1) third team foul of the period, or (2) second team foul in last two minutes of the period?",
    "options": {
      "A": "Two free throws; shooting foul on unsuccessful attempt",
      "B": "One free throw; basket was made (and-one opportunity)",
      "C": "No free throws; team not in bonus situation",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws; shooting foul on unsuccessful attempt",
      "b": "One free throw; basket was made (and-one opportunity)",
      "c": "No free throws; team not in bonus situation",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): Team A is awarded the ball at the free throw line extended. Situation (2): Player A1 is awarded one free throw attempt plus the penalty free throw for a total of two.",
    "distractor_rationale": {
      "A": "Basket was successful; only one FT for and-one",
      "C": "Shooting fouls always result in free throws",
      "D": "This was not a three-point attempt"
    },
    "category": "PENALTY FREE THROW SITUATIONS",
    "scenario": "",
    "question": "Player A1 has secured possession of an unsuccessful field goal attempt. While still in the air, he is fouled by Player B1 as he is preparing to pass the ball or return to the floor with the ball in his possession. How is the play administered if it is Team B\u2019s: (1) third team foul of the period, or (2) second team foul in last two minutes of the period?",
    "correctAnswer": "b",
    "ruling": "Situation (1): Team A is awarded the ball at the free throw line extended. Situation (2): Player A1 is awarded one free throw attempt plus the penalty free throw for a total of two.",
    "ruleReference": "RULE 12B, SECTION V",
    "casebookReference": "Case 299"
  },
  {
    "id": "casebook-2025-300",
    "case_number": 300,
    "casebook_category": "PENALTY FREE THROW SITUATIONS",
    "parent_category": "free-throws",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION V"
    ],
    "question_text": "Team B commits a shot clock violation with the score tied at 97-97 and :07.2 remaining in the fourth period. Team B had committed a team foul at 1:54. The number \u20183\u2019, instead of \u20184\u2019, is incorrectly displayed on the scoreboard for the number of team fouls on Team B. With :02.0 remaining, Player B1 intentionally commits a personal foul on Player A1, thinking that he had a personal foul to give without penalty. The officials are now informed of the error. What is the procedure?",
    "options": {
      "A": "Two free throws; shooting foul on unsuccessful attempt",
      "B": "One free throw; basket was made (and-one opportunity)",
      "C": "No free throws; team not in bonus situation",
      "D": "Three free throws; foul on three-point attempt",
      "a": "Two free throws; shooting foul on unsuccessful attempt",
      "b": "One free throw; basket was made (and-one opportunity)",
      "c": "No free throws; team not in bonus situation",
      "d": "Three free throws; foul on three-point attempt"
    },
    "correct_answer": "B",
    "explanation": "Player A1 shall be awarded one free throw plus a penalty free throw attempt.",
    "distractor_rationale": {
      "A": "Basket was successful; only one FT for and-one",
      "C": "Shooting fouls always result in free throws",
      "D": "This was not a three-point attempt"
    },
    "category": "PENALTY FREE THROW SITUATIONS",
    "scenario": "",
    "question": "Team B commits a shot clock violation with the score tied at 97-97 and :07.2 remaining in the fourth period. Team B had committed a team foul at 1:54. The number \u20183\u2019, instead of \u20184\u2019, is incorrectly displayed on the scoreboard for the number of team fouls on Team B. With :02.0 remaining, Player B1 intentionally commits a personal foul on Player A1, thinking that he had a personal foul to give without penalty. The officials are now informed of the error. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "Player A1 shall be awarded one free throw plus a penalty free throw attempt.",
    "ruleReference": "RULE 12B, SECTION V",
    "casebookReference": "Case 300"
  },
  {
    "id": "casebook-2025-301",
    "case_number": 301,
    "casebook_category": "PLAYER DISQUALIFICATION / EJECTION",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION I"
    ],
    "question_text": "Team B is down to its last five players due to all other players having been disqualified and is not in the penalty situation. (1) Defensive Player B1 commits his sixth personal foul. What is the ruling?",
    "options": {
      "A": "Player may return after sitting out for 5 minutes",
      "B": "Player is disqualified and cannot return; substitute required",
      "C": "Technical foul assessed but player remains in game",
      "D": "Team plays short-handed; no substitute required",
      "a": "Player may return after sitting out for 5 minutes",
      "b": "Player is disqualified and cannot return; substitute required",
      "c": "Technical foul assessed but player remains in game",
      "d": "Team plays short-handed; no substitute required"
    },
    "correct_answer": "B",
    "explanation": "(2) Player B2 is injured and cannot continue to play.",
    "distractor_rationale": {
      "A": "Disqualification is permanent for remainder of game",
      "C": "Disqualification requires leaving the game",
      "D": "Substitute must enter for disqualified player"
    },
    "category": "PLAYER DISQUALIFICATION / EJECTION",
    "scenario": "",
    "question": "Team B is down to its last five players due to all other players having been disqualified and is not in the penalty situation. (1) Defensive Player B1 commits his sixth personal foul. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "(2) Player B2 is injured and cannot continue to play.",
    "ruleReference": "RULE 3, SECTION I",
    "casebookReference": "Case 301"
  },
  {
    "id": "casebook-2025-302",
    "case_number": 302,
    "casebook_category": "PLAYER DISQUALIFICATION / EJECTION",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION II"
    ],
    "question_text": "After attempting the first of two free throw attempts, Player A1 is ejected from the game for unsportsmanlike conduct when he receives his second technical foul. How is the play administered?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "Team B is awarded one free throw attempt for the technical foul. The coach of Team B will select the substitute from Team A\u2019s bench who will attempt Player A1\u2019s remaining free throw.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "PLAYER DISQUALIFICATION / EJECTION",
    "scenario": "",
    "question": "After attempting the first of two free throw attempts, Player A1 is ejected from the game for unsportsmanlike conduct when he receives his second technical foul. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "Team B is awarded one free throw attempt for the technical foul. The coach of Team B will select the substitute from Team A\u2019s bench who will attempt Player A1\u2019s remaining free throw.",
    "ruleReference": "RULE 9, SECTION II",
    "casebookReference": "Case 302"
  },
  {
    "id": "casebook-2025-303",
    "case_number": 303,
    "casebook_category": "PLAYER DISQUALIFICATION / EJECTION",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION II",
      "RULE 12A, SECTION II"
    ],
    "question_text": "Player A1 must be replaced due to disqualification. Team A\u2019s coach delays in sending a substitute into the game. What ruling should be applied?",
    "options": {
      "A": "Player may return after sitting out for 5 minutes",
      "B": "Player is disqualified and cannot return; substitute required",
      "C": "Technical foul assessed but player remains in game",
      "D": "Team plays short-handed; no substitute required",
      "a": "Player may return after sitting out for 5 minutes",
      "b": "Player is disqualified and cannot return; substitute required",
      "c": "Technical foul assessed but player remains in game",
      "d": "Team plays short-handed; no substitute required"
    },
    "correct_answer": "B",
    "explanation": "If Team A\u2019s coach fails to replace the disqualified player within 30 seconds, a delay-of-game warning shall be assessed.",
    "distractor_rationale": {
      "A": "Disqualification is permanent for remainder of game",
      "C": "Disqualification requires leaving the game",
      "D": "Substitute must enter for disqualified player"
    },
    "category": "PLAYER DISQUALIFICATION / EJECTION",
    "scenario": "",
    "question": "Player A1 must be replaced due to disqualification. Team A\u2019s coach delays in sending a substitute into the game. What ruling should be applied?",
    "correctAnswer": "b",
    "ruling": "If Team A\u2019s coach fails to replace the disqualified player within 30 seconds, a delay-of-game warning shall be assessed.",
    "ruleReference": "RULE 5, SECTION II, RULE 12A, SECTION II",
    "casebookReference": "Case 303"
  },
  {
    "id": "casebook-2025-304",
    "case_number": 304,
    "casebook_category": "PLAYER DISQUALIFICATION / EJECTION",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12A, SECTION I",
      "RULE 3, SECTION I"
    ],
    "question_text": "With :07.8 remaining in the game, Team A calls its eighth timeout when it is unable to inbound the ball. Player A1 is then assessed a technical foul and is ejected from the game. Team A has used all of its eligible players. How is this play administered?",
    "options": {
      "A": "Player may return after sitting out for 5 minutes",
      "B": "Player is disqualified and cannot return; substitute required",
      "C": "Technical foul assessed but player remains in game",
      "D": "Team plays short-handed; no substitute required",
      "a": "Player may return after sitting out for 5 minutes",
      "b": "Player is disqualified and cannot return; substitute required",
      "c": "Technical foul assessed but player remains in game",
      "d": "Team plays short-handed; no substitute required"
    },
    "correct_answer": "B",
    "explanation": "Requests for an excessive timeout shall be granted and a technical foul shall be assessed.",
    "distractor_rationale": {
      "A": "Disqualification is permanent for remainder of game",
      "C": "Disqualification requires leaving the game",
      "D": "Substitute must enter for disqualified player"
    },
    "category": "PLAYER DISQUALIFICATION / EJECTION",
    "scenario": "",
    "question": "With :07.8 remaining in the game, Team A calls its eighth timeout when it is unable to inbound the ball. Player A1 is then assessed a technical foul and is ejected from the game. Team A has used all of its eligible players. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "Requests for an excessive timeout shall be granted and a technical foul shall be assessed.",
    "ruleReference": "RULE 12A, SECTION I, RULE 3, SECTION I",
    "casebookReference": "Case 304"
  },
  {
    "id": "casebook-2025-305",
    "case_number": 305,
    "casebook_category": "PLAYER DISQUALIFICATION / EJECTION",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12A, SECTION VI",
      "RULE 6, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "With Player A1\u2019s unsuccessful field goal attempt in the air, Player A2 and Player B2 are involved in an altercation and are ejected from the game. How is the play administered?",
    "options": {
      "A": "Player may return after sitting out for 5 minutes",
      "B": "Player is disqualified and cannot return; substitute required",
      "C": "Technical foul assessed but player remains in game",
      "D": "Team plays short-handed; no substitute required",
      "a": "Player may return after sitting out for 5 minutes",
      "b": "Player is disqualified and cannot return; substitute required",
      "c": "Technical foul assessed but player remains in game",
      "d": "Team plays short-handed; no substitute required"
    },
    "correct_answer": "B",
    "explanation": "The officials will use instant replay to review the call made on the floor before ejecting the two players involved.",
    "distractor_rationale": {
      "A": "Disqualification is permanent for remainder of game",
      "C": "Disqualification requires leaving the game",
      "D": "Substitute must enter for disqualified player"
    },
    "category": "PLAYER DISQUALIFICATION / EJECTION",
    "scenario": "",
    "question": "With Player A1\u2019s unsuccessful field goal attempt in the air, Player A2 and Player B2 are involved in an altercation and are ejected from the game. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "The officials will use instant replay to review the call made on the floor before ejecting the two players involved.",
    "ruleReference": "RULE 12A, SECTION VI, RULE 6, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 305"
  },
  {
    "id": "casebook-2025-306",
    "case_number": 306,
    "casebook_category": "PLAYER POSITION",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XIII",
      "RULE 8, SECTION I"
    ],
    "question_text": "Team A has just lost control of the ball and it is in the air over the boundary line (never having touched out-of-bounds). Player A1 leaps from the playing court, bats the ball back into play and he then lands out-of-bounds. What is the ruling?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "This is a legal play by Player A1.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "PLAYER POSITION",
    "scenario": "",
    "question": "Team A has just lost control of the ball and it is in the air over the boundary line (never having touched out-of-bounds). Player A1 leaps from the playing court, bats the ball back into play and he then lands out-of-bounds. What is the ruling?",
    "correctAnswer": "a",
    "ruling": "This is a legal play by Player A1.",
    "ruleReference": "RULE 10, SECTION XIII, RULE 8, SECTION I",
    "casebookReference": "Case 306"
  },
  {
    "id": "casebook-2025-307",
    "case_number": 307,
    "casebook_category": "PLAYER POSITION",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION I"
    ],
    "question_text": "During the course of play, Player A1 leaves the playing court and is out-of-bounds. He leaps from out-of-bounds (never establishing himself within the playing court area), touches a loose ball and then lands on the court. Is this legal or illegal?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Illegal.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "PLAYER POSITION",
    "scenario": "",
    "question": "During the course of play, Player A1 leaves the playing court and is out-of-bounds. He leaps from out-of-bounds (never establishing himself within the playing court area), touches a loose ball and then lands on the court. Is this legal or illegal?",
    "correctAnswer": "a",
    "ruling": "Illegal.",
    "ruleReference": "RULE 8, SECTION I",
    "casebookReference": "Case 307"
  },
  {
    "id": "casebook-2025-308",
    "case_number": 308,
    "casebook_category": "PLAYER POSITION",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION IV"
    ],
    "question_text": "In an attempt to score, Player A1 is about to cause contact with Player B1 who is in a legal defensive guarding position. However, just prior to contact, Player B1 \u201csubmarines\u201d Player A1 in his attempt to shoot. On whom is the personal foul called?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Following an instant replay review a flagrant foul is assessed against Player B1.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "PLAYER POSITION",
    "scenario": "",
    "question": "In an attempt to score, Player A1 is about to cause contact with Player B1 who is in a legal defensive guarding position. However, just prior to contact, Player B1 \u201csubmarines\u201d Player A1 in his attempt to shoot. On whom is the personal foul called?",
    "correctAnswer": "a",
    "ruling": "Following an instant replay review a flagrant foul is assessed against Player B1.",
    "ruleReference": "RULE 12B, SECTION IV",
    "casebookReference": "Case 308"
  },
  {
    "id": "casebook-2025-309",
    "case_number": 309,
    "casebook_category": "PLAYER POSITION",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION II"
    ],
    "question_text": "Player A1 is attempting a throw-in. Player B1 deflects the ball and it then touches Player A1 who is still out-of-bounds. Which team is awarded possession?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "Team B is awarded possession.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "PLAYER POSITION",
    "scenario": "",
    "question": "Player A1 is attempting a throw-in. Player B1 deflects the ball and it then touches Player A1 who is still out-of-bounds. Which team is awarded possession?",
    "correctAnswer": "a",
    "ruling": "Team B is awarded possession.",
    "ruleReference": "RULE 8, SECTION II",
    "casebookReference": "Case 309"
  },
  {
    "id": "casebook-2025-310",
    "case_number": 310,
    "casebook_category": "PLAYER POSITION",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION II"
    ],
    "question_text": "Player A3 attempts to save the ball from going out-of-bounds and contacts an official, who is standing out-of-bounds, just prior to passing the ball to a teammate. Is this legal?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "No. The official is considered part of the court and since he was out-ofbounds, Player A3 is considered out.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "PLAYER POSITION",
    "scenario": "",
    "question": "Player A3 attempts to save the ball from going out-of-bounds and contacts an official, who is standing out-of-bounds, just prior to passing the ball to a teammate. Is this legal?",
    "correctAnswer": "a",
    "ruling": "No. The official is considered part of the court and since he was out-ofbounds, Player A3 is considered out.",
    "ruleReference": "RULE 8, SECTION II",
    "casebookReference": "Case 310"
  },
  {
    "id": "casebook-2025-311",
    "case_number": 311,
    "casebook_category": "PLAYER POSITION",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION VI"
    ],
    "question_text": "Team A has the ball in its frontcourt and as Player A3 is advancing from the backcourt, he jumps off his right foot with the midcourt line in the middle of his foot. What is his status?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "If Player A3 rolls his foot forward and jumps off the ball/toe of his foot and no part of his sneaker is touching the backcourt, he has frontcourt status.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "PLAYER POSITION",
    "scenario": "",
    "question": "Team A has the ball in its frontcourt and as Player A3 is advancing from the backcourt, he jumps off his right foot with the midcourt line in the middle of his foot. What is his status?",
    "correctAnswer": "a",
    "ruling": "If Player A3 rolls his foot forward and jumps off the ball/toe of his foot and no part of his sneaker is touching the backcourt, he has frontcourt status.",
    "ruleReference": "RULE 4, SECTION VI",
    "casebookReference": "Case 311"
  },
  {
    "id": "casebook-2025-312",
    "case_number": 312,
    "casebook_category": "PLAYER POSITION",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XV"
    ],
    "question_text": "While Player A1 is dribbling the ball and setting up an offensive play, Player A3 positions himself out-of-bounds on the baseline near the 3\u2019 post-up mark. Is this a legal position?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "No, offensive players who leave the playing area of the court must immediately return or their team will be assessed a violation and Team B will inbound on the sideline nearest the.",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "PLAYER POSITION",
    "scenario": "",
    "question": "While Player A1 is dribbling the ball and setting up an offensive play, Player A3 positions himself out-of-bounds on the baseline near the 3\u2019 post-up mark. Is this a legal position?",
    "correctAnswer": "a",
    "ruling": "No, offensive players who leave the playing area of the court must immediately return or their team will be assessed a violation and Team B will inbound on the sideline nearest the.",
    "ruleReference": "RULE 10, SECTION XV",
    "casebookReference": "Case 312"
  },
  {
    "id": "casebook-2025-313",
    "case_number": 313,
    "casebook_category": "PLAYER POSITION",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XV"
    ],
    "question_text": "Player A2 saves the ball from going out-of-bounds and falls into the stands. If he does not immediately return to the playing area, should a violation be assessed against his team?",
    "options": {
      "A": "Personal foul on the defender; free throws if team is in the bonus",
      "B": "No foul: the contact was incidental and didn't affect the play",
      "C": "Offensive foul: the offensive player initiated the illegal contact",
      "D": "Double foul: both players committed fouls on the same play",
      "a": "Personal foul on the defender; free throws if team is in the bonus",
      "b": "No foul: the contact was incidental and didn't affect the play",
      "c": "Offensive foul: the offensive player initiated the illegal contact",
      "d": "Double foul: both players committed fouls on the same play"
    },
    "correct_answer": "A",
    "explanation": "",
    "distractor_rationale": {
      "B": "Contact was illegal and significant enough to call",
      "C": "Defensive player was responsible for the illegal contact",
      "D": "Only one player committed a foul on this play"
    },
    "category": "PLAYER POSITION",
    "scenario": "",
    "question": "Player A2 saves the ball from going out-of-bounds and falls into the stands. If he does not immediately return to the playing area, should a violation be assessed against his team?",
    "correctAnswer": "a",
    "ruling": "False — if a player's momentum carries him from the playing area, he will be given a reasonable amount of time to return to the playing area depending on the circumstance.",
    "ruleReference": "RULE 10, SECTION XV",
    "casebookReference": "Case 313"
  },
  {
    "id": "casebook-2025-314",
    "case_number": 314,
    "casebook_category": "PUNCHING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 12B, SECTION IX",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 has been awarded two free throw attempts. During the dead ball, he punches Player B1. What is the correct ruling and how is the ball put into play?",
    "options": {
      "A": "Technical foul: player receives warning and remains in game",
      "B": "Player is ejected: two technical fouls result in disqualification",
      "C": "Flagrant 1: player remains unless they receive second flagrant",
      "D": "Suspension only: player may finish game but misses next",
      "a": "Technical foul: player receives warning and remains in game",
      "b": "Player is ejected: two technical fouls result in disqualification",
      "c": "Flagrant 1: player remains unless they receive second flagrant",
      "d": "Suspension only: player may finish game but misses next"
    },
    "correct_answer": "B",
    "explanation": "The officials will use instant replay to review the punching foul and Player A1 is ejected.",
    "distractor_rationale": {
      "A": "Two technicals means automatic ejection, no warning",
      "C": "This was a technical foul situation, not flagrant",
      "D": "Ejection is immediate; suspension may also apply"
    },
    "category": "PUNCHING",
    "scenario": "",
    "question": "Player A1 has been awarded two free throw attempts. During the dead ball, he punches Player B1. What is the correct ruling and how is the ball put into play?",
    "correctAnswer": "b",
    "ruling": "The officials will use instant replay to review the punching foul and Player A1 is ejected.",
    "ruleReference": "RULE 9, SECTION II, RULE 12B, SECTION IX, RULE 13, SECTION I",
    "casebookReference": "Case 314"
  },
  {
    "id": "casebook-2025-315",
    "case_number": 315,
    "casebook_category": "PUNCHING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 is about to attempt a free throw. A second unsportsmanlike technical foul is called on Player A1. Before he leaves the court, Player A1 punches Player B1. How is this treated?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "The coach of Team B will select a substitute from Team A\u2019s bench to attempt the remaining free throw.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "PUNCHING",
    "scenario": "",
    "question": "Player A1 is about to attempt a free throw. A second unsportsmanlike technical foul is called on Player A1. Before he leaves the court, Player A1 punches Player B1. How is this treated?",
    "correctAnswer": "b",
    "ruling": "The coach of Team B will select a substitute from Team A\u2019s bench to attempt the remaining free throw.",
    "ruleReference": "RULE 9, SECTION II, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 315"
  },
  {
    "id": "casebook-2025-316",
    "case_number": 316,
    "casebook_category": "PUNCHING",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION IX",
      "RULE 13, SECTION I"
    ],
    "question_text": "The following action occurs after a traveling violation on Player A1: (1) Player B1 throws a punch at Player A1 and contact occurs, or (2) Player A1 throws a punch at Player B1 and no contact occurs. What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "In both situations (1) and (2), the officials will make a ruling on the floor and since a punch was thrown, instant replay will be used to review the punch and ejection.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "PUNCHING",
    "scenario": "",
    "question": "The following action occurs after a traveling violation on Player A1: (1) Player B1 throws a punch at Player A1 and contact occurs, or (2) Player A1 throws a punch at Player B1 and no contact occurs. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "In both situations (1) and (2), the officials will make a ruling on the floor and since a punch was thrown, instant replay will be used to review the punch and ejection.",
    "ruleReference": "RULE 12B, SECTION IX, RULE 13, SECTION I",
    "casebookReference": "Case 316"
  },
  {
    "id": "casebook-2025-317",
    "case_number": 317,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION II"
    ],
    "question_text": "With the ball in the air, Player B1 blocks Player A1\u2019s field goal attempt prior to the shot clock horn. Is Team B allowed to secure possession of the ball and continue play?",
    "options": {
      "A": "Shot clock resets to 24 seconds automatically",
      "B": "Shot clock resets to 14 seconds for this situation",
      "C": "Shot clock continues from the current time shown",
      "D": "Shot clock is turned off for remainder of period",
      "a": "Shot clock resets to 24 seconds automatically",
      "b": "Shot clock resets to 14 seconds for this situation",
      "c": "Shot clock continues from the current time shown",
      "d": "Shot clock is turned off for remainder of period"
    },
    "correct_answer": "C",
    "explanation": "Yes, if Team B gains possession before the horn. If the horn and the new possession are so close that it is difficult to determine which came first, the whistle shall be withheld.",
    "distractor_rationale": {
      "A": "Reset criteria not met for this situation",
      "B": "14-second reset requires specific conditions",
      "D": "Shot clock remains active"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "With the ball in the air, Player B1 blocks Player A1\u2019s field goal attempt prior to the shot clock horn. Is Team B allowed to secure possession of the ball and continue play?",
    "correctAnswer": "c",
    "ruling": "Yes, if Team B gains possession before the horn. If the horn and the new possession are so close that it is difficult to determine which came first, the whistle shall be withheld.",
    "ruleReference": "RULE 7, SECTION II",
    "casebookReference": "Case 317"
  },
  {
    "id": "casebook-2025-318",
    "case_number": 318,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION II"
    ],
    "question_text": "Play is stopped and the shot clock reads 0. However, the buzzer has not sounded. What is the correct ruling with respect to time?",
    "options": {
      "A": "Shot clock resets to 24 seconds automatically",
      "B": "Shot clock resets to 14 seconds for this situation",
      "C": "Shot clock continues from the current time shown",
      "D": "Shot clock is turned off for remainder of period",
      "a": "Shot clock resets to 24 seconds automatically",
      "b": "Shot clock resets to 14 seconds for this situation",
      "c": "Shot clock continues from the current time shown",
      "d": "Shot clock is turned off for remainder of period"
    },
    "correct_answer": "C",
    "explanation": "Whenever the shot clock reads 0 and the ball is dead for any reason other than a defensive 3-second violation, flopping violation, kicking violation, punched ball violation, personal foul or.",
    "distractor_rationale": {
      "A": "Reset criteria not met for this situation",
      "B": "14-second reset requires specific conditions",
      "D": "Shot clock remains active"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Play is stopped and the shot clock reads 0. However, the buzzer has not sounded. What is the correct ruling with respect to time?",
    "correctAnswer": "c",
    "ruling": "Whenever the shot clock reads 0 and the ball is dead for any reason other than a defensive 3-second violation, flopping violation, kicking violation, punched ball violation, personal foul or.",
    "ruleReference": "RULE 7, SECTION II",
    "casebookReference": "Case 318"
  },
  {
    "id": "casebook-2025-319",
    "case_number": 319,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "Player A1 attempts to pass to Player A2 in the frontcourt. Player B1 deflects the ball causing it to touch the basket ring. Is the shot clock reset?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new possession",
      "B": "Shot clock resets to 14 seconds per offensive rebound rules",
      "C": "Shot clock continues from current time; no reset triggered",
      "D": "Shot clock turns off; game clock has less time remaining",
      "a": "Shot clock resets to 24 seconds for new possession",
      "b": "Shot clock resets to 14 seconds per offensive rebound rules",
      "c": "Shot clock continues from current time; no reset triggered",
      "d": "Shot clock turns off; game clock has less time remaining"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "14-second reset applies for offensive rebounds hitting rim",
      "C": "Reset is triggered by this situation",
      "D": "Game clock has more time than shot clock"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Player A1 attempts to pass to Player A2 in the frontcourt. Player B1 deflects the ball causing it to touch the basket ring. Is the shot clock reset?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 319"
  },
  {
    "id": "casebook-2025-320",
    "case_number": 320,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 5, SECTION V"
    ],
    "question_text": "Team A calls a timeout in its frontcourt. There are 8 seconds showing on the shot clock. Upon resumption of play is the shot clock reset to 14 seconds?",
    "options": {
      "A": "Shot clock resets to 24 seconds for this situation",
      "B": "Shot clock resets to 14 seconds per current rules",
      "C": "Shot clock continues; no reset is triggered here",
      "D": "Shot clock turns off until next possession change",
      "a": "Shot clock resets to 24 seconds for this situation",
      "b": "Shot clock resets to 14 seconds per current rules",
      "c": "Shot clock continues; no reset is triggered here",
      "d": "Shot clock turns off until next possession change"
    },
    "correct_answer": "C",
    "explanation": "No. The time on the shot clock shall remain as when the timeout was called.",
    "distractor_rationale": {
      "A": "No event occurred that triggers a reset",
      "B": "14-second reset requires specific criteria not met here",
      "D": "Shot clock continues running or resumes"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Team A calls a timeout in its frontcourt. There are 8 seconds showing on the shot clock. Upon resumption of play is the shot clock reset to 14 seconds?",
    "correctAnswer": "c",
    "ruling": "No. The time on the shot clock shall remain as when the timeout was called.",
    "ruleReference": "RULE 5, SECTION V",
    "casebookReference": "Case 320"
  },
  {
    "id": "casebook-2025-321",
    "case_number": 321,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION II"
    ],
    "question_text": "On a throw-in from the backcourt, the ball is deflected but neither team has secured possession. When does the shot clock start?",
    "options": {
      "A": "Shot clock resets to 24 seconds automatically",
      "B": "Shot clock resets to 14 seconds for this situation",
      "C": "Shot clock continues from the current time shown",
      "D": "Shot clock is turned off for remainder of period",
      "a": "Shot clock resets to 24 seconds automatically",
      "b": "Shot clock resets to 14 seconds for this situation",
      "c": "Shot clock continues from the current time shown",
      "d": "Shot clock is turned off for remainder of period"
    },
    "correct_answer": "C",
    "explanation": "On a throw-in, the shot clock shall start when the ball is legally touched on the court by a player.",
    "distractor_rationale": {
      "A": "Reset criteria not met for this situation",
      "B": "14-second reset requires specific conditions",
      "D": "Shot clock remains active"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "On a throw-in from the backcourt, the ball is deflected but neither team has secured possession. When does the shot clock start?",
    "correctAnswer": "c",
    "ruling": "On a throw-in, the shot clock shall start when the ball is legally touched on the court by a player.",
    "ruleReference": "RULE 7, SECTION II",
    "casebookReference": "Case 321"
  },
  {
    "id": "casebook-2025-322",
    "case_number": 322,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "A pass from Player A1 to Player A2 is deflected by Player B1 into Team A\u2019s backcourt. The officials are notified that a player is bleeding and play is suspended. The shot clock indicates 5 seconds remaining. What is the ruling?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new possession",
      "B": "Shot clock resets to 14 seconds per offensive rebound rules",
      "C": "Shot clock continues from current time; no reset triggered",
      "D": "Shot clock turns off; game clock has less time remaining",
      "a": "Shot clock resets to 24 seconds for new possession",
      "b": "Shot clock resets to 14 seconds per offensive rebound rules",
      "c": "Shot clock continues from current time; no reset triggered",
      "d": "Shot clock turns off; game clock has less time remaining"
    },
    "correct_answer": "B",
    "explanation": "The shot clock is reset to 14 seconds and Team A receives a new 8-second count.",
    "distractor_rationale": {
      "A": "14-second reset applies for offensive rebounds hitting rim",
      "C": "Reset is triggered by this situation",
      "D": "Game clock has more time than shot clock"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "A pass from Player A1 to Player A2 is deflected by Player B1 into Team A\u2019s backcourt. The officials are notified that a player is bleeding and play is suspended. The shot clock indicates 5 seconds remaining. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The shot clock is reset to 14 seconds and Team A receives a new 8-second count.",
    "ruleReference": "RULE 7, SECTION IV, RULE 10, SECTION VIII",
    "casebookReference": "Case 322"
  },
  {
    "id": "casebook-2025-323",
    "case_number": 323,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION XVI",
      "RULE 7, SECTION IV"
    ],
    "question_text": "The ball is deflected by Player B1 while in possession of Player A1. As the ball is going out-of-bounds, Player B1 throws it to Player B2. When is the shot clock reset?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new team possession",
      "B": "Shot clock resets to 14 seconds per recent rule changes",
      "C": "Shot clock continues; change of possession doesn't reset",
      "D": "Shot clock turns off until ball is touched inbounds",
      "a": "Shot clock resets to 24 seconds for new team possession",
      "b": "Shot clock resets to 14 seconds per recent rule changes",
      "c": "Shot clock continues; change of possession doesn't reset",
      "d": "Shot clock turns off until ball is touched inbounds"
    },
    "correct_answer": "A",
    "explanation": "The shot clock shall be reset to 24 seconds when Player B1 gains possession, which occurs when he is first holding, dribbling or passing the ball.",
    "distractor_rationale": {
      "B": "Full 24-second reset applies for change of possession",
      "C": "New possession triggers full shot clock reset",
      "D": "Shot clock displays time during dead ball"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "The ball is deflected by Player B1 while in possession of Player A1. As the ball is going out-of-bounds, Player B1 throws it to Player B2. When is the shot clock reset?",
    "correctAnswer": "a",
    "ruling": "The shot clock shall be reset to 24 seconds when Player B1 gains possession, which occurs when he is first holding, dribbling or passing the ball.",
    "ruleReference": "RULE 4, SECTION XVI, RULE 7, SECTION IV",
    "casebookReference": "Case 323"
  },
  {
    "id": "casebook-2025-324",
    "case_number": 324,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION II"
    ],
    "question_text": "Player A1 is holding the ball inbounds near the sideline with 18 seconds remaining on the shot clock. Player B1, who is out-of-bounds, touches the ball. An official calls the violation and returns the ball to Team A and directs the timer to give Team A a new 24-second count. Is this correct?",
    "options": {
      "A": "Shot clock resets to 24 seconds for this situation",
      "B": "Shot clock resets to 14 seconds per current rules",
      "C": "Shot clock continues; no reset is triggered here",
      "D": "Shot clock turns off until next possession change",
      "a": "Shot clock resets to 24 seconds for this situation",
      "b": "Shot clock resets to 14 seconds per current rules",
      "c": "Shot clock continues; no reset is triggered here",
      "d": "Shot clock turns off until next possession change"
    },
    "correct_answer": "C",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "No event occurred that triggers a reset",
      "B": "14-second reset requires specific criteria not met here",
      "D": "Shot clock continues running or resumes"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Player A1 is holding the ball inbounds near the sideline with 18 seconds remaining on the shot clock. Player B1, who is out-of-bounds, touches the ball. An official calls the violation and returns the ball to Team A and directs the timer to give Team A a new 24-second count. Is this correct?",
    "correctAnswer": "c",
    "ruling": "No.",
    "ruleReference": "RULE 7, SECTION II",
    "casebookReference": "Case 324"
  },
  {
    "id": "casebook-2025-325",
    "case_number": 325,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION II"
    ],
    "question_text": "With :36.0 remaining in the first period and 7 remaining on the shot clock, Player B1 tips the ball away from Player A1. Player A1 retrieves the ball and the shot clock is erroneously reset with 2.5 seconds remaining. What is the ruling?",
    "options": {
      "A": "Shot clock resets to 24 seconds for this situation",
      "B": "Shot clock resets to 14 seconds per current rules",
      "C": "Shot clock continues; no reset is triggered here",
      "D": "Shot clock turns off until next possession change",
      "a": "Shot clock resets to 24 seconds for this situation",
      "b": "Shot clock resets to 14 seconds per current rules",
      "c": "Shot clock continues; no reset is triggered here",
      "d": "Shot clock turns off until next possession change"
    },
    "correct_answer": "C",
    "explanation": "Play shall be halted immediately.",
    "distractor_rationale": {
      "A": "No event occurred that triggers a reset",
      "B": "14-second reset requires specific criteria not met here",
      "D": "Shot clock continues running or resumes"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "With :36.0 remaining in the first period and 7 remaining on the shot clock, Player B1 tips the ball away from Player A1. Player A1 retrieves the ball and the shot clock is erroneously reset with 2.5 seconds remaining. What is the ruling?",
    "correctAnswer": "c",
    "ruling": "Play shall be halted immediately.",
    "ruleReference": "RULE 7, SECTION II",
    "casebookReference": "Case 325"
  },
  {
    "id": "casebook-2025-326",
    "case_number": 326,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 7, SECTION II"
    ],
    "question_text": "Following a successful field goal, Player A1 inbounds the ball with :44.4 remaining in the fourth period. Player A2 attempts an unsuccessful field goal which fails to touch the basket ring and was recovered by Player A3 at :22.4. The shot clock is erroneously reset to 14. How is this play administered?",
    "options": {
      "A": "Shot clock resets to 24 seconds for this situation",
      "B": "Shot clock resets to 14 seconds per current rules",
      "C": "Shot clock continues; no reset is triggered here",
      "D": "Shot clock turns off until next possession change",
      "a": "Shot clock resets to 24 seconds for this situation",
      "b": "Shot clock resets to 14 seconds per current rules",
      "c": "Shot clock continues; no reset is triggered here",
      "d": "Shot clock turns off until next possession change"
    },
    "correct_answer": "C",
    "explanation": "Play shall be stopped unless there is an immediate field goal attempt.",
    "distractor_rationale": {
      "A": "No event occurred that triggers a reset",
      "B": "14-second reset requires specific criteria not met here",
      "D": "Shot clock continues running or resumes"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following a successful field goal, Player A1 inbounds the ball with :44.4 remaining in the fourth period. Player A2 attempts an unsuccessful field goal which fails to touch the basket ring and was recovered by Player A3 at :22.4. The shot clock is erroneously reset to 14. How is this play administered?",
    "correctAnswer": "c",
    "ruling": "Play shall be stopped unless there is an immediate field goal attempt.",
    "ruleReference": "RULE 7, SECTION IV, RULE 7, SECTION II",
    "casebookReference": "Case 326"
  },
  {
    "id": "casebook-2025-327",
    "case_number": 327,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 10, SECTION XI",
      "RULE 7, SECTION II"
    ],
    "question_text": "Following an unsuccessful field goal attempt by Player A1, which does not touch the rim, Player B3 accidentally tips the ball up through Team A\u2019s basket. What is the ruling?",
    "options": {
      "A": "Shot clock resets to 24 seconds automatically",
      "B": "Shot clock resets to 14 seconds for this situation",
      "C": "Shot clock continues from the current time shown",
      "D": "Shot clock is turned off for remainder of period",
      "a": "Shot clock resets to 24 seconds automatically",
      "b": "Shot clock resets to 14 seconds for this situation",
      "c": "Shot clock continues from the current time shown",
      "d": "Shot clock is turned off for remainder of period"
    },
    "correct_answer": "C",
    "explanation": "A floor violation by the defense has occurred.",
    "distractor_rationale": {
      "A": "Reset criteria not met for this situation",
      "B": "14-second reset requires specific conditions",
      "D": "Shot clock remains active"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following an unsuccessful field goal attempt by Player A1, which does not touch the rim, Player B3 accidentally tips the ball up through Team A\u2019s basket. What is the ruling?",
    "correctAnswer": "c",
    "ruling": "A floor violation by the defense has occurred.",
    "ruleReference": "RULE 10, SECTION XI, RULE 7, SECTION II",
    "casebookReference": "Case 327"
  },
  {
    "id": "casebook-2025-328",
    "case_number": 328,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 4, SECTION VI",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "Following a successful field goal by Team B, the ball is inbounded to Player A2 in his backcourt by Player A1. As Player A2 attempts to pass the ball back to Player A1, the ball is deflected by Player B1 causing it to touch the basket ring in the backcourt. (1) Is the shot clock reset?",
    "options": {
      "A": "Shot clock resets to 24 seconds for this situation",
      "B": "Shot clock resets to 14 seconds per current rules",
      "C": "Shot clock continues; no reset is triggered here",
      "D": "Shot clock turns off until next possession change",
      "a": "Shot clock resets to 24 seconds for this situation",
      "b": "Shot clock resets to 14 seconds per current rules",
      "c": "Shot clock continues; no reset is triggered here",
      "d": "Shot clock turns off until next possession change"
    },
    "correct_answer": "C",
    "explanation": "(2) Does Team A get a new 8 seconds to advance the ball into the frontcourt?",
    "distractor_rationale": {
      "A": "No event occurred that triggers a reset",
      "B": "14-second reset requires specific criteria not met here",
      "D": "Shot clock continues running or resumes"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following a successful field goal by Team B, the ball is inbounded to Player A2 in his backcourt by Player A1. As Player A2 attempts to pass the ball back to Player A1, the ball is deflected by Player B1 causing it to touch the basket ring in the backcourt. (1) Is the shot clock reset?",
    "correctAnswer": "c",
    "ruling": "(2) Does Team A get a new 8 seconds to advance the ball into the frontcourt?",
    "ruleReference": "RULE 7, SECTION IV, RULE 4, SECTION VI, RULE 10, SECTION VIII",
    "casebookReference": "Case 328"
  },
  {
    "id": "casebook-2025-329",
    "case_number": 329,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [],
    "question_text": "The ball goes out-of-bounds off of Player B1 in the frontcourt with 0.2 on the shot clock. What is the procedure to be followed?",
    "options": {
      "A": "Shot clock resets to 24 seconds automatically",
      "B": "Shot clock resets to 14 seconds for this situation",
      "C": "Shot clock continues from the current time shown",
      "D": "Shot clock is turned off for remainder of period",
      "a": "Shot clock resets to 24 seconds automatically",
      "b": "Shot clock resets to 14 seconds for this situation",
      "c": "Shot clock continues from the current time shown",
      "d": "Shot clock is turned off for remainder of period"
    },
    "correct_answer": "C",
    "explanation": "Team A has :00.2 to attempt a \u201chigh lob\u201d or \u201ctip in\u201d, which are the only shots that successfully could be attempted within the time remaining on the shot clock. COMMENTS ON THE RULES, SECTION II (L)",
    "distractor_rationale": {
      "A": "Reset criteria not met for this situation",
      "B": "14-second reset requires specific conditions",
      "D": "Shot clock remains active"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "The ball goes out-of-bounds off of Player B1 in the frontcourt with 0.2 on the shot clock. What is the procedure to be followed?",
    "correctAnswer": "c",
    "ruling": "Team A has :00.2 to attempt a \u201chigh lob\u201d or \u201ctip in\u201d, which are the only shots that successfully could be attempted within the time remaining on the shot clock. COMMENTS ON THE RULES, SECTION II (L)",
    "ruleReference": "",
    "casebookReference": "Case 329"
  },
  {
    "id": "casebook-2025-330",
    "case_number": 330,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "With 7 seconds on the shot clock, the official calls a defensive 3-second violation as Player A1 is attempting (but has not released) an unsuccessful shot which hits the rim. What is the shot clock reset to?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new possession",
      "B": "Shot clock resets to 14 seconds per offensive rebound rules",
      "C": "Shot clock continues from current time; no reset triggered",
      "D": "Shot clock turns off; game clock has less time remaining",
      "a": "Shot clock resets to 24 seconds for new possession",
      "b": "Shot clock resets to 14 seconds per offensive rebound rules",
      "c": "Shot clock continues from current time; no reset triggered",
      "d": "Shot clock turns off; game clock has less time remaining"
    },
    "correct_answer": "B",
    "explanation": "The shot clock is reset to 14 since the violation happened before the field goal attempt.",
    "distractor_rationale": {
      "A": "14-second reset applies for offensive rebounds hitting rim",
      "C": "Reset is triggered by this situation",
      "D": "Game clock has more time than shot clock"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "With 7 seconds on the shot clock, the official calls a defensive 3-second violation as Player A1 is attempting (but has not released) an unsuccessful shot which hits the rim. What is the shot clock reset to?",
    "correctAnswer": "b",
    "ruling": "The shot clock is reset to 14 since the violation happened before the field goal attempt.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 330"
  },
  {
    "id": "casebook-2025-331",
    "case_number": 331,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [],
    "question_text": "As Player A1 is nearing the 28\u2019 mark while advancing the ball in his backcourt at 3:45 of the period, the official suspends play when he or she recognizes that the shot clock did not start. What is the procedure?",
    "options": {
      "A": "Shot clock resets to 24 seconds automatically",
      "B": "Shot clock resets to 14 seconds for this situation",
      "C": "Shot clock continues from the current time shown",
      "D": "Shot clock is turned off for remainder of period",
      "a": "Shot clock resets to 24 seconds automatically",
      "b": "Shot clock resets to 14 seconds for this situation",
      "c": "Shot clock continues from the current time shown",
      "d": "Shot clock is turned off for remainder of period"
    },
    "correct_answer": "C",
    "explanation": "The officials will estimate the amount of time that should be removed from the shot clock using the game clock as a guideline, which would have to be less than 8 seconds because the player has not.",
    "distractor_rationale": {
      "A": "Reset criteria not met for this situation",
      "B": "14-second reset requires specific conditions",
      "D": "Shot clock remains active"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "As Player A1 is nearing the 28\u2019 mark while advancing the ball in his backcourt at 3:45 of the period, the official suspends play when he or she recognizes that the shot clock did not start. What is the procedure?",
    "correctAnswer": "c",
    "ruling": "The officials will estimate the amount of time that should be removed from the shot clock using the game clock as a guideline, which would have to be less than 8 seconds because the player has not.",
    "ruleReference": "",
    "casebookReference": "Case 331"
  },
  {
    "id": "casebook-2025-332",
    "case_number": 332,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 5, SECTION VIII"
    ],
    "question_text": "Following B1\u2019s successful basket at 34.5 of the 4th period, Player A2 allows the throw-in pass to bounce up-court prior to touching the ball. The official sounds the whistle when the ball reaches the 28\u2019 mark because he or she notices the game clock is incorrectly running. What is the procedure?",
    "options": {
      "A": "Shot clock resets to 24 seconds automatically",
      "B": "Shot clock resets to 14 seconds for this situation",
      "C": "Shot clock continues from the current time shown",
      "D": "Shot clock is turned off for remainder of period",
      "a": "Shot clock resets to 24 seconds automatically",
      "b": "Shot clock resets to 14 seconds for this situation",
      "c": "Shot clock continues from the current time shown",
      "d": "Shot clock is turned off for remainder of period"
    },
    "correct_answer": "C",
    "explanation": "The game clock will be reset to 34.5 and Team A will inbound on the baseline as after any score.",
    "distractor_rationale": {
      "A": "Reset criteria not met for this situation",
      "B": "14-second reset requires specific conditions",
      "D": "Shot clock remains active"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following B1\u2019s successful basket at 34.5 of the 4th period, Player A2 allows the throw-in pass to bounce up-court prior to touching the ball. The official sounds the whistle when the ball reaches the 28\u2019 mark because he or she notices the game clock is incorrectly running. What is the procedure?",
    "correctAnswer": "c",
    "ruling": "The game clock will be reset to 34.5 and Team A will inbound on the baseline as after any score.",
    "ruleReference": "RULE 5, SECTION VIII",
    "casebookReference": "Case 332"
  },
  {
    "id": "casebook-2025-333",
    "case_number": 333,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "While Team A is on offense in its frontcourt, a held ball is whistled between Players A1 and B1 with 4.1 seconds on the shot clock. How is this handled?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new team possession",
      "B": "Shot clock resets to 14 seconds per recent rule changes",
      "C": "Shot clock continues; change of possession doesn't reset",
      "D": "Shot clock turns off until ball is touched inbounds",
      "a": "Shot clock resets to 24 seconds for new team possession",
      "b": "Shot clock resets to 14 seconds per recent rule changes",
      "c": "Shot clock continues; change of possession doesn't reset",
      "d": "Shot clock turns off until ball is touched inbounds"
    },
    "correct_answer": "A",
    "explanation": "The shot clock will remain at 4.1 seconds and restart when possession is gained by either team following the jump.",
    "distractor_rationale": {
      "B": "Full 24-second reset applies for change of possession",
      "C": "New possession triggers full shot clock reset",
      "D": "Shot clock displays time during dead ball"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "While Team A is on offense in its frontcourt, a held ball is whistled between Players A1 and B1 with 4.1 seconds on the shot clock. How is this handled?",
    "correctAnswer": "a",
    "ruling": "The shot clock will remain at 4.1 seconds and restart when possession is gained by either team following the jump.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 333"
  },
  {
    "id": "casebook-2025-334",
    "case_number": 334,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "Player A1 attempts an unsuccessful shot that hits the rim with 21 on the shot clock. What is the shot clock reset to when A5 rebounds the ball and is the first to gain possession?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new possession",
      "B": "Shot clock resets to 14 seconds per offensive rebound rules",
      "C": "Shot clock continues from current time; no reset triggered",
      "D": "Shot clock turns off; game clock has less time remaining",
      "a": "Shot clock resets to 24 seconds for new possession",
      "b": "Shot clock resets to 14 seconds per offensive rebound rules",
      "c": "Shot clock continues from current time; no reset triggered",
      "d": "Shot clock turns off; game clock has less time remaining"
    },
    "correct_answer": "B",
    "explanation": "14 seconds. The shot clock is reset to 14 any time the offensive team is the first to gain possession following a missed field goal attempt that contacts the basket ring.",
    "distractor_rationale": {
      "A": "14-second reset applies for offensive rebounds hitting rim",
      "C": "Reset is triggered by this situation",
      "D": "Game clock has more time than shot clock"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Player A1 attempts an unsuccessful shot that hits the rim with 21 on the shot clock. What is the shot clock reset to when A5 rebounds the ball and is the first to gain possession?",
    "correctAnswer": "b",
    "ruling": "14 seconds. The shot clock is reset to 14 any time the offensive team is the first to gain possession following a missed field goal attempt that contacts the basket ring.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 334"
  },
  {
    "id": "casebook-2025-335",
    "case_number": 335,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "Following A3\u2019s unsuccessful free throw that hits the rim, prior to establishing possession, the ball is fumbled out of bounds by B5 and possession is awarded to Team A. What is the shot clock reset to?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new possession",
      "B": "Shot clock resets to 14 seconds per offensive rebound rules",
      "C": "Shot clock continues from current time; no reset triggered",
      "D": "Shot clock turns off; game clock has less time remaining",
      "a": "Shot clock resets to 24 seconds for new possession",
      "b": "Shot clock resets to 14 seconds per offensive rebound rules",
      "c": "Shot clock continues from current time; no reset triggered",
      "d": "Shot clock turns off; game clock has less time remaining"
    },
    "correct_answer": "B",
    "explanation": "14 seconds. The shot clock is reset to 14 as Team A is the first to gain possession following a missed free throw that remains in play.",
    "distractor_rationale": {
      "A": "14-second reset applies for offensive rebounds hitting rim",
      "C": "Reset is triggered by this situation",
      "D": "Game clock has more time than shot clock"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following A3\u2019s unsuccessful free throw that hits the rim, prior to establishing possession, the ball is fumbled out of bounds by B5 and possession is awarded to Team A. What is the shot clock reset to?",
    "correctAnswer": "b",
    "ruling": "14 seconds. The shot clock is reset to 14 as Team A is the first to gain possession following a missed free throw that remains in play.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 335"
  },
  {
    "id": "casebook-2025-336",
    "case_number": 336,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "Following a made basket with :22.4 remaining in the 4th quarter, Team A calls a timeout and advances the ball to its frontcourt. Following the throw-in, A1 misses a shot that contacts the basket ring and is rebounded by A5 with :18.3 seconds remaining on the game clock. What happens to the shot clock?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new possession",
      "B": "Shot clock resets to 14 seconds per offensive rebound rules",
      "C": "Shot clock continues from current time; no reset triggered",
      "D": "Shot clock turns off; game clock has less time remaining",
      "a": "Shot clock resets to 24 seconds for new possession",
      "b": "Shot clock resets to 14 seconds per offensive rebound rules",
      "c": "Shot clock continues from current time; no reset triggered",
      "d": "Shot clock turns off; game clock has less time remaining"
    },
    "correct_answer": "B",
    "explanation": "The shot clock is reset to 14 seconds since Team A was the first to gain possession of a missed field goal attempt that contacts the basket ring.",
    "distractor_rationale": {
      "A": "14-second reset applies for offensive rebounds hitting rim",
      "C": "Reset is triggered by this situation",
      "D": "Game clock has more time than shot clock"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following a made basket with :22.4 remaining in the 4th quarter, Team A calls a timeout and advances the ball to its frontcourt. Following the throw-in, A1 misses a shot that contacts the basket ring and is rebounded by A5 with :18.3 seconds remaining on the game clock. What happens to the shot clock?",
    "correctAnswer": "b",
    "ruling": "The shot clock is reset to 14 seconds since Team A was the first to gain possession of a missed field goal attempt that contacts the basket ring.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 336"
  },
  {
    "id": "casebook-2025-337",
    "case_number": 337,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "Following a missed free throw by A3 that remains in play, the ball is deflected out of bounds simultaneously by A5 and B5. What is the shot clock reset to if Team A gains possession of the jump ball?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new team possession",
      "B": "Shot clock resets to 14 seconds per recent rule changes",
      "C": "Shot clock continues; change of possession doesn't reset",
      "D": "Shot clock turns off until ball is touched inbounds",
      "a": "Shot clock resets to 24 seconds for new team possession",
      "b": "Shot clock resets to 14 seconds per recent rule changes",
      "c": "Shot clock continues; change of possession doesn't reset",
      "d": "Shot clock turns off until ball is touched inbounds"
    },
    "correct_answer": "A",
    "explanation": "24 seconds. The shot clock is reset to 24 and remains at 24 regardless which team wins the jump ball if the jump ball is not the result of a held ball caused by the defense.",
    "distractor_rationale": {
      "B": "Full 24-second reset applies for change of possession",
      "C": "New possession triggers full shot clock reset",
      "D": "Shot clock displays time during dead ball"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following a missed free throw by A3 that remains in play, the ball is deflected out of bounds simultaneously by A5 and B5. What is the shot clock reset to if Team A gains possession of the jump ball?",
    "correctAnswer": "a",
    "ruling": "24 seconds. The shot clock is reset to 24 and remains at 24 regardless which team wins the jump ball if the jump ball is not the result of a held ball caused by the defense.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 337"
  },
  {
    "id": "casebook-2025-338",
    "case_number": 338,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "Following a missed shot by A3 that contacts the basket ring, players A5 and B5 rebound the ball with simultaneous possession. What is the shot clock reset to if Team A gains possession of the jump ball?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new possession",
      "B": "Shot clock resets to 14 seconds per offensive rebound rules",
      "C": "Shot clock continues from current time; no reset triggered",
      "D": "Shot clock turns off; game clock has less time remaining",
      "a": "Shot clock resets to 24 seconds for new possession",
      "b": "Shot clock resets to 14 seconds per offensive rebound rules",
      "c": "Shot clock continues from current time; no reset triggered",
      "d": "Shot clock turns off; game clock has less time remaining"
    },
    "correct_answer": "B",
    "explanation": "14 seconds.",
    "distractor_rationale": {
      "A": "14-second reset applies for offensive rebounds hitting rim",
      "C": "Reset is triggered by this situation",
      "D": "Game clock has more time than shot clock"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following a missed shot by A3 that contacts the basket ring, players A5 and B5 rebound the ball with simultaneous possession. What is the shot clock reset to if Team A gains possession of the jump ball?",
    "correctAnswer": "b",
    "ruling": "14 seconds.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 338"
  },
  {
    "id": "casebook-2025-339",
    "case_number": 339,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "With 20 on the shot clock, A1 is in his upward shooting motion. However, A1 has not yet released the ball on an unsuccessful shot that contacts the basket ring, when a defensive foul is called off-ball on defender B3 for pushing through screener A3. What is the shot clock set to if this is the 1st team foul?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new possession",
      "B": "Shot clock resets to 14 seconds per offensive rebound rules",
      "C": "Shot clock continues from current time; no reset triggered",
      "D": "Shot clock turns off; game clock has less time remaining",
      "a": "Shot clock resets to 24 seconds for new possession",
      "b": "Shot clock resets to 14 seconds per offensive rebound rules",
      "c": "Shot clock continues from current time; no reset triggered",
      "d": "Shot clock turns off; game clock has less time remaining"
    },
    "correct_answer": "B",
    "explanation": "20 seconds.",
    "distractor_rationale": {
      "A": "14-second reset applies for offensive rebounds hitting rim",
      "C": "Reset is triggered by this situation",
      "D": "Game clock has more time than shot clock"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "With 20 on the shot clock, A1 is in his upward shooting motion. However, A1 has not yet released the ball on an unsuccessful shot that contacts the basket ring, when a defensive foul is called off-ball on defender B3 for pushing through screener A3. What is the shot clock set to if this is the 1st team foul?",
    "correctAnswer": "b",
    "ruling": "20 seconds.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 339"
  },
  {
    "id": "casebook-2025-340",
    "case_number": 340,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "Following a missed shot by A2 that contacts the basket ring, the ball is batted into Team A\u2019s backcourt where A4 is the first to gain possession. What is the shot clock reset to?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new possession",
      "B": "Shot clock resets to 14 seconds per offensive rebound rules",
      "C": "Shot clock continues from current time; no reset triggered",
      "D": "Shot clock turns off; game clock has less time remaining",
      "a": "Shot clock resets to 24 seconds for new possession",
      "b": "Shot clock resets to 14 seconds per offensive rebound rules",
      "c": "Shot clock continues from current time; no reset triggered",
      "d": "Shot clock turns off; game clock has less time remaining"
    },
    "correct_answer": "B",
    "explanation": "14 seconds. The shot clock is reset to 14 anytime the offensive team is the first to gain following a missed field goal attempt that contacts the basket ring.",
    "distractor_rationale": {
      "A": "14-second reset applies for offensive rebounds hitting rim",
      "C": "Reset is triggered by this situation",
      "D": "Game clock has more time than shot clock"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following a missed shot by A2 that contacts the basket ring, the ball is batted into Team A\u2019s backcourt where A4 is the first to gain possession. What is the shot clock reset to?",
    "correctAnswer": "b",
    "ruling": "14 seconds. The shot clock is reset to 14 anytime the offensive team is the first to gain following a missed field goal attempt that contacts the basket ring.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 340"
  },
  {
    "id": "casebook-2025-341",
    "case_number": 341,
    "casebook_category": "SHOT CLOCK",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 7, SECTION IV"
    ],
    "question_text": "Following a missed shot by A2 that contacts the basket ring, the ball is batted into Team A\u2019s backcourt, then B5 commits a loose ball foul. What is the shot clock reset to if this is the 1st team foul on Team B?",
    "options": {
      "A": "Shot clock resets to 24 seconds for new team possession",
      "B": "Shot clock resets to 14 seconds per recent rule changes",
      "C": "Shot clock continues; change of possession doesn't reset",
      "D": "Shot clock turns off until ball is touched inbounds",
      "a": "Shot clock resets to 24 seconds for new team possession",
      "b": "Shot clock resets to 14 seconds per recent rule changes",
      "c": "Shot clock continues; change of possession doesn't reset",
      "d": "Shot clock turns off until ball is touched inbounds"
    },
    "correct_answer": "A",
    "explanation": "24 seconds. Any time the ball is inbounded in the backcourt as the result of a personal foul, the shot clock is reset to 24.",
    "distractor_rationale": {
      "B": "Full 24-second reset applies for change of possession",
      "C": "New possession triggers full shot clock reset",
      "D": "Shot clock displays time during dead ball"
    },
    "category": "SHOT CLOCK",
    "scenario": "",
    "question": "Following a missed shot by A2 that contacts the basket ring, the ball is batted into Team A\u2019s backcourt, then B5 commits a loose ball foul. What is the shot clock reset to if this is the 1st team foul on Team B?",
    "correctAnswer": "a",
    "ruling": "24 seconds. Any time the ball is inbounded in the backcourt as the result of a personal foul, the shot clock is reset to 24.",
    "ruleReference": "RULE 7, SECTION IV",
    "casebookReference": "Case 341"
  },
  {
    "id": "casebook-2025-342",
    "case_number": 342,
    "casebook_category": "STARTING LINE-UPS/AVAILABLE PLAYERS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION II"
    ],
    "question_text": "After a team has submitted its starting line-up via the Basketball Operations Daily Reporting Portal, are they allowed to make any changes prior to the start of the game?",
    "options": {
      "A": "Player is eligible to participate in game",
      "B": "Player is ineligible; cannot participate currently",
      "C": "Technical foul for eligibility violation",
      "D": "Warning issued; player may continue",
      "a": "Player is eligible to participate in game",
      "b": "Player is ineligible; cannot participate currently",
      "c": "Technical foul for eligibility violation",
      "d": "Warning issued; player may continue"
    },
    "correct_answer": "A",
    "explanation": "Yes.",
    "distractor_rationale": {
      "B": "Player meets all eligibility requirements",
      "C": "No eligibility violation occurred",
      "D": "No warning needed; player is eligible"
    },
    "category": "STARTING LINE-UPS/AVAILABLE PLAYERS",
    "scenario": "",
    "question": "After a team has submitted its starting line-up via the Basketball Operations Daily Reporting Portal, are they allowed to make any changes prior to the start of the game?",
    "correctAnswer": "a",
    "ruling": "Yes.",
    "ruleReference": "RULE 3, SECTION II",
    "casebookReference": "Case 342"
  },
  {
    "id": "casebook-2025-343",
    "case_number": 343,
    "casebook_category": "STARTING LINE-UPS/AVAILABLE PLAYERS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 2, SECTION II",
      "RULE 12A, SECTION VII"
    ],
    "question_text": "Team A begins the game with less than eight players in uniform. What is the correct procedure?",
    "options": {
      "A": "Player is eligible to participate in game",
      "B": "Player is ineligible; cannot participate currently",
      "C": "Technical foul for eligibility violation",
      "D": "Warning issued; player may continue",
      "a": "Player is eligible to participate in game",
      "b": "Player is ineligible; cannot participate currently",
      "c": "Technical foul for eligibility violation",
      "d": "Warning issued; player may continue"
    },
    "correct_answer": "A",
    "explanation": "Play the game as scheduled. The crew chief shall notify the League Office immediately following the game.",
    "distractor_rationale": {
      "B": "Player meets all eligibility requirements",
      "C": "No eligibility violation occurred",
      "D": "No warning needed; player is eligible"
    },
    "category": "STARTING LINE-UPS/AVAILABLE PLAYERS",
    "scenario": "",
    "question": "Team A begins the game with less than eight players in uniform. What is the correct procedure?",
    "correctAnswer": "a",
    "ruling": "Play the game as scheduled. The crew chief shall notify the League Office immediately following the game.",
    "ruleReference": "RULE 2, SECTION II, RULE 12A, SECTION VII",
    "casebookReference": "Case 343"
  },
  {
    "id": "casebook-2025-344",
    "case_number": 344,
    "casebook_category": "STARTING LINE-UPS/AVAILABLE PLAYERS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 2, SECTION II"
    ],
    "question_text": "While the Crew Chief is reviewing the Active List, Player A14 is not listed but is warming up with the team. What is the procedure?",
    "options": {
      "A": "Player is eligible to participate in game",
      "B": "Player is ineligible; cannot participate currently",
      "C": "Technical foul for eligibility violation",
      "D": "Warning issued; player may continue",
      "a": "Player is eligible to participate in game",
      "b": "Player is ineligible; cannot participate currently",
      "c": "Technical foul for eligibility violation",
      "d": "Warning issued; player may continue"
    },
    "correct_answer": "A",
    "explanation": "Player A14 will be told he must immediately leave the court. Only players on the Active List are allowed to be in uniform and on the court.",
    "distractor_rationale": {
      "B": "Player meets all eligibility requirements",
      "C": "No eligibility violation occurred",
      "D": "No warning needed; player is eligible"
    },
    "category": "STARTING LINE-UPS/AVAILABLE PLAYERS",
    "scenario": "",
    "question": "While the Crew Chief is reviewing the Active List, Player A14 is not listed but is warming up with the team. What is the procedure?",
    "correctAnswer": "a",
    "ruling": "Player A14 will be told he must immediately leave the court. Only players on the Active List are allowed to be in uniform and on the court.",
    "ruleReference": "RULE 2, SECTION II",
    "casebookReference": "Case 344"
  },
  {
    "id": "casebook-2025-345",
    "case_number": 345,
    "casebook_category": "STARTING LINE-UPS/AVAILABLE PLAYERS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 2, SECTION II",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A14 enters the game and at the next dead ball the officials are informed that he is not on the Active List. What is the procedure?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "Player A14 will be removed immediately and a technical foul assessed.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "STARTING LINE-UPS/AVAILABLE PLAYERS",
    "scenario": "",
    "question": "Player A14 enters the game and at the next dead ball the officials are informed that he is not on the Active List. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "Player A14 will be removed immediately and a technical foul assessed.",
    "ruleReference": "RULE 2, SECTION II, RULE 12A, SECTION V",
    "casebookReference": "Case 345"
  },
  {
    "id": "casebook-2025-346",
    "case_number": 346,
    "casebook_category": "STRIKING BALL - FIST/KICKING",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION IV"
    ],
    "question_text": "Player B1 extends his leg to block a pass and causes contact with the ball. Is this a violation?",
    "options": {
      "A": "Legal play; ball contact with foot was incidental",
      "B": "Kicked ball violation; clock stops, throw-in for opponent",
      "C": "Turnover; ball awarded to opponent at violation spot",
      "D": "No stoppage; kicked ball doesn't stop play",
      "a": "Legal play; ball contact with foot was incidental",
      "b": "Kicked ball violation; clock stops, throw-in for opponent",
      "c": "Turnover; ball awarded to opponent at violation spot",
      "d": "No stoppage; kicked ball doesn't stop play"
    },
    "correct_answer": "B",
    "explanation": "Yes. Extending the leg is considered a deliberate act and, therefore, a kicking violation has occurred.",
    "distractor_rationale": {
      "A": "Contact was intentional or gave unfair advantage",
      "C": "Kicked ball isn't turnover; clock stops for throw-in",
      "D": "Kicked ball always stops play for throw-in"
    },
    "category": "STRIKING BALL - FIST/KICKING",
    "scenario": "",
    "question": "Player B1 extends his leg to block a pass and causes contact with the ball. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "Yes. Extending the leg is considered a deliberate act and, therefore, a kicking violation has occurred.",
    "ruleReference": "RULE 10, SECTION IV",
    "casebookReference": "Case 346"
  },
  {
    "id": "casebook-2025-347",
    "case_number": 347,
    "casebook_category": "STRIKING BALL - FIST/KICKING",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 6, SECTION I",
      "RULE 10, SECTION IV"
    ],
    "question_text": "During a loose ball, Player A1 deliberately strikes the ball with his fist. Is this legal or illegal?",
    "options": {
      "A": "Legal play; ball contact with foot was incidental",
      "B": "Kicked ball violation; clock stops, throw-in for opponent",
      "C": "Turnover; ball awarded to opponent at violation spot",
      "D": "No stoppage; kicked ball doesn't stop play",
      "a": "Legal play; ball contact with foot was incidental",
      "b": "Kicked ball violation; clock stops, throw-in for opponent",
      "c": "Turnover; ball awarded to opponent at violation spot",
      "d": "No stoppage; kicked ball doesn't stop play"
    },
    "correct_answer": "B",
    "explanation": "Illegal. Team B is awarded the ball out-of-bounds on the sideline, nearest the point of the violation but no nearer to the baseline than the free throw line extended.",
    "distractor_rationale": {
      "A": "Contact was intentional or gave unfair advantage",
      "C": "Kicked ball isn't turnover; clock stops for throw-in",
      "D": "Kicked ball always stops play for throw-in"
    },
    "category": "STRIKING BALL - FIST/KICKING",
    "scenario": "",
    "question": "During a loose ball, Player A1 deliberately strikes the ball with his fist. Is this legal or illegal?",
    "correctAnswer": "b",
    "ruling": "Illegal. Team B is awarded the ball out-of-bounds on the sideline, nearest the point of the violation but no nearer to the baseline than the free throw line extended.",
    "ruleReference": "RULE 6, SECTION I, RULE 10, SECTION IV",
    "casebookReference": "Case 347"
  },
  {
    "id": "casebook-2025-348",
    "case_number": 348,
    "casebook_category": "STRIKING BALL - FIST/KICKING",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 7, SECTION IV",
      "RULE 10, SECTION IV"
    ],
    "question_text": "During a throw-in by Player A1, Player B1 deliberately kicks or punches the ball. What is the ruling?",
    "options": {
      "A": "Legal play; ball contact with foot was incidental",
      "B": "Kicked ball violation; clock stops, throw-in for opponent",
      "C": "Turnover; ball awarded to opponent at violation spot",
      "D": "No stoppage; kicked ball doesn't stop play",
      "a": "Legal play; ball contact with foot was incidental",
      "b": "Kicked ball violation; clock stops, throw-in for opponent",
      "c": "Turnover; ball awarded to opponent at violation spot",
      "d": "No stoppage; kicked ball doesn't stop play"
    },
    "correct_answer": "B",
    "explanation": "Team A will retain possession at the spot of the original throw-in with all privileges, if any, remaining.",
    "distractor_rationale": {
      "A": "Contact was intentional or gave unfair advantage",
      "C": "Kicked ball isn't turnover; clock stops for throw-in",
      "D": "Kicked ball always stops play for throw-in"
    },
    "category": "STRIKING BALL - FIST/KICKING",
    "scenario": "",
    "question": "During a throw-in by Player A1, Player B1 deliberately kicks or punches the ball. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Team A will retain possession at the spot of the original throw-in with all privileges, if any, remaining.",
    "ruleReference": "RULE 7, SECTION IV, RULE 10, SECTION IV",
    "casebookReference": "Case 348"
  },
  {
    "id": "casebook-2025-349",
    "case_number": 349,
    "casebook_category": "STRIKING BALL - FIST/KICKING",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION IV"
    ],
    "question_text": "Player A1 is lying on the floor trying to secure a loose ball when he squeezes the ball between his feet to control it. Is this a violation?",
    "options": {
      "A": "Legal play; ball contact with foot was incidental",
      "B": "Kicked ball violation; clock stops, throw-in for opponent",
      "C": "Turnover; ball awarded to opponent at violation spot",
      "D": "No stoppage; kicked ball doesn't stop play",
      "a": "Legal play; ball contact with foot was incidental",
      "b": "Kicked ball violation; clock stops, throw-in for opponent",
      "c": "Turnover; ball awarded to opponent at violation spot",
      "d": "No stoppage; kicked ball doesn't stop play"
    },
    "correct_answer": "B",
    "explanation": "Yes. It is a violation to intentionally use any part of the leg to move or secure the ball.",
    "distractor_rationale": {
      "A": "Contact was intentional or gave unfair advantage",
      "C": "Kicked ball isn't turnover; clock stops for throw-in",
      "D": "Kicked ball always stops play for throw-in"
    },
    "category": "STRIKING BALL - FIST/KICKING",
    "scenario": "",
    "question": "Player A1 is lying on the floor trying to secure a loose ball when he squeezes the ball between his feet to control it. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "Yes. It is a violation to intentionally use any part of the leg to move or secure the ball.",
    "ruleReference": "RULE 10, SECTION IV",
    "casebookReference": "Case 349"
  },
  {
    "id": "casebook-2025-350",
    "case_number": 350,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION V"
    ],
    "question_text": "Following a violation with 1:30 remaining in the second period, the official is prepared to award the ball to Player B1 for a throw-in. The timer sounds his horn as he notices a substitute leaving his bench to report into the game. How is this administered?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "With 2:00 or less remaining in any period or overtime, the official administering the throw-in will allow the coaches a reasonable amount of time to make a substitution.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "Following a violation with 1:30 remaining in the second period, the official is prepared to award the ball to Player B1 for a throw-in. The timer sounds his horn as he notices a substitute leaving his bench to report into the game. How is this administered?",
    "correctAnswer": "b",
    "ruling": "With 2:00 or less remaining in any period or overtime, the official administering the throw-in will allow the coaches a reasonable amount of time to make a substitution.",
    "ruleReference": "RULE 3, SECTION V",
    "casebookReference": "Case 350"
  },
  {
    "id": "casebook-2025-351",
    "case_number": 351,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION V"
    ],
    "question_text": "Substitutes A6 and A7 are at the scorer\u2019s table when a two shot foul is assessed. May they enter the game at this time?",
    "options": {
      "A": "Player may return after sitting out for 5 minutes",
      "B": "Player is disqualified and cannot return; substitute required",
      "C": "Technical foul assessed but player remains in game",
      "D": "Team plays short-handed; no substitute required",
      "a": "Player may return after sitting out for 5 minutes",
      "b": "Player is disqualified and cannot return; substitute required",
      "c": "Technical foul assessed but player remains in game",
      "d": "Team plays short-handed; no substitute required"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Disqualification is permanent for remainder of game",
      "C": "Disqualification requires leaving the game",
      "D": "Substitute must enter for disqualified player"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "Substitutes A6 and A7 are at the scorer\u2019s table when a two shot foul is assessed. May they enter the game at this time?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 3, SECTION V",
    "casebookReference": "Case 351"
  },
  {
    "id": "casebook-2025-352",
    "case_number": 352,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION V"
    ],
    "question_text": "At 3:45 of the period, a shot clock violation is assessed against Team A. As the official is giving the required signal, Players B6 and A6 approach the scorer\u2019s table as substitutes. What is the ruling?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "Neither Player B6 nor Player A6 shall be allowed to enter the game at this time if the throw-in is in the backcourt.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "At 3:45 of the period, a shot clock violation is assessed against Team A. As the official is giving the required signal, Players B6 and A6 approach the scorer\u2019s table as substitutes. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Neither Player B6 nor Player A6 shall be allowed to enter the game at this time if the throw-in is in the backcourt.",
    "ruleReference": "RULE 3, SECTION V",
    "casebookReference": "Case 352"
  },
  {
    "id": "casebook-2025-353",
    "case_number": 353,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION V"
    ],
    "question_text": "Player A6 replaces Player A1 prior to Team A\u2019s throw-in which is then kicked by Player B1. Before the ball is handed to the thrower-in, Player A7 replaces Player A6. Is this a legal substitution?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "Player A6 replaces Player A1 prior to Team A\u2019s throw-in which is then kicked by Player B1. Before the ball is handed to the thrower-in, Player A7 replaces Player A6. Is this a legal substitution?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 3, SECTION V",
    "casebookReference": "Case 353"
  },
  {
    "id": "casebook-2025-354",
    "case_number": 354,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION V"
    ],
    "question_text": "Following a successful field goal by Player A1 and prior to the throw-in by Player B1, a technical foul is called on Player A4 for unsportsmanlike conduct. Are substitutions allowed?",
    "options": {
      "A": "Player may return after sitting out for 5 minutes",
      "B": "Player is disqualified and cannot return; substitute required",
      "C": "Technical foul assessed but player remains in game",
      "D": "Team plays short-handed; no substitute required",
      "a": "Player may return after sitting out for 5 minutes",
      "b": "Player is disqualified and cannot return; substitute required",
      "c": "Technical foul assessed but player remains in game",
      "d": "Team plays short-handed; no substitute required"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Disqualification is permanent for remainder of game",
      "C": "Disqualification requires leaving the game",
      "D": "Substitute must enter for disqualified player"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "Following a successful field goal by Player A1 and prior to the throw-in by Player B1, a technical foul is called on Player A4 for unsportsmanlike conduct. Are substitutions allowed?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 3, SECTION V",
    "casebookReference": "Case 354"
  },
  {
    "id": "casebook-2025-355",
    "case_number": 355,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 3, SECTION V"
    ],
    "question_text": "A goaltending violation occurs. While the ball is dead, may either team: (1) be granted a timeout?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "(2) substitute? (1) The new offensive team is allowed to call a timeout. (2) Neither team may substitute.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "A goaltending violation occurs. While the ball is dead, may either team: (1) be granted a timeout?",
    "correctAnswer": "b",
    "ruling": "(2) substitute? (1) The new offensive team is allowed to call a timeout. (2) Neither team may substitute.",
    "ruleReference": "RULE 5, SECTION VI, RULE 3, SECTION V",
    "casebookReference": "Case 355"
  },
  {
    "id": "casebook-2025-356",
    "case_number": 356,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 3, SECTION V"
    ],
    "question_text": "A basket interference violation occurs. While the ball is dead, may either team: (1) be granted a timeout?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "(2) substitute? (1) Yes.  (2) Yes. The substitute must be in the vicinity of the substitution box when violation occurs, unless there are 2:00 or less remaining in the period or overtime.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "A basket interference violation occurs. While the ball is dead, may either team: (1) be granted a timeout?",
    "correctAnswer": "b",
    "ruling": "(2) substitute? (1) Yes.  (2) Yes. The substitute must be in the vicinity of the substitution box when violation occurs, unless there are 2:00 or less remaining in the period or overtime.",
    "ruleReference": "RULE 5, SECTION VI, RULE 3, SECTION V",
    "casebookReference": "Case 356"
  },
  {
    "id": "casebook-2025-357",
    "case_number": 357,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 3, SECTION V"
    ],
    "question_text": "Following a traveling violation, substitute A6 enters the game prior to the throwin. A timeout is granted when Team A cannot inbound the ball. May A7 replace A6 at this time?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "Yes. Both teams are allowed unlimited substitution during all timeouts.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "Following a traveling violation, substitute A6 enters the game prior to the throwin. A timeout is granted when Team A cannot inbound the ball. May A7 replace A6 at this time?",
    "correctAnswer": "b",
    "ruling": "Yes. Both teams are allowed unlimited substitution during all timeouts.",
    "ruleReference": "RULE 5, SECTION VI, RULE 3, SECTION V",
    "casebookReference": "Case 357"
  },
  {
    "id": "casebook-2025-358",
    "case_number": 358,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "After Player A1 is handed the ball for a throw-in at 10:11 of the period, Team A is granted a timeout. May either team substitute?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "Yes. Both teams are allowed unlimited substitutions during all timeouts.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "After Player A1 is handed the ball for a throw-in at 10:11 of the period, Team A is granted a timeout. May either team substitute?",
    "correctAnswer": "b",
    "ruling": "Yes. Both teams are allowed unlimited substitutions during all timeouts.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 358"
  },
  {
    "id": "casebook-2025-359",
    "case_number": 359,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "The official has handed the ball to Player A1 for a free throw attempt with 5:29 remaining in the period. Prior to attempting his free throw, he requests a timeout. May either team substitute?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "Yes. Both teams are allowed unlimited substitutions during all timeouts.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "The official has handed the ball to Player A1 for a free throw attempt with 5:29 remaining in the period. Prior to attempting his free throw, he requests a timeout. May either team substitute?",
    "correctAnswer": "b",
    "ruling": "Yes. Both teams are allowed unlimited substitutions during all timeouts.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 359"
  },
  {
    "id": "casebook-2025-360",
    "case_number": 360,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION V"
    ],
    "question_text": "With 4:00 remaining in the first period, Player A1 passes to Player A2 in his frontcourt. Player A2 fumbles the ball into the backcourt, and the official calls a backcourt violation when he attempts to retrieve it. Player A6 now leaves the bench area to report into the game. What is the ruling?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "Player A6 is allowed to enter the game as the ball is being inbounded in the frontcourt.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "With 4:00 remaining in the first period, Player A1 passes to Player A2 in his frontcourt. Player A2 fumbles the ball into the backcourt, and the official calls a backcourt violation when he attempts to retrieve it. Player A6 now leaves the bench area to report into the game. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Player A6 is allowed to enter the game as the ball is being inbounded in the frontcourt.",
    "ruleReference": "RULE 3, SECTION V",
    "casebookReference": "Case 360"
  },
  {
    "id": "casebook-2025-361",
    "case_number": 361,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 3, SECTION V",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "Player B1 drives to the basket, attempts an unsuccessful field goal attempt, and falls to the floor. Player A1 rebounds Player B1\u2019s unsuccessful field goal attempt and quickly advances the ball into his team\u2019s frontcourt, while Player B1 remains on the ground in the backcourt. Team B\u2019s head coach and trainer ask an official to suspend play for substitution and removal of the injured player. What is the procedure?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "The official must make an assessment as to whether the official believes that Player B1 has likely suffered a serious injury that warrants an emergency response (e.g., sudden cardiac arrest, possible.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "Player B1 drives to the basket, attempts an unsuccessful field goal attempt, and falls to the floor. Player A1 rebounds Player B1\u2019s unsuccessful field goal attempt and quickly advances the ball into his team\u2019s frontcourt, while Player B1 remains on the ground in the backcourt. Team B\u2019s head coach and trainer ask an official to suspend play for substitution and removal of the injured player. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "The official must make an assessment as to whether the official believes that Player B1 has likely suffered a serious injury that warrants an emergency response (e.g., sudden cardiac arrest, possible.",
    "ruleReference": "RULE 5, SECTION VI, RULE 3, SECTION V, RULE 4, SECTION XIV",
    "casebookReference": "Case 361"
  },
  {
    "id": "casebook-2025-362",
    "case_number": 362,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION V"
    ],
    "question_text": "With the ball in play, Player A6 is in the vicinity of the substitution box having reported to replace Player A1, when Team A requests a timeout. During the timeout the coach of Team A decides to replace Player A6 with Player A7. Is this legal?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "Yes. Following a timeout or between periods, a substitute is not considered as being in the game until he is recognized as a participant on the floor by an official, or he is beckoned into the game.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "With the ball in play, Player A6 is in the vicinity of the substitution box having reported to replace Player A1, when Team A requests a timeout. During the timeout the coach of Team A decides to replace Player A6 with Player A7. Is this legal?",
    "correctAnswer": "b",
    "ruling": "Yes. Following a timeout or between periods, a substitute is not considered as being in the game until he is recognized as a participant on the floor by an official, or he is beckoned into the game.",
    "ruleReference": "RULE 3, SECTION V",
    "casebookReference": "Case 362"
  },
  {
    "id": "casebook-2025-363",
    "case_number": 363,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 3, SECTION VI"
    ],
    "question_text": "With :03.4 remaining in the fourth period, Players A6, A7 and A8 enter the game prior to Player B1\u2019s final successful free throw attempt. Following a timeout by Team A, the coach wishes to replace Players A6 and A7. Is this legal?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "Yes. Both teams are allowed unlimited substitutions during all timeouts.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "With :03.4 remaining in the fourth period, Players A6, A7 and A8 enter the game prior to Player B1\u2019s final successful free throw attempt. Following a timeout by Team A, the coach wishes to replace Players A6 and A7. Is this legal?",
    "correctAnswer": "b",
    "ruling": "Yes. Both teams are allowed unlimited substitutions during all timeouts.",
    "ruleReference": "RULE 3, SECTION VI",
    "casebookReference": "Case 363"
  },
  {
    "id": "casebook-2025-364",
    "case_number": 364,
    "casebook_category": "SUBSTITUTIONS",
    "parent_category": "substitutions-eligibility",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 9, SECTION I",
      "RULE 3, SECTION V",
      "RULE 6, SECTION V"
    ],
    "question_text": "Player A1 is fouled in the act of shooting and is unable to attempt his free throws. The coach of Team B selects Player A6 to be the substitute from Team A\u2019s bench to attempt the free throws. On the second free throw attempt Player B1 enters the free throw lane too soon, and Player A6\u2019s free throw attempt fails to hit the basket ring. How is this play administered? When can player A6 leave the game?",
    "options": {
      "A": "Substitution denied; improper timing for sub",
      "B": "Substitution permitted at this opportunity",
      "C": "Technical foul for illegal substitution attempt",
      "D": "Substitution after next stoppage only",
      "a": "Substitution denied; improper timing for sub",
      "b": "Substitution permitted at this opportunity",
      "c": "Technical foul for illegal substitution attempt",
      "d": "Substitution after next stoppage only"
    },
    "correct_answer": "B",
    "explanation": "There will be a jump ball between any two opponents at the center circle as a result of the double violation. Player A6 may be removed because there is a change in possession.",
    "distractor_rationale": {
      "A": "This is a valid substitution opportunity",
      "C": "Legal substitution isn't penalized",
      "D": "Can substitute now; don't need to wait"
    },
    "category": "SUBSTITUTIONS",
    "scenario": "",
    "question": "Player A1 is fouled in the act of shooting and is unable to attempt his free throws. The coach of Team B selects Player A6 to be the substitute from Team A\u2019s bench to attempt the free throws. On the second free throw attempt Player B1 enters the free throw lane too soon, and Player A6\u2019s free throw attempt fails to hit the basket ring. How is this play administered? When can player A6 leave the game?",
    "correctAnswer": "b",
    "ruling": "There will be a jump ball between any two opponents at the center circle as a result of the double violation. Player A6 may be removed because there is a change in possession.",
    "ruleReference": "RULE 9, SECTION II, RULE 9, SECTION I, RULE 3, SECTION V, RULE 6, SECTION V",
    "casebookReference": "Case 364"
  },
  {
    "id": "casebook-2025-365",
    "case_number": 365,
    "casebook_category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 2, SECTION III",
      "RULE 3, SECTION V"
    ],
    "question_text": "With 4:55 remaining in the first period, the ball is awarded to Team B when Player A1 is guilty of a traveling violation in his frontcourt. Players A2 and B2 are injured simultaneously with the ball becoming dead. Is it proper for the officials to suspend play for the injured players?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "scenario": "",
    "question": "With 4:55 remaining in the first period, the ball is awarded to Team B when Player A1 is guilty of a traveling violation in his frontcourt. Players A2 and B2 are injured simultaneously with the ball becoming dead. Is it proper for the officials to suspend play for the injured players?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 2, SECTION III, RULE 3, SECTION V",
    "casebookReference": "Case 365"
  },
  {
    "id": "casebook-2025-366",
    "case_number": 366,
    "casebook_category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [],
    "question_text": "Player A1 is fouled in the act of shooting and suffers a laceration which causes bleeding. What is the ruling?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "Team A will have 30 seconds to treat Player A1.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "scenario": "",
    "question": "Player A1 is fouled in the act of shooting and suffers a laceration which causes bleeding. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Team A will have 30 seconds to treat Player A1.",
    "ruleReference": "",
    "casebookReference": "Case 366"
  },
  {
    "id": "casebook-2025-367",
    "case_number": 367,
    "casebook_category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 3, SECTION V"
    ],
    "question_text": "Player A1, who received a laceration on a personal foul by Player B1, is unable to attempt his free throw(s) due to the excessive bleeding. What is the ruling if it is interpreted to be a common foul?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "The coach of Team B will select an eligible substitute from Team A\u2019s bench to attempt the free throw(s). Player A1 cannot return to the game.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "scenario": "",
    "question": "Player A1, who received a laceration on a personal foul by Player B1, is unable to attempt his free throw(s) due to the excessive bleeding. What is the ruling if it is interpreted to be a common foul?",
    "correctAnswer": "a",
    "ruling": "The coach of Team B will select an eligible substitute from Team A\u2019s bench to attempt the free throw(s). Player A1 cannot return to the game.",
    "ruleReference": "RULE 9, SECTION II, RULE 3, SECTION V",
    "casebookReference": "Case 367"
  },
  {
    "id": "casebook-2025-368",
    "case_number": 368,
    "casebook_category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12A, SECTION V",
      "RULE 3, SECTION V",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "During live play, Player A1 suddenly collapses to the floor and appears nonresponsive. How are each of the following scenarios administered?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "(1) An official observes Player A1 collapse and believes the player requires an immediate emergency response.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "scenario": "",
    "question": "During live play, Player A1 suddenly collapses to the floor and appears nonresponsive. How are each of the following scenarios administered?",
    "correctAnswer": "a",
    "ruling": "(1) An official observes Player A1 collapse and believes the player requires an immediate emergency response.",
    "ruleReference": "RULE 12A, SECTION V, RULE 3, SECTION V, RULE 4, SECTION XIV",
    "casebookReference": "Case 368"
  },
  {
    "id": "casebook-2025-369",
    "case_number": 369,
    "casebook_category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 3, SECTION V"
    ],
    "question_text": "Following a successful field goal by Player A1, it is discovered that Player A2 is bleeding from a laceration. May the head coach of Team A call a timeout?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "The officials will suspend play at the appropriate time and allow Team A 30 seconds to treat Player A2.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "scenario": "",
    "question": "Following a successful field goal by Player A1, it is discovered that Player A2 is bleeding from a laceration. May the head coach of Team A call a timeout?",
    "correctAnswer": "b",
    "ruling": "The officials will suspend play at the appropriate time and allow Team A 30 seconds to treat Player A2.",
    "ruleReference": "RULE 5, SECTION VI, RULE 3, SECTION V",
    "casebookReference": "Case 369"
  },
  {
    "id": "casebook-2025-370",
    "case_number": 370,
    "casebook_category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [],
    "question_text": "Player A1 receives a laceration and play is suspended for 30 seconds. He remains in the game as the bleeding was stopped and the wound bandaged. As Player A1 is dribbling the ball down the court, the bandage loosens and the official sees blood again. What is the procedure?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "The official will stop play at the proper time and Player A1 must be removed from the game or his team granted a timeout.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "scenario": "",
    "question": "Player A1 receives a laceration and play is suspended for 30 seconds. He remains in the game as the bleeding was stopped and the wound bandaged. As Player A1 is dribbling the ball down the court, the bandage loosens and the official sees blood again. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "The official will stop play at the proper time and Player A1 must be removed from the game or his team granted a timeout.",
    "ruleReference": "",
    "casebookReference": "Case 370"
  },
  {
    "id": "casebook-2025-371",
    "case_number": 371,
    "casebook_category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12A, SECTION V",
      "RULE 3, SECTION V",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "With 4:54 remaining in the second period and the ball in Team A\u2019s possession in its frontcourt, Player B1 knocks the ball loose while unsuccessfully attempting to steal an errant pass, and Player A1 retrieves the ball. Player B1 is injured and falls to the ground on the play. The official notices that the shot clock has been mistakenly reset and suspends play to make the correction. Team B\u2019s trainer observes that Player B1 has been injured on the play and runs onto the court during the suspension of play to provide medical care. What is the ruling?",
    "options": {
      "A": "Timeout is granted with no additional penalty",
      "B": "Timeout granted; technical foul for excessive timeout",
      "C": "Timeout is denied; team has no timeouts remaining",
      "D": "Warning issued; timeout request is declined",
      "a": "Timeout is granted with no additional penalty",
      "b": "Timeout granted; technical foul for excessive timeout",
      "c": "Timeout is denied; team has no timeouts remaining",
      "d": "Warning issued; timeout request is declined"
    },
    "correct_answer": "B",
    "explanation": "The official must make an assessment as to whether Player B1 has suffered a serious injury that warrants an emergency response (e.g., sudden cardiac arrest, possible concussion or other head or neck.",
    "distractor_rationale": {
      "A": "Team has no timeouts; requesting costs a technical",
      "C": "Timeout is still granted despite no timeouts remaining",
      "D": "No warning; technical is assessed immediately"
    },
    "category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "scenario": "",
    "question": "With 4:54 remaining in the second period and the ball in Team A\u2019s possession in its frontcourt, Player B1 knocks the ball loose while unsuccessfully attempting to steal an errant pass, and Player A1 retrieves the ball. Player B1 is injured and falls to the ground on the play. The official notices that the shot clock has been mistakenly reset and suspends play to make the correction. Team B\u2019s trainer observes that Player B1 has been injured on the play and runs onto the court during the suspension of play to provide medical care. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The official must make an assessment as to whether Player B1 has suffered a serious injury that warrants an emergency response (e.g., sudden cardiac arrest, possible concussion or other head or neck.",
    "ruleReference": "RULE 12A, SECTION V, RULE 3, SECTION V, RULE 4, SECTION XIV",
    "casebookReference": "Case 371"
  },
  {
    "id": "casebook-2025-372",
    "case_number": 372,
    "casebook_category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 9, SECTION II"
    ],
    "question_text": "Player A5 is fouled and accidentally hits his head against a teammates elbow. By every indication he is showing symptoms of a concussion so he is taken to the locker room for a concussion evaluation. Who will shoot his free throws and can he return to the game?",
    "options": {
      "A": "Procedure was followed correctly per NBA rules",
      "B": "Procedure violation; correction required",
      "C": "Official has discretion on this procedural matter",
      "D": "Rule doesn't apply to this specific situation",
      "a": "Procedure was followed correctly per NBA rules",
      "b": "Procedure violation; correction required",
      "c": "Official has discretion on this procedural matter",
      "d": "Rule doesn't apply to this specific situation"
    },
    "correct_answer": "A",
    "explanation": "Since Player A5 was removed from the game for a concussion evaluation, his coach will select one of the four remaining players in the game to attempt the free throws.",
    "distractor_rationale": {
      "B": "Procedure was correctly executed",
      "C": "This is not a discretionary matter",
      "D": "Rule does apply to this situation"
    },
    "category": "SUSPENSION-OF-PLAY BY OFFICIALS",
    "scenario": "",
    "question": "Player A5 is fouled and accidentally hits his head against a teammates elbow. By every indication he is showing symptoms of a concussion so he is taken to the locker room for a concussion evaluation. Who will shoot his free throws and can he return to the game?",
    "correctAnswer": "a",
    "ruling": "Since Player A5 was removed from the game for a concussion evaluation, his coach will select one of the four remaining players in the game to attempt the free throws.",
    "ruleReference": "RULE 9, SECTION II",
    "casebookReference": "Case 372"
  },
  {
    "id": "casebook-2025-373",
    "case_number": 373,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "A technical foul is called against Player A1 or Team A: (1) prior to starting line-up being named (2) prior to opening tap (3) prior to a timeout (4) between the first and second periods or the third and fourth periods (5) during halftime When are the free throws attempted?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Situations (1) and (2): The free throw is to be attempted prior to the opening tap.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "A technical foul is called against Player A1 or Team A: (1) prior to starting line-up being named (2) prior to opening tap (3) prior to a timeout (4) between the first and second periods or the third and fourth periods (5) during halftime When are the free throws attempted?",
    "correctAnswer": "b",
    "ruling": "Situations (1) and (2): The free throw is to be attempted prior to the opening tap.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 373"
  },
  {
    "id": "casebook-2025-374",
    "case_number": 374,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION IV",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Defensive Player B3 grabs the net and hangs while blocking a field goal attempt by Player A2. Player A2 does not release the ball. What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "A non-unsportsmanlike technical foul is assessed Player B3 and the ball is awarded to Team A on the sideline at the free throw line extended.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Defensive Player B3 grabs the net and hangs while blocking a field goal attempt by Player A2. Player A2 does not release the ball. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "A non-unsportsmanlike technical foul is assessed Player B3 and the ball is awarded to Team A on the sideline at the free throw line extended.",
    "ruleReference": "RULE 12A, SECTION IV, RULE 12A, SECTION V",
    "casebookReference": "Case 374"
  },
  {
    "id": "casebook-2025-375",
    "case_number": 375,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION IV"
    ],
    "question_text": "Defensive Player B1 grabs the side of the backboard in a successful attempt to touch a loose ball which has an opportunity to score. What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Team A is awarded a successful field goal and a non-unsportsmanlike technical foul is called against Player B1.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Defensive Player B1 grabs the side of the backboard in a successful attempt to touch a loose ball which has an opportunity to score. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Team A is awarded a successful field goal and a non-unsportsmanlike technical foul is called against Player B1.",
    "ruleReference": "RULE 12A, SECTION IV",
    "casebookReference": "Case 375"
  },
  {
    "id": "casebook-2025-376",
    "case_number": 376,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 3, SECTION III",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A1 wishes to discuss an interpretation of a rule during a timeout called by Team B. After being told that this is not allowed, he refuses to go to his team huddle. Can a delay of game warning be issued?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 wishes to discuss an interpretation of a rule during a timeout called by Team B. After being told that this is not allowed, he refuses to go to his team huddle. Can a delay of game warning be issued?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 3, SECTION III, RULE 12A, SECTION V",
    "casebookReference": "Case 376"
  },
  {
    "id": "casebook-2025-377",
    "case_number": 377,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION III",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A1 is in the act of shooting when Player B1, who has lost a shoe, throws the shoe in the direction of the ball. What is the ruling if: (a) the ball has been released, (b) the ball has not been released?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 is in the act of shooting when Player B1, who has lost a shoe, throws the shoe in the direction of the ball. What is the ruling if: (a) the ball has been released, (b) the ball has not been released?",
    "correctAnswer": "b",
    "ruling": "In both (a) and (b), Player A1 shall be awarded points for the type of field goal attempted and a technical foul shall be called on Player B1. After the free throw attempt, the ball shall be awarded to Team B as after any score. This ruling shall apply for any object thrown by any player, coach or trainer on the court or on the bench whether or not it contacts the ball or shooter.",
    "ruleReference": "RULE 2, SECTION III, RULE 12A, SECTION V",
    "casebookReference": "Case 377"
  },
  {
    "id": "casebook-2025-378",
    "case_number": 378,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 6, SECTION I",
      "RULE 12A, SECTION V",
      "RULE 3, SECTION V",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "With 3:34 remaining in the second period, the ball goes out-of-bounds last touched by Player A1 in Team B\u2019s backcourt. Player A1 is injured on the play and falls to the floor, and Team A\u2019s trainer runs onto the floor to provide medical care. Player B1 is in position out-of-bounds ready to accept the ball from the official for a throw-in. How is the play administered?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "On a violation that requires putting the ball in play in the backcourt, the official will give the ball to the offensive player (Player B1) as soon as he is in a position out-of-bounds and ready to.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "With 3:34 remaining in the second period, the ball goes out-of-bounds last touched by Player A1 in Team B\u2019s backcourt. Player A1 is injured on the play and falls to the floor, and Team A\u2019s trainer runs onto the floor to provide medical care. Player B1 is in position out-of-bounds ready to accept the ball from the official for a throw-in. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "On a violation that requires putting the ball in play in the backcourt, the official will give the ball to the offensive player (Player B1) as soon as he is in a position out-of-bounds and ready to.",
    "ruleReference": "RULE 6, SECTION I, RULE 12A, SECTION V, RULE 3, SECTION V, RULE 4, SECTION XIV",
    "casebookReference": "Case 378"
  },
  {
    "id": "casebook-2025-379",
    "case_number": 379,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION I",
      "RULE 7, SECTION IV",
      "RULE 12A, SECTION V"
    ],
    "question_text": "How is the ball put back into play after a technical foul has been called?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Whenever a technical foul is called, play is resumed at the point where it was suspended.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "How is the ball put back into play after a technical foul has been called?",
    "correctAnswer": "b",
    "ruling": "Whenever a technical foul is called, play is resumed at the point where it was suspended.",
    "ruleReference": "RULE 12A, SECTION I, RULE 7, SECTION IV, RULE 12A, SECTION V",
    "casebookReference": "Case 379"
  },
  {
    "id": "casebook-2025-380",
    "case_number": 380,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 10, SECTION VII"
    ],
    "question_text": "Team A inbounds the ball on the baseline following a successful field goal by Team B with :32.1 remaining in the game. Team B is guilty of a defensive 3-second violation with 15 seconds remaining on the shot clock. What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "A technical foul is called on Team B. Team A retains possession of the ball at either side of the free throw line extended and the shot clock remains the same.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Team A inbounds the ball on the baseline following a successful field goal by Team B with :32.1 remaining in the game. Team B is guilty of a defensive 3-second violation with 15 seconds remaining on the shot clock. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "A technical foul is called on Team B. Team A retains possession of the ball at either side of the free throw line extended and the shot clock remains the same.",
    "ruleReference": "RULE 10, SECTION VII",
    "casebookReference": "Case 380"
  },
  {
    "id": "casebook-2025-381",
    "case_number": 381,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION III",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A1 attempts a three-point field goal directly in front of Team B\u2019s bench. A coach/player/trainer of Team B, who is seated on the bench, makes physical contact with Player A1. The official rules that the contact was: (1) accidental or (2) intentional.  What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "In both situations (1) and (2), an unsportsmanlike conduct technical foul shall be called.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 attempts a three-point field goal directly in front of Team B\u2019s bench. A coach/player/trainer of Team B, who is seated on the bench, makes physical contact with Player A1. The official rules that the contact was: (1) accidental or (2) intentional.  What is the ruling?",
    "correctAnswer": "b",
    "ruling": "In both situations (1) and (2), an unsportsmanlike conduct technical foul shall be called.",
    "ruleReference": "RULE 2, SECTION III, RULE 12A, SECTION V",
    "casebookReference": "Case 381"
  },
  {
    "id": "casebook-2025-382",
    "case_number": 382,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 10, SECTION VI",
      "RULE 12A, SECTION III"
    ],
    "question_text": "Following a violation at 6:09 by Team B in their frontcourt, Player B6 is denied entry into the game because of not being in the vicinity of the substitution box. Player B5, thinking he has been replaced, goes to the bench, leaving Team B with only four players. Player A5 is now called for an offensive 3-seconds. How is the play administered?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "The 3-second violation stands.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Following a violation at 6:09 by Team B in their frontcourt, Player B6 is denied entry into the game because of not being in the vicinity of the substitution box. Player B5, thinking he has been replaced, goes to the bench, leaving Team B with only four players. Player A5 is now called for an offensive 3-seconds. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "The 3-second violation stands.",
    "ruleReference": "RULE 10, SECTION VI, RULE 12A, SECTION III",
    "casebookReference": "Case 382"
  },
  {
    "id": "casebook-2025-383",
    "case_number": 383,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION III"
    ],
    "question_text": "At 9:19 of the fourth period, Team A inbounds the ball at midcourt following a timeout. Player A1 scores a successful field goal, and it is then discovered that Team B has four players on the court. How is the play administered?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "The field goal by Player A1 shall count, and a technical foul is called on Team B for having less than five (5) players on the court when play begins.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "At 9:19 of the fourth period, Team A inbounds the ball at midcourt following a timeout. Player A1 scores a successful field goal, and it is then discovered that Team B has four players on the court. How is the play administered?",
    "correctAnswer": "b",
    "ruling": "The field goal by Player A1 shall count, and a technical foul is called on Team B for having less than five (5) players on the court when play begins.",
    "ruleReference": "RULE 12A, SECTION III",
    "casebookReference": "Case 383"
  },
  {
    "id": "casebook-2025-384",
    "case_number": 384,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "The game has ended tied at 103. The coach of Team A receives a technical arguing a no-call at the end of the game. What is the procedure?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "One of the five players from Team B who was in the game at the end of the fourth period will attempt one free throw. The overtime period will continue with a jump ball at the center circle.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "The game has ended tied at 103. The coach of Team A receives a technical arguing a no-call at the end of the game. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "One of the five players from Team B who was in the game at the end of the fourth period will attempt one free throw. The overtime period will continue with a jump ball at the center circle.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 384"
  },
  {
    "id": "casebook-2025-385",
    "case_number": 385,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "During a timeout, technical fouls are called on the coaches of Teams A and B. How is this handled?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Technical fouls assessed opposing teams during the same dead ball and prior to any technical foul shots being taken are to be treated as double technical fouls.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "During a timeout, technical fouls are called on the coaches of Teams A and B. How is this handled?",
    "correctAnswer": "b",
    "ruling": "Technical fouls assessed opposing teams during the same dead ball and prior to any technical foul shots being taken are to be treated as double technical fouls.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 385"
  },
  {
    "id": "casebook-2025-386",
    "case_number": 386,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12A, SECTION V",
      "RULE 7, SECTION IV",
      "RULE 4, SECTION VI",
      "RULE 10, SECTION VIII"
    ],
    "question_text": "Player A1 is dribbling the ball in his backcourt when a technical foul is called on: (1) Player B2, or (2) Player A2, with 18 seconds remaining on the shot clock. How are these plays administered?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): Team A receives a new 8-second count in the backcourt when the technical foul is called on the defensive team.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 is dribbling the ball in his backcourt when a technical foul is called on: (1) Player B2, or (2) Player A2, with 18 seconds remaining on the shot clock. How are these plays administered?",
    "correctAnswer": "b",
    "ruling": "Situation (1): Team A receives a new 8-second count in the backcourt when the technical foul is called on the defensive team.",
    "ruleReference": "RULE 12A, SECTION V, RULE 7, SECTION IV, RULE 4, SECTION VI, RULE 10, SECTION VIII",
    "casebookReference": "Case 386"
  },
  {
    "id": "casebook-2025-387",
    "case_number": 387,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 3, SECTION V",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A1 requests a timeout with the ball in his possession. Player B6 is seated at the scorer\u2019s table ready to enter the game. Prior to the official signaling the table of a timeout, Player A1 is assessed a technical foul. Is Player B6 eligible to attempt the free throw?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 requests a timeout with the ball in his possession. Player B6 is seated at the scorer\u2019s table ready to enter the game. Prior to the official signaling the table of a timeout, Player A1 is assessed a technical foul. Is Player B6 eligible to attempt the free throw?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 3, SECTION V, RULE 12A, SECTION V",
    "casebookReference": "Case 387"
  },
  {
    "id": "casebook-2025-388",
    "case_number": 388,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 3, SECTION V",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A1 is called for a traveling violation. Before the ball is put into play by Team B, Players A6 and B6 are beckoned onto the court. A technical is now called on Team A. May Player B6 attempt the free throw?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Yes. Player B6 was beckoned onto the court prior to the technical foul being assessed.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 is called for a traveling violation. Before the ball is put into play by Team B, Players A6 and B6 are beckoned onto the court. A technical is now called on Team A. May Player B6 attempt the free throw?",
    "correctAnswer": "b",
    "ruling": "Yes. Player B6 was beckoned onto the court prior to the technical foul being assessed.",
    "ruleReference": "RULE 3, SECTION V, RULE 12A, SECTION V",
    "casebookReference": "Case 388"
  },
  {
    "id": "casebook-2025-389",
    "case_number": 389,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION VII",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "An offensive foul is called on Player A1 on a drive to the basket. Player B1 pushes Player A1 during the dead ball and Player A1 throws the ball at Player B1. Player A6 leaves the bench and becomes a participant in an altercation with Player B1 and punches him. What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "The official will use instant replay to review the altercation and identify the level of involvement of each player and appropriately penalize.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "An offensive foul is called on Player A1 on a drive to the basket. Player B1 pushes Player A1 during the dead ball and Player A1 throws the ball at Player B1. Player A6 leaves the bench and becomes a participant in an altercation with Player B1 and punches him. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The official will use instant replay to review the altercation and identify the level of involvement of each player and appropriately penalize.",
    "ruleReference": "RULE 12B, SECTION VII, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 389"
  },
  {
    "id": "casebook-2025-390",
    "case_number": 390,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION IV",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "Following a successful field goal by Player A1, and prior to possession by Player B2 out-of-bounds for a throw-in, Player B1 pushes Player A2. It is determined that the illegal contact cannot be ignored. What is the ruling?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "Player B1 may be assessed a technical foul or a flagrant foul.",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Following a successful field goal by Player A1, and prior to possession by Player B2 out-of-bounds for a throw-in, Player B1 pushes Player A2. It is determined that the illegal contact cannot be ignored. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Player B1 may be assessed a technical foul or a flagrant foul.",
    "ruleReference": "RULE 12B, SECTION IV, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 390"
  },
  {
    "id": "casebook-2025-391",
    "case_number": 391,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 2, SECTION III",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A1 is fouled by Player B1 prior to the horn or buzzer sounding at the end of the third period. The nearest official to the play, who had responsibility for the last field goal attempt of the period, erroneously signals the end of the period with no personal foul being assessed Player B1. A technical foul is assessed the head coach of Team A. However, a fellow official had sounded his whistle assessing a personal foul for illegal contact on the play. How is the play administered if the clock shows 0:00?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "The officials will use instant replay to confirm that the foul happened before time expired and to determine the amount of time left in the period.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 is fouled by Player B1 prior to the horn or buzzer sounding at the end of the third period. The nearest official to the play, who had responsibility for the last field goal attempt of the period, erroneously signals the end of the period with no personal foul being assessed Player B1. A technical foul is assessed the head coach of Team A. However, a fellow official had sounded his whistle assessing a personal foul for illegal contact on the play. How is the play administered if the clock shows 0:00?",
    "correctAnswer": "b",
    "ruling": "The officials will use instant replay to confirm that the foul happened before time expired and to determine the amount of time left in the period.",
    "ruleReference": "RULE 2, SECTION III, RULE 13, SECTION I",
    "casebookReference": "Case 391"
  },
  {
    "id": "casebook-2025-392",
    "case_number": 392,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION IV",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Clearly after a successful field goal attempt by Player A1 has cleared the net, Player A2 throws Player B2 to the floor. How is this play administered?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "The officials have the discretion to assess a technical foul or a flagrant foul to Player A2. The ball shall be put into play in accordance with the type of foul assessed.",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Clearly after a successful field goal attempt by Player A1 has cleared the net, Player A2 throws Player B2 to the floor. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "The officials have the discretion to assess a technical foul or a flagrant foul to Player A2. The ball shall be put into play in accordance with the type of foul assessed.",
    "ruleReference": "RULE 12B, SECTION IV, RULE 12A, SECTION V",
    "casebookReference": "Case 392"
  },
  {
    "id": "casebook-2025-393",
    "case_number": 393,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION II"
    ],
    "question_text": "Following a successful field goal attempt by Team A with :03.1 remaining in the game, Team B calls a timeout. Team B exercises its option and advances the ball to the 28\u2019 hash mark. While Player B1 is attempting to inbound, Player A2, who is defending him, steps out-of-bounds. What is the procedure?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Team A is assessed a technical foul since Player B1 is in a position to inbound the ball. All substitutions would be legal since a technical foul has been called.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Following a successful field goal attempt by Team A with :03.1 remaining in the game, Team B calls a timeout. Team B exercises its option and advances the ball to the 28\u2019 hash mark. While Player B1 is attempting to inbound, Player A2, who is defending him, steps out-of-bounds. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "Team A is assessed a technical foul since Player B1 is in a position to inbound the ball. All substitutions would be legal since a technical foul has been called.",
    "ruleReference": "RULE 12A, SECTION II",
    "casebookReference": "Case 393"
  },
  {
    "id": "casebook-2025-394",
    "case_number": 394,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12B, SECTION I",
      "RULE 12B, SECTION IV",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Players A1 and B1 have been warned about their conduct. As they are running up the court while the ball is in play, Player A1 shoves B1 in an unsportsmanlike manner. How is this play administered?",
    "options": {
      "A": "Common foul: hard contact but within normal basketball play",
      "B": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "C": "Flagrant 2: excessive contact requiring ejection from game",
      "D": "Technical foul: unsportsmanlike conduct; one free throw",
      "a": "Common foul: hard contact but within normal basketball play",
      "b": "Flagrant 1: unnecessary contact; two free throws plus possession",
      "c": "Flagrant 2: excessive contact requiring ejection from game",
      "d": "Technical foul: unsportsmanlike conduct; one free throw"
    },
    "correct_answer": "B",
    "explanation": "The officials have the discretion to assess a personal foul, a flagrant foul or a technical foul for a physical taunt.",
    "distractor_rationale": {
      "A": "Contact was unnecessary, exceeding normal basketball play",
      "C": "Contact was unnecessary but not excessive enough for FF2",
      "D": "Contact fouls aren't assessed as technical fouls"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Players A1 and B1 have been warned about their conduct. As they are running up the court while the ball is in play, Player A1 shoves B1 in an unsportsmanlike manner. How is this play administered?",
    "correctAnswer": "b",
    "ruling": "The officials have the discretion to assess a personal foul, a flagrant foul or a technical foul for a physical taunt.",
    "ruleReference": "RULE 12B, SECTION I, RULE 12B, SECTION IV, RULE 12A, SECTION V",
    "casebookReference": "Case 394"
  },
  {
    "id": "casebook-2025-395",
    "case_number": 395,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 13, SECTION II",
      "RULE 12A, SECTION V",
      "RULE 13, SECTION I"
    ],
    "question_text": "Player A3 takes a swing at Player B3 and no contact is made. How is this handled?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Player A3 is assessed a technical foul and ejected.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A3 takes a swing at Player B3 and no contact is made. How is this handled?",
    "correctAnswer": "b",
    "ruling": "Player A3 is assessed a technical foul and ejected.",
    "ruleReference": "RULE 13, SECTION II, RULE 12A, SECTION V, RULE 13, SECTION I",
    "casebookReference": "Case 395"
  },
  {
    "id": "casebook-2025-396",
    "case_number": 396,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A5 is upset with Player B5, sees him over his shoulder and throws an elbow in the direction of his head but doesn\u2019t make contact. What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Player A5 will be assessed a technical foul and ejected.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A5 is upset with Player B5, sees him over his shoulder and throws an elbow in the direction of his head but doesn\u2019t make contact. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Player A5 will be assessed a technical foul and ejected.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 396"
  },
  {
    "id": "casebook-2025-397",
    "case_number": 397,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 10, SECTION X"
    ],
    "question_text": "Player A1 secures possession of a rebound and swings his elbows excessively without making contact with any opposing players. This action is done with the intent of keeping his opponents away from him. What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "A violation is called on Player A1, and the ball is awarded to Team B out-of-bounds on the sideline but not nearer to the baseline than the free throw line extended.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 secures possession of a rebound and swings his elbows excessively without making contact with any opposing players. This action is done with the intent of keeping his opponents away from him. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "A violation is called on Player A1, and the ball is awarded to Team B out-of-bounds on the sideline but not nearer to the baseline than the free throw line extended.",
    "ruleReference": "RULE 10, SECTION X",
    "casebookReference": "Case 397"
  },
  {
    "id": "casebook-2025-398",
    "case_number": 398,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "Assistant Coach #5 is seated in the row immediately behind the team bench and during play is yelling at the official over what he believes was a missed call. Can a technical foul be assessed?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Yes. \u2018Coaches\u2019 in the second row have the same guidelines as those seated on the bench and they may not direct comments to an official during live or dead balls.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Assistant Coach #5 is seated in the row immediately behind the team bench and during play is yelling at the official over what he believes was a missed call. Can a technical foul be assessed?",
    "correctAnswer": "b",
    "ruling": "Yes. \u2018Coaches\u2019 in the second row have the same guidelines as those seated on the bench and they may not direct comments to an official during live or dead balls.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 398"
  },
  {
    "id": "casebook-2025-399",
    "case_number": 399,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "Upset about a call against him, Player B2 contacts the ball with his head soccer style and the ball \u2018bloops\u2019 into the stands. Is this an automatic ejection?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "No, the ball must enter the stands with force to be an automatic ejection. Player B2 shall be assessed an unsportsmanlike conduct technical foul.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Upset about a call against him, Player B2 contacts the ball with his head soccer style and the ball \u2018bloops\u2019 into the stands. Is this an automatic ejection?",
    "correctAnswer": "b",
    "ruling": "No, the ball must enter the stands with force to be an automatic ejection. Player B2 shall be assessed an unsportsmanlike conduct technical foul.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 399"
  },
  {
    "id": "casebook-2025-400",
    "case_number": 400,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "Is it an automatic Technical Foul to throw the ball against the basket stanchion?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "This is an automatic unsportsmanlike technical foul if the ball is thrown with force, regardless of the intention.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Is it an automatic Technical Foul to throw the ball against the basket stanchion?",
    "correctAnswer": "b",
    "ruling": "This is an automatic unsportsmanlike technical foul if the ball is thrown with force, regardless of the intention.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 400"
  },
  {
    "id": "casebook-2025-401",
    "case_number": 401,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A1 attempts a field goal near the baseline directly in front of Team B\u2019s bench. The Head Coach, who is standing on the sideline near the free throw line extended, runs towards A1 while he is in the act of shooting. What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Once the basket is successful, unsuccessful basket is rebounded or the ball becomes dead, an unsportsmanlike technical foul shall be assessed against the Head Coach.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 attempts a field goal near the baseline directly in front of Team B\u2019s bench. The Head Coach, who is standing on the sideline near the free throw line extended, runs towards A1 while he is in the act of shooting. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Once the basket is successful, unsuccessful basket is rebounded or the ball becomes dead, an unsportsmanlike technical foul shall be assessed against the Head Coach.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 401"
  },
  {
    "id": "casebook-2025-402",
    "case_number": 402,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A1 is attempting a field goal opposite Team B\u2019s bench. Bench Player B8 jumps up and waves a towel over his head as Player A1 is in the act of shooting. Is there a penalty?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 is attempting a field goal opposite Team B\u2019s bench. Bench Player B8 jumps up and waves a towel over his head as Player A1 is in the act of shooting. Is there a penalty?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 402"
  },
  {
    "id": "casebook-2025-403",
    "case_number": 403,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "During Player A1\u2019s free throw attempt in front of Team B\u2019s bench, bench Player B9 throws his warm-up shirt into the air. What is the ruling?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "An unsportsmanlike technical foul shall be assessed against any bench personnel who throws any \u2018prop\u2019 in the air while an opponent is shooting any free throw in the half court their bench is located.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "During Player A1\u2019s free throw attempt in front of Team B\u2019s bench, bench Player B9 throws his warm-up shirt into the air. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "An unsportsmanlike technical foul shall be assessed against any bench personnel who throws any \u2018prop\u2019 in the air while an opponent is shooting any free throw in the half court their bench is located.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 403"
  },
  {
    "id": "casebook-2025-404",
    "case_number": 404,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION V"
    ],
    "question_text": "Player A1 attempts a 3-point field goal directly in front of Team B\u2019s bench. As he is in the act of shooting, bench Player B10 steps aggressively toward Player A1 (and comes within a close distance to Player A) in an unsportsmanlike fashion and loudly yells at Player A1. Is there a penalty?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Yes, Player B10 should be called for an unsportsmanlike technical foul.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Player A1 attempts a 3-point field goal directly in front of Team B\u2019s bench. As he is in the act of shooting, bench Player B10 steps aggressively toward Player A1 (and comes within a close distance to Player A) in an unsportsmanlike fashion and loudly yells at Player A1. Is there a penalty?",
    "correctAnswer": "b",
    "ruling": "Yes, Player B10 should be called for an unsportsmanlike technical foul.",
    "ruleReference": "RULE 12A, SECTION V",
    "casebookReference": "Case 404"
  },
  {
    "id": "casebook-2025-405",
    "case_number": 405,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION III"
    ],
    "question_text": "Team A inbounds at 3:45 of the period and following a successful basket by A1 at 3:40, the officials halt play prior to the throw-in being released because Team B has 6 players on the court. How is this handled?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Team B is assessed a technical foul and any player on Team A in the game may attempt one free throw.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Team A inbounds at 3:45 of the period and following a successful basket by A1 at 3:40, the officials halt play prior to the throw-in being released because Team B has 6 players on the court. How is this handled?",
    "correctAnswer": "b",
    "ruling": "Team B is assessed a technical foul and any player on Team A in the game may attempt one free throw.",
    "ruleReference": "RULE 12A, SECTION III",
    "casebookReference": "Case 405"
  },
  {
    "id": "casebook-2025-406",
    "case_number": 406,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION III"
    ],
    "question_text": "At 4:56 Player A4\u2019s unsuccessful free throw is tapped in by Player A5 and it is then noticed that Team A had 6 players on the court. How is this handled?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Team A is assessed a technical foul and any player in the game may attempt the one free throw.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "At 4:56 Player A4\u2019s unsuccessful free throw is tapped in by Player A5 and it is then noticed that Team A had 6 players on the court. How is this handled?",
    "correctAnswer": "b",
    "ruling": "Team A is assessed a technical foul and any player in the game may attempt the one free throw.",
    "ruleReference": "RULE 12A, SECTION III",
    "casebookReference": "Case 406"
  },
  {
    "id": "casebook-2025-407",
    "case_number": 407,
    "casebook_category": "TECHNICAL FOULS",
    "parent_category": "flagrant-technical-fighting",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 12A, SECTION III"
    ],
    "question_text": "Team A inbounds at 3:45 of the period and following a successful basket by A1 at 3:40, the officials halt play prior to the throw-in being released because Team A has 6 players on the court. How is this handled?",
    "options": {
      "A": "Warning issued: conduct doesn't warrant immediate penalty",
      "B": "Technical foul: one free throw plus possession awarded",
      "C": "Flagrant foul: conduct involved unnecessary contact",
      "D": "No violation: behavior was within acceptable limits",
      "a": "Warning issued: conduct doesn't warrant immediate penalty",
      "b": "Technical foul: one free throw plus possession awarded",
      "c": "Flagrant foul: conduct involved unnecessary contact",
      "d": "No violation: behavior was within acceptable limits"
    },
    "correct_answer": "B",
    "explanation": "Team A is assessed a technical foul and any player on Team B in the game may attempt one free throw.",
    "distractor_rationale": {
      "A": "Conduct warrants immediate technical foul penalty",
      "C": "No physical contact; technical is appropriate",
      "D": "Conduct clearly violated unsportsmanlike rules"
    },
    "category": "TECHNICAL FOULS",
    "scenario": "",
    "question": "Team A inbounds at 3:45 of the period and following a successful basket by A1 at 3:40, the officials halt play prior to the throw-in being released because Team A has 6 players on the court. How is this handled?",
    "correctAnswer": "b",
    "ruling": "Team A is assessed a technical foul and any player on Team B in the game may attempt one free throw.",
    "ruleReference": "RULE 12A, SECTION III",
    "casebookReference": "Case 407"
  },
  {
    "id": "casebook-2025-408",
    "case_number": 408,
    "casebook_category": "THREE-POINT FIELD GOAL",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION I"
    ],
    "question_text": "Player A1 attempts a successful three-point field goal from behind the three-point line. After the release of the ball, he steps on the three-point line. Is this a threepoint field goal?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "Yes. When attempting the three-point field goal, the player must originate the attempt with his feet behind the three-point line, but may step on the line after he releases the ball.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "THREE-POINT FIELD GOAL",
    "scenario": "",
    "question": "Player A1 attempts a successful three-point field goal from behind the three-point line. After the release of the ball, he steps on the three-point line. Is this a threepoint field goal?",
    "correctAnswer": "b",
    "ruling": "Yes. When attempting the three-point field goal, the player must originate the attempt with his feet behind the three-point line, but may step on the line after he releases the ball.",
    "ruleReference": "RULE 5, SECTION I",
    "casebookReference": "Case 408"
  },
  {
    "id": "casebook-2025-409",
    "case_number": 409,
    "casebook_category": "THREE-POINT FIELD GOAL",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 11, SECTION I"
    ],
    "question_text": "Player A1 attempts a three-point field goal, and Player B1 is called for goaltending as the ball: (1) is on its downward flight, (2) bounces on the basket ring and is in the cylinder, (3) bounces away from the basket ring and cylinder and is tapped in by Player A2. How is the play ruled?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "Situations (1) and (2): Team A is awarded the three-point field goal. Situation (3): Team A is awarded a two-point field goal.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "THREE-POINT FIELD GOAL",
    "scenario": "",
    "question": "Player A1 attempts a three-point field goal, and Player B1 is called for goaltending as the ball: (1) is on its downward flight, (2) bounces on the basket ring and is in the cylinder, (3) bounces away from the basket ring and cylinder and is tapped in by Player A2. How is the play ruled?",
    "correctAnswer": "b",
    "ruling": "Situations (1) and (2): Team A is awarded the three-point field goal. Situation (3): Team A is awarded a two-point field goal.",
    "ruleReference": "RULE 11, SECTION I",
    "casebookReference": "Case 409"
  },
  {
    "id": "casebook-2025-410",
    "case_number": 410,
    "casebook_category": "THREE-POINT FIELD GOAL",
    "parent_category": "goaltending-basket-interference",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION I"
    ],
    "question_text": "Player A1\u2019s pass from beyond the three-point field goal line is deflected by Player B2 in the \u201ckey\u201d area and continues into the basket. How many points should be awarded?",
    "options": {
      "A": "Goaltending violation; basket counts for offensive team",
      "B": "Legal play; block occurred before ball's downward flight",
      "C": "Basket interference; ball was on or above the cylinder",
      "D": "Offensive goaltending; offensive player touched ball illegally",
      "a": "Goaltending violation; basket counts for offensive team",
      "b": "Legal play; block occurred before ball's downward flight",
      "c": "Basket interference; ball was on or above the cylinder",
      "d": "Offensive goaltending; offensive player touched ball illegally"
    },
    "correct_answer": "B",
    "explanation": "Two points.",
    "distractor_rationale": {
      "A": "Ball wasn't in protected downward flight",
      "C": "Ball was not on or directly above the cylinder",
      "D": "No offensive player involvement in this play"
    },
    "category": "THREE-POINT FIELD GOAL",
    "scenario": "",
    "question": "Player A1\u2019s pass from beyond the three-point field goal line is deflected by Player B2 in the \u201ckey\u201d area and continues into the basket. How many points should be awarded?",
    "correctAnswer": "b",
    "ruling": "Two points.",
    "ruleReference": "RULE 5, SECTION I",
    "casebookReference": "Case 410"
  },
  {
    "id": "casebook-2025-411",
    "case_number": 411,
    "casebook_category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION VII"
    ],
    "question_text": "Player B1 is in the key area guarding Player A1 with the ball above the 3-point line. What restrictions are on Player B1?",
    "options": {
      "A": "No violation; player exited lane before 3 seconds",
      "B": "3-second violation; ball awarded to opposing team",
      "C": "Warning only; first 3-second offense of the game",
      "D": "Technical foul for defensive 3-second violation",
      "a": "No violation; player exited lane before 3 seconds",
      "b": "3-second violation; ball awarded to opposing team",
      "c": "Warning only; first 3-second offense of the game",
      "d": "Technical foul for defensive 3-second violation"
    },
    "correct_answer": "D",
    "explanation": "Player B1 may be in the key area with no time limit because he is guarding the player with the ball.",
    "distractor_rationale": {
      "A": "Player exceeded 3 seconds in the lane",
      "B": "Defensive 3-second is a technical, not turnover",
      "C": "No warning system for 3-second violations"
    },
    "category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "scenario": "",
    "question": "Player B1 is in the key area guarding Player A1 with the ball above the 3-point line. What restrictions are on Player B1?",
    "correctAnswer": "d",
    "ruling": "Player B1 may be in the key area with no time limit because he is guarding the player with the ball.",
    "ruleReference": "RULE 10, SECTION VII",
    "casebookReference": "Case 411"
  },
  {
    "id": "casebook-2025-412",
    "case_number": 412,
    "casebook_category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION VII"
    ],
    "question_text": "Weakside defensive Player B1 rotates to the strongside to double-team Player A2 without the ball. Is this legal?",
    "options": {
      "A": "No violation; player exited lane before 3 seconds",
      "B": "3-second violation; ball awarded to opposing team",
      "C": "Warning only; first 3-second offense of the game",
      "D": "Technical foul for defensive 3-second violation",
      "a": "No violation; player exited lane before 3 seconds",
      "b": "3-second violation; ball awarded to opposing team",
      "c": "Warning only; first 3-second offense of the game",
      "d": "Technical foul for defensive 3-second violation"
    },
    "correct_answer": "D",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Player exceeded 3 seconds in the lane",
      "B": "Defensive 3-second is a technical, not turnover",
      "C": "No warning system for 3-second violations"
    },
    "category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "scenario": "",
    "question": "Weakside defensive Player B1 rotates to the strongside to double-team Player A2 without the ball. Is this legal?",
    "correctAnswer": "d",
    "ruling": "Yes.",
    "ruleReference": "RULE 10, SECTION VII",
    "casebookReference": "Case 412"
  },
  {
    "id": "casebook-2025-413",
    "case_number": 413,
    "casebook_category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION VII"
    ],
    "question_text": "Defensive Player B1 is in the key area on the count of 2 when he reacts to a ball fake. Does he get additional time?",
    "options": {
      "A": "No violation; player exited lane before 3 seconds",
      "B": "3-second violation; ball awarded to opposing team",
      "C": "Warning only; first 3-second offense of the game",
      "D": "Technical foul for defensive 3-second violation",
      "a": "No violation; player exited lane before 3 seconds",
      "b": "3-second violation; ball awarded to opposing team",
      "c": "Warning only; first 3-second offense of the game",
      "d": "Technical foul for defensive 3-second violation"
    },
    "correct_answer": "D",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Player exceeded 3 seconds in the lane",
      "B": "Defensive 3-second is a technical, not turnover",
      "C": "No warning system for 3-second violations"
    },
    "category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "scenario": "",
    "question": "Defensive Player B1 is in the key area on the count of 2 when he reacts to a ball fake. Does he get additional time?",
    "correctAnswer": "d",
    "ruling": "No.",
    "ruleReference": "RULE 10, SECTION VII",
    "casebookReference": "Case 413"
  },
  {
    "id": "casebook-2025-414",
    "case_number": 414,
    "casebook_category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION VII"
    ],
    "question_text": "Defensive Player B1 is in the key area guarding Player A1 who is positioned outside the 3-point line without the ball. As the official reaches a count of two, cutter A2 passes within an arms length behind Player B1. Does Player B1 receive a new count?",
    "options": {
      "A": "No violation occurred on this play",
      "B": "Violation; ball awarded to the opposing team",
      "C": "Technical foul for the rules infraction",
      "D": "Jump ball at the nearest restraining circle",
      "a": "No violation occurred on this play",
      "b": "Violation; ball awarded to the opposing team",
      "c": "Technical foul for the rules infraction",
      "d": "Jump ball at the nearest restraining circle"
    },
    "correct_answer": "B",
    "explanation": "Not necessarily.",
    "distractor_rationale": {
      "A": "Rules were violated on this play",
      "C": "Standard violation, not technical foul",
      "D": "Not a jump ball situation"
    },
    "category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "scenario": "",
    "question": "Defensive Player B1 is in the key area guarding Player A1 who is positioned outside the 3-point line without the ball. As the official reaches a count of two, cutter A2 passes within an arms length behind Player B1. Does Player B1 receive a new count?",
    "correctAnswer": "b",
    "ruling": "Not necessarily.",
    "ruleReference": "RULE 10, SECTION VII",
    "casebookReference": "Case 414"
  },
  {
    "id": "casebook-2025-415",
    "case_number": 415,
    "casebook_category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION VII"
    ],
    "question_text": "Player A1 is in the act of shooting a successful basket when the official whistles a defensive three second violation. What is the procedure?",
    "options": {
      "A": "No violation occurred on this play",
      "B": "Violation; ball awarded to the opposing team",
      "C": "Technical foul for the rules infraction",
      "D": "Jump ball at the nearest restraining circle",
      "a": "No violation occurred on this play",
      "b": "Violation; ball awarded to the opposing team",
      "c": "Technical foul for the rules infraction",
      "d": "Jump ball at the nearest restraining circle"
    },
    "correct_answer": "B",
    "explanation": "The basket shall be scored and the violation ignored. The official will award the ball to Team B on the baseline with all privileges as after any score.",
    "distractor_rationale": {
      "A": "Rules were violated on this play",
      "C": "Standard violation, not technical foul",
      "D": "Not a jump ball situation"
    },
    "category": "THREE-SECOND VIOLATION (DEFENSIVE)",
    "scenario": "",
    "question": "Player A1 is in the act of shooting a successful basket when the official whistles a defensive three second violation. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "The basket shall be scored and the violation ignored. The official will award the ball to Team B on the baseline with all privileges as after any score.",
    "ruleReference": "RULE 10, SECTION VII",
    "casebookReference": "Case 415"
  },
  {
    "id": "casebook-2025-416",
    "case_number": 416,
    "casebook_category": "THREE-SECOND VIOLATION (OFFENSIVE)",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION VI",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "Is it a violation if offensive Player A1 is in the \u201ckey\u201d area for more than three seconds: (1) when the ball is touched by Player B1 and team control no longer exists or (2) while rebounding an unsuccessful field goal?",
    "options": {
      "A": "No violation; player exited lane before 3 seconds",
      "B": "3-second violation; ball awarded to opposing team",
      "C": "Warning only; first 3-second offense of the game",
      "D": "Technical foul for defensive 3-second violation",
      "a": "No violation; player exited lane before 3 seconds",
      "b": "3-second violation; ball awarded to opposing team",
      "c": "Warning only; first 3-second offense of the game",
      "d": "Technical foul for defensive 3-second violation"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): No violation.",
    "distractor_rationale": {
      "A": "Player exceeded allowed time in the lane",
      "C": "No warning system for 3-second violations",
      "D": "Offensive 3-second is turnover, not technical"
    },
    "category": "THREE-SECOND VIOLATION (OFFENSIVE)",
    "scenario": "",
    "question": "Is it a violation if offensive Player A1 is in the \u201ckey\u201d area for more than three seconds: (1) when the ball is touched by Player B1 and team control no longer exists or (2) while rebounding an unsuccessful field goal?",
    "correctAnswer": "b",
    "ruling": "Situation (1): No violation.",
    "ruleReference": "RULE 10, SECTION VI, RULE 4, SECTION XIV",
    "casebookReference": "Case 416"
  },
  {
    "id": "casebook-2025-417",
    "case_number": 417,
    "casebook_category": "THREE-SECOND VIOLATION (OFFENSIVE)",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION VI",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "When does the offensive 3-second rule go into effect?",
    "options": {
      "A": "No violation; player exited lane before 3 seconds",
      "B": "3-second violation; ball awarded to opposing team",
      "C": "Warning only; first 3-second offense of the game",
      "D": "Technical foul for defensive 3-second violation",
      "a": "No violation; player exited lane before 3 seconds",
      "b": "3-second violation; ball awarded to opposing team",
      "c": "Warning only; first 3-second offense of the game",
      "d": "Technical foul for defensive 3-second violation"
    },
    "correct_answer": "B",
    "explanation": "As soon as Team A gains control of the ball in its frontcourt.",
    "distractor_rationale": {
      "A": "Player exceeded allowed time in the lane",
      "C": "No warning system for 3-second violations",
      "D": "Offensive 3-second is turnover, not technical"
    },
    "category": "THREE-SECOND VIOLATION (OFFENSIVE)",
    "scenario": "",
    "question": "When does the offensive 3-second rule go into effect?",
    "correctAnswer": "b",
    "ruling": "As soon as Team A gains control of the ball in its frontcourt.",
    "ruleReference": "RULE 10, SECTION VI, RULE 4, SECTION XIV",
    "casebookReference": "Case 417"
  },
  {
    "id": "casebook-2025-418",
    "case_number": 418,
    "casebook_category": "THREE-SECOND VIOLATION (OFFENSIVE)",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION VI",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "Player A1 receives a pass from one of his teammates near the 3-second lane. As he fumbles the ball, it enters the 3-second lane area and Player A1 attempts to recover. He remains in the lane for more than three seconds without the ball being fully recovered. Is this a violation?",
    "options": {
      "A": "No violation; player exited lane before 3 seconds",
      "B": "3-second violation; ball awarded to opposing team",
      "C": "Warning only; first 3-second offense of the game",
      "D": "Technical foul for defensive 3-second violation",
      "a": "No violation; player exited lane before 3 seconds",
      "b": "3-second violation; ball awarded to opposing team",
      "c": "Warning only; first 3-second offense of the game",
      "d": "Technical foul for defensive 3-second violation"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Player exceeded allowed time in the lane",
      "C": "No warning system for 3-second violations",
      "D": "Offensive 3-second is turnover, not technical"
    },
    "category": "THREE-SECOND VIOLATION (OFFENSIVE)",
    "scenario": "",
    "question": "Player A1 receives a pass from one of his teammates near the 3-second lane. As he fumbles the ball, it enters the 3-second lane area and Player A1 attempts to recover. He remains in the lane for more than three seconds without the ball being fully recovered. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 10, SECTION VI, RULE 4, SECTION XIV",
    "casebookReference": "Case 418"
  },
  {
    "id": "casebook-2025-419",
    "case_number": 419,
    "casebook_category": "THREE-SECOND VIOLATION (OFFENSIVE)",
    "parent_category": "violations-general",
    "difficulty": "beginner",
    "rule_references": [
      "RULE 10, SECTION VI"
    ],
    "question_text": "Player A1 has possession of the ball in the 3-second lane for approximately two seconds. He passes the ball to Player A2 and then steps out-of-bounds in the 3-second lane extended for four seconds. What is the ruling?",
    "options": {
      "A": "No violation; player exited lane before 3 seconds",
      "B": "3-second violation; ball awarded to opposing team",
      "C": "Warning only; first 3-second offense of the game",
      "D": "Technical foul for defensive 3-second violation",
      "a": "No violation; player exited lane before 3 seconds",
      "b": "3-second violation; ball awarded to opposing team",
      "c": "Warning only; first 3-second offense of the game",
      "d": "Technical foul for defensive 3-second violation"
    },
    "correct_answer": "B",
    "explanation": "Player A1 has committed an offensive 3-second violation. The 3-second lane extends four feet (imaginary) off the end of the court.",
    "distractor_rationale": {
      "A": "Player exceeded allowed time in the lane",
      "C": "No warning system for 3-second violations",
      "D": "Offensive 3-second is turnover, not technical"
    },
    "category": "THREE-SECOND VIOLATION (OFFENSIVE)",
    "scenario": "",
    "question": "Player A1 has possession of the ball in the 3-second lane for approximately two seconds. He passes the ball to Player A2 and then steps out-of-bounds in the 3-second lane extended for four seconds. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Player A1 has committed an offensive 3-second violation. The 3-second lane extends four feet (imaginary) off the end of the court.",
    "ruleReference": "RULE 10, SECTION VI",
    "casebookReference": "Case 419"
  },
  {
    "id": "casebook-2025-420",
    "case_number": 420,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION III",
      "RULE 8, SECTION III"
    ],
    "question_text": "While attempting a throw-in, Player A1 throws the ball out-of-bounds without it having touched a player on the court. Where is the ball awarded to Team B?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "At the point of the original throw-in.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "While attempting a throw-in, Player A1 throws the ball out-of-bounds without it having touched a player on the court. Where is the ball awarded to Team B?",
    "correctAnswer": "b",
    "ruling": "At the point of the original throw-in.",
    "ruleReference": "RULE 10, SECTION III, RULE 8, SECTION III",
    "casebookReference": "Case 420"
  },
  {
    "id": "casebook-2025-421",
    "case_number": 421,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VII"
    ],
    "question_text": "Player A1 has control of the ball on the right side of his frontcourt and requests a timeout. Upon resumption of play, he wishes to put the ball into play on the left side of the frontcourt. What is the correct ruling?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "The ball must be put into play on the sideline nearest the spot where play was interrupted. If the point of interruption is in the middle of the court, the team may inbound on either sideline.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Player A1 has control of the ball on the right side of his frontcourt and requests a timeout. Upon resumption of play, he wishes to put the ball into play on the left side of the frontcourt. What is the correct ruling?",
    "correctAnswer": "b",
    "ruling": "The ball must be put into play on the sideline nearest the spot where play was interrupted. If the point of interruption is in the middle of the court, the team may inbound on either sideline.",
    "ruleReference": "RULE 5, SECTION VII",
    "casebookReference": "Case 421"
  },
  {
    "id": "casebook-2025-422",
    "case_number": 422,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION III"
    ],
    "question_text": "How many seconds does a player have to release the ball on a throw-in?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "Five seconds. The count begins when the player has control of the ball and stops when the ball is released on the throw-in.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "How many seconds does a player have to release the ball on a throw-in?",
    "correctAnswer": "b",
    "ruling": "Five seconds. The count begins when the player has control of the ball and stops when the ball is released on the throw-in.",
    "ruleReference": "RULE 8, SECTION III",
    "casebookReference": "Case 422"
  },
  {
    "id": "casebook-2025-423",
    "case_number": 423,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION III",
      "RULE 8, SECTION III"
    ],
    "question_text": "Player A1 is out-of-bounds ready to accept the ball from the official for a throw-in. Player A1 refuses to accept the ball. What is the correct ruling?",
    "options": {
      "A": "Re-throw for the original team at same location",
      "B": "Turnover; opponent's ball at the original throw-in spot",
      "C": "Jump ball at the nearest restraining circle",
      "D": "Opponent's ball where the ball went out of bounds",
      "a": "Re-throw for the original team at same location",
      "b": "Turnover; opponent's ball at the original throw-in spot",
      "c": "Jump ball at the nearest restraining circle",
      "d": "Opponent's ball where the ball went out of bounds"
    },
    "correct_answer": "B",
    "explanation": "The official will hold the ball with one hand making it available to the thrower-in and start the 5-second count with his/her other arm.",
    "distractor_rationale": {
      "A": "Throw-in violation results in turnover",
      "C": "Not a jump ball situation",
      "D": "Ball returns to original throw-in spot, not where it landed"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Player A1 is out-of-bounds ready to accept the ball from the official for a throw-in. Player A1 refuses to accept the ball. What is the correct ruling?",
    "correctAnswer": "b",
    "ruling": "The official will hold the ball with one hand making it available to the thrower-in and start the 5-second count with his/her other arm.",
    "ruleReference": "RULE 10, SECTION III, RULE 8, SECTION III",
    "casebookReference": "Case 423"
  },
  {
    "id": "casebook-2025-424",
    "case_number": 424,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION I"
    ],
    "question_text": "Player B1, who is standing inbounds, blocks a throw-in and the ball continues into Team A\u2019s basket. Is this a legal field goal?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "Yes. The points are credited to the nearest opponent. If Player B1 is outside the three-point line, three points shall be scored.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Player B1, who is standing inbounds, blocks a throw-in and the ball continues into Team A\u2019s basket. Is this a legal field goal?",
    "correctAnswer": "b",
    "ruling": "Yes. The points are credited to the nearest opponent. If Player B1 is outside the three-point line, three points shall be scored.",
    "ruleReference": "RULE 5, SECTION I",
    "casebookReference": "Case 424"
  },
  {
    "id": "casebook-2025-425",
    "case_number": 425,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION III"
    ],
    "question_text": "During a throw-in from out-of-bounds, Player A1 steps over the boundary line onto the floor in his attempt to release the ball. Is this a violation?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "Yes. The thrower-in may step on the line, but may not touch the floor over the line until the ball is released.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "During a throw-in from out-of-bounds, Player A1 steps over the boundary line onto the floor in his attempt to release the ball. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "Yes. The thrower-in may step on the line, but may not touch the floor over the line until the ball is released.",
    "ruleReference": "RULE 10, SECTION III",
    "casebookReference": "Case 425"
  },
  {
    "id": "casebook-2025-426",
    "case_number": 426,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION III",
      "RULE 6, SECTION I"
    ],
    "question_text": "When is the ball put into play on the baseline?",
    "options": {
      "A": "Re-throw for the original team at same location",
      "B": "Turnover; opponent's ball at the original throw-in spot",
      "C": "Jump ball at the nearest restraining circle",
      "D": "Opponent's ball where the ball went out of bounds",
      "a": "Re-throw for the original team at same location",
      "b": "Turnover; opponent's ball at the original throw-in spot",
      "c": "Jump ball at the nearest restraining circle",
      "d": "Opponent's ball where the ball went out of bounds"
    },
    "correct_answer": "B",
    "explanation": "(1) after a score of any kind, (2) when the ball leaves the playing court at that point, (3) failure to properly inbound the ball from that position, (4) start of second, third and fourth periods.",
    "distractor_rationale": {
      "A": "Throw-in violation results in turnover",
      "C": "Not a jump ball situation",
      "D": "Ball returns to original throw-in spot, not where it landed"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "When is the ball put into play on the baseline?",
    "correctAnswer": "b",
    "ruling": "(1) after a score of any kind, (2) when the ball leaves the playing court at that point, (3) failure to properly inbound the ball from that position, (4) start of second, third and fourth periods.",
    "ruleReference": "RULE 8, SECTION III, RULE 6, SECTION I",
    "casebookReference": "Case 426"
  },
  {
    "id": "casebook-2025-427",
    "case_number": 427,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 2, SECTION VIII",
      "RULE 7, SECTION II"
    ],
    "question_text": "A throw-in hits the basket ring or backboard before touching a player on the court. If Player A3 receives the ball and scores a successful field goal, is it legal?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "Yes. The basket ring and backboard are legal surfaces. The game clock and shot clock do not start until the ball is touched by Player A3.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "A throw-in hits the basket ring or backboard before touching a player on the court. If Player A3 receives the ball and scores a successful field goal, is it legal?",
    "correctAnswer": "b",
    "ruling": "Yes. The basket ring and backboard are legal surfaces. The game clock and shot clock do not start until the ball is touched by Player A3.",
    "ruleReference": "RULE 2, SECTION VIII, RULE 7, SECTION II",
    "casebookReference": "Case 427"
  },
  {
    "id": "casebook-2025-428",
    "case_number": 428,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION III"
    ],
    "question_text": "Attempting a throw-in after a successful field goal/free throw, Player A1 runs along the baseline. Is this a violation?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Attempting a throw-in after a successful field goal/free throw, Player A1 runs along the baseline. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 8, SECTION III",
    "casebookReference": "Case 428"
  },
  {
    "id": "casebook-2025-429",
    "case_number": 429,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12A, SECTION II",
      "RULE 8, SECTION III"
    ],
    "question_text": "While attempting a throw-in after a successful field goal with 1:50 remaining in the third period, Player A1 passes the ball to Player A2 who is also out-of-bounds. What restrictions are placed on the: (1) other offensive players or (2) defensive player?",
    "options": {
      "A": "Re-throw for the original team at same location",
      "B": "Turnover; opponent's ball at the original throw-in spot",
      "C": "Jump ball at the nearest restraining circle",
      "D": "Opponent's ball where the ball went out of bounds",
      "a": "Re-throw for the original team at same location",
      "b": "Turnover; opponent's ball at the original throw-in spot",
      "c": "Jump ball at the nearest restraining circle",
      "d": "Opponent's ball where the ball went out of bounds"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): It is a violation if an offensive player reaches across the boundary line and touches the ball.",
    "distractor_rationale": {
      "A": "Throw-in violation results in turnover",
      "C": "Not a jump ball situation",
      "D": "Ball returns to original throw-in spot, not where it landed"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "While attempting a throw-in after a successful field goal with 1:50 remaining in the third period, Player A1 passes the ball to Player A2 who is also out-of-bounds. What restrictions are placed on the: (1) other offensive players or (2) defensive player?",
    "correctAnswer": "b",
    "ruling": "Situation (1): It is a violation if an offensive player reaches across the boundary line and touches the ball.",
    "ruleReference": "RULE 12A, SECTION II, RULE 8, SECTION III",
    "casebookReference": "Case 429"
  },
  {
    "id": "casebook-2025-430",
    "case_number": 430,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION III",
      "RULE 8, SECTION III"
    ],
    "question_text": "On a throw-in by Player A1, the ball goes into the basket without touching a player on the court. Is this a legal field goal?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "No. The ball must be touched by a player on the court. Team B would be awarded the ball at the spot of the original throw-in. During a throw-in, you cannot have goaltending or basket interference.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "On a throw-in by Player A1, the ball goes into the basket without touching a player on the court. Is this a legal field goal?",
    "correctAnswer": "b",
    "ruling": "No. The ball must be touched by a player on the court. Team B would be awarded the ball at the spot of the original throw-in. During a throw-in, you cannot have goaltending or basket interference.",
    "ruleReference": "RULE 10, SECTION III, RULE 8, SECTION III",
    "casebookReference": "Case 430"
  },
  {
    "id": "casebook-2025-431",
    "case_number": 431,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 6, SECTION V"
    ],
    "question_text": "While Player A1 is attempting a throw-in, the ball lodges in the basket support before touching a player on the court. What is the ruling?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "A jump ball at center circle between any two opponents.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "While Player A1 is attempting a throw-in, the ball lodges in the basket support before touching a player on the court. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "A jump ball at center circle between any two opponents.",
    "ruleReference": "RULE 6, SECTION V",
    "casebookReference": "Case 431"
  },
  {
    "id": "casebook-2025-432",
    "case_number": 432,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION III"
    ],
    "question_text": "While attempting a throw-in following a violation, Player A1 takes more than one step, jump or stride from the original in-bounds spot before releasing the ball. Is this a violation?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "Yes. On a throw-in, Player A1 is allowed no more than one step or stride as in normal passing movement.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "While attempting a throw-in following a violation, Player A1 takes more than one step, jump or stride from the original in-bounds spot before releasing the ball. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "Yes. On a throw-in, Player A1 is allowed no more than one step or stride as in normal passing movement.",
    "ruleReference": "RULE 10, SECTION III",
    "casebookReference": "Case 432"
  },
  {
    "id": "casebook-2025-433",
    "case_number": 433,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION III",
      "RULE 8, SECTION III"
    ],
    "question_text": "On a throw-in, what determines the distance between the defensive and offensive player involved in the throw-in?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "The defensive player must allow the offensive player ample room to make the throw-in when the area out-of-bounds is restricted.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "On a throw-in, what determines the distance between the defensive and offensive player involved in the throw-in?",
    "correctAnswer": "b",
    "ruling": "The defensive player must allow the offensive player ample room to make the throw-in when the area out-of-bounds is restricted.",
    "ruleReference": "RULE 10, SECTION III, RULE 8, SECTION III",
    "casebookReference": "Case 433"
  },
  {
    "id": "casebook-2025-434",
    "case_number": 434,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION III"
    ],
    "question_text": "On a baseline throw-in at Team A's basket, four players set a multiple screen. Are defensive players allowed to take position between the offensive players if the screen is: (1) perpendicular to the baseline, or (2) parallel to the baseline?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "On a baseline throw-in at Team A's basket, four players set a multiple screen. Are defensive players allowed to take position between the offensive players if the screen is: (1) perpendicular to the baseline, or (2) parallel to the baseline?",
    "correctAnswer": "b",
    "ruling": "Yes. Defensive players are always allowed to take a position between the offensive players and the basket during a throw-in.",
    "ruleReference": "RULE 8, SECTION III",
    "casebookReference": "Case 434"
  },
  {
    "id": "casebook-2025-435",
    "case_number": 435,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 6, SECTION I"
    ],
    "question_text": "Following an unsuccessful field goal by Player A1, the ball is deflected by Player B1 and it: (1) hits the horizontal backboard brace, or (2) hits the vertical standard support, or (3) passes directly behind the backboard Where is the throw-in administered?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "Situation (1): Free throw line extended. Situation (2): Baseline outside 16\u2019 lane. Situation (3): Free throw line extended.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Following an unsuccessful field goal by Player A1, the ball is deflected by Player B1 and it: (1) hits the horizontal backboard brace, or (2) hits the vertical standard support, or (3) passes directly behind the backboard Where is the throw-in administered?",
    "correctAnswer": "b",
    "ruling": "Situation (1): Free throw line extended. Situation (2): Baseline outside 16\u2019 lane. Situation (3): Free throw line extended.",
    "ruleReference": "RULE 6, SECTION I",
    "casebookReference": "Case 435"
  },
  {
    "id": "casebook-2025-436",
    "case_number": 436,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION III",
      "RULE 5, SECTION VI"
    ],
    "question_text": "With :09.4 remaining in the fourth period, following a successful field goal by Team A, Team B immediately calls a timeout. Upon resumption of play, Team B exercises its option and has the ball advanced to the 28\u2019 hash mark. Player B1 now commits a 5-second throw-in violation. What is the ruling and where is the ball put into play?",
    "options": {
      "A": "Throw-in from baseline under the basket only",
      "B": "Throw-in from sideline nearest the foul location",
      "C": "Option to advance ball to frontcourt at 28-foot mark",
      "D": "Throw-in from midcourt line only",
      "a": "Throw-in from baseline under the basket only",
      "b": "Throw-in from sideline nearest the foul location",
      "c": "Option to advance ball to frontcourt at 28-foot mark",
      "d": "Throw-in from midcourt line only"
    },
    "correct_answer": "C",
    "explanation": "The ball will be inbounded by Team A at the spot of the violation and may advance the ball if they call a timeout.",
    "distractor_rationale": {
      "A": "Advancement option allows throw-in at 28-foot mark",
      "B": "Can advance further than nearest sideline spot",
      "D": "28-foot mark is the correct advancement spot"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "With :09.4 remaining in the fourth period, following a successful field goal by Team A, Team B immediately calls a timeout. Upon resumption of play, Team B exercises its option and has the ball advanced to the 28\u2019 hash mark. Player B1 now commits a 5-second throw-in violation. What is the ruling and where is the ball put into play?",
    "correctAnswer": "c",
    "ruling": "The ball will be inbounded by Team A at the spot of the violation and may advance the ball if they call a timeout.",
    "ruleReference": "RULE 10, SECTION III, RULE 5, SECTION VI",
    "casebookReference": "Case 436"
  },
  {
    "id": "casebook-2025-437",
    "case_number": 437,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 8, SECTION III"
    ],
    "question_text": "Player A1, in an attempt to inbound the ball on the baseline, throws the ball in such a manner that it: (1) touches out-of-bounds prior to touching a player in the game, (2) strikes the back of the backboard, (3) strikes the horizontal brace which holds the backboard,  (4) passes directly behind the backboard, (5) hits the scoreboard, (6) touches Player A2 who is out-of-bounds (7) touches Player B2 who is out-of-bounds What is the procedure and where is the ball put into play?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "Situations (1) - (5): Player A1 is guilty of failing to throw the ball directly inbounds; the ball is awarded to Team B on the baseline at the original throw-in spot.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Player A1, in an attempt to inbound the ball on the baseline, throws the ball in such a manner that it: (1) touches out-of-bounds prior to touching a player in the game, (2) strikes the back of the backboard, (3) strikes the horizontal brace which holds the backboard,  (4) passes directly behind the backboard, (5) hits the scoreboard, (6) touches Player A2 who is out-of-bounds (7) touches Player B2 who is out-of-bounds What is the procedure and where is the ball put into play?",
    "correctAnswer": "b",
    "ruling": "Situations (1) - (5): Player A1 is guilty of failing to throw the ball directly inbounds; the ball is awarded to Team B on the baseline at the original throw-in spot.",
    "ruleReference": "RULE 8, SECTION III",
    "casebookReference": "Case 437"
  },
  {
    "id": "casebook-2025-438",
    "case_number": 438,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "The ball has been awarded to Player A1 for a throw-in on the baseline in the backcourt with 1:36 to play in the fourth period. After two seconds, Player A1 wishes to exercise his option and move the ball to the 28\u2019 hash mark. What is the ruling?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "Team A must call a timeout or it has no option.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "The ball has been awarded to Player A1 for a throw-in on the baseline in the backcourt with 1:36 to play in the fourth period. After two seconds, Player A1 wishes to exercise his option and move the ball to the 28\u2019 hash mark. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Team A must call a timeout or it has no option.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 438"
  },
  {
    "id": "casebook-2025-439",
    "case_number": 439,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION III"
    ],
    "question_text": "Player A1 hands the ball to Player A2 on a throw-in. What is the ruling?",
    "options": {
      "A": "Re-throw for the original team at same location",
      "B": "Turnover; opponent's ball at the original throw-in spot",
      "C": "Jump ball at the nearest restraining circle",
      "D": "Opponent's ball where the ball went out of bounds",
      "a": "Re-throw for the original team at same location",
      "b": "Turnover; opponent's ball at the original throw-in spot",
      "c": "Jump ball at the nearest restraining circle",
      "d": "Opponent's ball where the ball went out of bounds"
    },
    "correct_answer": "B",
    "explanation": "Violation by Team A. The ball is awarded to Team B at the spot of the throw-in.",
    "distractor_rationale": {
      "A": "Throw-in violation results in turnover",
      "C": "Not a jump ball situation",
      "D": "Ball returns to original throw-in spot, not where it landed"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Player A1 hands the ball to Player A2 on a throw-in. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Violation by Team A. The ball is awarded to Team B at the spot of the throw-in.",
    "ruleReference": "RULE 10, SECTION III",
    "casebookReference": "Case 439"
  },
  {
    "id": "casebook-2025-440",
    "case_number": 440,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 2, SECTION III",
      "RULE 8, SECTION III"
    ],
    "question_text": "Following a successful field goal by Team B, Player A1 attempts to pass to Player A2, who is also out-of-bounds. The ball hits an official, who is also out-of-bounds. What is the ruling?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "The official will stop play and award the ball back to Team A for another throw-in attempt, with the option of running the baseline.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Following a successful field goal by Team B, Player A1 attempts to pass to Player A2, who is also out-of-bounds. The ball hits an official, who is also out-of-bounds. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The official will stop play and award the ball back to Team A for another throw-in attempt, with the option of running the baseline.",
    "ruleReference": "RULE 2, SECTION III, RULE 8, SECTION III",
    "casebookReference": "Case 440"
  },
  {
    "id": "casebook-2025-441",
    "case_number": 441,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION III"
    ],
    "question_text": "With :35.2 remaining in the second period, Player A1\u2019s baseline throw-in to Player A2 hits an official on the court. Player A1 retrieves the ball and advances upcourt. Official blew his whistle with :32.9 on the game clock. What is the ruling?",
    "options": {
      "A": "Re-throw for the original team at same location",
      "B": "Turnover; opponent's ball at the original throw-in spot",
      "C": "Jump ball at the nearest restraining circle",
      "D": "Opponent's ball where the ball went out of bounds",
      "a": "Re-throw for the original team at same location",
      "b": "Turnover; opponent's ball at the original throw-in spot",
      "c": "Jump ball at the nearest restraining circle",
      "d": "Opponent's ball where the ball went out of bounds"
    },
    "correct_answer": "B",
    "explanation": "Violation.",
    "distractor_rationale": {
      "A": "Throw-in violation results in turnover",
      "C": "Not a jump ball situation",
      "D": "Ball returns to original throw-in spot, not where it landed"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "With :35.2 remaining in the second period, Player A1\u2019s baseline throw-in to Player A2 hits an official on the court. Player A1 retrieves the ball and advances upcourt. Official blew his whistle with :32.9 on the game clock. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Violation.",
    "ruleReference": "RULE 10, SECTION III",
    "casebookReference": "Case 441"
  },
  {
    "id": "casebook-2025-442",
    "case_number": 442,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 6, SECTION III",
      "RULE 12A, SECTION III",
      "RULE 12A, SECTION V"
    ],
    "question_text": "Following a timeout, a throw-in is being administered by Team A at the 28\u2019 hash mark. The ball is handed to Player A1 for the throw-in. Before the ball is released on the throw-in, an official blows his whistle when it is discovered that Team A has six players on the court. What is the ruling?",
    "options": {
      "A": "Re-throw for the original team at same location",
      "B": "Turnover; opponent's ball at the original throw-in spot",
      "C": "Jump ball at the nearest restraining circle",
      "D": "Opponent's ball where the ball went out of bounds",
      "a": "Re-throw for the original team at same location",
      "b": "Turnover; opponent's ball at the original throw-in spot",
      "c": "Jump ball at the nearest restraining circle",
      "d": "Opponent's ball where the ball went out of bounds"
    },
    "correct_answer": "B",
    "explanation": "The sixth player is removed and play is resumed at the same spot. Since the ball has not been released on the throw-in, no violation has occurred.",
    "distractor_rationale": {
      "A": "Throw-in violation results in turnover",
      "C": "Not a jump ball situation",
      "D": "Ball returns to original throw-in spot, not where it landed"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Following a timeout, a throw-in is being administered by Team A at the 28\u2019 hash mark. The ball is handed to Player A1 for the throw-in. Before the ball is released on the throw-in, an official blows his whistle when it is discovered that Team A has six players on the court. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The sixth player is removed and play is resumed at the same spot. Since the ball has not been released on the throw-in, no violation has occurred.",
    "ruleReference": "RULE 6, SECTION III, RULE 12A, SECTION III, RULE 12A, SECTION V",
    "casebookReference": "Case 442"
  },
  {
    "id": "casebook-2025-443",
    "case_number": 443,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 6, SECTION III",
      "RULE 12A, SECTION III"
    ],
    "question_text": "Following the release of the ball on a throw-in by Player A1, it is discovered that Team B has six players on the floor. What is the ruling?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "A technical foul will be assessed Team B. The ball became alive when the throw-in was released.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Following the release of the ball on a throw-in by Player A1, it is discovered that Team B has six players on the floor. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "A technical foul will be assessed Team B. The ball became alive when the throw-in was released.",
    "ruleReference": "RULE 6, SECTION III, RULE 12A, SECTION III",
    "casebookReference": "Case 443"
  },
  {
    "id": "casebook-2025-444",
    "case_number": 444,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 4, SECTION VI",
      "RULE 8, SECTION III"
    ],
    "question_text": "Following a timeout, Team A exercises its option and moves the ball to the 28\u2019 hash mark. On the throw-in Player A1 passes the ball to Player A2 who is positioned in the backcourt. What is the ruling?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "During the last two minutes of the fourth period and last two minutes of overtime, any throw-in may be passed anywhere on the playing court.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Following a timeout, Team A exercises its option and moves the ball to the 28\u2019 hash mark. On the throw-in Player A1 passes the ball to Player A2 who is positioned in the backcourt. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "During the last two minutes of the fourth period and last two minutes of overtime, any throw-in may be passed anywhere on the playing court.",
    "ruleReference": "RULE 5, SECTION VI, RULE 4, SECTION VI, RULE 8, SECTION III",
    "casebookReference": "Case 444"
  },
  {
    "id": "casebook-2025-445",
    "case_number": 445,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION I"
    ],
    "question_text": "With :20.0 remaining in the fourth period, Team A is granted a timeout. Upon resumption of play, Team A exercises its option and moves the ball to the 28\u2019 hash mark. On the throw-in by Player A1, Player A2 pushes Player B2, (1) before the ball is released, or (2) after the ball is released. What is the ruling?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "(1) and (2) Player A2 is assessed an offensive foul and Team B is awarded the ball on the sideline nearest to where the ball was when the foul was called but no nearer to the baseline than the free.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "With :20.0 remaining in the fourth period, Team A is granted a timeout. Upon resumption of play, Team A exercises its option and moves the ball to the 28\u2019 hash mark. On the throw-in by Player A1, Player A2 pushes Player B2, (1) before the ball is released, or (2) after the ball is released. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "(1) and (2) Player A2 is assessed an offensive foul and Team B is awarded the ball on the sideline nearest to where the ball was when the foul was called but no nearer to the baseline than the free.",
    "ruleReference": "RULE 12B, SECTION I",
    "casebookReference": "Case 445"
  },
  {
    "id": "casebook-2025-446",
    "case_number": 446,
    "casebook_category": "THROW-IN",
    "parent_category": "throw-ins-advancement",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12A, SECTION II"
    ],
    "question_text": "Player A1 is attempting a throw-in near Team B\u2019s bench. Are there any restrictions on Team B\u2019s bench personnel?",
    "options": {
      "A": "Throw-in from baseline nearest the basket",
      "B": "Throw-in from sideline nearest the interruption point",
      "C": "Throw-in from the midcourt line",
      "D": "Throw-in from free throw line extended",
      "a": "Throw-in from baseline nearest the basket",
      "b": "Throw-in from sideline nearest the interruption point",
      "c": "Throw-in from the midcourt line",
      "d": "Throw-in from free throw line extended"
    },
    "correct_answer": "B",
    "explanation": "Yes. All bench personnel must stay back from the sideline so they do not interfere with play. Following a warning by an official, a delay-of- game shall be assessed if repeated.",
    "distractor_rationale": {
      "A": "Baseline throw-in only after made baskets",
      "C": "Midcourt is for backcourt violations only",
      "D": "FT line extended is for specific foul situations"
    },
    "category": "THROW-IN",
    "scenario": "",
    "question": "Player A1 is attempting a throw-in near Team B\u2019s bench. Are there any restrictions on Team B\u2019s bench personnel?",
    "correctAnswer": "b",
    "ruling": "Yes. All bench personnel must stay back from the sideline so they do not interfere with play. Following a warning by an official, a delay-of- game shall be assessed if repeated.",
    "ruleReference": "RULE 12A, SECTION II",
    "casebookReference": "Case 446"
  },
  {
    "id": "casebook-2025-447",
    "case_number": 447,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "Team A calls a timeout to inquire about a scorer\u2019s error or a rule interpretation. It is discovered that a rule has mistakenly been set aside. Is Team A charged for the timeout?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "No. A timeout is not charged if it is called to question an interpretation and the correction is sustained. Of course, if the correction is not sustained, then the timeout is charged to Team A.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Team A calls a timeout to inquire about a scorer\u2019s error or a rule interpretation. It is discovered that a rule has mistakenly been set aside. Is Team A charged for the timeout?",
    "correctAnswer": "b",
    "ruling": "No. A timeout is not charged if it is called to question an interpretation and the correction is sustained. Of course, if the correction is not sustained, then the timeout is charged to Team A.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 447"
  },
  {
    "id": "casebook-2025-448",
    "case_number": 448,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "How many timeouts is a team permitted to call: (1) In the game?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "(2) In the fourth period?",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "How many timeouts is a team permitted to call: (1) In the game?",
    "correctAnswer": "b",
    "ruling": "(2) In the fourth period?",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 448"
  },
  {
    "id": "casebook-2025-449",
    "case_number": 449,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VII"
    ],
    "question_text": "Team A calls a timeout. After substituting Player A2 for Player A1 they request to start play immediately. Is this request granted?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "No. Once a team calls a timeout, play will not resume until the Timeout Clock reaches 0.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Team A calls a timeout. After substituting Player A2 for Player A1 they request to start play immediately. Is this request granted?",
    "correctAnswer": "b",
    "ruling": "No. Once a team calls a timeout, play will not resume until the Timeout Clock reaches 0.",
    "ruleReference": "RULE 5, SECTION VII",
    "casebookReference": "Case 449"
  },
  {
    "id": "casebook-2025-450",
    "case_number": 450,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "Team A calls a timeout. Is Team B then allowed to call a timeout?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "Yes. If Team A had the ball in play or not, the ball is dead. Team B does not gain an advantage by calling a timeout and it is granted.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Team A calls a timeout. Is Team B then allowed to call a timeout?",
    "correctAnswer": "b",
    "ruling": "Yes. If Team A had the ball in play or not, the ball is dead. Team B does not gain an advantage by calling a timeout and it is granted.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 450"
  },
  {
    "id": "casebook-2025-451",
    "case_number": 451,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12A, SECTION I",
      "RULE 5, SECTION VI"
    ],
    "question_text": "A timeout is called by Team A. The official is notified that the team is over their allotted number of timeouts. What is the correct ruling?",
    "options": {
      "A": "Timeout is granted with no additional penalty",
      "B": "Timeout granted; technical foul for excessive timeout",
      "C": "Timeout is denied; team has no timeouts remaining",
      "D": "Warning issued; timeout request is declined",
      "a": "Timeout is granted with no additional penalty",
      "b": "Timeout granted; technical foul for excessive timeout",
      "c": "Timeout is denied; team has no timeouts remaining",
      "d": "Warning issued; timeout request is declined"
    },
    "correct_answer": "B",
    "explanation": "A request for timeout in excess of the authorized number shall be granted and a technical foul shall be assessed.",
    "distractor_rationale": {
      "A": "Team has no timeouts; requesting costs a technical",
      "C": "Timeout is still granted despite no timeouts remaining",
      "D": "No warning; technical is assessed immediately"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "A timeout is called by Team A. The official is notified that the team is over their allotted number of timeouts. What is the correct ruling?",
    "correctAnswer": "b",
    "ruling": "A request for timeout in excess of the authorized number shall be granted and a technical foul shall be assessed.",
    "ruleReference": "RULE 12A, SECTION I, RULE 5, SECTION VI",
    "casebookReference": "Case 451"
  },
  {
    "id": "casebook-2025-452",
    "case_number": 452,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "What is the correct procedure that the scoring table must follow in the calling of a mandatory timeout?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "There must be two mandatory timeouts in each period.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "What is the correct procedure that the scoring table must follow in the calling of a mandatory timeout?",
    "correctAnswer": "b",
    "ruling": "There must be two mandatory timeouts in each period.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 452"
  },
  {
    "id": "casebook-2025-453",
    "case_number": 453,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "Team A was charged with four timeouts during regulation play. How many timeouts are they allowed to call in overtime?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "Each team is permitted two timeouts in each overtime period regardless of the number of timeouts that team called during regulation",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Team A was charged with four timeouts during regulation play. How many timeouts are they allowed to call in overtime?",
    "correctAnswer": "b",
    "ruling": "Each team is permitted two timeouts in each overtime period regardless of the number of timeouts that team called during regulation",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 453"
  },
  {
    "id": "casebook-2025-454",
    "case_number": 454,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 12A, SECTION I",
      "RULE 5, SECTION VI"
    ],
    "question_text": "Team A has already used up seven timeouts starting the fourth period. They are then charged with a mandatory timeout that is called by the scorer\u2019s table at 6:40. What is the ruling?",
    "options": {
      "A": "Timeout is granted with no additional penalty",
      "B": "Timeout granted; technical foul for excessive timeout",
      "C": "Timeout is denied; team has no timeouts remaining",
      "D": "Warning issued; timeout request is declined",
      "a": "Timeout is granted with no additional penalty",
      "b": "Timeout granted; technical foul for excessive timeout",
      "c": "Timeout is denied; team has no timeouts remaining",
      "d": "Warning issued; timeout request is declined"
    },
    "correct_answer": "B",
    "explanation": "Team A is charged with an eighth timeout and assessed a technical foul.",
    "distractor_rationale": {
      "A": "Team has no timeouts; requesting costs a technical",
      "C": "Timeout is still granted despite no timeouts remaining",
      "D": "No warning; technical is assessed immediately"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Team A has already used up seven timeouts starting the fourth period. They are then charged with a mandatory timeout that is called by the scorer\u2019s table at 6:40. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "Team A is charged with an eighth timeout and assessed a technical foul.",
    "ruleReference": "RULE 12A, SECTION I, RULE 5, SECTION VI",
    "casebookReference": "Case 454"
  },
  {
    "id": "casebook-2025-455",
    "case_number": 455,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VII"
    ],
    "question_text": "Team A has attempted a successful field goal and requests a timeout. Should the timeout be granted?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Team A has attempted a successful field goal and requests a timeout. Should the timeout be granted?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 5, SECTION VII",
    "casebookReference": "Case 455"
  },
  {
    "id": "casebook-2025-456",
    "case_number": 456,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "The scorer\u2019s table is unable to call a mandatory timeout because the ball does not become dead in the last 2:59 of the period. Does the team who did not have a charged timeout in the period lose one from its total?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "The scorer\u2019s table is unable to call a mandatory timeout because the ball does not become dead in the last 2:59 of the period. Does the team who did not have a charged timeout in the period lose one from its total?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 456"
  },
  {
    "id": "casebook-2025-457",
    "case_number": 457,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VII"
    ],
    "question_text": "Player A1 is attempting a free throw which is going to remain in play. Player B1 informs the nearest official that he desires a timeout whether the basket is made or missed. The free throw attempt is unsuccessful and Player B2 secures possession of the rebound in the air and Player B1 immediately requests a timeout. Following the request, the ball is stolen by Player A2. What is the ruling?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "The official shall grant Team B a timeout.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Player A1 is attempting a free throw which is going to remain in play. Player B1 informs the nearest official that he desires a timeout whether the basket is made or missed. The free throw attempt is unsuccessful and Player B2 secures possession of the rebound in the air and Player B1 immediately requests a timeout. Following the request, the ball is stolen by Player A2. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "The official shall grant Team B a timeout.",
    "ruleReference": "RULE 5, SECTION VII",
    "casebookReference": "Case 457"
  },
  {
    "id": "casebook-2025-458",
    "case_number": 458,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VII"
    ],
    "question_text": "An official inadvertently signals for a timeout with the ball in the air on: (1) a field goal attempt. (2) a free throw attempt which is to remain in play. What is the ruling?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "If the attempt is successful, the whistle is ignored, and play is resumed as after any other score.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "An official inadvertently signals for a timeout with the ball in the air on: (1) a field goal attempt. (2) a free throw attempt which is to remain in play. What is the ruling?",
    "correctAnswer": "b",
    "ruling": "If the attempt is successful, the whistle is ignored, and play is resumed as after any other score.",
    "ruleReference": "RULE 5, SECTION VII",
    "casebookReference": "Case 458"
  },
  {
    "id": "casebook-2025-459",
    "case_number": 459,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VII"
    ],
    "question_text": "An official erroneously recognizes a timeout request by an opponent after the ball has been awarded to the free throw shooter. What is the ruling if the free throw shooter is in the act of shooting and his free throw attempt is: (1) successful?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "(2) unsuccessful?",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "An official erroneously recognizes a timeout request by an opponent after the ball has been awarded to the free throw shooter. What is the ruling if the free throw shooter is in the act of shooting and his free throw attempt is: (1) successful?",
    "correctAnswer": "b",
    "ruling": "(2) unsuccessful?",
    "ruleReference": "RULE 5, SECTION VII",
    "casebookReference": "Case 459"
  },
  {
    "id": "casebook-2025-460",
    "case_number": 460,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "Following a mandatory timeout charged to Team A at 1:50 in the fourth period and the ball in Team A\u2019s backcourt, Team A\u2019s coach wishes to exercise the option and move the ball to the 28\u2019 hash mark. Is this request honored?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "Yes. If the mandatory timeout was charged to Team B, the option would not be available.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Following a mandatory timeout charged to Team A at 1:50 in the fourth period and the ball in Team A\u2019s backcourt, Team A\u2019s coach wishes to exercise the option and move the ball to the 28\u2019 hash mark. Is this request honored?",
    "correctAnswer": "b",
    "ruling": "Yes. If the mandatory timeout was charged to Team B, the option would not be available.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 460"
  },
  {
    "id": "casebook-2025-461",
    "case_number": 461,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "Player A1 requests a timeout when he is unable to inbound the ball at the start of the fourth period. Should the official grant this request?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "Yes. A timeout shall be granted anytime the team making the request is in control of the ball. This is the first mandatory of the period.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Player A1 requests a timeout when he is unable to inbound the ball at the start of the fourth period. Should the official grant this request?",
    "correctAnswer": "b",
    "ruling": "Yes. A timeout shall be granted anytime the team making the request is in control of the ball. This is the first mandatory of the period.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 461"
  },
  {
    "id": "casebook-2025-462",
    "case_number": 462,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 4, SECTION XIV"
    ],
    "question_text": "With 6:59 remaining in the first period, no previous timeouts have been called by either team. Team B is issued a delay-of-game warning. Is it permissible for the scorer\u2019s table to call a mandatory timeout?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "With 6:59 remaining in the first period, no previous timeouts have been called by either team. Team B is issued a delay-of-game warning. Is it permissible for the scorer\u2019s table to call a mandatory timeout?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 5, SECTION VI, RULE 4, SECTION XIV",
    "casebookReference": "Case 462"
  },
  {
    "id": "casebook-2025-463",
    "case_number": 463,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "Player A1 is injured and lying on the floor from a flagrant foul charged to Player B1. Should Team A be charged with a timeout when Player A1 cannot immediately get up?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Player A1 is injured and lying on the floor from a flagrant foul charged to Player B1. Should Team A be charged with a timeout when Player A1 cannot immediately get up?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 463"
  },
  {
    "id": "casebook-2025-464",
    "case_number": 464,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "Team B has 4 timeouts at its disposal entering the last 3- minutes of the fourth period. Team B is due the mandatory when a foul is called at 1:45. How many timeouts does Team B have remaining?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "Two timeouts. One timeout was used for the mandatory and they are allowed to keep two timeouts following the mandatory.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Team B has 4 timeouts at its disposal entering the last 3- minutes of the fourth period. Team B is due the mandatory when a foul is called at 1:45. How many timeouts does Team B have remaining?",
    "correctAnswer": "b",
    "ruling": "Two timeouts. One timeout was used for the mandatory and they are allowed to keep two timeouts following the mandatory.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 464"
  },
  {
    "id": "casebook-2025-465",
    "case_number": 465,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI",
      "RULE 2, SECTION III"
    ],
    "question_text": "Player A1 and Player B2 are both injured on the same play during a live ball situation with Team A in control. Should the official suspend play?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "No. Team A must first request a timeout. The official may then suspend play to have the players attended to and not charge Team A with a timeout. Both teams are allowed unlimited substitutions.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "Player A1 and Player B2 are both injured on the same play during a live ball situation with Team A in control. Should the official suspend play?",
    "correctAnswer": "b",
    "ruling": "No. Team A must first request a timeout. The official may then suspend play to have the players attended to and not charge Team A with a timeout. Both teams are allowed unlimited substitutions.",
    "ruleReference": "RULE 5, SECTION VI, RULE 2, SECTION III",
    "casebookReference": "Case 465"
  },
  {
    "id": "casebook-2025-466",
    "case_number": 466,
    "casebook_category": "TIMEOUT",
    "parent_category": "administration-procedure",
    "difficulty": "expert",
    "rule_references": [
      "RULE 5, SECTION VI"
    ],
    "question_text": "With both mandatories being used in the 4th period, Team B has 3 timeouts remaining when the game reaches 3:00. What is the procedure?",
    "options": {
      "A": "Timeout denied; not a proper timeout opportunity",
      "B": "Timeout granted at the proper opportunity",
      "C": "Technical foul for improper timeout request",
      "D": "30-second timeout only; full timeout not available",
      "a": "Timeout denied; not a proper timeout opportunity",
      "b": "Timeout granted at the proper opportunity",
      "c": "Technical foul for improper timeout request",
      "d": "30-second timeout only; full timeout not available"
    },
    "correct_answer": "B",
    "explanation": "The official scorer will reduce Team B\u2019s timeout total to two (2) when the game clock reaches 3:00.",
    "distractor_rationale": {
      "A": "Timeout was properly requested and granted",
      "C": "Proper timeout requests aren't penalized",
      "D": "Full timeout was available and granted"
    },
    "category": "TIMEOUT",
    "scenario": "",
    "question": "With both mandatories being used in the 4th period, Team B has 3 timeouts remaining when the game reaches 3:00. What is the procedure?",
    "correctAnswer": "b",
    "ruling": "The official scorer will reduce Team B\u2019s timeout total to two (2) when the game clock reaches 3:00.",
    "ruleReference": "RULE 5, SECTION VI",
    "casebookReference": "Case 466"
  },
  {
    "id": "casebook-2025-467",
    "case_number": 467,
    "casebook_category": "TIMING",
    "parent_category": "clock-timing",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 5, SECTION II"
    ],
    "question_text": "How much time is allowed for the following? When does the clock begin? When does the first and second horn signal to indicate the stoppage is over?",
    "options": {
      "A": "Play is legal if ball is released before buzzer sounds",
      "B": "Play is illegal; cannot catch and shoot in 0.3 seconds or less",
      "C": "Play is legal; time rules don't apply to made baskets",
      "D": "Play depends on referee's judgment of release timing",
      "a": "Play is legal if ball is released before buzzer sounds",
      "b": "Play is illegal; cannot catch and shoot in 0.3 seconds or less",
      "c": "Play is legal; time rules don't apply to made baskets",
      "d": "Play depends on referee's judgment of release timing"
    },
    "correct_answer": "B",
    "explanation": "(1) Halftime, (2) Between periods, (3) Timeout, (4) Substitution for disqualified player and infection control, (5) Tipoff.",
    "distractor_rationale": {
      "A": "Catch-and-shoot physically impossible in 0.3 seconds",
      "C": "Time rules apply regardless of whether shot goes in",
      "D": "Rule is objective, not judgment-based"
    },
    "category": "TIMING",
    "scenario": "",
    "question": "How much time is allowed for the following? When does the clock begin? When does the first and second horn signal to indicate the stoppage is over?",
    "correctAnswer": "b",
    "ruling": "(1) Halftime, (2) Between periods, (3) Timeout, (4) Substitution for disqualified player and infection control, (5) Tipoff.",
    "ruleReference": "RULE 5, SECTION II",
    "casebookReference": "Case 467"
  },
  {
    "id": "casebook-2025-468",
    "case_number": 468,
    "casebook_category": "TRANSITION TAKE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION XI",
      "RULE 4, SECTION IV"
    ],
    "question_text": "With 1:45 remaining in the second period, Player A2 commits a foul on Player B1, which stopped a transition scoring opportunity by Team B. The foul is Team A\u2019s fifth team foul of the quarter. How should this play be administered?",
    "options": {
      "A": "Common foul; free throws awarded only if team is in the bonus",
      "B": "Clear-path foul: two free throws plus possession at the sideline",
      "C": "Transition take foul: one free throw for any player plus possession",
      "D": "Flagrant 1 foul: two free throws plus possession for unnecessary contact",
      "a": "Common foul; free throws awarded only if team is in the bonus",
      "b": "Clear-path foul: two free throws plus possession at the sideline",
      "c": "Transition take foul: one free throw for any player plus possession",
      "d": "Flagrant 1 foul: two free throws plus possession for unnecessary contact"
    },
    "correct_answer": "C",
    "explanation": "It depends on whether the foul committed by Player A2 was a legitimate play on the ball or a take foul.",
    "distractor_rationale": {
      "A": "Take fouls have specific penalty regardless of bonus status",
      "B": "Defender was ahead of ball handler, so clear-path doesn't apply",
      "D": "Contact wasn't unnecessary/excessive; just a deliberate foul"
    },
    "category": "TRANSITION TAKE FOULS",
    "scenario": "",
    "question": "With 1:45 remaining in the second period, Player A2 commits a foul on Player B1, which stopped a transition scoring opportunity by Team B. The foul is Team A\u2019s fifth team foul of the quarter. How should this play be administered?",
    "correctAnswer": "c",
    "ruling": "It depends on whether the foul committed by Player A2 was a legitimate play on the ball or a take foul.",
    "ruleReference": "RULE 12B, SECTION XI, RULE 4, SECTION IV",
    "casebookReference": "Case 468"
  },
  {
    "id": "casebook-2025-469",
    "case_number": 469,
    "casebook_category": "TRANSITION TAKE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 12B, SECTION XI",
      "RULE 4, SECTION IV"
    ],
    "question_text": "With 7:22 remaining in the first quarter, Player A4 commits a take foul on Player B2 near the halfcourt line. The foul is Team A\u2019s third team foul of the quarter. How should this play be administered?",
    "options": {
      "A": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "B": "Common foul; penalty based on team foul count and bonus status",
      "C": "Transition take foul: one free throw plus possession at point of interruption",
      "D": "Flagrant 1 foul: two free throws plus possession for contact from behind",
      "a": "Clear-path foul: two free throws for fouled player plus possession at sideline",
      "b": "Common foul; penalty based on team foul count and bonus status",
      "c": "Transition take foul: one free throw plus possession at point of interruption",
      "d": "Flagrant 1 foul: two free throws plus possession for contact from behind"
    },
    "correct_answer": "B",
    "explanation": "It depends on whether the foul committed by Player A4 occurred during a transition scoring opportunity.",
    "distractor_rationale": {
      "A": "A defender was ahead of the ball, negating clear-path criteria",
      "C": "May apply if deliberate, but standard foul rules apply here",
      "D": "Contact wasn't unnecessary or excessive enough for flagrant"
    },
    "category": "TRANSITION TAKE FOULS",
    "scenario": "",
    "question": "With 7:22 remaining in the first quarter, Player A4 commits a take foul on Player B2 near the halfcourt line. The foul is Team A\u2019s third team foul of the quarter. How should this play be administered?",
    "correctAnswer": "b",
    "ruling": "It depends on whether the foul committed by Player A4 occurred during a transition scoring opportunity.",
    "ruleReference": "RULE 12B, SECTION XI, RULE 4, SECTION IV",
    "casebookReference": "Case 469"
  },
  {
    "id": "casebook-2025-470",
    "case_number": 470,
    "casebook_category": "TRANSITION TAKE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION IV"
    ],
    "question_text": "State whether each of the following situations should be called a transition take foul: (1) With 1:56 remaining in the first period, Player A5 wraps up and grabs Player B5 in a non-basketball manner immediately after Player B5 secures a defensive rebound and before Player B5 has the opportunity to advance the ball to a teammate. (2) Same scenario as subsection (1) above, except that the play occurs with 1:56 remaining in the fourth quarter. (3) With 3:13 remaining in the first period, Player A1, in an attempt to stop a fast break dunk, wraps and grabs Player B2 in a non-basketball manner after Player B2 started his shooting motion on a dunk attempt. (4) With 5:15 remaining in the second period, as Player A1 attempts to continuously advance the ball via the live dribble immediately after securing a long defensive rebound, Player B5 (who was out of position, trailing the play, and recognized that his team was at a disadvantage on the play due to the position of his teammates) wraps up and grabs Player A5 (who was also trailing the play) in a non-basketball manner. Which situations constitute a transition take foul?",
    "options": {
      "A": "Common foul; free throws awarded only if team is in the bonus",
      "B": "Clear-path foul: two free throws plus possession at the sideline",
      "C": "Transition take foul: one free throw for any player plus possession",
      "D": "Flagrant 1 foul: two free throws plus possession for unnecessary contact",
      "a": "Common foul; free throws awarded only if team is in the bonus",
      "b": "Clear-path foul: two free throws plus possession at the sideline",
      "c": "Transition take foul: one free throw for any player plus possession",
      "d": "Flagrant 1 foul: two free throws plus possession for unnecessary contact"
    },
    "correct_answer": "C",
    "explanation": "",
    "distractor_rationale": {
      "A": "Take fouls have specific penalty regardless of bonus status",
      "B": "Defender was ahead of ball handler, so clear-path doesn't apply",
      "D": "Contact wasn't unnecessary/excessive; just a deliberate foul"
    },
    "category": "TRANSITION TAKE FOULS",
    "scenario": "",
    "question": "State whether each of the following situations should be called a transition take foul: (1) With 1:56 remaining in the first period, Player A5 wraps up and grabs Player B5 in a non-basketball manner immediately after Player B5 secures a defensive rebound and before Player B5 has the opportunity to advance the ball to a teammate. (2) Same scenario as subsection (1) above, except that the play occurs with 1:56 remaining in the fourth quarter. (3) With 3:13 remaining in the first period, Player A1, in an attempt to stop a fast break dunk, wraps and grabs Player B2 in a non-basketball manner after Player B2 started his shooting motion on a dunk attempt. (4) With 5:15 remaining in the second period, as Player A1 attempts to continuously advance the ball via the live dribble immediately after securing a long defensive rebound, Player B5 (who was out of position, trailing the play, and recognized that his team was at a disadvantage on the play due to the position of his teammates) wraps up and grabs Player A5 (who was also trailing the play) in a non-basketball manner. Which situations constitute a transition take foul?",
    "correctAnswer": "c",
    "ruling": "(1) Yes, this play must be called a transition take foul. A take foul committed immediately after a change of possession but before the offensive team has the opportunity to advance the ball satisfies the definition of a transition take foul. (2) No, this play may not be called a transition take foul. By rule, a transition take foul may not occur within the last two minutes of the fourth period or the last two minutes of any overtime period. Thus, Player A5 should be called for a common foul. (3) No, this play may not be called a transition take foul. By rule, a transition take foul may not occur if the offensive player is fouled in the act of shooting. Thus, Player A1 must be called for a shooting foul and Player B2 is awarded two free throw attempts. (4) Yes, this play must be called a transition take foul. A foul committed against any offensive player, including a player who does not have the ball, constitutes a transition take foul if all the other elements of the rule are satisfied.",
    "ruleReference": "RULE 4, SECTION IV",
    "casebookReference": "Case 470"
  },
  {
    "id": "casebook-2025-471",
    "case_number": 471,
    "casebook_category": "TRANSITION TAKE FOULS",
    "parent_category": "fouls-illegal-contact",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 9, SECTION II",
      "RULE 12B, SECTION XI",
      "RULE 13, SECTION I"
    ],
    "question_text": "How should the following situations be administered? With 4:02 remaining in the second period, Player A3 is called for a transition take foul on Player B2. How should each of the following situations be administered?",
    "options": {
      "A": "Common foul; free throws only if the offensive team is in the bonus",
      "B": "Clear-path foul: two free throws plus possession at the sideline",
      "C": "Transition take foul: one free throw plus possession at sideline",
      "D": "Flagrant 1: two free throws plus possession due to contact from behind",
      "a": "Common foul; free throws only if the offensive team is in the bonus",
      "b": "Clear-path foul: two free throws plus possession at the sideline",
      "c": "Transition take foul: one free throw plus possession at sideline",
      "d": "Flagrant 1: two free throws plus possession due to contact from behind"
    },
    "correct_answer": "B",
    "explanation": "(1) The officials are uncertain whether the foul committed by Player A3 met the criteria for a clear-path-to-the-basket foul.",
    "distractor_rationale": {
      "A": "All clear-path criteria met; more severe penalty applies",
      "C": "Clear-path is more severe than take foul (2 FTs vs 1 FT)",
      "D": "Clear-path and flagrant are separate determinations"
    },
    "category": "TRANSITION TAKE FOULS",
    "scenario": "",
    "question": "How should the following situations be administered? With 4:02 remaining in the second period, Player A3 is called for a transition take foul on Player B2. How should each of the following situations be administered?",
    "correctAnswer": "b",
    "ruling": "(1) The officials are uncertain whether the foul committed by Player A3 met the criteria for a clear-path-to-the-basket foul.",
    "ruleReference": "RULE 9, SECTION II, RULE 12B, SECTION XI, RULE 13, SECTION I",
    "casebookReference": "Case 471"
  },
  {
    "id": "casebook-2025-472",
    "case_number": 472,
    "casebook_category": "TRAVELING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "advanced",
    "rule_references": [
      "RULE 4, SECTION III",
      "RULE 10, SECTION XIII"
    ],
    "question_text": "State whether each of the following situations should be called as a traveling violation: (1) As Player A1 was in control of the ball while dribbling, he put his right hand under the ball and brought it to a pause while his right foot was on the ground, took one step backwards landing on his left foot, jumped backward off his left foot, and landed simultaneously with both feet before he attempted a three-point field goal. (2) While he sprinted up the court in a transition situation, Player A2 caught the ball with his left foot on the ground, took one step landing on his right foot, took another step landing on his left foot, jumped off his left foot, and dunked the ball. Are either of these traveling violations?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "TRAVELING",
    "scenario": "",
    "question": "State whether each of the following situations should be called as a traveling violation: (1) As Player A1 was in control of the ball while dribbling, he put his right hand under the ball and brought it to a pause while his right foot was on the ground, took one step backwards landing on his left foot, jumped backward off his left foot, and landed simultaneously with both feet before he attempted a three-point field goal. (2) While he sprinted up the court in a transition situation, Player A2 caught the ball with his left foot on the ground, took one step landing on his right foot, took another step landing on his left foot, jumped off his left foot, and dunked the ball. Are either of these traveling violations?",
    "correctAnswer": "b",
    "ruling": "(1) No. This is a legal play because Player A1 took two legal steps after gathering his dribble. By rule, a player who gathers the ball while dribbling may take two steps to shoot the ball. In this case, Player A1's first step occurred when he landed on his left foot (after gathering the ball and then taking a step backwards) and his second step occurred when he landed simultaneously with both feet on the ground before attempting a legal shot. (2) No. This is a legal play because Player A2 took two legal steps after gathering a pass. By rule, a player who gathers the ball while progressing may take two steps to shoot the ball. In this case, Player A2's first step occurred when he landed on his right foot (after gathering the ball with his left foot on the ground) and his second step occurred when he landed on his left foot before legally dunking the ball.",
    "ruleReference": "RULE 4, SECTION III, RULE 10, SECTION XIII",
    "casebookReference": "Case 472"
  },
  {
    "id": "casebook-2025-473",
    "case_number": 473,
    "casebook_category": "TRAVELING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XIII"
    ],
    "question_text": "Player A1 drives to the basket, gathers the ball with his left foot on the floor, steps and, clearly jumps off his right foot and lands simultaneously with both feet (jump stop). What are his options?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "Player A1 may jump to pass or shoot but is not allowed to pivot or \u201cstep through\u201d.",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "TRAVELING",
    "scenario": "",
    "question": "Player A1 drives to the basket, gathers the ball with his left foot on the floor, steps and, clearly jumps off his right foot and lands simultaneously with both feet (jump stop). What are his options?",
    "correctAnswer": "b",
    "ruling": "Player A1 may jump to pass or shoot but is not allowed to pivot or \u201cstep through\u201d.",
    "ruleReference": "RULE 10, SECTION XIII",
    "casebookReference": "Case 473"
  },
  {
    "id": "casebook-2025-474",
    "case_number": 474,
    "casebook_category": "TRAVELING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XIII"
    ],
    "question_text": "Player A1 leaves the floor for a field goal attempt or pass. He is unable to do either because of the close guarding position of Player B1, so he drops the ball to the floor. Is this a violation?",
    "options": {
      "A": "Legal play; player's footwork was within the rules",
      "B": "Traveling violation; illegal movement with the ball",
      "C": "Carrying violation; illegal palm/hand position on ball",
      "D": "Double dribble; player illegally resumed dribbling",
      "a": "Legal play; player's footwork was within the rules",
      "b": "Traveling violation; illegal movement with the ball",
      "c": "Carrying violation; illegal palm/hand position on ball",
      "d": "Double dribble; player illegally resumed dribbling"
    },
    "correct_answer": "B",
    "explanation": "No. He must be the first to touch the ball prior to it touching another player for a violation to occur.",
    "distractor_rationale": {
      "A": "Player exceeded allowed steps after gathering",
      "C": "Issue was footwork, not ball handling",
      "D": "Issue was steps, not a dribbling violation"
    },
    "category": "TRAVELING",
    "scenario": "",
    "question": "Player A1 leaves the floor for a field goal attempt or pass. He is unable to do either because of the close guarding position of Player B1, so he drops the ball to the floor. Is this a violation?",
    "correctAnswer": "b",
    "ruling": "No. He must be the first to touch the ball prior to it touching another player for a violation to occur.",
    "ruleReference": "RULE 10, SECTION XIII",
    "casebookReference": "Case 474"
  },
  {
    "id": "casebook-2025-475",
    "case_number": 475,
    "casebook_category": "TRAVELING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 4, SECTION XVIII"
    ],
    "question_text": "Player A1 fakes a pass and fumbles the ball out of his control. May he be the first to touch the ball?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "Yes.",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "TRAVELING",
    "scenario": "",
    "question": "Player A1 fakes a pass and fumbles the ball out of his control. May he be the first to touch the ball?",
    "correctAnswer": "b",
    "ruling": "Yes.",
    "ruleReference": "RULE 4, SECTION XVIII",
    "casebookReference": "Case 475"
  },
  {
    "id": "casebook-2025-476",
    "case_number": 476,
    "casebook_category": "TRAVELING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XIII"
    ],
    "question_text": "Player A1 attempts to pass to Player A2 but tries to stop when a defender steps between them. He is unable to maintain control and the ball comes loose. May he be the first to touch the ball?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "No.",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "TRAVELING",
    "scenario": "",
    "question": "Player A1 attempts to pass to Player A2 but tries to stop when a defender steps between them. He is unable to maintain control and the ball comes loose. May he be the first to touch the ball?",
    "correctAnswer": "b",
    "ruling": "No.",
    "ruleReference": "RULE 10, SECTION XIII",
    "casebookReference": "Case 476"
  },
  {
    "id": "casebook-2025-477",
    "case_number": 477,
    "casebook_category": "TRAVELING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XIII"
    ],
    "question_text": "Player A1 ends his dribble with both feet off the floor and lands simultaneously with both feet. What are his options?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "Player A1 has stopped on the count of one and may pivot with either foot. Once his pivot foot leaves the floor it may not be returned until the ball is released.",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "TRAVELING",
    "scenario": "",
    "question": "Player A1 ends his dribble with both feet off the floor and lands simultaneously with both feet. What are his options?",
    "correctAnswer": "b",
    "ruling": "Player A1 has stopped on the count of one and may pivot with either foot. Once his pivot foot leaves the floor it may not be returned until the ball is released.",
    "ruleReference": "RULE 10, SECTION XIII",
    "casebookReference": "Case 477"
  },
  {
    "id": "casebook-2025-478",
    "case_number": 478,
    "casebook_category": "TRAVELING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XIII"
    ],
    "question_text": "Player A1 ends his dribble with his right foot touching the floor and then hops with his right foot to split two defenders. Is this legal?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "No. A player may not step using the same foot from the time he ends his dribble or gains possession of the ball.",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "TRAVELING",
    "scenario": "",
    "question": "Player A1 ends his dribble with his right foot touching the floor and then hops with his right foot to split two defenders. Is this legal?",
    "correctAnswer": "b",
    "ruling": "No. A player may not step using the same foot from the time he ends his dribble or gains possession of the ball.",
    "ruleReference": "RULE 10, SECTION XIII",
    "casebookReference": "Case 478"
  },
  {
    "id": "casebook-2025-479",
    "case_number": 479,
    "casebook_category": "TRAVELING",
    "parent_category": "traveling-dribbling-gather",
    "difficulty": "intermediate",
    "rule_references": [
      "RULE 10, SECTION XIII",
      "RULE 4, SECTION VIII"
    ],
    "question_text": "Player A1 receives a pass and establishes his left foot as his pivot foot. What may he do with his pivot foot while on the floor?",
    "options": {
      "A": "Traveling violation; pivot foot was lifted illegally",
      "B": "Legal play; footwork complied with gather step rules",
      "C": "Double dribble violation; illegal second dribble started",
      "D": "Carrying violation; ball was palmed during move",
      "a": "Traveling violation; pivot foot was lifted illegally",
      "b": "Legal play; footwork complied with gather step rules",
      "c": "Double dribble violation; illegal second dribble started",
      "d": "Carrying violation; ball was palmed during move"
    },
    "correct_answer": "B",
    "explanation": "Once a player establishes a pivot foot he may only pivot on that foot with one axis point.",
    "distractor_rationale": {
      "A": "Footwork was within legal gather step allowance",
      "C": "No dribbling violation occurred",
      "D": "No carrying/palming violation occurred"
    },
    "category": "TRAVELING",
    "scenario": "",
    "question": "Player A1 receives a pass and establishes his left foot as his pivot foot. What may he do with his pivot foot while on the floor?",
    "correctAnswer": "b",
    "ruling": "Once a player establishes a pivot foot he may only pivot on that foot with one axis point.",
    "ruleReference": "RULE 10, SECTION XIII, RULE 4, SECTION VIII",
    "casebookReference": "Case 479"
  }
] as CasebookQuestion[];

// Helper function to get a random question
export function getRandomQuestion(): CasebookQuestion {
  const index = Math.floor(Math.random() * casebookQuestions.length);
  return casebookQuestions[index];
}

// Helper function to get questions by casebook category
export function getQuestionsByCategory(category: string): CasebookQuestion[] {
  return casebookQuestions.filter(q => q.casebook_category === category || q.category === category);
}

// Helper function to get questions by parent category
export function getQuestionsByParentCategory(parentCategory: ParentCategory): CasebookQuestion[] {
  return casebookQuestions.filter(q => q.parent_category === parentCategory);
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

// Get all unique casebook categories
export function getCategories(): string[] {
  return [...new Set(casebookQuestions.map(q => q.casebook_category))].sort();
}

// Get all parent categories
export function getParentCategories(): ParentCategory[] {
  return [...new Set(casebookQuestions.map(q => q.parent_category))].sort() as ParentCategory[];
}

// Get parent category display name
export function getParentCategoryName(category: ParentCategory): string {
  return PARENT_CATEGORY_NAMES[category] || category;
}

// Get question by ID
export function getQuestionById(id: string): CasebookQuestion | undefined {
  return casebookQuestions.find(q => q.id === id);
}

// Get question by case number
export function getQuestionByCaseNumber(caseNumber: number): CasebookQuestion | undefined {
  return casebookQuestions.find(q => q.case_number === caseNumber);
}

// Get questions count by parent category
export function getQuestionCountByParentCategory(): Record<ParentCategory, number> {
  const counts: Record<string, number> = {};
  for (const q of casebookQuestions) {
    counts[q.parent_category] = (counts[q.parent_category] || 0) + 1;
  }
  return counts as Record<ParentCategory, number>;
}

// Get questions count by difficulty
export function getQuestionCountByDifficulty(): Record<Difficulty, number> {
  const counts: Record<string, number> = {};
  for (const q of casebookQuestions) {
    counts[q.difficulty] = (counts[q.difficulty] || 0) + 1;
  }
  return counts as Record<Difficulty, number>;
}
