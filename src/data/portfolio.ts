// Tout le contenu du site, en français et en anglais.
// Pour modifier un texte : change la valeur `fr` et/ou `en`.

export type Lang = "fr" | "en";
export type T = { fr: string; en: string };
export const tr = (t: T, lang: Lang) => t[lang];
// "français|english" ; sans "|", le même mot dans les deux langues
const tg = (...xs: string[]): T[] => xs.map((x) => { const [fr, en] = x.split("|"); return { fr, en: en ?? fr }; });

export const config = {
  name: "Julian Discala Porro",
  role: {
    fr: "Élève ingénieur en dernière année à l'IPSA, spécialité Espace, Lanceurs et Satellites",
    en: "Final-year aerospace engineering student at IPSA, Space, Launchers and Satellites track",
  },
  intro: {
    fr: "Je travaille sur les orbites : les prédire, les mesurer au télescope, les reconstruire. Après un stage à l'Observatoire de la Côte d'Azur, je cherche un stage de fin d'études en laboratoire d'astrophysique (février à août 2027), pour poursuivre en doctorat.",
    en: "I work on orbits: predicting them, measuring them through a telescope, reconstructing them. After an internship at the Observatoire de la Côte d'Azur, I am looking for a final-year research internship in an astrophysics lab (February to August 2027), with a PhD in view.",
  },
  email: "julian.discala-porro@ipsa.fr",
  github: "https://github.com/juliandiscalaporro",
  linkedin: "https://www.linkedin.com/in/julian-discalaporro",
  photo: "/images/profile.jpg",
  heroImage: "/images/stage/calern-coupole-nuit.jpg",
  heroCaption: {
    fr: "La coupole du télescope UniversCity, plateau de Calern, 2026",
    en: "The UniversCity telescope dome, Calern plateau, 2026",
  },
  // Ajoute ici le CV anglais quand il sera prêt : { fr: "...FR.pdf", en: "...EN.pdf" }
  cv: {
    fr: "/documents/cv/CV_Julian_DiscalaPorro_FR.pdf",
    en: "/documents/cv/CV_Julian_DiscalaPorro_FR.pdf",
  },
  cvIsTranslated: { fr: true, en: false },
};

// ─── Expérience professionnelle ────────────────────────────────────────────

export type Photo = { src: string; alt: T; w: number; h: number };

export type Experience = {
  role: T;
  org: T;
  place: T;
  period: T;
  summary: T;
  paragraphs: T[];
  results: { value: T; label: T }[];
  figure?: { src: string; caption: T; w: number; h: number };
  video?: { url: string; label: T };
  illustration: Photo;
  tags: T[];
};

