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

    function sanitizeForEmail(input: string) {
      return String(input || "").replace(/[\r\n]+/g, " ").trim().slice(0, 1000);
    }

    const lines = [
      `Business: ${sanitizeForEmail(payload.businessName)}`,
      `Email: ${sanitizeForEmail(payload.email)}`,
      `Submitted: ${sanitizeForEmail(payload.timestamp)}`,
    ];

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
          subject: `Octopos Lead — ${payload.businessName}`,
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
          // Avoid echoing potentially sensitive response bodies back to clients
          failureReasons.push(`Resend returned ${resendResponse.status}`);
        } else {
          delivered = true;
        }
      } catch (error) {
        // Capture the error server-side (monitoring) and avoid leaking details to clients
        failureReasons.push("Resend request failed");
      }
    } else {
      failureReasons.push("Resend API key not configured");
    }

    if (!delivered) {
      // Do not return internal error details to clients
      return new Response(JSON.stringify({ ok: false, delivered: false, error: "Notification delivery failed" }), {
        status: failureReasons.length ? 502 : 501,
        headers: {
          "content-type": "application/json",
          "x-ratelimit-remaining": String(rate.remaining),
          "x-ratelimit-reset": String(rate.resetAt),
          "x-config-warnings": warnings.join(" | "),
        },
      });
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
    return new Response(JSON.stringify({ ok: false, error: "Request failed" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
