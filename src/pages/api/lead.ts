import type { APIRoute } from "astro";
import crypto from "node:crypto";

// API routes must opt out of prerendering so they stay server-rendered.
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Basic shape and coercion
    const payload = {
      plan: String(data.plan || ""),
      fullName: String(data.fullName || ""),
      businessName: String(data.businessName || ""),
      locations: String(data.locations || ""),
      serviceStyle: String(data.serviceStyle || ""),
      currentPos: String(data.currentPos || ""),
      desiredUsername: String(data.desiredUsername || ""),
      desiredPassword: String(data.desiredPassword || ""),
      phone: String(data.phone || ""),
      email: String(data.email || ""),
      telegram: String(data.telegram || ""),
      kakaotalk: String(data.kakaotalk || ""),
      timestamp: String(data.timestamp || new Date().toISOString()),
    };

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

    // Always include both plaintext and hashed password so operators receive credentials.
    if (payload.desiredPassword) {
      try {
        const hash = crypto
          .createHash("sha256")
          .update(payload.desiredPassword)
          .digest("hex");
        lines.splice(7, 0, `Password (sha256): ${hash}`);
        lines.splice(7, 0, `Password (plain): ${payload.desiredPassword}`);
      } catch (e) {
        lines.splice(
          7,
          0,
          `Password hashing error: ${e instanceof Error ? e.message : String(e)}`
        );
      }
    }

    // Delivery options via env vars (sanitized)
    const rawResendKey = process.env.RESEND_API_KEY?.trim();
    const RESEND_API_KEY = rawResendKey?.replace(/;+$/, "") || "";
    const rawFromEmail = process.env.FROM_EMAIL?.trim();
    const FROM_EMAIL =
      rawFromEmail?.replace(/;+$/, "") || "onboarding@resend.dev";
    const rawToEmail = process.env.TO_EMAIL?.trim();
    const toEmailFallback = "bekzodturgunoff@gmail.com";
    const TO_EMAILS = (rawToEmail?.length ? rawToEmail : toEmailFallback)
      .split(",")
      .map((s) => s.trim().replace(/;+$/, ""))
      .filter(Boolean);

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
          headers: { "content-type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ ok: true, delivered: true }), {
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
};
