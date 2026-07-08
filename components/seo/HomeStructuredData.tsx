import { StructuredData } from './StructuredData';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateServiceSchema,
  generateProjectSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';

/**
 * Renders structured data for the home page
 * Includes Organization, LocalBusiness, and WebSite schemas
 */
export function HomeStructuredData() {
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
  ];

  return <StructuredData data={schemas} id="home-structured-data" />;
}

/**
 * Renders structured data for service detail pages
 */
export function ServiceStructuredData({
  service,
  breadcrumbs,
}: {
  service: {
    name: string;
    slug: string;
    intro: string;
    description: string;
    features: string[];
  };
  breadcrumbs: { name: string; url: string }[];
}) {
  const schemas = [
    generateServiceSchema(service),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return <StructuredData data={schemas} id="service-structured-data" />;
}

/**
 * Renders structured data for project detail pages
 */
export function ProjectStructuredData({
  project,
  breadcrumbs,
}: {
  project: {
    name: string;
    slug: string;
    summary: string;
    description: string;
    tags: string[];
    features: string[];
    image_url: string;
    external_url?: string;
  };
  breadcrumbs: { name: string; url: string }[];
}) {
  const schemas = [
    generateProjectSchema(project),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return <StructuredData data={schemas} id="project-structured-data" />;
}
