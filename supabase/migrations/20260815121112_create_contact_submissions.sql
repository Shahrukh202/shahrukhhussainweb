/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email for replies
  - `project_type` (text, not null) — selected project category
  - `budget` (text, nullable) — optional budget range
  - `message` (text, not null) — the project description
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `contact_submissions`.
- INSERT: allow anon + authenticated (public contact form writes).
- SELECT / UPDATE / DELETE: authenticated only (site owner reads/manages submissions).
  The portfolio has no sign-in screen, so the public can only submit — they cannot read
  anyone's submissions. The site owner authenticates via Supabase to view entries.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  budget text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a contact message.
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated (site owner) can read submissions.
DROP POLICY IF EXISTS "auth_read_contact" ON contact_submissions;
CREATE POLICY "auth_read_contact"
ON contact_submissions FOR SELECT
TO authenticated
USING (true);

-- Only authenticated (site owner) can delete submissions.
DROP POLICY IF EXISTS "auth_delete_contact" ON contact_submissions;
CREATE POLICY "auth_delete_contact"
ON contact_submissions FOR DELETE
TO authenticated
USING (true);
