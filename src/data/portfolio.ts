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

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  type: "académique" | "personnel";
};

export const projects: Project[] = [
  {
    title: "Projet 1",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    tags: ["Python", "React", "PostgreSQL"],
    github: "https://github.com/juliandiscalaporro/projet-1",
    image: "/images/projects/projet-1.jpg",
    type: "académique",
  },
  {
    title: "Projet 2",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    tags: ["C++", "Arduino", "IoT"],
    github: "https://github.com/juliandiscalaporro/projet-2",
    image: "/images/projects/projet-2.jpg",
    type: "personnel",
  },
  {
    title: "Projet 3",
    description: "Description courte du projet : ce qu'il fait, le problème qu'il résout, ce que tu as appris.",
    tags: ["Java", "Spring Boot", "Docker"],
    github: "https://github.com/juliandiscalaporro/projet-3",
    demo: "https://mon-projet.vercel.app",
    image: "/images/projects/projet-3.jpg",
    type: "académique",
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  { category: "Programmation", items: ["Python", "C/C++"] },
  { category: "CAO", items: ["React", "Next.js", "Node.js", "SQL"] },
  { category: "Outils", items: ["Git", "Docker", "Linux", "VS Code"] },
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
    school: "Classes Préparatoires aux Grandes Écoles, Centre international de Valbonne",
    degree: "PCSI / PSI*",
    period: "2022 — 2024",
  },
];
