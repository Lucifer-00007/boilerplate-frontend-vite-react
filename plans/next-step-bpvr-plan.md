# Plan for Improving the Overall Performance of the System

## Notes
-
-
-
-


------------------------------------------------------------------------------
## Task List

### Bugs
- []
- []
- []


### New features
- [] `/src/constants` is where all shared constants live. Central place for app-wide constants. Remember to never hard-code any constant string.
- [] Tailwind config (use `class` dark mode & inject CSS var color). 
- [] Tailwind CSS should be used for styling with full dark/light theme support. The configuration must be found in tailwind.config.ts, and global styles in src/index.css.
- [] Note: Why `darkMode: 'class'`? It makes manual toggling straightforward (you add/remove `.dark` on `<html>` or `<body>`). Official doc: dark mode variants and class vs media.
- [] Icons: Lucide React provides modern, customizable icons throughout the application.
- [] `src/hooks/useTheme.ts` — manages theme (uses localStorage, falls back to `prefers-color-scheme`):
- [] Add ESLint + Prettier and `npm run type-check` to CI if absent.
- []
- []


------------------------------------------------------------------------------

