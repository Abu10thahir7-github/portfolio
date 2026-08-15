"use client";

import { useState, type FormEvent } from "react";
import { Icon, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/lib/data";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, PinterestIcon, WhatsappIcon, XIcon, YoutubeIcon } from "./SocialIcons";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-6 py-15 sm:px-10 lg:px-16"
    >
      <header className="mb-12">
        <p className="font-mono-tech text-sm text-accent">06 · Say Hello</p>
        <h2
          id="contact-heading"
          className="mt-2 font-display text-4xl font-bold sm:text-5xl"
        >
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Have a project in mind or want to work together? Feel free to
          contact me.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          {[
            { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
            { Icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
            { Icon: MapPin, label: "Location", value: site.location, href: undefined },
          ].map(({ Icon, label, value, href }) => {
            const content = (
              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">
                    {label}
                  </p>
                  <p className="font-medium">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block transition-colors hover:border-accent-dim">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })} <div className="flex justify-between sm:gap-3 pt-2">
                    {[
                      { Icon: GithubIcon, href: site.social.github, label: "GitHub" },
                      { Icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
                      { Icon: XIcon, href: site.social.twitter, label: "Twitter / X" },
                      { Icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
                      { Icon: WhatsappIcon, href: site.social.whatsapp, label: "Whatsapp" },
                      { Icon: PinterestIcon, href: site.social.pinterest, label: "Pinterest" },

                      { Icon: YoutubeIcon, href: site.social.youtube, label: "Youtube" },

                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        <Icon size={17} />
                      </a>
                    ))}
                  </div>
        </div>


        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-2 sm:p-8"
        >
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="mb-1.5 block text-sm text-muted">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              placeholder="Enter subject"
              className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Type your message here..."
              className="w-full resize-none rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
            >
              <Send size={16} />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p role="status" className="mt-3 text-sm text-accent">
                Thanks — your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="mt-3 text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
