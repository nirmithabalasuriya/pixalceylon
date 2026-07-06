-- Add new portfolio projects

INSERT INTO projects (slug, name, client_type, tags, summary, description, features, image_url, external_url, display_order) VALUES
(
  'eco-fund',
  'Eco-Fund',
  'Fintech · Cryptocurrency',
  ARRAY['UI Design', 'UX Design', 'Figma', 'Prototyping'],
  'A cryptocurrency investment platform designed for accessible digital asset trading.',
  'Eco-Fund is a cryptocurrency investment and trading platform designed to help users invest in digital assets and earn through crypto trading without requiring prior trading knowledge. The UI focuses on simplicity, accessibility, and creating an intuitive investment experience while maintaining visual consistency with the brand website.',
  '["Intuitive trading interface", "Investment dashboard", "Asset management tools", "User-friendly navigation", "Clean visual design"]'::jsonb,
  'https://images.unsplash.com/photo-1639769085420-40f872a2ef79?w=1200&h=800&fit=crop',
  '',
  4
),
(
  'mms-learning',
  'MMS (Learning Management System)',
  'Education · EdTech',
  ARRAY['UI Design', 'UX Design', 'Design System', 'User Flow'],
  'Complete UI/UX design for a university Learning Management System.',
  'Designed the complete UI and UX for a university Learning Management System (LMS). The platform provides students and educators with an intuitive learning experience featuring course management, collaboration tools, interactive dashboards, and user-friendly navigation to improve engagement and learning outcomes.',
  '["Course management system", "Interactive dashboards", "Collaboration tools", "Intuitive navigation", "Design system components"]'::jsonb,
  'https://images.unsplash.com/photo-1501504905252-473c47e05962?w=1200&h=800&fit=crop',
  '',
  5
),
(
  'netivim-digital',
  'Netivim Digital',
  'eCommerce · Retail',
  ARRAY['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  'Modern, responsive eCommerce website with optimized shopping experience.',
  'Developed a modern, responsive eCommerce website with a clean shopping experience, optimized product pages, mobile responsiveness, and performance-focused frontend implementation.',
  '["Responsive design", "Optimized product pages", "Mobile-first approach", "Performance optimization", "Clean UI components"]'::jsonb,
  'https://images.unsplash.com/photo-1556742049-0faed625e1f2?w=1200&h=800&fit=crop',
  '',
  6
),
(
  'msb-outreach',
  'MSB Outreach',
  'Corporate · Staffing Solutions',
  ARRAY['Next.js', 'React', 'Tailwind CSS', 'SEO'],
  'Corporate website for remote workforce solutions company.',
  'Designed and developed the corporate website for MSB Outreach, a company specializing in remote workforce solutions. The website highlights staffing services, software engineering talent, startup solutions, and business growth opportunities through a modern, professional digital experience.',
  '["Professional corporate design", "Service showcase pages", "SEO optimization", "Responsive layout", "Modern UI/UX"]'::jsonb,
  'https://images.unsplash.com/photo-1522071820081-a1a33f1fa3be?w=1200&h=800&fit=crop',
  '',
  7
),
(
  'abec',
  'ABEC',
  'Education · International Consultancy',
  ARRAY['WordPress', 'Elementor', 'Responsive Design', 'SEO'],
  'Official website for Sri Lanka''s leading international education consultancy.',
  'Developed the official website for ABEC, one of Sri Lanka''s leading international education consultancies. The website presents study-abroad services, university partnerships, student success stories, and educational guidance in a professional and accessible format.',
  '["Study abroad services", "University partnerships showcase", "Student success stories", "Professional design", "Accessible content structure"]'::jsonb,
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f9?w=1200&h=800&fit=crop',
  'https://abec.lk',
  8
);

-- Update display orders for existing projects to make room for new ones
UPDATE projects SET display_order = 1 WHERE slug = 'meshaun-journeys';
UPDATE projects SET display_order = 2 WHERE slug = 'gosberton-house';
UPDATE projects SET display_order = 3 WHERE slug = 'red-state-invest';