export const experiences: Experience[] = [
  {
    role: { fr: "Stagiaire ingénieur, sous-système GNSS", en: "Engineering intern, GNSS subsystem" },
    org: {
      fr: "Centre spatial universitaire Côte d'Azur, Observatoire de la Côte d'Azur",
      en: "Côte d'Azur University Space Centre, Observatoire de la Côte d'Azur",
    },
    place: {
      fr: "Laboratoires Géoazur (Sophia-Antipolis) et Lagrange (Nice)",
      en: "Géoazur (Sophia-Antipolis) and Lagrange (Nice) laboratories",
    },
    period: { fr: "Juin à septembre 2026", en: "June to September 2026" },
    summary: {
      fr: "NiceCube est un CubeSat de 4 kg qui doit établir une liaison laser avec le sol depuis le plateau de Calern. Pour pointer le laser, la station doit savoir où sera le satellite avant qu'il n'apparaisse. Ma question : combien de temps une orbite calculée par le récepteur GPS/Galileo reste-t-elle assez juste pour viser ?",
      en: "NiceCube is a 4 kg CubeSat that must set up a laser link with the ground from the Calern plateau. To aim the laser, the station has to know where the satellite will be before it rises. My question: how long does an orbit computed by the onboard GPS/Galileo receiver stay accurate enough to aim at?",
    },
    paragraphs: [
      {
        fr: "J'ai d'abord remonté l'exigence jusqu'au besoin réel de pointage. La spécification demandait ±10 m ; j'ai montré que ±100 m suffisent, ce qui reste sous l'erreur d'attitude du satellite. La revue de projet s'est appuyée sur ce résultat.",
        en: "I first traced the requirement back to the actual pointing need. The specification asked for ±10 m; I showed that ±100 m is enough, which stays below the satellite's attitude error. The project review relied on this result.",
      },
      {
        fr: "J'ai ensuite mesuré ce que valent des orbites réelles, sur le satellite GRACE puis sur les données de nanosatellites Spire fournies par l'UCAR, et écrit mes propres chaînes de prédiction en Python : ellipse ajustée, précession J2, puis propagation numérique avec estimation de la traînée. Un simulateur de 60 jours m'a permis de chiffrer la durée de validité d'une orbite selon l'activité solaire.",
        en: "I then measured how good real orbits are, on the GRACE satellite and then on Spire nanosatellite data provided by UCAR, and wrote my own prediction pipelines in Python: fitted ellipse, J2 precession, then numerical propagation with drag estimation. A 60-day simulator let me quantify how long an orbit stays valid depending on solar activity.",
      },
      {
        fr: "Enfin, au télescope UniversCity de Calern, j'ai photographié le satellite Galileo 5 pendant une nuit et reconstruit son orbite à partir de mes propres images. La mesure atteint 0,13 seconde d'arc ; c'est la datation des images qui limite. J'ai présenté la partie GNSS à la revue de phase A du projet, devant une trentaine de personnes.",
        en: "Finally, at the UniversCity telescope in Calern, I imaged the Galileo 5 satellite over one night and reconstructed its orbit from my own images. The astrometry reaches 0.13 arcseconds; image time-tagging is what limits it. I presented the GNSS part at the project's phase A review, in front of about thirty people.",
      },
    ],
    results: [
      {
        value: { fr: "±100 m", en: "±100 m" },
        label: {
          fr: "exigence de position que j'ai proposée, au lieu de ±10 m",
          en: "position requirement I proposed, instead of ±10 m",
        },
      },
      {
        value: { fr: "12,8 h", en: "12.8 h" },
        label: {
          fr: "durée pendant laquelle une orbite reste dans cette classe, avec la traînée calibrée",
          en: "time an orbit stays within that class, with calibrated drag",
        },
      },
      {
        value: { fr: "750 m", en: "750 m" },
        label: {
          fr: "écart typique entre un TLE public et l'orbite précise d'un nanosatellite Spire",
          en: "typical gap between a public TLE and the precise orbit of a Spire nanosatellite",
        },
      },
      {
        value: { fr: "88 poses", en: "88 frames" },
        label: {
          fr: "pour reconstruire l'orbite de Galileo 5 au télescope, à 0,13″ près",
          en: "to reconstruct Galileo 5's orbit at the telescope, to 0.13″",
        },
      },
    ],
    figure: {
      src: "/images/stage/erreur-prediction.jpg",
      w: 1474,
      h: 691,
      caption: {
        fr: "Erreur de prédiction en fonction de l'âge de la donnée, issue de mon simulateur : l'erreur croît comme le carré du temps et se fait presque entièrement le long de la trace.",
        en: "Prediction error versus data age, from my simulator: the error grows with the square of time and is almost entirely along-track.",
      },
    },
    video: {
      url: "https://youtu.be/2k6W17yNLSE",
      label: {
        fr: "Voir la vidéo : pointer un satellite depuis la coupole de Calern",
        en: "Watch the video: tracking a satellite from the Calern dome",
      },
    },
    illustration: { src: "/images/stage/calern-coupole-crepuscule.jpg", w: 900, h: 1600, alt: { fr: "La coupole UniversCity au crépuscule, plateau de Calern", en: "The UniversCity dome at dusk, Calern plateau" } },
    tags: tg("Python", "gLAB", "SGP4", "satkit", "STK", "astrométrie|astrometry", "Gaia"),
  },
];

// ─── Projets ───────────────────────────────────────────────────────────────

export type Document = { name: T; url: string };

export type Project = {
  slug: string;
  title: T;
  kind: T;
  period: T;
  status: "done" | "ongoing";
  description: T;
  content: T[];
  facts?: { label: T; value: T }[];
  tags: T[];
  github?: string;
  demo?: string;
  image?: string;
  imageCredit?: T;
  imageFit?: "cover" | "contain";
  images?: { src: string; caption?: T }[];
  videos?: string[];
  documents?: Document[];
};

