const translations = {
  pt: {
    title: "Olá! Eu sou o Pedro.",
    subtitle: "Estudante de Ciência da Computação (7º período) e Engenheiro de IA na Ease Saúde.",
    chip1: "Engenharia de IA",
    chip2: "Ciência da Computação",
    chip3: "Ease Saúde",
    aboutTitle: "Sobre",
    aboutText:
      "Trabalho com soluções de IA, focado em transformar dados em produtos inteligentes. Gosto de construir sistemas úteis e bem documentados.",
    experienceTitle: "Experiência",
    experienceRole: "Engenheiro de IA",
    experienceCompany: "Ease Saúde",
    contactTitle: "Contato",
    contactText: "Disponível para conversar sobre projetos, pesquisa e oportunidades.",
    contactEmail: "mendonca.phsm@gmail.com",
    footer: "© 2026 Pedro Mendonça",
  },
  en: {
    title: "Hi! I'm Pedro.",
    subtitle: "Computer Science student (7th semester) and AI Engineer at Ease Saúde.",
    chip1: "AI Engineering",
    chip2: "Computer Science",
    chip3: "Ease Saúde",
    aboutTitle: "About",
    aboutText:
      "I work on AI solutions, focused on turning data into intelligent products. I like building useful, well-documented systems.",
    experienceTitle: "Experience",
    experienceRole: "AI Engineer",
    experienceCompany: "Ease Saúde",
    contactTitle: "Contact",
    contactText: "Open to conversations about projects, research, and opportunities.",
    contactEmail: "mendonca.phsm@gmail.com",
    footer: "© 2026 Pedro Mendonça",
  },
  de: {
    title: "Hallo! Ich bin Pedro.",
    subtitle: "Informatikstudent (7. Semester) und KI-Ingenieur bei Ease Saúde.",
    chip1: "KI-Engineering",
    chip2: "Informatik",
    chip3: "Ease Saúde",
    aboutTitle: "Über mich",
    aboutText:
      "Ich arbeite an KI-Lösungen und verwandle Daten in intelligente Produkte. Ich baue gerne nützliche, gut dokumentierte Systeme.",
    experienceTitle: "Erfahrung",
    experienceRole: "KI-Ingenieur",
    experienceCompany: "Ease Saúde",
    contactTitle: "Kontakt",
    contactText: "Offen für Gespräche über Projekte, Forschung und Chancen.",
    contactEmail: "mendonca.phsm@gmail.com",
    footer: "© 2026 Pedro Mendonça",
  },
};

const buttons = document.querySelectorAll(".lang-switch button");
const elements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  buttons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
  document.documentElement.lang = lang;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage("pt");
