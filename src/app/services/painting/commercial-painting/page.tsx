import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import { ServiceDetailClient } from '@/components/ServiceDetailClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Commercial Painting Services in Noida & Greater Noida | Roshan Enterprises',
  description:
    'Professional commercial painting contractor for offices, IT parks, corporate towers, and industrial facilities in Noida, Greater Noida, and Delhi NCR.',
  path: '/services/painting/commercial-painting',
  keywords: [
    'commercial painting services in Noida',
    'commercial painting services Greater Noida',
    'office painting contractor Noida',
    'corporate building painter NCR',
    'industrial painting Noida',
  ],
});

const faqs = [
  {
    question: 'Can commercial painting be done during night shifts or weekends?',
    answer: 'Yes, we specialize in after-hours and weekend painting execution using zero-VOC low-odor paints so your daily business operations remain uninterrupted.',
  },
  {
    question: 'Do you provide painting for high-rise commercial office buildings?',
    answer: 'Yes, our certified painters are equipped with heavy-duty scaffolding, cradle systems, and safety harnesses for multi-story exterior commercial facades.',
  },
];

export default function CommercialPaintingPage() {
  const serviceLd = generateServiceSchema(
    'Commercial Painting Services',
    'Turnkey commercial office and corporate building painting services in Noida, Greater Noida, and Delhi NCR.',
    '/services/painting/commercial-painting'
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
        serviceTitle="Commercial Painting Services in Noida & Greater Noida"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Painting', href: '/services/painting' },
          { name: 'Commercial Painting', href: '/services/painting/commercial-painting' },
        ]}
        introText="Roshan Enterprises is a leading commercial painting contractor serving corporate office parks, commercial towers, retail spaces, and industrial complexes in Noida, Greater Noida, and Delhi NCR."
        heroImage="/images/painting_interior.jpg"
        features={[
          {
            title: 'Zero-VOC Low Odor Paints',
            desc: 'Eco-friendly, odorless paint emulsions suitable for fully occupied corporate offices and IT hubs.',
          },
          {
            title: 'High-Rise Facade Painting',
            desc: 'Weatherproof elastomeric exterior coatings applied using certified scaffolding and cradle systems.',
          },
          {
            title: 'Anti-Rust Metal Enamel Coating',
            desc: 'Heavy-duty enamel protection for structural steelwork, fire escape staircases, and metal railings.',
          },
          {
            title: 'Night Shift & Staged Execution',
            desc: 'Flexible work schedules ensuring zero disruption to daily workplace productivity and operations.',
          },
        ]}
        suitableProperties={['Corporate Offices', 'IT Parks & Tech Hubs', 'Retail Malls', 'Commercial Showrooms', 'Industrial Warehouses']}
        serviceLocations={['Noida Expressway', 'Knowledge Park Greater Noida', 'Ecotech Industrial Area', 'Delhi NCR']}
        faqs={faqs}
        relatedServices={[
          { title: 'Residential Painting', href: '/services/painting/residential-painting' },
          { title: 'Exterior Painting', href: '/services/painting/exterior-painting' },
          { title: 'Commercial Civil Work', href: '/services/civil-work/commercial-civil-work' },
          { title: 'VDF & Epoxy Flooring', href: '/services/flooring' },
        ]}
      />
    </>
  );
}
