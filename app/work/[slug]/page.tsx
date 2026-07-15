import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import ProjectDetail from './ProjectDetail';
import { generateProjectMetadata, generateProjectSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/seo/StructuredData';

type Project = {
  id: string;
  slug: string;
  name: string;
  client_type: string;
  tags: string[];
  summary: string;
  description: string;
  features: string[];
  image_url: string;
  gallery: { url: string; alt: string }[];
  external_url: string;
  display_order: number;
};

async function getProject(slug: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error) {
      console.error('Error fetching project:', error.message, error.details, error.hint);
      return null;
    }

    if (!data) {
      console.log('No project found for slug:', slug);
      return null;
    }

    return {
      id: data.id,
      slug: data.slug,
      name: data.name,
      client_type: data.client_type,
      tags: data.tags || [],
      summary: data.summary,
      description: data.description,
      features: data.features || [],
      image_url: data.image_url,
      gallery: data.gallery || [],
      external_url: data.external_url,
      display_order: data.display_order,
    };
  } catch (err) {
    console.error('Exception fetching project:', err);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
      robots: { index: false, follow: false },
    };
  }

  return generateProjectMetadata(project);
}

export async function generateStaticParams() {
  try {
    const { data } = await supabase.from('projects').select('slug');
    return (data || []).map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export const revalidate = 60;

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) notFound();

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Work', url: '/#projects' },
    { name: project.name, url: `/work/${project.slug}` },
  ];

  const structuredData = [
    generateProjectSchema({
      name: project.name,
      slug: project.slug,
      summary: project.summary,
      description: project.description,
      tags: project.tags,
      features: project.features,
      image_url: project.image_url,
      external_url: project.external_url,
    }),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={structuredData} id="project-page-structured-data" />

      <ProjectDetail project={project} />
    </>
  );
}
