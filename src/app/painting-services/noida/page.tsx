import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { LocationPageClient } from '@/components/LocationPageClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Painting Services in Noida | Best Painter & Contractor | Roshan Enterprises',
  description:
    'Best painting service in Noida by Roshan Enterprises. Professional house painting, residential painting, commercial painting, interior wall textures, and exterior waterproofing in Noida.',
  path: '/painting-services/noida',
  keywords: [
    'painting services in Noida',
    'best painting service in Noida',
    'best painter in Noida',
    'house painting services in Noida',
    'residential painting services in Noida',
    'commercial painting services in Noida',
    'exterior painting services in Noida',
    'interior painting services in Noida',
    'wall painting services in Noida',
    'painting contractor in Noida',
    'painting company in Noida',
    'painters near me Noida',
  ],
});

const faqs = [
  {
    question: 'How do I hire the best painter in Noida for house painting?',
    answer: 'Contact Roshan Enterprises for a free site inspection. Our team measures wall area, tests surface moisture, provides color shade guides, and submits a detailed transparent quote.',
  },
  {
    question: 'What is the cost of house painting services in Noida?',
    answer: 'Painting costs vary based on paint grade (emulsion, velvet, texture), wall condition, and putty work required. We provide itemized per-sq-ft estimates with zero hidden fees.',
  },
];

export default function NoidaPaintingServicesPage() {
  const serviceLd = generateServiceSchema(
    'Painting Services in Noida',
    'Professional house painting, residential interior painting, commercial office painting, and wall textures in Noida.',
    '/painting-services/noida',
    ['Noida', 'Delhi NCR']
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
      <LocationPageClient
        locationName="Noida"
        title="Best Painting Services & Painting Contractor in Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Painting Services Noida', href: '/painting-services/noida' },
        ]}
        intro="Roshan Enterprises is a premier painting company in Noida delivering top-quality house painting, commercial office painting, wall texture designs, and damp-proof exterior wall coatings."
        heroImage="/images/painting_interior.jpg"
        sectorsServed={[
          'Noida Sector 62 & 63',
          'Noida Expressway Sectors (128, 135, 137, 142, 150)',
          'Noida Sector 18 & Atta Market',
          'Noida Sector 74, 75, 76, 78',
          'Noida Extension / West border',
        ]}
        localRequirements="Homeowners and corporate office managers in Noida look for reliable painting contractors who use genuine certified paints (Asian Paints, Berger), provide dust-free mechanical sanding, protect existing flooring & furniture, and finish within agreed timelines."
        paintingHighlights={[
          'Residential house painting for 2BHK, 3BHK, 4BHK flats & villas in Noida.',
          'Interior velvet emulsion painting, stencil art, and luxury wall textures.',
          'Commercial office painting with low-VOC odorless paints for active workplaces.',
          'Exterior elastomeric waterproof painting with anti-fungal protection.',
        ]}
        civilHighlights={[
          'Wall putty sanding & moisture barrier sealing.',
          'Crack filling & damp plaster restoration.',
          'Wood door & window polyurethane enamel polish.',
          'Waterproofing membrane installation for balcony & roof dampness.',
        ]}
        faqs={faqs}
        serviceLinks={[
          { title: 'Residential Painting Noida', href: '/services/painting/residential-painting' },
          { title: 'Commercial Painting Noida', href: '/services/painting/commercial-painting' },
          { title: 'Interior Painting Noida', href: '/services/painting/interior-painting' },
          { title: 'Civil Work Noida', href: '/civil-work/noida' },
        ]}
      />
    </>
  );
}
