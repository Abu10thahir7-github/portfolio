import type { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo-config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoConfig.titleDefault,
    short_name: seoConfig.siteName,
    description: seoConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: seoConfig.themeColor,
    icons: [
      { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
    ],
  };
}