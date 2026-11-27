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

export const heroStack = [
  'UI/UX Design',
  'Figma',
  'UX Research',
  'Wireframing',
  'Prototyping',
  'React',
  'Next.js',
  'Tailwind CSS',
];

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

  databases: [{ name: 'PostgreSQL' }, { name: 'MongoDB' }, { name: 'SQL' }],

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

export type Category = 'UI/UX' | 'Web' | 'Freelance' | 'Learning';
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
  repo?: string; // GitHub link, useful for learning projects
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
    categories: ['UI/UX', 'Web'],
    color: '#0ea5e9',
    year: '2026',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Football API'],
    featured: true,
    link: 'https://world-cup-score90-x.vercel.app',
    repo: 'https://github.com/Abu10thahir7-github/WorldCup-Score90X',
    figma: 'https://www.figma.com/proto/...',
    behance: 'https://www.behance.net/gallery/...',
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
          {
            title: 'Low-fidelity Wireframes',
            images: ['/images/soccer90x/Score90X-Wireframes.png'],
          },
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
    repo: 'https://github.com/Abu10thahir7-github/Food-Delivery-App-site',
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
    repo: 'https://github.com/Abu10thahir7-github/gsap-Addidas-Boots-Shop-web',
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
    name: 'Talk-Tower',
    image: '/images/tools-image/talk-tower.webp',
    gallery: [
      '/images/tools-image/talk-tower.webp',
      '/images/talk-tower/home-page.webp',
      '/images/talk-tower/courses-page.webp',
      '/images/talk-tower/about-page.webp',
      '/images/talk-tower/all-courses-page.webp',
      '/images/talk-tower/contact-page.webp',
    ],
    description:
      'A language learning and training website showcasing courses such as IELTS, PTE, German and Spoken English, with course information and contact options.',
    categories: ['Freelance', 'Web'],
    color: '#bc0000',
    year: '2025',
    technologies: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'React Router', 'Font Awesome'],
    featured: true,
    link: 'https://talk-tower.vercel.app',
    repo: 'https://github.com/Abu10thahir7-github/Talk-Tower',

    caseStudy: {
      role: 'Frontend Developer',
      duration: 'Project duration to confirm',
      tools: ['VS Code', 'React', 'Vite', 'Tailwind CSS', 'GitHub'],

      stack: [
        {
          group: 'Frontend',
          items: ['React 18', 'JavaScript', 'Vite 5', 'React Router DOM'],
        },
        {
          group: 'UI Development',
          items: [
            'Tailwind CSS',
            'Responsive Layouts',
            'Reusable Components',
            'Font Awesome',
            'Heroicons',
          ],
        },
        {
          group: 'Tools',
          items: ['VS Code', 'Git', 'GitHub', 'Vercel'],
        },
      ],

      sections: {
        overview: [
          {
            title: 'Introduction & Objectives',
            text: 'Talk-Tower is a language training website created to present educational courses and help visitors explore available learning programs, understand the institute and find ways to get in touch.',
          },
          {
            title: 'Project Scope',
            text: 'The website includes course information, institute details, benefits, student reviews, a gallery and contact pages.',
          },
          {
            title: 'My Role',
            list: [
              'Frontend development',
              'React component implementation',
              'Website layout development',
              'Responsive interface implementation',
              'Page navigation and routing',
            ],
          },
        ],

        research: [
          {
            title: 'Website Requirements',
            text: 'The website needed to communicate the available language courses clearly and provide visitors with easy access to institute information and contact options.',
          },
          {
            title: 'Information Architecture',
            list: [
              'Home page and course introduction',
              'Course listings',
              'Institute information',
              'Benefits and reviews',
              'Gallery',
              'Contact page',
            ],
          },
          {
            title: 'User Needs',
            list: [
              'Discover available language courses',
              'Understand course offerings',
              'Navigate between website pages',
              'Find institute contact information',
            ],
          },
        ],

        ux: [
          {
            title: 'Website Structure',
            text: 'Organizing the website into dedicated sections and pages so visitors can explore courses, institute information and contact details.',
          },
          {
            title: 'Navigation Planning',
            text: 'Using React Router to organize the main website routes, including Home, All Courses, About and Contact.',
          },
          {
            title: 'Content Organization',
            text: 'Presenting course details, benefits and reviews in separate sections to make the website content easier to explore.',
          },
        ],

        ui: [
          {
            title: 'Visual Interface',
            text: 'A clean educational website interface using a red, yellow and neutral color palette to create visual distinction and highlight important content.',
          },
          {
            title: 'Typography & Layout',
            text: 'Using clear headings, structured content sections and card-based layouts to organize course information.',
          },
          {
            title: 'Website Screens',
            images: [
              '/images/talk-tower/home-page.webp',
              '/images/talk-tower/courses-page.webp',
              '/images/talk-tower/about-page.webp',
              '/images/talk-tower/all-courses-page.webp',
            ],
          },
        ],

        prototype: [
          {
            title: 'Page Navigation',
            text: 'Implementing navigation between the home page, all courses, about and contact pages using React Router.',
          },
          {
            title: 'Interactive Elements',
            text: 'Adding buttons, course cards and navigation elements to support visitor interaction.',
          },
        ],

        development: [
          {
            title: 'Frontend Development',
            list: [
              'React component-based development',
              'JavaScript',
              'Vite development environment',
              'Tailwind CSS styling',
              'React Router navigation',
            ],
          },
          {
            title: 'Component Structure',
            text: 'Organizing the interface into reusable sections such as navigation, course listings, benefits, reviews and footer components.',
          },
          {
            title: 'Responsive Implementation',
            text: 'Using responsive Tailwind CSS utility classes to adapt page layouts across different screen sizes.',
          },
        ],

        deployment: [
          {
            title: 'Website Deployment',
            text: 'The project has a live website hosted on Vercel.',
          },
          {
            title: 'Project Links',
            list: [
              'Live website: https://talk-tower.vercel.app',
              'Source code: https://github.com/Abu10thahir7-github/Talk-Tower',
            ],
          },
        ],

        conclusion: [
          {
            title: 'Key Learnings',
            list: [
              'Building React-based website interfaces',
              'Organizing multi-page website layouts',
              'Implementing client-side routing',
              'Creating reusable UI components',
              'Working with responsive Tailwind CSS layouts',
            ],
          },
          {
            title: 'Future Improvements',
            list: [
              'Improve course discovery and filtering',
              'Add detailed course pages',
              'Improve accessibility',
              'Enhance contact and registration workflows',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'flyocean',
    name: 'Flyocean',
    image: '/images/tools-image/flyocean.webp',
    gallery: [
      '/images/flyocean/flyocean-cover.webp',
      '/images/flyocean/home-page.webp',
      '/images/flyocean/about-page.webp',
      '/images/flyocean/services-page.webp',
      '/images/flyocean/packages-page.webp',
      '/images/flyocean/contact-page.webp',
    ],
    description:
      'A modern travel and tourism website offering visa assistance, flight bookings, holiday packages and personalized travel services.',
    categories: ['UI/UX', 'Web'],
    color: '#0ea5e9',
    year: '2025',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
    featured: true,
    link: 'https://flyocean.vercel.app',
    repo: 'https://github.com/Abu10thahir7-github/Flyocean',

    caseStudy: {
      role: 'Frontend Developer & UI Designer',
      duration: 'Project duration to confirm',
      tools: ['VS Code', 'Next.js', 'Tailwind CSS', 'GitHub'],
      stack: [
        {
          group: 'Frontend',
          items: ['Next.js 15', 'React 19', 'JavaScript', 'Tailwind CSS 4'],
        },
        {
          group: 'UI Development',
          items: ['Responsive Design', 'Reusable Components', 'Lucide React', 'Headless UI'],
        },
        {
          group: 'Tools & Deployment',
          items: ['Git', 'GitHub', 'VS Code', 'Vercel'],
        },
      ],

      sections: {
        overview: [
          {
            title: 'Introduction & Objectives',
            text: 'Flyocean is a travel and tourism website designed to introduce travel services and help customers explore visa assistance, flight bookings, hotel reservations and holiday packages through one digital platform.',
          },
          {
            title: 'My Role',
            list: [
              'Frontend interface development',
              'UI implementation',
              'Responsive web design',
              'Reusable component development',
            ],
          },
          {
            title: 'Project Scope',
            text: 'A responsive travel agency website covering company information, travel services, holiday packages, FAQs and customer contact.',
          },
        ],

        research: [
          {
            title: 'Business Requirements',
            text: 'The website needed to present multiple travel services clearly and help customers find relevant information and contact the agency.',
          },
          {
            title: 'Information Architecture',
            list: [
              'Home and company introduction',
              'Visa and travel services',
              'Holiday packages',
              'Travel information and FAQs',
              'Contact and inquiry options',
            ],
          },
          {
            title: 'User Needs',
            list: [
              'Quick access to travel services',
              'Clear visa and package information',
              'Easy access to contact details',
              'Simple navigation across devices',
            ],
          },
        ],

        ux: [
          {
            title: 'Website Structure',
            text: 'Organizing travel services and company information into clear sections for easier navigation.',
          },
          {
            title: 'Responsive Layout Planning',
            text: 'Planning flexible layouts to maintain usability across desktop, tablet and mobile screens.',
          },
          {
            title: 'Component Planning',
            text: 'Structuring reusable interface components for consistent layouts and maintainable development.',
          },
        ],

        ui: [
          {
            title: 'Visual Design',
            text: 'A travel-focused visual direction designed to communicate trust, professionalism and a welcoming travel experience.',
          },
          {
            title: 'Typography & Layout',
            text: 'Consistent typography, content hierarchy and spacing to improve readability and navigation.',
          },
          {
            title: 'Website Screens',
            images: [
              '/images/flyocean/home-page.webp',
              '/images/flyocean/about-page.webp',
              '/images/flyocean/services-page.webp',
              '/images/flyocean/packages-page.webp',
            ],
          },
        ],

        prototype: [
          {
            title: 'Interactive Website',
            text: 'Implementing navigation, interactive interface elements and customer inquiry entry points.',
          },
          {
            title: 'Responsive Experience',
            text: 'Adapting the website layout for different screen sizes and devices.',
          },
        ],

        development: [
          {
            title: 'Technology Stack',
            list: ['Next.js 15', 'React 19', 'JavaScript', 'Tailwind CSS 4'],
          },
          {
            title: 'Component Development',
            text: 'Building reusable React components to maintain consistent UI patterns across website sections.',
          },
          {
            title: 'Responsive Development',
            text: 'Using responsive layouts and Tailwind CSS utilities to support different screen sizes.',
          },
        ],

        deployment: [
          {
            title: 'Testing',
            list: [
              'Responsive layout checks',
              'Navigation testing',
              'Cross-device interface review',
            ],
          },
          {
            title: 'Deployment',
            text: 'Deployed using Vercel with a custom domain and website configuration.',
          },
        ],

        conclusion: [
          {
            title: 'Challenges & Solutions',
            text: 'Organizing multiple travel services into a clear website structure while maintaining a consistent and responsive interface.',
          },
          {
            title: 'Key Learnings',
            list: [
              'Building reusable frontend components',
              'Creating responsive website layouts',
              'Organizing complex business information',
              'Developing service-focused web experiences',
            ],
          },
          {
            title: 'Future Improvements',
            list: [
              'Enhanced booking and inquiry experience',
              'Improved accessibility',
              'Advanced travel package filtering',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'trendzio-shop',
    name: 'Trendzio Shop',
    image: '/images/tools-image/trendzio.webp',
    description:
      'E-commerce platform with product browsing, shopping cart functionality and a modern shopping experience.',
    categories: ['Freelance'],
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

  {
    slug: 'react-weather-app',
    name: 'React Weather App',
    image: '/images/tools-image/React-Weather-App.png', // Add your project cover image
    gallery: [
      // Add your actual project screenshots here
    ],
    description:
      'A responsive weather application that allows users to search for locations and view current weather information, including temperature, weather conditions, humidity and wind speed.',
    categories: ['Web', 'Learning'],
    color: '#64748b',
    year: '2026', // Update to the actual project year
    technologies: ['React', 'JavaScript', 'Material UI', 'CSS', 'OpenWeatherMap API'],
    featured: false,
    link: 'https://react-weather-app-sepia-alpha.vercel.app/', // Add live deployment URL if available
    repo: 'https://github.com/Abu10thahir7-github/React-Weather-App',
    figma: '',
    behance: '',

    caseStudy: {
      role: 'Frontend Developer',
      duration: 'Not specified',
      tools: ['React', 'JavaScript', 'Material UI', 'CSS', 'Git', 'GitHub', 'VS Code'],
      stack: [
        {
          group: 'Frontend',
          items: ['React 18', 'JavaScript', 'CSS'],
        },
        {
          group: 'UI Components',
          items: ['Material UI', 'Material UI Icons'],
        },
        {
          group: 'Data & APIs',
          items: ['OpenWeatherMap API', 'Fetch API', 'REST'],
        },
        {
          group: 'Development & Tools',
          items: ['Create React App', 'Git', 'GitHub', 'VS Code'],
        },
      ],

      sections: {
        overview: [
          {
            title: 'Introduction & Objectives',
            text: 'React Weather App is a weather information application that allows users to search for a city or location and retrieve its current weather conditions using the OpenWeatherMap API. The main objective is to provide essential weather information through a simple and easy-to-use interface.',
          },
          {
            title: 'My Role',
            list: [
              'Frontend development',
              'React component development',
              'API integration',
              'Responsive styling',
              'Weather data presentation',
            ],
          },
          {
            title: 'Scope',
            text: 'A responsive web application focused on location-based weather searches, current temperature, weather conditions and essential weather details.',
          },
        ],

        research: [
          {
            title: 'Problem Statement',
            text: 'Users need a simple way to check current weather conditions for different locations without navigating through complicated interfaces.',
          },
          {
            title: 'Project Goals',
            list: [
              'Make location-based weather searches simple.',
              'Present important weather information clearly.',
              'Provide useful weather details in one interface.',
              'Support different screen sizes.',
            ],
          },
          {
            title: 'User Needs',
            list: [
              'Quickly search for a city or location.',
              'View the current temperature.',
              'Understand current weather conditions.',
              'Check humidity, wind speed and feels-like temperature.',
            ],
          },
        ],

        ux: [
          {
            title: 'User Flow',
            text: 'The user enters a location, submits the search and receives weather information from the OpenWeatherMap API. Invalid locations and empty searches display error messages.',
          },
          {
            title: 'Search Interaction',
            list: [
              'Enter a location in the search field.',
              'Click the search button or press Enter.',
              'Retrieve weather information from the API.',
              'Display the weather details or an error message.',
            ],
          },
          {
            title: 'Low-fidelity Wireframes',
            text: 'Wireframes were not verified in the repository. Add your actual design images if available.',
            images: [],
          },
        ],

        ui: [
          {
            title: 'Visual Design',
            text: 'The interface uses a full-screen background image, a dark overlay, translucent weather information panels and a centered search interface.',
          },
          {
            title: 'Typography',
            text: 'The stylesheet specifies Muli as the body font family. The HTML document also loads Dosis from Google Fonts.',
          },
          {
            title: 'Interface Components',
            list: [
              'Location search input and search button.',
              'Location name and country information.',
              'Current temperature and weather condition.',
              'Weather condition icon.',
              'Feels-like temperature.',
              'Humidity information.',
              'Wind speed information.',
              'Error message display.',
            ],
          },
          {
            title: 'High-fidelity Screens',
            text: 'Add screenshots of the actual application here.',
            images: [],
          },
        ],

        prototype: [
          {
            title: 'Application Interactions',
            list: [
              'Location search interaction.',
              'Search using the Enter key.',
              'Dynamic weather information display.',
              'Weather icon updates based on API response.',
              'Error feedback for invalid searches.',
            ],
          },
          {
            title: 'Usability Testing',
            text: 'Formal usability testing results were not available in the inspected source files.',
          },
          {
            title: 'Potential Improvements',
            list: [
              'Improve search feedback and loading states.',
              'Provide clearer error messages.',
              'Improve keyboard and screen-reader accessibility.',
              'Display the searched location’s local time.',
            ],
          },
        ],

        development: [
          {
            title: 'Technology Stack',
            list: [
              'React 18',
              'JavaScript',
              'Material UI',
              'CSS',
              'OpenWeatherMap API',
              'Fetch API',
            ],
          },
          {
            title: 'Architecture & Components',
            text: 'The application uses a React functional component with useState for managing the search location, weather data, error messages and weather icon. The main interface is rendered conditionally based on the API response.',
          },
          {
            title: 'API Integration',
            text: 'The application requests current weather information from the OpenWeatherMap Current Weather API using a location query and metric units.',
          },
          {
            title: 'Responsive Development',
            list: [
              'Responsive layout using CSS media queries.',
              'Adjustments for tablet and mobile screen sizes.',
              'Flexible weather information layout.',
              'Mobile-specific weather icon sizing.',
            ],
          },
        ],

        deployment: [
          {
            title: 'Testing',
            list: [
              'Empty location validation.',
              'Invalid location error handling.',
              'Enter-key search interaction.',
              'Weather data rendering.',
            ],
          },
          {
            title: 'Deployment',
            text: 'Deployment platform and live application URL have not been verified.',
          },
        ],

        conclusion: [
          {
            title: 'Challenges & Solutions',
            list: [
              'API integration: Retrieved weather information using the OpenWeatherMap API.',
              'Dynamic data: Used React state to update the interface with API responses.',
              'Error handling: Added feedback for empty and invalid location searches.',
              'Responsive layout: Used CSS media queries to adapt the interface to smaller screens.',
            ],
          },
          {
            title: 'Key Learnings',
            list: [
              'Working with third-party weather APIs.',
              'Managing application state with React Hooks.',
              'Handling asynchronous API responses.',
              'Building responsive interfaces with CSS.',
              'Displaying dynamic data in React components.',
            ],
          },
          {
            title: 'Future Improvements',
            list: [
              'Add a weather forecast for upcoming days.',
              'Add geolocation-based weather detection.',
              'Add recent and favourite locations.',
              'Display local time for searched locations.',
              'Improve loading and error states.',
              'Improve accessibility and keyboard navigation.',
              'Secure API credentials using environment variables.',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    image: '/images/tools-image/qr-genaretor.png',
    gallery: [],
    description:
      'A simple QR Code Generator that allows users to convert text and URLs into QR code images using an external QR code API.',
    categories: ['Web', 'Learning'],
    color: '#494eea',
    year: '2026',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'QR Server API'],
    featured: false,
    link: 'https://main--qrcode-genretor.netlify.app/',
    repo: 'https://github.com/Abu10thahir7-github/QR-Code-Genaretor',
    figma: '',
    behance: '',

    caseStudy: {
      role: 'Frontend Developer',
      duration: 'Not specified',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'VS Code', 'Git', 'GitHub'],
      stack: [
        {
          group: 'Frontend',
          items: ['HTML5', 'CSS3', 'JavaScript'],
        },
        {
          group: 'API Integration',
          items: ['QR Server API'],
        },
        {
          group: 'Tools & Development',
          items: ['VS Code', 'Git', 'GitHub'],
        },
      ],

      sections: {
        overview: [
          {
            title: 'Introduction & Objectives',
            text: 'QR Code Generator is a simple web application that converts user-entered text and URLs into QR code images. The main objective is to provide a straightforward way to generate QR codes.',
          },
          {
            title: 'My Role',
            list: [
              'Frontend development',
              'HTML structure',
              'CSS styling and animations',
              'JavaScript functionality',
              'API integration',
            ],
          },
          {
            title: 'Scope',
            text: 'A lightweight web application focused on text and URL input, QR code generation, and displaying the generated QR code.',
          },
        ],

        research: [
          {
            title: 'Problem Statement',
            text: 'Users need a simple way to convert text or URLs into QR codes without a complicated process.',
          },
          {
            title: 'Research & Analysis',
            text: 'Formal UX research and competitor analysis were not documented in the available project files.',
          },
          {
            title: 'User Needs',
            list: [
              'Enter text or a URL easily',
              'Generate a QR code with one click',
              'View the generated QR code clearly',
              'Use a simple and understandable interface',
            ],
          },
        ],

        ux: [
          {
            title: 'User Flow',
            text: 'Enter text or URL → Click Generate QR Code → Send the input to the QR Server API → Display the generated QR code.',
          },
          {
            title: 'Low-fidelity Wireframes',
            text: 'Wireframes were not included in the repository.',
            images: [],
          },
        ],

        ui: [
          {
            title: 'Color Palette',
            colors: [
              { name: 'Primary', hex: '#494eea' },
              { name: 'Background', hex: '#221f1f' },
              { name: 'Container', hex: '#ffffff' },
            ],
          },
          {
            title: 'Typography',
            text: 'Poppins font family is declared in the CSS.',
          },
          {
            title: 'Interface Design',
            list: [
              'Centered white container',
              'Text and URL input field',
              'Primary QR generation button',
              'QR code image display area',
              'Animated input error feedback',
            ],
            images: [],
          },
        ],

        prototype: [
          {
            title: 'Interactive Prototype',
            text: 'A Figma prototype was not available in the repository. The implemented website provides a basic interactive QR generation flow.',
          },
          {
            title: 'Usability Testing',
            text: 'Usability testing details were not documented.',
          },
          {
            title: 'Design Improvements',
            list: [
              'Provide clearer input validation',
              'Improve feedback during QR code generation',
              'Add responsive layouts for mobile devices',
            ],
          },
        ],

        development: [
          {
            title: 'Technology Stack',
            list: [
              'HTML5 for page structure',
              'CSS3 for styling and animations',
              'JavaScript for user interactions',
              'QR Server API for QR code generation',
            ],
          },
          {
            title: 'Functionality & Implementation',
            list: [
              'Read text or URL from the input field',
              'Validate empty input',
              'Generate a QR code image through the external API',
              'Display the generated image dynamically',
              'Reveal the QR image using a CSS transition',
              'Show shake animation when the input is empty',
            ],
          },
          {
            title: 'Potential Improvements',
            list: [
              'Encode user input using encodeURIComponent',
              'Add API error handling',
              'Add QR code download functionality',
              'Improve responsive behavior',
              'Move JavaScript into a separate file',
            ],
          },
        ],

        deployment: [
          {
            title: 'Testing',
            text: 'Formal cross-device and browser compatibility testing details were not documented in the available files.',
          },
          {
            title: 'Deployment',
            text: 'A live deployment URL was not available in the inspected repository files.',
          },
        ],

        conclusion: [
          {
            title: 'Challenges & Solutions',
            text: 'The main implementation challenge addressed in the source code is dynamically displaying the generated QR code and providing visual feedback when the input is empty.',
          },
          {
            title: 'Key Learnings',
            list: [
              'Working with JavaScript DOM manipulation',
              'Integrating an external API',
              'Creating interactive UI elements with CSS',
              'Using CSS transitions and animations',
            ],
          },
          {
            title: 'Future Improvements',
            list: [
              'Download QR code as PNG',
              'Customize QR code size and colors',
              'Add loading and API error states',
              'Improve mobile responsiveness',
              'Enhance accessibility',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'note-app',
    name: 'Note App',
    image: '/images/tools-image/note-web-app.png',
    gallery: [],
    description:
      'A simple browser-based Note App that allows users to enter note titles and text, with basic localStorage integration and a clean interface.',
    categories: ['Web', 'Learning'],
    color: '#ff00ca',
    year: 'Not specified',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'Bootstrap Icons'],
    featured: false,
    link: 'https://abu10thahir7-github.github.io/Notes-App-JavaScript/intex.html',
    repo: 'https://github.com/Abu10thahir7-github/note---app',
    figma: '',
    behance: '',

    caseStudy: {
      role: 'Frontend Developer',
      duration: 'Not specified',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'VS Code', 'Git', 'GitHub'],
      stack: [
        {
          group: 'Frontend',
          items: ['HTML5', 'CSS3', 'JavaScript'],
        },
        {
          group: 'Browser Storage',
          items: ['Local Storage'],
        },
        {
          group: 'Icons',
          items: ['Bootstrap Icons'],
        },
        {
          group: 'Tools & Development',
          items: ['VS Code', 'Git', 'GitHub'],
        },
      ],

      sections: {
        overview: [
          {
            title: 'Introduction & Objectives',
            text: 'Note App is a simple web application designed to provide an interface for entering note titles and note content. The project explores basic JavaScript interactions and browser localStorage.',
          },
          {
            title: 'My Role',
            list: [
              'Frontend development',
              'HTML structure',
              'CSS styling',
              'JavaScript DOM manipulation',
              'Browser storage integration',
            ],
          },
          {
            title: 'Scope',
            text: 'A lightweight note-taking interface with title input, note text area, an Add button, and a dropdown for displaying note titles.',
          },
        ],

        research: [
          {
            title: 'Problem Statement',
            text: 'Users need a simple interface to write and organize short notes without a complicated workflow.',
          },
          {
            title: 'Research & Analysis',
            text: 'Formal UX research and competitor analysis were not documented in the available repository files.',
          },
          {
            title: 'User Needs',
            list: [
              'Enter a note title',
              'Write note content',
              'Add a note through a simple action',
              'View entered note titles in a dropdown',
              'Access a straightforward interface',
            ],
          },
        ],

        ux: [
          {
            title: 'User Flow',
            text: 'Enter note title → Write note content → Click Add → Validate input → Store title and text in localStorage → Add the title to the dropdown.',
          },
          {
            title: 'Low-fidelity Wireframes',
            text: 'Wireframes were not included in the repository.',
            images: [],
          },
        ],

        ui: [
          {
            title: 'Color Palette',
            colors: [
              { name: 'Primary Gradient', hex: '#ff00ca' },
              { name: 'Secondary Gradient', hex: '#0042cf' },
              { name: 'Container', hex: '#150639' },
              { name: 'Button', hex: '#0000ff' },
              { name: 'Text Area', hex: '#ffffff' },
            ],
          },
          {
            title: 'Typography',
            text: 'The interface uses a sans-serif font family, with monospace typography for the note text area.',
          },
          {
            title: 'Interface Design',
            list: [
              'Centered note application container',
              'Title input field',
              'Add button with hover interaction',
              'Note text area',
              'Dropdown for note titles',
              'Trash icon using Bootstrap Icons',
              'Responsive layout for screens below 600px',
            ],
            images: [],
          },
        ],

        prototype: [
          {
            title: 'Interactive Prototype',
            text: 'A Figma prototype was not available. The repository contains a basic implemented interface with JavaScript interactions.',
          },
          {
            title: 'Usability Testing',
            text: 'Usability testing details were not documented.',
          },
          {
            title: 'Design Improvements',
            list: [
              'Improve note organization',
              'Make the dropdown support selecting and viewing saved notes',
              'Provide clearer feedback after adding a note',
              'Improve the delete interaction',
            ],
          },
        ],

        development: [
          {
            title: 'Technology Stack',
            list: [
              'HTML5 for application structure',
              'CSS3 for layout and styling',
              'JavaScript for interactive functionality',
              'Local Storage for browser-based data storage',
              'Bootstrap Icons for the trash icon',
            ],
          },
          {
            title: 'Functionality & Implementation',
            list: [
              'Capture title and note text using DOM elements',
              'Validate empty title and note fields',
              'Display an alert when required fields are empty',
              'Store title and text using localStorage',
              'Dynamically create dropdown options for entered titles',
              'Add hover interaction to the Add button',
            ],
          },
          {
            title: 'Potential Improvements',
            list: [
              'Store multiple notes as separate records',
              'Load selected notes from the dropdown',
              'Implement note editing and deletion',
              'Add automatic saving',
              'Add empty-state and success feedback',
              'Improve keyboard accessibility',
            ],
          },
        ],

        deployment: [
          {
            title: 'Testing',
            text: 'Formal browser compatibility and cross-device testing details were not documented.',
          },
          {
            title: 'Deployment',
            text: 'A live deployment URL was not available in the inspected repository files.',
          },
        ],

        conclusion: [
          {
            title: 'Challenges & Solutions',
            text: 'The project explores capturing user input, validating fields, updating the interface dynamically, and storing data in browser localStorage.',
          },
          {
            title: 'Key Learnings',
            list: [
              'JavaScript DOM manipulation',
              'Handling user input and form validation',
              'Using browser localStorage',
              'Creating responsive layouts with CSS',
              'Implementing interactive UI elements',
            ],
          },
          {
            title: 'Future Improvements',
            list: [
              'Complete CRUD functionality',
              'Multiple note management',
              'Search and filter notes',
              'Edit and delete notes',
              'Improved responsive UI',
              'Enhanced accessibility and usability',
            ],
          },
        ],
      },
    },
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

export const hasCaseStudy = (p: Project) => p.categories.includes('UI/UX') || !!p.caseStudy;
