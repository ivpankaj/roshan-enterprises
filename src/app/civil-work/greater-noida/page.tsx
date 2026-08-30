import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { LocationPageClient } from '@/components/LocationPageClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Civil Work Contractor in Greater Noida | Best Civil Contractor | Roshan Enterprises',
  description:
    'Best civil work contractor in Greater Noida by Roshan Enterprises. Expert civil construction work, civil repair work, RCC framing, and masonry in Greater Noida.',
  path: '/civil-work/greater-noida',
  keywords: [
    'civil work in Greater Noida',
    'best civil work contractor in Greater Noida',
    'civil contractor in Greater Noida',
    'civil construction work in Greater Noida',
    'civil repair work in Greater Noida',
  ],
});

const faqs = [
  {
    question: 'Why choose Roshan Enterprises as your civil contractor in Greater Noida?',
    answer: 'We are headquartered in Greater Noida, maintain dedicated civil engineers & equipment, strictly follow Indian Standard Codes (IS 456), and deliver upfront transparent BOQs.',
  },
  {
    question: 'Do you handle structural additions and machine pads in Ecotech Greater Noida?',
    answer: 'Yes, we construct heavy RCC machine pads, equipment foundations, structural extensions, and facility boundary walls in Ecotech industrial zones.',
  },
];

export default function GreaterNoidaCivilWorkPage() {
  const serviceLd = generateServiceSchema(
    'Civil Work in Greater Noida',
    'Professional civil contractor services, RCC construction, masonry, and civil repair work in Greater Noida.',
    '/civil-work/greater-noida',
    ['Greater Noida', 'Delhi NCR']
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
        locationName="Greater Noida"
        title="Best Civil Work Contractor & Construction in Greater Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Civil Work Greater Noida', href: '/civil-work/greater-noida' },
        ]}
        intro="Roshan Enterprises is headquartered in Greater Noida, offering comprehensive civil construction work, RCC framing, block masonry, structural modifications, and civil repair work."
        heroImage="/images/civil_construction.jpg"
        sectorsServed={[
          'Knowledge Park I, II, III, IV, V',
          'Ecotech 1, 2, 3, 6, 12 Industrial Belts',
          'Greater Noida West (Noida Extension)',
          'Pari Chowk & Omega Sectors',
        ]}
        localRequirements="Industrial plants in Ecotech and institutional campuses in Knowledge Park require heavy structural strength, certified concrete mixes (M25/M30), precise level control, and fast execution to meet facility deadlines."
        paintingHighlights={[
          'Anti-corrosive industrial painting over new civil steel structures.',
          'Exterior elastomeric wall paint for newly plastered buildings.',
          'Dust-free wall putty and interior emulsion finishing.',
          'Enamel painting for structural safety railings and fire doors.',
        ]}
        civilHighlights={[
          'Heavy RCC machine pads, column casting, and foundation slabs.',
          'AAC block masonry, red clay brickwork, and smooth gypsum plaster.',
          'Structural crack repair, damp-proofing, and terrace waterproofing.',
          'VDF concrete dewatered flooring, groove cutting, and joint sealing.',
        ]}
        faqs={faqs}
        serviceLinks={[
          { title: 'Residential Civil Work', href: '/services/civil-work/residential-civil-work' },
          { title: 'Commercial Civil Work', href: '/services/civil-work/commercial-civil-work' },
          { title: 'Civil Repair Work', href: '/services/civil-work/repair-work' },
          { title: 'Painting Services Greater Noida', href: '/painting-services/greater-noida' },
        ]}
      />
    </>
  );
}
