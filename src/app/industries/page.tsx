import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { IndustriesClient } from './IndustriesClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Sectors & Property Types Served | Roshan Enterprises NCR',
  description:
    'Roshan Enterprises provides professional painting, civil work, and flooring solutions across residential homes, commercial towers, industrial hubs, and healthcare units.',
  path: '/industries',
  keywords: [
    'Residential Painting Noida',
    'Commercial Painting Contractor Greater Noida',
    'Industrial Painting NCR',
    'Hospital Painting Services',
  ],
});

export default function IndustriesPage() {
  return <IndustriesClient />;
}
