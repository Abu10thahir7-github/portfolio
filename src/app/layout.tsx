import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { site, projects } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Abu Thahir",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Kerala",
    "Freelance Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  // Prevents iOS from auto-linking + reformatting the phone number wherever
  // site.phone appears in text (e.g. a Contact section).
  formatDetection: {
    telephone: false,
  },
  category: "technology",
  // Fill these in once you've added the domain to Search Console / Bing
  // Webmaster Tools — leave commented out until you have real values,
  // an empty string still renders an (invalid) meta tag.
  // verification: {
  //   google: "your-google-site-verification-code",
  //   other: { "msvalidate.01": "your-bing-verification-code" },
  // },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;

  // Single @graph so Google resolves the Person <-> WebSite <-> Portfolio
  // relationship from one script tag instead of three disconnected ones.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        jobTitle: site.role,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        url: site.url,
        description: site.tagline,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        sameAs: Object.values(site.social).filter(Boolean),
        knowsAbout: [
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "MongoDB",
          "PostgreSQL",
          "Tailwind CSS",
          "JavaScript",
          "TypeScript",
          "Full Stack Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: `${site.name} Portfolio`,
        url: site.url,
        publisher: { "@id": personId },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        name: `${site.name} — ${site.role}`,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
      },
      // Surfaces your project list directly in structured data — helps
      // eligibility for rich results tied to your portfolio content.
      {
        "@type": "ItemList",
        "@id": `${site.url}/#portfolio`,
        name: `${site.name} — Portfolio Projects`,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.name,
            description: project.description,
            url: project.link || site.url,
            image: `${site.url}${project.image}`,
            dateCreated: project.year,
            creator: { "@id": personId },
            keywords: project.technologies?.join(", "),
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        {children}

      </body>
    </html>
  );
}