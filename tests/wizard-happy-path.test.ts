import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("wizard happy path baseline", () => {
  const filePath = path.resolve(process.cwd(), "src/components/WizardForm.astro");
  const source = fs.readFileSync(filePath, "utf-8");

  it("has modal dialog semantics", () => {
    expect(source).toContain('role="dialog"');
    expect(source).toContain('aria-modal="true"');
  });

  it("contains seven wizard steps", () => {
    const matches = source.match(/data-step="\d+"/g) || [];
    expect(matches.length).toBe(7);
  });

  it("has required core inputs and endpoint", () => {
    expect(source).toContain('data-endpoint="/api/lead"');
    expect(source).toContain('name="fullName"');
    expect(source).toContain('name="desiredUsername"');
    expect(source).toContain('name="desiredPassword"');
    expect(source).toContain('name="phone"');
  });
});
