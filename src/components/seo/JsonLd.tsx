import { seoConfig } from '@/lib/seo-config';
import { projects } from '@/lib/data';

/**
 * Structured data (schema.org) rendered as JSON-LD.
 * This is what lets Google show a knowledge panel, sitelinks search box,
 * and rich results for your name / profile / project list.
 *
 * Three graphs bundled together with @graph so Google resolves the
 * relationships (Person works at / authored WebSite / owns Projects)
 * from a single script tag.
 */
export function JsonLd() {
  const personId = `${seoConfig.siteUrl}/#person`;
  const websiteId = `${seoConfig.siteUrl}/#website`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ── Person ────────────────────────────────────────────────
      {
        '@type': 'Person',
        '@id': personId,
        name: seoConfig.author.name,
        url: seoConfig.siteUrl,
        email: `mailto:${seoConfig.author.email}`,
        jobTitle: 'Full Stack Developer',
        description: seoConfig.description,
        image: `${seoConfig.siteUrl}/opengraph-image`,
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
        sameAs: Object.values(seoConfig.social).filter(Boolean),
        knowsAbout: [
          'React',
          'Next.js',
          'TypeScript',
          'Node.js',
          'NestJS',
          'MongoDB',
          'PostgreSQL',
          'Tailwind CSS',
        ],
      },
      // ── WebSite (enables sitelinks search box eligibility) ──────
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: seoConfig.siteUrl,
        name: seoConfig.siteName,
        description: seoConfig.description,
        publisher: { '@id': personId },
        inLanguage: 'en-US',
      },
      // ── ProfilePage wrapping the Person ──────────────────────
      {
        '@type': 'ProfilePage',
        '@id': `${seoConfig.siteUrl}/#profilepage`,
        url: seoConfig.siteUrl,
        name: seoConfig.titleDefault,
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        primaryImageOfPage: `${seoConfig.siteUrl}/opengraph-image`,
      },
      // ── Portfolio as an ItemList of CreativeWork ─────────────
      {
        '@type': 'ItemList',
        '@id': `${seoConfig.siteUrl}/#portfolio`,
        name: `${seoConfig.author.name} — Portfolio Projects`,
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.name,
            description: project.description,
            url: project.link || seoConfig.siteUrl,
            image: `${seoConfig.siteUrl}${project.image}`,
            dateCreated: project.year,
            creator: { '@id': personId },
            keywords: project.technologies?.join(', '),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}