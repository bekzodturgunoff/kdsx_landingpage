import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Basic shape and coercion
    const payload = {
      plan: String(data.plan || ''),
      fullName: String(data.fullName || ''),
      businessName: String(data.businessName || ''),
      locations: String(data.locations || ''),
      serviceStyle: String(data.serviceStyle || ''),
      currentPos: String(data.currentPos || ''),
      desiredUsername: String(data.desiredUsername || ''),
      desiredPassword: String(data.desiredPassword || ''),
      phone: String(data.phone || ''),
      email: String(data.email || ''),
      telegram: String(data.telegram || ''),
      kakaotalk: String(data.kakaotalk || ''),
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
      // Do not include raw passwords in notifications
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Telegram: ${payload.telegram}`,
      `KakaoTalk: ${payload.kakaotalk}`,
      `Submitted: ${payload.timestamp}`,
    ];

    // Delivery options via env vars (sanitized)
    const rawResendKey = process.env.RESEND_API_KEY?.trim();
    const RESEND_API_KEY = rawResendKey?.replace(/;+$/, '') || '';
    const rawFromEmail = process.env.FROM_EMAIL?.trim();
    const FROM_EMAIL = rawFromEmail?.length ? rawFromEmail : 'onboarding@resend.dev';
    const rawToEmail = process.env.TO_EMAIL?.trim();
    const toEmailFallback = 'bekzodturgunoff@gmail.com';
    const TO_EMAILS = (rawToEmail?.length ? rawToEmail : toEmailFallback)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
    // Optional storage in Supabase (recommended to use SERVICE_ROLE key)
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;

    let stored = false;
    let delivered = false;

    const failureReasons: string[] = [];

    // Store in Supabase if configured
    if (SUPABASE_URL && SUPABASE_KEY) {
      try {
        const supabaseResp = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
          method: 'POST',
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({
            plan: payload.plan,
            full_name: payload.fullName,
            business_name: payload.businessName,
            locations: payload.locations,
            service_style: payload.serviceStyle,
            current_pos: payload.currentPos,
            desired_username: payload.desiredUsername,
            phone: payload.phone,
            email: payload.email,
            telegram: payload.telegram,
            kakaotalk: payload.kakaotalk,
            submitted_at: payload.timestamp,
          }),
        });
        stored = supabaseResp.ok;
        if (!supabaseResp.ok) {
          failureReasons.push(`Supabase returned ${supabaseResp.status}`);
        }
      } catch (error) {
        stored = false;
        failureReasons.push(`Supabase error: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    // Try email via Resend if configured
    if (RESEND_API_KEY) {
      try {
        const resendPayload: Record<string, unknown> = {
          from: FROM_EMAIL,
          to: TO_EMAILS,
          subject: `KDSX Lead — ${payload.plan || 'N/A'}`,
          text: lines.join('\n'),
        };
        if (payload.email) {
          resendPayload.reply_to = [payload.email];
        }

        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(resendPayload),
        });

        if (!resendResponse.ok) {
          const errorText = await resendResponse.text();
          failureReasons.push(`Resend returned ${resendResponse.status}: ${errorText}`);
        } else {
          delivered = true;
        }
      } catch (error) {
        failureReasons.push(`Resend error: ${error instanceof Error ? error.message : String(error)}`);
      }
    } else {
      failureReasons.push('Resend API key not configured');
    }

    // Optionally notify Slack (or any webhook)
    if (SLACK_WEBHOOK_URL) {
      try {
        const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: `New KDSX lead:\n${lines.join('\n')}` }),
        });
        if (!slackResponse.ok) {
          failureReasons.push(`Slack webhook returned ${slackResponse.status}`);
        } else {
          delivered = true;
        }
      } catch (error) {
        failureReasons.push(`Slack error: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    if (!delivered) {
      const errorMessage = failureReasons.join(' | ') || 'No notification channel succeeded.';
      return new Response(JSON.stringify({ ok: false, stored, delivered, error: errorMessage }), {
        status: failureReasons.length ? 502 : 501,
        headers: { 'content-type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true, delivered: true, stored }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }
};
