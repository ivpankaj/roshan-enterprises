import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.roshanenterprises.co.in'),
  title: "Roshan Enterprises | Painting, Flooring & Civil Works",
  description: "Roshan Enterprises provides professional painting, VDF/epoxy flooring, and civil work solutions in Greater Noida and across PAN India. Quality workmanship, skilled engineers, and on-time project completion.",
  keywords: [
    "Roshan Enterprises",
    "Painting Services Greater Noida",
    "Flooring Solutions Greater Noida",
    "Civil Works Greater Noida",
    "VDF Flooring Contractor",
    "Epoxy Flooring India",
    "Industrial Painting Greater Noida",
    "RCC Construction Noida",
    "PAN India Construction Contractor"
  ],
  authors: [{ name: "Roshan Enterprises" }],
  creator: "Roshan Enterprises",
  alternates: {
    canonical: 'https://www.roshanenterprises.co.in',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Roshan Enterprises | Painting, Flooring & Civil Works",
    description: "Complete Painting, Flooring & Civil Solutions for Every Space. Based in Greater Noida, serving PAN India.",
    url: "https://www.roshanenterprises.co.in",
    siteName: "Roshan Enterprises",
    images: [
      {
        url: "/images/hero_painting.jpg",
        width: 1200,
        height: 630,
        alt: "Roshan Enterprises Corporate Site",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Enterprises | Painting, Flooring & Civil Works",
    description: "Quality workmanship, skilled professionals and on-time project completion across PAN India.",
    images: ["/images/hero_painting.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Roshan Enterprises",
  "image": "https://www.roshanenterprises.co.in/images/hero_painting.jpg",
  "telephone": "+917048976431",
  "email": "info@roshanenterprises.co.in",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Greater Noida",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.4744,
    "longitude": 77.5040
  },
  "url": "https://www.roshanenterprises.co.in",
  "priceRange": "₹₹-₹₹₹",
  "areaServed": ["Greater Noida", "Noida", "Delhi NCR", "Neemrana", "PAN India"],
  "description": "Roshan Enterprises provides professional painting, flooring and civil work solutions across India.",
  "knowsAbout": [
    "Painting Services",
    "Texture Painting",
    "VDF Concrete Flooring",
    "Epoxy Flooring",
    "Concrete Densification",
    "RCC Civil Works",
    "Brickwork Masonry",
    "False Ceilings"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-bg-light text-text-dark font-sans antialiased min-h-screen flex flex-col">
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
