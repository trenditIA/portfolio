import type { Locale } from "@/context/language-context";

export const CV_BY_LOCALE: Record<Locale, string> = {
  es: "/cv/CV_LucasOviedo_ES.pdf",
  en: "/cv/CV_LucasOviedo_EN.pdf",
};

export const LINKS = {
  linkedin:
    "https://www.linkedin.com/in/lucas-mart%C3%ADn-oviedo-79a012131/",
  github: "https://github.com/trenditIA",
  email: "lucasoviedolucas@gmail.com",
} as const;

export type LText = { es: string; en: string };

export function t(text: LText, locale: Locale): string {
  return text[locale];
}

export type Project = {
  id: string;
  name: string;
  description: LText;
  technologies: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
};

export const projects: Project[] = [
  {
    id: "axonqbit",
    name: "AxonQbit",
    description: {
      es: "Sitio corporativo para posicionar a la empresa como software factory innovadora. Definí la narrativa, supervisé diseño y desarrollo, y alineé la propuesta de valor con objetivos comerciales de captación.",
      en: "Corporate site to position the company as an innovative software factory. I owned the narrative, oversaw design and development, and aligned the value proposition with commercial acquisition goals.",
    },
    technologies: ["React", "JavaScript"],
    image: "https://i.ibb.co/kVrq2vGK/axon-Qbit-Screen.webp",
    demoUrl: "https://www.axonqbit.com/",
    codeUrl: "https://github.com/trenditIA",
  },
  {
    id: "axonscope-web",
    name: "AxonScope — Marketing",
    description: {
      es: "Landing que comunica la extracción de datos desde webs y APIs para comparar precios y cotizar. Organicé al equipo para lograr claridad funcional, coherencia visual y foco en conversión.",
      en: "Marketing site explaining data extraction from websites and APIs for price comparison and quoting. I led the team toward functional clarity, visual consistency, and conversion-focused UX.",
    },
    technologies: ["React", "JavaScript"],
    image: "https://i.ibb.co/r2DbLrnC/axonscope-Screen.webp",
    demoUrl: "https://axonscope.com/",
    codeUrl: "https://github.com/trenditIA",
  },
  {
    id: "axonscope-app",
    name: "AxonScope — Plataforma",
    description: {
      es: "Plataforma automatizada de recolección y análisis de datos de precios. Diseñé e implementé la arquitectura de scraping que redujo el tiempo de análisis en un 70%, permitiendo a los stakeholders tomar decisiones basadas en datos.",
      en: "Automated platform for collecting and analyzing pricing data. I designed and implemented the scraping architecture that cut analysis time by ~70%, enabling stakeholders to make data-driven decisions faster.",
    },
    technologies: ["Python", "React", "JavaScript", "Node.js", "MongoDB"],
    image: "https://i.ibb.co/7d9mBrvk/axonscope-App-Screen.webp",
    demoUrl: "https://app.axonscope.com/",
    codeUrl: "https://github.com/trenditIA",
  },
];

export type ExperienceItem = {
  title: LText;
  company: string;
  period: LText;
  highlights: { es: string[]; en: string[] };
};

