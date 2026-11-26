module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/public/images/hero-portrait.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/hero-portrait.2_7pduq96m7d9.webp" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/images/hero-portrait.webp.mjs { IMAGE => \"[project]/public/images/hero-portrait.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$hero$2d$portrait$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/hero-portrait.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$hero$2d$portrait$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1122,
    height: 1402,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRv4AAABXRUJQVlA4TPIAAAAvBcABAM1VICICHgiADQIAAICvry/vgA0A8gMAAAAAAAAAAAAAAAAAAAAAAAAAAAh1DmDCARyF3AAAADwQABsEAACA898WOYcEDvDgwA8AAAAAAAAAAAAAAAAAAAAAAAAAgAQAAVpwj9e0zwMByEEAAAA4/6v/n4XpAwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEFxII82O2jwzKi5HXFQyTYtLwg0gIDSvG9jMqB+H0pbjUvH0MC4nsz8b3zm4cq8ubU8tyaTkuO4/ORfaTWWNPGl/1Xqvc6YG5X/k+i31TjC5P+Fuy1zWD6RAAcBA/TQ=="
};
}),
"[project]/src/components/Avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Avatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function Avatar({ size = 56, heroPortrait }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative shrink-0 rounded-full p-[2px]",
        style: {
            width: size,
            height: size
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full w-full items-center justify-center rounded-full bg-surface-2 font-display font-bold text-accent",
                style: {
                    fontSize: size * 0.36
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: heroPortrait,
                    alt: "Abu Thahir",
                    fill: true,
                    className: "rounded-full object-cover",
                    sizes: "(min-width: 1024px) 42vw, 90vw"
                }, void 0, false, {
                    fileName: "[project]/src/components/Avatar.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Avatar.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-accent"
            }, void 0, false, {
                fileName: "[project]/src/components/Avatar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Avatar.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.31.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.31.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.31.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.31.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.31.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.31.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SocialIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SocialIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$hero$2d$portrait$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$hero$2d$portrait$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/hero-portrait.webp.mjs { IMAGE => "[project]/public/images/hero-portrait.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
;
function Sidebar() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('#about');
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sections = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((n)=>document.querySelector(n.href)).filter(Boolean);
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setActive(`#${entry.target.id}`);
                }
            });
        }, {
            rootMargin: '-40% 0px -50% 0px',
            threshold: 0
        });
        sections.forEach((s)=>observer.observe(s));
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": open ? 'Close menu' : 'Open menu',
                onClick: ()=>setOpen((v)=>!v),
                className: "fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface lg:hidden",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 39,
                    columnNumber: 43
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `fixed inset-y-0 left-0 z-40 flex w-72 shrink-0 flex-col justify-between border-r border-border bg-surface px-6 py-8 transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        heroPortrait: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$hero$2d$portrait$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$hero$2d$portrait$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display text-lg font-semibold leading-tight",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-accent",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].role
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "mt-5 flex flex-col gap-1",
                                "aria-label": "Primary",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        onClick: ()=>setOpen(false),
                                        className: `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active === item.href ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-surface-2 hover:text-foreground'}`,
                                        "aria-current": active === item.href ? 'page' : undefined,
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/Abu_Thahir_React_Developer_Resume.pdf",
                                download: true,
                                className: "mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    " Download Resume"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 space-y-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].email}`,
                                className: "flex items-start gap-3 text-muted hover:text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 16,
                                        className: "mt-0.5 text-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs uppercase tracking-wide text-muted",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone.replace(/\s/g, '')}`,
                                className: "flex items-start gap-3 text-muted hover:text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 16,
                                        className: "mt-0.5 text-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs uppercase tracking-wide text-muted",
                                                children: "Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 text-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$31$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 16,
                                        className: "mt-0.5 text-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs uppercase tracking-wide text-muted",
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 pt-2",
                                children: [
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SocialIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GithubIcon"],
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].social.github,
                                        label: 'GitHub'
                                    },
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SocialIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkedinIcon"],
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].social.linkedin,
                                        label: 'LinkedIn'
                                    },
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SocialIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XIcon"],
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].social.twitter,
                                        label: 'Twitter / X'
                                    },
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SocialIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstagramIcon"],
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].social.instagram,
                                        label: 'Instagram'
                                    }
                                ].map(({ Icon, href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": label,
                                        className: "flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Sidebar.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    }, label, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pt-4 text-xs text-muted",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].name,
                                    ". All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Close menu overlay",
                onClick: ()=>setOpen(false),
                className: "fixed inset-0 z-30 bg-black/60 lg:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sidebar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SocialIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FacebookIcon",
    ()=>FacebookIcon,
    "GithubIcon",
    ()=>GithubIcon,
    "InstagramIcon",
    ()=>InstagramIcon,
    "LinkedinIcon",
    ()=>LinkedinIcon,
    "MailIcon",
    ()=>MailIcon,
    "PinterestIcon",
    ()=>PinterestIcon,
    "TelegramIcon",
    ()=>TelegramIcon,
    "WhatsappIcon",
    ()=>WhatsappIcon,
    "XIcon",
    ()=>XIcon,
    "YoutubeIcon",
    ()=>YoutubeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.2_af97c129856baaa88abbba90082084d1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GithubIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.73.8 1.17 1.83 1.17 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.99 10.99 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z"
        }, void 0, false, {
            fileName: "[project]/src/components/SocialIcons.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function LinkedinIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.24 8.25h4.5V23h-4.5V8.25ZM8.5 8.25h4.31v2.02h.06c.6-1.13 2.06-2.33 4.24-2.33 4.54 0 5.38 2.99 5.38 6.88V23h-4.5v-7.28c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V23H8.5V8.25Z"
        }, void 0, false, {
            fileName: "[project]/src/components/SocialIcons.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function XIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.24 2h3.4l-7.43 8.49L23 22h-6.84l-5.36-7.02L4.65 22H1.24l7.95-9.08L1 2h7.02l4.85 6.42L18.24 2Zm-1.2 18.17h1.88L7.05 3.73H5.03L17.04 20.17Z"
        }, void 0, false, {
            fileName: "[project]/src/components/SocialIcons.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function InstagramIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.5",
                y: "2.5",
                width: "19",
                height: "19",
                rx: "5"
            }, void 0, false, {
                fileName: "[project]/src/components/SocialIcons.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4.3"
            }, void 0, false, {
                fileName: "[project]/src/components/SocialIcons.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.4",
                cy: "6.6",
                r: "1.1",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/SocialIcons.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function WhatsappIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.87 9.87 0 0 0 4.62 1.16h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.06c-1.5 0-2.94-.4-4.19-1.16l-.3-.18-3.12.78.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.34c0-4.51 3.67-8.18 8.19-8.18s8.19 3.67 8.19 8.18-3.68 8.25-8.14 8.25Zm4.51-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z"
        }, void 0, false, {
            fileName: "[project]/src/components/SocialIcons.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
function PinterestIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.17-.11-.95-.2-2.41.04-3.45.22-.94 1.42-6 1.42-6s-.36-.72-.36-1.79c0-1.68.97-2.93 2.19-2.93 1.03 0 1.53.77 1.53 1.7 0 1.04-.66 2.6-1 4.04-.29 1.21.6 2.19 1.79 2.19 2.15 0 3.8-2.27 3.8-5.53 0-2.89-2.08-4.92-5.04-4.92-3.44 0-5.45 2.58-5.45 5.24 0 1.04.4 2.15.9 2.76.1.12.11.22.08.35-.09.35-.28 1.13-.32 1.29-.05.2-.17.25-.38.15-1.44-.67-2.34-2.76-2.34-4.44 0-3.61 2.63-6.93 7.57-6.93 3.97 0 7.06 2.83 7.06 6.6 0 3.94-2.48 7.11-5.93 7.11-1.16 0-2.25-.6-2.62-1.31l-.71 2.72c-.26 1-.96 2.24-1.42 3 1.07.33 2.2.51 3.38.51 6.63 0 12-5.37 12-12S18.63 0 12 0Z"
        }, void 0, false, {
            fileName: "[project]/src/components/SocialIcons.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function FacebookIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"
        }, void 0, false, {
            fileName: "[project]/src/components/SocialIcons.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
function YoutubeIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M23.5 7.2s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C17 3.5 12 3.5 12 3.5h-.01s-5 0-8.2.34c-.46.05-1.46.06-2.36 1C.72 5.56.5 7.2.5 7.2S.27 9.13.27 11.05v1.79c0 1.93.23 3.86.23 3.86s.23 1.64.93 2.36c.9.94 2.08.91 2.6 1.01 1.9.18 8.02.34 8.02.34s5.01-.01 8.21-.35c.46-.05 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.23-1.93.23-3.86v-1.79c0-1.93-.23-3.85-.23-3.85ZM9.75 14.98V8.24l6.27 3.38-6.27 3.36Z"
        }, void 0, false, {
            fileName: "[project]/src/components/SocialIcons.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
function TelegramIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.9 3.6 2.7 11.1c-1.28.5-1.27 1.2-.23 1.53l4.93 1.54 11.4-7.2c.54-.33 1.03-.15.63.21L9.9 15.6l-.35 4.94c.5 0 .72-.23.99-.49l2.38-2.31 4.94 3.65c.91.5 1.56.24 1.79-.85l3.24-15.3c.32-1.33-.5-1.93-1.99-1.24Z"
        }, void 0, false, {
            fileName: "[project]/src/components/SocialIcons.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
function MailIcon({ size = 16, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$2_af97c129856baaa88abbba90082084d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.3 7.8-6.3H4.2ZM20 7.4l-7.4 6-.6.46-.6-.46L4 7.4v11.1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.4Z"
        }, void 0, false, {
            fileName: "[project]/src/components/SocialIcons.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SocialIcons.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "about",
    ()=>about,
    "education",
    ()=>education,
    "experience",
    ()=>experience,
    "hasCaseStudy",
    ()=>hasCaseStudy,
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
        label: 'Experience',
        value: '2+ Years'
    },
    {
        label: 'Projects',
        value: '15+'
    },
    {
        label: 'Tech Stack',
        value: '10+'
    },
    {
        label: 'Specialty',
        value: 'Frontend'
    }
];
const heroStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Tailwind CSS'
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
        gallery: [
            '/images/tools-image/scoreX90.webp',
            '/images/case/score90x-ui-1.webp',
            '/images/case/score90x-ui-2.webp'
        ],
        description: 'Football platform providing live match scores, fixtures, standings and football-focused information.',
        categories: [
            'UI/UX',
            'Applications'
        ],
        color: '#0ea5e9',
        year: '2026',
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Football API'
        ],
        featured: true,
        link: 'https://world-cup-score90-x.vercel.app',
        caseStudy: {
            role: 'UI/UX Designer & Frontend Developer',
            duration: '4 weeks',
            tools: [
                'Figma',
                'Next.js',
                'TypeScript',
                'Tailwind CSS'
            ],
            stack: [
                {
                    group: 'Frontend',
                    items: [
                        'Next.js',
                        'TypeScript',
                        'Tailwind CSS'
                    ]
                },
                {
                    group: 'Data & APIs',
                    items: [
                        'Football API',
                        'REST'
                    ]
                },
                {
                    group: 'Design',
                    items: [
                        'Figma'
                    ]
                },
                {
                    group: 'Tools & Deployment',
                    items: [
                        'Git',
                        'GitHub',
                        'VS Code',
                        'Vercel'
                    ]
                }
            ],
            sections: {
                overview: [
                    {
                        title: 'Introduction & Objectives',
                        text: 'What the product is and what it should achieve.'
                    },
                    {
                        title: 'My Role',
                        list: [
                            'UX research',
                            'UI design',
                            'Frontend development'
                        ]
                    },
                    {
                        title: 'Scope',
                        text: 'Web app, mobile-first, live scores and standings.'
                    }
                ],
                research: [
                    {
                        title: 'Problem Statement',
                        text: 'Fans have to check several apps for scores.'
                    },
                    {
                        title: 'Competitor Analysis',
                        list: [
                            'What app A does well',
                            'Where app B falls short'
                        ]
                    },
                    {
                        title: 'User Personas & Pain Points',
                        list: [
                            'Casual fan: wants quick scores',
                            'Hardcore fan: wants stats'
                        ]
                    }
                ],
                ux: [
                    {
                        title: 'User Flow',
                        images: [
                            '/images/case/score90x-flow.webp'
                        ]
                    },
                    {
                        title: 'Low-fidelity Wireframes',
                        images: [
                            '/images/case/score90x-wire.webp'
                        ]
                    }
                ],
                ui: [
                    {
                        title: 'Color Palette',
                        colors: [
                            {
                                name: 'Accent',
                                hex: '#22c55e'
                            },
                            {
                                name: 'Background',
                                hex: '#0b1220'
                            }
                        ]
                    },
                    {
                        title: 'Typography',
                        text: 'Fonts used and why.'
                    },
                    {
                        title: 'High-fidelity Screens',
                        images: [
                            '/images/case/score90x-ui-1.webp',
                            '/images/case/score90x-ui-2.webp'
                        ]
                    }
                ],
                prototype: [
                    {
                        title: 'Interactive Prototype',
                        text: 'Flows and transitions covered in the Figma prototype.'
                    },
                    {
                        title: 'Usability Testing',
                        text: 'Who tested it and what they said.'
                    },
                    {
                        title: 'Design Improvements',
                        list: [
                            'Changed X because of Y'
                        ]
                    }
                ],
                development: [
                    {
                        title: 'Technology Stack',
                        list: [
                            'Next.js',
                            'TypeScript',
                            'Football API'
                        ]
                    },
                    {
                        title: 'Architecture & Components',
                        text: 'How the project is structured.'
                    },
                    {
                        title: 'Performance & Accessibility',
                        list: [
                            'Image optimization',
                            'Keyboard navigation'
                        ]
                    }
                ],
                deployment: [
                    {
                        title: 'Testing',
                        list: [
                            'Cross-device testing',
                            'Browser compatibility'
                        ]
                    },
                    {
                        title: 'Deployment',
                        text: 'Deployed on Vercel.'
                    }
                ],
                conclusion: [
                    {
                        title: 'Challenges & Solutions',
                        text: 'Hardest problem and how you solved it.'
                    },
                    {
                        title: 'Key Learnings',
                        list: [
                            'Lesson 1',
                            'Lesson 2'
                        ]
                    },
                    {
                        title: 'Future Improvements',
                        list: [
                            'Push notifications',
                            'Dark/light themes'
                        ]
                    }
                ]
            }
        }
    },
    {
        slug: 'velonto-food-delivery',
        name: 'Velonto Food Delivery',
        image: '/images/tools-image/velonto.webp',
        description: 'Food delivery platform featuring restaurant discovery, food browsing and ordering experiences.',
        categories: [
            'UI/UX',
            'Web'
        ],
        color: '#f97316',
        year: '2024',
        technologies: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB'
        ],
        featured: true,
        link: 'https://velonto.vercel.app',
        figma: 'https://www.figma.com/proto/...',
        behance: 'https://www.behance.net/gallery/...',
        caseStudy: {
            role: 'UI/UX Designer & Frontend Developer',
            duration: '4 weeks',
            tools: [
                'Figma',
                'Next.js',
                'TypeScript',
                'Tailwind CSS'
            ],
            sections: {
                overview: [
                    {
                        title: 'Introduction & Objectives',
                        text: 'What the product is and what it should achieve.'
                    },
                    {
                        title: 'My Role',
                        list: [
                            'UX research',
                            'UI design',
                            'Frontend development'
                        ]
                    },
                    {
                        title: 'Scope',
                        text: 'Web app, mobile-first, live scores and standings.'
                    }
                ],
                research: [
                    {
                        title: 'Problem Statement',
                        text: 'Fans have to check several apps for scores.'
                    },
                    {
                        title: 'Competitor Analysis',
                        list: [
                            'What app A does well',
                            'Where app B falls short'
                        ]
                    },
                    {
                        title: 'User Personas & Pain Points',
                        list: [
                            'Casual fan: wants quick scores',
                            'Hardcore fan: wants stats'
                        ]
                    }
                ],
                ux: [
                    {
                        title: 'User Flow',
                        images: [
                            '/images/case/score90x-flow.webp'
                        ]
                    },
                    {
                        title: 'Low-fidelity Wireframes',
                        images: [
                            '/images/case/score90x-wire.webp'
                        ]
                    }
                ],
                ui: [
                    {
                        title: 'Color Palette',
                        colors: [
                            {
                                name: 'Accent',
                                hex: '#22c55e'
                            },
                            {
                                name: 'Background',
                                hex: '#0b1220'
                            }
                        ]
                    },
                    {
                        title: 'Typography',
                        text: 'Fonts used and why.'
                    },
                    {
                        title: 'High-fidelity Screens',
                        images: [
                            '/images/case/score90x-ui-1.webp',
                            '/images/case/score90x-ui-2.webp'
                        ]
                    }
                ],
                prototype: [
                    {
                        title: 'Interactive Prototype',
                        text: 'Flows and transitions covered in the Figma prototype.'
                    },
                    {
                        title: 'Usability Testing',
                        text: 'Who tested it and what they said.'
                    },
                    {
                        title: 'Design Improvements',
                        list: [
                            'Changed X because of Y'
                        ]
                    }
                ],
                development: [
                    {
                        title: 'Technology Stack',
                        list: [
                            'Next.js',
                            'TypeScript',
                            'Football API'
                        ]
                    },
                    {
                        title: 'Architecture & Components',
                        text: 'How the project is structured.'
                    },
                    {
                        title: 'Performance & Accessibility',
                        list: [
                            'Image optimization',
                            'Keyboard navigation'
                        ]
                    }
                ],
                deployment: [
                    {
                        title: 'Testing',
                        list: [
                            'Cross-device testing',
                            'Browser compatibility'
                        ]
                    },
                    {
                        title: 'Deployment',
                        text: 'Deployed on Vercel.'
                    }
                ],
                conclusion: [
                    {
                        title: 'Challenges & Solutions',
                        text: 'Hardest problem and how you solved it.'
                    },
                    {
                        title: 'Key Learnings',
                        list: [
                            'Lesson 1',
                            'Lesson 2'
                        ]
                    },
                    {
                        title: 'Future Improvements',
                        list: [
                            'Push notifications',
                            'Dark/light themes'
                        ]
                    }
                ]
            }
        }
    },
    {
        slug: 'adidas-gsap-website',
        name: 'Adidas GSAP Website',
        image: '/images/tools-image/adidas.webp',
        description: 'Animation-focused concept website featuring smooth interactions and modern motion design.',
        categories: [
            'UI/UX',
            'Web'
        ],
        color: '#111827',
        year: '2025',
        technologies: [
            'React',
            'GSAP',
            'JavaScript',
            'CSS'
        ],
        featured: true,
        link: 'https://gsap-addidas-web.vercel.app',
        caseStudy: {
            role: 'UI/UX Designer & Frontend Developer',
            duration: '4 weeks',
            tools: [
                'Figma',
                'Next.js',
                'TypeScript',
                'Tailwind CSS'
            ],
            sections: {
                overview: [
                    {
                        title: 'Introduction & Objectives',
                        text: 'What the product is and what it should achieve.'
                    },
                    {
                        title: 'My Role',
                        list: [
                            'UX research',
                            'UI design',
                            'Frontend development'
                        ]
                    },
                    {
                        title: 'Scope',
                        text: 'Web app, mobile-first, live scores and standings.'
                    }
                ],
                research: [
                    {
                        title: 'Problem Statement',
                        text: 'Fans have to check several apps for scores.'
                    },
                    {
                        title: 'Competitor Analysis',
                        list: [
                            'What app A does well',
                            'Where app B falls short'
                        ]
                    },
                    {
                        title: 'User Personas & Pain Points',
                        list: [
                            'Casual fan: wants quick scores',
                            'Hardcore fan: wants stats'
                        ]
                    }
                ],
                ux: [
                    {
                        title: 'User Flow',
                        images: [
                            '/images/case/score90x-flow.webp'
                        ]
                    },
                    {
                        title: 'Low-fidelity Wireframes',
                        images: [
                            '/images/case/score90x-wire.webp'
                        ]
                    }
                ],
                ui: [
                    {
                        title: 'Color Palette',
                        colors: [
                            {
                                name: 'Accent',
                                hex: '#22c55e'
                            },
                            {
                                name: 'Background',
                                hex: '#0b1220'
                            }
                        ]
                    },
                    {
                        title: 'Typography',
                        text: 'Fonts used and why.'
                    },
                    {
                        title: 'High-fidelity Screens',
                        images: [
                            '/images/case/score90x-ui-1.webp',
                            '/images/case/score90x-ui-2.webp'
                        ]
                    }
                ],
                prototype: [
                    {
                        title: 'Interactive Prototype',
                        text: 'Flows and transitions covered in the Figma prototype.'
                    },
                    {
                        title: 'Usability Testing',
                        text: 'Who tested it and what they said.'
                    },
                    {
                        title: 'Design Improvements',
                        list: [
                            'Changed X because of Y'
                        ]
                    }
                ],
                development: [
                    {
                        title: 'Technology Stack',
                        list: [
                            'Next.js',
                            'TypeScript',
                            'Football API'
                        ]
                    },
                    {
                        title: 'Architecture & Components',
                        text: 'How the project is structured.'
                    },
                    {
                        title: 'Performance & Accessibility',
                        list: [
                            'Image optimization',
                            'Keyboard navigation'
                        ]
                    }
                ],
                deployment: [
                    {
                        title: 'Testing',
                        list: [
                            'Cross-device testing',
                            'Browser compatibility'
                        ]
                    },
                    {
                        title: 'Deployment',
                        text: 'Deployed on Vercel.'
                    }
                ],
                conclusion: [
                    {
                        title: 'Challenges & Solutions',
                        text: 'Hardest problem and how you solved it.'
                    },
                    {
                        title: 'Key Learnings',
                        list: [
                            'Lesson 1',
                            'Lesson 2'
                        ]
                    },
                    {
                        title: 'Future Improvements',
                        list: [
                            'Push notifications',
                            'Dark/light themes'
                        ]
                    }
                ]
            }
        }
    },
    {
        slug: 'talk-tower',
        name: 'Talk Tower',
        image: '/images/tools-image/talk-tower.webp',
        description: 'Education-focused platform concept designed for interactive learning and engaging digital experiences.',
        categories: [
            'UI/UX',
            'Web'
        ],
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
        categories: [
            'UI/UX',
            'Web'
        ],
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
        categories: [
            'UI/UX',
            'Web'
        ],
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
        categories: [
            'UI/UX',
            'Web'
        ],
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
const hasCaseStudy = (p)=>p.categories.includes('UI/UX');
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1625mrm._.js.map