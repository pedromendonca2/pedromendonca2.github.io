document.documentElement.classList.add("js");

const translations = {
  pt: {
    pageTitle: "Pedro Mendonça — Engenheiro de IA",
    pageDescription: "Portfólio de Pedro Henrique Mendonça, engenheiro de IA e estudante de Ciência da Computação.",
    skipLink: "Ir para o conteúdo",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    navAbout: "Sobre",
    navExperience: "Experiência",
    navProjects: "Projetos",
    navContact: "Contato",
    heroEyebrow: "Engenharia de IA • Vitória, ES",
    heroTitle: "Eu construo inteligência que <span>vira produto.</span>",
    heroLead: "Transformo dados, modelos e código em experiências úteis — da ideia ao software funcionando.",
    heroProjects: "Explorar projetos",
    heroContact: "Vamos conversar",
    heroStudy: "Ciência da Computação • 8º período",
    heroArtAlt: "Escultura de dados abstrata em tons azuis e violetas",
    scroll: "Role para descobrir",
    aboutKicker: "SOBRE",
    aboutTitle: "Curiosidade técnica.<br /><span>Visão de produto.</span>",
    aboutLead: "Sou Pedro, engenheiro de IA e estudante de Ciência da Computação. Gosto do ponto em que pesquisa, engenharia e experiência do usuário se encontram.",
    aboutBody: "Meu trabalho é tirar ideias do papel: entender o problema, organizar os dados, experimentar modelos e construir a camada de software que coloca tudo em uso. Valorizo soluções claras, testáveis e bem documentadas.",
    principleOneTitle: "Pensar antes de modelar",
    principleOneBody: "Bons dados e um problema bem definido vêm primeiro.",
    principleTwoTitle: "Construir para ser usado",
    principleTwoBody: "Tecnologia só cria valor quando encontra pessoas.",
    principleThreeTitle: "Evoluir com evidência",
    principleThreeBody: "Testar, medir, aprender e melhorar continuamente.",
    skillAi: "Inteligência & dados",
    skillSoftware: "Produto & software",
    skillTools: "Infra & qualidade",
    experienceKicker: "TRAJETÓRIA",
    experienceTitle: "Aprender fazendo.<br /><span>Entregar aprendendo.</span>",
    experienceNote: "Uma trajetória guiada por problemas reais e vontade de construir.",
    current: "ATUAL",
    experienceRole: "Engenheiro de IA",
    experienceBody: "Desenvolvimento de soluções de inteligência artificial aplicadas a produtos e processos de saúde.",
    inProgress: "EM CURSO",
    educationTitle: "Ciência da Computação",
    educationBody: "8º período, aprofundando fundamentos de software, dados e inteligência artificial.",
    projectsKicker: "PROJETOS SELECIONADOS",
    projectsTitle: "Do conceito ao<br /><span>repositório.</span>",
    projectsNote: "Projetos que combinam engenharia, dados e construção de produto.",
    liftupType: "APP MOBILE • FULL STACK",
    liftupBody: "Aplicativo fitness para criar, organizar e acompanhar treinos. Uma experiência mobile completa, apoiada por API, autenticação, persistência e testes.",
    tiresiasType: "MACHINE LEARNING • DADOS",
    tiresiasBody: "Pipeline de dados e machine learning para prever aluguéis residenciais na Grande Vitória, da coleta em múltiplas fontes à validação e inferência do modelo.",
    hackatruckType: "PROGRAMA DE INOVAÇÃO • IA & MOBILE",
    hackatruckBody: "Programa de capacitação prática em desenvolvimento mobile, serviços cognitivos e soluções em nuvem, com foco em inovação aplicada.",
    tovType: "WEBSITE • DESENVOLVIMENTO WEB",
    tovBody: "Website institucional para escritório de advocacia, com foco em presença digital, clareza de informação e experiência responsiva.",
    viewRepository: "Ver repositório",
    viewWebsite: "Ver site",
    contactKicker: "CONTATO",
    contactTitle: "Tem uma ideia em mente?<br /><span>Vamos construí-la.</span>",
    contactBody: "Estou disponível para conversar sobre projetos, pesquisa, tecnologia e boas oportunidades.",
    footerMade: "Projetado e construído com intenção.",
    backTop: "Voltar ao topo",
  },
  en: {
    pageTitle: "Pedro Mendonça — AI Engineer",
    pageDescription: "Portfolio of Pedro Henrique Mendonça, AI engineer and Computer Science student.",
    skipLink: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    heroEyebrow: "AI Engineering • Vitória, Brazil",
    heroTitle: "I build intelligence that <span>becomes a product.</span>",
    heroLead: "I turn data, models, and code into useful experiences — from the initial idea to working software.",
    heroProjects: "Explore projects",
    heroContact: "Let's talk",
    heroStudy: "Computer Science • 8th semester",
    heroArtAlt: "Abstract data sculpture in blue and violet tones",
    scroll: "Scroll to discover",
    aboutKicker: "ABOUT",
    aboutTitle: "Technical curiosity.<br /><span>Product vision.</span>",
    aboutLead: "I'm Pedro, an AI engineer and Computer Science student. I enjoy the point where research, engineering, and user experience meet.",
    aboutBody: "My job is to bring ideas to life: understand the problem, organize the data, experiment with models, and build the software layer that puts everything to use. I value clear, testable, and well-documented solutions.",
    principleOneTitle: "Think before modeling",
    principleOneBody: "Good data and a well-defined problem come first.",
    principleTwoTitle: "Build to be used",
    principleTwoBody: "Technology creates value when it reaches people.",
    principleThreeTitle: "Evolve through evidence",
    principleThreeBody: "Test, measure, learn, and improve continuously.",
    skillAi: "Intelligence & data",
    skillSoftware: "Product & software",
    skillTools: "Infrastructure & quality",
    experienceKicker: "JOURNEY",
    experienceTitle: "Learn by building.<br /><span>Deliver by learning.</span>",
    experienceNote: "A journey shaped by real problems and the drive to build.",
    current: "CURRENT",
    experienceRole: "AI Engineer",
    experienceBody: "Developing artificial intelligence solutions applied to healthcare products and processes.",
    inProgress: "IN PROGRESS",
    educationTitle: "Computer Science",
    educationBody: "8th semester, deepening my foundations in software, data, and artificial intelligence.",
    projectsKicker: "SELECTED PROJECTS",
    projectsTitle: "From concept to<br /><span>repository.</span>",
    projectsNote: "Projects combining engineering, data, and product development.",
    liftupType: "MOBILE APP • FULL STACK",
    liftupBody: "A fitness app for creating, organizing, and tracking workouts. A complete mobile experience backed by an API, authentication, persistence, and testing.",
    tiresiasType: "MACHINE LEARNING • DATA",
    tiresiasBody: "A data and machine learning pipeline to predict residential rents in Greater Vitória, from multi-source collection to model validation and inference.",
    hackatruckType: "INNOVATION PROGRAM • AI & MOBILE",
    hackatruckBody: "Hands-on training program in mobile development, cognitive services, and cloud-based solutions, focused on applied innovation.",
    tovType: "WEBSITE • WEB DEVELOPMENT",
    tovBody: "Institutional website for a law firm, focused on digital presence, clear information, and a responsive user experience.",
    viewRepository: "View repository",
    viewWebsite: "View website",
    contactKicker: "CONTACT",
    contactTitle: "Have an idea in mind?<br /><span>Let's build it.</span>",
    contactBody: "I'm open to conversations about projects, research, technology, and meaningful opportunities.",
    footerMade: "Designed and built with intention.",
    backTop: "Back to top",
  },
  de: {
    pageTitle: "Pedro Mendonça — KI-Ingenieur",
    pageDescription: "Portfolio von Pedro Henrique Mendonça, KI-Ingenieur und Informatikstudent.",
    skipLink: "Zum Inhalt springen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    navAbout: "Über mich",
    navExperience: "Erfahrung",
    navProjects: "Projekte",
    navContact: "Kontakt",
    heroEyebrow: "KI-Engineering • Vitória, Brasilien",
    heroTitle: "Ich entwickle Intelligenz, die <span>zum Produkt wird.</span>",
    heroLead: "Ich verwandle Daten, Modelle und Code in nützliche Erlebnisse — von der Idee bis zur funktionierenden Software.",
    heroProjects: "Projekte entdecken",
    heroContact: "Kontakt aufnehmen",
    heroStudy: "Informatik • 8. Semester",
    heroArtAlt: "Abstrakte Datenskulptur in Blau- und Violetttönen",
    scroll: "Weiter entdecken",
    aboutKicker: "ÜBER MICH",
    aboutTitle: "Technische Neugier.<br /><span>Produktvision.</span>",
    aboutLead: "Ich bin Pedro, KI-Ingenieur und Informatikstudent. Mich begeistert der Punkt, an dem Forschung, Engineering und Nutzererfahrung zusammenkommen.",
    aboutBody: "Meine Arbeit bringt Ideen in die Praxis: das Problem verstehen, Daten strukturieren, Modelle erproben und die Softwareschicht entwickeln, die alles nutzbar macht. Ich schätze klare, testbare und gut dokumentierte Lösungen.",
    principleOneTitle: "Vor dem Modellieren denken",
    principleOneBody: "Gute Daten und ein klar definiertes Problem stehen am Anfang.",
    principleTwoTitle: "Für echte Nutzung entwickeln",
    principleTwoBody: "Technologie schafft Wert, wenn sie Menschen erreicht.",
    principleThreeTitle: "Mit Evidenz weiterentwickeln",
    principleThreeBody: "Testen, messen, lernen und kontinuierlich verbessern.",
    skillAi: "Intelligenz & Daten",
    skillSoftware: "Produkt & Software",
    skillTools: "Infrastruktur & Qualität",
    experienceKicker: "WERDEGANG",
    experienceTitle: "Lernen durch Bauen.<br /><span>Liefern durch Lernen.</span>",
    experienceNote: "Ein Weg, geprägt von realen Problemen und dem Antrieb, Neues zu schaffen.",
    current: "AKTUELL",
    experienceRole: "KI-Ingenieur",
    experienceBody: "Entwicklung von Lösungen mit künstlicher Intelligenz für Produkte und Prozesse im Gesundheitswesen.",
    inProgress: "LAUFEND",
    educationTitle: "Informatik",
    educationBody: "8. Semester mit Vertiefung in Software, Daten und künstlicher Intelligenz.",
    projectsKicker: "AUSGEWÄHLTE PROJEKTE",
    projectsTitle: "Vom Konzept zum<br /><span>Repository.</span>",
    projectsNote: "Projekte, die Engineering, Daten und Produktentwicklung verbinden.",
    liftupType: "MOBILE APP • FULL STACK",
    liftupBody: "Eine Fitness-App zum Erstellen, Organisieren und Verfolgen von Trainings. Ein vollständiges mobiles Erlebnis mit API, Authentifizierung, Persistenz und Tests.",
    tiresiasType: "MACHINE LEARNING • DATEN",
    tiresiasBody: "Eine Daten- und Machine-Learning-Pipeline zur Vorhersage von Wohnungsmieten im Großraum Vitória — von der Erfassung aus mehreren Quellen bis zur Validierung und Inferenz.",
    hackatruckType: "INNOVATIONSPROGRAMM • KI & MOBILE",
    hackatruckBody: "Praxisnahes Ausbildungsprogramm für mobile Entwicklung, kognitive Services und Cloud-Lösungen mit Fokus auf angewandte Innovation.",
    tovType: "WEBSITE • WEBENTWICKLUNG",
    tovBody: "Institutionelle Website für eine Anwaltskanzlei mit Fokus auf digitale Präsenz, klare Informationen und responsive Nutzererfahrung.",
    viewRepository: "Repository ansehen",
    viewWebsite: "Website ansehen",
    contactKicker: "KONTAKT",
    contactTitle: "Eine Idee im Kopf?<br /><span>Lassen Sie uns sie bauen.</span>",
    contactBody: "Ich freue mich auf Gespräche über Projekte, Forschung, Technologie und spannende Möglichkeiten.",
    footerMade: "Mit Sorgfalt gestaltet und entwickelt.",
    backTop: "Nach oben",
  },
};

