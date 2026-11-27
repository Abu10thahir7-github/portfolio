'use client';

import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/data';
import Avatar from './Avatar';
import { Mail, Phone, MapPin, Download, Menu, X as CloseIcon } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon } from './SocialIcons';
import heroPortrait from '../../public/images/hero-portrait.webp';

export default function Sidebar() {
  const [active, setActive] = useState('#about');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = nav.map(n => document.querySelector(n.href)).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(v => !v)}
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
      >
        {open ? <CloseIcon size={18} /> : <Menu size={18} />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 shrink-0 flex-col justify-between border-r border-border bg-surface px-6 py-8 transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <a href='/' className="flex items-center gap-3">
            <Avatar heroPortrait={heroPortrait} />
            <div>
              <p className="font-display text-lg font-semibold leading-tight">{site.name}</p>
              <p className="text-sm text-accent">{site.role}</p>
            </div>
          </a>

          <nav className="mt-5 flex flex-col gap-1" aria-label="Primary">
            {nav.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.href
                    ? 'bg-accent-soft text-accent'
                    : 'text-muted hover:bg-surface-2 hover:text-foreground'
                }`}
                aria-current={active === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/Abu_Thahir_React_Developer_Resume.pdf"
            download
            className="mt-5 block md:hidden  flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        <div className="mt-5 space-y-4 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="flex items-start gap-3 text-muted hover:text-foreground"
          >
            <Mail size={16} className="mt-0.5 text-accent" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted">Email</span>
              {site.email}
            </span>
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="flex items-start gap-3 text-muted hover:text-foreground"
          >
            <Phone size={16} className="mt-0.5 text-accent" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted">Phone</span>
              {site.phone}
            </span>
          </a>
          <div className="flex items-start gap-3 text-muted">
            <MapPin size={16} className="mt-0.5 text-accent" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted">Location</span>
              {site.location}
            </span>
          </div>

          <div className="flex gap-3 pt-2">
            {[
              { Icon: GithubIcon, href: site.social.github, label: 'GitHub' },
              { Icon: LinkedinIcon, href: site.social.linkedin, label: 'LinkedIn' },
              { Icon: XIcon, href: site.social.twitter, label: 'Twitter / X' },
              { Icon: InstagramIcon, href: site.social.instagram, label: 'Instagram' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p className="pt-4 text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </aside>

      {open && (
        <button
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
        />
      )}
    </>
  );
}
