import { supabase } from '@/lib/supabase';
import ProjectList from './ProjectList';

type Project = {
  id: string;
  slug: string;
  name: string;
  client_type: string;
  tags: string[];
  display_order: number;
};

async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('id, slug, name, client_type, tags, display_order')
    .order('display_order', { ascending: true });

  if (error || !data) return [];
  return data;
}

export const revalidate = 60;

export default async function Projects() {
  const projects = await getProjects();

  return <ProjectList projects={projects} />;
}
