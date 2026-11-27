export const site = {
  name: 'Abu Thahir',
  role: 'UI/UX Designer & Frontend Developer',
  tagline:
    'I design meaningful digital experiences and develop modern, responsive websites that combine beautiful interfaces with seamless functionality.',
  email: 'abu10thahir7@gmail.com',
  phone: '+91 8921966269',
  location: 'Kerala, India',
  url: 'https://abuthahir.dev',

  social: {
    github: 'https://github.com/Abu10thahir7-github',
    linkedin: 'https://www.linkedin.com/in/abuthahir-es/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/abuthahir.dev/',
    whatsapp: 'https://wa.me/918921966269',
    facebook: 'https://www.facebook.com/',
    pinterest: 'https://in.pinterest.com/abu10thahir7',
    youtube: 'https://www.youtube.com/@abuflow-t1b',
  },
};
export const stats = [
  { label: 'Experience', value: '2+ Years' },
  { label: 'Projects', value: '15+' },
  { label: 'Tech Stack', value: '10+' },
  { label: 'Focus', value: 'UI/UX & Dev ' },
];

export const heroStack = ['UI/UX Design', 'Figma', 'UX Research', 'Wireframing', 'Prototyping','React','Next.js', 'Tailwind CSS'];


export const services = [
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and user-friendly digital experiences.',
    icon: 'PenTool',
  },
  {
    title: 'UX Research',
    description: 'Understanding users and identifying their needs.',
    icon: 'Users',
  },
  {
    title: 'Wireframing & Prototyping',
    description: 'Creating wireframes and interactive prototypes.',
    icon: 'Layers',
  },
  {
    title: 'Frontend Development',
    description: 'Building modern interfaces with React and Next.js.',
    icon: 'Code2',
  },
  {
    title: 'Responsive Web Design',
    description: 'Creating seamless experiences across all devices.',
    icon: 'Smartphone',
  },
  {
    title: 'Design to Code',
    description: 'Turning Figma designs into pixel-perfect websites.',
    icon: 'PanelsTopLeft',
  },
];


export const about = {
  paragraphs: [
    "I'm Abu Thahir, a UI/UX Designer & Frontend Developer passionate about creating intuitive digital experiences and modern web interfaces. I combine user-centered design principles with frontend technologies to build websites that are visually engaging, accessible, and easy to use.",

    "My journey started with frontend development, where I discovered my interest in UI/UX design and the importance of understanding user needs. Through self-learning, practical projects, and hands-on experience, I've developed skills in interface design, wireframing, prototyping, and responsive web development ",

    "I enjoy exploring design ideas, solving user experience challenges, and transforming concepts into polished digital products. I'm continuously improving my design and development skills to create meaningful experiences that bring value to users and businesses.",
  ],
};

export const education = [
  {
    period: '2025 - Present',
    title: 'Sreenarayanaguru Open University',
    subtitle: 'BCA — Bachelor of Computer Applications',
  },
  {
    period: '2021 - 2023',
    title: 'Keralassery Higher Secondary School',
    subtitle: 'Higher Secondary Education',
  },
  {
    period: '2019 - 2021',
    title: 'K.P.R.P Higher Secondary School',
    subtitle: 'Secondary Education',
  },
];

export const experience = [
  {
    period: 'Oct 2023 - Oct 2024',
    title: 'MERN Stack Developer Intern',
    subtitle: 'Softroniics',
    description:
      'Worked on full-stack web development with a strong focus on frontend development, responsive UI implementation and user experience. Contributed to real-world application development and collaborated with team members to build practical web solutions.',
  },
  {
    period: 'Jul 2025 - Dec 2025',
    title: 'Frontend Developer',
    subtitle: 'Giftsy — Personalized Gifts / E-commerce',
    description:
      'Worked on frontend interfaces for an e-commerce experience, focusing on responsive layouts, reusable components, interactive UI elements and consistent visual design across different devices.',
  },
  {
    period: 'Oct 2024 - Present',
    title: 'Freelance Full Stack Developer',
    subtitle: 'Self-employed',
    description:
      'Designing and developing responsive websites and web applications for different use cases. Working across frontend and backend development, including UI implementation, REST APIs, databases and deployment.',
  },
];