export const projects: Project[] = [
  {
    slug: "planete-9",
    title: { fr: "Planète 9", en: "Planet Nine" },
    kind: { fr: "Projet Master IPSA", en: "IPSA Master Project" },
    period: { fr: "2026 – 2027", en: "2026 – 2027" },
    status: "ongoing",
    description: {
      fr: "Les orbites des objets les plus lointains du Système solaire pointent-elles vraiment dans la même direction ? Et si oui, une neuvième planète en est-elle la cause ?",
      en: "Do the orbits of the most distant objects in the Solar System really point the same way? And if so, is a ninth planet the cause?",
    },
    content: [
      {
        fr: "Au-delà de Neptune, une poignée d'objets très lointains, comme Sedna, ont des orbites qui semblent regroupées dans la même direction. En 2016, Batygin et Brown ont proposé qu'une planète de quelques masses terrestres, encore jamais observée, les maintienne alignées. Dix ans plus tard, le débat n'est pas tranché : une partie des chercheurs pense que l'alignement est réel, l'autre qu'il vient de la façon dont ces objets ont été découverts.",
        en: "Beyond Neptune, a handful of very distant objects such as Sedna have orbits that appear clustered in the same direction. In 2016, Batygin and Brown proposed that a planet of a few Earth masses, never observed, keeps them aligned. Ten years later the debate is still open: some researchers think the clustering is real, others that it comes from the way these objects were discovered.",
      },
      {
        fr: "Notre projet suit ces deux pistes. D'un côté, nous ajoutons une planète 9 à notre modèle numérique d'objets transneptuniens et testons la stabilité et l'alignement des orbites sur des millions d'années (simulation N-corps). De l'autre, nous testons si l'alignement observé peut s'expliquer par les biais des relevés d'observation.",
        en: "Our project follows both leads. On one side, we add a Planet Nine to our numerical model of trans-Neptunian objects and test the stability and clustering of the orbits over millions of years (N-body simulation). On the other, we test whether the observed clustering can be explained by survey biases.",
      },
      {
        fr: "Le projet vient de démarrer : la première étape a été une synthèse de treize articles, de Trujillo et Sheppard (2014) aux premiers résultats de l'observatoire Rubin (2026). Cette page sera complétée au fil de l'année.",
        en: "The project has just started: the first step was a review of thirteen papers, from Trujillo and Sheppard (2014) to the first results of the Rubin Observatory (2026). This page will be updated through the year.",
      },
    ],
    facts: [
      { label: { fr: "Méthode", en: "Method" }, value: { fr: "Simulation N-corps, test de biais observationnels", en: "N-body simulation, observational bias testing" } },
      { label: { fr: "Point de départ", en: "Starting point" }, value: { fr: "Batygin & Brown (2016), Siraj, Chyba & Tremaine (2025)", en: "Batygin & Brown (2016), Siraj, Chyba & Tremaine (2025)" } },
    ],
    tags: tg("Python", "N-corps|N-body", "TNO", "mécanique céleste|celestial mechanics"),
    image: "/images/projects/pmi/orbites-lointaines.jpg",
    imageCredit: {
      fr: "Orbites des objets lointains connus et orbite supposée de la planète 9 (violet). Image : Nrco0e, Wikimedia Commons, CC BY-SA 4.0",
      en: "Orbits of known distant objects and the proposed Planet Nine orbit (purple). Image: Nrco0e, Wikimedia Commons, CC BY-SA 4.0",
    },
    images: [
      {
        src: "/images/projects/pmi/sednoides.jpg",
        caption: {
          fr: "Les quatre sednoïdes connus en 2025, dont 2023 KQ14. Image : Nrco0e, Wikimedia Commons, CC BY-SA 4.0",
          en: "The four sednoids known in 2025, including 2023 KQ14. Image: Nrco0e, Wikimedia Commons, CC BY-SA 4.0",
        },
      },
    ],
  },
  {
    slug: "neptune",
    title: { fr: "Mission vers Neptune", en: "A mission to Neptune" },
    kind: { fr: "Projet de mécanique spatiale", en: "Space mechanics project" },
    period: { fr: "Mars 2026", en: "March 2026" },
    status: "done",
    description: {
      fr: "Concevoir une mission vers Neptune avec une assistance gravitationnelle de Jupiter, d'abord à la main, puis dans STK Astrogator.",
      en: "Designing a mission to Neptune with a Jupiter gravity assist, first by hand, then in STK Astrogator.",
    },
    content: [
      {
        fr: "Deux questions : combien coûte, en ΔV, l'envoi d'une nouvelle sonde vers Neptune, et quelle est la meilleure période de lancement ? Seule Voyager 2 a visité la planète, en 1989.",
        en: "Two questions: what does it cost, in ΔV, to send a new probe to Neptune, and when is the best time to launch? Only Voyager 2 has ever visited the planet, in 1989.",
      },
      {
        fr: "Nous avons d'abord choisi une trajectoire avec le NASA Trajectory Browser, en comparant toutes les solutions selon le ΔV total et la durée. Nous l'avons ensuite recalculée avec la méthode des coniques raccordées : hyperbole de départ, transfert héliocentrique, survol hyperbolique de Jupiter, puis arc vers Neptune.",
        en: "We first picked a trajectory with the NASA Trajectory Browser, comparing every solution by total ΔV and duration. We then recomputed it with the patched-conics method: departure hyperbola, heliocentric transfer, hyperbolic Jupiter flyby, then the leg to Neptune.",
      },
      {
        fr: "Dans STK Astrogator, deux simulations explorent deux choix : une croisière lente optimisée avec l'outil de Lambert et un survol balistique, et une croisière rapide avec une poussée au périjove de Jupiter (effet Oberth). Le ciblage du survol se fait dans le plan B (B·T, B·R). Les deux approches donnent un coût de 7 à 9 km/s pour atteindre Neptune, ce qui rend la mission faisable avec un lanceur lourd.",
        en: "In STK Astrogator, two simulations explore two design choices: a slow cruise optimised with the Lambert tool and a ballistic flyby, and a fast cruise with a powered burn at Jupiter's perijove (Oberth effect). Flyby targeting is done in the B-plane (B·T, B·R). Both approaches give a cost of 7 to 9 km/s to reach Neptune, which makes the mission feasible with a heavy launcher.",
      },
    ],
    facts: [
      { label: { fr: "Lancement", en: "Launch" }, value: { fr: "23 février 2031", en: "23 February 2031" } },
      { label: { fr: "Survol de Jupiter", en: "Jupiter flyby" }, value: { fr: "Juillet 2032", en: "July 2032" } },
      { label: { fr: "Arrivée à Neptune", en: "Neptune arrival" }, value: { fr: "Octobre 2037 à mai 2039", en: "October 2037 to May 2039" } },
      { label: { fr: "ΔV pour atteindre Neptune", en: "ΔV to reach Neptune" }, value: { fr: "7,3 à 8,9 km/s", en: "7.3 to 8.9 km/s" } },
    ],
    tags: tg("STK Astrogator", "coniques raccordées|patched conics", "plan B|B-plane", "Lambert"),
    image: "/images/projects/neptune/survol-jupiter.jpg",
    images: [
      { src: "/images/projects/neptune/dv-duree.jpg", caption: { fr: "ΔV total en fonction de la durée de mission pour toutes les trajectoires candidates", en: "Total ΔV versus mission duration for every candidate trajectory" } },
      { src: "/images/projects/neptune/depart-terre.jpg", caption: { fr: "Départ de la Terre (STK)", en: "Earth departure (STK)" } },
      { src: "/images/projects/neptune/transfert.jpg", caption: { fr: "Transfert héliocentrique vers Jupiter (STK)", en: "Heliocentric transfer to Jupiter (STK)" } },
      { src: "/images/projects/neptune/arrivee-neptune.jpg", caption: { fr: "Arrivée et capture à Neptune (STK)", en: "Arrival and capture at Neptune (STK)" } },
    ],
    documents: [
      { name: { fr: "Rapport du projet (en anglais)", en: "Project report" }, url: "/documents/neptune/Rapport_mission_Neptune.pdf" },
    ],
  },
  {
    slug: "borealis",
    title: { fr: "BORÉALIS", en: "BORÉALIS" },
    kind: { fr: "Projet associatif, AeroIPSA", en: "Student association project, AeroIPSA" },
    period: { fr: "2026 – 2027", en: "2026 – 2027" },
    status: "ongoing",
    description: {
      fr: "Un ballon stratosphérique lancé depuis Calern pour tester en vol la liaison laser du CubeSat NiceCube, mené avec l'Observatoire de la Côte d'Azur.",
      en: "A stratospheric balloon launched from Calern to flight-test the laser link of the NiceCube CubeSat, run with the Observatoire de la Côte d'Azur.",
    },
    content: [
      {
        fr: "BORÉALIS prolonge mon stage : avant de viser un satellite, la station sol optique de Calern peut s'entraîner sur une cible plus lente. Une fusée vole quelques dizaines de secondes, sous de fortes accélérations ; un ballon monte pendant deux à trois heures jusqu'à 25 à 30 km, presque sans vibrations. C'est la cible idéale pour aligner et suivre.",
        en: "BORÉALIS extends my internship: before aiming at a satellite, the Calern optical ground station can practise on a slower target. A rocket flies for a few tens of seconds under strong accelerations; a balloon climbs for two to three hours up to 25–30 km, with almost no vibration. It is the ideal target to align and track.",
      },
      {
        fr: "Pour le centre spatial universitaire, le ballon portera des coins de cube visés par le laser de la station, une carte radio et la carte SPINO. Pour AeroIPSA, il mesurera l'atmosphère : rayonnement cosmique secondaire avec un tube Geiger-Müller, rayons X avec une photodiode PIN, champ magnétique, et filmera tout le vol.",
        en: "For the university space centre, the balloon will carry corner-cube reflectors targeted by the station's laser, a radio board and the SPINO board. For AeroIPSA, it will measure the atmosphere: secondary cosmic rays with a Geiger-Müller tube, X-rays with a PIN photodiode, the magnetic field, and film the whole flight.",
      },
      {
        fr: "Le projet a été accepté par l'association en septembre 2026, avec un budget de 1 500 € pour la plateforme et les expériences. Je le porte avec Nathan Deliot et Yahia Taia ; nous recrutons l'équipe et préparons l'inscription auprès du CNES et de Planète Sciences.",
        en: "The association approved the project in September 2026, with a €1,500 budget for the platform and experiments. I lead it with Nathan Deliot and Yahia Taia; we are recruiting the team and preparing the registration with CNES and Planète Sciences.",
      },
    ],
    facts: [
      { label: { fr: "Altitude visée", en: "Target altitude" }, value: { fr: "25 à 30 km", en: "25–30 km" } },
      { label: { fr: "Durée de vol", en: "Flight time" }, value: { fr: "2 à 3 h", en: "2–3 h" } },
      { label: { fr: "Nacelle", en: "Gondola" }, value: { fr: "≤ 1,8 kg", en: "≤ 1.8 kg" } },
      { label: { fr: "Mon rôle", en: "My role" }, value: { fr: "Co-responsable du projet", en: "Project co-lead" } },
    ],
    tags: tg("ballon|balloon", "liaison optique|optical link", "capteurs|sensors", "gestion de projet|project management"),
    image: "/images/projects/borealis/plateau-calern.jpg",
    imageCredit: { fr: "Le plateau de Calern, site de lancement envisagé", en: "The Calern plateau, the planned launch site" },
  },
  {
    slug: "2007-vw266",
    title: { fr: "L'astéroïde rétrograde 2007 VW266", en: "The retrograde asteroid 2007 VW266" },
    kind: { fr: "Projet de recherche, Modelling the asteroid population", en: "Research project, Modelling the asteroid population" },
    period: { fr: "2025 – 2026", en: "2025 – 2026" },
    status: "done",
    description: {
      fr: "Simuler sur 12 000 ans le premier co-orbital rétrograde connu de Jupiter, avec un intégrateur écrit de zéro en Python.",
      en: "Simulating Jupiter's first known retrograde co-orbital over 12,000 years, with an integrator written from scratch in Python.",
    },
    content: [
      {
        fr: "2007 VW266 tourne autour du Soleil dans le sens inverse des planètes (inclinaison de 108°). Connors et Wiegert (2018) ont montré qu'il partage l'orbite de Jupiter, verrouillé dans une résonance 13:−14. Notre objectif : retrouver ce résultat à partir des premiers principes.",
        en: "2007 VW266 orbits the Sun in the opposite direction to the planets (108° inclination). Connors and Wiegert (2018) showed that it shares Jupiter's orbit, locked in a 13:−14 resonance. Our goal: recover this result from first principles.",
      },
      {
        fr: "Nous avons écrit un intégrateur Runge-Kutta d'ordre 4 en Python, après l'avoir comparé à Euler et RK2 : seul RK4 conserve le demi-grand axe à mieux que 10⁻⁶ UA sur 100 ans. Le modèle a été construit par étapes, de Jupiter circulaire jusqu'au système complet Jupiter et Saturne, avec le terme indirect indispensable à la conservation de l'énergie. Des clones Monte-Carlo, tirés dans les incertitudes d'observation, testent la robustesse du résultat.",
        en: "We wrote a fourth-order Runge-Kutta integrator in Python, after comparing it with Euler and RK2: only RK4 conserves the semi-major axis to better than 10⁻⁶ AU over 100 years. The model was built step by step, from a circular Jupiter up to the full Jupiter and Saturn system, including the indirect term needed for energy conservation. Monte Carlo clones, drawn within the observational uncertainties, test how robust the result is.",
      },
      {
        fr: "L'orbite reste stable sur 10 000 ans et traverse quatre phases : évolution résonante stable (mécanisme de Kozai-Lidov), excitation séculaire, perte temporaire de la protection résonante, puis re-stabilisation. C'est en accord qualitatif avec Connors et Wiegert : Saturne modifie les échelles de temps, mais Jupiter reste le moteur de la dynamique.",
        en: "The orbit stays stable over 10,000 years and goes through four phases: stable resonant evolution (Kozai-Lidov mechanism), secular excitation, temporary loss of resonant protection, then re-stabilisation. This agrees qualitatively with Connors and Wiegert: Saturn changes the timescales, but Jupiter remains the driver of the dynamics.",
      },
    ],
    facts: [
      { label: { fr: "Intégrateur", en: "Integrator" }, value: { fr: "RK4, pas de 1 jour", en: "RK4, 1-day step" } },
      { label: { fr: "Durée simulée", en: "Simulated span" }, value: { fr: "≈ 12 000 ans", en: "≈ 12,000 years" } },
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "Avec K. De Oliveira Simoes et C. Planchon", en: "With K. De Oliveira Simoes and C. Planchon" } },
    ],
    tags: tg("Python", "RK4", "Monte-Carlo", "résonance|resonance"),
    image: "/images/projects/modeling-asteroid-population/orbite-3d-saturne.jpg",
    imageFit: "contain",
    images: [
      { src: "/images/projects/modeling-asteroid-population/orbite-3d.jpg", caption: { fr: "Orbite héliocentrique de 2007 VW266 avec Jupiter et Saturne, sur 100 ans", en: "Heliocentric orbit of 2007 VW266 with Jupiter and Saturn, over 100 years" } },
      { src: "/images/projects/modeling-asteroid-population/monte-carlo-12000-ans.jpg", caption: { fr: "Éléments orbitaux des clones Monte-Carlo sur 12 000 ans", en: "Orbital elements of the Monte Carlo clones over 12,000 years" } },
      { src: "/images/projects/modeling-asteroid-population/poster.jpg", caption: { fr: "Le poster du projet", en: "The project poster" } },
    ],
    documents: [
      { name: { fr: "Rapport et poster (en anglais)", en: "Report and poster" }, url: "/documents/modeling-asteroid-population/Rapport_2007VW266.pdf" },
    ],
  },
  {
    slug: "gaia-606",
    title: { fr: "Retrouver le géocroiseur Gaia-606", en: "Recovering the near-Earth object Gaia-606" },
    kind: { fr: "Projet d'astronomie et d'astrométrie", en: "Astronomy and astrometry project" },
    period: { fr: "Mai 2026", en: "May 2026" },
    status: "done",
    description: {
      fr: "À partir d'images brutes du télescope de 1,20 m de l'Observatoire de Haute-Provence, détecter un astéroïde, mesurer sa position et l'identifier.",
      en: "From raw images taken with the 1.20 m telescope at Haute-Provence Observatory, detect an asteroid, measure its position and identify it.",
    },
    content: [
      {
        fr: "Gaia-606 est le premier géocroiseur détecté par le réseau de suivi au sol du satellite Gaia, en 2016. Gaia balaie le ciel et ne revoit pas un objet assez vite pour calculer son orbite : ce sont des télescopes au sol qui prennent le relais. Nous avons refait toute cette chaîne sur les 20 images d'origine.",
        en: "Gaia-606 is the first near-Earth object detected by the ground follow-up network of the Gaia satellite, in 2016. Gaia scans the sky and does not revisit an object quickly enough to compute its orbit: ground telescopes take over. We redid this whole chain on the 20 original images.",
      },
      {
        fr: "Calibration des images (offset et plat médians), repérage de l'objet en mouvement par clignotement sous DS9, mesure de sa trajectoire en pixels, solution astrométrique avec Astrometry.net, puis passage en coordonnées équatoriales. La comparaison avec le Minor Planet Center identifie l'objet comme (508555) 2016 UV56 : position à moins d'une seconde d'arc, vitesse à 4 % près.",
        en: "Image calibration (median bias and flat), spotting the moving object by blinking in DS9, measuring its trajectory in pixels, astrometric solution with Astrometry.net, then conversion to equatorial coordinates. Comparison with the Minor Planet Center identifies the object as (508555) 2016 UV56: position within one arcsecond, speed within 4%.",
      },
    ],
    facts: [
      { label: { fr: "Télescope", en: "Telescope" }, value: { fr: "T120, Observatoire de Haute-Provence", en: "T120, Haute-Provence Observatory" } },
      { label: { fr: "Vitesse mesurée", en: "Measured speed" }, value: { fr: "0,416″ par minute", en: "0.416″ per minute" } },
      { label: { fr: "Identification", en: "Identification" }, value: { fr: "(508555) 2016 UV56", en: "(508555) 2016 UV56" } },
    ],
    tags: tg("Python", "astrométrie|astrometry", "DS9", "Astrometry.net"),
    image: "/images/projects/gaia-606/champ.jpg",
    images: [
      { src: "/images/projects/gaia-606/mouvement-ciel.jpg", caption: { fr: "Mouvement de Gaia-606 en coordonnées équatoriales", en: "Motion of Gaia-606 in equatorial coordinates" } },
      { src: "/images/projects/gaia-606/mouvement-pixels.jpg", caption: { fr: "Trajectoire mesurée sur les images, en pixels", en: "Trajectory measured on the images, in pixels" } },
    ],
    documents: [
      { name: { fr: "Rapport (en anglais)", en: "Report" }, url: "/documents/astronomie/Rapport_Gaia-606.pdf" },
    ],
  },
  {
    slug: "prisma",
    title: { fr: "PRISMA", en: "PRISMA" },
    kind: { fr: "Projet associatif, AeroIPSA", en: "Student association project, AeroIPSA" },
    period: { fr: "2024 – 2025", en: "2024 – 2025" },
    status: "done",
    description: {
      fr: "Une minifusée de vol de nuit : bandeaux LED qui changent de couleur avec la vitesse, tube de Pitot et largage d'un micro-CanSat.",
      en: "A night-flying mini rocket: LED strips that change colour with speed, a Pitot tube and a micro-CanSat release.",
    },
    content: [
      {
        fr: "PRISMA est une minifusée de 1,05 m, propulsée par un moteur Pro24 6G, conçue pour un vol balistique de nuit. Les bandeaux LED changent de couleur selon la vitesse mesurée par un tube de Pitot, ce qui rend chaque phase du vol visible depuis le sol.",
        en: "PRISMA is a 1.05 m mini rocket powered by a Pro24 6G motor, designed for a ballistic night flight. Its LED strips change colour according to the speed measured by a Pitot tube, making each flight phase visible from the ground.",
      },
      {
        fr: "J'ai travaillé sur l'électronique embarquée, les composites et l'intégration. En vol, le Pitot a fonctionné et les changements de couleur étaient bien visibles. Le parachute ne s'est pas ouvert, mais le micro-CanSat a été largué après l'apogée et récupéré en parfait état.",
        en: "I worked on the onboard electronics, composites and integration. In flight, the Pitot tube worked and the colour changes were clearly visible. The parachute did not open, but the micro-CanSat was released after apogee and recovered intact.",
      },
    ],
    facts: [
      { label: { fr: "Moteur", en: "Motor" }, value: { fr: "Pro24 6G", en: "Pro24 6G" } },
      { label: { fr: "Longueur", en: "Length" }, value: { fr: "1,05 m", en: "1.05 m" } },
      { label: { fr: "Vol", en: "Flight" }, value: { fr: "Balistique, de nuit", en: "Ballistic, at night" } },
    ],
    tags: tg("CAO|CAD", "électronique|electronics", "composites", "soudure|soldering", "intégration|integration"),
    image: "/images/projects/prisma/couverture.jpg",
    images: [
      { src: "/images/projects/prisma/photo-1.jpg" },
      { src: "/images/projects/prisma/photo-2.jpg" },
      { src: "/images/projects/prisma/photo-3.jpg" },
      { src: "/images/projects/prisma/photo-5.jpg" },
    ],
    videos: ["/images/projects/prisma/video-1.mp4"],
    documents: [
      { name: { fr: "Rapport de projet", en: "Project report (French)" }, url: "/documents/prisma/Rapport_final_PRISMA.pdf" },
    ],
  },
];


