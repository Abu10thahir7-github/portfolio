import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  ShoppingCart,
  Palette,
  Rocket,
  Building2,
  GraduationCap,
} from "lucide-react";
import { serviceList, getServiceBySlug } from "@/lib/services";

// A teaser, not a catalog. The full service list lives on webforges.site —
// this section (styled to match the "Free Tools" card elsewhere on the
// page: browser-chrome mock window + highlight grid + "Visit site" strip)
// just proves the range and sends people there for the rest.
const WEBFORGES_URL = "https://webforges.site/";

const highlightSlugs = [
  "webdevelopment",
  "ecommerce",
  "webdesign",
  "landingpage",
  "realestate-portal",
  "elearning-portal",
] as const;

const highlightIcons: Record<(typeof highlightSlugs)[number], typeof Code2> = {
  webdevelopment: Code2,
  ecommerce: ShoppingCart,
  webdesign: Palette,
  landingpage: Rocket,
  "realestate-portal": Building2,
  "elearning-portal": GraduationCap,
};

export default function WeProvideServices() {
  const highlights = highlightSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden border-y border-white/10  px-2 py-15 sm:px-10 lg:px-16"
    >


      <div className="relative mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2  px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">

            05 &middot; Services
          </span>
          <h2

            aria-labelledby="services-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            We <span className="text-accent">Provide</span>
          </h2>
          <p className="mt-3 max-w-lg text-sm text-slate-400">
            Web development runs as its own thing over at Web Forges &mdash;
            sites, stores, and portals built on React &amp; Node. Here&apos;s
            a taste of what&apos;s on offer.
          </p>
        </div>

        {/* mock browser window, same device used for the Free Tools card */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-3">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            </span>
            <span className="mx-auto flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[11px] text-slate-400">
              webforges.site
            </span>
          </div>

          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((service) => {
              const Icon = highlightIcons[service.slug as (typeof highlightSlugs)[number]];
              return (
                <div
                  key={service.slug}
                  className="group bg-[#0a0b0a] p-5 transition-colors flex gap-2 hover:bg-gray-200/5"
                >

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-accent transition-colors group-hover:border-accent">
                    <Icon size={16} />
                  </span>
                  <div>
                  <h3 className=" text-sm font-semibold text-slate-200">
                    {service.title}
                  </h3>
                  <p className=" text-xs leading-relaxed text-slate-500">
                    {service.desc}
                  </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* footer strip, matches the Free Tools "visit site" pattern */}
          <div className="flex flex-col gap-4 border-t border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-white">Web Forges</span>
              <span className="mx-2 text-slate-600">&middot;</span>
              {serviceList.length}+ services across web dev, portals &amp; SEO
            </p>
            <Link
              href={WEBFORGES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Visit site
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}