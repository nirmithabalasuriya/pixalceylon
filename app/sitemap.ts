import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { SEO_CONFIG } from '@/lib/seo';

type Service = {
  slug: string;
  updated_at?: string;
};

type Project = {
  slug: string;
  id: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = SEO_CONFIG.siteUrl;

  // Fetch dynamic routes from Supabase
  const [servicesResult, projectsResult] = await Promise.all([
    supabase.from('services').select('slug, updated_at'),
    supabase.from('projects').select('slug, id'),
  ]);

  const services: Service[] = servicesResult.data || [];
  const projects: Project[] = projectsResult.data || [];

  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/#services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#stats`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/#projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Service detail pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: service.updated_at ? new Date(service.updated_at) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Project detail pages (case studies)
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service-specific index pages
  const serviceIndexPages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