// ─── Autres projets (liste courte, sans page) ──────────────────────────────
// Pour donner une page à l'un d'eux, déplace-le dans `projects` ci-dessus.

export const archive: { group: T; items: { title: T; note?: T }[] }[] = [
  {
    group: { fr: "Cycle ingénieur, 2e année (2025 – 2026)", en: "Engineering cycle, 2nd year (2025 – 2026)" },
    items: [
      { title: { fr: "Rentrée atmosphérique : Apollo et Artemis", en: "Atmospheric re-entry: Apollo and Artemis" }, note: { fr: "Simulation 3D sous MATLAB, entrée directe et entrée à rebond", en: "3D MATLAB simulation, direct and skip entry" } },
      { title: { fr: "Conception avion et écoconception, industrialisation et méthodes de production", en: "Aircraft design and eco-design, industrialisation and production methods" } },
      { title: { fr: "Production électrique et hydrogène", en: "Electric power and hydrogen production" } },
      { title: { fr: "Méthodes numériques pour le spatial", en: "Numerical methods for space" } },
    ],
  },
  {
    group: { fr: "Cycle ingénieur, 1re année (2024 – 2025)", en: "Engineering cycle, 1st year (2024 – 2025)" },
    items: [
      { title: { fr: "Modélisation et simulation numérique, application aux véhicules", en: "Modelling and numerical simulation for vehicles" } },
      { title: { fr: "Catia I et Catia II", en: "Catia I and Catia II" } },
      { title: { fr: "Modélisation et analyse dynamique des aéronefs", en: "Aircraft dynamics modelling and analysis" } },
      { title: { fr: "Analyse harmonique pour l'ingénieur", en: "Harmonic analysis for engineers" } },
      { title: { fr: "Optimisation convexe", en: "Convex optimisation" } },
      { title: { fr: "Introduction aux sciences des données", en: "Introduction to data science" } },
      { title: { fr: "Initiation aux bases de données", en: "Introduction to databases" } },
      { title: { fr: "Conduite et gestion de projet", en: "Project management" } },
    ],
  },
  {
    group: { fr: "Projets personnels et associatifs", en: "Personal and association projects" },
    items: [
      { title: { fr: "ASTRAY, AeroIPSA", en: "ASTRAY, AeroIPSA" }, note: { fr: "Vol en recherche d'altitude maximale, test du système de stabilisation et largage de poudres colorées", en: "Maximum-altitude flight, stabilisation system test and coloured powder release" } },
      { title: { fr: "Simuler un trou noir", en: "Simulating a black hole" } },
    ],
  },
];

