# Typography Guidelines

A consistent, professional scale keeps the whole site looking cohesive.

## Scale
- H1 (page title): `text-4xl sm:text-5xl md:text-6xl` with `font-semibold tracking-tight`
- H2 (section): `text-3xl sm:text-4xl md:text-5xl` with `font-semibold tracking-tight`
- H3 (card/section subheading): `text-xl sm:text-2xl font-semibold` or `text-2xl` for emphasis
- Body: `text-base sm:text-lg leading-relaxed`
- Quote (testimonials): `text-lg sm:text-2xl font-semibold leading-relaxed`
- Caption/Label (badges, metrics): `text-xs` (uppercase + tracking) or `text-sm` when needed

## Do
- Prefer Tailwind steps over bracket values (avoid `text-[48px]`).
- Keep mobile-first sizing: small on mobile, scale up with `sm:` and `md:`.
- Use the same sizes for the same role across components.

## Don’t
- Mix `text-sm` and `text-lg` for similar roles in the same section.
- Use `text-xs` for body copy—reserve for captions/labels only.

## Examples
- Section heading: `<h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">...` 
- Body paragraph: `<p class="text-base sm:text-lg leading-relaxed">...`
- Card title: `<h3 class="text-xl sm:text-2xl font-semibold">...`

## Notes
- Header nav and language badges intentionally use compact sizes (`text-xs`/`text-sm`) for density.
- If you need a different size for a special case, align with this scale (e.g., use `text-2xl` or `text-5xl`) rather than creating a new bracket size.
