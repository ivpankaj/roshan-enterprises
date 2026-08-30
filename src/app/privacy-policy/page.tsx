import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { PrivacyPolicyClient } from './PrivacyPolicyClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Privacy Policy | Roshan Enterprises',
  description:
    'Privacy Policy of Roshan Enterprises outlining our data collection, security protocols, and client confidentiality standards.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
