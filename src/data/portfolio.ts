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
        fr: "Un moteur nucléaire thermique, comme NERVA dans les années 1960, fait passer de l'hydrogène liquide dans un réacteur à fission avant de le détendre dans une tuyère. Il atteint 800 à 1 000 s d'impulsion spécifique, contre 450 s pour le meilleur moteur chimique, ce qui réduit fortement la masse de propergol pour aller vers Mars. Mais au-delà de 2 500 K, l'hydrogène chaud attaque le combustible en graphite et arrache de la matière fissile, rejetée dans le jet.",
        en: "A nuclear thermal engine, like NERVA in the 1960s, passes liquid hydrogen through a fission reactor before expanding it in a nozzle. It reaches 800 to 1,000 s of specific impulse, against 450 s for the best chemical engine, which greatly reduces the propellant mass for a trip to Mars. But above 2,500 K, hot hydrogen attacks the graphite fuel and strips off fissile material, which is ejected in the exhaust.",
      },
      {
        fr: "Après un état de l'art (histoire de Rover/NERVA et DRACO, contraintes techniques, économiques, écologiques et réglementaires), nous avons comparé quatre matériaux réfractaires et retenu un combustible tout-carbure (U₀,₂Zr₀,₈)C, qui supprime l'interface graphite responsable de la corrosion et supporte une paroi plus chaude.",
        en: "After a review (the history of Rover/NERVA and DRACO, technical, economic, environmental and regulatory constraints), we compared four refractory materials and chose an all-carbide (U₀.₂Zr₀.₈)C fuel, which removes the graphite interface responsible for corrosion and withstands a hotter wall.",
      },
      {
        fr: "Pour chiffrer le gain, nous avons modélisé sous MATLAB l'écoulement d'hydrogène dans un canal de refroidissement de 90 cm (modèle quasi-1D compressible : masse, quantité de mouvement avec frottement, énergie). Avec une paroi autorisée à 2 700 K au lieu de 2 400 K, la température et la vitesse de sortie augmentent de 37 % par rapport au combustible historique UC.",
        en: "To quantify the gain, we modelled the hydrogen flow in a 90 cm cooling channel in MATLAB (quasi-1D compressible model: mass, momentum with friction, energy). With the wall allowed to reach 2,700 K instead of 2,400 K, the exit temperature and velocity increase by 37% compared with the historical UC fuel.",
      },
    ],
    facts: [
      { label: { fr: "Combustible retenu", en: "Chosen fuel" }, value: { fr: "(U₀,₂Zr₀,₈)C tout-carbure", en: "All-carbide (U₀.₂Zr₀.₈)C" } },
      { label: { fr: "Modèle", en: "Model" }, value: { fr: "Canal quasi-1D compressible, MATLAB", en: "Quasi-1D compressible channel, MATLAB" } },
      { label: { fr: "Gain en sortie", en: "Exit gain" }, value: { fr: "+37 % de température et de vitesse", en: "+37% temperature and velocity" } },
      { label: { fr: "Équipe", en: "Team" }, value: { fr: "Six étudiants du parcours ELS", en: "Six students from the ELS track" } },
    ],
    tags: tg("MATLAB", "propulsion", "matériaux|materials", "thermo-fluide|thermo-fluids", "hydrogène|hydrogen"),
    image: "/images/projects/propulsion-nucleaire/champs-canal.jpg",
    imageFit: "contain",
    imageCredit: { fr: "Champs de vitesse et de température dans le canal de refroidissement, combustible (U,Zr)C", en: "Velocity and temperature fields in the cooling channel, (U,Zr)C fuel" },
    images: [
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
    kind: { fr: "Projet missions planétaires et rentrées atmosphériques", en: "Planetary missions and atmospheric entry project" },
    period: { fr: "Mai 2026", en: "May 2026" },
    status: "done",
    description: {
      fr: "Comparer le retour sur Terre de la capsule Apollo et de la capsule Orion d'Artemis, avec un simulateur de trajectoire 3D sous MATLAB.",
      en: "Comparing the return to Earth of the Apollo capsule and Artemis's Orion capsule, with a 3D trajectory simulator in MATLAB.",
    },
    content: [
      {
        fr: "Les deux capsules reviennent de la Lune à environ 11 km/s, mais Orion est plus grosse (5 m de diamètre contre 3,9 m, 8,5 t contre 5,8 t) et utilise une entrée à rebond : elle replonge après être brièvement remontée, pour étaler le freinage et viser plus loin. Le projet compare les deux programmes : aérodynamique des capsules, protection thermique et stratégies de guidage (entrée directe ou à rebond).",
        en: "Both capsules come back from the Moon at about 11 km/s, but Orion is bigger (5 m diameter against 3.9 m, 8.5 t against 5.8 t) and uses a skip entry: it climbs back briefly before diving again, to spread the braking and reach further. The project compares the two programmes: capsule aerodynamics, thermal protection and guidance strategies (direct or skip entry).",
      },
      {
        fr: "La simulation s'appuie sur un programme MATLAB de calcul de rentrée en 3D écrit par Ivan Fedioun (ICARE-CNRS) : Terre ellipsoïdale, atmosphère US 1976, gravité variable, intégration en Runge-Kutta d'ordre 4. Je l'ai remis en état (corrections de syntaxe, conventions de latitude et d'azimut) puis alimenté avec les conditions d'entrée réelles d'Apollo 12 et d'Artemis I, tirées du rapport de mission NASA pour Apollo et des données publiées pour Artemis.",
        en: "The simulation relies on a 3D re-entry MATLAB code written by Ivan Fedioun (ICARE-CNRS): ellipsoidal Earth, US 1976 atmosphere, varying gravity, fourth-order Runge-Kutta integration. I got it working again (syntax fixes, latitude and azimuth conventions) and fed it with the real entry conditions of Apollo 12 and Artemis I, taken from the NASA mission report for Apollo and published data for Artemis.",
      },
      {
        fr: "Pour Orion en entrée directe balistique (entrée à 122 km, 11 km/s, pente de −5,85°), la capsule parcourt 1 660 km en 413 s. La décélération culmine à 7,6 g vers 52 km d'altitude et la capsule repasse sous Mach 1 vers 18 km. Le programme garde une portance constante : il ne peut donc pas reproduire le rebond piloté d'Orion, mais il permet de comparer les couloirs d'entrée et la première phase de freinage.",
        en: "For Orion in a ballistic direct entry (entry at 122 km, 11 km/s, −5.85° flight-path angle), the capsule travels 1,660 km in 413 s. Deceleration peaks at 7.6 g around 52 km altitude and the capsule drops below Mach 1 around 18 km. The code keeps lift constant, so it cannot reproduce Orion's guided skip, but it lets us compare the entry corridors and the first braking phase.",
      },
    ],
    facts: [
      { label: { fr: "Vitesse d'entrée", en: "Entry speed" }, value: { fr: "11 km/s", en: "11 km/s" } },
      { label: { fr: "Décélération max", en: "Peak deceleration" }, value: { fr: "7,6 g (Orion, entrée directe)", en: "7.6 g (Orion, direct entry)" } },
      { label: { fr: "Outil", en: "Tool" }, value: { fr: "MATLAB, code ICARE-CNRS", en: "MATLAB, ICARE-CNRS code" } },
    ],
    tags: tg("MATLAB", "rentrée atmosphérique|atmospheric entry", "RK4", "Apollo", "Artemis"),
    image: "/images/projects/rentree-atmospherique/altitude-vitesse.png",
    imageFit: "contain",
    imageCredit: { fr: "Altitude et vitesse d'Orion pendant la rentrée simulée", en: "Orion altitude and speed during the simulated entry" },
    images: [
      { src: "/images/projects/rentree-atmospherique/deceleration.png", caption: { fr: "Décélération en fonction de l'altitude", en: "Deceleration versus altitude" } },
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
      { title: { fr: "Conception avion et écoconception, industrialisation et méthodes de production", en: "Aircraft design and eco-design, industrialisation and production methods" } },    ],
  },
  {
    group: { fr: "Cycle ingénieur, 1re année (2024 – 2025)", en: "Engineering cycle, 1st year (2024 – 2025)" },
    items: [
      { title: { fr: "Modélisation et simulation numérique, application aux véhicules", en: "Modelling and numerical simulation for vehicles" } },
      { title: { fr: "Modélisation et analyse dynamique des aéronefs", en: "Aircraft dynamics modelling and analysis" } },
      { title: { fr: "Optimisation convexe", en: "Convex optimisation" } },
      { title: { fr: "Initiation aux bases de données", en: "Introduction to databases" } },
      { title: { fr: "Conduite et gestion de projet", en: "Project management" } },
    ],
  },
  {
    group: { fr: "Projets personnels et associatifs", en: "Personal and association projects" },
    items: [
      { title: { fr: "ASTRAY, AeroIPSA", en: "ASTRAY, AeroIPSA" }, note: { fr: "Vol en recherche d'altitude maximale, test du système de stabilisation et largage de poudres colorées", en: "Maximum-altitude flight, stabilisation system test and coloured powder release" } },    ],
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
