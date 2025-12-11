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

-- ============================================
-- SUDDEN DEATH SCORES
-- Tracks high scores for Sudden Death mode
-- ============================================
CREATE TABLE IF NOT EXISTS sudden_death_scores (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  score INT NOT NULL DEFAULT 0,
  difficulty_reached TEXT DEFAULT 'rookie' CHECK (difficulty_reached IN ('rookie', 'veteran', 'expert')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_sudden_death_visitor ON sudden_death_scores(visitor_id);
CREATE INDEX IF NOT EXISTS idx_sudden_death_leaderboard ON sudden_death_scores(score DESC);

-- ============================================
-- DAILY 5 COMPLETIONS
-- Tracks daily quiz completions
-- ============================================
CREATE TABLE IF NOT EXISTS daily_5_completions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  completion_date DATE NOT NULL,
  score INT NOT NULL CHECK (score >= 0 AND score <= 5),
  answers JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(visitor_id, completion_date)
);

CREATE INDEX IF NOT EXISTS idx_daily_5_visitor ON daily_5_completions(visitor_id);
CREATE INDEX IF NOT EXISTS idx_daily_5_date ON daily_5_completions(completion_date);

-- ============================================
-- DAILY 5 STREAKS
-- Tracks consecutive days of Daily 5 completion
-- ============================================
CREATE TABLE IF NOT EXISTS daily_5_streaks (
  visitor_id TEXT PRIMARY KEY,
  display_name TEXT,
  current_streak INT DEFAULT 0,
  longest_streak INT DEFAULT 0,
  last_completion_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_daily_5_streaks_leaderboard
ON daily_5_streaks(longest_streak DESC, current_streak DESC);

-- ============================================
-- CATEGORY MASTERY
-- Tracks per-category progress
-- ============================================
CREATE TABLE IF NOT EXISTS category_mastery (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  category TEXT NOT NULL,
  correct INT DEFAULT 0,
  total INT DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(visitor_id, category)
);

CREATE INDEX IF NOT EXISTS idx_category_mastery_visitor ON category_mastery(visitor_id);

-- ============================================
-- FUNCTION: Update Daily 5 Streak
-- Called when a user completes Daily 5
-- ============================================
CREATE OR REPLACE FUNCTION update_daily_5_streak(
  p_visitor_id TEXT,
  p_score INT,
  p_answers JSONB,
  p_display_name TEXT DEFAULT NULL
)
RETURNS daily_5_streaks
LANGUAGE plpgsql
AS $$
DECLARE
  v_today DATE := CURRENT_DATE;
  v_yesterday DATE := CURRENT_DATE - INTERVAL '1 day';
  v_result daily_5_streaks;
  v_already_completed BOOLEAN;
BEGIN
  -- Check if already completed today
  SELECT EXISTS(
    SELECT 1 FROM daily_5_completions
    WHERE visitor_id = p_visitor_id AND completion_date = v_today
  ) INTO v_already_completed;

  IF v_already_completed THEN
    -- Return existing streak without changes
    SELECT * INTO v_result FROM daily_5_streaks WHERE visitor_id = p_visitor_id;
    RETURN v_result;
  END IF;

  -- Record the completion
  INSERT INTO daily_5_completions (visitor_id, completion_date, score, answers)
  VALUES (p_visitor_id, v_today, p_score, p_answers);

  -- Update streak
  INSERT INTO daily_5_streaks (visitor_id, display_name, current_streak, longest_streak, last_completion_date)
  VALUES (
    p_visitor_id,
    COALESCE(p_display_name, 'Ref ' || LEFT(p_visitor_id, 6)),
    1,
    1,
    v_today
  )
  ON CONFLICT (visitor_id) DO UPDATE SET
    display_name = COALESCE(NULLIF(p_display_name, ''), daily_5_streaks.display_name),
    current_streak = CASE
      WHEN daily_5_streaks.last_completion_date = v_yesterday THEN daily_5_streaks.current_streak + 1
      ELSE 1
    END,
    longest_streak = GREATEST(
      daily_5_streaks.longest_streak,
      CASE
        WHEN daily_5_streaks.last_completion_date = v_yesterday THEN daily_5_streaks.current_streak + 1
        ELSE 1
      END
    ),
    last_completion_date = v_today,
    updated_at = NOW()
  RETURNING * INTO v_result;

  RETURN v_result;
END;
$$;

-- ============================================
-- FUNCTION: Update Category Mastery
-- Called when a user answers in Category Drill
-- ============================================
CREATE OR REPLACE FUNCTION update_category_mastery(
  p_visitor_id TEXT,
  p_category TEXT,
  p_is_correct BOOLEAN
)
RETURNS category_mastery
LANGUAGE plpgsql
AS $$
DECLARE
  v_result category_mastery;
BEGIN
  INSERT INTO category_mastery (visitor_id, category, correct, total)
  VALUES (
    p_visitor_id,
    p_category,
    CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    1
  )
  ON CONFLICT (visitor_id, category) DO UPDATE SET
    correct = category_mastery.correct + CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    total = category_mastery.total + 1,
    updated_at = NOW()
  RETURNING * INTO v_result;

  RETURN v_result;
END;
$$;

-- ============================================
-- RLS for new tables
-- ============================================
ALTER TABLE sudden_death_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_5_completions ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_5_streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_mastery ENABLE ROW LEVEL SECURITY;

-- Sudden Death policies
CREATE POLICY "Allow anonymous sudden_death reads" ON sudden_death_scores
  FOR SELECT USING (true);
CREATE POLICY "Allow anonymous sudden_death inserts" ON sudden_death_scores
  FOR INSERT WITH CHECK (true);

-- Daily 5 completions policies
CREATE POLICY "Allow anonymous daily_5_completions reads" ON daily_5_completions
  FOR SELECT USING (true);
CREATE POLICY "Allow anonymous daily_5_completions inserts" ON daily_5_completions
  FOR INSERT WITH CHECK (true);

-- Daily 5 streaks policies
CREATE POLICY "Allow anonymous daily_5_streaks reads" ON daily_5_streaks
  FOR SELECT USING (true);
CREATE POLICY "Allow anonymous daily_5_streaks inserts" ON daily_5_streaks
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous daily_5_streaks updates" ON daily_5_streaks
  FOR UPDATE USING (true);

-- Category mastery policies
CREATE POLICY "Allow anonymous category_mastery reads" ON category_mastery
  FOR SELECT USING (true);
CREATE POLICY "Allow anonymous category_mastery inserts" ON category_mastery
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous category_mastery updates" ON category_mastery
  FOR UPDATE USING (true);

-- ============================================
-- GRANTS for new tables
-- ============================================
GRANT SELECT, INSERT ON sudden_death_scores TO anon;
GRANT SELECT, INSERT ON daily_5_completions TO anon;
GRANT SELECT, INSERT, UPDATE ON daily_5_streaks TO anon;
GRANT SELECT, INSERT, UPDATE ON category_mastery TO anon;
GRANT EXECUTE ON FUNCTION update_daily_5_streak TO anon;
GRANT EXECUTE ON FUNCTION update_category_mastery TO anon;

GRANT SELECT, INSERT ON sudden_death_scores TO authenticated;
GRANT SELECT, INSERT ON daily_5_completions TO authenticated;
GRANT SELECT, INSERT, UPDATE ON daily_5_streaks TO authenticated;
GRANT SELECT, INSERT, UPDATE ON category_mastery TO authenticated;
GRANT EXECUTE ON FUNCTION update_daily_5_streak TO authenticated;
GRANT EXECUTE ON FUNCTION update_category_mastery TO authenticated;

-- ============================================
-- USER PROFILES TABLE
-- Stores authenticated user information
-- ============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  ref_level TEXT NOT NULL CHECK (ref_level IN ('youth', 'high_school', 'college', 'pro')),
  experience_level TEXT NOT NULL CHECK (experience_level IN ('new', 'developing', 'experienced', 'veteran')),
  years_experience INT,
  avatar_url TEXT,
  goals TEXT[],
  training_frequency TEXT CHECK (training_frequency IN ('daily', 'few_times_week', 'weekly', 'casual')),
  onboarding_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);

-- Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Function to handle updated_at for profiles
CREATE OR REPLACE FUNCTION handle_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for profiles updated_at
DROP TRIGGER IF EXISTS on_profiles_updated ON profiles;
CREATE TRIGGER on_profiles_updated
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE PROCEDURE handle_profiles_updated_at();

-- Grant access
GRANT SELECT, INSERT, UPDATE ON profiles TO authenticated;

-- ============================================
-- STORAGE BUCKET: avatars
-- Run these commands in Supabase Dashboard > Storage
-- ============================================
-- 1. Create a new bucket called 'avatars'
-- 2. Make it public (enable public access)
-- 3. Add the following policy:
--
-- Policy name: "Allow authenticated uploads"
-- Allowed operations: INSERT
-- Policy definition:
--   (bucket_id = 'avatars' AND auth.role() = 'authenticated')
--
-- Policy name: "Allow public reads"
-- Allowed operations: SELECT
-- Policy definition:
--   (bucket_id = 'avatars')
