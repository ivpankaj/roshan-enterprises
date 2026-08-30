import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { LocationHubClient } from './LocationHubClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Service Locations | Noida, Greater Noida & Delhi NCR | Roshan Enterprises',
  description:
    'Roshan Enterprises provides professional painting services and civil work contracting across Noida, Greater Noida, and Delhi NCR.',
  path: '/location',
  keywords: [
    'painting services Noida locations',
    'civil work Greater Noida area',
    'painting contractor Delhi NCR',
    'house painter near me Noida',
  ],
});

export default function LocationPage() {
  return <LocationHubClient />;
}
