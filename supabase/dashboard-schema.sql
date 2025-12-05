-- ============================================
-- RuleVision Dashboard Schema Extensions
-- Ref Readiness Performance OS
-- ============================================

-- ============================================
-- ANSWER HISTORY TABLE
-- Detailed tracking of every answer for analytics
-- ============================================
CREATE TABLE IF NOT EXISTS answer_history (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('rookie', 'veteran', 'expert')),
  mode TEXT NOT NULL CHECK (mode IN ('film_room', 'daily_5', 'sudden_death', 'category_drill')),
  answer_given TEXT NOT NULL,
  correct_answer TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  response_time_ms INT, -- Time taken to answer in milliseconds
  time_allowed_ms INT, -- Time allowed (for timed modes)
  streak_position INT, -- Position in current streak (for sudden death)
  session_id TEXT, -- Group answers by session
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_answer_history_visitor ON answer_history(visitor_id);
CREATE INDEX IF NOT EXISTS idx_answer_history_date ON answer_history(created_at);
CREATE INDEX IF NOT EXISTS idx_answer_history_category ON answer_history(category);
CREATE INDEX IF NOT EXISTS idx_answer_history_mode ON answer_history(mode);
CREATE INDEX IF NOT EXISTS idx_answer_history_session ON answer_history(session_id);

-- ============================================
-- USER SESSIONS TABLE
-- Track training sessions for commitment metrics
-- ============================================
CREATE TABLE IF NOT EXISTS user_sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL UNIQUE,
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ended_at TIMESTAMPTZ,
  duration_seconds INT,
  questions_answered INT DEFAULT 0,
  questions_correct INT DEFAULT 0,
  modes_used TEXT[] DEFAULT '{}',
  categories_practiced TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_sessions_visitor ON user_sessions(visitor_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_date ON user_sessions(started_at);

-- ============================================
-- DAILY SNAPSHOTS TABLE
-- Daily aggregated metrics for trends
-- ============================================
CREATE TABLE IF NOT EXISTS daily_snapshots (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  snapshot_date DATE NOT NULL,
  -- Volume metrics
  questions_answered INT DEFAULT 0,
  questions_correct INT DEFAULT 0,
  time_spent_seconds INT DEFAULT 0,
  sessions_count INT DEFAULT 0,
  -- Mode breakdown
  film_room_questions INT DEFAULT 0,
  daily_5_questions INT DEFAULT 0,
  sudden_death_questions INT DEFAULT 0,
  category_drill_questions INT DEFAULT 0,
  -- Performance metrics
  avg_response_time_ms INT,
  pressure_questions INT DEFAULT 0, -- Timed questions
  pressure_correct INT DEFAULT 0,
  -- Best performances
  best_sudden_death_streak INT DEFAULT 0,
  daily_5_score INT,
  -- Categories practiced
  categories_practiced TEXT[] DEFAULT '{}',
  weakest_category_practiced TEXT,
  strongest_category_practiced TEXT,
  -- Readiness scores (calculated)
  game_iq_score INT,
  decision_execution_score INT,
  commitment_score INT,
  ref_readiness_score INT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(visitor_id, snapshot_date)
);

CREATE INDEX IF NOT EXISTS idx_daily_snapshots_visitor ON daily_snapshots(visitor_id);
CREATE INDEX IF NOT EXISTS idx_daily_snapshots_date ON daily_snapshots(snapshot_date);

-- ============================================
-- CATEGORY DIFFICULTY MASTERY TABLE
-- Track mastery by category AND difficulty
-- ============================================
CREATE TABLE IF NOT EXISTS category_difficulty_mastery (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('rookie', 'veteran', 'expert')),
  correct INT DEFAULT 0,
  total INT DEFAULT 0,
  last_answered_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(visitor_id, category, difficulty)
);

CREATE INDEX IF NOT EXISTS idx_cat_diff_mastery_visitor ON category_difficulty_mastery(visitor_id);

