export const config = {
  name: "Julian DISCALA PORRO",
  title: "Étudiant en 4e année d'école d'ingénieur en aéronautique et spatiale",
  school: "Ipsa, Institut Polytechnique des Sciences Avancées",
  specialty: "Espace, Lanceurs et Satellites (ELS)",
  tagline: "Passionné par l'espace, la recherche et l'enseignement.",
  email: "julian.discala-porro@ipsa.fr",
  github: "https://github.com/juliandiscalaporro",
  linkedin: "https://www.linkedin.com/in/julian-discalaporro",
  photo: "/images/profile.jpg",
};

export type Document = {
  name: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  images?: string[];
  documents?: Document[];
  type: "académique" | "personnel" | "associatif";
};

export const projects: Project[] = [
  {
    slug: "prisma",
    title: "Prisma",
    description: "Vol de nuit, Bandeaux de LEDs changeant de couleur en fonction de la vitesse de vol, Largage d’un micro CanSat",
    content: `Années : 2024-2025
Type de projet : Minif
Moteur : Pro24 6G
Taille : 1,05 m
Vol de nuit : Balistique

Résultats : Pitot fonctionnel, visibilité du changement de couleur des bandeaux LED lors des différentes phases de vol. Malgré une non-ouverture du parachute, le micro-cansat a été largué après l’apogée et récupéré en parfait état.`,
    tags: ["CAO", "Programmation", "Integration","composites", "électronique", "soudure"],
    image: "/images/projects/prisma/cover.jpg",
    images: [
      "/images/projects/prisma/photo-1.jpg",
      "/images/projects/prisma/photo-2.jpg",
      "/images/projects/prisma/photo-3.jpg",
      "/images/projects/prisma/photo-4.jpg",
      "/images/projects/prisma/photo-5.jpg",
    ],
    documents: [
      { name: "Rapport de projet", url: "/documents/prisma/Rapport_final_PRISMA.pdf" },
    ],
    type: "associatif",
  },
  {
    slug: "projet-2",
    title: "Projet 2",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["C++", "Arduino", "IoT"],
    github: "https://github.com/juliandiscalaporro/projet-2",
    image: "/images/projects/projet-2/cover.jpg",
    images: [],
    documents: [],
    type: "personnel",
  },
  {
    slug: "projet-3",
    title: "Projet 3",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["Java", "Spring Boot", "Docker"],
    github: "https://github.com/juliandiscalaporro/projet-3",
    demo: "https://mon-projet.vercel.app",
    image: "/images/projects/projet-3/cover.jpg",
    images: [],
    documents: [],
    type: "académique",
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  { category: "Programmation", items: ["Python", "C/C++", "SQL", "Matlab"] },
  { category: "CAO", items: ["Catia", "Fusion 360"] },
  { category: "Modélisation", items: ["StarCCM+", "COMSOL", "Patran/Nastran", "STK 13"] },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  description?: string;
};

export const education: Education[] = [
  {
    school: "IPSA, Institut Polytechnique des Sciences Avancées",
    degree: "Diplôme d'ingénieur — Espace, Lanceurs et Satellites (ELS)",
    period: "2024 — 2027",
    description: "Cycle ingénieur avec spécialisation en aérospatiale.",
  },
  {
    school: "Classes Préparatoires aux Grandes Écoles",
    degree: "Centre international de Valbonne, PCSI / PSI*",
    period: "2022 — 2024",
  },
];
