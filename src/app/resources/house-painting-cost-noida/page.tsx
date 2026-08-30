import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { HousePaintingCostClient } from './HousePaintingCostClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'House Painting Cost in Noida & Greater Noida (2026 Per Sq Ft Rates)',
  description:
    'Detailed price breakdown for 2BHK, 3BHK, and villa house painting in Noida. Learn per sq ft costs for fresh paint, repainting, wall putty, and waterproof exterior coatings.',
  path: '/resources/house-painting-cost-noida',
  keywords: [
    'house painting cost in Noida',
    'painting rate per sq ft Greater Noida',
    '2BHK painting cost Noida',
    'Asian Paints labor cost Noida',
  ],
});

export default function HousePaintingCostPage() {
  return <HousePaintingCostClient />;
}
