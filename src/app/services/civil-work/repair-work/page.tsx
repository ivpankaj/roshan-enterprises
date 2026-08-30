import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { ServiceDetailClient } from '@/components/ServiceDetailClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Civil Repair Work Contractor in Greater Noida & Noida | Roshan Enterprises',
  description:
    'Professional civil repair work, structural rehabilitation, wall plaster repair, and waterproofing contractor in Noida, Greater Noida, and Delhi NCR.',
  path: '/services/civil-work/repair-work',
  keywords: [
    'civil repair work in Greater Noida',
    'civil repair work in Noida',
    'structural repair contractor Noida',
    'plaster repair contractor Greater Noida',
    'building civil maintenance NCR',
  ],
});

const faqs = [
  {
    question: 'What civil repair services do you offer for aging structures?',
    answer: 'We provide polymer-modified mortar plaster repairs, structural crack injection, rebar anti-rust treatments, roof waterproofing, and floor screed repairs.',
  },
  {
    question: 'How do you fix dampness and wall plaster peeling?',
    answer: 'We remove affected loose plaster down to the brick surface, apply anti-damp chemical slurry, re-plaster with polymer cement mortar, and seal with waterproof primer.',
  },
];

export default function CivilRepairWorkPage() {
  const serviceLd = generateServiceSchema(
    'Civil Repair Work Services',
    'Structural rehabilitation, plaster restoration, crack repair, and waterproofing services in Greater Noida, Noida, and Delhi NCR.',
    '/services/civil-work/repair-work'
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
        serviceTitle="Civil Repair Work in Noida & Greater Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Civil Work', href: '/services/civil-work' },
          { name: 'Civil Repair Work', href: '/services/civil-work/repair-work' },
        ]}
        introText="Restore structural strength and repair damaged walls, roofs, and floors with specialized civil repair work services by Roshan Enterprises in Noida, Greater Noida, and Delhi NCR."
        heroImage="/images/civil_construction.jpg"
        features={[
          {
            title: 'Structural Crack Injection & Repair',
            desc: 'Epoxy resin and polymer mortar pressure injection to fill structural load-bearing wall cracks.',
          },
          {
            title: 'Plaster Restoration & Re-Plastering',
            desc: 'Removal of damp, damaged plaster and re-application of fiber-reinforced cement mortar.',
          },
          {
            title: 'Roof & Terrace Waterproofing',
            desc: 'Multi-coat acrylic and PU membrane waterproofing to eliminate ceiling leaks and water ingress.',
          },
          {
            title: 'Trenching, Drains & Boundary Repairs',
            desc: 'Civil excavation, trench creation, drain slab repairs, and boundary wall restoration.',
          },
        ]}
        suitableProperties={['Residential Housing Societies', 'Commercial Office Buildings', 'Industrial Factories', 'Institutional Infrastructure', 'Independent Villas']}
        serviceLocations={['Greater Noida (Knowledge Park & Ecotech)', 'Noida (All Sectors)', 'Delhi NCR']}
        faqs={faqs}
        relatedServices={[
          { title: 'Residential Civil Work', href: '/services/civil-work/residential-civil-work' },
          { title: 'Commercial Civil Work', href: '/services/civil-work/commercial-civil-work' },
          { title: 'Exterior Painting & Waterproofing', href: '/services/painting/exterior-painting' },
        ]}
      />
    </>
  );
}
