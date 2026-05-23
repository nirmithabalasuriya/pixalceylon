/*
  # Create contact_submissions table

  ## Purpose
  Stores all incoming "Get a Free Proposal" form submissions from the Pixel Ceylon website.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key)
    - `first_name` (text) - Submitter's first name
    - `last_name` (text) - Submitter's last name
    - `email` (text) - Contact email address
    - `service` (text) - Selected service category
    - `message` (text) - Project description
    - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - RLS enabled (restrictive by default)
  - INSERT policy: anyone (anon + authenticated) can submit the form
  - SELECT/UPDATE/DELETE: only authenticated users (admins) can read/modify submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL DEFAULT '',
  last_name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  service text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert a contact submission"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);
