import type { MetadataRoute } from 'next';

import { projects } from '@/lib/data';
import { seoConfig } from '@/lib/seo-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Home page + in-page anchor sections. If any of these ever become real
  // routes (e.g. /portfolio/[slug] project pages), add them below the loop.
  const routes: MetadataRoute.Sitemap = [
    {
      url: seoConfig.siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // If you later add individual project detail pages (e.g. /portfolio/score90x),
  // this generates their sitemap entries automatically from your data file.
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${seoConfig.siteUrl}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: project.featured ? 0.8 : 0.6,
  }));

  return [...routes, ...projectRoutes];
}