export type ServiceCategory =
  | "Web Services"
  | "Web Portal Development"
  | "Related Services";

export type ServiceDetailBlock = {
  heading: string;
  subheading: string;
  content: string[];
};

export type Service = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  content: string;
  category: ServiceCategory;
  details?: {
    what: ServiceDetailBlock;
    why: ServiceDetailBlock;
    how: ServiceDetailBlock;
    who: ServiceDetailBlock;
  };
};

export const serviceList: Service[] = [
  {
    slug: "webdevelopment",
    title: "Web Development",
    desc: "Create a website for your business.",
    image: "/images/services/webdevelopment.jpg",
    content:
      "We offer complete front-end and back-end web development services using modern technologies like MERN Stack, Next.js, and more. Our goal is to build scalable, secure, and high-performance websites that help you grow online.",
    category: "Web Services",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce",
    desc: "Launch a conversion-ready online store.",
    image: "/images/services/ecommerce.jpg",
    content:
      "We create powerful e-commerce platforms with secure payments, user-friendly navigation, and conversion-focused design. Whether you're a small business or a growing brand, we build scalable solutions tailored to your products and audience.",
    category: "Web Services",
  },
  {
    slug: "static",
    title: "Static Website",
    desc: "Create a professional website with ease.",
    image:
      "https://res.cloudinary.com/dcrf52w3g/image/upload/v1755290402/StaticWebsite_dwz46q.png",
    content:
      "We create a professional website with ease. We offer a wide range of templates, customization options, and support for SEO and analytics.",
    category: "Web Services",
  },
  {
    slug: "webdesign",
    title: "Web Designing",
    desc: "Pixel-perfect UI/UX as you wish.",
    image:
      "https://res.cloudinary.com/dcrf52w3g/image/upload/v1755290418/Webdesgin_ejjoo5.png",
    content:
      "Web designing means creating the visual layout of a website — colors, fonts, images, buttons, menus and more — so it looks great and works well on every device.",
    category: "Web Services",
    details: {
      what: {
        heading: "What is Web Designing?",
        subheading: "Understanding the basics of website layout and visuals",
        content: [
          "Web designing means creating the visual layout of a website",
          "This includes colors, fonts, images, buttons, and menus",
          "It shapes how visitors see and interact with your site",
        ],
      },
      why: {
        heading: "Why is Web Design important?",
        subheading: "The value of design in business success",
        content: [
          "Boosts business credibility and professionalism",
          "Improves user experience (UX/UI)",
          "Supports SEO and mobile responsiveness",
          "Helps sell products/services online (eCommerce)",
        ],
      },
      how: {
        heading: "How does it help?",
        subheading: "Ways web design supports growth",
        content: [
          "Attracts new customers",
          "Builds brand identity",
          "Works on all devices (responsive)",
          "Increases business growth",
        ],
      },
      who: {
        heading: "Who uses it?",
        subheading: "People and organizations that benefit most",
        content: [
          "Business owners",
          "Startups",
          "Online/offline shops",
          "Institutions & agencies",
          "Personal portfolios",
        ],
      },
    },
  },
  {
    slug: "landingpage",
    title: "Landing Page Design",
    desc: "High-impact one-page sites.",
    image: "/images/services/LandingWesite.png",
    content:
      "Need a high-converting landing page for a campaign or product? We design persuasive landing pages that focus on your target audience and drive action.",
    category: "Web Services",
  },
  {
    slug: "startup-website",
    title: "Startup Business Website",
    desc: "Website for your startup business.",
    image: "/images/services/startup.jpg",
    content:
      "Kickstart your business with a modern website that reflects your mission and value. We help startups create an online presence that converts interest into customers.",
    category: "Web Services",
  },
  {
    slug: "dynamic-website",
    title: "Dynamic Website",
    desc: "Create a dynamic website for your business.",
    image: "/images/services/dynamic.jpg",
    content:
      "Dynamic websites allow real-time updates and data-driven interactions. Ideal for businesses that need flexibility and control through admin panels.",
    category: "Web Services",
  },
  {
    slug: "professional-website",
    title: "Professional Business Website",
    desc: "Website for your professional business.",
    image: "/images/services/professional.jpg",
    content:
      "We create professional websites for corporate businesses, agencies, and consultants to showcase their services, portfolios, and achievements.",
    category: "Web Services",
  },
  {
    slug: "seo-website",
    title: "SEO Website",
    desc: "Website for your SEO business.",
    image: "/images/services/seo.jpg",
    content:
      "SEO-optimized websites that rank well in search engines, load fast, and have structured content to boost visibility.",
    category: "Web Services",
  },
  {
    slug: "marketing-webdesign",
    title: "Marketing Web Designing",
    desc: "Website for your marketing business.",
    image: "/images/services/marketing.jpg",
    content:
      "Design that supports digital marketing strategies with lead generation forms, conversion tracking, and CTA placements.",
    category: "Web Services",
  },
  {
    slug: "unlimited-pages",
    title: "Unlimited Pages With 4 Admin Panel",
    desc: "Website with unlimited pages & multiple admin roles.",
    image: "/images/services/unlimited.jpg",
    content:
      "Advanced business websites with unlimited pages, multi-role admin panel access, and scalable backend for future growth.",
    category: "Web Services",
  },
  {
    slug: "multiple-location",
    title: "Multiple Location Website",
    desc: "One website for multiple locations.",
    image: "/images/services/multilocation.jpg",
    content:
      "Perfect for franchises or businesses serving multiple regions. We create a centralized site with location-specific content and SEO.",
    category: "Web Services",
  },
  {
    slug: "custom-webdesign",
    title: "Custom Web Designing",
    desc: "Tailor-made web designs as per your needs.",
    image: "/images/services/custom.jpg",
    content:
      "Fully customized websites built from scratch based on your brand's needs, goals, and aesthetics. No templates — just uniqueness.",
    category: "Web Services",
  },
  {
    slug: "realestate-portal",
    title: "Real Estate Portal",
    desc: "For your property business.",
    image: "/images/services/realestate.jpg",
    content:
      "List properties, filter listings, manage agents, and more with our full-featured real estate web portals.",
    category: "Web Portal Development",
  },
  {
    slug: "fooddelivery-portal",
    title: "Food Delivery Portal",
    desc: "Optimized UX for delivery businesses.",
    image: "/images/services/fooddelivery.jpg",
    content:
      "Online food ordering systems with real-time order tracking, admin dashboards, and smooth customer interface.",
    category: "Web Portal Development",
  },
  {
    slug: "elearning-portal",
    title: "E-Learning Portal",
    desc: "Build your own online learning platform.",
    image: "/images/services/elearning.jpg",
    content:
      "Create online courses, manage users, and monetize learning content with our LMS solutions.",
    category: "Web Portal Development",
  },
  {
    slug: "travelagency-portal",
    title: "Travel Agency Portal",
    desc: "Showcase trips, packages, and offers.",
    image: "/images/services/travel.jpg",
    content:
      "Let customers explore destinations, book tours, and make inquiries with a professional travel portal.",
    category: "Web Portal Development",
  },
  {
    slug: "jobconsultancy-portal",
    title: "Job Consultancy Portal",
    desc: "For job seekers and HR firms.",
    image: "/images/services/job.jpg",
    content:
      "Custom-built job portals for consultancies and HR agencies to post vacancies, accept applications, and manage listings.",
    category: "Web Portal Development",
  },
  {
    slug: "matrimony-portal",
    title: "Matrimony Portal",
    desc: "Connect people through your match-making portal.",
    image: "/images/services/matrimony.jpg",
    content:
      "Matrimony platforms for profile creation, partner searches, chat systems, and privacy controls.",
    category: "Web Portal Development",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    desc: "Keep your website up-to-date and secure.",
    image: "/images/services/maintenance.jpg",
    content:
      "We handle content updates, backups, bug fixes, and performance optimization regularly.",
    category: "Related Services",
  },
  {
    slug: "website-support",
    title: "Website Support",
    desc: "Get professional support for your website.",
    image: "/images/services/support.jpg",
    content:
      "On-demand technical support to fix issues, apply patches, and assist with technical questions.",
    category: "Related Services",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    desc: "Revamp your site with a fresh new design.",
    image: "/images/services/redesign.jpg",
    content:
      "Revive old websites with a modern UI/UX, optimized code, and new structure. Great for businesses evolving or rebranding.",
    category: "Related Services",
  },
  {
    slug: "google-ads",
    title: "Google Ads Management",
    desc: "Manage your Google Ads campaigns effectively.",
    image: "/images/services/ads.jpg",
    content:
      "We help you set up and optimize Google Ads campaigns for conversions, traffic, or brand awareness.",
    category: "Related Services",
  },
  {
    slug: "google-analytics",
    title: "Google Analytics",
    desc: "Track and analyze your site's traffic.",
    image: "/images/services/analytics.jpg",
    content:
      "Integrate Google Analytics and GA4 to understand your audience, user behavior, and improve ROI.",
    category: "Related Services",
  },
  {
    slug: "domain-registration",
    title: "Domain Registration",
    desc: "Secure your domain name with trusted registrars.",
    image: "/images/services/domain.jpg",
    content:
      "We help you pick and register the best domain for your brand, including extensions and renewals.",
    category: "Related Services",
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Web Services",
  "Web Portal Development",
  "Related Services",
];

export function getServiceBySlug(slug: string): Service | undefined {
  return serviceList.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service, limit = 3): Service[] {
  return serviceList
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, limit);
}