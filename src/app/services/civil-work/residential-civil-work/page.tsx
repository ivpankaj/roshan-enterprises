import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { ServiceDetailClient } from '@/components/ServiceDetailClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Residential Civil Work Contractor in Noida & Greater Noida | Roshan Enterprises',
  description:
    'Reliable residential civil construction and repair contractor in Noida, Greater Noida, and Delhi NCR. Home modifications, masonry, plastering, and vitrified tile laying.',
  path: '/services/civil-work/residential-civil-work',
  keywords: [
    'residential civil work Noida',
    'residential civil contractor Greater Noida',
    'house masonry contractor Noida',
    'tile laying contractor Greater Noida',
    'home repair civil work NCR',
  ],
});

const faqs = [
  {
    question: 'What residential civil services do you handle in Noida & Greater Noida?',
    answer: 'We handle brick masonry, wall plastering, bathroom tiling, vitrified floor tile laying, balcony waterproofing, kitchen platform installation, and room extension civil works.',
  },
  {
    question: 'Do you provide detailed line-item BOQs for home civil works?',
    answer: 'Yes, our site civil engineers perform physical laser site measurements and provide upfront transparent line-item estimations with clear material specifications.',
  },
];

export default function ResidentialCivilWorkPage() {
  const serviceLd = generateServiceSchema(
    'Residential Civil Work Services',
    'Turnkey residential civil construction, block masonry, plastering, and floor tiling in Noida, Greater Noida, and Delhi NCR.',
    '/services/civil-work/residential-civil-work'
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
        serviceTitle="Residential Civil Work in Noida & Greater Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Civil Work', href: '/services/civil-work' },
          { name: 'Residential Civil Work', href: '/services/civil-work/residential-civil-work' },
        ]}
        introText="Roshan Enterprises provides turnkey residential civil construction and property modification services across Noida, Greater Noida, and Delhi NCR with experienced civil engineers and master masons."
        heroImage="/images/civil_construction.jpg"
        features={[
          {
            title: 'AAC Block & Red Brick Masonry',
            desc: 'Precision wall construction using polymer-modified mortar for structural strength and thermal insulation.',
          },
          {
            title: 'Internal Gypsum & Cement Plastering',
            desc: 'Smooth 12mm gypsum plaster and chicken-wire mesh joint plastering to eliminate wall cracks.',
          },
          {
            title: 'Vitrified Tile & Granite Laying',
            desc: 'Expert installation of vitrified floor tiles, Rajasthan granite slabs, and balcony ceramic tiles with spacer epoxy grouting.',
          },
          {
            title: 'Bathroom Waterproofing & Plumbing Civil',
            desc: 'Multi-layer elastomeric waterproofing membrane laying and concealed MEP conduit chasing.',
          },
        ]}
        suitableProperties={['Independent Houses', 'Residential Apartments', 'Luxury Villas', 'Society Flats', 'Housing Estates']}
        serviceLocations={['Noida (All Sectors)', 'Greater Noida West', 'Pari Chowk Greater Noida', 'Delhi NCR']}
        faqs={faqs}
        relatedServices={[
          { title: 'Commercial Civil Work', href: '/services/civil-work/commercial-civil-work' },
          { title: 'Civil Repair Work', href: '/services/civil-work/repair-work' },
          { title: 'Residential Painting', href: '/services/painting/residential-painting' },
        ]}
      />
    </>
  );
}
