import type { Locale } from "@/context/language-context";

const ui = {
  es: {
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Estudios",
      contact: "Contacto",
    },
    language: {
      label: "Idioma",
      es: "Español",
      en: "English",
    },
    theme: {
      light: "Modo claro",
      dark: "Modo oscuro",
      toggle: "Tema",
    },
    hero: {
      profileLabel: "Perfil",
      role: "Senior Full-Stack Software Engineer & Project Manager",
      bio: "Ingeniero de Software especializado en liderar equipos técnicos y desarrollar arquitecturas escalables. Transformo requisitos de negocio en soluciones técnicas de alto impacto, enfocándome en la optimización y la eficiencia.",
      contact: "Contactar",
      downloadCv: "Descargar CV",
    },
    skills: {
      kicker: "Stack",
      title: "Impacto técnico por dominio",
      subtitle:
        "Agrupación orientada a producto: cómo construyo, entrego y opero software en producción.",
    },
    projects: {
      kicker: "Portafolio",
      title: "Proyectos Destacados",
      subtitle:
        "Productos y plataformas donde lideré visión técnica, arquitectura y entrega junto a equipos multidisciplinarios.",
      demo: "Ver Demo",
      code: "Código GitHub",
    },
    experience: {
      kicker: "Trayectoria",
      title: "Experiencia Profesional",
      subtitle:
        "Roles donde el liderazgo técnico y la ejecución se tradujeron en resultados medibles para el negocio.",
    },
    education: {
      kicker: "Formación",
      title: "Formación Académica",
      subtitle:
        "Base académica que refuerza decisiones de producto, gestión y arquitectura.",
    },
    contact: {
      kicker: "Contacto",
      title: "Hablemos",
      subtitle:
        "Coordinemos una conversación sobre liderazgo técnico, arquitectura o próximos productos digitales.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar propuesta",
      networks: "Preferís redes? Encontrame también en:",
      errorMessage: "Escribí un mensaje breve para continuar.",
      successMessage:
        "Se abrirá tu cliente de correo con el mensaje listo para enviar.",
    },
    footer: {
      line: "Hecho con Next.js y Tailwind CSS.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    language: {
      label: "Language",
      es: "Spanish",
      en: "English",
    },
    theme: {
      light: "Light mode",
      dark: "Dark mode",
      toggle: "Theme",
    },
    hero: {
      profileLabel: "Profile",
      role: "Senior Full-Stack Software Engineer & Project Manager",
      bio: "Software engineer focused on leading technical teams and building scalable architectures. I turn business requirements into high-impact technical solutions with a strong emphasis on optimization and efficiency.",
      contact: "Get in touch",
      downloadCv: "Download CV",
    },
    skills: {
      kicker: "Stack",
      title: "Technical impact by domain",
      subtitle:
        "Product-oriented grouping: how I build, ship, and run software in production.",
    },
    projects: {
      kicker: "Portfolio",
      title: "Featured projects",
      subtitle:
        "Products and platforms where I led technical vision, architecture, and delivery with cross-functional teams.",
      demo: "Live demo",
      code: "GitHub",
    },
    experience: {
      kicker: "Career",
      title: "Professional experience",
      subtitle:
        "Roles where technical leadership and execution translated into measurable business outcomes.",
    },
    education: {
      kicker: "Education",
      title: "Academic background",
      subtitle:
        "Academic foundation that supports product, management, and architecture decisions.",
    },
    contact: {
      kicker: "Contact",
      title: "Let’s talk",
      subtitle:
        "Let’s schedule a conversation about technical leadership, architecture, or upcoming digital products.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      networks: "Prefer social? You can also find me on:",
      errorMessage: "Please write a short message to continue.",
      successMessage:
        "Your email client will open with the message ready to send.",
    },
    footer: {
      line: "Built with Next.js and Tailwind CSS.",
    },
  },
} as const;

export type UiMessages = (typeof ui)[Locale];

export function getUi(locale: Locale): UiMessages {
  return ui[locale];
}
