import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Manrope, Space_Mono } from 'next/font/google';
import { SEO_CONFIG, DEFAULT_OG_IMAGE } from '@/lib/seo';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.keywords.join(', '),
  authors: [{ name: SEO_CONFIG.author, url: SEO_CONFIG.siteUrl }],
  creator: SEO_CONFIG.creator,
  publisher: SEO_CONFIG.publisher,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
    languages: {
      'en-US': SEO_CONFIG.siteUrl,
      'en-GB': SEO_CONFIG.siteUrl,
      'en-AU': SEO_CONFIG.siteUrl,
    },
  },
  openGraph: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    locale: SEO_CONFIG.locale,
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE.url,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
        type: DEFAULT_OG_IMAGE.type,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pixelceylon',
    creator: '@pixelceylon',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [DEFAULT_OG_IMAGE.url],
  },
  verification: {
    google: SEO_CONFIG.googleSiteVerification,
  },
  category: 'technology',
  classification: 'Digital Agency',
  referrer: 'origin-when-cross-origin',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': SEO_CONFIG.siteName,
    'application-name': SEO_CONFIG.siteName,
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': SEO_CONFIG.themeColor,
    'theme-color': SEO_CONFIG.themeColor,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${manrope.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/fonts/bebas-neue.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={manrope.className}
        style={{ background: '#07080D', color: '#E8E9EF', overflowX: 'hidden' }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
