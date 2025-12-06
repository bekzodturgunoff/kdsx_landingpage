import { en } from "./en";
import { uz } from "./uz";
import { ru } from "./ru";
import { ko } from "./ko";

export const translations = {
  en,
  ru,
  ko,
  uz,
} as const;

export type LanguageCode = keyof typeof translations;

export const LANGUAGE_OPTIONS: Array<{ value: LanguageCode; label: string }> = [
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" },
  { value: "ko", label: "한국어" },
];

export const DEFAULT_LANGUAGE: LanguageCode = "en";

// Resolve translations for a given language code (falls back to DEFAULT_LANGUAGE)
export function getTranslations(lang?: string) {
  const code =
    lang && lang in translations ? (lang as LanguageCode) : DEFAULT_LANGUAGE;
  return { code, table: translations[code] };
}

// Factory that returns a translator function: t(key)
export function createT(lang?: string) {
  return (key: keyof typeof en) =>
    translations[
      lang && lang in translations ? (lang as LanguageCode) : DEFAULT_LANGUAGE
    ][key];
}

// Back-compat: if someone still imports t(lang,key)
export function tLegacy(
  lang: string | undefined,
  key: keyof typeof en
): string {
  return createT(lang)(key);
}
