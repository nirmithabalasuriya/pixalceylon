import { Metadata } from 'next';

// SEO Configuration
export const SEO_CONFIG = {
  siteName: 'Pixel Ceylon',
  siteUrl: 'https://pixelceylon.com',
  defaultTitle: 'Pixel Ceylon — Building Digital Excellence',
  defaultDescription:
    'Pixel Ceylon is a creative digital agency providing web development, website design, UI/UX design, branding, digital marketing, SEO, and custom digital solutions for businesses in Sri Lanka, the United Kingdom, and Australia.',
  keywords: [
    'Pixel Ceylon',
    'Web Development',
    'Website Development',
    'Website Design',
    'Responsive Web Design',
    'UI Design',
    'UX Design',
    'UI/UX Design',
    'Branding',
    'Brand Identity',
    'Logo Design',
    'Digital Design',
    'Digital Marketing',
    'SEO',
    'Search Engine Optimization',
    'Social Media Marketing',
    'Next.js Development',
    'React Development',
    'WordPress Development',
    'Frontend Development',
    'Custom Website Development',
    'Corporate Website',
    'Landing Page Design',
    'E-commerce Development',
    'Creative Agency',
    'Digital Agency',
    'Sri Lanka Web Development',
    'Sri Lanka Website Design',
    'Colombo Web Design',
    'UK Web Development',
    'UK Website Design',
    'Australia Web Development',
    'Australia Website Design',
  ],
  author: 'Pixel Ceylon',
  creator: 'Pixel Ceylon',
  publisher: 'Pixel Ceylon',
  locale: 'en_US',
  themeColor: '#b5e409',
  backgroundColor: '#07080D',
  googleSiteVerification: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
  googleAnalyticsId: 'G-XXXXXXXXXX',
};

// Default OG Image
export const DEFAULT_OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Pixel Ceylon — Sri Lanka\'s Premier Digital Agency',
  type: 'image/png',
};

