# Vite + React + TypeScript Boilerplate (shadcn/ui)

>A minimal, opinionated Vite + React + TypeScript starter prewired with Tailwind CSS and shadcn/ui components. Use this repository as a base for building modern frontend apps.


## Key Features
- Vite 5, React, TypeScript
- Tailwind CSS & shadcn/ui components
- Radix UI, Lucide icons
- Routing, forms, validation, data fetching
- Preconfigured ESLint & TS


## Prerequisites
- Node.js 18+
- Bun, npm, or pnpm

## Quick Start

Choose the package manager you prefer.

Using Bun:

```bash
bun install
bun run dev
```

Using npm:

```bash
npm install
npm run dev
```

Using pnpm:

```bash
pnpm install
pnpm dev
```

Open the app at `http://localhost:8080`

## Available Scripts
- `dev` — Start Vite dev server (hot reload)
- `build` — Produce an optimized production build
- `build:dev` — Build with `development` mode (useful for debugging build output)
- `preview` — Preview the production build locally
- `lint` — Run ESLint across the project

## Example common flows:

```bash
# npm
npm install && npm run dev

# pnpm
pnpm install && pnpm dev
```

## Project tree

```
/
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tailwind.config.ts
├─ bun.lockb
├─ public/
│  ├─ favicon.ico
│  └─ ...
└─ src/
	├─ main.tsx
	├─ App.tsx
	├─ index.css
	├─ pages/
	│  ├─ Index.tsx
	│  └─ NotFound.tsx
	├─ components/
	│  └─ ui/  (shadcn/ui primitives)
	├─ hooks/
	└─ lib/
```

## Notes & best practices
- Use `.env` files and `import.meta.env` for environment configuration.
- Add a `LICENSE` file before publishing.
- Add CI for `install` + `npm run lint` + `npm run build`.
- Keep component primitives in `src/components/ui/` for reuse.

## License
This boilerplate is unlicensed by default. Add a `LICENSE` file if you intend to publish or share this repository with an attached license.

---
