# Developer & AI Contributor Instructions
**Project: KDSX Landing Page**

Welcome to the KDSX Landing repository. When modifying this codebase, adding features, or writing new components, you **must** adhere strictly to the following architectural paradigms. 

Do not deviate or use foreign frameworks (like React/Vue/Svelte) without explicit authorization.

## 1. Core Architecture
- **Framework:** Astro 5.
- **Output Mode:** Server-rendered (using `@astrojs/vercel` adapter). Pages are heavily hydrated via `prerender` by default, except API endpoints.
- **Styling:** Tailwind CSS v4 coupled with strict CSS variables defined in `/src/styles/global.css`.

## 2. Adding a New Page
Routing is fully dynamic based on language prefix. **Do not create hardcoded route files** like `/src/pages/about.astro`.
1. Open `/src/pages/[lang]/[...slug].astro`.
2. Add your new page slug to the `validPages` array (e.g., `'about'`).
3. Add a new conditional block inside the layout:
   ```astro
   {page === 'about' && (
     <main class="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
       <!-- Your content here -->
     </main>
   )}
   ```
4. Update the navigation links in `/src/components/Header.astro` and `/src/components/Footer.astro` to include your new route.

## 3. Adding a New Component
1. Create your component in `/src/components/MyComponent.astro`.
2. Obtain translations passing the extracted language from the URL:
   ```astro
   ---
   import { createT } from "../i18n";
   const pathSegments = Astro.url.pathname.split("/").filter(Boolean);
   const currentLang = pathSegments[0] || "en";
   const t = createT(currentLang);
   ---
   <h1>{t('myComponentTitle')}</h1>
   ```
3. Import and render the component where needed inside `[...slug].astro` or another component.

## 4. Internationalization (i18n) Rules
This project supports English (`en`), Russian (`ru`), Korean (`ko`), and Uzbek (`uz`).
- **Never hardcode text strings** in components. 
- Always define keys in `src/i18n/en.ts` first.
- **CRITICAL:** You must mirror the exact structure to `ru.ts`, `ko.ts`, and `uz.ts`. A missing key in one dictionary will break typescript checking and runtime matching.

## 5. Styling Paradigm & Tailwind v4
- Use Tailwind spacing, typography, and utility classes.
- Rely on built-in project theme variables. Use combinations like:
  - `text-[var(--color-brand-text)] dark:text-[var(--color-brand-text-dark)]`
  - `bg-[var(--color-brand-bg)] dark:bg-[var(--color-brand-bg-dark)]`
- Look at `/src/styles/global.css` to see available color scales and alpha variants.
- Rely on the `dark:` prefix for all theme switching. Do not use CSS-in-JS for toggling themes.

## 6. Client-Side Interactivity (JS)
- **Do not install UI frameworks.** We prefer Vanilla JavaScript.
- Component-scoped JavaScript should rely on `<script is:inline>`.
- **Encapsulation:** Wrap your script logic in an IIFE (Immediately Invoked Function Expression) to prevent global scope pollution.
  ```html
  <script is:inline>
    (function initMyComponent() {
      const el = document.getElementById("my-component-id");
      if (!el) return;
      // logic here
    })();
  </script>
  ```
- Rely on standard DOM APIs (`addEventListener`, `getElementById`, `querySelector`, `classList.toggle`).

## 7. Handling Endpoints
- Place serverless functions in `/src/pages/api/`.
- Export `prerender = false;` explicitly at the top of the file so Astro avoids statically rendering them.
- Reference the `PUBLIC_TRIAL_API_BASE_URL` or internal `/api/` paths consistently through `data-*` attributes handed down to your `<script is:inline>`.
- (See `WizardForm.astro` for an example of handling form parsing, JSON submission, and graceful fallbacks entirely in raw DOM APIs).

## 8. AI Analysis Protocol
Before modifying a particular section of the code, **you must read the surrounding context** and the linked files. Specifically:
- Check how `WizardForm.astro` triggers its IIFE flow.
- Look at how `Layout.astro` enforces HTML language attributes.
- Read how `createT` generates the scoped translation map.
- Cross-reference variables across `.env.example` when altering API payloads.
- **Do not give instructions blindly.** Mirror the existing architecture verbatim.