'use client';
import { useEffect, useState } from 'react';
import {
  Image as ImageIcon,
  FileText,
  AudioLines,
  Braces,
  ArrowUpRight,
  Lock,
  Search,
  Star,
} from 'lucide-react';
import Link from 'next/link';

/**
 * "Free Tools" — minimal project showcase
 * ------------------------------------------------------
 * Styled to match the "Featured" cards in the Portfolio section:
 * a preview panel + title + short pitch + a handful of highlight
 * tools, not a full searchable directory. Drop in after
 * "My Portfolio", before "Get In Touch".
 */

const HIGHLIGHT_TOOLS = [
  { name: 'Image Tools', icon: ImageIcon },
  { name: 'PDF Tools', icon: FileText },
  { name: 'Audio Tools', icon: AudioLines },
  { name: 'Developer Tools', icon: Braces },
];

function useLiveCounter(seed = 42318) {
  const [count, setCount] = useState(seed);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3));
    }, 2400);
    return () => clearInterval(id);
  }, []);
  return count;
}

export default function FreeToolsSection() {
  const liveCount = useLiveCounter();

  return (
    <section id='freetools' aria-labelledby="freetools-heading" className="relative bg-[#0a0a0a] px-2 py-15 sm:px-10 lg:px-16">
      <div className=" ">
        <p className="mb-3 font-mono text-sm tracking-wide text-accent">04 · Side Project</p>
        <h2 aria-labelledby="freetools-heading" className="text-4xl font-bold text-white sm:text-5xl">
         Our Free <span className="text-accent">Tools</span>
        </h2>
        <p className="mt-4 max-w-lg text-neutral-400">
          A web app I'm building with 37+ browser-based utilities — image, PDF, audio and developer
          tools, free with no sign-up.
        </p>

        {/* showcase card */}
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
          {/* preview — mock browser window standing in for a real screenshot */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-[#0a0a0a] to-[#0a0a0a] p-4 sm:p-6">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <span className="absolute right-3 top-3 z-50 inline-flex items-center gap-1 rounded-full bg-black/20 px-2.5 py-1 text-[11px] font-medium text-accent backdrop-blur-xs">
                  <Star size={12} className="fill-accent" aria-hidden />
                  Featured
                </span>

            {/* browser chrome */}
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-black/50">
              <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-3 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex flex-1 items-center gap-1.5 rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-neutral-500">
                  <Lock size={9} className="text-accent" />
                  freetooly.webforges.site
                </div>
              </div>

              {/* mock page content */}
              <div className="space-y-3 p-2 sm:p-5">
                <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
                  <Search size={12} className="shrink-0 text-neutral-600" />
                  <div className="h-2 w-28 rounded-full bg-white/10 sm:w-40" />
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {HIGHLIGHT_TOOLS.map(tool => {
                    const Icon = tool.icon;
                    return (
                      <Link
                        key={tool.name}
                        href={'https://freetooly.webforges.site'}
                        className="rounded-md border border-white/10 bg-white/[0.02] p-2.5 hover:bg-gray-200/10"
                      >
                        <div className="flex justify-between">
                          <div className='flex gap-1.5'>

                          <Icon size={14} className="mb-2 text-accent" />{' '}
                          <p className="text-xs text-neutral-300">{tool.name}</p>
                          </div>
                            <ArrowUpRight size={15} className="text-accent" />
                          </div>

                        <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
                        <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/[0.06]" />
                      </Link>
                    );
                  })}
                </div>

                <div className="hidden gap-2.5 sm:grid sm:grid-cols-4">
                  {[0, 1, 2, 3].map(i => (
                    <div
                      key={i}
                      className="rounded-md border border-white/5 bg-white/[0.015] p-2.5"
                    >
                      <div className="mb-2 h-3.5 w-3.5 rounded bg-white/10" />
                      <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* body */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Free Tools</h3>
                <p className="mt-1.5 max-w-md text-sm text-neutral-500">
                  Everyday image, PDF, audio and developer utilities that run entirely in the
                  browser — nothing uploaded, nothing to install.
                </p>
              </div>
              <a
                href="https://freetooly.webforges.site"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-accent-dim"
              >
                Visit site
                <ArrowUpRight
                  size={15}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center  gap-3 border-t border-white/10 pt-5">

              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                <Lock size={12} className="text-accent" />
                Private — processed on your device
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkle() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
    </svg>
  );
}
