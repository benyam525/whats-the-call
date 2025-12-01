# Game Modes Implementation Plan

## Overview
Adding 4 game modes with redesigned home screen, enhanced leaderboard, and engagement features.

---

## Phase 1: Database Schema Updates

### New Tables

```sql
-- Sudden Death high scores
CREATE TABLE sudden_death_scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  visitor_id TEXT NOT NULL,
  score INT NOT NULL DEFAULT 0,
  difficulty_reached TEXT DEFAULT 'rookie',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily 5 completions (track which days user completed)
CREATE TABLE daily_5_completions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  visitor_id TEXT NOT NULL,
  completion_date DATE NOT NULL,
  score INT NOT NULL, -- out of 5
  answers JSONB, -- {questionId: answer}
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(visitor_id, completion_date)
);

-- Daily 5 streaks (separate from general streaks)
CREATE TABLE daily_5_streaks (
  visitor_id TEXT PRIMARY KEY,
  current_streak INT DEFAULT 0,
  longest_streak INT DEFAULT 0,
  last_completion_date DATE,
  display_name TEXT
);

-- Category mastery tracking
CREATE TABLE category_mastery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  visitor_id TEXT NOT NULL,
  category TEXT NOT NULL,
  correct INT DEFAULT 0,
  total INT DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(visitor_id, category)
);
```

---

## Phase 2: File Structure

```
/src
├── /app
│   ├── page.tsx                    # NEW: Home screen with 4 mode cards
│   ├── /film-room/page.tsx         # Current practice mode (moved)
│   ├── /daily-5/page.tsx           # Daily 5 mode
│   ├── /sudden-death/page.tsx      # Sudden Death mode
│   └── /category-drill/page.tsx    # Category Drill mode
├── /components
│   ├── ModeCard.tsx                # NEW: Home screen mode card
│   ├── QuestionCard.tsx            # NEW: Extracted question display
│   ├── AnswerOptions.tsx           # NEW: Extracted answer buttons
│   ├── Timer.tsx                   # NEW: Countdown timer for Sudden Death
│   ├── ResultFeedback.tsx          # NEW: Green flash/shake animations
│   ├── NamePrompt.tsx              # NEW: Modal for leaderboard name
│   ├── HomeButton.tsx              # NEW: Reset/home button
│   └── (existing components)
├── /hooks
│   ├── useGameTimer.ts             # NEW: Timer hook for Sudden Death
│   ├── useDailyQuestions.ts        # NEW: Get today's 5 questions
│   └── (existing hooks)
└── /lib
    ├── daily-questions.ts          # NEW: Deterministic daily question selection
    └── celebrations.ts             # NEW: Celebration messages/effects
```

---

## Phase 3: Component Breakdown

### Home Screen (`/app/page.tsx`)
- 4 ModeCard components in 2x2 grid
- Each card shows: mode name, icon, description, user's best stat
- Stats pulled from respective tables

### ModeCard Component
```tsx
interface ModeCardProps {
  mode: 'film-room' | 'daily-5' | 'sudden-death' | 'category-drill';
  title: string;
  description: string;
  icon: string;
  stat?: { label: string; value: string | number };
  href: string;
}
```

### Film Room (`/app/film-room/page.tsx`)
- Current page.tsx logic, renamed
- Add HomeButton component
- No timer, shows all explanations

### Daily 5 (`/app/daily-5/page.tsx`)
- 5 deterministic questions per day (seeded by date)
- Progress indicator (1/5, 2/5, etc.)
- Cannot replay same day (check daily_5_completions)
- On completion: show score, streak, share button
- Share text: "I got 4/5 on today's What's the Call! 🏀"

### Sudden Death (`/app/sudden-death/page.tsx`)
- Timer component (10s per question)
- Difficulty progression: rookie (Q1-3) → veteran (Q4-7) → expert (Q8+)
- First wrong or timeout = game over
- Show final score, personal best, leaderboard position
- Trigger name prompt at score 10+

### Category Drill (`/app/category-drill/page.tsx`)
- Category selector (9 categories)
- Answer all questions in category
- Progress bar and mastery percentage
- Goal: 100% mastery (all correct)
- Save progress to category_mastery table

---

## Phase 4: Celebrations & Feedback

### ResultFeedback Component
```tsx
// Correct answer
- Green flash overlay (200ms fade)
- Message: "Good eye, ref!" / "Perfect call!" / "That's the ruling!"
- Confetti at milestones (5, 10, 15, 20)

// Wrong answer
- Screen shake animation (100ms)
- Red flash overlay
- Message: "Not quite..." / "The rulebook says otherwise"
```

### Milestone Messages
- 5 streak: "On fire! 🔥"
- 10 streak: "Veteran status! ⭐"
- 15 streak: "Expert level! 🏆"
- 20 streak: "Hall of Fame! 🎖️"

---

## Phase 5: Leaderboard Updates

### Tabs Structure
1. **Sudden Death** - Top scores (score DESC)
2. **Daily 5** - Longest streaks (longest_streak DESC)
3. **Category** - Category mastery leaders (total correct across all categories)

### Name Prompt Logic
- Check on Sudden Death score >= 10
- Check on Daily 5 streak >= 3
- Modal prompt: "You made the leaderboard! Enter your name:"
- Save to respective table's display_name field

---

## Phase 6: API Endpoints

### New Endpoints
```
GET  /api/daily-5/questions     # Today's 5 questions
POST /api/daily-5/complete      # Record completion
GET  /api/daily-5/streak        # User's Daily 5 streak

POST /api/sudden-death/score    # Save score
GET  /api/sudden-death/best     # User's best score
GET  /api/sudden-death/leaderboard

POST /api/category/progress     # Update category mastery
GET  /api/category/progress     # Get user's category stats
GET  /api/category/leaderboard

POST /api/user/display-name     # Set display name (shared across modes)
```

---

## Phase 7: Implementation Order

1. **Database**: Create new tables in Supabase
2. **Helpers**: Create daily-questions.ts and celebrations.ts
3. **Components**: Build shared components (QuestionCard, Timer, etc.)
4. **Film Room**: Move current logic, add HomeButton
5. **Home Screen**: Build mode selection grid
6. **Daily 5**: Implement with streak tracking
7. **Sudden Death**: Implement with timer and difficulty ramp
8. **Category Drill**: Implement with mastery tracking
9. **Leaderboard**: Add tabs and mode-specific queries
10. **Name Prompt**: Add modal for leaderboard qualification
11. **Celebrations**: Add visual feedback and messages
12. **Testing**: Test all flows, edge cases

---

## Key Design Decisions

1. **Separate routes per mode** vs single page - Using separate routes for cleaner code and direct linking
2. **Shared display_name** - One name stored in user_streaks, used across all leaderboards
3. **Daily 5 deterministic** - Use date string as seed for consistent questions across all users
4. **Timer in Sudden Death** - 10 seconds flat (simpler than varying by difficulty)
5. **Category Drill** - All questions in category must be answered (not random subset)
