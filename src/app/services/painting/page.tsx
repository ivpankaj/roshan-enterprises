import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema } from '@/lib/seo';
import { PaintingClient } from './PaintingClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Painting Services in Noida & Greater Noida | Roshan Enterprises',
  description:
    'Roshan Enterprises provides professional interior, exterior, residential, and commercial painting services in Noida, Greater Noida, and Delhi NCR.',
  path: '/services/painting',
  keywords: [
    'Painting Services in Noida',
    'Painting Services in Greater Noida',
    'Best Painter in Noida',
    'House Painting Services in Noida',
    'Commercial Painting Greater Noida',
    'Exterior Painting Services Noida',
    'Interior Painting Services Noida',
  ],
});

export default function PaintingPage() {
  const serviceLd = generateServiceSchema(
    'Painting Services',
    'Professional interior, exterior, residential and commercial painting solutions across Noida, Greater Noida and Delhi NCR.',
    '/services/painting'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <PaintingClient />
    </>
  );
}
