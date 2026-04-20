Place licensed Circular Std font files here so the site can load them via /fonts/*.woff2.

Expected filenames (used by CSS in src/styles/global.css):

- CircularStd-Medium.woff2  (font-weight 500)
- CircularStd-Bold.woff2    (font-weight 700)

Instructions:
1. Obtain the webfont files from your licensed font provider (foundry or vendor).
2. Copy the `.woff2` files into this folder.
3. Rebuild the site. The fonts will be available at `/fonts/CircularStd-Medium.woff2` and `/fonts/CircularStd-Bold.woff2`.

Notes:
- Circular Std is a commercial font; ensure you have the appropriate license to self-host.
- If you prefer a hosted provider (CDN), replace the `src` URLs in `src/styles/global.css` with the provider URLs.
- If you want additional weights, add them as @font-face entries in `src/styles/global.css` and include matching `font-weight` values.
