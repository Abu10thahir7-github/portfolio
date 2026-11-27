import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ImageCarousel from '@/components/ImageCarousel';
import { ArrowLeft, ArrowRight, PenTool, Layers, ExternalLink } from 'lucide-react';
import { hasCaseStudy, projects, type CaseBlock, type CaseSectionKey } from '@/lib/data';
import Sidebar from '@/components/Sidebar';
import { FigmaIcon, BehanceIcon } from '@/components/BrandIcons';
import { GithubIcon } from '@/components/SocialIcons';
type Props = { params: Promise<{ slug: string }> };

const SECTIONS: { key: CaseSectionKey; num: string; label: string; title: string }[] = [
  { key: 'overview', num: '01', label: 'Introduction', title: 'Project Overview' },
  { key: 'research', num: '02', label: 'UX Research', title: 'Problem & Research' },
  { key: 'ux', num: '03', label: 'UX Design', title: 'User Flow & Wireframes' },
  { key: 'ui', num: '04', label: 'UI Design', title: 'Visual Design & Design System' },
  { key: 'prototype', num: '05', label: 'Prototyping', title: 'Interactive Prototype & Testing' },
  { key: 'development', num: '06', label: 'Development', title: 'Architecture & Implementation' },
  { key: 'deployment', num: '07', label: 'Delivery', title: 'Testing & Deployment' },
  { key: 'conclusion', num: '08', label: 'Conclusion', title: 'Final Outcome & Learnings' },
];

const PHASES: {
  id: string;
  label: string;
  title: string;
  keys: CaseSectionKey[];
  steps: { name: string; key: CaseSectionKey }[];
}[] = [
  {
    id: 'design',
    label: 'Phase 1',
    title: 'Design Process',
    keys: ['research', 'ux', 'ui', 'prototype'],
    steps: [
      { name: 'Research', key: 'research' },
      { name: 'UX', key: 'ux' },
      { name: 'Wireframes', key: 'ux' },
      { name: 'UI', key: 'ui' },
      { name: 'Prototype', key: 'prototype' },
    ],
  },
  {
    id: 'development',
    label: 'Phase 2',
    title: 'Development Process',
    keys: ['development', 'deployment'],
    steps: [
      { name: 'Architecture', key: 'development' },
      { name: 'Implementation', key: 'development' },
      { name: 'Testing', key: 'deployment' },
      { name: 'Deployment', key: 'deployment' },
    ],
  },
];

export function generateStaticParams() {
  return projects.filter(hasCaseStudy).map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug && hasCaseStudy(p));
  if (!project) return {};
  return {
    title: `${project.name} — UI/UX Case Study`,
    description: project.description,
  };
}

