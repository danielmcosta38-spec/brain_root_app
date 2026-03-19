-- BrainBreak: initial schema
-- Run this in Supabase → SQL Editor → New query → Run

CREATE TABLE user_state (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  state      JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE user_state ENABLE ROW LEVEL SECURITY;

-- Users can only read and write their own state row
CREATE POLICY "Users manage own state"
  ON user_state FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Auto-update updated_at on every write
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_state_updated_at
  BEFORE UPDATE ON user_state
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
