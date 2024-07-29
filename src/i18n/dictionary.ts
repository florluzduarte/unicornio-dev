export const languages = {
  es: "Español",
  en: "English",
};

export type Lang = "es" | "en";

export const defaultLang = "es";

export type TranslationKey = keyof typeof dictionary[typeof defaultLang];

export const dictionary = {
  es: {
    "nav.home": "Inicio",
    "nav.blog": "Blog",
    "nav.resources": "Recursos",
    "nav.about": "Acerca",
    "nav.tutorials": "Tutoriales",
    "nav.theme": "Unicornio Dark",
    "nav.talks": "Charlas Tech",
    "nav.communities": "Comunidades",
    "nav.contact": "Contacto",
    "nav.work": "Portfolio",
    "nav.aria": "Menú principal",
    "nav.aria.linklogo": "Ir a la página de inicio de Florencia Luz Duarte (@unicornio.dev)",
    "footer.nav.aria": "Menú secundario",
    "footer.socialmedia.aria": "Links a redes sociales",
    "footer.license": "Este trabajo está licenciado con",
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
    "nav.tutorials": "Tutorials",
    "nav.theme": "Unicornio Dark",
    "nav.talks": "Tech Talks",
    "nav.communities": "Communities",
    "nav.contact": "Contact",
    "nav.work": "Portfolio",
    "nav.aria": "Main Menu",
    "nav.aria.linklogo": "Go to Florencia Luz Duarte's (@unicornio.dev) home page",
    "footer.nav.aria": "Secondary menu",
    "footer.socialmedia.aria": "Links to social media",
    "footer.license": "This work is licensed under",
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