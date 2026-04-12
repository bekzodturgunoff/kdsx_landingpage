export type LeadPayload = {
  businessName: string;
  email: string;
  password?: string;
  timestamp: string;
};

export type LeadValidationResult = {
  ok: boolean;
  payload?: LeadPayload;
  errors: string[];
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const MAX_LEN = 180;
const EMAIL_MAX_LEN = 254;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 12;

const rateLimitStore = new Map<string, RateLimitEntry>();

function toStringValue(value: unknown, maxLen = MAX_LEN): string {
  return String(value ?? "").trim().slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  if (!email) return true;
  if (email.length > EMAIL_MAX_LEN) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^\+?[\d\s().-]{8,24}$/.test(phone);
}

export function validateLeadPayload(input: unknown): LeadValidationResult {
  const data = (input && typeof input === "object") ? (input as Record<string, unknown>) : {};

  const payload: LeadPayload = {
    businessName: toStringValue(data.businessName, 120),
    email: toStringValue(data.email, EMAIL_MAX_LEN),
    password: toStringValue(data.password, 120),
    timestamp: toStringValue(data.timestamp, 80) || new Date().toISOString(),
  };

  const errors: string[] = [];

  if (!payload.businessName || payload.businessName.length < 2) errors.push("businessName must be at least 2 characters");
  if (!payload.email || !isValidEmail(payload.email)) errors.push("email format is invalid");
  if (Number.isNaN(Date.parse(payload.timestamp))) errors.push("timestamp is invalid");

  if (errors.length) {
    return { ok: false, errors };
  }

  return { ok: true, payload, errors: [] };
}

export function getClientIp(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return headers.get("x-real-ip") || "unknown";
}

export function checkRateLimit(ip: string, now = Date.now()): { ok: boolean; remaining: number; resetAt: number } {
  const key = ip || "unknown";
  const existing = rateLimitStore.get(key);

  if (!existing || now >= existing.resetAt) {
    const next: RateLimitEntry = {
      count: 1,
      resetAt: now + WINDOW_MS,
    };
    rateLimitStore.set(key, next);
    return { ok: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetAt: next.resetAt };
  }

  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return { ok: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  rateLimitStore.set(key, existing);
  return {
    ok: true,
    remaining: Math.max(0, MAX_REQUESTS_PER_WINDOW - existing.count),
    resetAt: existing.resetAt,
  };
}

export function getDeliveryConfig(env: NodeJS.ProcessEnv = process.env) {
  const rawResendKey = env.RESEND_API_KEY?.trim();
  const resendApiKey = rawResendKey?.replace(/;+$/, "") || "";

  const rawFromEmail = env.FROM_EMAIL?.trim();
  const fromEmail = rawFromEmail?.replace(/;+$/, "") || "onboarding@resend.dev";

  const rawToEmail = env.TO_EMAIL?.trim();
  const fallbackEmail = "bekzodturgunoff@gmail.com";
  const toEmails = (rawToEmail?.length ? rawToEmail : fallbackEmail)
    .split(",")
    .map((s) => s.trim().replace(/;+$/, ""))
    .filter(Boolean);

  const warnings: string[] = [];
  if (!resendApiKey) warnings.push("RESEND_API_KEY is missing; API will fallback to client-side mailto");
  if (!rawToEmail) warnings.push("TO_EMAIL is missing; using fallback recipient");

  return {
    resendApiKey,
    fromEmail,
    toEmails,
    warnings,
  };
}
