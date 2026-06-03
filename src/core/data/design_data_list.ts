import baggyupThumb from "../../assets/thumbnails/BaggyUP.png";
import wonibiThumb from "../../assets/thumbnails/Wonibi.png";
import momentumThumb from "../../assets/thumbnails/Momentum.png";
import perpusnasThumb from "../../assets/thumbnails/Perpustakaan.png";
import atelierThumb from "../../assets/thumbnails/Athelier.png";

export type ProjectCategory =
    | "Brand Identity"
    | "UI/UX"
    | "Web Redesign"
    | "Mobile App"
    | "Company Deck"
    | "Visual Identity"
    | "Logo Design"
    | "Presentation Design";

export type ProjectTag =
    | "Fashion"
    | "Fintech"
    | "Mobile"
    | "Web"
    | "Branding"
    | "Product Design"
    | "Editorial"
    | "Indonesia";

export interface ProjectRole {
    title: string;
}

export interface ProjectLink {
    label: string;
    url: string;
}

export interface Project {
    id: string;
    title: string;
    slug: string;
    thumbnail: string;
    categories: ProjectCategory[];
    tags: ProjectTag[];
    roles: ProjectRole[];
    accentColor: string;
    year: number;
    brief: string;
    description: string;
    problemsToSolve: string[];
    links: {
        behance?: ProjectLink;
        designSystem?: ProjectLink;
    };
}

