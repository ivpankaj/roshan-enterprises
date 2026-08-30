import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { ServiceDetailClient } from '@/components/ServiceDetailClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Exterior Painting Services in Noida & Greater Noida | Roshan Enterprises',
  description:
    'Durable exterior wall painting and weather-proof waterproofing coatings in Noida, Greater Noida, and Delhi NCR. 5-10 year warranty paints.',
  path: '/services/painting/exterior-painting',
  keywords: [
    'exterior painting services in Noida',
    'exterior painter Greater Noida',
    'weatherproof exterior paint Noida',
    'exterior wall waterproofing NCR',
    'building facade painting Greater Noida',
  ],
});

const faqs = [
  {
    question: 'How do weather-proof exterior paints protect building walls?',
    answer: 'Elastomeric exterior paints expand and contract with temperature changes, bridging hairline cracks and blocking rainwater penetration, algae, and UV breakdown.',
  },
  {
    question: 'Do you provide crack filling and pressure washing before exterior painting?',
    answer: 'Yes, high-pressure jet washing is performed to remove dirt, mold, and chalking, followed by elastomeric crack sealing prior to primer and topcoat application.',
  },
];

export default function ExteriorPaintingPage() {
  const serviceLd = generateServiceSchema(
    'Exterior Painting Services',
    'Weather-resistant exterior wall painting, elastomeric coatings, and damp-proofing solutions in Noida, Greater Noida, and Delhi NCR.',
    '/services/painting/exterior-painting'
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
        serviceTitle="Exterior Painting Services in Noida & Greater Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Painting', href: '/services/painting' },
          { name: 'Exterior Painting', href: '/services/painting/exterior-painting' },
        ]}
        introText="Protect building facades and independent structures against extreme UV heat, monsoon rains, and pollution with heavy-duty exterior painting solutions by Roshan Enterprises in Noida & Greater Noida."
        heroImage="/images/hero_painting.jpg"
        features={[
          {
            title: 'Elastomeric Crack-Bridging Paints',
            desc: 'Flexible exterior coatings designed to bridge wall cracks up to 2mm and prevent water seepage.',
          },
          {
            title: 'Anti-Fungal & Anti-Algae Protection',
            desc: 'Specialized biocidal formulations that keep exterior walls free of black fungus and algae stains.',
          },
          {
            title: 'Pressure Jet Cleaning & Sealing',
            desc: 'Industrial pressure washing of exterior facades to eliminate dust buildup prior to priming.',
          },
          {
            title: '5 to 10 Year Warranty Packages',
            desc: 'Backed by leading paint manufacturer warranties (Asian Paints Apex Ultima / Berger Weathercoat).',
          },
        ]}
        suitableProperties={['High-Rise Housing Societies', 'Commercial Office Towers', 'Independent Villas', 'Institutional Campuses', 'Industrial Plants']}
        serviceLocations={['Noida (All Sectors)', 'Greater Noida (Ecotech & Knowledge Park)', 'Delhi NCR']}
        faqs={faqs}
        relatedServices={[
          { title: 'Interior Painting', href: '/services/painting/interior-painting' },
          { title: 'Residential Painting', href: '/services/painting/residential-painting' },
          { title: 'Commercial Painting', href: '/services/painting/commercial-painting' },
          { title: 'Civil Repair Work', href: '/services/civil-work/repair-work' },
        ]}
      />
    </>
  );
}
