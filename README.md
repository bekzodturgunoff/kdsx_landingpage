# KDSX Landing

![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-Email_API-black?style=for-the-badge&logo=resend&logoColor=white)

A high-performance, professional marketing site built with Astro 5 and Tailwind CSS v4. Deployed on Vercel, integrating an instant-bootstrapping wizard that allows new restaurants to create trials and immediately deploy into their dashboard.

## ✨ Features

- **Blazing Fast Performance:** Leverages Astro 5 with mostly prerendered static pages.
- **Modern Styling:** Designed with the latest Tailwind CSS v4 for a responsive, sleek UI.
- **Instant Account Bootstrap:** Onboarding wizard connects directly to the backend to generate fully functional trial accounts in real-time.
- **Standalone API Support:** Retains `/api/lead` compatibility with Resend via the Vercel serverless adapter.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed. Node 18+ is supported (Node 22 is also fine and matches some serverless runtimes).

> Recommended package manager: `pnpm` (this repository is tracked with `pnpm-lock.yaml`).

### Local Development Flow

1. **Install dependencies:**
   ```bash
   pnpm install
   ```
2. **Set up environment variables:**
   Copy the example environment file and fill in your credentials.
   ```bash
   cp .env.example .env.local
   ```
3. **Start the development server:**
   ```bash
   pnpm dev
   ```
   *Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.*

### Build for Production

To build the project locally or verify the build step:
```bash
pnpm build
```
*Note: The project uses the Vercel adapter (`@astrojs/vercel`) with mostly prerendered pages and a small server output for API routes.*

## 🏗️ Architecture Flow

The core interactive feature of the landing page is the onboarding wizard. Data flow currently happens as follows:

1. **Client Submission (`WizardForm.astro`)**: The user fills out the instant trial wizard, collecting the business name, email, and password. 
2. **Instant Trial Bootstrap**: Once submitted, the form automatically executes a `POST` request to the backend service (defined via `PUBLIC_TRIAL_API_BASE_URL/bootstrap`) to provision a trial kitchen/restaurant right away.
3. **Auto-Login and Redirect**: Upon successful account bootstrap, the form immediately invokes `PUBLIC_TRIAL_API_BASE_URL/auth.signInWithPassword`. When authentication completes, the user is redirected smoothly into the web application at the URL defined by `PUBLIC_DASH_APP_URL`. 
4. **Standalone Lead API (`api/lead.ts`)**: While the primary wizard executes immediate account generation, the repository additionally ships a standalone `/api/lead` serverless endpoint that can route raw leads via email alerts using Resend. 

## 🔐 Current Onboarding Architecture

> **Security Note regarding Password Handling:**
> For operator onboarding convenience within the standalone `/api/lead` endpoint, the current architectural implementation intentionally transports and includes plaintext password values within lead notifications. This is a deliberate product decision and is not considered an immediate blocker for this repository. Please ensure that access to the notification inbox is strictly controlled and handled accordingly.

## ⚙️ Environment Variables

To configure the serverless API, external service integration, and email notifications, you need to set up the following environment variables. In Vercel, navigate to **Project → Settings → Environment Variables**. Locally, add these to your `.env.local` file.

| Variable | Description | Where to get it |
| :--- | :--- | :--- |
| `PUBLIC_TRIAL_API_BASE_URL` | The external REST API base URL used for the bootstrap and sign-in processes (e.g. `https://api.kdsx.com`). | Developer configuration |
| `PUBLIC_DASH_APP_URL` | The URL structure where the dashboard frontend is hosted, used for post-signup redirection (e.g. `https://dash.kdsx.com`). | Developer configuration |
| `RESEND_API_KEY` | API Key used to authenticate with Resend for legacy/standalone lead emails. **(Keep secure)** | [Resend Dashboard](https://resend.com) → API Keys |
| `FROM_EMAIL` | The verified sender email address configured in your Resend account (e.g., `leads@yourdomain.com`). | [Resend Dashboard](https://resend.com) → Domains |
| `TO_EMAIL` | The designated recipient(s) for lead notifications. Can be a single email or a comma-separated list. | Your choice (e.g., `bekzodturgunoff@gmail.com`) |

## 🧪 Testing the Endpoint

Once deployed (or running locally), you can test the serverless endpoint using `curl`. 

Ensure the `RESEND_API_KEY`, `FROM_EMAIL`, and `TO_EMAIL` are securely configured on Vercel before testing production.

```bash
curl -s -X POST https://<your-domain>/api/lead \
	-H "Content-Type: application/json" \
	-d '{
		"businessName": "Test Bistro",
		"email": "test@example.com",
		"password": "secretpassword123",
		"timestamp": "2025-10-28T12:00:00Z"
	}'
```

**Expected Results:**
- **HTTP 200:** Successful delivery via configured channel(s).
- **HTTP 501:** API not configured.
- **HTTP 400:** Bad Request (e.g., invalid JSON or missing Content-Type).

---
*Note: All legacy or archived components have been removed to keep the repository lean.*

## Behavior Notes (what changed recently)

- **Contact wizards show success messages:** All contact/lead modals (the sales/support contact modal) now display a localized success confirmation after submitting the form. The exception is the instant trial `WizardForm.astro` — that component performs an immediate bootstrap + sign-in and redirects the user into the dashboard instead of rendering a local success panel.
- **Contact image uploader:** The contact modal supports attaching an image (client-side only). Images are previewed in the modal and validated client-side (must be an image and ≤ 5MB). There is no server-side image upload in this component by default.
- **Enterprise CTA → Contact modal:** The Enterprise/CUSTOM plan CTA opens the contact modal instead of bootstrapping an account.
- **Default theme:** The site defaults to light theme on first visit; users can toggle and the chosen theme is persisted.

## Localization & Pricing

- **Region-based language & currency:** The landing page infers region/language from the URL segments and the browser environment (where available) and displays localized copy from `src/i18n/*`.
- **Localized price display:** Prices are stored as a USD base value (e.g. `data-base-usd="30"`) and converted client-side for the visitor using `Intl.NumberFormat` and an exchange-rate fallback map. Pretty rounding and compact formatting are applied so prices render as readable localized strings (for example: `359,000 сум`).
- **Strings & translations:** All UI strings are externalized into `src/i18n/` (`en.ts`, `ru.ts`, `ko.ts`, `uz.ts`). Add or update keys there to change copy displayed across the site.

## Branding & Fonts

- The repository references licensed fonts (Circular Std) but the `@font-face` `src` entries are commented out by default to avoid build-time errors if you don't have the licensed font files. To re-enable Circular, place the licensed `.woff2` files into `public/fonts/` and uncomment the `@font-face` `src` values in `src/styles/global.css`.
- Logo assets were standardized: `logo_light.png` / `logo_dark.png` are used depending on theme. Old `/logo.png` references were replaced.

## Testing & Scripts

- **Run tests:** `pnpm test` (Vitest) — unit/integration tests for the landing page. The onboarding wizard tests expect legacy compatibility markers (e.g., `data-step` spans and hidden inputs) which are preserved.
- **Lint:** `pnpm lint`
- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`

## Known Gotchas

- `.vercel` / build artifacts: If you find a committed `.vercel` folder or other build outputs in the repo, remove them from source control. The repo should not contain build artifacts.
- **Contact wizard image uploads:** Intentional client-only preview; if you want to persist uploads, wire the form to your upload endpoint and handle multipart/form-data on the server.
