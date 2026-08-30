import type { Metadata } from 'next';

export const SITE_DOMAIN = 'https://www.roshanenterprises.org';

export const BUSINESS_INFO = {
  name: 'Roshan Enterprises',
  legalName: 'Roshan Enterprises',
  url: SITE_DOMAIN,
  logo: `${SITE_DOMAIN}/logo.png`,
  image: `${SITE_DOMAIN}/images/hero_painting.jpg`,
  telephone: '+917048976431',
  formattedTelephone: '+91 70489 76431',
  email: 'info@roshanenterprises.co.in',
  contactEmail: 'roshanenterprises.noida@gmail.com',
  address: {
    streetAddress: 'Corporate Office, Greater Noida',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201310',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 28.4744,
    longitude: 77.5040,
  },
  priceRange: '₹₹-₹₹₹',
  areaServed: [
    'Noida',
    'Greater Noida',
    'Delhi NCR',
    'Gautam Buddha Nagar',
    'Uttar Pradesh',
    'PAN India',
  ],
  sameAs: [],
};

interface MetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadataHelper({
  title,
  description,
  path,
  keywords = [],
  ogType = 'website',
  ogImage = `${SITE_DOMAIN}/images/hero_painting.jpg`,
  noIndex = false,
}: MetadataOptions): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_DOMAIN}${cleanPath === '/' ? '' : cleanPath}`;

  const defaultKeywords = [
    'Roshan Enterprises',
    'Painting Services Noida',
    'Painting Contractor Greater Noida',
    'Civil Work Contractor Noida',
    'Residential Painting Noida',
    'Commercial Painting Greater Noida',
    'Delhi NCR Civil Contractor',
  ];

  const combinedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    metadataBase: new URL(SITE_DOMAIN),
    title,
    description,
    keywords: combinedKeywords,
    authors: [{ name: 'Roshan Enterprises' }],
    creator: 'Roshan Enterprises',
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: '/logo.png',
      shortcut: '/favicon.ico',
      apple: '/logo.png',
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Roshan Enterprises',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_DOMAIN}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    priceRange: BUSINESS_INFO.priceRange,
    areaServed: BUSINESS_INFO.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    description:
      'Roshan Enterprises provides professional painting, civil work, and industrial flooring solutions in Noida, Greater Noida, and Delhi NCR.',
    knowsAbout: [
      'Interior Painting',
      'Exterior Painting',
      'Residential Painting',
      'Commercial Painting',
      'Civil Works',
      'RCC Construction',
      'Civil Repair Work',
      'VDF & Epoxy Flooring',
    ],
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  areaServed: string[] = ['Noida', 'Greater Noida', 'Delhi NCR']
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.url,
      telephone: BUSINESS_INFO.telephone,
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    url: `${SITE_DOMAIN}${serviceUrl}`,
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: b.name,
      item: b.item.startsWith('http') ? b.item : `${SITE_DOMAIN}${b.item}`,
    })),
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_DOMAIN}/#website`,
    url: SITE_DOMAIN,
    name: 'Roshan Enterprises',
    description:
      'Professional painting & civil work services in Noida, Greater Noida, and Delhi NCR.',
    publisher: {
      '@id': `${SITE_DOMAIN}/#organization`,
    },
  };
}