// ─── Ciel ──────────────────────────────────────────────────────────────────

export const sky: { src: string; title: T; note: T; w: number; h: number }[] = [
  { src: "/images/ciel/m51.jpg", w: 900, h: 1600, title: { fr: "Galaxie du Tourbillon, M 51", en: "Whirlpool Galaxy, M 51" }, note: { fr: "Seestar S50, Valberg, juillet 2026", en: "Seestar S50, Valberg, July 2026" } },
  { src: "/images/ciel/ngc6960.jpg", w: 900, h: 1600, title: { fr: "Dentelles du Cygne, NGC 6960", en: "Western Veil Nebula, NGC 6960" }, note: { fr: "Seestar S50, Valberg, juillet 2026", en: "Seestar S50, Valberg, July 2026" } },
  { src: "/images/ciel/voie-lactee.jpg", w: 900, h: 1600, title: { fr: "Voie lactée", en: "Milky Way" }, note: { fr: "Valberg, réserve de ciel étoilé", en: "Valberg dark-sky reserve" } },
  { src: "/images/ciel/m13.jpg", w: 1600, h: 1600, title: { fr: "Amas d'Hercule, M 13", en: "Hercules Cluster, M 13" }, note: { fr: "Télescope UniversCity, filtres g, r, z, mon traitement", en: "UniversCity telescope, g, r, z filters, my processing" } },
  { src: "/images/ciel/m16.jpg", w: 1600, h: 1600, title: { fr: "Nébuleuse de l'Aigle, M 16", en: "Eagle Nebula, M 16" }, note: { fr: "Télescope UniversCity, filtres g, r, i, mon traitement", en: "UniversCity telescope, g, r, i filters, my processing" } },
  { src: "/images/ciel/lune.jpg", w: 1600, h: 1600, title: { fr: "La Lune", en: "The Moon" }, note: { fr: "Télescope UniversCity, juillet 2026, mon traitement", en: "UniversCity telescope, July 2026, my processing" } },
];