-- ============================================
-- FOCUS PLANS TABLE
-- Auto-generated training recommendations
-- ============================================
CREATE TABLE IF NOT EXISTS focus_plans (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  plan_start_date DATE NOT NULL,
  plan_end_date DATE NOT NULL,
  -- Targets
  target_categories TEXT[] NOT NULL,
  target_daily_questions INT DEFAULT 15,
  target_pressure_sessions INT DEFAULT 3,
  -- Goals
  goal_category_improvement JSONB, -- {category: {from: 61, to: 72}}
  goal_pressure_gap_reduction JSONB, -- {from: 14, to: 8}
  -- Progress tracking
  current_progress JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_focus_plans_visitor ON focus_plans(visitor_id);
CREATE INDEX IF NOT EXISTS idx_focus_plans_active ON focus_plans(visitor_id, is_active) WHERE is_active = true;

-- ============================================
-- CLUTCH SCENARIOS TABLE
-- Track performance in specific game situations
-- ============================================
CREATE TABLE IF NOT EXISTS clutch_performance (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  scenario_type TEXT NOT NULL, -- 'end_of_game', 'last_2_minutes', 'tie_game', etc.
  correct INT DEFAULT 0,
  total INT DEFAULT 0,
  avg_response_time_ms INT,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(visitor_id, scenario_type)
);

CREATE INDEX IF NOT EXISTS idx_clutch_visitor ON clutch_performance(visitor_id);

-- ============================================
-- FUNCTIONS: Record Answer with Full Tracking
-- ============================================
CREATE OR REPLACE FUNCTION record_answer_with_tracking(
  p_visitor_id TEXT,
  p_question_id TEXT,
  p_category TEXT,
  p_difficulty TEXT,
  p_mode TEXT,
  p_answer_given TEXT,
  p_correct_answer TEXT,
  p_is_correct BOOLEAN,
  p_response_time_ms INT DEFAULT NULL,
  p_time_allowed_ms INT DEFAULT NULL,
  p_streak_position INT DEFAULT NULL,
  p_session_id TEXT DEFAULT NULL
)
RETURNS answer_history
LANGUAGE plpgsql
AS $$
DECLARE
  v_result answer_history;
  v_today DATE := CURRENT_DATE;
BEGIN
  -- Insert the answer record
  INSERT INTO answer_history (
    visitor_id, question_id, category, difficulty, mode,
    answer_given, correct_answer, is_correct,
    response_time_ms, time_allowed_ms, streak_position, session_id
  )
  VALUES (
    p_visitor_id, p_question_id, p_category, p_difficulty, p_mode,
    p_answer_given, p_correct_answer, p_is_correct,
    p_response_time_ms, p_time_allowed_ms, p_streak_position, p_session_id
  )
  RETURNING * INTO v_result;

  -- Update category_difficulty_mastery
  INSERT INTO category_difficulty_mastery (visitor_id, category, difficulty, correct, total, last_answered_at)
  VALUES (
    p_visitor_id,
    p_category,
    p_difficulty,
    CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    1,
    NOW()
  )
  ON CONFLICT (visitor_id, category, difficulty) DO UPDATE SET
    correct = category_difficulty_mastery.correct + CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    total = category_difficulty_mastery.total + 1,
    last_answered_at = NOW(),
    updated_at = NOW();

  -- Update daily snapshot
  INSERT INTO daily_snapshots (
    visitor_id, snapshot_date,
    questions_answered, questions_correct,
    film_room_questions, daily_5_questions, sudden_death_questions, category_drill_questions,
    pressure_questions, pressure_correct
  )
  VALUES (
    p_visitor_id, v_today,
    1,
    CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    CASE WHEN p_mode = 'film_room' THEN 1 ELSE 0 END,
    CASE WHEN p_mode = 'daily_5' THEN 1 ELSE 0 END,
    CASE WHEN p_mode = 'sudden_death' THEN 1 ELSE 0 END,
    CASE WHEN p_mode = 'category_drill' THEN 1 ELSE 0 END,
    CASE WHEN p_mode = 'sudden_death' THEN 1 ELSE 0 END,
    CASE WHEN p_mode = 'sudden_death' AND p_is_correct THEN 1 ELSE 0 END
  )
  ON CONFLICT (visitor_id, snapshot_date) DO UPDATE SET
    questions_answered = daily_snapshots.questions_answered + 1,
    questions_correct = daily_snapshots.questions_correct + CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    film_room_questions = daily_snapshots.film_room_questions + CASE WHEN p_mode = 'film_room' THEN 1 ELSE 0 END,
    daily_5_questions = daily_snapshots.daily_5_questions + CASE WHEN p_mode = 'daily_5' THEN 1 ELSE 0 END,
    sudden_death_questions = daily_snapshots.sudden_death_questions + CASE WHEN p_mode = 'sudden_death' THEN 1 ELSE 0 END,
    category_drill_questions = daily_snapshots.category_drill_questions + CASE WHEN p_mode = 'category_drill' THEN 1 ELSE 0 END,
    pressure_questions = daily_snapshots.pressure_questions + CASE WHEN p_mode = 'sudden_death' THEN 1 ELSE 0 END,
    pressure_correct = daily_snapshots.pressure_correct + CASE WHEN p_mode = 'sudden_death' AND p_is_correct THEN 1 ELSE 0 END,
    categories_practiced = ARRAY(
      SELECT DISTINCT unnest(daily_snapshots.categories_practiced || ARRAY[p_category])
    );

  RETURN v_result;
END;
$$;

-- ============================================
-- FUNCTION: Calculate Ref Readiness Score
-- ============================================
CREATE OR REPLACE FUNCTION calculate_readiness_scores(p_visitor_id TEXT)
RETURNS TABLE (
  game_iq INT,
  decision_execution INT,
  commitment INT,
  ref_readiness INT,
  top_strength TEXT,
  top_weakness TEXT
)
LANGUAGE plpgsql
AS $$
DECLARE
  v_game_iq INT;
  v_execution INT;
  v_commitment INT;
  v_readiness INT;
  v_strength TEXT;
  v_weakness TEXT;
  v_total_correct INT;
  v_total_answered INT;
  v_pressure_correct INT;
  v_pressure_total INT;
  v_calm_correct INT;
  v_calm_total INT;
  v_days_active INT;
  v_sessions_last_7_days INT;
  v_avg_daily_questions NUMERIC;
BEGIN
  -- Calculate Game IQ (based on overall accuracy weighted by difficulty)
  SELECT
    COALESCE(SUM(
      CASE difficulty
        WHEN 'rookie' THEN correct * 0.8
        WHEN 'veteran' THEN correct * 1.0
        WHEN 'expert' THEN correct * 1.2
      END
    ), 0),
    COALESCE(SUM(
      CASE difficulty
        WHEN 'rookie' THEN total * 0.8
        WHEN 'veteran' THEN total * 1.0
        WHEN 'expert' THEN total * 1.2
      END
    ), 0)
  INTO v_total_correct, v_total_answered
  FROM category_difficulty_mastery
  WHERE visitor_id = p_visitor_id;

  IF v_total_answered > 0 THEN
    v_game_iq := LEAST(100, GREATEST(0, ROUND((v_total_correct::NUMERIC / v_total_answered) * 100)));
  ELSE
    v_game_iq := 0;
  END IF;

  -- Calculate Decision Execution (pressure vs calm performance)
  SELECT
    COALESCE(SUM(CASE WHEN mode = 'sudden_death' THEN questions_correct ELSE 0 END), 0),
    COALESCE(SUM(CASE WHEN mode = 'sudden_death' THEN questions_answered ELSE 0 END), 0)
  INTO v_pressure_correct, v_pressure_total
  FROM (
    SELECT
      'sudden_death' as mode,
      SUM(pressure_correct) as questions_correct,
      SUM(pressure_questions) as questions_answered
    FROM daily_snapshots
    WHERE visitor_id = p_visitor_id
  ) pressure;

  SELECT
    COALESCE(SUM(questions_correct - pressure_correct), 0),
    COALESCE(SUM(questions_answered - pressure_questions), 0)
  INTO v_calm_correct, v_calm_total
  FROM daily_snapshots
  WHERE visitor_id = p_visitor_id;

  -- Execution score: weighted average of pressure performance + consistency
  IF v_pressure_total > 0 AND v_calm_total > 0 THEN
    v_execution := LEAST(100, GREATEST(0, ROUND(
      (v_pressure_correct::NUMERIC / v_pressure_total * 0.6 +
       v_calm_correct::NUMERIC / v_calm_total * 0.4) * 100
    )));
  ELSIF v_calm_total > 0 THEN
    v_execution := LEAST(100, GREATEST(0, ROUND((v_calm_correct::NUMERIC / v_calm_total) * 100)));
  ELSE
    v_execution := 0;
  END IF;

  -- Calculate Commitment (consistency + volume)
  SELECT
    COUNT(DISTINCT snapshot_date),
    COUNT(DISTINCT snapshot_date) FILTER (WHERE snapshot_date >= CURRENT_DATE - INTERVAL '7 days'),
    COALESCE(AVG(questions_answered), 0)
  INTO v_days_active, v_sessions_last_7_days, v_avg_daily_questions
  FROM daily_snapshots
  WHERE visitor_id = p_visitor_id
    AND snapshot_date >= CURRENT_DATE - INTERVAL '30 days';

  -- Commitment: based on frequency (7 days target) and volume (20 questions/day target)
  v_commitment := LEAST(100, GREATEST(0, ROUND(
    (LEAST(v_sessions_last_7_days::NUMERIC / 5, 1) * 50) + -- 5+ days per week = 50 points
    (LEAST(v_avg_daily_questions / 20, 1) * 50) -- 20+ questions/day avg = 50 points
  )));

  -- Calculate overall Ref Readiness (weighted average)
  v_readiness := ROUND(v_game_iq * 0.4 + v_execution * 0.35 + v_commitment * 0.25);

  -- Find top strength and weakness by category
  SELECT category INTO v_strength
  FROM category_difficulty_mastery
  WHERE visitor_id = p_visitor_id AND total >= 5
  GROUP BY category
  ORDER BY SUM(correct)::NUMERIC / NULLIF(SUM(total), 0) DESC
  LIMIT 1;

  SELECT category INTO v_weakness
  FROM category_difficulty_mastery
  WHERE visitor_id = p_visitor_id AND total >= 5
  GROUP BY category
  ORDER BY SUM(correct)::NUMERIC / NULLIF(SUM(total), 0) ASC
  LIMIT 1;

  RETURN QUERY SELECT v_game_iq, v_execution, v_commitment, v_readiness, v_strength, v_weakness;
END;
$$;

-- ============================================
-- FUNCTION: Get Category Mastery Grid
-- ============================================
CREATE OR REPLACE FUNCTION get_category_mastery_grid(p_visitor_id TEXT)
RETURNS TABLE (
  category TEXT,
  difficulty TEXT,
  correct INT,
  total INT,
  accuracy NUMERIC,
  confidence TEXT -- 'reliable', 'unproven', 'needs_work', 'blind_spot'
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    cdm.category,
    cdm.difficulty,
    cdm.correct,
    cdm.total,
    CASE WHEN cdm.total > 0
      THEN ROUND((cdm.correct::NUMERIC / cdm.total) * 100, 1)
      ELSE 0
    END as accuracy,
    CASE
      WHEN cdm.total >= 20 AND (cdm.correct::NUMERIC / cdm.total) >= 0.8 THEN 'reliable'
      WHEN cdm.total < 10 AND (cdm.correct::NUMERIC / cdm.total) >= 0.8 THEN 'unproven'
      WHEN cdm.total >= 10 AND (cdm.correct::NUMERIC / cdm.total) >= 0.6 THEN 'needs_work'
      ELSE 'blind_spot'
    END as confidence
  FROM category_difficulty_mastery cdm
  WHERE cdm.visitor_id = p_visitor_id
  ORDER BY cdm.category,
    CASE cdm.difficulty
      WHEN 'rookie' THEN 1
      WHEN 'veteran' THEN 2
      WHEN 'expert' THEN 3
    END;
END;
$$;

-- ============================================
-- FUNCTION: Get Composure Curve
-- ============================================
CREATE OR REPLACE FUNCTION get_composure_curve(p_visitor_id TEXT)
RETURNS TABLE (
  streak_range TEXT,
  correct INT,
  total INT,
  accuracy NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    CASE
      WHEN ah.streak_position BETWEEN 1 AND 5 THEN '1-5'
      WHEN ah.streak_position BETWEEN 6 AND 10 THEN '6-10'
      WHEN ah.streak_position BETWEEN 11 AND 15 THEN '11-15'
      WHEN ah.streak_position > 15 THEN '16+'
    END as streak_range,
    SUM(CASE WHEN ah.is_correct THEN 1 ELSE 0 END)::INT as correct,
    COUNT(*)::INT as total,
    ROUND((SUM(CASE WHEN ah.is_correct THEN 1 ELSE 0 END)::NUMERIC / COUNT(*)) * 100, 1) as accuracy
  FROM answer_history ah
  WHERE ah.visitor_id = p_visitor_id
    AND ah.mode = 'sudden_death'
    AND ah.streak_position IS NOT NULL
  GROUP BY
    CASE
      WHEN ah.streak_position BETWEEN 1 AND 5 THEN '1-5'
      WHEN ah.streak_position BETWEEN 6 AND 10 THEN '6-10'
      WHEN ah.streak_position BETWEEN 11 AND 15 THEN '11-15'
      WHEN ah.streak_position > 15 THEN '16+'
    END
  ORDER BY
    CASE streak_range
      WHEN '1-5' THEN 1
      WHEN '6-10' THEN 2
      WHEN '11-15' THEN 3
      WHEN '16+' THEN 4
    END;
END;
$$;

-- ============================================
-- FUNCTION: Get Weekly Trends
-- ============================================
CREATE OR REPLACE FUNCTION get_weekly_trends(p_visitor_id TEXT, p_weeks INT DEFAULT 4)
RETURNS TABLE (
  week_start DATE,
  questions_answered INT,
  accuracy NUMERIC,
  days_active INT,
  avg_response_time_ms INT,
  pressure_accuracy NUMERIC,
  calm_accuracy NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    DATE_TRUNC('week', ds.snapshot_date)::DATE as week_start,
    SUM(ds.questions_answered)::INT as questions_answered,
    ROUND((SUM(ds.questions_correct)::NUMERIC / NULLIF(SUM(ds.questions_answered), 0)) * 100, 1) as accuracy,
    COUNT(DISTINCT ds.snapshot_date)::INT as days_active,
    AVG(ds.avg_response_time_ms)::INT as avg_response_time_ms,
    ROUND((SUM(ds.pressure_correct)::NUMERIC / NULLIF(SUM(ds.pressure_questions), 0)) * 100, 1) as pressure_accuracy,
    ROUND((SUM(ds.questions_correct - ds.pressure_correct)::NUMERIC /
      NULLIF(SUM(ds.questions_answered - ds.pressure_questions), 0)) * 100, 1) as calm_accuracy
  FROM daily_snapshots ds
  WHERE ds.visitor_id = p_visitor_id
    AND ds.snapshot_date >= CURRENT_DATE - (p_weeks * 7)
  GROUP BY DATE_TRUNC('week', ds.snapshot_date)
  ORDER BY week_start DESC;
END;
$$;

-- ============================================
-- RLS POLICIES
-- ============================================
ALTER TABLE answer_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_difficulty_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE focus_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE clutch_performance ENABLE ROW LEVEL SECURITY;

-- Answer history policies
CREATE POLICY "Allow anonymous answer_history reads" ON answer_history FOR SELECT USING (true);
CREATE POLICY "Allow anonymous answer_history inserts" ON answer_history FOR INSERT WITH CHECK (true);

-- User sessions policies
CREATE POLICY "Allow anonymous user_sessions reads" ON user_sessions FOR SELECT USING (true);
CREATE POLICY "Allow anonymous user_sessions inserts" ON user_sessions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous user_sessions updates" ON user_sessions FOR UPDATE USING (true);

-- Daily snapshots policies
CREATE POLICY "Allow anonymous daily_snapshots reads" ON daily_snapshots FOR SELECT USING (true);
CREATE POLICY "Allow anonymous daily_snapshots inserts" ON daily_snapshots FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous daily_snapshots updates" ON daily_snapshots FOR UPDATE USING (true);

-- Category difficulty mastery policies
CREATE POLICY "Allow anonymous cat_diff_mastery reads" ON category_difficulty_mastery FOR SELECT USING (true);
CREATE POLICY "Allow anonymous cat_diff_mastery inserts" ON category_difficulty_mastery FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous cat_diff_mastery updates" ON category_difficulty_mastery FOR UPDATE USING (true);

-- Focus plans policies
CREATE POLICY "Allow anonymous focus_plans reads" ON focus_plans FOR SELECT USING (true);
CREATE POLICY "Allow anonymous focus_plans inserts" ON focus_plans FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous focus_plans updates" ON focus_plans FOR UPDATE USING (true);

-- Clutch performance policies
CREATE POLICY "Allow anonymous clutch reads" ON clutch_performance FOR SELECT USING (true);
CREATE POLICY "Allow anonymous clutch inserts" ON clutch_performance FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous clutch updates" ON clutch_performance FOR UPDATE USING (true);

-- ============================================
-- GRANTS
-- ============================================
GRANT SELECT, INSERT ON answer_history TO anon;
GRANT SELECT, INSERT, UPDATE ON user_sessions TO anon;
GRANT SELECT, INSERT, UPDATE ON daily_snapshots TO anon;
GRANT SELECT, INSERT, UPDATE ON category_difficulty_mastery TO anon;
GRANT SELECT, INSERT, UPDATE ON focus_plans TO anon;
GRANT SELECT, INSERT, UPDATE ON clutch_performance TO anon;

GRANT SELECT, INSERT ON answer_history TO authenticated;
GRANT SELECT, INSERT, UPDATE ON user_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE ON daily_snapshots TO authenticated;
GRANT SELECT, INSERT, UPDATE ON category_difficulty_mastery TO authenticated;
GRANT SELECT, INSERT, UPDATE ON focus_plans TO authenticated;
GRANT SELECT, INSERT, UPDATE ON clutch_performance TO authenticated;

GRANT EXECUTE ON FUNCTION record_answer_with_tracking TO anon;
GRANT EXECUTE ON FUNCTION record_answer_with_tracking TO authenticated;
GRANT EXECUTE ON FUNCTION calculate_readiness_scores TO anon;
GRANT EXECUTE ON FUNCTION calculate_readiness_scores TO authenticated;
GRANT EXECUTE ON FUNCTION get_category_mastery_grid TO anon;
GRANT EXECUTE ON FUNCTION get_category_mastery_grid TO authenticated;
GRANT EXECUTE ON FUNCTION get_composure_curve TO anon;
GRANT EXECUTE ON FUNCTION get_composure_curve TO authenticated;
GRANT EXECUTE ON FUNCTION get_weekly_trends TO anon;
GRANT EXECUTE ON FUNCTION get_weekly_trends TO authenticated;
