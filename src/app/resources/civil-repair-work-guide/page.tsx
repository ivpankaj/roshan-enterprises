import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { CivilRepairGuideClient } from './CivilRepairGuideClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Essential Guide to Civil Repair Work | Plaster Restoration & Crack Sealing',
  description:
    'Learn how structural civil repairs, crack injection, rebar anti-rust treatments, and polymer plaster restoration protect aging residential and commercial buildings in Greater Noida & Noida.',
  path: '/resources/civil-repair-work-guide',
  keywords: [
    'civil repair work guide Noida',
    'plaster repair contractor Greater Noida',
    'crack injection concrete repair NCR',
    'building restoration civil engineer',
  ],
});

export default function CivilRepairGuidePage() {
  return <CivilRepairGuideClient />;
}
