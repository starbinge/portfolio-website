export type ProjectType = {
    idProject: string,
    projectName: string,
}

export type ProjectCategory =
    | "Brand Identity"
    | "UI/UX"
    | "Web Redesign"
    | "Mobile App"
    | "Company Deck"
    | "Visual Identity"
    | "Logo Design"
    | "Presentation Design"
    | "Full-Stack"
    | "API"
    | "CLI Tool"
    | "Library"
    | "Open Source";

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
        liveUrl?: ProjectLink;
        sourceUrl?: ProjectLink;
    };
}

