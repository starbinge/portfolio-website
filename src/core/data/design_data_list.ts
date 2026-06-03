import baggyupThumb from "../../assets/thumbnails/BaggyUP.png";
import wonibiThumb from "../../assets/thumbnails/Wonibi.png";
import momentumThumb from "../../assets/thumbnails/Momentum.png";
import perpusnasThumb from "../../assets/thumbnails/Perpustakaan.png";
import atelierThumb from "../../assets/thumbnails/Athelier.png";
import aetherionThumb from "../../assets/thumbnails/Capture_2026-06-03_08-29-34.png";

export type { ProjectCategory, ProjectTag, ProjectRole, ProjectLink, Project } from "../types/project_types";
import type { Project } from "../types/project_types";

export const projects: Project[] = [
    {
        id: "aetherion-logo",
        title: "Aetherion Logo Making",
        slug: "aetherion-logo",
        thumbnail: aetherionThumb,
        categories: ["Logo Design", "Visual Identity"],
        tags: ["Branding", "Indonesia"],
        roles: [
            { title: "Logo Designer" },
            { title: "Brand Designer" },
        ],
        accentColor: "#0B1B3F",
        year: 2026,
        brief:
            "A logo design for Aetherion, the student unity of the Software Engineering major at The Education University of Indonesia.",
        description:
            "Aetherion is the student unity of the Software Engineering major at The Education University of Indonesia (UPI). This project centers on crafting a logo that captures the unity's identity — a collective of students bound by code, creativity, and a shared drive to push the boundaries of software engineering. The mark is designed to feel modern, technical, and forward-looking, reflecting both the academic rigour of the program and the collaborative spirit of its members.",
        problemsToSolve: [
            "Create a logo that represents the unity's identity as future software engineers",
            "Balance a modern, technical aesthetic with the warmth of a student community",
            "Design a mark that scales cleanly from social media avatars to event banners",
        ],
        links: {
            behance: {
                label: "See The Details",
                url: "https://drive.google.com/file/d/1Fa24yXwlB70bQsitX8c4AfEbsq7Nyi3F/view?usp=sharing",
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
                label: "See The Details",
                url: "https://www.behance.net/gallery/220086727/UIUX-DESIGN-MOMENTUM",
            },
            designSystem: {
                label: "See The Details",
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
                label: "See The Details",
                url: "https://www.behance.net/gallery/219750521/RE-DESIGN-Indonesia-E-Library-Website",
            },
            designSystem: {
                label: "See The Details",
                url: "https://www.behance.net/gallery/219750521/RE-DESIGN-Indonesia-E-Library-Website",
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
                label: "See The Details",
                url: "https://www.behance.net/gallery/209718361/MY-2024-PORTOFOLIO",
            },
            designSystem: {
                label: "See The Details",
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
                label: "See The Details",
                url: "https://www.canva.com/design/DAHLecDa4cI/U3RLdq3X2RJvUdQCnNawUg/view?utm_content=DAHLecDa4cI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h78051278ff",
            },
            designSystem: {
                label: "See The Details",
                url: "https://www.canva.com/design/DAHLecDa4cI/U3RLdq3X2RJvUdQCnNawUg/view?utm_content=DAHLecDa4cI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h78051278ff",
            },
        },
    },
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
                label: "See The Details",
                url: "https://www.canva.com/design/DAHLeXcqcJA/nvEIJCX-sJ8Pbij3fYv5vQ/view?utm_content=DAHLeXcqcJA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdea56aae2d",
            },
            designSystem: {
                label: "See The Details",
                url: "https://www.canva.com/design/DAHLeXcqcJA/nvEIJCX-sJ8Pbij3fYv5vQ/view?utm_content=DAHLeXcqcJA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdea56aae2d",
            },
        },
    },
];