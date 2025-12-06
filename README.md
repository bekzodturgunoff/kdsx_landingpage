## KDSX Landing (Astro + Tailwind)

Marketing site built with Astro 5 and Tailwind v4. Deployed on Vercel with a serverless API endpoint to collect leads from the wizard.

### Run locally

```bash
npm install
npm run dev
# open http://localhost:4321
```

### Build

```bash
npm run build
```

Output mode: server (Vercel adapter). Most pages are prerendered static, and the API lives at `/api/lead`.

---

## Wizard submissions

The signup wizard posts JSON to an endpoint defined on the modal container.

- File: `src/components/WizardForm.astro`
- Attribute: `data-endpoint="/api/lead"`

If the endpoint is missing or returns a non‑OK status, the wizard automatically opens the visitor’s email client with a prefilled message to `data-email` (supports comma‑separated addresses; defaults to `bekzodturgunoff@gmail.com`).

### Serverless API

- File: `src/pages/api/lead.ts`
- Behavior: Accepts JSON, then forwards the submission to configured notification channels.
- Notifications supported:
  - Email via Resend (set `RESEND_API_KEY` + `FROM_EMAIL`, `TO_EMAIL`)
- Security: The API intentionally does not include the password field in notifications.
- If no channel is configured, the API returns HTTP 501 so the client falls back to mailto.

### Configure on Vercel

1. Ensure the project is connected to Vercel.
2. In Vercel → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` — Resend API key (store securely, never commit it)
   - `FROM_EMAIL` — Verified sender in Resend (e.g., `leads@yourdomain.com`)
     - `TO_EMAIL` — Recipient(s). Set to `bekzodturgunoff@gmail.com` (or a comma-separated list if you need multiple inboxes).
3. Redeploy the project to ship the serverless function.

For local development, copy `.env.example` to `.env` (or `.env.local`) and provide the same values so the Astro dev server can call the API with your credentials.

_All legacy or archived components have been removed to keep the repository lean._

### Test the endpoint (after deploy)

```bash
curl -s -X POST https://<your-domain>/api/lead \
	-H "Content-Type: application/json" \
	-d '{
		"plan": "starter",
		"fullName": "Test User",
		"businessName": "Test Bistro",
		"locations": "1",
		"serviceStyle": "Cafe",
		"currentPos": "Square",
		"desiredUsername": "test.user",
		"desiredPassword": "secret123",
		"phone": "+82 10-0000-0000",
		"email": "test@example.com",
		"telegram": "@test",
		"kakaotalk": "test",
		"timestamp": "2025-10-28T12:00:00Z"
	}'
```

Expected: HTTP 200 and delivery via configured channel(s). If you receive HTTP 501, the client will open an email fallback on submit.

### Troubleshooting

- HTTP 400 locally: Ensure you send valid JSON with `Content-Type: application/json`.
- HTTP 501 on production: Add `RESEND_API_KEY`/`FROM_EMAIL`/`TO_EMAIL` in Vercel.
- Node version warning locally: Vercel functions run on Node 22; your local Node can differ.
