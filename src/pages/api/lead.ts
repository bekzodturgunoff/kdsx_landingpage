import type { APIRoute } from "astro";
import {
  checkRateLimit,
  getClientIp,
  getDeliveryConfig,
  validateLeadPayload,
} from "../../lib/lead";

// API routes must opt out of prerendering so they stay server-rendered.
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return new Response(
        JSON.stringify({ ok: false, error: "Content-Type must be application/json" }),
        {
          status: 415,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const clientIp = getClientIp(request.headers);
    const rate = checkRateLimit(clientIp);
    if (!rate.ok) {
      return new Response(
        JSON.stringify({ ok: false, error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: {
            "content-type": "application/json",
            "x-ratelimit-remaining": "0",
            "x-ratelimit-reset": String(rate.resetAt),
          },
        }
      );
    }

    const data = await request.json();
    const validation = validateLeadPayload(data);
    if (!validation.ok || !validation.payload) {
      return new Response(
        JSON.stringify({ ok: false, error: "Validation failed", details: validation.errors }),
        {
          status: 422,
          headers: {
            "content-type": "application/json",
            "x-ratelimit-remaining": String(rate.remaining),
            "x-ratelimit-reset": String(rate.resetAt),
          },
        }
      );
    }
    const payload = validation.payload;

    const lines = [
      `Plan: ${payload.plan}`,
      `Name: ${payload.fullName}`,
      `Business: ${payload.businessName}`,
      `Locations: ${payload.locations}`,
      `Service style: ${payload.serviceStyle}`,
      `Current POS: ${payload.currentPos}`,
      `Username: ${payload.desiredUsername}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Telegram: ${payload.telegram}`,
      `KakaoTalk: ${payload.kakaotalk}`,
      `Submitted: ${payload.timestamp}`,
    ];

    // Include plaintext password so operators receive credentials.
    if (payload.desiredPassword) {
      lines.splice(7, 0, `Password (plain): ${payload.desiredPassword}`);
    }

    // Delivery options via env vars with runtime validation warnings.
    const config = getDeliveryConfig();
    const { resendApiKey: RESEND_API_KEY, fromEmail: FROM_EMAIL, toEmails: TO_EMAILS, warnings } = config;

    let delivered = false;

    const failureReasons: string[] = [];

    // Try email via Resend if configured
    if (RESEND_API_KEY) {
      try {
        const resendPayload: Record<string, unknown> = {
          from: FROM_EMAIL,
          to: TO_EMAILS,
          subject: `KDSX Lead — ${payload.plan || "N/A"}`,
          text: lines.join("\n"),
        };
        if (payload.email) {
          resendPayload.reply_to = [payload.email];
        }

        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resendPayload),
        });

        if (!resendResponse.ok) {
          const errorText = await resendResponse.text();
          failureReasons.push(
            `Resend returned ${resendResponse.status}: ${errorText}`
          );
        } else {
          delivered = true;
        }
      } catch (error) {
        failureReasons.push(
          `Resend error: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    } else {
      failureReasons.push("Resend API key not configured");
    }

    if (!delivered) {
      const errorMessage =
        failureReasons.join(" | ") || "No notification channel succeeded.";
      return new Response(
        JSON.stringify({ ok: false, delivered, error: errorMessage }),
        {
          status: failureReasons.length ? 502 : 501,
          headers: {
            "content-type": "application/json",
            "x-ratelimit-remaining": String(rate.remaining),
            "x-ratelimit-reset": String(rate.resetAt),
            "x-config-warnings": warnings.join(" | "),
          },
        }
      );
    }

    return new Response(JSON.stringify({ ok: true, delivered: true }), {
      headers: {
        "content-type": "application/json",
        "x-ratelimit-remaining": String(rate.remaining),
        "x-ratelimit-reset": String(rate.resetAt),
        "x-config-warnings": warnings.join(" | "),
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
};
