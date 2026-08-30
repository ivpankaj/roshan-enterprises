import type { Metadata } from 'next';
import { generateMetadataHelper } from '@/lib/seo';
import { ProjectsClient } from './ProjectsClient';

export const metadata: Metadata = generateMetadataHelper({
  title: 'Completed Painting & Civil Projects | Roshan Enterprises NCR',
  description:
    'Browse our portfolio of completed residential painting, commercial painting, industrial VDF flooring, and civil construction projects in Noida and Greater Noida.',
  path: '/projects',
  keywords: [
    'Roshan Enterprises Projects',
    'Painting Work Portfolio Noida',
    'Civil Work Projects Greater Noida',
    'Commercial Painting Cases NCR',
  ],
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}
