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
    slug: "estimation-trajectoire",
    title: { fr: "Retrouver une trajectoire à partir de mesures", en: "Recovering a trajectory from measurements" },
    kind: { fr: "Projet de méthodes numériques pour le spatial", en: "Numerical methods for space project" },
    period: { fr: "Mai 2026", en: "May 2026" },
    status: "done",
    description: {
      fr: "À partir de positions mesurées d'un projectile freiné par l'air, retrouver sa vitesse initiale, son angle de tir, son point de départ et son coefficient de traînée, avec leurs incertitudes.",
      en: "From measured positions of a projectile slowed by air, recovering its initial speed, launch angle, starting point and drag coefficient, with their uncertainties.",
    },
    content: [
      {
        fr: "C'est le problème inverse de la détermination d'orbite : on ne connaît pas les conditions initiales, seulement une suite de positions (x, y) mesurées à 1 m près. Quatre jeux de données, de plus en plus difficiles, laissent inconnus de un à cinq paramètres parmi la position et la vitesse de départ, l'angle de tir et le coefficient de traînée.",
        en: "This is the inverse problem behind orbit determination: the initial conditions are unknown, only a series of (x, y) positions measured to within 1 m. Four datasets, increasingly difficult, leave between one and five parameters unknown among the starting position and speed, the launch angle and the drag coefficient.",
      },
      {
        fr: "Le mouvement, sous la gravité et une traînée quadratique, est intégré en Runge-Kutta d'ordre 4. En même temps que la trajectoire, on intègre les équations variationnelles, qui donnent la sensibilité de chaque position à chaque paramètre inconnu : le vecteur d'état passe de 4 à 4 + 4p composantes. Ces dérivées alimentent un algorithme de Gauss-Newton qui corrige les paramètres jusqu'à ce que la correction tombe sous 10⁻¹⁰. La matrice de covariance (BᵀB)⁻¹ donne l'incertitude de chaque paramètre et leurs corrélations.",
        en: "The motion, under gravity and quadratic drag, is integrated with fourth-order Runge-Kutta. Alongside the trajectory, we integrate the variational equations, which give the sensitivity of each position to each unknown parameter: the state vector grows from 4 to 4 + 4p components. These derivatives feed a Gauss-Newton algorithm that corrects the parameters until the correction falls below 10⁻¹⁰. The covariance matrix (BᵀB)⁻¹ gives the uncertainty on each parameter and their correlations.",
      },
      {
        fr: "Les quatre cas convergent en 8 à 10 itérations, avec un χ² réduit entre 0,99 et 1,13 : les résidus sont cohérents avec la précision annoncée des mesures. Dans le cas le plus dur, à cinq inconnues, l'angle de tir est retrouvé à 0,02° près et la vitesse initiale à 0,3 m/s près. Le point d'impact est localisé par dichotomie à mieux qu'un millimètre.",
        en: "All four cases converge in 8 to 10 iterations, with a reduced χ² between 0.99 and 1.13: the residuals are consistent with the stated measurement precision. In the hardest case, with five unknowns, the launch angle is recovered to within 0.02° and the initial speed to within 0.3 m/s. The impact point is located by bisection to better than a millimetre.",
      },
    ],
    facts: [
      { label: { fr: "Méthode", en: "Method" }, value: { fr: "Équations variationnelles + Gauss-Newton", en: "Variational equations + Gauss-Newton" } },
      { label: { fr: "Intégrateur", en: "Integrator" }, value: { fr: "RK4", en: "RK4" } },
      { label: { fr: "Inconnues", en: "Unknowns" }, value: { fr: "1 à 5 paramètres selon le jeu de données", en: "1 to 5 parameters depending on the dataset" } },
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "Avec Y. Taia et T. Gamondes", en: "With Y. Taia and T. Gamondes" } },
    ],
    tags: tg("Python", "RK4", "Gauss-Newton", "moindres carrés|least squares", "problème inverse|inverse problem"),
    image: "/images/projects/estimation-trajectoire/couverture.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Les quatre jeux de données : un projectile soumis à la gravité et à la traînée", en: "The four datasets: a projectile subject to gravity and drag" },
    images: [
      { src: "/images/projects/estimation-trajectoire/quatre-trajectoires.jpg", caption: { fr: "Les quatre trajectoires ajustées et leurs paramètres estimés", en: "The four fitted trajectories and their estimated parameters" } },
      { src: "/images/projects/estimation-trajectoire/ajustement-dataset2.jpg", caption: { fr: "Jeu de données 2 : trajectoire ajustée et résidus, contenus dans la précision de ±1 m", en: "Dataset 2: fitted trajectory and residuals, within the ±1 m precision" } },
    ],
    documents: [
      { name: { fr: "Rapport (en anglais)", en: "Report" }, url: "/documents/estimation-trajectoire/Rapport_estimation_trajectoire.pdf" },
    ],
  },
  {
    slug: "propulsion-nucleaire",
    title: { fr: "Propulsion nucléaire thermique", en: "Nuclear thermal propulsion" },
    kind: { fr: "Projet production électrique et hydrogène", en: "Electric power and hydrogen project" },
    period: { fr: "Avril 2026", en: "April 2026" },
    status: "done",
    description: {
      fr: "Un moteur qui chauffe de l'hydrogène liquide avec un réacteur nucléaire peut doubler l'impulsion spécifique d'une fusée. Comment empêcher l'hydrogène de ronger le cœur du réacteur ?",
      en: "An engine that heats liquid hydrogen with a nuclear reactor can double a rocket's specific impulse. How do you stop the hydrogen from eating away the reactor core?",
    },
    content: [
      {
        fr: "Un moteur nucléaire thermique, comme NERVA dans les années 1960, fait passer de l'hydrogène liquide dans un réacteur à fission avant de le détendre dans une tuyère. Il atteint 800 à 1 000 s d'impulsion spécifique, contre 450 s pour le meilleur moteur chimique. Pour une mission vers Mars (Δv ≈ 5,5 km/s), l'équation de Tsiolkovski fait alors passer le rapport de masse au départ d'environ 3,5 à 1,9 : le propergol passe de plus des deux tiers à moins de la moitié de la masse du vaisseau. Mais au-delà de 2 500 K, l'hydrogène chaud attaque le combustible en graphite et arrache de la matière fissile, rejetée dans le jet.",
        en: "A nuclear thermal engine, like NERVA in the 1960s, passes liquid hydrogen through a fission reactor before expanding it in a nozzle. It reaches 800 to 1,000 s of specific impulse, against 450 s for the best chemical engine. For a mission to Mars (Δv ≈ 5.5 km/s), the Tsiolkovsky equation then brings the initial mass ratio down from about 3.5 to 1.9: propellant drops from over two thirds to under half of the spacecraft's mass. But above 2,500 K, hot hydrogen attacks the graphite fuel and strips off fissile material, which is ejected in the exhaust.",
      },
      {
        fr: "L'état de l'art couvre toute la chaîne de l'hydrogène : sa production verte par électrolyse (alcaline ou PEM), son stockage liquide à 20,27 K, où la conversion ortho-para dégage plus de chaleur que la vaporisation elle-même, la fragilisation des métaux par l'hydrogène, et les solutions de stockage sans évaporation pour des missions de plus de six mois (isolation multicouche, cryoréfrigérateur, ombrage solaire). Il couvre aussi l'histoire de Rover/NERVA et de DRACO et les contraintes réglementaires du lancement d'un réacteur (norme NASA-STD-8719.12). Côté cœur du réacteur, nous avons comparé les combustibles réfractaires, dont les carbures et le CERMET tungstène–UO₂, et retenu un tout-carbure (U₀,₂Zr₀,₈)C, qui supprime l'interface graphite responsable de la corrosion et supporte une paroi plus chaude.",
        en: "The review covers the whole hydrogen chain: green production by electrolysis (alkaline or PEM), liquid storage at 20.27 K, where ortho-para conversion releases more heat than vaporisation itself, hydrogen embrittlement of metals, and zero boil-off storage for missions longer than six months (multilayer insulation, cryocooler, sun shading). It also covers the history of Rover/NERVA and DRACO and the regulatory constraints of launching a reactor (NASA-STD-8719.12). For the reactor core, we compared refractory fuels, including carbides and tungsten–UO₂ CERMET, and chose an all-carbide (U₀.₂Zr₀.₈)C, which removes the graphite interface responsible for corrosion and withstands a hotter wall.",
      },
      {
        fr: "Pour chiffrer le gain, nous avons modélisé sous MATLAB l'écoulement d'hydrogène dans un canal de refroidissement de 90 cm, dans les conditions de NERVA : modèle quasi-1D compressible résolu par un schéma prédicteur-correcteur, avec des propriétés de l'hydrogène qui varient avec la température. L'hydrogène entre à 20 K et 68,9 bar et ressort vers 1 280 K et 31 bar : sa densité est divisée par 120, il accélère de 2 à 243 m/s mais reste subsonique (Mach 0,09), l'accélération supersonique se faisant ensuite dans la tuyère. Avec le combustible (U₀,₂Zr₀,₈)C, qui accepte un flux de 2,0 MW/m² contre 1,4 MW/m² pour l'UC historique, la température de sortie passe de 1 028 K à 1 407 K et la vitesse de 195 à 267 m/s, soit environ 37 % de mieux.",
        en: "To quantify the gain, we modelled the hydrogen flow in a 90 cm cooling channel in MATLAB, under NERVA conditions: a quasi-1D compressible model solved with a predictor-corrector scheme, with hydrogen properties varying with temperature. Hydrogen enters at 20 K and 68.9 bar and leaves at around 1,280 K and 31 bar: its density drops by a factor of 120 and it accelerates from 2 to 243 m/s but stays subsonic (Mach 0.09), the supersonic acceleration happening later in the nozzle. With the (U₀.₂Zr₀.₈)C fuel, which accepts a 2.0 MW/m² heat flux against 1.4 MW/m² for historical UC, the exit temperature rises from 1,028 K to 1,407 K and the velocity from 195 to 267 m/s, about 37% better.",
      },
      {
        fr: "Le travail propose enfin une modélisation système du moteur complet sous Simcenter AMESim, découpé en six sous-systèmes couplés, à confronter aux données de l'essai PHOEBUS-2A de 1968, le réacteur de propulsion le plus puissant jamais testé (4 100 MW thermiques). Le tout a été rédigé sous la forme d'un article de revue scientifique.",
        en: "Finally, the work proposes a system model of the complete engine in Simcenter AMESim, split into six coupled sub-systems, to be compared with data from the 1968 PHOEBUS-2A test, the most powerful propulsion reactor ever tested (4,100 MW thermal). Everything was written up as a scientific journal article.",
      },
    ],
    facts: [
      { label: { fr: "Combustible retenu", en: "Chosen fuel" }, value: { fr: "(U₀,₂Zr₀,₈)C tout-carbure", en: "All-carbide (U₀.₂Zr₀.₈)C" } },
      { label: { fr: "Modèle", en: "Model" }, value: { fr: "Canal quasi-1D compressible, MATLAB", en: "Quasi-1D compressible channel, MATLAB" } },
      { label: { fr: "Hydrogène dans le canal", en: "Hydrogen in the channel" }, value: { fr: "20 K → 1 407 K", en: "20 K → 1,407 K" } },
      { label: { fr: "Gain en sortie", en: "Exit gain" }, value: { fr: "+37 % de température et de vitesse", en: "+37% temperature and velocity" } },
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "Six étudiants du parcours ELS", en: "Six students from the ELS track" } },
    ],
    tags: tg("MATLAB", "AMESim", "propulsion", "matériaux|materials", "thermo-fluide|thermo-fluids", "hydrogène|hydrogen", "cryogénie|cryogenics"),
    image: "/images/projects/propulsion-nucleaire/champs-canal.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Champs de vitesse et de température dans le canal de refroidissement, combustible (U,Zr)C", en: "Velocity and temperature fields in the cooling channel, (U,Zr)C fuel" },
    images: [
      { src: "/images/projects/propulsion-nucleaire/profils-nerva.jpg", caption: { fr: "Conditions NERVA : température, vitesse, pression, densité, Mach et débit le long du canal", en: "NERVA conditions: temperature, velocity, pressure, density, Mach number and flow rate along the channel" } },
      { src: "/images/projects/propulsion-nucleaire/profils-axiaux.jpg", caption: { fr: "Profils le long du canal : (U₀,₂Zr₀,₈)C en rouge, UC en bleu", en: "Profiles along the channel: (U₀.₂Zr₀.₈)C in red, UC in blue" } },
      { src: "/images/projects/propulsion-nucleaire/performances-sortie.jpg", caption: { fr: "Performances en sortie de canal pour les deux combustibles", en: "Channel exit performance for both fuels" } },
    ],
    documents: [
      { name: { fr: "Rapport", en: "Report (French)" }, url: "/documents/propulsion-nucleaire/Rapport_propulsion_nucleaire.pdf" },
    ],
  },
  {
    slug: "rentree-atmospherique",
    title: { fr: "Rentrée atmosphérique : Apollo et Artemis", en: "Atmospheric re-entry: Apollo and Artemis" },
    kind: { fr: "Projet missions planétaires et rentrées atmosphériques, en équipe de trois", en: "Planetary missions and atmospheric entry project, team of three" },
    period: { fr: "Mai 2026", en: "May 2026" },
    status: "done",
    description: {
      fr: "Comparer le retour sur Terre de la capsule Apollo et de la capsule Orion d'Artemis, avec un simulateur de trajectoire 3D sous MATLAB.",
      en: "Comparing the return to Earth of the Apollo capsule and Artemis's Orion capsule, with a 3D trajectory simulator in MATLAB.",
    },
    content: [
      {
        fr: "Cinquante ans séparent les deux programmes, mais la mécanique orbitale n'a pas changé : en revenant de la Lune, Apollo comme Orion abordent l'atmosphère à environ 11 km/s. Orion est plus grande (5 m de diamètre contre 3,9 m), embarque quatre astronautes au lieu de trois et tient 21 jours en autonomie au lieu de 14. Nous avons comparé les deux programmes sur leur contexte, l'architecture des lanceurs et des capsules, l'avionique, la propulsion, et surtout la rentrée atmosphérique.",
        en: "Fifty years separate the two programmes, but orbital mechanics has not changed: coming back from the Moon, both Apollo and Orion hit the atmosphere at about 11 km/s. Orion is bigger (5 m in diameter against 3.9 m), carries four astronauts instead of three and lasts 21 days on its own instead of 14. We compared the two programmes on their context, launcher and capsule architecture, avionics, propulsion, and above all atmospheric re-entry.",
      },
      {
        fr: "Côté physique de la rentrée, les deux capsules ont un coefficient balistique proche (environ 400 kg/m² pour Apollo, 390 kg/m² pour Orion) et la même finesse visée, L/D ≈ 0,3. Le couloir d'entrée est étroit : trop rasante (au-dessus de −5°), la capsule rebondit hors de l'atmosphère ; trop plongeante (au-delà de −10°), le chauffage et les g deviennent létaux. Apollo visait entre −5,5° et −7,5° avec une précision de ±0,4°. Nous avons aussi détaillé les régimes d'écoulement traversés, du moléculaire libre au-dessus de 100 km jusqu'au régime continu sous 60 km, et l'histoire des boucliers thermiques : fissures de l'AVCOAT après le vol EFT-1 en 2014, et chauffage radiatif de la face arrière, longtemps négligé, confirmé par les capteurs d'Artemis I en 2022.",
        en: "On the re-entry physics side, both capsules have a similar ballistic coefficient (about 400 kg/m² for Apollo, 390 kg/m² for Orion) and the same target lift-to-drag ratio, L/D ≈ 0.3. The entry corridor is narrow: too shallow (above −5°) and the capsule skips out of the atmosphere; too steep (beyond −10°) and heating and g-loads become lethal. Apollo aimed between −5.5° and −7.5° with ±0.4° accuracy. We also detailed the flow regimes crossed, from free molecular flow above 100 km down to continuum flow below 60 km, and the history of the heat shields: AVCOAT cracking after the EFT-1 flight in 2014, and radiative heating of the backshell, long overlooked, confirmed by Artemis I's sensors in 2022.",
      },
      {
        fr: "La simulation s'appuie sur un programme MATLAB de calcul de rentrée en 3D écrit par Ivan Fedioun (ICARE-CNRS) : Terre ellipsoïdale, atmosphère US 1976, gravité variable, intégration en Runge-Kutta d'ordre 4. Je l'ai remis en état (corrections de syntaxe, conventions de latitude et d'azimut) puis alimenté avec les conditions d'entrée réelles d'Apollo 12 et d'Artemis I, tirées du rapport de mission NASA pour Apollo et des données publiées pour Artemis.",
        en: "The simulation relies on a 3D re-entry MATLAB code written by Ivan Fedioun (ICARE-CNRS): ellipsoidal Earth, US 1976 atmosphere, varying gravity, fourth-order Runge-Kutta integration. I got it working again (syntax fixes, latitude and azimuth conventions) and fed it with the real entry conditions of Apollo 12 and Artemis I, taken from the NASA mission report for Apollo and published data for Artemis.",
      },
      {
        fr: "Pour Orion en entrée directe balistique (entrée à 122 km, 11 km/s, pente de −5,85°), la capsule parcourt 1 660 km en 413 s. Sa vitesse reste proche de 11 km/s pendant la première minute, puis chute à moins de 1 km/s en un peu plus de trois minutes ; la décélération culmine à 7,6 g vers 52 km d'altitude et la capsule repasse sous Mach 1 vers 18 km. Pour Apollo, le programme garde la portance constante, sans la modulation en roulis qu'appliquait le vrai guidage : après un premier plongeon jusqu'à environ 55 km, la capsule ressort de l'atmosphère, remonte vers 860 km et ne retombe qu'au bout de 4 700 s. C'est exactement le rebond que le pilotage de la portance devait éviter, et que l'entrée à rebond d'Orion exploite au contraire de façon contrôlée.",
        en: "For Orion in a ballistic direct entry (entry at 122 km, 11 km/s, −5.85° flight-path angle), the capsule travels 1,660 km in 413 s. Its speed stays close to 11 km/s for the first minute, then falls below 1 km/s in just over three minutes; deceleration peaks at 7.6 g around 52 km altitude and the capsule drops below Mach 1 around 18 km. For Apollo, the code keeps lift constant, without the roll modulation applied by the real guidance: after a first dip down to about 55 km, the capsule leaves the atmosphere, climbs to around 860 km and only comes back after 4,700 s. This is exactly the skip that lift control had to avoid, and that Orion's skip entry instead exploits in a controlled way.",
      },
    ],
    facts: [
      { label: { fr: "Vitesse d'entrée", en: "Entry speed" }, value: { fr: "11 km/s", en: "11 km/s" } },
      { label: { fr: "Décélération max", en: "Peak deceleration" }, value: { fr: "7,6 g (Orion, entrée directe)", en: "7.6 g (Orion, direct entry)" } },
      { label: { fr: "Couloir d'entrée", en: "Entry corridor" }, value: { fr: "−5,5° à −7,5° (Apollo)", en: "−5.5° to −7.5° (Apollo)" } },
      { label: { fr: "Outil", en: "Tool" }, value: { fr: "MATLAB, code ICARE-CNRS", en: "MATLAB, ICARE-CNRS code" } },
    ],
    tags: tg("MATLAB", "rentrée atmosphérique|atmospheric entry", "RK4", "Apollo", "Artemis", "boucliers thermiques|heat shields"),
    image: "/images/projects/rentree-atmospherique/altitude-vitesse.png",
    imageFit: "contain",
    imageCredit: { fr: "Altitude et vitesse d'Orion pendant la rentrée simulée", en: "Orion altitude and speed during the simulated entry" },
    images: [
      { src: "/images/projects/rentree-atmospherique/orion-altitude-distance.jpg", caption: { fr: "Orion : altitude en fonction de la distance parcourue au sol, 1 660 km jusqu'à l'amerrissage", en: "Orion: altitude versus ground distance, 1,660 km to splashdown" } },
      { src: "/images/projects/rentree-atmospherique/orion-vitesse.jpg", caption: { fr: "Orion : vitesse absolue au cours du temps, de 11 km/s à moins de 0,5 km/s", en: "Orion: absolute speed over time, from 11 km/s to under 0.5 km/s" } },
      { src: "/images/projects/rentree-atmospherique/deceleration.png", caption: { fr: "Orion : décélération en fonction de l'altitude", en: "Orion: deceleration versus altitude" } },
      { src: "/images/projects/rentree-atmospherique/orion-plan-entree.jpg", caption: { fr: "Orion : trajectoire dans le plan d'entrée, au-dessus de la surface terrestre", en: "Orion: trajectory in the entry plane, above the Earth's surface" } },
      { src: "/images/projects/rentree-atmospherique/apollo-rebond.jpg", caption: { fr: "Apollo à portance constante : la capsule rebondit jusqu'à 860 km avant de revenir", en: "Apollo with constant lift: the capsule skips up to 860 km before coming back" } },
      { src: "/images/projects/rentree-atmospherique/apollo-globe.jpg", caption: { fr: "Apollo : trajectoire en 3D autour de la Terre", en: "Apollo: 3D trajectory around the Earth" } },
      { src: "/images/projects/rentree-atmospherique/trace-sol.png", caption: { fr: "Trace au sol, de l'entrée dans l'atmosphère à l'amerrissage dans le Pacifique", en: "Ground track, from atmospheric entry to splashdown in the Pacific" } },
    ],
  },
  {
    slug: "tuyere-laval",
    title: { fr: "Choc dans une tuyère de Laval", en: "A shock in a Laval nozzle" },
    kind: { fr: "TP de mécanique des fluides numérique", en: "Computational fluid dynamics lab" },
    period: { fr: "Mars 2026", en: "March 2026" },
    status: "done",
    description: {
      fr: "Simuler sous STAR-CCM+ une tuyère convergente-divergente et voir apparaître une onde de choc quand la pression en sortie est trop forte.",
      en: "Simulating a converging-diverging nozzle in STAR-CCM+ and watching a shock wave appear when the outlet pressure is too high.",
    },
    content: [
      {
        fr: "Une tuyère de Laval accélère un gaz jusqu'à Mach 1 au col, puis au-delà dans le divergent. Le calcul analytique, avec 10 bar en entrée, donne un écoulement adapté à Mach 2,94 en sortie pour une pression de 29,8 kPa, et un débit de 3,61 kg/s. Si la pression imposée en sortie est plus élevée, l'écoulement ne peut pas rester supersonique jusqu'au bout : une onde de choc droite se forme dans le divergent.",
        en: "A Laval nozzle accelerates a gas to Mach 1 at the throat, then beyond in the diverging section. The analytical calculation, with 10 bar at the inlet, gives a design flow at Mach 2.94 at the exit for a pressure of 29.8 kPa, and a mass flow of 3.61 kg/s. If the outlet pressure is higher, the flow cannot stay supersonic all the way: a normal shock forms in the diverging section.",
      },
      {
        fr: "Après une étude de convergence du maillage (taille de maille retenue : 0,6 mm), j'ai simulé deux pressions de sortie. À 300 kPa, l'écoulement atteint Mach 2 avant un choc situé vers 17 cm de l'entrée, où la pression et la température remontent brutalement. À 500 kPa, le choc recule vers le col (vers 14,5 cm) et le Mach maximal tombe à 1,6. Les profils le long de l'axe sont comparés à la théorie des écoulements isentropiques.",
        en: "After a mesh convergence study (chosen cell size: 0.6 mm), I simulated two outlet pressures. At 300 kPa, the flow reaches Mach 2 before a shock about 17 cm from the inlet, where pressure and temperature jump sharply. At 500 kPa, the shock moves back towards the throat (about 14.5 cm) and the maximum Mach number drops to 1.6. The profiles along the axis are compared with isentropic flow theory.",
      },
    ],
    facts: [
      { label: { fr: "Logiciel", en: "Software" }, value: { fr: "STAR-CCM+", en: "STAR-CCM+" } },
      { label: { fr: "Pression d'entrée", en: "Inlet pressure" }, value: { fr: "10 bar", en: "10 bar" } },
      { label: { fr: "Pressions de sortie", en: "Outlet pressures" }, value: { fr: "300 et 500 kPa", en: "300 and 500 kPa" } },
      { label: { fr: "Mach maximal", en: "Peak Mach" }, value: { fr: "2,0 puis 1,6", en: "2.0, then 1.6" } },
    ],
    tags: tg("STAR-CCM+", "CFD", "écoulement compressible|compressible flow", "onde de choc|shock wave"),
    image: "/images/projects/tuyere-laval/mach-300kpa.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Nombre de Mach dans la demi-tuyère, pression de sortie de 300 kPa : le choc se voit à la cassure rouge-bleu", en: "Mach number in the half-nozzle, 300 kPa outlet pressure: the shock is the red-to-blue break" },
    images: [
      { src: "/images/projects/tuyere-laval/mach-500kpa.jpg", caption: { fr: "À 500 kPa, le choc recule vers le col", en: "At 500 kPa, the shock moves back towards the throat" } },
      { src: "/images/projects/tuyere-laval/pression-axe-300kpa.jpg", caption: { fr: "Pression le long de l'axe à 300 kPa : la remontée brutale marque le choc", en: "Pressure along the axis at 300 kPa: the sudden rise marks the shock" } },
      { src: "/images/projects/tuyere-laval/maillage.jpg", caption: { fr: "Le maillage polyédrique", en: "The polyhedral mesh" } },
    ],
    documents: [
      { name: { fr: "Rapport (en anglais)", en: "Report" }, url: "/documents/tuyere-laval/Rapport_tuyere_Laval.pdf" },
    ],
  },
  {
    slug: "trou-noir",
    title: { fr: "Simuler un trou noir", en: "Simulating a black hole" },
    kind: { fr: "Projet personnel", en: "Personal project" },
    period: { fr: "Mars – mai 2026", en: "March – May 2026" },
    status: "done",
    description: {
      fr: "Voir ce que voit un observateur près d'un trou noir : un simulateur 3D en Python qui lance un rayon de lumière par pixel et suit sa trajectoire courbée, directement sur la carte graphique.",
      en: "Seeing what an observer near a black hole would see: a 3D simulator in Python that casts one light ray per pixel and follows its curved path, directly on the graphics card.",
    },
    content: [
      {
        fr: "Tout est parti d'Interstellar : je voulais comprendre pourquoi Gargantua ressemble à ça, avec cet anneau de lumière qui passe au-dessus et en dessous de l'ombre. La réponse tient dans la courbure des rayons lumineux. Le disque d'accrétion est plat, mais la lumière émise derrière le trou noir est déviée vers nous et le fait apparaître autour de l'ombre.",
        en: "It all started with Interstellar: I wanted to understand why Gargantua looks the way it does, with that ring of light passing above and below the shadow. The answer lies in the bending of light rays. The accretion disk is flat, but light emitted behind the black hole is bent towards us and makes it appear around the shadow.",
      },
      {
        fr: "Première version, en 2D avec Pygame : vingt rayons partent de la gauche et sont déviés par une attraction en 1/r². Ceux qui passent trop près sont absorbés, les autres sont défléchis d'autant plus qu'ils frôlent le trou noir. J'ai réglé la constante de gravité pour que la sphère des photons tombe à 1,5 fois le rayon de Schwarzschild, comme dans la réalité.",
        en: "First version, in 2D with Pygame: twenty rays leave from the left and are deflected by a 1/r² attraction. Those passing too close are absorbed; the others are deflected more the closer they graze the black hole. I tuned the gravitational constant so that the photon sphere sits at 1.5 times the Schwarzschild radius, as in reality.",
      },
      {
        fr: "Deuxième version, en 3D : je fais du ray tracing à l'envers. Pour chaque pixel de l'écran, un rayon part de la caméra et je remonte sa trajectoire. L'accélération reprend le terme newtonien et ajoute la correction relativiste de Schwarzschild en 3GL²/r⁴, où L est le moment cinétique du rayon, conservé le long de la trajectoire. L'intégration se fait en Runge-Kutta d'ordre 4, sur 400 pas par rayon. Le rayon s'arrête s'il passe sous l'horizon (pixel noir), s'il traverse le plan du disque (pixel coloré selon la température et l'effet Doppler, plus clair du côté qui vient vers nous), ou s'il s'échappe vers le fond étoilé.",
        en: "Second version, in 3D: I do backward ray tracing. For each screen pixel, a ray leaves the camera and I trace its path back. The acceleration takes the Newtonian term and adds the Schwarzschild relativistic correction in 3GL²/r⁴, where L is the ray's angular momentum, conserved along the path. Integration uses fourth-order Runge-Kutta, with 400 steps per ray. A ray stops if it falls below the horizon (black pixel), crosses the disk plane (pixel coloured by temperature and Doppler effect, brighter on the side moving towards us), or escapes to the starry background.",
      },
      {
        fr: "En Python pur, un million de rayons par image prendrait plusieurs minutes. J'ai donc écrit le calcul dans un shader GLSL, exécuté par OpenGL sur la carte graphique : chaque pixel est calculé en parallèle et la scène tourne en temps réel, à la souris. Une grille déformée en entonnoir, sous le trou noir, représente le puits de potentiel gravitationnel. On retrouve l'image d'Interstellar : l'ombre, l'anneau de photons et le disque vu à la fois de face et par-dessus.",
        en: "In pure Python, a million rays per frame would take several minutes. So I wrote the computation as a GLSL shader, run by OpenGL on the graphics card: every pixel is computed in parallel and the scene runs in real time, controlled with the mouse. A funnel-shaped grid below the black hole shows the gravitational potential well. The Interstellar image appears: the shadow, the photon ring and the disk seen both edge-on and from above.",
      },
    ],
    facts: [
      { label: { fr: "Méthode", en: "Method" }, value: { fr: "Ray tracing inverse, un rayon par pixel", en: "Backward ray tracing, one ray per pixel" } },
      { label: { fr: "Physique", en: "Physics" }, value: { fr: "Newton + correction de Schwarzschild", en: "Newton + Schwarzschild correction" } },
      { label: { fr: "Intégrateur", en: "Integrator" }, value: { fr: "RK4, 400 pas par rayon", en: "RK4, 400 steps per ray" } },
      { label: { fr: "Rendu", en: "Rendering" }, value: { fr: "Shader GLSL sur GPU, temps réel", en: "GLSL shader on GPU, real time" } },
    ],
    tags: tg("Python", "OpenGL", "GLSL", "RK4", "relativité générale|general relativity", "ray tracing"),
    image: "/images/projects/simulating-black-hole/couverture.jpg",
    imageCredit: {
      fr: "Capture du simulateur : la caméra est presque dans le plan du disque",
      en: "Simulator screenshot: the camera is almost in the disk plane",
    },
    images: [
      {
        src: "/images/projects/simulating-black-hole/deviation-2d.jpg",
        caption: {
          fr: "Première version en 2D : vingt rayons lumineux déviés ou absorbés par le trou noir",
          en: "First 2D version: twenty light rays deflected or absorbed by the black hole",
        },
      },
    ],
  },
  {
    slug: "mecanique-fluides-ncku",
    title: { fr: "Souffleries et sillages à Taïwan", en: "Wind tunnels and wakes in Taiwan" },
    kind: { fr: "Travaux pratiques, semestre d'échange à NCKU", en: "Lab course, exchange semester at NCKU" },
    period: { fr: "Automne 2025", en: "Autumn 2025" },
    status: "done",
    description: {
      fr: "Quatre expériences de mécanique des fluides réelle : sondes de pression, visualisation PIV en canal hydraulique, sillage au fil chaud et mesure de traînée en soufflerie.",
      en: "Four real fluid dynamics experiments: pressure probes, PIV flow visualisation in a water channel, hot-wire wake measurements and drag measurement in a wind tunnel.",
    },
    content: [
      {
        fr: "Ces travaux pratiques, suivis en anglais à la National Cheng Kung University, couvrent toute la chaîne de mesure : étalonner un capteur, acquérir un signal, le traiter et comparer le résultat à la théorie.",
        en: "These labs, taught in English at National Cheng Kung University, cover the whole measurement chain: calibrating a sensor, acquiring a signal, processing it and comparing the result with theory.",
      },
      {
        fr: "Sondes de pression : étalonnage sur colonne d'eau, puis comparaison d'un tube de Pitot, fiable seulement entre −10° et +10° de dérapage, et d'une sonde Cobra, qui mesure aussi la direction de l'écoulement. Canal hydraulique : visualisation par PIV (PIVlab sous MATLAB) du sillage d'un cylindre, de cylindres fendus et d'un profil NACA 0012 jusqu'à 20° d'incidence, avec le point de décollement et un nombre de Strouhal proche de 0,2.",
        en: "Pressure probes: calibration against a water column, then comparison of a Pitot tube, reliable only between −10° and +10° of yaw, and a Cobra probe, which also measures flow direction. Water channel: PIV visualisation (PIVlab in MATLAB) of the wake of a cylinder, slotted cylinders and a NACA 0012 airfoil up to 20° angle of attack, with the separation point and a Strouhal number close to 0.2.",
      },
      {
        fr: "Soufflerie : un fil chaud étalonné contre un Pitot (loi polynomiale d'ordre 4) mesure le sillage d'un cylindre de 6 mm. Le déficit de vitesse, l'intensité de turbulence et le spectre, traités sous MATLAB, donnent un pic de détachement tourbillonnaire à 264 Hz, soit St = 0,22 pour Re ≈ 2 700. Enfin, un capteur de force étalonné compare un cylindre (Cd ≈ 1) à un profil en goutte d'eau, environ trois fois moins traînant.",
        en: "Wind tunnel: a hot wire calibrated against a Pitot tube (fourth-order polynomial law) measures the wake of a 6 mm cylinder. The velocity deficit, turbulence intensity and spectrum, processed in MATLAB, give a vortex-shedding peak at 264 Hz, i.e. St = 0.22 at Re ≈ 2,700. Finally, a calibrated force sensor compares a cylinder (Cd ≈ 1) with a teardrop shape, about three times less draggy.",
      },
    ],
    facts: [
      { label: { fr: "Lieu", en: "Place" }, value: { fr: "NCKU, Tainan (Taïwan)", en: "NCKU, Tainan (Taiwan)" } },
      { label: { fr: "Instruments", en: "Instruments" }, value: { fr: "Pitot, sonde Cobra, PIV, fil chaud, capteur de force", en: "Pitot, Cobra probe, PIV, hot wire, force sensor" } },
      { label: { fr: "Strouhal mesuré", en: "Measured Strouhal" }, value: { fr: "0,22 (théorie ≈ 0,20)", en: "0.22 (theory ≈ 0.20)" } },
    ],
    tags: tg("soufflerie|wind tunnel", "PIV", "fil chaud|hot wire", "MATLAB", "anglais|English"),
    image: "/images/projects/mecanique-fluides-ncku/naca0012-vorticite.jpg",
    imageCredit: { fr: "Champ de vorticité mesuré par PIV autour d'un profil NACA 0012 (en rouge) à forte incidence", en: "Vorticity field measured by PIV around a NACA 0012 airfoil (red) at high angle of attack" },
    images: [
      { src: "/images/projects/mecanique-fluides-ncku/sillage-vitesse.jpg", caption: { fr: "Profils de vitesse dans le sillage du cylindre, à 3, 4 et 5 diamètres", en: "Velocity profiles in the cylinder wake, at 3, 4 and 5 diameters" } },
      { src: "/images/projects/mecanique-fluides-ncku/spectre-sillage.jpg", caption: { fr: "Spectre du signal de fil chaud : pic de détachement à 264 Hz", en: "Hot-wire signal spectrum: shedding peak at 264 Hz" } },
      { src: "/images/projects/mecanique-fluides-ncku/cd-reynolds.jpg", caption: { fr: "Coefficient de traînée en fonction du nombre de Reynolds : cylindre et goutte d'eau", en: "Drag coefficient versus Reynolds number: cylinder and teardrop" } },
    ],
    documents: [
      { name: { fr: "Rapport de TP (en anglais)", en: "Lab report" }, url: "/documents/mecanique-fluides-ncku/Rapport_Real_Fluid_Dynamics.pdf" },
      { name: { fr: "Devoir de mécanique des fluides, manuscrit (en anglais)", en: "Fluid mechanics homework, handwritten" }, url: "/documents/mecanique-fluides-ncku/Homework_fluid_mechanics.pdf" },
    ],
  },
  {
    slug: "equation-chaleur",
    title: { fr: "Équation de la chaleur et de Poisson", en: "Heat and Poisson equations" },
    kind: { fr: "Projet de modélisation numérique", en: "Numerical modelling project" },
    period: { fr: "Mai 2025", en: "May 2025" },
    status: "done",
    description: {
      fr: "Résoudre la diffusion de la chaleur dans un carré chauffé par une source, et vérifier qu'elle converge vers la solution stationnaire.",
      en: "Solving heat diffusion in a square heated by a source, and checking that it converges to the steady-state solution.",
    },
    content: [
      {
        fr: "Le domaine est le carré [−1, 1]², avec une température nulle sur les bords et un terme source fixe. J'ai résolu l'équation de la chaleur par différences finies (maillage 41 × 41, schéma explicite, pas de temps de 0,004), puis l'équation de Poisson qui donne l'état d'équilibre.",
        en: "The domain is the square [−1, 1]², with zero temperature on the edges and a fixed source term. I solved the heat equation with finite differences (41 × 41 grid, explicit scheme, time step 0.004), then the Poisson equation that gives the equilibrium state.",
      },
      {
        fr: "À t = 2, le maximum de température (0,675) se trouve près du pic de la source. La solution stationnaire est un peu plus haute (≈ 0,82), et l'écart entre les deux décroît exponentiellement, avec un temps caractéristique d'environ 0,5. Le schéma explicite est précis pour un petit pas de temps, mais devient coûteux sur des temps longs.",
        en: "At t = 2, the maximum temperature (0.675) is close to the peak of the source. The steady-state solution is slightly higher (≈ 0.82), and the gap between the two decays exponentially, with a characteristic time of about 0.5. The explicit scheme is accurate for a small time step, but becomes costly over long times.",
      },
    ],
    facts: [
      { label: { fr: "Méthode", en: "Method" }, value: { fr: "Différences finies, schéma explicite", en: "Finite differences, explicit scheme" } },
      { label: { fr: "Maillage", en: "Grid" }, value: { fr: "41 × 41 points", en: "41 × 41 points" } },
    ],
    tags: tg("Python", "différences finies|finite differences", "EDP|PDE"),
    image: "/images/projects/equation-chaleur/temperature-t2.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Champ de température à t = 2", en: "Temperature field at t = 2" },
    images: [
      { src: "/images/projects/equation-chaleur/solution-stationnaire.jpg", caption: { fr: "Solution stationnaire (équation de Poisson)", en: "Steady-state solution (Poisson equation)" } },
      { src: "/images/projects/equation-chaleur/convergence.jpg", caption: { fr: "Écart maximal à la solution stationnaire au cours du temps", en: "Maximum gap to the steady-state solution over time" } },
    ],
    documents: [
      { name: { fr: "Rapport", en: "Report (French)" }, url: "/documents/equation-chaleur/Rapport_equation_chaleur.pdf" },
    ],
  },
  {
    slug: "inconel-718",
    title: { fr: "L'Inconel 718", en: "Inconel 718" },
    kind: { fr: "Projet de sciences des matériaux", en: "Materials science project" },
    period: { fr: "Avril 2025", en: "April 2025" },
    status: "done",
    description: {
      fr: "Pourquoi cet alliage de nickel est-il partout dans les moteurs d'avion et de fusée ? Une étude de sa microstructure et de ses propriétés.",
      en: "Why is this nickel alloy everywhere in aircraft and rocket engines? A study of its microstructure and properties.",
    },
    content: [
      {
        fr: "L'Inconel 718 repose sur une matrice γ de nickel, cubique à faces centrées, dans laquelle se forment des précipités très fins γ′ (Ni₃(Al,Ti)) et surtout γ″ (Ni₃Nb). Ces précipités freinent le mouvement des dislocations, ce qui donne à l'alliage sa grande résistance mécanique.",
        en: "Inconel 718 is built on a face-centred cubic nickel γ matrix, in which very fine γ′ (Ni₃(Al,Ti)) and above all γ″ (Ni₃Nb) precipitates form. These precipitates slow down dislocation motion, which gives the alloy its high strength.",
      },
      {
        fr: "La taille des grains joue aussi : selon la loi de Hall-Petch, des grains fins augmentent la résistance, mais on préfère des grains plus gros pour la stabilité à haute température dans les turbines. Résultat : une limite d'élasticité au-dessus de 1 000 MPa, une bonne tenue au fluage jusqu'à 650 °C et un module d'Young d'environ 200 GPa.",
        en: "Grain size matters too: according to the Hall-Petch law, fine grains increase strength, but coarser grains are preferred for high-temperature stability in turbines. The result: a yield strength above 1,000 MPa, good creep resistance up to 650 °C and a Young's modulus of about 200 GPa.",
      },
    ],
    facts: [
      { label: { fr: "Limite d'élasticité", en: "Yield strength" }, value: { fr: "> 1 000 MPa", en: "> 1,000 MPa" } },
      { label: { fr: "Tenue au fluage", en: "Creep resistance" }, value: { fr: "Jusqu'à 650 °C", en: "Up to 650 °C" } },
      { label: { fr: "Densité", en: "Density" }, value: { fr: "≈ 8,2 g/cm³", en: "≈ 8.2 g/cm³" } },
    ],
    tags: tg("matériaux|materials", "superalliage|superalloy", "microstructure"),
    image: "/images/projects/inconel-718/reseau-cfc.jpg",
    imageFit: "contain",
    documents: [
      { name: { fr: "Rapport", en: "Report (French)" }, url: "/documents/inconel-718/Projet_Inconel_718.pdf" },
    ],
  },
  {
    slug: "catia-2",
    title: { fr: "IPSA'TTRACTION, un manège à balancier", en: "IPSA'TTRACTION, a swing ride" },
    kind: { fr: "Projet de CAO en équipe, CATIA V5", en: "Team CAD project, CATIA V5" },
    period: { fr: "Avril – mai 2025", en: "April – May 2025" },
    status: "done",
    description: {
      fr: "Concevoir à quatre une attraction de fête foraine complète sous CATIA V5, des sièges avec arceau de sécurité jusqu'aux poteaux de 17 m, puis vérifier la structure par éléments finis.",
      en: "Designing a complete fairground ride in CATIA V5 as a team of four, from the seats with their safety bars to the 17 m legs, then checking the structure with finite elements.",
    },
    content: [
      {
        fr: "IPSA'TTRACTION est un manège à balancier : une nacelle de seize sièges, répartis en quatre rangées, est suspendue à un bras pendulaire qui oscille entre deux paires de poteaux inclinés. Nous avons commencé par définir le graphe des contacts, la table des pièces et la table des interfaces, puis réparti les sous-ensembles entre les quatre membres de l'équipe.",
        en: "IPSA'TTRACTION is a swing ride: a gondola of sixteen seats, in four rows, hangs from a pendulum arm that swings between two pairs of inclined legs. We started by defining the contact graph, the parts table and the interfaces table, then split the sub-assemblies between the four team members.",
      },
      {
        fr: "De mon côté, j'ai conçu la base de l'attraction : le bloc moteur et son support, la tige de pivot et sa liaison avec le bras du pendule, la plateforme d'embarquement avec ses barrières de sécurité, les escaliers d'accès et le panneau de taille minimale. Les autres sous-ensembles (sièges avec arceau et ceinture, bras du pendule, pieds, échelle d'accès, bannière) ont été modélisés par mes coéquipiers, puis tout a été intégré dans un assemblage final par contraintes.",
        en: "On my side, I designed the base of the ride: the motor block and its frame, the pivot shaft and its joint with the pendulum arm, the boarding platform with its safety barriers, the access stairs and the minimum-height sign. The other sub-assemblies (seats with safety bar and belt, pendulum arm, legs, access ladder, banner) were modelled by my teammates, then everything was integrated into a final constraint-based assembly.",
      },
      {
        fr: "Pour finir, l'équipe a vérifié la tenue du poteau principal, l'élément porteur le plus sollicité, avec l'atelier d'analyse par éléments finis de CATIA. Le poteau, long d'environ 17,3 m et incliné de 55°, est encastré à sa base et reçoit au sommet une charge de 785 kN. Après une étude de convergence sur quatre maillages paraboliques, la contrainte de Von Mises maximale atteint 17,1 MPa, au sommet du poteau : bien en dessous des 235 MPa de limite élastique d'un acier courant.",
        en: "Finally, the team checked the main leg, the most heavily loaded structural part, with CATIA's finite element analysis workbench. The leg, about 17.3 m long and inclined at 55°, is clamped at its base and carries a 785 kN load at the top. After a convergence study on four parabolic meshes, the maximum Von Mises stress reaches 17.1 MPa at the top of the leg: well below the 235 MPa yield strength of a standard steel.",
      },
    ],
    facts: [
      { label: { fr: "Logiciel", en: "Software" }, value: { fr: "CATIA V5 (Part Design, Assembly Design, analyse EF)", en: "CATIA V5 (Part Design, Assembly Design, FEA)" } },
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "4 étudiants", en: "4 students" } },
      { label: { fr: "Nacelle", en: "Gondola" }, value: { fr: "16 sièges", en: "16 seats" } },
      { label: { fr: "Contrainte max", en: "Max stress" }, value: { fr: "17,1 MPa (limite 235 MPa)", en: "17.1 MPa (yield 235 MPa)" } },
    ],
    tags: tg("CAO|CAD", "CATIA V5", "assemblage|assembly", "éléments finis|finite elements", "travail en équipe|teamwork"),
    image: "/images/projects/catia-2/manege-complet.jpg",
    imageFit: "contain",
    imageCredit: { fr: "L'assemblage final d'IPSA'TTRACTION dans CATIA V5", en: "The final IPSA'TTRACTION assembly in CATIA V5" },
    images: [
      { src: "/images/projects/catia-2/balancier-sieges.jpg", caption: { fr: "Le bras du pendule et les seize sièges de la nacelle", en: "The pendulum arm and the gondola's sixteen seats" } },
      { src: "/images/projects/catia-2/rangee-sieges.jpg", caption: { fr: "Une rangée de quatre sièges", en: "A row of four seats" } },
      { src: "/images/projects/catia-2/siege-arceau.jpg", caption: { fr: "Siège avec son arceau de sécurité", en: "Seat with its safety bar" } },
      { src: "/images/projects/catia-2/base-moteur.jpg", caption: { fr: "Ma partie : la base, avec plateformes, moteur, pivot et escaliers", en: "My part: the base, with platforms, motor, pivot and stairs" } },
      { src: "/images/projects/catia-2/moteur.jpg", caption: { fr: "Le moteur électrique", en: "The electric motor" } },
      { src: "/images/projects/catia-2/test-taille.jpg", caption: { fr: "Panneau de taille minimale", en: "Minimum-height sign" } },
      { src: "/images/projects/catia-2/jonction-bras.jpg", caption: { fr: "Jonction du bras du pendule", en: "Pendulum arm junction" } },
      { src: "/images/projects/catia-2/graphe-contacts.jpg", caption: { fr: "Graphe des contacts entre sous-ensembles", en: "Contact graph between sub-assemblies" } },
      { src: "/images/projects/catia-2/poteau-maillage.jpg", caption: { fr: "Le poteau principal maillé, encastré à sa base", en: "The meshed main leg, clamped at its base" } },
      { src: "/images/projects/catia-2/contraintes-sommet.jpg", caption: { fr: "Contraintes de Von Mises au sommet du poteau : 17,1 MPa au maximum", en: "Von Mises stress at the top of the leg: 17.1 MPa maximum" } },
      { src: "/images/projects/catia-2/contraintes-pied.jpg", caption: { fr: "Contraintes près de l'encastrement", en: "Stress near the clamped base" } },
    ],
    documents: [
      { name: { fr: "Rapport : étude de la tenue mécanique du poteau", en: "Report: structural study of the main leg (French)" }, url: "/documents/catia-2/Rapport_etude_mecanique_IPSATTRACTION.pdf" },
      { name: { fr: "Support de soutenance", en: "Defence slides (French)" }, url: "/documents/catia-2/Soutenance_IPSATTRACTION.pdf" },
    ],
  },
  {
    slug: "dynamique-aeronefs",
    title: { fr: "Stabiliser un avion par placement de pôles", en: "Stabilising an aircraft by pole placement" },
    kind: { fr: "Projet de modélisation et d'analyse dynamique des aéronefs", en: "Aircraft dynamics modelling and analysis project" },
    period: { fr: "Avril 2025", en: "April 2025" },
    status: "done",
    description: {
      fr: "Mettre en équations le mouvement longitudinal d'un avion, retrouver ses modes propres, puis concevoir un pilote automatique qui amortit ses oscillations.",
      en: "Writing the equations of an aircraft's longitudinal motion, finding its natural modes, then designing an autopilot that damps its oscillations.",
    },
    content: [
      {
        fr: "Le mouvement longitudinal de l'avion (vitesse, incidence, tangage) est décrit par une représentation d'état à quatre variables, commandée par la gouverne de profondeur. La matrice de commandabilité est de rang plein : une seule entrée suffit à piloter tout le système. Les valeurs propres ont toutes une partie réelle négative, donc l'avion est stable, mais elles forment deux paires complexes : l'oscillation d'incidence, rapide et bien amortie (−2,82 ± 2,01i), et la phugoïde, une longue oscillation de vitesse et d'altitude à peine amortie (−0,0073 ± 0,066i).",
        en: "The aircraft's longitudinal motion (speed, angle of attack, pitch) is described by a four-variable state-space model, driven by the elevator. The controllability matrix has full rank: a single input is enough to steer the whole system. All eigenvalues have a negative real part, so the aircraft is stable, but they form two complex pairs: the short-period oscillation, fast and well damped (−2.82 ± 2.01i), and the phugoid, a long speed and altitude oscillation that is barely damped (−0.0073 ± 0.066i).",
      },
      {
        fr: "Sous Simulink, j'ai excité le modèle avec une entrée sinusoïdale de pulsation croissante, de 0,022 à 0,099 rad/s. L'amplitude de la réponse augmente jusqu'à un maximum vers 0,066 rad/s, puis redescend : c'est la résonance de la phugoïde, à la pulsation prévue par les valeurs propres.",
        en: "In Simulink, I excited the model with a sinusoidal input of increasing frequency, from 0.022 to 0.099 rad/s. The response amplitude grows up to a maximum around 0.066 rad/s, then falls again: this is the phugoid resonance, at the frequency predicted by the eigenvalues.",
      },
      {
        fr: "Pour finir, j'ai conçu un pilote automatique par retour d'état, u = −Kx, en plaçant les quatre pôles en boucle fermée sur l'axe réel (−1,5, −2, −2,5 et −3). Le gain K, calculé à la main puis avec la fonction place de MATLAB, supprime les oscillations : depuis plusieurs conditions initiales, l'avion revient à l'équilibre en quelques secondes au lieu d'osciller pendant plusieurs minutes.",
        en: "Finally, I designed a state-feedback autopilot, u = −Kx, by placing the four closed-loop poles on the real axis (−1.5, −2, −2.5 and −3). The gain K, computed by hand and with MATLAB's place function, removes the oscillations: from several initial conditions, the aircraft returns to equilibrium within seconds instead of oscillating for several minutes.",
      },
    ],
    facts: [
      { label: { fr: "Outils", en: "Tools" }, value: { fr: "MATLAB, Simulink", en: "MATLAB, Simulink" } },
      { label: { fr: "Phugoïde", en: "Phugoid" }, value: { fr: "ω ≈ 0,066 rad/s, à peine amortie", en: "ω ≈ 0.066 rad/s, barely damped" } },
      { label: { fr: "Pôles imposés", en: "Placed poles" }, value: { fr: "−1,5 ; −2 ; −2,5 ; −3", en: "−1.5, −2, −2.5, −3" } },
    ],
    tags: tg("MATLAB", "Simulink", "automatique|control", "représentation d'état|state space", "mécanique du vol|flight dynamics"),
    image: "/images/projects/dynamique-aeronefs/poles-zeros.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Carte des pôles en boucle ouverte : oscillation d'incidence à gauche, phugoïde près de l'axe imaginaire", en: "Open-loop pole map: short-period mode on the left, phugoid near the imaginary axis" },
    images: [
      { src: "/images/projects/dynamique-aeronefs/reponse-echelon.jpg", caption: { fr: "Réponse en boucle ouverte : les oscillations s'amortissent lentement", en: "Open-loop response: oscillations die out slowly" } },
      { src: "/images/projects/dynamique-aeronefs/resonance.jpg", caption: { fr: "Entrée sinusoïdale à 0,066 rad/s : la résonance de la phugoïde", en: "Sinusoidal input at 0.066 rad/s: phugoid resonance" } },
      { src: "/images/projects/dynamique-aeronefs/boucle-ouverte.jpg", caption: { fr: "Modèle Simulink en boucle ouverte", en: "Open-loop Simulink model" } },
      { src: "/images/projects/dynamique-aeronefs/boucle-fermee.jpg", caption: { fr: "Pilote automatique : retour d'état u = −Kx", en: "Autopilot: state feedback u = −Kx" } },
      { src: "/images/projects/dynamique-aeronefs/reponse-corrigee.jpg", caption: { fr: "Réponse avec le pilote automatique : retour à l'équilibre en quelques secondes", en: "Response with the autopilot: back to equilibrium within seconds" } },
    ],
    documents: [
      { name: { fr: "Rapport", en: "Report (French)" }, url: "/documents/dynamique-aeronefs/Rapport_dynamique_aeronefs.pdf" },
    ],
  },
  {
    slug: "cfd-naca-cylindre",
    title: { fr: "Premières simulations CFD : profil NACA et cylindre", en: "First CFD simulations: NACA airfoil and cylinder" },
    kind: { fr: "TP d'aérodynamique numérique", en: "Computational aerodynamics labs" },
    period: { fr: "Février – avril 2025", en: "February – April 2025" },
    status: "done",
    description: {
      fr: "Prendre en main STAR-CCM+ sur deux cas classiques : un profil d'aile NACA 0015 et un cylindre dans un écoulement d'air.",
      en: "Getting started with STAR-CCM+ on two classic cases: a NACA 0015 airfoil and a cylinder in an airflow.",
    },
    content: [
      {
        fr: "Pour chaque cas : géométrie, domaine et maillage, puis suivi de la convergence des résidus et lecture des champs de vitesse et de pression. Sur le profil NACA 0015, l'écoulement accélère sur l'extrados et une dépression se forme autour de l'aile. Sur le cylindre, simulé à 10, 15 et 20 m/s, la vitesse augmente sur les côtés et chute devant et derrière, comme le prévoit Bernoulli.",
        en: "For each case: geometry, domain and mesh, then monitoring residual convergence and reading the velocity and pressure fields. On the NACA 0015 airfoil, the flow speeds up over the upper surface and low pressure forms around the wing. On the cylinder, simulated at 10, 15 and 20 m/s, the velocity increases on the sides and drops in front and behind, as Bernoulli predicts.",
      },
      {
        fr: "Les coefficients de traînée et de portance du cylindre sont relevés pour chaque vitesse. La comparaison des deux cas montre pourquoi une aile a un profil et non une section ronde : à vitesse égale, le profil NACA produit bien plus de portance.",
        en: "The cylinder's drag and lift coefficients are recorded at each speed. Comparing both cases shows why a wing has an airfoil shape rather than a round section: at the same speed, the NACA airfoil produces far more lift.",
      },
    ],
    facts: [
      { label: { fr: "Logiciel", en: "Software" }, value: { fr: "STAR-CCM+", en: "STAR-CCM+" } },
      { label: { fr: "Vitesses du cylindre", en: "Cylinder speeds" }, value: { fr: "10, 15 et 20 m/s", en: "10, 15 and 20 m/s" } },
    ],
    tags: tg("STAR-CCM+", "CFD", "aérodynamique|aerodynamics"),
    image: "/images/projects/cfd-naca-cylindre/cylindre-vitesse.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Vitesse autour du cylindre, vue de dessus : le sillage se forme à l'arrière", en: "Velocity around the cylinder, top view: the wake forms behind it" },
    images: [
      { src: "/images/projects/cfd-naca-cylindre/cylindre-vecteurs.jpg", caption: { fr: "Vecteurs vitesse autour du cylindre", en: "Velocity vectors around the cylinder" } },
      { src: "/images/projects/cfd-naca-cylindre/naca-vitesse.jpg", caption: { fr: "Champ de vitesse autour du profil NACA 0015", en: "Velocity field around the NACA 0015 airfoil" } },
    ],
    documents: [
      { name: { fr: "TP profil NACA", en: "NACA airfoil lab (French)" }, url: "/documents/cfd-naca-cylindre/TP_CFD_profil_NACA.pdf" },
      { name: { fr: "TP cylindre", en: "Cylinder lab (French)" }, url: "/documents/cfd-naca-cylindre/TP_CFD_cylindre.pdf" },
    ],
  },
  {
    slug: "optimisation-convexe",
    title: { fr: "Optimiser le profil de vol d'un avion", en: "Optimising an aircraft's flight profile" },
    kind: { fr: "Projet d'optimisation convexe", en: "Convex optimisation project" },
    period: { fr: "2024 – 2025", en: "2024 – 2025" },
    status: "done",
    description: {
      fr: "À quelle altitude voler, et à quel rythme monter et descendre, pour consommer le moins de carburant possible sur une distance donnée ?",
      en: "At what altitude should an aircraft fly, and how fast should it climb and descend, to burn as little fuel as possible over a given distance?",
    },
    content: [
      {
        fr: "La trajectoire est découpée en N + 1 points d'altitude, avec un départ et une arrivée au sol. La consommation additionne trois termes : une consommation nominale, une pénalité quadratique quand l'avion s'écarte de son altitude optimale (qui dépend de sa masse), et une pénalité sur les changements d'altitude entre deux points successifs. Le but est de trouver le profil qui minimise la consommation totale.",
        en: "The trajectory is split into N + 1 altitude points, with take-off and landing at ground level. Fuel burn adds up three terms: a nominal consumption, a quadratic penalty when the aircraft moves away from its optimal altitude (which depends on its mass), and a penalty on altitude changes between two successive points. The goal is to find the profile that minimises total fuel burn.",
      },
      {
        fr: "À masse fixe, la consommation est une fonction quadratique des altitudes. J'ai écrit sa matrice hessienne, somme d'une matrice tridiagonale (le terme de montée et de descente) et d'une matrice diagonale (le terme d'altitude), et montré qu'elle est définie positive : le problème est strictement convexe, la solution existe et elle est unique. Le minimum vérifie un système linéaire, que j'ai résolu en Python par une méthode du gradient à pas fixe. J'ai ensuite étudié l'effet de la discrétisation (N de 50 à 1 000) et comparé trois avions : leurs paramètres de consommation fixent les pentes de montée et de descente.",
        en: "With fixed mass, fuel burn is a quadratic function of the altitudes. I wrote out its Hessian, the sum of a tridiagonal matrix (the climb and descent term) and a diagonal matrix (the altitude term), and showed that it is positive definite: the problem is strictly convex, so the solution exists and is unique. The minimum satisfies a linear system, which I solved in Python with a fixed-step gradient method. I then studied the effect of discretisation (N from 50 to 1,000) and compared three aircraft: their consumption parameters set the climb and descent slopes.",
      },
      {
        fr: "Avec une masse variable, l'avion s'allège en brûlant son carburant, et son altitude optimale monte au fil du vol. Le gradient exact devient difficile à calculer, car la masse en chaque point dépend de toute la consommation qui précède. J'ai donc utilisé une méthode de point fixe : on met à jour les altitudes à masse figée, puis on recalcule la masse le long du nouveau profil, et on recommence. La convergence demande des mises à jour assez petites pour éviter les oscillations, et une masse qui reste physiquement admissible.",
        en: "With varying mass, the aircraft gets lighter as it burns fuel, and its optimal altitude rises during the flight. The exact gradient becomes hard to compute, because the mass at each point depends on all the fuel burned before it. I therefore used a fixed-point method: update the altitudes with the mass frozen, then recompute the mass along the new profile, and repeat. Convergence requires updates small enough to avoid oscillations, and a mass that stays physically admissible.",
      },
    ],
    facts: [
      { label: { fr: "Langage", en: "Language" }, value: { fr: "Python", en: "Python" } },
      { label: { fr: "Méthodes", en: "Methods" }, value: { fr: "Gradient à pas fixe, point fixe", en: "Fixed-step gradient, fixed point" } },
      { label: { fr: "Cas étudiés", en: "Cases studied" }, value: { fr: "3 avions, N de 50 à 1 000", en: "3 aircraft, N from 50 to 1,000" } },
    ],
    tags: tg("Python", "optimisation", "convexité|convexity", "méthode du gradient|gradient method", "point fixe|fixed point"),
    image: "/images/projects/optimisation-convexe/profil-n100.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Profil de vol optimal pour N = 100 : montée, croisière, descente", en: "Optimal flight profile for N = 100: climb, cruise, descent" },
    images: [
      { src: "/images/projects/optimisation-convexe/profil-n50.jpg", caption: { fr: "Profil optimal, N = 50", en: "Optimal profile, N = 50" } },
      { src: "/images/projects/optimisation-convexe/profil-n200.jpg", caption: { fr: "Profil optimal, N = 200", en: "Optimal profile, N = 200" } },
      { src: "/images/projects/optimisation-convexe/profil-n500.jpg", caption: { fr: "Profil optimal, N = 500", en: "Optimal profile, N = 500" } },
      { src: "/images/projects/optimisation-convexe/profil-n1000.jpg", caption: { fr: "Profil optimal, N = 1 000", en: "Optimal profile, N = 1,000" } },
      { src: "/images/projects/optimisation-convexe/avion-1.jpg", caption: { fr: "Avion 1, masse variable", en: "Aircraft 1, varying mass" } },
      { src: "/images/projects/optimisation-convexe/avion-2.jpg", caption: { fr: "Avion 2, masse variable", en: "Aircraft 2, varying mass" } },
      { src: "/images/projects/optimisation-convexe/avion-3.jpg", caption: { fr: "Avion 3, masse variable", en: "Aircraft 3, varying mass" } },
    ],
  },
  {
    slug: "statistiques",
    title: { fr: "Statistiques avec Python", en: "Statistics with Python" },
    kind: { fr: "Mini-projet de sciences des données", en: "Data science mini-project" },
    period: { fr: "Janvier 2025", en: "January 2025" },
    status: "done",
    description: {
      fr: "Décrire un jeu de données, mesurer une corrélation, ajuster une régression et calculer un intervalle de confiance, le tout en Python.",
      en: "Describing a dataset, measuring a correlation, fitting a regression and computing a confidence interval, all in Python.",
    },
    content: [
      {
        fr: "Sur la production de lait de quinze vaches : statistiques descriptives (moyenne, médiane, quartiles, écart-type), boîtes à moustaches et histogrammes. Entre deux séries, la covariance et le coefficient de corrélation (r = 0,81) montrent un lien assez fort, et une régression linéaire par les moindres carrés donne la droite d'ajustement.",
        en: "On the milk production of fifteen cows: descriptive statistics (mean, median, quartiles, standard deviation), box plots and histograms. Between two series, the covariance and the correlation coefficient (r = 0.81) show a fairly strong link, and a least-squares linear regression gives the fitted line.",
      },
      {
        fr: "Sur dix mesures d'un temps de chute (moyenne 0,631 s, écart-type 0,017 s), on calcule un intervalle de confiance à 95 % avec la loi de Student, adaptée aux petits échantillons dont on ne connaît pas l'écart-type.",
        en: "On ten measurements of a fall time (mean 0.631 s, standard deviation 0.017 s), we compute a 95% confidence interval with Student's t-distribution, suited to small samples with unknown standard deviation.",
      },
    ],
    tags: tg("Python", "statistiques|statistics", "régression|regression"),
    image: "/images/projects/statistiques/regression.jpg",
    imageFit: "contain",
    images: [
      { src: "/images/projects/statistiques/boites.jpg", caption: { fr: "Boîtes à moustaches des deux séries", en: "Box plots of both series" } },
      { src: "/images/projects/statistiques/histogrammes.jpg", caption: { fr: "Histogrammes des deux séries", en: "Histograms of both series" } },
    ],
    documents: [
      { name: { fr: "Rapport", en: "Report (French)" }, url: "/documents/statistiques/Projet_sciences_des_donnees.pdf" },
    ],
  },
  {
    slug: "catia-1",
    title: { fr: "Premiers pas sous CATIA V5", en: "First steps in CATIA V5" },
    kind: { fr: "TP de CAO, module Catia I", en: "CAD labs, Catia I module" },
    period: { fr: "Novembre – décembre 2024", en: "November – December 2024" },
    status: "done",
    description: {
      fr: "Les TP du module Catia I : un boîtier en tôle assemblé à partir de quatre pièces, et un flacon de shampoing.",
      en: "The Catia I module labs: a sheet-metal casing assembled from four parts, and a shampoo bottle.",
    },
    content: [
      {
        fr: "Le fil rouge du module est un boîtier en tôle pliée. Chaque pièce est modélisée séparément : le corps du boîtier en U, le capot supérieur et deux brides de fixation en équerre. Elles sont ensuite assemblées dans l'atelier Assembly Design, en positionnant chaque pièce par des contraintes.",
        en: "The common thread of the module is a folded sheet-metal casing. Each part is modelled separately: the U-shaped casing body, the top cover and two angle mounting brackets. They are then assembled in the Assembly Design workbench, positioning each part with constraints.",
      },
      {
        fr: "Un second TP porte sur une forme plus libre, un flacon de shampoing, pour travailler une pièce aux formes courbes.",
        en: "A second lab deals with a freer shape, a shampoo bottle, to practise modelling a curved part.",
      },
    ],
    facts: [
      { label: { fr: "Logiciel", en: "Software" }, value: { fr: "CATIA V5 R19", en: "CATIA V5 R19" } },
      { label: { fr: "Ateliers", en: "Workbenches" }, value: { fr: "Part Design, Assembly Design", en: "Part Design, Assembly Design" } },
      { label: { fr: "Boîtier", en: "Casing" }, value: { fr: "4 pièces assemblées", en: "4 assembled parts" } },
    ],
    tags: tg("CAO|CAD", "CATIA V5", "tôlerie|sheet metal", "assemblage|assembly"),
    image: "/images/projects/catia-1/boitier-assemble.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Le boîtier assemblé : corps, capot et brides", en: "The assembled casing: body, cover and brackets" },
    images: [
      { src: "/images/projects/catia-1/boitier-assemble-2.jpg", caption: { fr: "Le boîtier assemblé, vu de l'autre côté", en: "The assembled casing, seen from the other side" } },
      { src: "/images/projects/catia-1/boitier.jpg", caption: { fr: "Corps du boîtier en tôle pliée", en: "Folded sheet-metal casing body" } },
      { src: "/images/projects/catia-1/capot.jpg", caption: { fr: "Capot supérieur", en: "Top cover" } },
      { src: "/images/projects/catia-1/bride.jpg", caption: { fr: "Bride de fixation", en: "Mounting bracket" } },
      { src: "/images/projects/catia-1/flacon.jpg", caption: { fr: "Flacon de shampoing", en: "Shampoo bottle" } },
    ],
  },
  {
    slug: "gestion-maintenance",
    title: { fr: "Réorganiser l'outillage d'un atelier de maintenance", en: "Reorganising the tooling of a maintenance workshop" },
    kind: { fr: "Projet de conduite et gestion de projet, en équipe de sept", en: "Project management project, team of seven" },
    period: { fr: "2024 – 2025", en: "2024 – 2025" },
    status: "done",
    description: {
      fr: "Un atelier de maintenance moteur aéronautique perd des journées entières à cause de son outillage. Comment monter le projet qui règle le problème ?",
      en: "An aircraft engine maintenance workshop loses whole days because of its tooling. How do you set up the project that fixes it?",
    },
    content: [
      {
        fr: "Le cas de départ : des zones de maintenance engorgées, un grand nombre d'outils cassés, obsolètes ou perdus, des postes peu flexibles et une charge de travail qui va augmenter. Conséquences : des jours d'arrêt dus à l'outillage, du matériel potentiellement dangereux et des tensions entre les équipes. Les objectifs fixés étaient de réduire le temps moyen d'immobilisation (TAT), d'absorber la nouvelle charge, de limiter les jours d'arrêt et d'améliorer l'environnement de travail.",
        en: "The starting point: congested maintenance areas, many broken, obsolete or lost tools, inflexible workstations and a workload about to grow. The consequences: days lost to tooling problems, potentially unsafe equipment and tension between teams. The goals were to cut the average turnaround time (TAT), absorb the new workload, reduce downtime and improve the working environment.",
      },
      {
        fr: "Nous avons découpé le projet en cinq lots, chacun avec son livrable : un livret de l'outillage nécessaire pour chaque tâche de maintenance, un audit et un inventaire du matériel existant, la réorganisation des espaces (l'outillage commun, environ 20 % du total, reste près des postes ; le reste part dans un nouveau bâtiment), un lien logistique avec des prestataires pour déplacer les outils, et un accompagnement des techniciens dans le changement. Le planning a été construit sous forme de diagramme de Gantt, avec une cartographie du processus cible et une matrice d'analyse des risques (probabilité et gravité).",
        en: "We split the project into five work packages, each with its own deliverable: a booklet listing the tooling needed for every maintenance task, an audit and inventory of existing equipment, the reorganisation of the spaces (common tooling, about 20% of the total, stays near the workstations; the rest moves to a new building), a logistics link with contractors to move tools, and support for technicians through the change. The schedule was built as a Gantt chart, together with a map of the target process and a risk analysis matrix (probability and severity).",
      },
    ],
    facts: [
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "7 étudiants", en: "7 students" } },
      { label: { fr: "Découpage", en: "Breakdown" }, value: { fr: "5 lots, 5 livrables", en: "5 work packages, 5 deliverables" } },
      { label: { fr: "Outils", en: "Tools" }, value: { fr: "Gantt, cartographie de processus, matrice des risques", en: "Gantt, process map, risk matrix" } },
    ],
    tags: tg("gestion de projet|project management", "Gantt", "analyse des risques|risk analysis", "maintenance", "travail en équipe|teamwork"),
    image: "/images/projects/gestion-maintenance/analyse-risques.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Analyse des risques du projet", en: "Project risk analysis" },
    images: [
      { src: "/images/projects/gestion-maintenance/gantt.jpg", caption: { fr: "Diagramme de Gantt du projet", en: "Project Gantt chart" } },
      { src: "/images/projects/gestion-maintenance/cartographie-process.jpg", caption: { fr: "Cartographie du processus cible", en: "Target process map" } },
    ],
  },
  {
    slug: "analyse-harmonique",
    title: { fr: "Analyser un son avec Fourier", en: "Analysing a sound with Fourier" },
    kind: { fr: "Projet d'analyse harmonique", en: "Harmonic analysis project" },
    period: { fr: "Octobre 2024", en: "October 2024" },
    status: "done",
    description: {
      fr: "Comprendre la transformée de Fourier discrète sur des signaux simples, puis retrouver les harmoniques d'un enregistrement et resynthétiser le son.",
      en: "Understanding the discrete Fourier transform on simple signals, then finding the harmonics of a recording and resynthesising the sound.",
    },
    content: [
      {
        fr: "Première partie : six signaux (sinus, cosinus déphasé, somme de cosinus, sinus redressé…) et leurs spectres calculés en Python. Les pics donnent les fréquences présentes, les fréquences au-delà de la moitié de la fréquence d'échantillonnage se lisent comme des fréquences négatives, et pour un signal réel X(−f) est le conjugué de X(f).",
        en: "Part one: six signals (sine, phase-shifted cosine, sum of cosines, rectified sine…) and their spectra computed in Python. The peaks give the frequencies present, frequencies above half the sampling rate read as negative frequencies, and for a real signal X(−f) is the conjugate of X(f).",
      },
      {
        fr: "Deuxième partie : un enregistrement audio de 2,3 s. Son spectre fait apparaître une fondamentale à 259 Hz et des harmoniques à 519, 778, 1 038 et 1 297 Hz. En additionnant ces sinusoïdes avec leurs amplitudes, on reconstruit un son synthétique proche de l'original.",
        en: "Part two: a 2.3 s audio recording. Its spectrum shows a fundamental at 259 Hz and harmonics at 519, 778, 1,038 and 1,297 Hz. Adding these sine waves with their amplitudes rebuilds a synthetic sound close to the original.",
      },
    ],
    facts: [
      { label: { fr: "Fondamentale", en: "Fundamental" }, value: { fr: "259 Hz", en: "259 Hz" } },
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "Avec E. Houdré", en: "With E. Houdré" } },
    ],
    tags: tg("Python", "Fourier", "traitement du signal|signal processing"),
    image: "/images/projects/analyse-harmonique/spectre-voix.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Spectre de l'enregistrement : la fondamentale et ses harmoniques", en: "Spectrum of the recording: the fundamental and its harmonics" },
    images: [
      { src: "/images/projects/analyse-harmonique/signal-audio.jpg", caption: { fr: "Le signal audio dans le temps", en: "The audio signal over time" } },
      { src: "/images/projects/analyse-harmonique/spectre-x3.jpg", caption: { fr: "Spectre de 2 cos(10πt) + 7 cos(2πt), avec les fréquences négatives", en: "Spectrum of 2 cos(10πt) + 7 cos(2πt), with negative frequencies" } },
    ],
    documents: [
      { name: { fr: "Rapport", en: "Report (French)" }, url: "/documents/analyse-harmonique/Rapport_analyse_harmonique.pdf" },
    ],
  },
  {
    slug: "astray",
    title: { fr: "ASTRAY", en: "ASTRAY" },
    kind: { fr: "Projet associatif, AeroIPSA", en: "Student association project, AeroIPSA" },
    period: { fr: "2025 – 2026", en: "2025 – 2026" },
    status: "ongoing",
    description: {
      fr: "Une minifusée avec deux objectifs : monter le plus haut possible, et larguer en vol une poudre colorée biodégradable.",
      en: "A mini rocket with two goals: climbing as high as possible, and releasing a biodegradable coloured powder in flight.",
    },
    content: [
      {
        fr: "ASTRAY est une minifusée de 75 cm de long et 65 mm de diamètre, pour 1,2 kg sans moteur, propulsée par un Pro24-6G. Elle doit remplir deux missions : atteindre l'altitude la plus haute possible avec ce moteur, et libérer pendant le vol une poudre colorée biodégradable, visible depuis le sol.",
        en: "ASTRAY is a mini rocket 75 cm long and 65 mm in diameter, weighing 1.2 kg without its motor, powered by a Pro24-6G. It has two missions: reaching the highest possible altitude with this motor, and releasing a biodegradable coloured powder during the flight, visible from the ground.",
      },
      {
        fr: "La fusée est entièrement conçue sous CATIA V5, bloc par bloc : une coiffe ogivale de 20 cm équipée d'un tube de Pitot, qui intègre aussi le mécanisme de largage de la poudre, un bloc caméra et batterie avec une RunCam, une cage pour le parachute, le tube principal et le bloc de propulsion avec ses quatre ailerons. Des pièces de test servent à valider les compartiments à poudre.",
        en: "The rocket is fully designed in CATIA V5, block by block: a 20 cm ogive nose cone fitted with a Pitot tube, which also houses the powder release mechanism, a camera and battery block with a RunCam, a parachute cage, the main body tube and the propulsion block with its four fins. Test parts are used to validate the powder compartments.",
      },
      {
        fr: "Dans l'équipe, j'ai réalisé les simulations CFD sous STAR-CCM+, de la coiffe seule puis de la fusée complète. Je travaille aussi sur la fabrication : électronique embarquée et soudure, structure en composite, et intégration mécanique des différents blocs dans le tube.",
        en: "Within the team, I ran the CFD simulations in STAR-CCM+, first of the nose cone alone and then of the full rocket. I also work on the build: onboard electronics and soldering, the composite structure, and the mechanical integration of the blocks into the body tube.",
      },
      {
        fr: "La stabilité et la trajectoire sont vérifiées avec StabTraj, l'outil de Planète Sciences. La marge statique est de 2,8 à 3 calibres, avec une finesse de 11,5 et un coefficient de portance de 17,3 : la fusée est stable et respecte les critères du cahier des charges. La simulation prévoit une culmination vers 330 m au bout de 8 s, puis une descente sous parachute à environ 9 à 11 m/s. La fusée n'a pas encore volé.",
        en: "Stability and trajectory are checked with StabTraj, the Planète Sciences tool. The static margin is 2.8 to 3 calibres, with a slenderness of 11.5 and a normal force coefficient of 17.3: the rocket is stable and meets the specification criteria. The simulation predicts an apogee around 330 m after 8 s, then a descent under parachute at about 9 to 11 m/s. The rocket has not flown yet.",
      },
    ],
    facts: [
      { label: { fr: "Moteur", en: "Motor" }, value: { fr: "Pro24-6G", en: "Pro24-6G" } },
      { label: { fr: "Dimensions", en: "Size" }, value: { fr: "75 cm, Ø 65 mm, 1,2 kg à vide", en: "75 cm, Ø 65 mm, 1.2 kg dry" } },
      { label: { fr: "Marge statique", en: "Static margin" }, value: { fr: "2,8 à 3 calibres", en: "2.8 to 3 calibres" } },
      { label: { fr: "Apogée simulée", en: "Simulated apogee" }, value: { fr: "≈ 330 m", en: "≈ 330 m" } },
    ],
    tags: tg("STAR-CCM+", "CFD", "électronique|electronics", "soudure|soldering", "composites", "intégration|integration", "CATIA V5", "StabTraj"),
    image: "/images/projects/astray/astray.jpg",
    imageFit: "contain",
    imageCredit: { fr: "ASTRAY dans CATIA V5 : le tube transparent laisse voir les blocs internes", en: "ASTRAY in CATIA V5: the transparent tube shows the internal blocks" },
    images: [
      { src: "/images/projects/astray/photo-integration.jpg", caption: { fr: "ASTRAY en cours d'intégration : tube en composite, coiffe et ailerons montés", en: "ASTRAY during integration: composite tube, nose cone and fins fitted" } },
      { src: "/images/projects/astray/astray-3d.jpg", caption: { fr: "La fusée complète en perspective", en: "The full rocket in perspective" } },
      { src: "/images/projects/astray/coiffe.jpg", caption: { fr: "Coiffe ogivale avec son tube de Pitot", en: "Ogive nose cone with its Pitot tube" } },
      { src: "/images/projects/astray/coiffe-interieur.jpg", caption: { fr: "Une version précédente de la coiffe, vue en transparence", en: "An earlier version of the nose cone, see-through view" } },
      { src: "/images/projects/astray/arbre-poudre.jpg", caption: { fr: "Pièce du mécanisme de largage de la poudre", en: "Part of the powder release mechanism" } },
      { src: "/images/projects/astray/compartiments-poudre.jpg", caption: { fr: "Compartiments de test pour la poudre", en: "Powder test compartments" } },
      { src: "/images/projects/astray/bloc-camera.jpg", caption: { fr: "Bloc caméra et batterie", en: "Camera and battery block" } },
      { src: "/images/projects/astray/cage-parachute.jpg", caption: { fr: "Cage du parachute", en: "Parachute cage" } },
      { src: "/images/projects/astray/bloc-propulsion.jpg", caption: { fr: "Bloc de propulsion : tube moteur, bagues de centrage et aileron", en: "Propulsion block: motor tube, centring rings and fin" } },
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


// ─── Thèmes des projets terminés (ordre d'affichage) ───────────────────────
// Chaque projet terminé doit apparaître dans un thème. Dans un thème : du plus récent au plus ancien.

export const projectThemes: { id: string; title: T; slugs: string[] }[] = [
  {
    id: "astronomie",
    title: { fr: "Astronomie et mécanique céleste", en: "Astronomy and celestial mechanics" },
    slugs: ["2007-vw266", "gaia-606", "estimation-trajectoire", "trou-noir"],
  },
  {
    id: "missions",
    title: { fr: "Missions spatiales et rentrée atmosphérique", en: "Space missions and atmospheric entry" },
    slugs: ["rentree-atmospherique", "neptune"],
  },
  {
    id: "propulsion",
    title: { fr: "Propulsion et mécanique des fluides", en: "Propulsion and fluid mechanics" },
    slugs: ["propulsion-nucleaire", "tuyere-laval", "mecanique-fluides-ncku", "cfd-naca-cylindre"],
  },
  {
    id: "conception",
    title: { fr: "Conception, matériaux et gestion de projet", en: "Design, materials and project management" },
    slugs: ["catia-2", "inconel-718", "prisma", "gestion-maintenance", "catia-1"],
  },
  {
    id: "modelisation",
    title: { fr: "Modélisation, calcul et automatique", en: "Modelling, computation and control" },
    slugs: ["equation-chaleur", "dynamique-aeronefs", "optimisation-convexe", "statistiques", "analyse-harmonique"],
  },
];

// ─── Autres projets (liste courte, sans page) ──────────────────────────────
// Pour donner une page à l'un d'eux, déplace-le dans `projects` ci-dessus.

export const archive: { group: T; items: { title: T; note?: T }[] }[] = [
  {
    group: { fr: "Cycle ingénieur, 2e année (2025 – 2026)", en: "Engineering cycle, 2nd year (2025 – 2026)" },
    items: [
      { title: { fr: "Conception avion et écoconception, industrialisation et méthodes de production", en: "Aircraft design and eco-design, industrialisation and production methods" } },    ],
  },
  {
    group: { fr: "Cycle ingénieur, 1re année (2024 – 2025)", en: "Engineering cycle, 1st year (2024 – 2025)" },
    items: [
      { title: { fr: "Modélisation et simulation numérique, application aux véhicules", en: "Modelling and numerical simulation for vehicles" } },
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