function Block({ block, name }: { block: CaseBlock; name: string }) {
  const wide = !!block.images?.length;
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-5 ${wide ? 'sm:col-span-2' : ''}`}
    >
      <h3 className="font-semibold">{block.title}</h3>

      {block.text && <p className="mt-2 text-sm leading-relaxed text-muted">{block.text}</p>}

      {block.list?.length ? (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
          {block.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {block.colors?.length ? (
        <div className="mt-4 flex flex-wrap gap-4">
          {block.colors.map(c => (
            <div key={c.hex} className="flex items-center gap-2 text-xs">
              <span
                className="h-9 w-9 rounded-lg border border-border"
                style={{ backgroundColor: c.hex }}
                aria-hidden
              />
              <span>
                {c.name}
                <span className="block font-mono-tech text-muted">{c.hex}</span>
              </span>
            </div>
          ))}
        </div>
      ) : null}

      {block.images?.length ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {block.images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${name} — ${block.title} ${i + 1}`}
              width={1200}
              height={800}
              className="w-full rounded-xl border border-border object-cover"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug && hasCaseStudy(p));
  if (!project) notFound();

  const cs = project.caseStudy;
  const has = (key: CaseSectionKey) => !!cs?.sections?.[key]?.length;
  const visible = SECTIONS.filter(s => has(s.key));

  const renderSection = (key: CaseSectionKey) => {
    const s = SECTIONS.find(x => x.key === key)!;
    if (!has(key)) return null;
    return (
      <section key={key} id={key} className="mt-12 scroll-mt-24">
        <p className="font-mono-tech text-sm text-accent">
          {s.num} · {s.label}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{s.title}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {cs!.sections[key]!.map(block => (
            <Block key={block.title} block={block} name={project.name} />
          ))}
        </div>
      </section>
    );
  };

  const links = [
    {
      href: project.figma,
      icon: <FigmaIcon className="h-7 w-6" />,
      title: 'Figma Prototype',
      sub: 'Explore interaction',
    },
    {
      href: project.behance,
      icon: <BehanceIcon className="h-7 w-7 text-foreground" />,
      title: 'Behance',
      sub: 'Full presentation',
    },  {
      href: project.repo,
      icon: <GithubIcon size={26} aria-hidden />, // import { Github } from "lucide-react"
      title: 'Source Code',
      sub: 'View on GitHub',
    },
    {
      href: project.link,
      icon: <ExternalLink size={26} className="text-accent" aria-hidden />,
      title: 'Live Website',
      sub: 'Try it yourself',
    },

  ].filter(l => l.href);
  const meta = [
    { label: 'Role', value: cs?.role },
    { label: 'Year', value: project.year },
    { label: 'Duration', value: cs?.duration },
    { label: 'Tools', value: cs?.tools?.join(', ') },
  ].filter(m => m.value);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="min-w-0 flex-1">
        <main className="px-6 py-15   ">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground sticky top-4 rounded-xl border border-border  bg-surface px-4 py-2 transition-colors z-10"
          >
            <ArrowLeft className="text-accent" size={16} aria-hidden /> Back to portfolio
          </Link>

          <h1 className="mt-6 font-display text-4xl font-bold sm:text-3xl">{project.name}</h1>
          <p className="mt-3 max-w-2xl text-muted">{project.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-4">
            {meta.map(m => (
              <div key={m.label}>
                <dt className="font-mono-tech text-xs text-muted">{m.label}</dt>
                <dd className="mt-1 text-sm font-medium">{m.value}</dd>
              </div>
            ))}
          </dl>

          <ImageCarousel
            images={project.gallery?.length ? project.gallery : [project.image]}
            alt={project.name}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {links.map(({ href, icon, title, sub }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-6 text-center transition-colors hover:border-accent"
              >
                {icon}
                <span className="font-semibold">{title}</span>
                <span className="text-sm text-muted">{sub}</span>
              </a>
            ))}
          </div>

          {/* Jump links */}
          {visible.length > 0 && (
            <nav
              aria-label="Case study sections"
              className="mt-10 flex gap-2 overflow-auto rounded-full border border-border bg-surface p-1.5"
            >
              {visible.map(s => (
                <a
                  key={s.key}
                  href={`#${s.key}`}
                  className="text-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground "
                >
                  <span className="text-accent-dim ">{s.num}</span> · {s.label}
                </a>
              ))}
            </nav>
          )}

          {/* 01 Overview */}
          {renderSection('overview')}

          {/* Phases */}
          {PHASES.map(phase => {
            const sections = phase.keys.filter(has);
            if (!sections.length) return null;

            return (
              <div key={phase.id} id={phase.id} className="mt-16 scroll-mt-24">
                <header className="rounded-2xl border border-border bg-surface p-6">
                  <p className="font-mono-tech text-sm text-accent">{phase.label}</p>
                  <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">
                    {phase.title}
                  </h2>

                  <ol
                    className="mt-5 flex flex-wrap items-center gap-2"
                    aria-label={`${phase.title} steps`}
                  >
                    {phase.steps.map((step, i) => (
                      <li key={step.name} className="flex items-center gap-2">
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${
                            has(step.key)
                              ? 'border-accent-dim bg-accent-soft text-accent'
                              : 'border-border text-muted opacity-40'
                          }`}
                        >
                          {step.name}
                        </span>
                        {i < phase.steps.length - 1 && (
                          <ArrowRight size={14} className="text-muted" aria-hidden />
                        )}
                      </li>
                    ))}
                  </ol>
                </header>

                {sections.map(renderSection)}
              </div>
            );
          })}

          {/* 08 Conclusion */}
          {renderSection('conclusion')}
        </main>
      </main>
    </div>
  );
}
