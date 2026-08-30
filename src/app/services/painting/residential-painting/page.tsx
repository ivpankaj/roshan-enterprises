import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceDetailClient } from '@/components/ServiceDetailClient';
import { CheckCircle2, ShieldCheck, Paintbrush } from 'lucide-react';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Residential Painting Services in Noida & Greater Noida | Roshan Enterprises',
  description:
    'High quality residential house painting services in Noida, Greater Noida, and Delhi NCR. Interior velvet emulsion, designer wall textures, and exterior waterproofing.',
  path: '/services/painting/residential-painting',
  keywords: [
    'residential painting services in Noida',
    'house painting services in Noida',
    'residential painting Greater Noida',
    'best painter in Noida',
    'home painting contract Noida',
    'house painting Greater Noida',
  ],
});

const faqs = [
  {
    question: 'How long does it take to paint a 3BHK house in Noida?',
    answer: 'A standard 3BHK apartment in Noida typically takes between 4 to 6 days for full wall putty sanding, primer application, and dual-coat velvet emulsion finishing.',
  },
  {
    question: 'What paints do you use for residential home painting?',
    answer: 'We use premium certified emulsions from Asian Paints, Berger, and Nerolac (Royale, Velvet Touch, Weathercoat) based on client preference and budget.',
  },
  {
    question: 'Do you cover and protect furniture during house painting?',
    answer: 'Yes, our team adheres to a strict mask-and-protect protocol. We cover all furniture, floors, electrical switches, and fixtures before starting sand or paint application.',
  },
];

export default function ResidentialPaintingPage() {
  const serviceLd = generateServiceSchema(
    'Residential Painting Services',
    'Professional home painting services for apartments, villas, and independent houses in Noida, Greater Noida, and Delhi NCR.',
    '/services/painting/residential-painting'
  );
  const faqLd = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ServiceDetailClient
        serviceTitle="Residential Painting Services in Noida & Greater Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Painting', href: '/services/painting' },
          { name: 'Residential Painting', href: '/services/painting/residential-painting' },
        ]}
        introText="Roshan Enterprises provides premium residential house painting services across Noida, Greater Noida, and Delhi NCR. From high-rise apartments to luxury villas, our expert painters ensure flawless wall smoothness, vibrant color matching, and long-lasting protection."
        heroImage="/images/hero_painting.jpg"
        features={[
          {
            title: 'Interior Velvet & Acrylic Emulsion',
            desc: 'Rich, washable, low-VOC interior paints tailored for living rooms, bedrooms, and dining halls.',
          },
          {
            title: 'Designer Wall Textures & Stencils',
            desc: 'Custom metallic textures, accent wall patterns, and stencil finishes for premium living spaces.',
          },
          {
            title: 'Waterproof Exterior Coatings',
            desc: 'Weather-resistant exterior paint application that prevents dampness, fungus, and color fading.',
          },
          {
            title: 'Multi-Coat Putty & Surface Polish',
            desc: 'Dust-free mechanical sanding and polymer wall putty application to eliminate surface cracks.',
          },
        ]}
        suitableProperties={['Apartment Complexes', 'Private Villas', 'Duplex Homes', 'High-Rise Towers', 'Residential Societies']}
        serviceLocations={['Noida (All Sectors)', 'Greater Noida (Knowledge Park, Ecotech)', 'Greater Noida West', 'Delhi NCR']}
        faqs={faqs}
        relatedServices={[
          { title: 'Interior Painting Services', href: '/services/painting/interior-painting' },
          { title: 'Exterior Painting Services', href: '/services/painting/exterior-painting' },
          { title: 'Commercial Painting Services', href: '/services/painting/commercial-painting' },
          { title: 'Residential Civil Work', href: '/services/civil-work/residential-civil-work' },
        ]}
      />
    </>
  );
}
