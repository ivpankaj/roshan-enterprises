import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema } from '@/lib/seo';
import { CivilWorkClient } from '../civil-work/CivilWorkClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Civil Works Contractor in Greater Noida & Noida | Roshan Enterprises',
  description:
    'Complete RCC construction, masonry, plastering, false ceilings, and structural civil work services in Noida, Greater Noida, and Delhi NCR.',
  path: '/services/civil-works',
  keywords: [
    'Civil Works Greater Noida',
    'Civil Contractor Noida',
    'RCC Construction Noida',
    'Brickwork Masonry Greater Noida',
  ],
});

export default function CivilWorksAliasPage() {
  const serviceLd = generateServiceSchema(
    'Civil Works',
    'Professional civil construction, masonry, structural masonry, and interior finishing solutions in Greater Noida and Noida.',
    '/services/civil-works'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <CivilWorkClient />
    </>
  );
}
