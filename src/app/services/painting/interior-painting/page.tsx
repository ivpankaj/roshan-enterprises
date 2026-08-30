import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { ServiceDetailClient } from '@/components/ServiceDetailClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Interior Painting Services in Noida & Greater Noida | Roshan Enterprises',
  description:
    'Expert interior wall painting services in Noida, Greater Noida, and Delhi NCR. Velvet emulsion, acrylic finishes, designer wall textures, and smooth wall putty polish.',
  path: '/services/painting/interior-painting',
  keywords: [
    'interior painting services in Noida',
    'interior wall painter Greater Noida',
    'interior wall texture painting Noida',
    'wall putty polish Noida',
    'house interior painting NCR',
  ],
});

const faqs = [
  {
    question: 'What is the process for preparing internal walls before painting?',
    answer: 'We inspect walls for moisture, scrape loose paint, fill cracks with polymer filler, apply 2 coats of acrylic wall putty, sand mechanically for mirror smoothness, and apply primer before topcoats.',
  },
  {
    question: 'Are interior paints washable?',
    answer: 'Yes, we use Class 1 scrub-resistant washable acrylic emulsions that allow easy stain removal without dulling wall sheen.',
  },
];

export default function InteriorPaintingPage() {
  const serviceLd = generateServiceSchema(
    'Interior Painting Services',
    'Flawless interior wall painting, wall putty polishing, and texture wall designs in Noida, Greater Noida, and Delhi NCR.',
    '/services/painting/interior-painting'
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
        serviceTitle="Interior Painting Services in Noida & Greater Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Painting', href: '/services/painting' },
          { name: 'Interior Painting', href: '/services/painting/interior-painting' },
        ]}
        introText="Transform interior rooms, lobbies, and workspaces with premium interior wall painting by Roshan Enterprises. Serving homes and commercial properties in Noida, Greater Noida, and Delhi NCR."
        heroImage="/images/painting_interior.jpg"
        features={[
          {
            title: 'Velvet & Satin Emulsion Coating',
            desc: 'Luxury smooth finish wall paints offering high washability, stain resistance, and rich color depth.',
          },
          {
            title: 'Designer Accent Wall Textures',
            desc: 'Custom metallic textures, stencil wall art, and acoustic wall finishes crafted by master technicians.',
          },
          {
            title: 'Polymer Putty & Power Sanding',
            desc: 'Multi-stage surface leveling using dust-extracted mechanical sanders for pinhole-free smooth walls.',
          },
          {
            title: 'Wood & Metal Enamel Polish',
            desc: 'High-gloss and satin polyurethane polish for internal doors, wooden cabinets, and metal grilles.',
          },
        ]}
        suitableProperties={['Residences & Apartments', 'Corporate Lobbies', 'Conference Rooms', 'Educational Classrooms', 'Hospitality Suites']}
        serviceLocations={['Noida (All Sectors)', 'Greater Noida (Pari Chowk, Omega)', 'Delhi NCR']}
        faqs={faqs}
        relatedServices={[
          { title: 'Residential Painting', href: '/services/painting/residential-painting' },
          { title: 'Exterior Painting', href: '/services/painting/exterior-painting' },
          { title: 'Commercial Painting', href: '/services/painting/commercial-painting' },
        ]}
      />
    </>
  );
}
