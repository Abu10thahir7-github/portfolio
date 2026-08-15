module.exports = [
"[project]/src/app/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    runtime: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "opengraph-image", false);
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + '?' + "f39b541c5f28d0b7"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
"[project]/src/app/opengraph-image--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/opengraph-image--metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>OpengraphImage,
    "runtime",
    ()=>runtime,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo-config.ts [app-rsc] (ecmascript)");
;
;
;
const runtime = 'edge';
const alt = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteName} — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].author.name}`;
const size = {
    width: 1200,
    height: 630
};
const contentType = 'image/png';
async function OpengraphImage() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '80px',
            background: 'linear-gradient(135deg, #0f172a 0%, #111827 100%)',
            color: '#f8fafc',
            fontFamily: 'sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 28,
                    color: '#38bdf8',
                    letterSpacing: 4,
                    textTransform: 'uppercase',
                    marginBottom: 24
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].author.location ?? 'Kerala, India'
            }, void 0, false, {
                fileName: "[project]/src/app/opengraph-image.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 72,
                    fontWeight: 700,
                    lineHeight: 1.1
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteName
            }, void 0, false, {
                fileName: "[project]/src/app/opengraph-image.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 36,
                    color: '#94a3b8',
                    marginTop: 16
                },
                children: "Full Stack Developer"
            }, void 0, false, {
                fileName: "[project]/src/app/opengraph-image.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 26,
                    color: '#cbd5e1',
                    marginTop: 40,
                    maxWidth: 900,
                    display: 'flex'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].description
            }, void 0, false, {
                fileName: "[project]/src/app/opengraph-image.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/opengraph-image.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, this), {
        ...size
    });
}
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "about",
    ()=>about,
    "education",
    ()=>education,
    "experience",
    ()=>experience,
    "heroStack",
    ()=>heroStack,
    "nav",
    ()=>nav,
    "projects",
    ()=>projects,
    "services",
    ()=>services,
    "site",
    ()=>site,
    "skills",
    ()=>skills,
    "stats",
    ()=>stats
]);
const site = {
    name: 'Abu Thahir',
    role: 'Full Stack Developer — React & Next.js',
    tagline: 'Abu Thahir is a frontend-focused Full Stack Developer specializing in React, Next.js, TypeScript, Node.js and modern responsive web applications.',
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
        youtube: 'https://www.youtube.com/@abuflow-t1b'
    }
};
const stats = [
    {
        label: "Experience",
        value: "2+ Years"
    },
    {
        label: "Projects",
        value: "15+"
    },
    {
        label: "Tech Stack",
        value: "10+"
    },
    {
        label: "Specialty",
        value: "Frontend"
    }
];
const heroStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Tailwind CSS"
];
const services = [
    {
        title: 'Web Development',
        description: 'Modern, fast and scalable websites built with clean and maintainable code.',
        icon: 'Code2'
    },
    {
        title: 'Frontend Development',
        description: 'Interactive and responsive interfaces built with React, Next.js and modern frontend tools.',
        icon: 'LayoutGrid'
    },
    {
        title: 'Backend Development',
        description: 'Reliable REST APIs, server-side logic and database solutions using Node.js and MongoDB.',
        icon: 'Server'
    },
    {
        title: 'UI/UX Design',
        description: 'Clean and intuitive interfaces designed around usability, accessibility and user experience.',
        icon: 'PenTool'
    },
    {
        title: 'Responsive Design',
        description: 'Mobile-first experiences that look and work smoothly across phones, tablets and desktops.',
        icon: 'Smartphone'
    },
    {
        title: 'Web Performance',
        description: 'Optimized web experiences focused on speed, accessibility, SEO and real-world performance.',
        icon: 'Gauge'
    }
];
const about = {
    paragraphs: [
        "I'm Abu Thahir, a Full Stack Developer focused on building modern web applications and user-friendly digital experiences. I work primarily with React, Next.js, TypeScript, Node.js, MongoDB and Tailwind CSS.",
        'I started my development journey through self-learning and strengthened my practical skills through professional internship experience, freelance work and building real-world projects. I enjoy turning ideas and designs into responsive, functional and polished web experiences.',
        "I'm continuously improving my skills by exploring modern technologies, official documentation and hands-on projects. My goal is to build useful products, solve real problems and grow as a professional developer while working with talented teams and clients."
    ]
};
const education = [
    {
        period: '2025 - Present',
        title: 'Sreenarayanaguru Open University',
        subtitle: 'BCA — Bachelor of Computer Applications'
    },
    {
        period: '2021 - 2023',
        title: 'Keralassery Higher Secondary School',
        subtitle: 'Higher Secondary Education'
    },
    {
        period: '2019 - 2021',
        title: 'K.P.R.P Higher Secondary School',
        subtitle: 'Secondary Education'
    }
];
const experience = [
    {
        period: 'Oct 2023 - Oct 2024',
        title: 'MERN Stack Developer Intern',
        subtitle: 'Softroniics',
        description: 'Worked on full-stack web development with a strong focus on frontend development, responsive UI implementation and user experience. Contributed to real-world application development and collaborated with team members to build practical web solutions.'
    },
    {
        period: 'Jul 2025 - Dec 2025',
        title: 'Frontend Developer',
        subtitle: 'Giftsy — Personalized Gifts / E-commerce',
        description: 'Worked on frontend interfaces for an e-commerce experience, focusing on responsive layouts, reusable components, interactive UI elements and consistent visual design across different devices.'
    },
    {
        period: 'Oct 2024 - Present',
        title: 'Freelance Full Stack Developer',
        subtitle: 'Self-employed',
        description: 'Designing and developing responsive websites and web applications for different use cases. Working across frontend and backend development, including UI implementation, REST APIs, databases and deployment.'
    }
];
const skills = {
    frontend: [
        {
            name: 'HTML5'
        },
        {
            name: 'CSS3'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'TypeScript'
        },
        {
            name: 'React.js'
        },
        {
            name: 'Next.js'
        },
        {
            name: 'Tailwind CSS'
        },
        {
            name: 'Redux Toolkit'
        },
        {
            name: 'GSAP'
        },
        {
            name: 'Sass / SCSS'
        },
        {
            name: 'Material UI'
        },
        {
            name: 'Responsive Web Design'
        }
    ],
    backend: [
        {
            name: 'Node.js'
        },
        {
            name: 'NestJS'
        },
        {
            name: 'TypeScript'
        },
        {
            name: 'Prisma ORM'
        },
        {
            name: 'SQL'
        },
        {
            name: 'REST APIs'
        },
        {
            name: 'API Development'
        },
        {
            name: 'Server-side Development'
        }
    ],
    databases: [
        {
            name: 'SQL'
        },
        {
            name: 'PostgreSQL'
        },
        {
            name: 'MongoDB'
        }
    ],
    tools: [
        {
            name: 'Git'
        },
        {
            name: 'GitHub'
        },
        {
            name: 'VS Code'
        },
        {
            name: 'Cursor'
        },
        {
            name: 'Figma'
        },
        {
            name: 'Postman'
        },
        {
            name: 'Vercel'
        },
        {
            name: 'Jira'
        },
        {
            name: 'Canva'
        }
    ],
    engineering: [
        {
            name: 'State Management'
        },
        {
            name: 'API Integration'
        },
        {
            name: 'Caching Strategies'
        },
        {
            name: 'Scalable Application Development'
        },
        {
            name: 'Software Architecture'
        },
        {
            name: 'Clean Architecture'
        },
        {
            name: 'React Query'
        }
    ]
};
const projects = [
    {
        slug: 'score90x',
        name: 'Score90X',
        image: '/images/tools-image/scoreX90.webp',
        description: 'Football platform providing live match scores, fixtures, standings and football-focused information.',
        category: 'Applications',
        color: '#0ea5e9',
        year: '2026',
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Football API'
        ],
        featured: true,
        link: 'https://world-cup-score90-x.vercel.app'
    },
    {
        slug: 'velonto-food-delivery',
        name: 'Velonto Food Delivery',
        image: '/images/tools-image/velonto.webp',
        description: 'Food delivery platform featuring restaurant discovery, food browsing and ordering experiences.',
        category: 'Web Development',
        color: '#f97316',
        year: '2024',
        technologies: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB'
        ],
        featured: true,
        link: 'https://velonto.vercel.app'
    },
    {
        slug: 'adidas-gsap-website',
        name: 'Adidas GSAP Website',
        image: '/images/tools-image/adidas.webp',
        description: 'Animation-focused concept website featuring smooth interactions and modern motion design.',
        category: 'Web Development',
        color: '#111827',
        year: '2025',
        technologies: [
            'React',
            'GSAP',
            'JavaScript',
            'CSS'
        ],
        featured: true,
        link: 'https://gsap-addidas-web.vercel.app'
    },
    {
        slug: 'talk-tower',
        name: 'Talk Tower',
        image: '/images/tools-image/talk-tower.webp',
        description: 'Education-focused platform concept designed for interactive learning and engaging digital experiences.',
        category: 'Web Design',
        color: '#8b5cf6',
        year: '2025',
        technologies: [
            'React',
            'Tailwind CSS',
            'Figma'
        ],
        link: 'https://www.talktower.in/'
    },
    {
        slug: 'flyocean-travels',
        name: 'Flyocean Travels',
        image: '/images/tools-image/flyocean.webp',
        description: 'Modern travel and tourism website designed to showcase destinations, services and travel experiences.',
        category: 'Web Design',
        color: '#06b6d4',
        year: '2025',
        technologies: [
            'Next.js',
            'Tailwind CSS',
            'TypeScript'
        ],
        link: 'https://www.flyoceantravel.com/'
    },
    {
        slug: 'trendzio-shop',
        name: 'Trendzio Shop',
        image: '/images/tools-image/trendzio.webp',
        description: 'E-commerce platform with product browsing, shopping cart functionality and a modern shopping experience.',
        category: 'Web Development',
        color: '#22c55e',
        year: '2025',
        technologies: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB'
        ],
        link: 'https://trendzio-nu.vercel.app'
    },
    {
        slug: 'bismi-events',
        name: 'Bismi Events',
        image: '/images/tools-image/bismi-events.webp',
        description: 'Event management website concept for discovering, planning and booking event services.',
        category: 'Web Design',
        color: '#ef4444',
        year: '2024',
        technologies: [
            'React',
            'Tailwind CSS',
            'Figma'
        ],
        link: ''
    }
];
const nav = [
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Experience',
        href: '#experience'
    },
    {
        label: 'Skills',
        href: '#skills'
    },
    {
        label: 'Portfolio',
        href: '#portfolio'
    },
    {
        label: 'Toolkit',
        href: '#freetools'
    },
    {
        label: 'Services',
        href: '#services'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
];
}),
"[project]/src/lib/seo-config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SITE_URL",
    ()=>SITE_URL,
    "seoConfig",
    ()=>seoConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)"); // <- your existing file (the one you pasted)
;
const SITE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].url.replace(/\/$/, '');
console.log(SITE_URL);
const seoConfig = {
    siteUrl: SITE_URL,
    siteName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
    titleDefault: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name} — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].role}`,
    titleTemplate: `%s | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name}`,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].tagline,
    keywords: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].role,
        'Full Stack Developer',
        'Frontend Developer',
        'React Developer',
        'Next.js Developer',
        'Web Developer Kerala',
        'Freelance Web Developer India',
        'MERN Stack Developer',
        'TypeScript Developer',
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].flatMap((p)=>p.technologies ?? [])
    ],
    author: {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email,
        url: SITE_URL,
        location: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].location
    },
    social: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].social,
    locale: 'en_US',
    themeColor: '#0ea5e9',
    // Fill these in from Google Search Console / Bing Webmaster once verified
    verification: {
        google: '',
        bing: ''
    },
    // Twitter/X handle without the @ — leave blank if you don't have one wired up
    twitterHandle: ''
};
}),
];

//# sourceMappingURL=src_0iolnay._.js.map