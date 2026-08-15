import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { seoConfig } from '@/lib/seo-config';

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-renders one static page per project at build time — better for SEO
// than an on-demand dynamic route, since Google gets a fully static page.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  const url = `${seoConfig.siteUrl}/portfolio/${project.slug}`;

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${project.name} — ${seoConfig.siteName}`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      {/* build out the rest of your project detail layout here */}
    </main>
  );
}