export const projects: Project[] = [
    {
        id: "baggyup",
        title: "BaggyUP",
        slug: "baggyup",
        thumbnail: baggyupThumb,
        categories: ["Brand Identity", "Visual Identity"],
        tags: ["Fashion", "Branding"],
        roles: [
            { title: "Brand Designer" },
            { title: "Visual Identity" },
        ],
        accentColor: "#1D9E75",
        year: 2024,
        brief:
            "A playful fashion brand for self-expressive teens, built around a multicolor wordmark with embedded character faces.",
        description:
            "BaggyUP is a fashion brand targeting teenagers who love exploring and expressing themselves. The name encodes three layers of meaning — 'Bag' as a vessel for necessities, 'Baggy' meaning bigger and more, and 'Up' for elevation and carrying something forward. The slogan 'Color on, carry on' anchors the brand's emotional promise. The logo system uses playful multicolor letterforms with embedded character faces, available in full wordmark and icon-only variants across multiple background colors.",
        problemsToSolve: [
            "Create a teen-oriented brand identity that feels playful but not childish",
            "Encode the brand's three-layered name meaning visually into a single logo",
            "Build a flexible logo system that works across light, dark, and colored surfaces",
        ],
        links: {
            behance: {
                label: "View on Behance",
                url: "https://www.behance.net/gallery/209718361/MY-2024-PORTOFOLIO",
            },
            designSystem: {
                label: "View Source Design System",
                url: "https://www.behance.net/gallery/209718361/MY-2024-PORTOFOLIO",
            },
        },
    },
    {
        id: "wonibi",
        title: "WONIBI",
        slug: "wonibi",
        thumbnail: wonibiThumb,
        categories: ["Brand Identity", "Logo Design"],
        tags: ["Fintech", "Branding", "Indonesia"],
        roles: [
            { title: "Brand Designer" },
            { title: "Logo Design" },
        ],
        accentColor: "#2C2C2A",
        year: 2024,
        brief:
            "An aspirational fintech brand that hides a bear in its wordmark, playing on the Indonesian pun 'ber-uang' (having money).",
        description:
            "WONIBI is a financial management brand built around aspiration — 'Wanna Be.' The name reflects the brand's mission to help users take control of their financial lives in order to become something more. The wordmark replaces the letter O with a bear head illustration, drawn from an Indonesian linguistic joke where 'beruang' (bear) sounds like 'ber - uang' (having money). The slogan 'Make It Be' completes the phrase, teaching users that wanting to be something new means making it happen themselves.",
        problemsToSolve: [
            "Make a fintech brand feel approachable and motivational rather than corporate",
            "Embed Indonesian cultural wordplay into the logo without losing readability",
            "Create a name and visual system that reinforces the aspirational brand philosophy",
        ],
        links: {
            behance: {
                label: "View on Behance",
                url: "https://www.behance.net/gallery/209718361/MY-2024-PORTOFOLIO",
            },
            designSystem: {
                label: "View Source Design System",
                url: "https://www.behance.net/gallery/209718361/MY-2024-PORTOFOLIO",
            },
        },
    },
    {
        id: "momentum",
        title: "Momentum",
        slug: "momentum",
        thumbnail: momentumThumb,
        categories: ["UI/UX", "Mobile App"],
        tags: ["Mobile", "Product Design"],
        roles: [
            { title: "UI/UX Designer" },
            { title: "Product Design" },
        ],
        accentColor: "#534AB7",
        year: 2024,
        brief:
            "A habit-tracking mobile app with customizable routines and progress heatmaps, wrapped in a clean purple-and-yellow card UI.",
        description:
            "Momentum is a habit-tracking mobile app that helps users build consistency through structured daily activities. Users are welcomed via a relatable problem-first onboarding, then guided to a home dashboard with real-time completion tracking, customizable activities, and weekly, monthly, and yearly habit heatmaps. The visual identity uses purple as a primary color paired with yellow for progress states, on a clean white card-based UI.",
        problemsToSolve: [
            "Help users with unstructured days build trackable daily habits",
            "Design a dashboard that communicates daily progress at a glance",
            "Allow deep habit customization without overwhelming onboarding",
        ],
        links: {
            behance: {
                label: "View on Behance",
                url: "https://www.behance.net/gallery/220086727/UIUX-DESIGN-MOMENTUM",
            },
            designSystem: {
                label: "View Source Design System",
                url: "https://www.behance.net/gallery/220086727/UIUX-DESIGN-MOMENTUM",
            },
        },
    },
    {
        id: "perpusnas",
        title: "Perpusnas Redesign",
        slug: "perpusnas-redesign",
        thumbnail: perpusnasThumb,
        categories: ["Web Redesign", "UI/UX"],
        tags: ["Web", "Indonesia"],
        roles: [
            { title: "UI/UX Designer" },
            { title: "Web Designer" },
        ],
        accentColor: "#185FA5",
        year: 2025,
        brief:
            "A personal redesign of Indonesia's National Library e-library, swapping a cluttered homepage for a reader-first layout with clearer hierarchy.",
        description:
            "A personal redesign of the Perpustakaan Nasional Republik Indonesia e-library website. Motivated by a passion for books and dissatisfaction with the existing site's usability, this project reimagines the homepage with cleaner navigation, a prominent book recommendation section with genre filters, a curated news feed, and an improved footer. The redesign uses a green and white palette aligned with the institution's identity while significantly improving information hierarchy and readability.",
        problemsToSolve: [
            "Replace a cluttered homepage with a clean, reader-first layout",
            "Surface book recommendations and key services more prominently",
            "Improve aesthetics without departing from the institution's existing brand identity",
        ],
        links: {
            behance: {
                label: "View on Behance",
                url: "https://www.behance.net/gallery/219750521/RE-DESIGN-Indonesia-E-Library-Website",
            },
            designSystem: {
                label: "View Source Design System",
                url: "https://www.behance.net/gallery/219750521/RE-DESIGN-Indonesia-E-Library-Website",
            },
        },
    },
    {
        id: "quantum-atelier",
        title: "Quantum Atelier",
        slug: "quantum-atelier",
        thumbnail: atelierThumb,
        categories: ["Company Deck", "Presentation Design"],
        tags: ["Editorial", "Branding"],
        roles: [
            { title: "Presentation Designer" },
            { title: "Brand Strategist" },
        ],
        accentColor: "#1A1A1A",
        year: 2024,
        brief:
            "A company pitch deck for a design studio balancing 'quantum' precision with artisanal craft, told through dark editorial typography.",
        description:
            "Quantum Atelier is a design company whose identity is built on the tension between the scientific exactness of 'quantum' and the artisanal craft of 'Atelier.' This project involved designing a full company pitch deck communicating the studio's belief system, vision, products, and portfolio work. The deck showcases completed projects including music album design and education web design, using a dark editorial aesthetic with high-contrast typography and structured project case study layouts.",
        problemsToSolve: [
            "Build a deck that communicates the studio's philosophy, not just its portfolio",
            "Present case studies in a way that shows design thinking, not just visual output",
            "Create a visual language for the deck that reflects the brand's dark, editorial character",
        ],
        links: {
            behance: {
                label: "View on Behance",
                url: "https://www.behance.net/gallery/217131183/Quantum-Atelier-Company-Profile-Portofolio",
            },
            designSystem: {
                label: "View Source Design System",
                url: "https://www.behance.net/gallery/217131183/Quantum-Atelier-Company-Profile-Portofolio",
            },
        },
    },
];