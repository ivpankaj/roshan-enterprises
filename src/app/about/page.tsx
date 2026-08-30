import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'About Us | Roshan Enterprises — Painting & Civil Contractor in Noida',
  description:
    'Learn about Roshan Enterprises, a premier painting and civil work contractor serving Noida, Greater Noida, and Delhi NCR with quality workmanship and expert engineers.',
  path: '/about',
  keywords: [
    'About Roshan Enterprises',
    'Painting Contractor Noida',
    'Civil Contractor Greater Noida',
    'Professional Painters Noida',
    'Civil Work Experts NCR',
  ],
});

export default function AboutPage() {
  return <AboutClient />;
}