export const skills = {
  uiux: [
    { name: 'Figma' },
    { name: 'UI Design' },
    { name: 'UX Research' },
    { name: 'Wireframing' },
    { name: 'Prototyping' },
    { name: 'Auto Layout' },
    { name: 'Design Systems' },
    { name: 'User Testing' },
    { name: 'Visual Design' },
    { name: 'Usability' },
    { name: 'Accessibility' },
    { name: 'User-Centered Design' },
  ],

  frontend: [
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React.js' },
    { name: 'Next.js' },
    { name: 'Tailwind CSS' },
    { name: 'Redux Toolkit' },
    { name: 'GSAP' },
    { name: 'Sass / SCSS' },
    { name: 'Material UI' },
    { name: 'Responsive Web Design' },
  ],

  backend: [
    { name: 'Node.js' },
    { name: 'NestJS' },
    { name: 'Express.js' },
    { name: 'Prisma ORM' },
    { name: 'REST APIs' },
    { name: 'API Integration' },
    { name: 'Server-side Development' },
  ],

  databases: [
    { name: 'PostgreSQL' },
    { name: 'MongoDB' },
    { name: 'SQL' },
  ],

  tools: [
    { name: 'Figma' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'VS Code' },
    { name: 'Cursor' },
    { name: 'Postman' },
    { name: 'Vercel' },
    { name: 'Jira' },
    { name: 'Canva' },
  ],

  engineering: [
    { name: 'Component Design' },
    { name: 'Reusable Components' },
    { name: 'State Management' },
    { name: 'API Integration' },
    { name: 'Clean Architecture' },
    { name: 'Performance Optimization' },
    { name: 'React Query' },
  ],
};

export type Category = 'UI/UX' | 'Web' | 'Applications';
export type CaseBlock = {
  title: string;
  text?: string;
  list?: string[];
  images?: string[]; // paths in /public
  colors?: { name: string; hex: string }[]; // for the color palette
};

export type CaseSectionKey =
  | 'overview'
  | 'research'
  | 'ux'
  | 'ui'
  | 'prototype'
  | 'development'
  | 'deployment'
  | 'conclusion';

