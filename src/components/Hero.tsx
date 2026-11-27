import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { heroStack, site, stats } from '@/lib/data';
import heroPortrait from '../../public/images/hero-portrait.webp';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="grid-bg relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-border px-6 py-10 sm:px-10 lg:px-16"
    >
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
            👋 Hello, I&apos;m
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-6xl">
            {site.name.split(' ')[0]} <span className="text-accent">{site.name.split(' ')[1]}</span>
          </h1>

          <p className="mt-4 font-display text-2xl text-muted sm:text-3xl">{site.role}</p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.tagline}
          </p>

          <ul className="mt-7 flex flex-wrap gap-3" aria-label="Core technologies">
            {heroStack.map(tech => (
              <li
                key={tech}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-mono-tech text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/Abu_Thahir_React_Developer_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Let's Talk <ArrowRight size={16} />
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map(s => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-xl font-medium text-accent">{s.value}</dd>
                <dd className="mt-1 text-xs text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none lg:justify-self-end">
          <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-border/60 shadow-2xl shadow-black/20">
            <Image
              src={heroPortrait}
              alt={`${site.name}, ${site.role}`}
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 900px) 42vw, 90vw"
              className="object-cover object-top"
            />

            {/* soft edge fade — dissolves the photo into the background on all sides,
        no color, no glow, just a clean vignette */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'var(--background)',
                WebkitMaskImage:
                  'radial-gradient(115% 100% at 50% 35%, transparent 62%, black 100%)',
                maskImage: 'radial-gradient(115% 100% at 50% 35%, transparent 62%, black 100%)',
              }}
            />

            {/* bottom fade so the portrait settles into the section below it */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />

            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-border/40" />
          </div>
        </div>
      </div>

    </section>
  );
}
