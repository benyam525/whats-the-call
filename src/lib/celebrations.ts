/**
 * Celebration messages and effects for game feedback
 */

// Correct answer messages - punchy and encouraging
export const correctMessages = [
  "Good eye, ref!",
  "Perfect call!",
  "That's the ruling!",
  "Nailed it!",
  "By the book!",
  "Sharp whistle!",
  "Textbook call!",
  "You know the rules!",
];

// Wrong answer messages - encouraging but honest
export const wrongMessages = [
  "Not quite...",
  "The rulebook says otherwise",
  "Close, but no whistle",
  "Review the play",
  "Check the casebook",
  "Tough call to make",
];

// Milestone messages for streaks
export const milestoneMessages: Record<number, { message: string; emoji: string }> = {
  5: { message: "On fire!", emoji: "🔥" },
  10: { message: "Veteran status!", emoji: "⭐" },
  15: { message: "Expert level!", emoji: "🏆" },
  20: { message: "Hall of Fame!", emoji: "🎖️" },
  25: { message: "Living legend!", emoji: "👑" },
};

// Get a random correct message
export function getCorrectMessage(): string {
  return correctMessages[Math.floor(Math.random() * correctMessages.length)];
}

// Get a random wrong message
export function getWrongMessage(): string {
  return wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
}

// Get milestone message if applicable
export function getMilestoneMessage(streak: number): { message: string; emoji: string } | null {
  return milestoneMessages[streak] || null;
}

// Check if streak is a milestone
export function isMilestone(streak: number): boolean {
  return streak in milestoneMessages;
}

// Difficulty labels with colors
export const difficultyConfig = {
  rookie: {
    label: 'Rookie',
    color: 'bg-green-100 text-green-800',
    borderColor: 'border-green-500',
  },
  veteran: {
    label: 'Veteran',
    color: 'bg-yellow-100 text-yellow-800',
    borderColor: 'border-yellow-500',
  },
  expert: {
    label: 'Expert',
    color: 'bg-red-100 text-red-800',
    borderColor: 'border-red-500',
  },
};

// Get difficulty for Sudden Death based on current streak
export function getSuddenDeathDifficulty(streak: number): 'rookie' | 'veteran' | 'expert' {
  if (streak < 3) return 'rookie';
  if (streak < 7) return 'veteran';
  return 'expert';
}
