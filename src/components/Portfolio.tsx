'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { hasCaseStudy, Project, projects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const filters = ['All', 'UI/UX', 'Web', 'Applications'] as const;

export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');

  const visible = useMemo(() => {
    const filtered =
      active === 'All' ? projects : projects.filter(p => p.categories.includes(active));

    // Featured projects surface first within the current filter
    return [...filtered].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));
  }, [active]);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="border-b border-border px-6 py-15 sm:px-10 lg:px-16"
    >
      <header className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono-tech text-sm text-accent">03 · Selected Work</p>
          <h2 id="portfolio-heading" className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            My <span className="text-accent">Work</span>
          </h2>
        </div>

        <div
          className="flex gap-2 rounded-full border border-border bg-surface p-1.5 w-full md:w-fit overflow-auto"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {filters.map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`rounded-full text-nowrap px-4 py-2 text-sm font-medium transition-colors ${
                active === f ? 'bg-accent text-black' : 'text-muted hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(project => {
          const caseStudy = hasCaseStudy(project);
          const hasLive = !!project.link;

          return (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent-dim"
            >
              <Link
                href={caseStudy ? `/work/${project.slug}` : project.link || '#'}
                target={!caseStudy && hasLive ? '_blank' : '_self'}
                rel={!caseStudy && hasLive ? 'noopener noreferrer' : undefined}
                aria-label={`${caseStudy ? 'View case study for' : 'Visit'} ${project.name}`}
                className="relative flex h-[250px] items-center justify-center text-center font-display text-2xl font-bold text-white/90"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={900}
                  className="object-cover"
                />
                {project.featured && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-accent backdrop-blur-sm">
                    <Star size={12} className="fill-accent" aria-hidden />
                    Featured
                  </span>
                )}
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{project.name}</h3>
                  <span className="shrink-0 font-mono-tech text-xs text-muted">{project.year}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{project.description}</p>



              

                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm font-medium">
                  {caseStudy ? (
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      View Case Study <ArrowUpRight size={14} aria-hidden />
                    </Link>
                  ) : (
                    <span />
                  )}

                  {hasLive && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted hover:text-foreground"
                    >
                      Live Site <ArrowUpRight size={14} aria-hidden />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
