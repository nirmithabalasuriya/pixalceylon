import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import ServiceDetail from './ServiceDetail';

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
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) return null;

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
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getService(params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.name} Services — Pixel Ceylon`,
    description: service.intro,
    openGraph: {
      title: `${service.name} Services — Pixel Ceylon`,
      description: service.intro,
      images: service.image_url ? [{ url: service.image_url }] : [],
    },
  };
}

export async function generateStaticParams() {
  const { data } = await supabase.from('services').select('slug');
  return (data || []).map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);
  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
