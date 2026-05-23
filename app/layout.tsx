import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Manrope, Space_Mono } from 'next/font/google';

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
  metadataBase: new URL('https://pixelceylon.com'),
  title: 'Pixel Ceylon — Building Digital Excellence',
  description:
    "Sri Lanka's premier digital agency. We craft high-performance websites and data-driven digital marketing strategies that turn clicks into customers.",
  keywords: ['web development', 'SEO', 'digital marketing', 'branding', 'Sri Lanka', 'web design'],
  authors: [{ name: 'Pixel Ceylon' }],
  openGraph: {
    title: 'Pixel Ceylon — Building Digital Excellence',
    description:
      "Sri Lanka's premier digital agency. High-performance websites and data-driven marketing — pixel by pixel.",
    type: 'website',
    locale: 'en_US',
    siteName: 'Pixel Ceylon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Ceylon — Building Digital Excellence',
    description: "Sri Lanka's premier digital agency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${manrope.variable} ${spaceMono.variable}`}
    >
      <body
        className={manrope.className}
        style={{ background: '#07080D', color: '#E8E9EF', overflowX: 'hidden' }}
      >
        {children}
      </body>
    </html>
  );
}
