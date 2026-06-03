# Portfolio App — Editorial Design Portfolio

A single-page portfolio website built with React 19, TypeScript, and Vite. Designed as an editorial magazine — sections have numbered titles, pull quotes, drop caps, and scroll-triggered fade-in animations.

## Tech Stack

- **React 19** + **TypeScript** (with `verbatimModuleSyntax`)
- **Vite 8** (fast build, code-splitting via `React.lazy`)
- **React Router v7** (browser routing, scroll-to-top on navigation)
- **EmailJS** (contact form, no backend required)
- **ESLint** (flat config, type-aware rules)

## Project Structure

```
src/
├── animations/           # Custom hooks (cursor trail)
├── assets/               # Images, SVGs, icons
├── components/           # Shared UI components
│   ├── navbar.tsx        # Top nav with route navigation
│   ├── reveal.tsx        # Scroll-triggered fade/slide animation
│   ├── toast.tsx         # Auto-dismiss notification popup
│   ├── section_label.tsx # Numbered editorial section header
│   ├── scroll_to_top.tsx # Reset scroll position on route change
│   ├── school_container.tsx / job_container.tsx
│   └── short_text_input.tsx / text_area.tsx
├── core/
│   ├── constants/        # Route definitions
│   ├── data/             # Project, hobby, and starterpack data
│   └── types/            # TypeScript interfaces
├── layouts/              # Main layout wrapper
├── pages/
│   ├── main_page/        # Homepage (hero, bio, cup-of-tea, contact)
│   ├── list_page/        # Project listing (directed works, hobby, tools)
│   ├── detail_page/      # Individual project detail view
│   └── not_found_page/   # Editorial 404 page
└── routes/               # Router configuration (lazy-loaded)
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up EmailJS (contact form)

Copy the example env file and fill in your credentials:

```bash
cp .env.example .env
```

Get your credentials from [EmailJS](https://www.emailjs.com/):
- **Service ID** — created in EmailJS dashboard
- **Template ID** — created in EmailJS "Email Templates"
- **Public Key** — found in Account → API Keys

The email template must use these variable names: `{{name}}`, `{{email}}`, `{{message}}`.

### 3. Start development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) + production build |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

## How to Extend

### Add a new project

Edit `src/core/data/design_data_list.ts`:

```ts
export const projects: Project[] = [
  {
    id: "my-project",
    typeId: "1",
    thumbnail: myThumbnail,               // import the image
    title: "My Project",
    brief: "Short description for the card.",
    roles: [{ title: "UI/UX Design" }, { title: "Development" }],
    links: {
      behance: {
        url: "https://behance.net/...",
        label: "See The Details",
      },
    },
    // detail page content...
  },
];
```

### Add a reusable animation

Wrap any element with `<Reveal>` — it fades in and slides up when scrolled into view:

```tsx
<Reveal delay={200}>
  <p>This appears with a 200ms delay</p>
</Reveal>
```

### Add a new route

1. Define the path in `src/core/constants/route_const.ts`
2. Lazy-import the page component in `src/routes/routes.tsx`
3. Add the route entry to the router

## Key Features

- **Editorial design** — numbered sections, drop caps, pull quotes, section labels with "§"
- **Scroll animations** — `<Reveal>` component using IntersectionObserver
- **EmailJS contact form** — idle/sending/success/error states with validation
- **Toast notifications** — auto-dismissing popup for form feedback
- **Cursor trail** — animated images follow the cursor on the hero section
- **Code splitting** — each page is a separate lazy-loaded chunk
- **Scroll-to-top** — automatic on every route change
- **Responsive tool grid** — flexbox fallback for odd-numbered items
