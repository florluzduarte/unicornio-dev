export const languages = {
  es: "Español",
  en: "English",
};

export type Lang = "es" | "en";

export const defaultLang = "es";

export const dictionary = {
  es: {
    "nav.home": "Inicio",
    "nav.blog": "Blog",
    "nav.resources": "Recursos",
    "nav.about": "Acerca",
    "nav.aria": "Menú principal",
    "home.title": "Página de Flor",
    "about.title": "Sobre Flor",
    "blog.title": "Blog en español",
    "resources.title": "Recursos en español",
    "tutorials.title": "Tutoriales en español",
    "theme.title": "Unicornio dark en español",
    "communities.title": "Comunidades",
    "talks.title": "Charlas Tech",
  },
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.resources": "Resources",
    "nav.about": "About",
    "nav.aria": "Main Menu",
    "home.title": "Flor Page",
    "about.title": "About Flor",
    "blog.title": "Blog in English",
    "resources.title": "Resources in english",
    "tutorials.title": "Tutorials in english",
    "theme.title": "Unicornio Dark in english",
    "communities.title": "Communities",
    "talks.title": "Tech Talks",
  }
} as const;