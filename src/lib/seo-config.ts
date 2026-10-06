import { site, projects } from './data'; // <- your existing file (the one you pasted)

/**
 * Central place for every SEO-relevant constant.
 * Everything downstream (metadata, JSON-LD, sitemap, OG images) reads from here
 * so you only ever update copy in ONE place.
 */

// Normalize the base URL (no trailing slash, always https)
export const SITE_URL = site.url.replace(/\/$/, '');

export const seoConfig = {
  siteUrl: SITE_URL,
  siteName: site.name,
  titleDefault: `${site.name} — ${site.role}`,
  titleTemplate: `%s | ${site.name}`,
  description: site.tagline,
  keywords: [
    site.name,
    site.role,
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer Kerala',
    'Freelance Web Developer India',
    'MERN Stack Developer',
    'TypeScript Developer',
    ...projects.flatMap(p => p.technologies ?? []),
  ],
  author: {
    name: site.name,
    email: site.email,
    url: SITE_URL,
    location: site.location,
  },
  social: site.social,
  locale: 'en_US',
  themeColor: '#0ea5e9', // match your brand accent; used in manifest + meta
  // Fill these in from Google Search Console / Bing Webmaster once verified
  verification: {
    google: '', // e.g. 'google-site-verification-code'
    bing: '',
  },
  // Twitter/X handle without the @ — leave blank if you don't have one wired up
  twitterHandle: '',
} as const;
