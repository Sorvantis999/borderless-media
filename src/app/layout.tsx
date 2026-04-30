import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const BASE_URL = 'https://borderlessmediallc.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/passports-editorial.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Borderless Media — Geopolitical Intelligence',
    template: '%s | Borderless Media',
  },
  description:
    'Sovereign risk research, jurisdictional analysis, and geopolitical intelligence for internationally mobile individuals and institutions. Independent. Unsponsored. Primary-sourced.',
  openGraph: {
    type: 'website',
    siteName: 'Borderless Media',
    title: 'Borderless Media — Geopolitical Intelligence',
    description:
      'Sovereign risk research, jurisdictional analysis, and geopolitical intelligence for internationally mobile individuals and institutions.',
    url: BASE_URL,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: 'Borderless Media — Geopolitical Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borderless Media — Geopolitical Intelligence',
    description:
      'Sovereign risk research, jurisdictional analysis, and geopolitical intelligence for internationally mobile individuals.',
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: '/borderless-media-nav.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Borderless Media',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/borderless-media-nav.svg`,
      },
      description:
        'Independent geopolitical intelligence, sovereign risk research, and jurisdictional analysis for internationally mobile individuals and institutions.',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Sorvantis Corporation',
        url: 'https://sorvantis.com',
      },
      sameAs: [
        'https://thelongmemo.com',
        'https://borderlessliving.com',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Borderless Media',
      description: 'Geopolitical intelligence and sovereign risk research.',
      publisher: {
        '@id': `${BASE_URL}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/research?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vtcf7hc2kq");
        `}</Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SY40PXN5TP" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SY40PXN5TP');
        `}</Script>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
