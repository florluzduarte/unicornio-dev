import type { TranslationKey } from "@translate/dictionary";

export type FontType = "regular" | "bold";

export interface INavbarItem {
  translationKey: TranslationKey
  subpath: string;
};

export interface ISocialMediaLink {
  icon: string;
  size: number;
  name: string;
  altText: string;
  url: string;
};

export type Languages = "Español" | "Inglés" | "Spanish" | "English";
export type ResourceStatus = string | "No disponible" | "Not available";
export type ShareLink = string | undefined;

export interface ITechTalks {
  title: string;
  order: number;
  language: Languages;
  host: string;
  hostLink: ShareLink;
  event: string;
  eventLink: ShareLink;
  videoLink: ResourceStatus;
  slidesLink: ResourceStatus;
  description: string;
  date: string;
}