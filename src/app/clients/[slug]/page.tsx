import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CLIENTS_LIST } from '@/lib/clientData';
import { generateMetadataHelper } from '@/lib/seo';
import { ClientDetailView } from './ClientDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const client = CLIENTS_LIST.find((c) => c.slug === resolvedParams.slug);

  if (!client) {
    return generateMetadataHelper({
      title: 'Client Case Study | Roshan Enterprises',
      description: 'Corporate client case study and contracting project details.',
      path: `/clients/${resolvedParams.slug}`,
    });
  }

  return generateMetadataHelper({
    title: `${client.name} Project Case Study | Roshan Enterprises`,
    description: `Read how Roshan Enterprises delivered ${client.roshanContractScope.title} for ${client.name} in ${client.location}.`,
    path: `/clients/${client.slug}`,
    keywords: [
      `${client.name} Roshan Enterprises`,
      `${client.name} painting contractor`,
      `${client.name} civil work`,
      'Corporate Client Case Study NCR',
    ],
  });
}

export default async function ClientDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const client = CLIENTS_LIST.find((c) => c.slug === resolvedParams.slug);

  if (!client) {
    notFound();
  }

  return <ClientDetailView client={client} />;
}
