import { MetadataRoute } from 'next';
import { CLIENTS_LIST } from '@/lib/clientData';
import { SITE_DOMAIN } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_DOMAIN;

  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/painting',
    '/services/painting/residential-painting',
    '/services/painting/commercial-painting',
    '/services/painting/interior-painting',
    '/services/painting/exterior-painting',
    '/services/civil-work',
    '/services/civil-work/residential-civil-work',
    '/services/civil-work/commercial-civil-work',
    '/services/civil-work/repair-work',
    '/services/flooring',
    '/location',
    '/location/noida',
    '/location/greater-noida',
    '/location/delhi-ncr',
    '/painting-services/noida',
    '/painting-services/greater-noida',
    '/civil-work/noida',
    '/civil-work/greater-noida',
    '/projects',
    '/industries',
    '/resources',
    '/resources/house-painting-cost-noida',
    '/resources/choosing-painting-contractor-noida',
    '/resources/civil-repair-work-guide',
    '/privacy-policy',
    '/terms',
  ];

  const clientRoutes = CLIENTS_LIST.map((client) => `/clients/${client.slug}`);

  const allRoutes = [...routes, ...clientRoutes];

  return allRoutes.map((route) => {
    let priority = 0.7;
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (
      route === '/services' ||
      route === '/location' ||
      route === '/services/painting' ||
      route === '/services/civil-work'
    ) {
      priority = 0.9;
    } else if (
      route.startsWith('/painting-services') ||
      route.startsWith('/civil-work/') ||
      route.startsWith('/location/')
    ) {
      priority = 0.85;
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency,
      priority,
    };
  });
}
