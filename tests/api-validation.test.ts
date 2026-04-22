import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  checkRateLimit,
  getDeliveryConfig,
  validateLeadPayload,
} from "../src/lib/lead";

describe("lead api validation", () => {
  it("accepts valid payload", () => {
    const result = validateLeadPayload({
      plan: "starter",
      fullName: "Alex Kim",
      businessName: "Green Leaf Bistro",
      locations: "1",
      serviceStyle: "cafe",
      currentPos: "Square",
      desiredUsername: "alex.kim",
      desiredPassword: "secret123",
      phone: "+82 10-1234-5678",
      email: "alex@example.com",
      telegram: "@alex",
      kakaotalk: "alex-id",
      timestamp: new Date().toISOString(),
    });

    expect(result.ok).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it("rejects invalid payload", () => {
    const result = validateLeadPayload({
      plan: "",
      fullName: "A",
      businessName: "",
      locations: "",
      desiredUsername: "ab",
      desiredPassword: "123",
      phone: "12",
      email: "bad-email",
      timestamp: "not-a-date",
    });

    expect(result.ok).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it("returns env warnings when delivery env is not set", () => {
    const config = getDeliveryConfig({});
    expect(config.warnings.length).toBeGreaterThan(0);
    expect(config.toEmails.length).toBeGreaterThan(0);
  });

  it("applies in-memory rate limit", () => {
    let blocked = false;
    for (let i = 0; i < 20; i += 1) {
      const result = checkRateLimit("127.0.0.1", Date.now());
      if (!result.ok) {
        blocked = true;
        break;
      }
    }
    expect(blocked).toBe(true);
  });

  it("does not include sha256 password notification", () => {
    const source = fs.readFileSync(
      path.resolve(process.cwd(), "src/pages/api/lead.ts"),
      "utf-8"
    );
    expect(source.includes("Password (sha256):")).toBe(false);
  });
});
