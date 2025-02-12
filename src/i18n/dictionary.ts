export const languages = {
  es: "Español",
  en: "English",
};

export type Lang = "es" | "en";

export const defaultLang = "es";

export const showDefaultLang = false;

export type TranslationKey = keyof (typeof dictionary)[typeof defaultLang];

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
    "nav.social.links": "Links",
    "nav.aria": "Menú principal",
    "nav.aria.linklogo":
      "Ir a la página de inicio de Florencia Luz Duarte (@unicornio.dev)",
    "footer.nav.aria": "Menú secundario",
    "footer.socialmedia.aria": "Links a redes sociales",
    "footer.license": "Este trabajo está licenciado con",
    "home.title": "¡Hola! Mi nombre es Flor Luz Duarte 👋",
    "home.small.bio":
      "Soy Desarrolladora de Software + Creadora de contenido técnico de Buenos Aires, Argentina. Cambié de carrera a los 30 años y me embarqué en un camino de aprendizaje autodidacta que espero nunca acabe. Unicornio Dev es mi espacio para aprender, divulgar, compartir y crear junto con la comunidad.",
    "home.about.link": "Conoce mi historia -->",
    "home.latest.articles": "Últimos artículos del blog",
    "about.title": "Algunas cosas sobre mi",
    "about.career.change": "Cambiando de carrera a los 30s",
    "about.self.taught": "Ser autodidacta y no morir en el intento",
    "about.goals": "Próximas Metas",
    "about.hobbies": "No todo es programar",
    "blog.title": "Blog en español",
    "blog.back.link": "<-- Volver al blog",
    "blog.series.alert.link": "Ver más posteos de esta serie -->",
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
    "nav.social.links": "Links",
    "nav.aria.linklogo":
      "Go to Florencia Luz Duarte's (@unicornio.dev) home page",
    "footer.nav.aria": "Secondary menu",
    "footer.socialmedia.aria": "Links to social media",
    "footer.license": "This work is licensed under",
    "home.title": "Hi there! My name is Flor Luz Duarte 👋",
    "home.small.bio":
      "I'm a Software Developer + Tech Content Creator from Buenos Aires, Argentina. I switched career paths at age 30 and embarked on a self-taught journey I hope never ends. Unicornio Dev is my online space for learning, sharing, and creating among the tech community.",
    "home.about.link": "Know my story -->",
    "home.latest.articles": "Latest blog posts",
    "about.title": "A few things about me",
    "about.career.change": "Changing career paths at age 30",
    "about.self.taught":
      "How to become a self-taught programmer without dying in the process",
    "about.goals": "Upcoming Goals",
    "about.hobbies": "Not everything has to do with coding",
    "blog.title": "Blog in English",
    "blog.back.link": "<-- Go back to blog",
    "blog.series.alert.link": "View more posts on this series -->",
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
    "thumbnail.aria": "YouTube cover",
  },
} as const;
