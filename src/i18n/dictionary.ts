export const languages = {
  en: "English",
  es: "Español",
};

export type Lang = "es" | "en";

export const defaultLang = "es";

export const dictionary = {
  es: {
    "nav.home": "Inicio",
    "nav.blog": "Blog",
    "nav.resources": "Recursos",
    "nav.about": "Acerca",
  },
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.resources": "Resources",
    "nav.about": "About",
  }
} as const;