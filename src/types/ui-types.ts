import type { TranslationKey } from "@translate/dictionary";

export type FontType = "regular" | "bold";

export interface INavbarItem {
  translationKey: TranslationKey
  subpath: string;
};
