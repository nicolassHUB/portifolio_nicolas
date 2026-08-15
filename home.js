/* =========================================================
   TRADUÇÕES
========================================================= */

const translations = {

    /* =====================================================
       PORTUGUÊS
    ===================================================== */

    pt: {

        "nav.home": "Início",
        "nav.about": "Sobre",
        "nav.projects": "Projetos",
        "nav.contact": "Contato",

        "hero.title":
            "Desenvolvedor de Software",

        "hero.description":
            "O desenvolvedor Nicolas Henrique usa seu domínio em Python e IA para criar sites e aplicativos inovadores, focado em impulsionar o futuro da tecnologia.",

        "about.title":
            "Desenvolvedor de Software",

        "about.description":
            "Sou Nicolas Henrique, tenho 20 anos e curso Análise e Desenvolvimento de Sistemas na PUC Minas. Sou fascinado por tecnologia, procuro dominar Python e focado em criar sites, aplicativos e soluções com Inteligência Artificial. Busco sempre evoluir participando de palestras e projetos práticos para transformar ideias em códigos eficientes.",

        "about.resume":
            "Currículo",

        "projects.title":
            "Melhores Projetos",

        "project1.category":
            "Aplicativo - Andamento",

        "project1.description":
            "A história do Quarteto Fantástico com o Pantera Negra e Wakanda, explicada.",

        "project2.category":
            "Landing Page",

        "project2.description":
            "A história do Quarteto Fantástico com o Pantera Negra e Wakanda, explicada.",

        "project3.category":
            "Landing Page",

        "project3.description":
            "A história do Quarteto Fantástico com o Pantera Negra e Wakanda, explicada.",

        "project4.category":
            "Landing Page",

        "project4.description":
            "A história do Quarteto Fantástico com o Pantera Negra e Wakanda, explicada.",

        "contact.title":
            "Gostou do meu trabalho? Vamos criar algo incrível juntos!",

        "contact.description":
            "Estou disponível para novos projetos, freelas e parcerias. Escolha o melhor canal para conversarmos.",

        "contact.button":
            "Contratar",

        "footer.follow":
            "Siga Nicolas"
    },


    /* =====================================================
       INGLÊS
    ===================================================== */

    en: {

        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "hero.title":
            "Software Developer",

        "hero.description":
            "Nicolas Henrique uses his expertise in Python and AI to create innovative websites and applications, focused on shaping the future of technology.",

        "about.title":
            "Software Developer",

        "about.description":
            "I'm Nicolas Henrique, I'm 20 years old and I'm studying Systems Analysis and Development at PUC Minas. I'm passionate about technology, focused on mastering Python and creating websites, applications and solutions with Artificial Intelligence. I constantly seek to improve through lectures and practical projects, turning ideas into efficient code.",

        "about.resume":
            "Resume",

        "projects.title":
            "Best Projects",

        "project1.category":
            "Application - In Progress",

        "project1.description":
            "The story of the Fantastic Four with Black Panther and Wakanda, explained.",

        "project2.category":
            "Landing Page",

        "project2.description":
            "The story of the Fantastic Four with Black Panther and Wakanda, explained.",

        "project3.category":
            "Landing Page",

        "project3.description":
            "The story of the Fantastic Four with Black Panther and Wakanda, explained.",

        "project4.category":
            "Landing Page",

        "project4.description":
            "The story of the Fantastic Four with Black Panther and Wakanda, explained.",

        "contact.title":
            "Did you like my work? Let's create something amazing together!",

        "contact.description":
            "I'm available for new projects, freelance work and partnerships. Choose the best channel to get in touch.",

        "contact.button":
            "Hire Me",

        "footer.follow":
            "Follow Nicolas"
    }

};


/* =========================================================
   DETECTAR IDIOMA
========================================================= */

function getLanguage() {

    const language = navigator.language.toLowerCase();

    if (language.startsWith("en")) {
        return "en";
    }

    return "pt";
}


/* =========================================================
   TRADUZIR PÁGINA
========================================================= */

function translatePage() {

    const language = getLanguage();

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key = element.dataset.i18n;

        const translation = translations[language]?.[key];

        if (translation) {
            element.textContent = translation;
        }

    });


    /* Atualiza o idioma do HTML */

    document.documentElement.lang =
        language === "en"
            ? "en"
            : "pt-BR";
}


/* =========================================================
   INICIAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    translatePage
);
