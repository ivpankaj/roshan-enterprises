import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { TermsClient } from './TermsClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Terms & Conditions | Roshan Enterprises',
  description:
    'Terms & Conditions governing contracting services provided by Roshan Enterprises in Noida, Greater Noida, and Delhi NCR.',
  path: '/terms',
});

export default function TermsPage() {
  return <TermsClient />;
}
