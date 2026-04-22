import { describe, expect, it } from "vitest";
import { LANGUAGE_OPTIONS, translations } from "../src/i18n";

describe("i18n parity", () => {
  it("includes Uzbek in language options", () => {
    const values = LANGUAGE_OPTIONS.map((item) => item.value);
    expect(values).toContain("uz");
  });

  it("keeps all translation keys aligned with English", () => {
    const baseKeys = Object.keys(translations.en).sort();

    for (const [lang, table] of Object.entries(translations)) {
      const langKeys = Object.keys(table).sort();
      expect(langKeys, `${lang} keys mismatch`).toEqual(baseKeys);
    }
  });

  it("has Uzbek theme labels", () => {
    expect(translations.uz.themeLight).toBeTruthy();
    expect(translations.uz.themeDark).toBeTruthy();
  });
});
