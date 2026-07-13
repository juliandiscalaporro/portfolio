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
    description: "Simulation numérique (RK4, Python) de la dynamique à long terme de l'astéroïde rétrograde 2007 VW266, premier co-orbital rétrograde connu de Jupiter, en comparaison avec Connors & Wiegert (2018).",
    content: `Années : 2025-2026 (Ci421c — Modelling the asteroid population, J. Desmars)
Équipe : Julian Discala Porro, Kevin De Oliveira Simoes, Corentin Planchon
Référence : Connors & Wiegert (2018), Planetary and Space Science 151:71-77

2007 VW266 est un astéroïde rétrograde trans-jovien (inclinaison i ≈ 108,4°), identifié par Connors & Wiegert (2018) comme le premier co-orbital rétrograde connu de Jupiter, verrouillé dans la résonance de moyen mouvement 13:−14.

Objectif : reproduire ces résultats à partir des premiers principes, avec un intégrateur RK4 codé "from scratch" en Python et un modèle simplifié à deux perturbateurs (Jupiter + Saturne, képlériens).

Méthode :
- Équations du mouvement héliocentriques (repère écliptique J2000) incluant le terme direct et le terme indirect (réaction des planètes sur le Soleil), indispensable à la conservation de l'énergie.
- Jupiter et Saturne traités comme képlériens fixes ; résolution de l'équation de Kepler par Newton.
- Choix de l'intégrateur validé par comparaison Euler / RK2 / RK4 sur un cas test : seul RK4 (pas h = 1 jour) conserve le demi-grand axe à mieux que 10⁻⁶ AU sur 100 ans.
- Construction progressive du modèle : particule test sur Jupiter circulaire, puis Jupiter elliptique réel, puis 2007 VW266 avec Jupiter seul (100 ans), puis modèle complet Jupiter + Saturne sur ~12 000 ans.
- Propagation Monte Carlo : N = 100 clones (Jupiter seul, 100 ans) et N = 5 clones (Jupiter + Saturne, ~12 000 ans), tirages gaussiens sur les éléments orbitaux initiaux dans leurs incertitudes observationnelles.

Résultats : l'orbite est stable sur 10⁴ ans et traverse quatre phases dynamiques distinctes — évolution résonante stable (0-6 000 ans, mécanisme de Kozai-Lidov), excitation séculaire (6 000-7 500 ans), perturbation majeure avec perte temporaire de la protection résonante (~7 500-9 500 ans, a → 5,0 UA, e → 0,50, i → 118°), puis re-stabilisation. Ces résultats sont en accord qualitatif avec Connors & Wiegert (2018) : période séculaire de Kozai (~8 000 ans), épisode de perturbation et recapture post-perturbation. Saturne modifie les échelles de temps séculaires mais ne change pas qualitativement la dynamique : Jupiter reste le moteur dynamique dominant.`,
    tags: ["2ème année", "Mécanique spatiale", "Python", "RK4", "Monte Carlo"],
    image: "/images/projects/modeling-asteroid-population/cover.png",
    images: [],
    documents: [
      { name: "Rapport de projet (poster + compte-rendu)", url: "/documents/modeling-asteroid-population/Rapport_2007VW266.pdf" },
    ],
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

export type ProjectGroup = "2A" | "1A" | "P" | "A";

export function projectGroup(p: Project): ProjectGroup {
  if (p.tags.includes("2ème année")) return "2A";
  if (p.tags.includes("1ère année")) return "1A";
  if (p.type === "associatif") return "A";
  return "P";
}

/** Référence de dossier façon archive technique, ex. « 2A-03 », « P-01 ». */
export function projectRef(p: Project): string {
  const group = projectGroup(p);
  const index = projects
    .filter((x) => projectGroup(x) === group)
    .findIndex((x) => x.slug === p.slug);
  return `${group}-${String(index + 1).padStart(2, "0")}`;
}

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
