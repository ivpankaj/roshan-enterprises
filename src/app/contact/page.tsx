import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Contact Us | Roshan Enterprises — Painting & Civil Work Noida & Greater Noida',
  description:
    'Contact Roshan Enterprises for free site assessments and quick quotations for painting and civil work services in Noida, Greater Noida, and Delhi NCR.',
  path: '/contact',
  keywords: [
    'Contact Roshan Enterprises',
    'Painting Consultation Noida',
    'Civil Work Quotation Greater Noida',
    'Hire Painter in Noida',
    'Civil Contractor Phone Number Noida',
  ],
});

export default function ContactPage() {
  return <ContactClient />;
}
