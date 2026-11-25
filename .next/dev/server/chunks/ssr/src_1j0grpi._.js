module.exports = [
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$seo$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/seo/JsonLd.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const metadata = {
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].url),
    title: {
        default: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name} — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].role}`,
        template: `%s — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name}`
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].tagline,
    keywords: [
        'Abu Thahir',
        'Full Stack Developer',
        'MERN Stack Developer',
        'React Developer',
        'Next.js Developer',
        'Web Developer Kerala',
        'Freelance Web Developer India',
        'Portfolio'
    ],
    authors: [
        {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].url
        }
    ],
    creator: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
    publisher: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
    alternates: {
        canonical: '/'
    },
    openGraph: {
        type: 'website',
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].url,
        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name} — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].role}`,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].tagline,
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name} — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].role}`
            }
        ],
        locale: 'en_US'
    },
    twitter: {
        card: 'summary_large_image',
        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name} — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].role}`,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].tagline,
        images: [
            '/og-image.png'
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1
        }
    },
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                sizes: 'any'
            },
            {
                url: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png'
            }
        ],
        apple: [
            {
                url: '/apple-touch-icon.png',
                sizes: '180x180'
            }
        ]
    },
    manifest: '/manifest.webmanifest',
    // Prevents iOS from auto-linking + reformatting the phone number wherever
    // site.phone appears in text (e.g. a Contact section).
    formatDetection: {
        telephone: false
    },
    category: 'technology'
};
const viewport = {
    themeColor: '#0a0b0a',
    colorScheme: 'dark'
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: "dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$seo$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {}, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "antialiased bg-background text-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#main-content",
                        className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black",
                        children: "Skip to content"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/seo/JsonLd.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonLd",
    ()=>JsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
;
;
;
function JsonLd() {
    const personId = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl}/#person`;
    const websiteId = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl}/#website`;
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            // ── Person ────────────────────────────────────────────────
            {
                '@type': 'Person',
                '@id': personId,
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].author.name,
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl,
                email: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].author.email}`,
                jobTitle: 'Full Stack Developer',
                description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].description,
                image: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl}/opengraph-image`,
                address: {
                    '@type': 'PostalAddress',
                    addressRegion: 'Kerala',
                    addressCountry: 'IN'
                },
                sameAs: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].social).filter(Boolean),
                knowsAbout: [
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Node.js',
                    'NestJS',
                    'MongoDB',
                    'PostgreSQL',
                    'Tailwind CSS'
                ]
            },
            // ── WebSite (enables sitelinks search box eligibility) ──────
            {
                '@type': 'WebSite',
                '@id': websiteId,
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl,
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteName,
                description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].description,
                publisher: {
                    '@id': personId
                },
                inLanguage: 'en-US'
            },
            // ── ProfilePage wrapping the Person ──────────────────────
            {
                '@type': 'ProfilePage',
                '@id': `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl}/#profilepage`,
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl,
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].titleDefault,
                isPartOf: {
                    '@id': websiteId
                },
                about: {
                    '@id': personId
                },
                primaryImageOfPage: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl}/opengraph-image`
            },
            // ── Portfolio as an ItemList of CreativeWork ─────────────
            {
                '@type': 'ItemList',
                '@id': `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl}/#portfolio`,
                name: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].author.name} — Portfolio Projects`,
                itemListElement: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project, index)=>({
                        '@type': 'ListItem',
                        position: index + 1,
                        item: {
                            '@type': 'CreativeWork',
                            name: project.name,
                            description: project.description,
                            url: project.link || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl,
                            image: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].siteUrl}${project.image}`,
                            dateCreated: project.year,
                            creator: {
                                '@id': personId
                            },
                            keywords: project.technologies?.join(', ')
                        }
                    }))
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(jsonLd)
        }
    }, void 0, false, {
        fileName: "[project]/src/components/seo/JsonLd.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_1j0grpi._.js.map