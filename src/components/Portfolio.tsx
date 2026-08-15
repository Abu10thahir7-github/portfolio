"use client";

import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const filters = ["All", "Web Design", "Web Development", "Applications"] as const;

export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(() => {
    const filtered =
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active);

    // Featured projects surface first within the current filter
    return [...filtered].sort(
      (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
    );
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
          <h2
            id="portfolio-heading"
            className="mt-2 font-display text-4xl font-bold sm:text-5xl"
          >
            My <span className="text-accent">Portfolio</span>
          </h2>
        </div>

        <div
          className="flex  gap-2 rounded-full border border-border bg-surface p-1.5 w-full md:w-fit overflow-auto"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`rounded-full text-nowrap px-4 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? "bg-accent text-black"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <article
            key={project.slug}

            className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent-dim"
          >
            <Link
              href={project.link || '#'}
              target={project.link ? "_blank" : "_self"}
              rel={project.link ? "noopener noreferrer" : undefined}
              aria-label={`Visit ${project.name} project`}
              className="relative flex h-[250px] items-center justify-center  text-center font-display text-2xl font-bold text-white/90"


            >
              <Image src={project.image} alt={project.name} width={1000} height={900}  className="object-cover" />
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
                <span className="shrink-0 font-mono-tech text-xs text-muted">
                  {project.year}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{project.description}</p>

              {project.technologies?.length ? (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] font-mono-tech text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}

              <span className="mt-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                {project.category}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}