export type StackGroup = { group: string; items: string[] };
export type CaseStudy = {
  role?: string;
  duration?: string;
  tools?: string[];
  stack?: StackGroup[];
  sections: Partial<Record<CaseSectionKey, CaseBlock[]>>;
};
export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  categories: Category[]; // was: category
  color: string;
  year: string;
  technologies?: string[];
  featured?: boolean;
  link?: string; // live website
  figma?: string; // Figma prototype
  behance?: string;
  caseStudy?: CaseStudy; // Behance presentation
  gallery?: string[];
};
export const projects: Project[] = [
  {
    slug: 'score90x',
    name: 'Score90X',
    image: '/images/tools-image/scoreX90.webp',
    gallery: [
  '/images/tools-image/scoreX90.webp',
  '/images/soccer90x/soccer-home-page.png',
  '/images/soccer90x/2.png',
  '/images/soccer90x/3.png',
  '/images/soccer90x/4.png',
  '/images/soccer90x/5.png',
  '/images/soccer90x/6.png',
  '/images/soccer90x/7.png',
],
    description:
      'Football platform providing live match scores, fixtures, standings and football-focused information.',
    categories: ['UI/UX', 'Applications'],
    color: '#0ea5e9',
    year: '2026',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Football API'],
    featured: true,
    link: 'https://world-cup-score90-x.vercel.app',
    caseStudy: {
      role: 'UI/UX Designer & Frontend Developer',
      duration: '4 weeks',
      tools: ['Figma', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      stack: [
        { group: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
        { group: 'Data & APIs', items: ['Football API', 'REST'] },
        { group: 'Design', items: ['Figma'] },
        { group: 'Tools & Deployment', items: ['Git', 'GitHub', 'VS Code', 'Vercel'] },
      ],

      sections: {
        overview: [
          {
            title: 'Introduction & Objectives',
            text: 'What the product is and what it should achieve.',
          },
          { title: 'My Role', list: ['UX research', 'UI design', 'Frontend development'] },
          { title: 'Scope', text: 'Web app, mobile-first, live scores and standings.' },
        ],
        research: [
          { title: 'Problem Statement', text: 'Fans have to check several apps for scores.' },
          {
            title: 'Competitor Analysis',
            list: ['What app A does well', 'Where app B falls short'],
          },
          {
            title: 'User Personas & Pain Points',
            list: ['Casual fan: wants quick scores', 'Hardcore fan: wants stats'],
          },
        ],
        ux: [
          { title: 'User Flow', images: ['/images/soccer90x/Score90X-User-Flow-Diagram.png'] },
          { title: 'Low-fidelity Wireframes', images: ['/images/soccer90x/Score90X-Wireframes.png'] },
        ],
        ui: [
          {
            title: 'Color Palette',
            colors: [
              { name: 'Accent', hex: '#22c55e' },
              { name: 'Background', hex: '#0b1220' },
            ],
          },
          { title: 'Typography', text: 'Fonts used and why.' },
          {
            title: 'High-fidelity Screens',
            images: ['/images/case/score90x-ui-1.webp', '/images/case/score90x-ui-2.webp'],
          },
        ],
        prototype: [
          {
            title: 'Interactive Prototype',
            text: 'Flows and transitions covered in the Figma prototype.',
          },
          { title: 'Usability Testing', text: 'Who tested it and what they said.' },
          { title: 'Design Improvements', list: ['Changed X because of Y'] },
        ],
        development: [
          { title: 'Technology Stack', list: ['Next.js', 'TypeScript', 'Football API'] },
          { title: 'Architecture & Components', text: 'How the project is structured.' },
          {
            title: 'Performance & Accessibility',
            list: ['Image optimization', 'Keyboard navigation'],
          },
        ],
        deployment: [
          { title: 'Testing', list: ['Cross-device testing', 'Browser compatibility'] },
          { title: 'Deployment', text: 'Deployed on Vercel.' },
        ],
        conclusion: [
          { title: 'Challenges & Solutions', text: 'Hardest problem and how you solved it.' },
          { title: 'Key Learnings', list: ['Lesson 1', 'Lesson 2'] },
          { title: 'Future Improvements', list: ['Push notifications', 'Dark/light themes'] },
        ],
      },
    },
  },
  {
    slug: 'velonto-food-delivery',
    name: 'Velonto Food Delivery',
    image: '/images/tools-image/velonto.webp',
    description:
      'Food delivery platform featuring restaurant discovery, food browsing and ordering experiences.',
    categories: ['UI/UX', 'Web'],
    color: '#f97316',
    year: '2024',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    featured: true,
    link: 'https://velonto.vercel.app',
    figma: 'https://www.figma.com/proto/...',
    behance: 'https://www.behance.net/gallery/...',
    caseStudy: {
      role: 'UI/UX Designer & Frontend Developer',
      duration: '4 weeks',
      tools: ['Figma', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      sections: {
        overview: [
          {
            title: 'Introduction & Objectives',
            text: 'What the product is and what it should achieve.',
          },
          { title: 'My Role', list: ['UX research', 'UI design', 'Frontend development'] },
          { title: 'Scope', text: 'Web app, mobile-first, live scores and standings.' },
        ],
        research: [
          { title: 'Problem Statement', text: 'Fans have to check several apps for scores.' },
          {
            title: 'Competitor Analysis',
            list: ['What app A does well', 'Where app B falls short'],
          },
          {
            title: 'User Personas & Pain Points',
            list: ['Casual fan: wants quick scores', 'Hardcore fan: wants stats'],
          },
        ],
        ux: [
          { title: 'User Flow', images: ['/images/case/score90x-flow.webp'] },
          { title: 'Low-fidelity Wireframes', images: ['/images/case/score90x-wire.webp'] },
        ],
        ui: [
          {
            title: 'Color Palette',
            colors: [
              { name: 'Accent', hex: '#22c55e' },
              { name: 'Background', hex: '#0b1220' },
            ],
          },
          { title: 'Typography', text: 'Fonts used and why.' },
          {
            title: 'High-fidelity Screens',
            images: ['/images/case/score90x-ui-1.webp', '/images/case/score90x-ui-2.webp'],
          },
        ],
        prototype: [
          {
            title: 'Interactive Prototype',
            text: 'Flows and transitions covered in the Figma prototype.',
          },
          { title: 'Usability Testing', text: 'Who tested it and what they said.' },
          { title: 'Design Improvements', list: ['Changed X because of Y'] },
        ],
        development: [
          { title: 'Technology Stack', list: ['Next.js', 'TypeScript', 'Football API'] },
          { title: 'Architecture & Components', text: 'How the project is structured.' },
          {
            title: 'Performance & Accessibility',
            list: ['Image optimization', 'Keyboard navigation'],
          },
        ],
        deployment: [
          { title: 'Testing', list: ['Cross-device testing', 'Browser compatibility'] },
          { title: 'Deployment', text: 'Deployed on Vercel.' },
        ],
        conclusion: [
          { title: 'Challenges & Solutions', text: 'Hardest problem and how you solved it.' },
          { title: 'Key Learnings', list: ['Lesson 1', 'Lesson 2'] },
          { title: 'Future Improvements', list: ['Push notifications', 'Dark/light themes'] },
        ],
      },
    },
  },
  {
    slug: 'adidas-gsap-website',
    name: 'Adidas GSAP Website',
    image: '/images/tools-image/adidas.webp',
    description:
      'Animation-focused concept website featuring smooth interactions and modern motion design.',
    categories: ['UI/UX', 'Web'],
    color: '#111827',
    year: '2025',
    technologies: ['React', 'GSAP', 'JavaScript', 'CSS'],
    featured: true,
    link: 'https://gsap-addidas-web.vercel.app',
    caseStudy: {
      role: 'UI/UX Designer & Frontend Developer',
      duration: '4 weeks',
      tools: ['Figma', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      sections: {
        overview: [
          {
            title: 'Introduction & Objectives',
            text: 'What the product is and what it should achieve.',
          },
          { title: 'My Role', list: ['UX research', 'UI design', 'Frontend development'] },
          { title: 'Scope', text: 'Web app, mobile-first, live scores and standings.' },
        ],
        research: [
          { title: 'Problem Statement', text: 'Fans have to check several apps for scores.' },
          {
            title: 'Competitor Analysis',
            list: ['What app A does well', 'Where app B falls short'],
          },
          {
            title: 'User Personas & Pain Points',
            list: ['Casual fan: wants quick scores', 'Hardcore fan: wants stats'],
          },
        ],
        ux: [
          { title: 'User Flow', images: ['/images/case/score90x-flow.webp'] },
          { title: 'Low-fidelity Wireframes', images: ['/images/case/score90x-wire.webp'] },
        ],
        ui: [
          {
            title: 'Color Palette',
            colors: [
              { name: 'Accent', hex: '#22c55e' },
              { name: 'Background', hex: '#0b1220' },
            ],
          },
          { title: 'Typography', text: 'Fonts used and why.' },
          {
            title: 'High-fidelity Screens',
            images: ['/images/case/score90x-ui-1.webp', '/images/case/score90x-ui-2.webp'],
          },
        ],
        prototype: [
          {
            title: 'Interactive Prototype',
            text: 'Flows and transitions covered in the Figma prototype.',
          },
          { title: 'Usability Testing', text: 'Who tested it and what they said.' },
          { title: 'Design Improvements', list: ['Changed X because of Y'] },
        ],
        development: [
          { title: 'Technology Stack', list: ['Next.js', 'TypeScript', 'Football API'] },
          { title: 'Architecture & Components', text: 'How the project is structured.' },
          {
            title: 'Performance & Accessibility',
            list: ['Image optimization', 'Keyboard navigation'],
          },
        ],
        deployment: [
          { title: 'Testing', list: ['Cross-device testing', 'Browser compatibility'] },
          { title: 'Deployment', text: 'Deployed on Vercel.' },
        ],
        conclusion: [
          { title: 'Challenges & Solutions', text: 'Hardest problem and how you solved it.' },
          { title: 'Key Learnings', list: ['Lesson 1', 'Lesson 2'] },
          { title: 'Future Improvements', list: ['Push notifications', 'Dark/light themes'] },
        ],
      },
    },
  },
  {
    slug: 'talk-tower',
    name: 'Talk Tower',
    image: '/images/tools-image/talk-tower.webp',
    description:
      'Education-focused platform concept designed for interactive learning and engaging digital experiences.',
    categories: ['UI/UX', 'Web'],
    color: '#8b5cf6',
    year: '2025',
    technologies: ['React', 'Tailwind CSS', 'Figma'],
    link: 'https://www.talktower.in/',
  },
  {
    slug: 'flyocean-travels',
    name: 'Flyocean Travels',
    image: '/images/tools-image/flyocean.webp',
    description:
      'Modern travel and tourism website designed to showcase destinations, services and travel experiences.',
    categories: ['UI/UX', 'Web'],
    color: '#06b6d4',
    year: '2025',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://www.flyoceantravel.com/',
  },
  {
    slug: 'trendzio-shop',
    name: 'Trendzio Shop',
    image: '/images/tools-image/trendzio.webp',
    description:
      'E-commerce platform with product browsing, shopping cart functionality and a modern shopping experience.',
    categories: ['UI/UX', 'Web'],
    color: '#22c55e',
    year: '2025',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://trendzio-nu.vercel.app',
  },
  {
    slug: 'bismi-events',
    name: 'Bismi Events',
    image: '/images/tools-image/bismi-events.webp',
    description:
      'Event management website concept for discovering, planning and booking event services.',
    categories: ['UI/UX', 'Web'],
    color: '#ef4444',
    year: '2024',
    technologies: ['React', 'Tailwind CSS', 'Figma'],
    link: '',
  },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Toolkit', href: '#freetools' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const hasCaseStudy = (p: Project) => p.categories.includes('UI/UX');
