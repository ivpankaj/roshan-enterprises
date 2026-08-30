import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { LocationPageClient } from '@/components/LocationPageClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Civil Work Contractor in Noida | Best Civil Contractor | Roshan Enterprises',
  description:
    'Best civil work contractor in Noida by Roshan Enterprises. Professional civil construction, block masonry, tile laying, wall plastering, and civil repair work in Noida.',
  path: '/civil-work/noida',
  keywords: [
    'civil work contractor in Noida',
    'best civil work in Noida',
    'civil contractor in Noida',
    'civil repair work Noida',
    'civil construction Noida',
  ],
});

const faqs = [
  {
    question: 'How do I request a civil work quote for my property in Noida?',
    answer: 'Contact Roshan Enterprises to schedule a site visit. Our civil engineer will measure the site, assess structural scope, and provide a line-item BOQ quotation.',
  },
  {
    question: 'What civil construction services do you handle in Noida?',
    answer: 'We handle RCC structural works, block masonry, internal/external plastering, vitrified tile laying, drywall office partitions, and damp-proofing repair works.',
  },
];

export default function NoidaCivilWorkPage() {
  const serviceLd = generateServiceSchema(
    'Civil Work in Noida',
    'Professional civil contractor services, masonry, plastering, tile laying, and civil repair work in Noida.',
    '/civil-work/noida',
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
        title="Civil Work Contractor & Best Civil Work in Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Civil Work Noida', href: '/civil-work/noida' },
        ]}
        intro="Roshan Enterprises is a leading civil contractor in Noida specializing in structural RCC, AAC block masonry, smooth wall plastering, floor tile installation, and civil repair work."
        heroImage="/images/civil_construction.jpg"
        sectorsServed={[
          'Noida Sector 62, 63, 64',
          'Noida Expressway Sectors',
          'Noida Sector 18 & Commercial Belts',
          'Noida Sector 137 & Expressway Societies',
        ]}
        localRequirements="Civil work in Noida demands strict adherence to structural engineering standards, proper debris management, dust containment, and timely execution within society or commercial building operating hours."
        paintingHighlights={[
          'Surface primer application & wall putty finish post-plastering.',
          'Waterproof exterior paint over fresh grit plaster.',
          'Enamel protective coating for steel structural beams.',
          'Interior washable velvet emulsion for newly constructed walls.',
        ]}
        civilHighlights={[
          'AAC block masonry & clay brickwork with polymer mortar.',
          'Gypsum plastering & 18mm dual-coat external cement grit plaster.',
          'Vitrified floor tiling & Rajasthan granite lobby cladding.',
          'Drywall office partitions & acoustic ceiling grids.',
        ]}
        faqs={faqs}
        serviceLinks={[
          { title: 'Residential Civil Work', href: '/services/civil-work/residential-civil-work' },
          { title: 'Commercial Civil Work', href: '/services/civil-work/commercial-civil-work' },
          { title: 'Civil Repair Work', href: '/services/civil-work/repair-work' },
          { title: 'Painting Services Noida', href: '/painting-services/noida' },
        ]}
      />
    </>
  );
}
