import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: {
    default: 'Color Analysis Pro | AI-Powered Seasonal Color Analysis',
    template: '%s | Color Analysis Pro'
  },
  description: "Discover your optimal color palette through AI-powered seasonal color analysis. Determine your color season classification and receive a scientifically-based personal color palette in minutes.",
  keywords: ['color analysis', 'seasonal color analysis', 'what season am i', 'color season quiz', 'AI color analysis', 'personal color palette'],
  authors: [{ name: 'Color Analysis Pro' }],
  creator: 'Color Analysis Pro',
  publisher: 'Color Analysis Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://color-analysis.pro'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://color-analysis.pro',
    title: 'Color Analysis Pro | AI-Powered Seasonal Color Analysis',
    description: "Discover your optimal color palette through AI-powered seasonal color analysis. Determine your color season classification and receive a scientifically-based personal color palette in minutes.",
    siteName: 'Color Analysis Pro',
    images: [
      {
        url: '/lovable-uploads/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Color Analysis Pro - AI-powered seasonal color analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Analysis Pro | AI-Powered Seasonal Color Analysis',
    description: "Discover your optimal color palette through AI-powered seasonal color analysis. Determine your color season classification and receive a scientifically-based personal color palette in minutes.",
    images: ['/lovable-uploads/og-image.png'],
    creator: '@coloranalysis',
    site: '@coloranalysis',
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
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
  alternates: {
    canonical: "https://color-analysis.pro/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Color Analysis Pro | AI-Powered Seasonal Color Analysis",
    "description": "Discover your optimal color palette through AI-powered seasonal color analysis. Determine your color season classification and receive a scientifically-based personal color palette in minutes.",
    "url": "https://color-analysis.pro/",
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Color Analysis Pro",
      "url": "https://color-analysis.pro",
      "description": "AI-powered seasonal color analysis and personal color palette discovery",
      "publisher": {
        "@type": "Organization",
        "name": "Color Analysis Pro",
        "url": "https://color-analysis.pro",
        "logo": {
          "@type": "ImageObject",
          "url": "https://color-analysis.pro/lovable-uploads/logo1.png",
          "width": 64,
          "height": 64
        }
      }
    }
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Color Analysis Pro",
    "url": "https://color-analysis.pro",
    "logo": {
      "@type": "ImageObject",
      "url": "https://color-analysis.pro/lovable-uploads/logo1.png",
      "width": 64,
      "height": 64
    },
    "description": "AI-powered seasonal color analysis and personal color palette discovery",
    "sameAs": [
      "https://twitter.com/coloranalysis"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://color-analysis.pro/contact-us"
    },
    "foundingDate": "2024",
    "areaServed": "Worldwide",
    "serviceType": "AI Color Analysis"
  };

  return (
    <html lang="en">
      <head>
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          suppressHydrationWarning
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7C3AED" />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://quiz.color-analysis.pro" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://quiz.color-analysis.pro" />
      </head>
      <body className={inter.className}>

        {children}

      </body>
    </html>
  );
}