import type { Project } from "../types/project_types";

export const programmingProjects: Project[] = [
    {
        id: "my-first-project",
        title: "My First Project",
        slug: "my-first-project",
        thumbnail: "",
        categories: ["Full-Stack"],
        tags: ["Web"],
        roles: [
            { title: "Full-Stack Developer" },
        ],
        accentColor: "#000000",
        year: 2026,
        brief: "A short description for the project card.",
        description: "A longer description for the project detail page.",
        problemsToSolve: [
            "Problem one",
            "Problem two",
            "Problem three",
        ],
        links: {
            liveUrl: {
                label: "See The Details",
                url: "https://example.com",
            },
            sourceUrl: {
                label: "See The Details",
                url: "https://github.com/username/repo",
            },
        },
    },
];
