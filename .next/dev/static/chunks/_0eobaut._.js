(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/animated-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedSection",
    ()=>AnimatedSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function AnimatedSection({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        initial: {
            opacity: 0,
            y: 32
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.7,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/animated-section.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = AnimatedSection;
var _c;
__turbopack_context__.k.register(_c, "AnimatedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "caseStudies",
    ()=>caseStudies,
    "services",
    ()=>services,
    "socialFeed",
    ()=>socialFeed,
    "stats",
    ()=>stats,
    "team",
    ()=>team,
    "testimonials",
    ()=>testimonials
]);
const services = [
    {
        title: "Brand Systems",
        description: "We shape distinctive digital identities with art direction, messaging, and premium visual systems."
    },
    {
        title: "Product Design",
        description: "Conversion-conscious interfaces, thoughtful journeys, and interactive design that feels effortless."
    },
    {
        title: "Creative Development",
        description: "High-performance websites and launch experiences with precision motion and editorial execution."
    },
    {
        title: "Growth Storytelling",
        description: "Campaign landing pages, content ecosystems, and social narratives that compound brand equity."
    }
];
const stats = [
    {
        value: "34%",
        label: "average lift in qualified leads"
    },
    {
        value: "4.9/5",
        label: "client satisfaction across launches"
    },
    {
        value: "11",
        label: "markets activated in the last 18 months"
    },
    {
        value: "90+",
        label: "target Lighthouse score for every build"
    }
];
const testimonials = [
    {
        quote: "Lumina helped us look like the company we were becoming, not the startup we used to be.",
        name: "Ariana Chen",
        role: "Chief Marketing Officer, Aster Labs"
    },
    {
        quote: "The launch experience felt cinematic, but the conversion improvements were just as impressive as the design.",
        name: "Miles Whitaker",
        role: "Founder, Solstice Capital"
    },
    {
        quote: "Their team translated complex product value into a premium story our customers instantly understood.",
        name: "Nadia Elson",
        role: "VP Growth, Northline Health"
    }
];
const team = [
    {
        name: "Elena Marrow",
        role: "Founder & Creative Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
        bio: "Leads brand transformation programs for luxury, fintech, and culture-led companies."
    },
    {
        name: "Julian Reese",
        role: "Design Partner",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
        bio: "Builds immersive design systems that balance editorial clarity with product rigor."
    },
    {
        name: "Mina Sato",
        role: "Motion Director",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
        bio: "Specializes in soft motion, tactile transitions, and high-fidelity launch storytelling."
    },
    {
        name: "Noah Vale",
        role: "Technical Lead",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
        bio: "Turns premium concepts into fast, accessible web systems with excellent technical foundations."
    },
    {
        name: "Sofia Laurent",
        role: "Strategy Lead",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
        bio: "Connects positioning, narrative architecture, and go-to-market opportunities across channels."
    }
];
const caseStudies = [
    {
        slug: "aster-labs-rebrand",
        title: "Aster Labs",
        category: "Biotech Platform Repositioning",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
        overview: "Aster Labs needed a future-facing brand and product narrative for enterprise healthcare buyers.",
        problem: "The company had world-class technology but a fragmented digital presence that felt overly technical and under-premium for executive stakeholders.",
        solution: "We reframed the story around confidence, clinical clarity, and measurable impact, then launched a new brand system, website, and investor narrative with motion-led storytelling.",
        results: [
            "41% lift in demo requests within 8 weeks",
            "2.3x increase in average session duration",
            "Secured enterprise conversations with 3 new health networks"
        ]
    },
    {
        slug: "solstice-capital-launch",
        title: "Solstice Capital",
        category: "Wealth Experience Launch",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
        overview: "A next-generation advisory firm wanted a digital experience that felt as bespoke as its client service.",
        problem: "Their existing site blended into the category and failed to communicate exclusivity, trust, or long-term stewardship.",
        solution: "We created an editorial visual language, elevated the typography, and paired it with elegant micro-interactions to reinforce discretion and authority.",
        results: [
            "34% increase in inbound consultations",
            "52% improvement in homepage engagement",
            "Featured in two leading finance publications"
        ]
    },
    {
        slug: "northline-health-growth",
        title: "Northline Health",
        category: "Healthcare Growth Storytelling",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
        overview: "Northline required a more emotional, accessible presentation for a complex patient experience platform.",
        problem: "Stakeholders struggled to align on messaging, and the product benefits were buried beneath dense technical explanations.",
        solution: "We developed a modular story architecture, service explainer visuals, and a responsive content system that could scale across campaigns.",
        results: [
            "29% increase in qualified pipeline from content-led pages",
            "Reduced bounce rate by 18%",
            "Launch assets repurposed across product, sales, and recruitment"
        ]
    },
    {
        slug: "vela-house-membership",
        title: "Vela House",
        category: "Hospitality Membership Platform",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
        overview: "A boutique hospitality group wanted a membership destination that felt intimate, rare, and frictionless.",
        problem: "The existing booking flow felt transactional instead of aspirational, reducing perceived value before prospects ever converted.",
        solution: "We choreographed a cinematic homepage, simplified the booking funnel, and introduced a refined members-only visual rhythm throughout the experience.",
        results: [
            "27% increase in membership applications",
            "19% higher booking completion rate",
            "Significant uplift in branded social mentions after launch"
        ]
    }
];
const blogPosts = [
    {
        slug: "designing-digital-luxury",
        title: "Designing Digital Luxury Without Looking Overdesigned",
        summary: "How to create premium web experiences that feel confident, restrained, and commercially effective.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        author: "Elena Marrow",
        date: "2026-03-12",
        content: [
            "Luxury on the web is less about decoration and more about confidence. The strongest experiences remove friction, let typography breathe, and create a sense of deliberate pace.",
            "We often start with rhythm before color: spacing, hierarchy, and how each section hands off to the next. When the sequence feels calm and inevitable, the entire brand reads as more premium.",
            "Motion then becomes a finishing layer rather than the headline. Soft reveals, subtle parallax, and polished hover states create memorability without becoming noise."
        ]
    },
    {
        slug: "storytelling-for-high-growth-brands",
        title: "Storytelling Systems for High-Growth Brands",
        summary: "A practical framework for translating complex offers into stories that feel both elevated and clear.",
        image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80",
        author: "Sofia Laurent",
        date: "2026-02-20",
        content: [
            "High-growth brands outgrow their messaging faster than they expect. What worked for early adopters often becomes too narrow for new segments, partners, or investors.",
            "A strong storytelling system gives every team a consistent structure: the tension, the transformation, and the proof. This makes the site easier to expand without diluting the brand.",
            "When the system is right, paid media, product marketing, hiring, and launch pages all reinforce one another instead of competing for attention."
        ]
    },
    {
        slug: "why-performance-is-a-brand-signal",
        title: "Why Performance Is a Brand Signal",
        summary: "Premium brands lose credibility when their digital experience feels heavy, delayed, or unrefined.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
        author: "Noah Vale",
        date: "2026-01-28",
        content: [
            "Speed communicates quality. A fast site feels cared for, intentional, and trustworthy before a visitor reads a single sentence.",
            "Performance should be considered inside the creative process, not after it. Image strategy, lazy rendering, and animation budgets all shape how premium the final experience feels.",
            "When design and engineering collaborate early, elegance and performance stop being tradeoffs and become the same discipline."
        ]
    },
    {
        slug: "motion-that-supports-conversion",
        title: "Motion That Supports Conversion",
        summary: "The most effective animation systems guide attention and reduce cognitive load instead of demanding it.",
        image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80",
        author: "Mina Sato",
        date: "2025-12-11",
        content: [
            "Good motion creates orientation. It helps people understand what changed, where to focus next, and what matters most.",
            "For high-end brands, this usually means shorter transitions, fewer competing movements, and a refined sense of physicality in the interface.",
            "The outcome is a calmer experience that feels premium and converts better because every interaction reinforces clarity."
        ]
    }
];
const socialFeed = [
    {
        platform: "Instagram",
        handle: "@luminaatelier",
        caption: "Soft gradients, tactile materials, and a homepage built to feel like a private preview."
    },
    {
        platform: "X",
        handle: "@luminaatelier",
        caption: "Performance is not a constraint on premium design. It is part of the luxury."
    },
    {
        platform: "Instagram",
        handle: "@luminaatelier",
        caption: "A case study in editorial composition for wealth and hospitality brands."
    },
    {
        platform: "X",
        handle: "@luminaatelier",
        caption: "The strongest interfaces don’t compete for attention. They conduct it."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/section-heading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeading({ eyebrow, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/components/ui/section-heading.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "headline-lg",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/section-heading.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "body-lg",
                children: description
            }, void 0, false, {
                fileName: "[project]/components/ui/section-heading.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/section-heading.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonials",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/section-heading.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Testimonials() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-space",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    eyebrow: "Client Voice",
                    title: "Chosen by teams that care how quality feels before it is measured.",
                    description: "Our clients come to us when the brand needs to signal its next level with confidence, calm, and commercial clarity."
                }, void 0, false, {
                    fileName: "[project]/components/home/testimonials.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-6 lg:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].blockquote, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.4
                            },
                            transition: {
                                duration: 0.55,
                                delay: index * 0.12
                            },
                            className: "glass-panel rounded-[1.75rem] p-6 shadow-luxe",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg leading-8 text-foreground/84",
                                    children: [
                                        "“",
                                        testimonial.quote,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/testimonials.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                    className: "mt-6 border-t border-white/10 pt-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: testimonial.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/testimonials.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-foreground/62",
                                            children: testimonial.role
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/testimonials.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/testimonials.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, testimonial.name, true, {
                            fileName: "[project]/components/home/testimonials.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/testimonials.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/testimonials.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/testimonials.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0eobaut._.js.map