import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { LocationPageClient } from '@/components/LocationPageClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Painting Services & Civil Contractor Delhi NCR | Roshan Enterprises',
  description:
    'Roshan Enterprises provides professional painting services, civil work contractor solutions, and commercial maintenance across Delhi NCR.',
  path: '/location/delhi-ncr',
  keywords: [
    'painting services Delhi NCR',
    'painting contractor Delhi NCR',
    'best painting company Delhi NCR',
    'civil contractor Delhi NCR',
    'civil work Delhi NCR',
  ],
});

const faqs = [
  {
    question: 'Do you take up regional commercial & hospital painting projects in Delhi NCR?',
    answer: 'Yes, we handle large-scale corporate office painting, hospital anti-bacterial coatings, and institutional civil maintenance across Delhi, Ghaziabad, Neemrana, and NCR regions.',
  },
];

export default function DelhiNCRLocationPage() {
  const serviceLd = generateServiceSchema(
    'Painting & Civil Work Services in Delhi NCR',
    'Regional contracting partner for painting, civil work construction, and facility maintenance in Delhi NCR.',
    '/location/delhi-ncr',
    ['Delhi NCR', 'Delhi', 'Ghaziabad', 'Noida', 'Greater Noida']
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
        locationName="Delhi NCR"
        title="Painting Services & Civil Contractor in Delhi NCR"
        breadcrumbs={[
          { name: 'Locations', href: '/location' },
          { name: 'Delhi NCR', href: '/location/delhi-ncr' },
        ]}
        intro="Roshan Enterprises is a premier regional contractor offering turnkey painting solutions, structural civil work, and industrial flooring execution for corporate, healthcare, and residential clients across Delhi NCR."
        heroImage="/images/hero_painting.jpg"
        sectorsServed={[
          'South Delhi & Civil Lines Delhi',
          'Ghaziabad & Indirapuram',
          'Noida & Greater Noida',
          'Neemrana Industrial Zone',
          'Pan-NCR Regional Sites',
        ]}
        localRequirements="Delhi NCR demands fast mobilization, strict safety compliance, dust-free interior painting, and structural civil solutions capable of operating in active urban environments without disrupting daily business operations."
        paintingHighlights={[
          'Hospital environment painting with anti-bacterial coatings and zero-VOC paints.',
          'Corporate office building painting and architectural designer wall textures.',
          'Industrial facility painting for cleanrooms, warehouses, and factories.',
          'Exterior high-rise elastomeric weather-proof facade painting.',
        ]}
        civilHighlights={[
          'Commercial RCC structural framing and heavy equipment machine pads.',
          'Masonry block partitioning, gypsum plastering, and acoustic false ceilings.',
          'Structural civil repair, crack injection, and terrace waterproofing.',
          'Industrial VDF concrete dewatered flooring and self-leveling epoxy.',
        ]}
        faqs={faqs}
        serviceLinks={[
          { title: 'Painting Services Overview', href: '/services/painting' },
          { title: 'Civil Work Overview', href: '/services/civil-work' },
          { title: 'Commercial Painting', href: '/services/painting/commercial-painting' },
          { title: 'View All Locations', href: '/location' },
        ]}
      />
    </>
  );
}
