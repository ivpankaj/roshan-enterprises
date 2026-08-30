import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { LocationPageClient } from '@/components/LocationPageClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Painting Services in Greater Noida | Best Painting Service | Roshan Enterprises',
  description:
    'Best painting service in Greater Noida by Roshan Enterprises. Expert house painting, residential painting, commercial painting contractor in Greater Noida.',
  path: '/painting-services/greater-noida',
  keywords: [
    'painting services in Greater Noida',
    'best painting service in Greater Noida',
    'painting contractor in Greater Noida',
    'house painting in Greater Noida',
    'residential painting services in Greater Noida',
    'commercial painting services in Greater Noida',
  ],
});

const faqs = [
  {
    question: 'Do you provide house painting services in Greater Noida West (Noida Extension)?',
    answer: 'Yes, we serve all high-rise residential societies across Greater Noida West, Knowledge Park, Pari Chowk, and Omega sectors with direct site inspection.',
  },
  {
    question: 'Can you paint commercial factories and educational campuses in Greater Noida?',
    answer: 'Yes, we specialize in large-scale institutional campus painting, industrial plant anti-corrosive painting, and commercial building exterior coatings.',
  },
];

export default function GreaterNoidaPaintingServicesPage() {
  const serviceLd = generateServiceSchema(
    'Painting Services in Greater Noida',
    'Professional house painting, residential painting, commercial painting contractor in Greater Noida.',
    '/painting-services/greater-noida',
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
        title="Best Painting Service & Contractor in Greater Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Painting Services Greater Noida', href: '/painting-services/greater-noida' },
        ]}
        intro="Roshan Enterprises is headquartered in Greater Noida, providing professional residential house painting, villa decoration, commercial building painting, and industrial coatings."
        heroImage="/images/hero_painting.jpg"
        sectorsServed={[
          'Greater Noida West (Noida Extension)',
          'Knowledge Park I, II, III, IV, V',
          'Ecotech Industrial Belts',
          'Pari Chowk & Omega Sectors',
          'Alpha, Beta, Gamma Sectors',
        ]}
        localRequirements="Properties in Greater Noida range from expansive independent villas and institutional university blocks to modern multi-story housing societies. Our painting application ensures maximum durability against weather elements, smooth wall putty preparation, and zero-defect handover."
        paintingHighlights={[
          'Residential house painting & interior velvet emulsion for Greater Noida flats.',
          'Institutional campus painting for academic blocks and student housing.',
          'Industrial factory painting with heavy-duty anti-corrosive coatings.',
          'Exterior elastomeric weather-proof painting with 5-10 year warranties.',
        ]}
        civilHighlights={[
          'Wall putty sanding & surface crack repair.',
          'Roof & wall waterproofing treatments.',
          'Tile laying & floor polishing.',
          'Masonry modifications & plaster restoration.',
        ]}
        faqs={faqs}
        serviceLinks={[
          { title: 'Residential Painting', href: '/services/painting/residential-painting' },
          { title: 'Commercial Painting', href: '/services/painting/commercial-painting' },
          { title: 'Civil Work Greater Noida', href: '/civil-work/greater-noida' },
          { title: 'VDF & Epoxy Flooring', href: '/services/flooring' },
        ]}
      />
    </>
  );
}
