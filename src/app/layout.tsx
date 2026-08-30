import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { SITE_DOMAIN, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: {
    default: "Roshan Enterprises | Painting & Civil Work Services in Noida & Greater Noida",
    template: "%s | Roshan Enterprises",
  },
  description:
    "Roshan Enterprises provides professional painting and civil work services in Noida, Greater Noida and Delhi NCR. Get reliable residential, commercial and property improvement services.",
  keywords: [
    "Roshan Enterprises",
    "Painting Services Noida",
    "Painting Services Greater Noida",
    "Painting Contractor Noida",
    "Civil Work Contractor Noida",
    "Best Painter in Noida",
    "Residential Painting Noida",
    "Commercial Painting Greater Noida",
    "Civil Work Greater Noida",
    "Delhi NCR Painting Contractor",
  ],
  authors: [{ name: "Roshan Enterprises" }],
  creator: "Roshan Enterprises",
  alternates: {
    canonical: SITE_DOMAIN,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Roshan Enterprises | Painting & Civil Work Services in Noida & Greater Noida",
    description:
      "Roshan Enterprises provides professional painting and civil work services in Noida, Greater Noida and Delhi NCR. Reliable residential, commercial and property improvement services.",
    url: SITE_DOMAIN,
    siteName: "Roshan Enterprises",
    images: [
      {
        url: `${SITE_DOMAIN}/images/hero_painting.jpg`,
        width: 1200,
        height: 630,
        alt: "Roshan Enterprises Painting & Civil Work Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Enterprises | Painting & Civil Work Services in Noida & Greater Noida",
    description:
      "Professional painting and civil work services in Noida, Greater Noida and Delhi NCR. High quality workmanship and on-time project completion.",
    images: [`${SITE_DOMAIN}/images/hero_painting.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessLd = generateLocalBusinessSchema();
  const websiteLd = generateWebSiteSchema();

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CSYPNZGS7M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CSYPNZGS7M');
          `}
        </Script>

        <link rel="icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="bg-bg-light text-text-dark font-sans antialiased min-h-screen flex flex-col">
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
