# Plan for Improving the Overall Performance of the System

## Notes
- All hardcoded strings moved to `/src/constants/index.ts`
- Dark mode implemented with `useTheme` hook and theme toggle component
- Tailwind CSS configured with class-based dark mode
- Type checking script added to package.json


------------------------------------------------------------------------------
## Task List

### Bugs
- []
- []
- []


### New features
- [x] `/src/constants` is where all shared constants live. Central place for app-wide constants. Remember to never hard-code any constant string. Check if any any hardcodes value in `./src` then move all of them to `/src/constants/`

- [x] Add a `dark mode` using `shadcn`
    - [x] Tailwind CSS should be used for styling with full dark/light theme support. The configuration 
    - [x] Tailwind config (use `class` dark mode & inject CSS var color) must be found in tailwind.config.ts, and global styles in src/index.css.
    - [x] Note: Why `darkMode: 'class'`? It makes manual toggling straightforward (you add/remove `.dark` on `<html>` or `<body>`). Official doc: dark mode variants and class vs media.

- [x] Icons: Lucide React provides modern, customizable icons throughout the application.

- [x] `src/hooks/useTheme.ts` — manages theme (uses localStorage, falls back to `prefers-color-scheme`):

- [x] Add ESLint + Prettier and `npm run type-check` to CI if absent(skip is already present).

- []
- []


------------------------------------------------------------------------------

