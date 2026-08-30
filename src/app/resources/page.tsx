import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { ResourcesClient } from './ResourcesClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Painting & Civil Guides & Resources | Roshan Enterprises Noida',
  description:
    'Read expert articles, cost guides, and contractor selection tips for house painting and civil work in Noida, Greater Noida, and Delhi NCR.',
  path: '/resources',
  keywords: [
    'house painting cost Noida',
    'painting contractor tips Noida',
    'civil repair work guide Greater Noida',
    'interior vs exterior painting tips',
  ],
});

export default function ResourcesHubPage() {
  return <ResourcesClient />;
}