export const experience: ExperienceItem[] = [
  {
    title: {
      es: "Arquitecto Full-Stack Semi-Senior",
      en: "Semi-Senior Full-Stack Architect",
    },
    company: "Centro e-learning",
    period: {
      es: "Septiembre 2025 — Presente",
      en: "September 2025 — Present",
    },
    highlights: {
      es: [
        "Pertenezco a un grupo de desarrollo que brinda soluciones de arquitectura de software al resto de equipos de la organización.",
      ],
      en: [
        "I work in a development group that provides software architecture solutions to teams across the organization.",
      ],
    },
  },
  {
    title: {
      es: "Project Manager & Ingeniero Full-Stack Senior",
      en: "Project Manager & Senior Full-Stack Engineer",
    },
    company: "AxonQbit",
    period: {
      es: "Septiembre 2024 — Presente",
      en: "September 2024 — Present",
    },
    highlights: {
      es: [
        "Lidero el desarrollo técnico del CRM/ERP de la compañía. Optimicé el flujo de CI/CD e implementé prácticas de revisión de código que aumentaron la calidad de entrega.",
        "Coordino proyectos web y de producto, participo en la definición de requerimientos con stakeholders y aporto desarrollo full stack cuando acelera el valor.",
      ],
      en: [
        "I lead technical development of the company’s CRM/ERP. I optimized CI/CD and introduced code review practices that improved delivery quality.",
        "I coordinate web and product initiatives, shape requirements with stakeholders, and contribute full-stack engineering when it accelerates outcomes.",
      ],
    },
  },
  {
    title: {
      es: "Ingeniero de Software Full Stack",
      en: "Full-Stack Software Engineer",
    },
    company: "TrendIT SRL",
    period: {
      es: "Octubre 2022 — Agosto 2024",
      en: "October 2022 — August 2024",
    },
    highlights: {
      es: [
        "Entregué aplicaciones web end-to-end con foco en integración de datos y fiabilidad bajo metodologías ágiles (Scrum).",
        "Implementé pipelines de scraping y APIs que alimentaron decisiones operativas con datos frescos y trazables.",
      ],
      en: [
        "Delivered end-to-end web applications focused on data integration and reliability using agile practices (Scrum).",
        "Built scraping pipelines and APIs that powered operational decisions with fresh, traceable data.",
      ],
    },
  },
  {
    title: {
      es: "Desarrollador Full Stack JR",
      en: "Junior Full-Stack Developer",
    },
    company: "TrendIT SRL",
    period: {
      es: "Octubre 2021 — Octubre 2022",
      en: "October 2021 — October 2022",
    },
    highlights: {
      es: [
        "Desarrollé scrapers (Selenium, Python) y APIs REST en Node.js, con front-end en React.",
        "Colaboré en ceremonias ágiles y seguimiento en Jira, mejorando predictibilidad de entregas.",
      ],
      en: [
        "Developed scrapers (Selenium, Python) and REST APIs in Node.js, with a React front end.",
        "Participated in agile ceremonies and Jira tracking, improving delivery predictability.",
      ],
    },
  },
];

export type EducationItem = {
  degree: LText;
  institution: string;
  period: LText;
  detail: LText;
};

export const education: EducationItem[] = [
  {
    degree: {
      es: "Maestría en Gestión y Administración de Organizaciones",
      en: "Master’s in Management and Administration of Organizations",
    },
    institution: "Universidad Blas Pascal",
    period: {
      es: "2025 — Presente",
      en: "2025 — Present",
    },
    detail: {
      es: "Gestión estratégica de empresas tecnológicas, liderazgo de proyectos y optimización de recursos.",
      en: "Strategic management for technology companies, project leadership, and resource optimization.",
    },
  },
  {
    degree: {
      es: "Liderazgo UX/UI",
      en: "UX/UI Leadership",
    },
    institution: "Universidad Siglo XXI",
    period: { es: "2024", en: "2024" },
    detail: {
      es: "Metodologías centradas en el usuario y colaboración eficiente con equipos multidisciplinarios.",
      en: "User-centered methodologies and effective collaboration with cross-functional teams.",
    },
  },
  {
    degree: {
      es: "Ingeniería Informática",
      en: "Computer Engineering",
    },
    institution: "Universidad Blas Pascal",
    period: { es: "2017 — 2023", en: "2017 — 2023" },
    detail: {
      es: "Bases sólidas en desarrollo de software, algoritmos, bases de datos y sistemas aplicados a producto.",
      en: "Strong foundations in software development, algorithms, databases, and systems applied to product engineering.",
    },
  },
];

export const skillGroups = [
  {
    title: "Backend Development",
    items: ["Node.js", "Python / Scrapy", "MongoDB"],
    icon: "server" as const,
  },
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "Tailwind CSS"],
    icon: "layout" as const,
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "Jenkins"],
    icon: "cloud" as const,
  },
];
