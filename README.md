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

Make sure you have Node.js installed (Node 22 is recommended to match Vercel's serverless runtime).

### Local Development Flow

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment variables:**
   Copy the example environment file and fill in your credentials.
   ```bash
   cp .env.example .env.local
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.*

### Build for Production

To build the project locally or verify the build step:
```bash
npm run build
```
*Note: The project uses Vercel adapter (`output: 'server'`), keeping most pages statically prerendered while enabling the serverless API.*

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