const languageButtons = document.querySelectorAll("[data-lang]");
const textElements = document.querySelectorAll("[data-i18n]");
const htmlElements = document.querySelectorAll("[data-i18n-html]");
const altElements = document.querySelectorAll("[data-i18n-alt]");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const siteHeader = document.querySelector(".site-header");
const descriptionMeta = document.querySelector('meta[name="description"]');
let currentLanguage = "pt";

function setLanguage(language) {
  const dictionary = translations[language];
  if (!dictionary) return;

  currentLanguage = language;

  textElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  htmlElements.forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  altElements.forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) element.alt = dictionary[key];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = { pt: "pt-BR", en: "en", de: "de" }[language];
  document.title = dictionary.pageTitle;
  descriptionMeta?.setAttribute("content", dictionary.pageDescription);
  updateMenuLabel();

  try {
    localStorage.setItem("portfolio-language", language);
  } catch (_) {
    // The site still works when storage is unavailable.
  }
}

function updateMenuLabel() {
  if (!menuToggle) return;
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  const key = isOpen ? "menuClose" : "menuOpen";
  menuToggle.setAttribute("aria-label", translations[currentLanguage][key]);
}

function closeMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  mainNav?.classList.remove("open");
  document.body.classList.remove("menu-open");
  updateMenuLabel();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

menuToggle?.addEventListener("click", () => {
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  mainNav?.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
  updateMenuLabel();
});

mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeMenu();
});

function updateHeader() {
  siteHeader?.classList.toggle("scrolled", window.scrollY > 18);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !reducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.revealDelay || 0);
        window.setTimeout(() => entry.target.classList.add("is-visible"), delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px" },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const heroArt = document.querySelector("#hero-art");

if (heroArt && !reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  heroArt.addEventListener("pointermove", (event) => {
    const bounds = heroArt.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroArt.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
  });

  heroArt.addEventListener("pointerleave", () => {
    heroArt.style.transform = "perspective(1000px) rotateY(-2deg) rotateX(1deg)";
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

let storedLanguage = "pt";
try {
  storedLanguage = localStorage.getItem("portfolio-language") || "pt";
} catch (_) {
  storedLanguage = "pt";
}
setLanguage(translations[storedLanguage] ? storedLanguage : "pt");