// Generate page metadata
export function generatePageMetadata(options: {
  title: string;
  description?: string;
  keywords?: string[];
  image?: { url: string; width?: number; height?: number; alt?: string };
  canonical?: string;
  noIndex?: boolean;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
}): Metadata {
  const {
    title,
    description = SEO_CONFIG.defaultDescription,
    keywords = SEO_CONFIG.keywords,
    image = DEFAULT_OG_IMAGE,
    canonical,
    noIndex = false,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
    section,
  } = options;

  const fullTitle = title === SEO_CONFIG.defaultTitle ? title : `${title} | ${SEO_CONFIG.siteName}`;
  const canonicalUrl = canonical || SEO_CONFIG.siteUrl;
  const imageUrl = image.url.startsWith('http') ? image.url : `${SEO_CONFIG.siteUrl}${image.url}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: authors?.map((name) => ({ name })) || [{ name: SEO_CONFIG.author }],
    creator: SEO_CONFIG.creator,
    publisher: SEO_CONFIG.publisher,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      locale: SEO_CONFIG.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: image.width || DEFAULT_OG_IMAGE.width,
          height: image.height || DEFAULT_OG_IMAGE.height,
          alt: image.alt || DEFAULT_OG_IMAGE.alt,
          type: image.url.endsWith('.png') ? 'image/png' : 'image/jpeg',
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors,
        section,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@pixelceylon',
      site: '@pixelceylon',
    },
    verification: {
      google: SEO_CONFIG.googleSiteVerification,
    },
    category: 'technology',
  };
}

// Generate service metadata
export function generateServiceMetadata(service: {
  name: string;
  intro: string;
  slug: string;
  image_url?: string;
}): Metadata {
  const serviceKeywords = [
    ...SEO_CONFIG.keywords,
    `${service.name} Sri Lanka`,
    `${service.name} UK`,
    `${service.name} Australia`,
    `Professional ${service.name}`,
    `Best ${service.name} Services`,
  ];

  return generatePageMetadata({
    title: `${service.name} Services`,
    description: service.intro,
    keywords: serviceKeywords,
    image: service.image_url
      ? { url: service.image_url, alt: `${service.name} Services by Pixel Ceylon` }
      : undefined,
    canonical: `${SEO_CONFIG.siteUrl}/services/${service.slug}`,
    type: 'website',
  });
}

// Generate project metadata
export function generateProjectMetadata(project: {
  name: string;
  summary: string;
  slug: string;
  tags: string[];
  image_url?: string;
}): Metadata {
  const projectKeywords = [
    `Pixel Ceylon ${project.name}`,
    `${project.name} Case Study`,
    `${project.name} Project`,
    ...project.tags,
    ...SEO_CONFIG.keywords.filter((k) =>
      project.tags.some((t) => k.toLowerCase().includes(t.toLowerCase()))
    ),
  ];

  return generatePageMetadata({
    title: `${project.name} — Case Study`,
    description: project.summary,
    keywords: projectKeywords,
    image: project.image_url
      ? { url: project.image_url, alt: `${project.name} by Pixel Ceylon` }
      : undefined,
    canonical: `${SEO_CONFIG.siteUrl}/work/${project.slug}`,
    type: 'article',
  });
}

// JSON-LD Structured Data Generators

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SEO_CONFIG.siteUrl}/logo.png`,
      width: 200,
      height: 60,
    },
    description: SEO_CONFIG.defaultDescription,
    foundingDate: '2023',
    founders: [
      {
        '@type': 'Person',
        name: 'Pixel Ceylon Team',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colombo',
      addressRegion: 'Western Province',
      addressCountry: 'LK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94-XX-XXX-XXXX',
      contactType: 'customer service',
      email: 'hello@pixelceylon.com',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.facebook.com/pixelceylon',
      'https://www.instagram.com/pixelceylon',
      'https://www.linkedin.com/company/pixelceylon',
      'https://twitter.com/pixelceylon',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Sri Lanka',
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      {
        '@type': 'Country',
        name: 'Australia',
      },
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SEO_CONFIG.siteUrl}/#localbusiness`,
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Colombo',
      addressLocality: 'Colombo',
      addressRegion: 'Western Province',
      postalCode: '00100',
      addressCountry: 'LK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '6.9271',
      longitude: '79.8612',
    },
    openingHours: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    telephone: '+94-XX-XXX-XXXX',
    email: 'hello@pixelceylon.com',
    image: `${SEO_CONFIG.siteUrl}/og-image.png`,
    sameAs: [
      'https://www.facebook.com/pixelceylon',
      'https://www.instagram.com/pixelceylon',
      'https://www.linkedin.com/company/pixelceylon',
      'https://twitter.com/pixelceylon',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Sri Lanka',
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      {
        '@type': 'Country',
        name: 'Australia',
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_CONFIG.siteUrl}/#website`,
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    publisher: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SEO_CONFIG.siteUrl}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SEO_CONFIG.siteUrl}${item.url}`,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  slug: string;
  intro: string;
  description: string;
  features: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SEO_CONFIG.siteUrl}/services/${service.slug}/#service`,
    name: service.name,
    description: service.intro,
    provider: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Sri Lanka',
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      {
        '@type': 'Country',
        name: 'Australia',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: service.features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
          description: feature,
        },
      })),
    },
    url: `${SEO_CONFIG.siteUrl}/services/${service.slug}`,
  };
}

export function generateProjectSchema(project: {
  name: string;
  slug: string;
  summary: string;
  description: string;
  tags: string[];
  features: string[];
  image_url: string;
  external_url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SEO_CONFIG.siteUrl}/work/${project.slug}/#project`,
    name: project.name,
    description: project.summary,
    creator: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    keywords: project.tags.join(', '),
    image: project.image_url,
    url: `${SEO_CONFIG.siteUrl}/work/${project.slug}`,
    ...(project.external_url && {
      sameAs: project.external_url,
    }),
  };
}

// Google Analytics Script
export function GoogleAnalyticsScript() {
  if (!SEO_CONFIG.googleAnalyticsId || SEO_CONFIG.googleAnalyticsId === 'G-XXXXXXXXXX') {
    return null;
  }

  return `
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${SEO_CONFIG.googleAnalyticsId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${SEO_CONFIG.googleAnalyticsId}');
    </script>
  `;
}
