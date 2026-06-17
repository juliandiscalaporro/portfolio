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
  videos?: string[];
  documents?: Document[];
  type: "académique" | "personnel" | "associatif";
  pinned?: boolean;
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
    videos: [
      "/images/projects/prisma/video-1.mp4",
    ],
    documents: [
      { name: "Rapport de projet", url: "/documents/prisma/Rapport_final_PRISMA.pdf" },
    ],
    type: "associatif",
    pinned: true,
  },

  // --- Projets personnels ---
  {
    slug: "astray",
    title: "Astray",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: [],
    images: [],
    documents: [],
    type: "personnel",
    pinned: true,
  },
  {
    slug: "simulating-black-hole",
    title: "Simulating a black hole",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: [],
    images: [],
    documents: [],
    type: "personnel",
  },

  // --- Projets de deuxième année ---
  {
    slug: "conception-avion-ecoconception",
    title: "Principe de base de conception avion et écoconception - Industrialisation et méthode de production",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["2ème année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "astronomie",
    title: "Astronomie",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["2ème année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "modeling-asteroid-population",
    title: "Modeling the asteroid population",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["2ème année"],
    images: [],
    documents: [],
    type: "académique",
    pinned: true,
  },
  {
    slug: "production-electrique-hydrogene",
    title: "Production électrique et Hydrogène",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["2ème année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "mecanique-spatiale",
    title: "Mécanique spatiale",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["2ème année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "conception-mission-rentree-atmospherique",
    title: "Projet de conception de mission I : Rentrée atmosphérique",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["2ème année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "methodes-numeriques-spatial",
    title: "Méthodes numériques pour le spatial",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["2ème année"],
    images: [],
    documents: [],
    type: "académique",
  },

  // --- Projets de première année ---
  {
    slug: "modelisation-simulation-numerique-vehicules",
    title: "Modélisation et simulation numérique - application véhicules",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["1ère année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "catia-1",
    title: "Catia I",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["1ère année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "catia-2",
    title: "Catia II",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["1ère année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "modelisation-analyse-dynamique-aeronefs",
    title: "Modélisation et analyse dynamiques des aéronefs",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["1ère année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "analyse-harmonique-ingenieur",
    title: "Analyse harmonique pour l'ingénieur",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["1ère année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "optimisation-convexe",
    title: "Optimisation convexe",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["1ère année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "introduction-sciences-donnees",
    title: "Introduction aux sciences des données",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["1ère année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "initiation-bases-donnees",
    title: "Initiation aux bases de données",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["1ère année"],
    images: [],
    documents: [],
    type: "académique",
  },
  {
    slug: "conduite-gestion-projet",
    title: "Conduite et gestion de projet",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    content: `Décris ici ton projet en détail.

Tu peux expliquer le contexte, les objectifs, la méthode, les résultats et ce que tu as appris.`,
    tags: ["1ère année"],
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
  { category: "Bureautique", items: ["Pack office", "Photoshop", "Adobe Premiere Pro"] },
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
