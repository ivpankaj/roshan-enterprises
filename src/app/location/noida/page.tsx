import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { LocationPageClient } from '@/components/LocationPageClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Painting & Civil Work Services in Noida | Roshan Enterprises',
  description:
    'Roshan Enterprises is a leading painting contractor and civil work contractor in Noida. Quality residential painting, commercial painting, and civil repair work.',
  path: '/location/noida',
  keywords: [
    'painting services in Noida',
    'best painting service in Noida',
    'best painter in Noida',
    'house painting services in Noida',
    'civil work contractor in Noida',
    'best civil work in Noida',
    'civil contractor in Noida',
    'painters near me Noida',
  ],
});

const faqs = [
  {
    question: 'How quickly can your painting team start work on a site in Noida Sector 62 or 137?',
    answer: 'Upon initial site evaluation, our Noida field team can mobilize materials and start wall preparation work within 24 to 48 hours.',
  },
  {
    question: 'Do you offer civil repair and tile laying work in Noida apartments?',
    answer: 'Yes, we handle complete home civil modifications, bathroom retiling, wall plaster restoration, and crack repairs in Noida apartments and independent houses.',
  },
];

export default function NoidaLocationPage() {
  const serviceLd = generateServiceSchema(
    'Painting & Civil Work Services in Noida',
    'Professional residential painting, commercial office painting, and civil work execution in Noida.',
    '/location/noida',
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
        title="Painting Services & Civil Work Contractor in Noida"
        breadcrumbs={[
          { name: 'Locations', href: '/location' },
          { name: 'Noida', href: '/location/noida' },
        ]}
        intro="Roshan Enterprises is a trusted local contractor providing premium residential painting, commercial office painting, interior wall textures, and structural civil work services across Noida."
        heroImage="/images/painting_interior.jpg"
        sectorsServed={[
          'Noida Sector 62',
          'Noida Sector 18',
          'Noida Expressway (Sectors 128-150)',
          'Noida Sector 137',
          'Noida Sector 76 / 78',
          'Noida Sector 15 / 16',
        ]}
        localRequirements="Noida features a diverse mix of high-rise residential societies along the Expressway and corporate IT parks in Sector 62 & 142. Property owners require dust-free painting execution, washable velvet wall emulsions, weather-proof exterior coatings, and clean civil repair work that respects housing society rules."
        paintingHighlights={[
          'Residential interior velvet emulsion and wall putty polish for Noida apartments.',
          'Designer wall textures, stencil patterns, and accent wall painting.',
          'Commercial office painting with low-VOC, odorless paints for occupied spaces.',
          'Exterior elastomeric weather-proof painting for high-rise residential towers.',
        ]}
        civilHighlights={[
          'Vitrified floor tile laying and bathroom wall ceramic retiling.',
          'Internal wall demolition, brickwork block masonry, and gypsum plastering.',
          'Structural crack repair, damp-proofing, and balcony waterproofing.',
          'Drywall office partitions and grid acoustic false ceiling installations.',
        ]}
        faqs={faqs}
        serviceLinks={[
          { title: 'Painting Services Noida', href: '/painting-services/noida' },
          { title: 'Civil Work Noida', href: '/civil-work/noida' },
          { title: 'Residential Painting', href: '/services/painting/residential-painting' },
          { title: 'Commercial Painting', href: '/services/painting/commercial-painting' },
        ]}
      />
    </>
  );
}
