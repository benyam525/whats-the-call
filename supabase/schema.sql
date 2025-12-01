-- ============================================
-- What's the Call? - Supabase Schema
-- ============================================
-- Run this SQL in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/YOUR_PROJECT/sql/new
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- VOTES TABLE
-- Tracks how users voted on each question
-- ============================================
CREATE TABLE IF NOT EXISTS votes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  question_id TEXT NOT NULL,
  answer CHAR(1) NOT NULL CHECK (answer IN ('a', 'b', 'c', 'd')),
  visitor_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast lookups by question
CREATE INDEX IF NOT EXISTS idx_votes_question_id ON votes(question_id);

-- ============================================
-- VOTE_STATS VIEW
-- Aggregated vote counts per question
-- ============================================
CREATE OR REPLACE VIEW vote_stats AS
SELECT
  question_id,
  COUNT(*) FILTER (WHERE answer = 'a') AS votes_a,
  COUNT(*) FILTER (WHERE answer = 'b') AS votes_b,
  COUNT(*) FILTER (WHERE answer = 'c') AS votes_c,
  COUNT(*) FILTER (WHERE answer = 'd') AS votes_d,
  COUNT(*) AS total_votes
FROM votes
GROUP BY question_id;

-- ============================================
-- USER_STREAKS TABLE
-- Tracks user streaks and stats
-- ============================================
CREATE TABLE IF NOT EXISTS user_streaks (
  visitor_id TEXT PRIMARY KEY,
  display_name TEXT,
  current_streak INT DEFAULT 0,
  longest_streak INT DEFAULT 0,
  last_answer_date DATE,
  total_correct INT DEFAULT 0,
  total_answered INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for leaderboard queries
CREATE INDEX IF NOT EXISTS idx_user_streaks_leaderboard
ON user_streaks(current_streak DESC, total_correct DESC)
WHERE total_answered >= 5;

-- ============================================
-- FUNCTION: Update streak
-- Called when a user answers a question
-- ============================================
CREATE OR REPLACE FUNCTION update_user_streak(
  p_visitor_id TEXT,
  p_is_correct BOOLEAN,
  p_display_name TEXT DEFAULT NULL
)
RETURNS user_streaks
LANGUAGE plpgsql
AS $$
DECLARE
  v_today DATE := CURRENT_DATE;
  v_yesterday DATE := CURRENT_DATE - INTERVAL '1 day';
  v_result user_streaks;
BEGIN
  -- Insert or update the user streak
  INSERT INTO user_streaks (visitor_id, display_name, current_streak, longest_streak, last_answer_date, total_correct, total_answered)
  VALUES (
    p_visitor_id,
    COALESCE(p_display_name, 'Ref ' || LEFT(p_visitor_id, 6)),
    CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    v_today,
    CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    1
  )
  ON CONFLICT (visitor_id) DO UPDATE SET
    display_name = COALESCE(NULLIF(p_display_name, ''), user_streaks.display_name),
    current_streak = CASE
      -- If already answered today, don't change streak
      WHEN user_streaks.last_answer_date = v_today THEN user_streaks.current_streak
      -- If answered yesterday and correct, increment streak
      WHEN user_streaks.last_answer_date = v_yesterday AND p_is_correct THEN user_streaks.current_streak + 1
      -- If correct but not yesterday, start new streak
      WHEN p_is_correct THEN 1
      -- If wrong, reset streak
      ELSE 0
    END,
    longest_streak = GREATEST(
      user_streaks.longest_streak,
      CASE
        WHEN user_streaks.last_answer_date = v_today THEN user_streaks.current_streak
        WHEN user_streaks.last_answer_date = v_yesterday AND p_is_correct THEN user_streaks.current_streak + 1
        WHEN p_is_correct THEN 1
        ELSE user_streaks.longest_streak
      END
    ),
    last_answer_date = v_today,
    total_correct = user_streaks.total_correct + CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    total_answered = user_streaks.total_answered + 1,
    updated_at = NOW()
  RETURNING * INTO v_result;

  RETURN v_result;
END;
$$;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on tables
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;

-- Allow anonymous reads and inserts for votes
CREATE POLICY "Allow anonymous vote reads" ON votes
  FOR SELECT USING (true);

CREATE POLICY "Allow anonymous vote inserts" ON votes
  FOR INSERT WITH CHECK (true);

-- Allow anonymous reads and upserts for user_streaks
CREATE POLICY "Allow anonymous streak reads" ON user_streaks
  FOR SELECT USING (true);

CREATE POLICY "Allow anonymous streak inserts" ON user_streaks
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous streak updates" ON user_streaks
  FOR UPDATE USING (true);

-- ============================================
-- GRANT PERMISSIONS
-- ============================================

-- Grant access to the anon role (for client-side access)
GRANT SELECT, INSERT ON votes TO anon;
GRANT SELECT, INSERT, UPDATE ON user_streaks TO anon;
GRANT SELECT ON vote_stats TO anon;
GRANT EXECUTE ON FUNCTION update_user_streak TO anon;

-- Grant access to the authenticated role
GRANT SELECT, INSERT ON votes TO authenticated;
GRANT SELECT, INSERT, UPDATE ON user_streaks TO authenticated;
GRANT SELECT ON vote_stats TO authenticated;
GRANT EXECUTE ON FUNCTION update_user_streak TO authenticated;
