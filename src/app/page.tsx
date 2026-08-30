import type { Metadata } from 'next';
import { generateMetadataHelper, generateFAQSchema } from '@/lib/seo';
import { HomePageClient } from '@/components/HomePageClient';
import { FAQS } from '@/lib/data';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Roshan Enterprises | Painting & Civil Work Services in Noida & Greater Noida',
  description:
    'Roshan Enterprises provides professional painting and civil work services in Noida, Greater Noida and Delhi NCR. Get reliable residential, commercial and property improvement services.',
  path: '/',
  keywords: [
    'best painting service in Noida',
    'painting services in Noida',
    'best painter in Noida',
    'house painting services in Noida',
    'residential painting services in Noida',
    'commercial painting services in Noida',
    'civil work contractor in Noida',
    'best civil work in Noida',
    'painting services in Greater Noida',
    'civil work in Greater Noida',
    'best civil work contractor in Greater Noida',
    'painting services Delhi NCR',
    'civil contractor Delhi NCR',
  ],
});

export default function HomePage() {
  const faqLd = generateFAQSchema(FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HomePageClient />
    </>
  );
}
