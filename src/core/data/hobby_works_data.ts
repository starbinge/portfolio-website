export type HobbyMedium =
    | "Poster"
    | "Illustration"
    | "Typography"
    | "Photo Manipulation"
    | "Digital Art"
    | "Print"
    | "Concept Art";

export interface HobbyWork {
    id: string;
    title: string;
    medium: HobbyMedium;
    year: number;
    thumbnail: string;
    note?: string;
}

export const hobbyWorks: HobbyWork[] = [
    {
        id: "hobby-1",
        title: "Untitled Poster #01",
        medium: "Poster",
        year: 2025,
        thumbnail: "https://placehold.co/600x450/1A1A1A/D91A1A?text=Poster+01",
        note: "A spontaneous poster, no brief, no client.",
    },
    {
        id: "hobby-2",
        title: "Quiet Morning",
        medium: "Illustration",
        year: 2025,
        thumbnail: "https://placehold.co/600x450/2C2C2A/FFFFFF?text=Illustration+02",
        note: "A study in soft light and slow hours.",
    },
    {
        id: "hobby-3",
        title: "Letters in the Wild",
        medium: "Typography",
        year: 2024,
        thumbnail: "https://placehold.co/600x450/0B1B3F/FFFFFF?text=Typography+03",
        note: "Playing with letterforms just because.",
    },
    {
        id: "hobby-4",
        title: "Static Bloom",
        medium: "Photo Manipulation",
        year: 2024,
        thumbnail: "https://placehold.co/600x450/534AB7/FFFFFF?text=Photo+Manip+04",
    },
    {
        id: "hobby-5",
        title: "Not A Brief",
        medium: "Digital Art",
        year: 2026,
        thumbnail: "https://placehold.co/600x450/1D9E75/FFFFFF?text=Digital+Art+05",
        note: "Made at 2am. No regrets.",
    },
    {
        id: "hobby-6",
        title: "Risograph Memory",
        medium: "Print",
        year: 2024,
        thumbnail: "https://placehold.co/600x450/185FA5/FFFFFF?text=Print+06",
    },
];
