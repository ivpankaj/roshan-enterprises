import { MetadataRoute } from 'next';
import { SITE_DOMAIN } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/api/*'],
      },
    ],
    sitemap: `${SITE_DOMAIN}/sitemap.xml`,
  };
}
