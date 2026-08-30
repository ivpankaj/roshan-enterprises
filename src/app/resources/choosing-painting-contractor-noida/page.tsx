import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { ChoosingContractorClient } from './ChoosingContractorClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'How to Choose the Best Painting Contractor in Noida (7 Verification Points)',
  description:
    'Essential checklist for hiring painting contractors in Noida & Greater Noida. Learn how to verify paint quality, moisture testing, BOQ contracts, and execution timelines.',
  path: '/resources/choosing-painting-contractor-noida',
  keywords: [
    'best painting contractor Noida',
    'hire professional painter Greater Noida',
    'painting contract checklist Noida',
    'Asian Paints certified painter Noida',
  ],
});

export default function ChoosingContractorPage() {
  return <ChoosingContractorClient />;
}