// ─── Compétences, langues, parcours ────────────────────────────────────────

export const skills: { category: T; items: string[] }[] = [
  { category: { fr: "Calcul scientifique", en: "Scientific computing" }, items: ["Python (NumPy, astropy)", "MATLAB", "C/C++", "intégration numérique", "Monte-Carlo"] },
  { category: { fr: "Orbitographie", en: "Orbit determination" }, items: ["STK Astrogator", "gLAB", "SGP4 / TLE", "SP3", "prédiction d'orbite"] },
  { category: { fr: "Observation", en: "Observation" }, items: ["traitement d'images", "astrométrie", "Siril", "poursuite de satellites"] },
  { category: { fr: "Ingénierie", en: "Engineering" }, items: ["COMSOL", "Star-CCM+", "Patran/Nastran", "Catia V5", "Fusion 360"] },
  { category: { fr: "Rédaction", en: "Writing" }, items: ["LaTeX", "rapports et posters scientifiques"] },
];

export const languages: { name: T; level: T }[] = [
  { name: { fr: "Français", en: "French" }, level: { fr: "langue maternelle", en: "native" } },
  { name: { fr: "Anglais", en: "English" }, level: { fr: "courant, TOEIC 820", en: "fluent, TOEIC 820" } },
  { name: { fr: "Italien", en: "Italian" }, level: { fr: "niveau scolaire", en: "school level" } },
  { name: { fr: "Chinois", en: "Chinese" }, level: { fr: "notions", en: "basics" } },
];

