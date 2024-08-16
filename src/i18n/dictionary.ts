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
    "home.title": "¡Hola! Mi nombre es Flor Luz Duarte 👋",
    "home.small.bio": "Soy Software Developer + Diseñadora + Creadora de contenido técnico + Speaker + Mentora de Buenos Aires, Argentina. Cambié de carrera a los 30 años y me embarqué en un camino de aprendizaje autodidacta que espero nunca acabe. Unicornio Dev es mi espacio para aprender, divulgar, compartir y crear junto con la comunidad.",
    "about.title": "Un poco sobre mi historia",
    "blog.title": "Blog en español",
    "resources.title": "Recursos en español",
    "tutorials.title": "Tutoriales en español",
    "theme.title": "Unicornio dark en español",
    "communities.title": "Comunidades",
    "communities.name": "Nombre",
    "communities.description": "Descripción",
    "communities.invite": "Invitación",
    "communities.invite.text": "Sumate a la comunidad",
    "communities.platform": "Plataforma",
    "talks.title": "Charlas Tech",
    "talks.slides.link": "Descargá la presentación",
    "talks.language": "Idioma",
    "blog.publish": "Fecha de publicación: ",
    "blog.tags.title": "Posteos sobre: ",
    "blog.tags.aria": "Filtrar por tag",
    "thumbnail.aria": "Portada de video en YouTube",
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
    "home.title": "Hi! My name is Flor Luz Duarte 👋",
    "home.small.bio": "I'm a Software Developer + Designer + Tech Content Creator + Speaker + Mentor from Buenos Aires, Argentina. I switched career paths at age 30 and embarked on a self-taught journey I hope never ends. Unicornio Dev is my online space for learning, sharing, and creating among the tech community.",
    "about.title": "A few things about me",
    "blog.title": "Blog in English",
    "resources.title": "Resources in english",
    "tutorials.title": "Tutorials in english",
    "theme.title": "Unicornio Dark in english",
    "communities.title": "Communities",
    "communities.name": "Name",
    "communities.description": "Description",
    "communities.invite": "Invite",
    "communities.invite.text": "Join the community",
    "communities.platform": "Platform",
    "talks.title": "Tech Talks",
    "talks.slides.link": "Download the presentation",
    "talks.language": "Language",
    "blog.publish": "Publish Date: ",
    "blog.tags.title": "Posts tagged with: ",
    "blog.tags.aria": "Filter by tag",
    "thumbnail.aria": "YouTube cover"
  }
} as const;