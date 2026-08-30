import type { Metadata } from 'next';
import { generateMetadataHelper, generateServiceSchema } from '@/lib/seo';
import { CivilWorkClient } from './CivilWorkClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Civil Work Contractor in Noida & Greater Noida | Roshan Enterprises',
  description:
    'Roshan Enterprises is a leading civil work contractor in Noida, Greater Noida, and Delhi NCR. Structural RCC, brickwork masonry, plastering, and repair works.',
  path: '/services/civil-work',
  keywords: [
    'civil work contractor in Noida',
    'best civil work in Noida',
    'civil contractor in Noida',
    'civil work in Greater Noida',
    'best civil work contractor in Greater Noida',
    'civil contractor in Greater Noida',
    'civil construction work in Greater Noida',
    'civil repair work in Greater Noida',
    'civil contractor Delhi NCR',
    'civil work Delhi NCR',
  ],
});

export default function CivilWorkPage() {
  const serviceLd = generateServiceSchema(
    'Civil Work Services',
    'Reliable civil construction, RCC structural framing, block masonry, and civil repair solutions in Noida, Greater Noida, and Delhi NCR.',
    '/services/civil-work'
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