export type Education = { school: string; degree: T; period: string; description?: T };

export const education: Education[] = [
  {
    school: "IPSA, Institut Polytechnique des Sciences Avancées",
    degree: { fr: "Cycle ingénieur, spécialité Espace, Lanceurs et Satellites", en: "Engineering degree, Space, Launchers and Satellites track" },
    period: "2024 – 2027",
  },
  {
    school: "National Cheng Kung University, Tainan (Taïwan)",
    degree: { fr: "Semestre d'échange", en: "Exchange semester" },
    period: "2025",
    description: { fr: "Projet expérimental de mesure de traînée en soufflerie.", en: "Experimental wind-tunnel drag measurement project." },
  },
  {
    school: "Centre International de Valbonne",
    degree: { fr: "Classes préparatoires PSI*", en: "Preparatory classes, PSI* (physics and engineering)" },
    period: "2021 – 2023",
  },
];

export const engagements: T[] = [
  { fr: "Secrétaire de l'association AeroIPSA", en: "Secretary of the AeroIPSA rocketry association" },
  { fr: "Cours particuliers de mathématiques et de physique, 4 h par semaine", en: "Private maths and physics tutoring, 4 hours a week" },
  { fr: "Médiation scientifique au festival Astro'Valberg, juillet 2026", en: "Science outreach at the Astro'Valberg festival, July 2026" },
];
