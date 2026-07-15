import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import ServiceDetail from './ServiceDetail';
import { generateServiceMetadata, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/seo/StructuredData';

type Service = {
  id: string;
  slug: string;
  num: string;
  name: string;
  intro: string;
  description: string;
  tech_stack: { name: string; category: string }[];
  features: string[];
  image_url: string;
  icon: string;
};

async function getService(slug: string): Promise<Service | null> {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error) {
      console.error('Error fetching service:', error.message, error.details, error.hint);
      return null;
    }

    if (!data) {
      console.log('No service found for slug:', slug);
      return null;
    }

    return {
      id: data.id,
      slug: data.slug,
      num: data.num,
      name: data.name,
      intro: data.intro,
      description: data.description,
      tech_stack: data.tech_stack || [],
      features: data.features || [],
      image_url: data.image_url,
      icon: data.icon,
    };
  } catch (err) {
    console.error('Exception fetching service:', err);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getService(params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
      robots: { index: false, follow: false },
    };
  }

  return generateServiceMetadata(service);
}

export async function generateStaticParams() {
  try {
    const { data } = await supabase.from('services').select('slug');
    return (data || []).map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export const revalidate = 60;

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: service.name, url: `/services/${service.slug}` },
  ];

  const structuredData = [
    generateServiceSchema(service),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={structuredData} id="service-page-structured-data" />

      <ServiceDetail service={service} />
    </>
  );
}
