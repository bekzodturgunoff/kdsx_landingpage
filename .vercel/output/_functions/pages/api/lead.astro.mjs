export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.json();
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
      timestamp: String(data.timestamp || (/* @__PURE__ */ new Date()).toISOString())
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
      `Submitted: ${payload.timestamp}`
    ];
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL = process.env.FROM_EMAIL || "leads@kdsx.app";
    const TO_EMAIL = process.env.TO_EMAIL || "info@kdsx.uz";
    const TO_EMAILS = TO_EMAIL.split(",").map((s) => s.trim()).filter(Boolean);
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;
    let stored = false;
    let delivered = false;
    if (SUPABASE_URL && SUPABASE_KEY) {
      try {
        const supabaseResp = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal"
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
            submitted_at: payload.timestamp
          })
        });
        stored = supabaseResp.ok;
      } catch (_) {
        stored = false;
      }
    }
    if (RESEND_API_KEY && FROM_EMAIL) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: TO_EMAILS,
          subject: `KDSX Lead — ${payload.plan || "N/A"}`,
          text: lines.join("\n")
        })
      });
      delivered = true;
    }
    if (SLACK_WEBHOOK_URL) {
      await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: `New KDSX lead:
${lines.join("\n")}` })
      });
      delivered = true;
    }
    if (!delivered) {
      return new Response(JSON.stringify({ ok: false, stored, error: "No notification channel configured (set RESEND_API_KEY and/or SLACK_WEBHOOK_URL)." }), {
        status: 501,
        headers: { "content-type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ ok: true, delivered: true, stored }), {
      headers: { "content-type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
