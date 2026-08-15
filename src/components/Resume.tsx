import { education, experience, skills } from '@/lib/data';
import { GraduationCap, Briefcase } from 'lucide-react';

function SkillCapsule({ name }: { name: string }) {
  return (
    <li
      className="relative isolate overflow-hidden rounded-full border border-border   px-4 py-2"

    >
      <span className="absolute inset-y-0 left-0 -z-10 rounded-full   bg-accent-dim opacity-25 w-full" />

      <span className="flex items-center justify-between gap-3 text-sm">
        <span className="font-light ">{name}</span>
      </span>
    </li>
  );
}

function SkillGroup({ title, items }: { title: string; items: { name: string }[] }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">{title}</h4>
      <ul className="flex flex-wrap gap-1">
        {items.map(s => (
          <SkillCapsule key={s.name} name={s.name} />
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="border-b border-border px-6 py-15 sm:px-10 lg:px-16"
    >
      <header className="mb-12">
        <p className="font-mono-tech text-sm text-accent">02 · Background</p>
        <h2 id="resume-heading" className="mt-2 font-display text-4xl font-bold sm:text-5xl">
          My <span className="text-accent">Resume</span>
        </h2>
      </header>

      <div className="grid gap-14 lg:grid-cols-2">
        <div className="space-y-14">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold">
              <GraduationCap className="text-accent" size={20} /> Education
            </h3>
            <ol className="space-y-6 border-l border-border pl-6">
              {education.map(item => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="font-mono-tech text-xs text-accent">{item.period}</p>
                  <p className="mt-1 font-semibold">{item.title}</p>
                  <p className="text-sm text-muted">{item.subtitle}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold">
              <Briefcase className="text-accent" size={20} /> Experience
            </h3>
            <ol className="space-y-6 border-l border-border pl-6">
              {experience.map(item => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="font-mono-tech text-xs text-accent">{item.period}</p>
                  <p className="mt-1 font-semibold">{item.title}</p>
                  <p className="text-sm text-muted">{item.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="space-y-7 rounded-2xl h-fit border border-border bg-surface p-6">
          <h3 className="font-display text-xl font-semibold">My Skills</h3>
          <SkillGroup title="Frontend Development" items={skills.frontend} />
          <SkillGroup title="Backend Development" items={skills.backend} />
          <SkillGroup title="Databases" items={skills.databases} />
          <SkillGroup title="Tools & Technologies" items={skills.tools} />
          <SkillGroup title="engineering" items={skills.engineering} />
        </div>
      </div>
    </section>
  );
}
