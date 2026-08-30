import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { LocationPageClient } from '@/components/LocationPageClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Painting Services & Civil Work in Greater Noida | Roshan Enterprises',
  description:
    'Roshan Enterprises is headquartered in Greater Noida, providing professional painting services, civil work contractor solutions, and VDF/epoxy flooring.',
  path: '/location/greater-noida',
  keywords: [
    'painting services in Greater Noida',
    'best painting service in Greater Noida',
    'painting contractor in Greater Noida',
    'house painting in Greater Noida',
    'residential painting services in Greater Noida',
    'commercial painting services in Greater Noida',
    'civil work in Greater Noida',
    'best civil work contractor in Greater Noida',
    'civil contractor in Greater Noida',
    'civil construction work in Greater Noida',
    'civil repair work in Greater Noida',
  ],
});

const faqs = [
  {
    question: 'Where is Roshan Enterprises office located in Greater Noida?',
    answer: 'Our main corporate office and equipment logistics yard are located in Greater Noida, Uttar Pradesh, allowing instant 24-hour site visits across all Knowledge Parks and Ecotech zones.',
  },
  {
    question: 'Do you execute industrial VDF flooring and civil construction in Greater Noida?',
    answer: 'Yes, we are a leading contractor for heavy RCC civil construction, VDF concrete dewatered flooring, block masonry, and industrial factory painting in Ecotech 1-6 and Knowledge Park.',
  },
];

export default function GreaterNoidaLocationPage() {
  const serviceLd = generateServiceSchema(
    'Painting Services & Civil Work in Greater Noida',
    'Premier local contractor for painting, civil construction, masonry, and industrial flooring in Greater Noida.',
    '/location/greater-noida',
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
        title="Painting Services & Civil Work Contractor in Greater Noida"
        breadcrumbs={[
          { name: 'Locations', href: '/location' },
          { name: 'Greater Noida', href: '/location/greater-noida' },
        ]}
        intro="As our primary home base, Roshan Enterprises delivers end-to-end residential house painting, commercial facility painting, structural civil construction, and heavy-duty industrial flooring across Greater Noida."
        heroImage="/images/civil_construction.jpg"
        sectorsServed={[
          'Knowledge Park I, II, III, IV, V',
          'Ecotech 1, 2, 3, 6, 12',
          'Greater Noida West (Noida Extension)',
          'Pari Chowk & Alpha, Beta, Gamma',
          'Omega, Chi, Phi Sectors',
          'Udyog Vihar Greater Noida',
        ]}
        localRequirements="Greater Noida encompasses major industrial manufacturing belts (Ecotech), academic campuses (Knowledge Park), and rapidly expanding high-rise residential sectors (Greater Noida West). Clients require high-load capacity civil construction, durable factory painting, cleanroom epoxy floors, and reliable home painting contracts."
        paintingHighlights={[
          'Residential painting for high-rise flats in Greater Noida West and villas in Omega/Alpha.',
          'Institutional campus painting for academic blocks and student hostels.',
          'Industrial factory painting with anti-corrosive coatings for manufacturing plants.',
          'Exterior elastomeric weather-proof coatings for large commercial complexes.',
        ]}
        civilHighlights={[
          'Heavy RCC structural framing, machine pads, and column/beam shuttering.',
          'AAC block masonry, red clay brickwork, and smooth gypsum wall plastering.',
          'Civil repair work, structural crack injection, and roof waterproofing.',
          'VDF dewatered concrete flooring, groove cutting, and epoxy coating.',
        ]}
        faqs={faqs}
        serviceLinks={[
          { title: 'Painting in Greater Noida', href: '/painting-services/greater-noida' },
          { title: 'Civil Work in Greater Noida', href: '/civil-work/greater-noida' },
          { title: 'Residential Civil Work', href: '/services/civil-work/residential-civil-work' },
          { title: 'VDF & Epoxy Flooring', href: '/services/flooring' },
        ]}
      />
    </>
  );
}
