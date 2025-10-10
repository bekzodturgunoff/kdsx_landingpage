import { en } from "./en";
import { uz } from "./uz";
import { ru } from "./ru";
import { ko } from "./ko";

export const translations = {
  en,
  uz,
  ru,
  ko,
} as const;

export type LanguageCode = keyof typeof translations;

export const LANGUAGE_OPTIONS: Array<{ value: LanguageCode; label: string }> = [
  { value: "en", label: "English" },
  { value: "uz", label: "Oʻzbekcha" },
  { value: "ru", label: "Русский" },
  { value: "ko", label: "한국어" },
];

export const DEFAULT_LANGUAGE: LanguageCode = "en";
