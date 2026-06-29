/*
  # Create services table

  ## Purpose
 Stores service offerings for the Pixel Ceylon website with tech stacks.

  ## New Tables
  - `services`
    - `id` (uuid, primary key)
    - `slug` (text, unique) - URL-friendly identifier
    - `num` (text) - Service number (01, 02, etc.)
    - `name` (text) - Service name
    - `intro` (text) - Brief introduction (2-3 sentences)
    - `description` (text) - Full service description
    - `tech_stack` (jsonb) - Array of technologies with categories
    - `features` (jsonb) - Array of key features
    - `image_url` (text) - Service banner image
    - `icon` (text) - Icon name from lucide-react
    - `display_order` (int) - Sorting order
    - `created_at` (timestamptz)
*/

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  num text NOT NULL DEFAULT '01',
  name text NOT NULL,
  intro text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  tech_stack jsonb DEFAULT '[]',
  features jsonb DEFAULT '[]',
  image_url text DEFAULT '',
  icon text DEFAULT 'Search',
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view services"
  ON services
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert services"
  ON services
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
  ON services
  FOR DELETE
  TO authenticated
  USING (true);

-- Seed initial services
INSERT INTO services (slug, num, name, intro, description, tech_stack, features, image_url, icon, display_order) VALUES
(
  'seo-content',
  '01',
  'SEO & Content',
  'Data-driven keyword research, technical audits, and content strategies that push you to the top of search results and keep you there.',
  'Our SEO & Content service is designed to help your business achieve sustainable, long-term visibility in search engines. We combine technical expertise with creative content strategies to drive organic traffic that actually converts. From comprehensive site audits to ongoing content optimization, we ensure every piece of your digital presence works together to climb the rankings and stay there.',
  '[{"name": "Google Analytics", "category": "Analytics"}, {"name": "Google Search Console", "category": "Analytics"}]'::jsonb,
  '["Technical SEO Audits", "Keyword Research & Strategy", "Content Optimization", "On-Page SEO", "Link Building", "Performance Monitoring", "Competitor Analysis", "Monthly Reporting"]'::jsonb,
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=600&fit=crop',
  'Search',
  1
),
(
  'web-development',
  '02',
  'Web Development',
  'Blazing-fast, responsive websites and web apps built with modern frameworks. Secure, scalable, and optimised for conversions.',
  'We build websites that perform as good as they look. Our development team specializes in creating fast, secure, and scalable web solutions using the latest technologies. Whether you need a simple landing page, a complex web application, or an e-commerce platform, we deliver code that is clean, maintainable, and built to grow with your business.',
  '[{"name": "HTML5", "category": "Frontend"}, {"name": "CSS3", "category": "Frontend"}, {"name": "JavaScript", "category": "Frontend"}, {"name": "React", "category": "Frontend"}, {"name": "Next.js", "category": "Frontend"}, {"name": "Node.js", "category": "Backend"}, {"name": "Laravel", "category": "Backend"}, {"name": "PHP", "category": "Backend"}, {"name": "MySQL", "category": "Database"}, {"name": "Git", "category": "DevOps"}, {"name": "Vercel", "category": "DevOps"}, {"name": "WordPress", "category": "CMS"}]'::jsonb,
  '["Custom Web Development", "Progressive Web Apps", "E-Commerce Solutions", "API Development & Integration", "Database Design", "Performance Optimization", "Security Hardening", "CMS Development"]'::jsonb,
  'https://images.unsplash.com/photo-1461749280684-dccba670e2f1?w=1400&h=600&fit=crop',
  'Code2',
  2
),
(
  'branding',
  '03',
  'Branding',
  'Cohesive brand identities — from logo systems to brand voice — that build trust, recognition, and lasting emotional connection.',
  'Your brand is more than a logo — it is the complete experience customers have with your business. We create comprehensive brand identities that tell your story, connect with your audience, and set you apart from competitors. From initial strategy to final deliverables, we ensure every touchpoint reinforces your unique value proposition.',
  '[{"name": "Adobe Illustrator", "category": "Design"}, {"name": "Photoshop", "category": "Design"}, {"name": "Figma", "category": "Design"}, {"name": "InDesign", "category": "Design"}, {"name": "Canva", "category": "Design"}]'::jsonb,
  '["Logo Design & Brand Marks", "Brand Strategy & Positioning", "Visual Identity Systems", "Brand Guidelines", "Color Palette Development", "Typography Selection", "Brand Voice & Messaging", "Marketing Collateral"]'::jsonb,
  'https://images.unsplash.com/photo-1558655146-9f4013825c3b?w=1400&h=600&fit=crop',
  'Sparkles',
  4
),
(
  'web-design',
  '04',
  'Web Design',
  'Intuitive, visually stunning UI/UX that guides users from landing to conversion with purpose-driven design and smooth flows.',
  'Great design is invisible — it guides users naturally toward their goals while creating an enjoyable experience. Our web design process combines user research, wireframing, prototyping, and visual design to create interfaces that are both beautiful and functional. We design with conversion in mind, ensuring every element serves a purpose.',
  '[{"name": "Figma", "category": "Design"}, {"name": "Adobe XD", "category": "Design"}, {"name": "Framer", "category": "Design"}, {"name": "Webflow", "category": "Design"}]'::jsonb,
  '["UI/UX Design", "Wireframing & Prototyping", "Responsive Design", "Design Systems", "User Research", "Usability Testing", "Interaction Design", "Conversion Optimization"]'::jsonb,
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&h=600&fit=crop',
  'Palette',
  3
);
