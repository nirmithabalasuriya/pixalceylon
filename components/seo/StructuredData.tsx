import Script from 'next/script';
import { ReactNode } from 'react';

type StructuredDataProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

/**
 * Renders JSON-LD structured data as a script tag for SEO
 */
export function StructuredData({ data, id = 'structured-data' }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd),
      }}
    />
  );
}

type JsonLdArrayProps = {
  items: Record<string, unknown>[];
  id?: string;
};

/**
 * Renders multiple JSON-LD objects as an array
 */
export function StructuredDataArray({ items, id = 'structured-data-array' }: JsonLdArrayProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(items),
      }}
    />
  );
}

/**
 * Combines multiple structured data objects
 */
export function combineStructuredData(
  ...data: (Record<string, unknown> | null | undefined)[]
): Record<string, unknown>[] {
  return data.filter((d): d is Record<string, unknown> => d !== null && d !== undefined);
}

// Re-export from lib/seo for convenience
export {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateProjectSchema,
} from '@/lib/seo';
