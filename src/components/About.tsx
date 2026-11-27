import { about, services } from '@/lib/data';
import { Code2, PenTool, Users, Layers, Smartphone, PanelsTopLeft } from 'lucide-react';

const iconMap = {
  PenTool,
  Users,
  Layers,
  Code2,
  Smartphone,
  PanelsTopLeft,
};
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border px-6 py-15 sm:px-10 lg:px-16"
    >
      <header className="mb-12">
        <p className="font-mono-tech text-sm text-accent">01 · Introduction</p>
        <h2 id="about-heading" className="mt-2 font-display text-4xl font-bold sm:text-3xl">
          About <span className="text-accent">Me</span>
        </h2>
      </header>

      <div className="grid gap-14 lg:grid-cols-2">
        <div className="space-y-5 text-base leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold">What I&apos;m Doing</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map(service => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Code2;
              return (
                <div
                  key={service.title}
                  className="rounded-xl border border-border bg-surface p-3 transition-colors hover:border-accent-dim"
                >
                  <div className="flex items-center">
                    <div className=" flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon size={20} aria-hidden />
                    </div>
                    <h4 className="font-medium text-base">{service.title}</h4>{' '}
                  </div>
                  <p className="mt-1 text-sm text-muted">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
