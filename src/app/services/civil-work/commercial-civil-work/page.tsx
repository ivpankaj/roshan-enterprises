import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { ServiceDetailClient } from '@/components/ServiceDetailClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Commercial Civil Work Contractor in Noida & Greater Noida | Roshan Enterprises',
  description:
    'Commercial civil work contractor in Noida, Greater Noida, and Delhi NCR. RCC machine foundations, drywall office partitions, acoustic ceilings, and structural additions.',
  path: '/services/civil-work/commercial-civil-work',
  keywords: [
    'commercial civil work Noida',
    'commercial civil contractor Greater Noida',
    'RCC machine foundation Noida',
    'drywall partition contractor Greater Noida',
    'office civil construction NCR',
  ],
});

const faqs = [
  {
    question: 'What civil construction standards do you follow for commercial projects?',
    answer: 'All our structural concrete, rebar binding, and masonry work adheres strictly to Indian Standard Codes (IS 456, IS 1786, and NBC guidelines).',
  },
  {
    question: 'Can you construct heavy RCC machine foundations for industrial plants?',
    answer: 'Yes, we design and execute heavy RCC machine pads, vibration-isolated foundation slabs, and equipment trenches using M25/M30 grade concrete.',
  },
];

export default function CommercialCivilWorkPage() {
  const serviceLd = generateServiceSchema(
    'Commercial Civil Work Services',
    'Heavy commercial RCC framing, block partitions, false ceilings, and structural civil additions in Noida, Greater Noida, and Delhi NCR.',
    '/services/civil-work/commercial-civil-work'
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
        serviceTitle="Commercial Civil Work in Noida & Greater Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Civil Work', href: '/services/civil-work' },
          { name: 'Commercial Civil Work', href: '/services/civil-work/commercial-civil-work' },
        ]}
        introText="Roshan Enterprises is an experienced commercial civil contractor providing structural RCC framing, machine foundations, office partitions, and false ceilings for commercial and industrial hubs in Noida, Greater Noida, and Delhi NCR."
        heroImage="/images/civil_construction.jpg"
        features={[
          {
            title: 'RCC Structural Columns, Beams & Slabs',
            desc: 'Precision shuttering, rebar binding, and M25/M30 grade structural concrete pouring.',
          },
          {
            title: 'Heavy Industrial Machine Pads & Trenches',
            desc: 'Vibration-dampened heavy RCC foundations engineered for industrial equipment.',
          },
          {
            title: 'Drywall Partitions & Acoustic Ceilings',
            desc: 'Metal stud gypsum partitions, acoustic grid tiles, and baffle ceiling systems for modern offices.',
          },
          {
            title: 'Granite Lobbies & Commercial Tile Laying',
            desc: 'High-traffic Kota stone, granite floor cladding, and elevator lobby finishes.',
          },
        ]}
        suitableProperties={['Commercial Office Towers', 'Industrial Manufacturing Facilities', 'IT & Tech Parks', 'Institutional Campuses', 'Healthcare Facilities']}
        serviceLocations={['Noida Expressway', 'Knowledge Park Greater Noida', 'Ecotech 1-6 Greater Noida', 'Delhi NCR']}
        faqs={faqs}
        relatedServices={[
          { title: 'Residential Civil Work', href: '/services/civil-work/residential-civil-work' },
          { title: 'Civil Repair Work', href: '/services/civil-work/repair-work' },
          { title: 'VDF & Epoxy Flooring', href: '/services/flooring' },
          { title: 'Commercial Painting', href: '/services/painting/commercial-painting' },
        ]}
      />
    </>
  );
}
