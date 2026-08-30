import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema } from '@/lib/seo';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Painting & Civil Work Services | Roshan Enterprises Noida & Greater Noida',
  description:
    'Explore professional painting services and civil work construction offered by Roshan Enterprises in Noida, Greater Noida, and Delhi NCR.',
  path: '/services',
  keywords: [
    'Painting Services Noida',
    'Civil Work Noida',
    'Painting Services Greater Noida',
    'Civil Contractor Greater Noida',
    'Residential Painting Services Noida',
    'Commercial Painting NCR',
  ],
});

export default function ServicesPage() {
  const serviceLd = generateServiceSchema(
    'Painting & Civil Work Services',
    'Complete residential, commercial painting and civil construction solutions in Noida, Greater Noida and Delhi NCR.',
    '/services'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <ServicesClient />
    </>
  );
}
