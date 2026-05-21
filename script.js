const translations = {
  pt: {
    title: "Olá! Eu sou o Pedro.",
    subtitle: "Desenvolvedor focado em experiências web modernas, acessíveis e interativas.",
    chip1: "✨ UI Interativa",
    chip2: "📱 Design Responsivo",
    chip3: "📊 Dados & Visualização",
    aboutTitle: "Sobre",
    aboutText:
      "Crio interfaces elegantes com HTML, CSS e JavaScript, combinando performance, estética e boa experiência para quem usa. Também aplico Python para análise e visualização de dados com NumPy e Matplotlib.",
    skillsTitle: "Habilidades",
    contactTitle: "Contato",
    contactText: "Disponível para conversar sobre projetos, colaborações e oportunidades.",
    contactEmail: "ph8simoes4@gmail.com",
    linkedinText: "🔗 LinkedIn",
    footer: "© 2026 Pedro Mendonça",
  },
  fr: {
    title: "Salut ! Je suis Pedro.",
    subtitle: "Développeur axé sur des expériences web modernes, accessibles et interactives.",
    chip1: "✨ UI interactive",
    chip2: "📱 Design responsive",
    chip3: "📊 Données & visualisation",
    aboutTitle: "À propos",
    aboutText:
      "Je crée des interfaces élégantes en HTML, CSS et JavaScript en combinant performance, esthétique et expérience utilisateur. J'utilise aussi Python pour l'analyse et la visualisation de données avec NumPy et Matplotlib.",
    skillsTitle: "Compétences",
    contactTitle: "Contact",
    contactText: "Disponible pour discuter de projets, collaborations et opportunités.",
    contactEmail: "ph8simoes4@gmail.com",
    linkedinText: "🔗 LinkedIn",
    footer: "© 2026 Pedro Mendonça",
  },
};

const buttons = document.querySelectorAll(".lang-switch button");
const elements = document.querySelectorAll("[data-i18n]");
const FADE_DURATION_MS = 250;

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.classList.add("fade");
    if (dict[key]) {
      setTimeout(() => {
        el.textContent = dict[key];
        el.classList.remove("fade");
      }, FADE_DURATION_MS);
    } else {
      setTimeout(() => {
        el.classList.remove("fade");
      }, FADE_DURATION_MS);
    }
  });
  buttons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
  document.documentElement.lang = lang;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage("pt");
