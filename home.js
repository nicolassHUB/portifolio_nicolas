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


        /* =================================================
           PROJETO 1 — TASKFORGE
        ================================================= */

        "project1.category":
            "TaskForge - Em andamento",

        "project1.description":
            "Sistema para organizar projetos e tarefas, com API e banco de dados para gerenciar informações.",


        /* =================================================
           PROJETO 2 — PORTFÓLIO
        ================================================= */

        "project2.category":
            "Portfólio - Landing Page",

        "project2.description":
            "Portfólio pessoal criado para apresentar meus projetos, habilidades e evolução como desenvolvedor.",


        /* =================================================
           PROJETO 3
        ================================================= */

        "project3.category":
            "Landing Page",

        "project3.description":
            "A história do Quarteto Fantástico com o Pantera Negra e Wakanda, explicada.",


        /* =================================================
           PROJETO 4
        ================================================= */

        "project4.category":
            "Landing Page",

        "project4.description":
            "A história do Quarteto Fantástico com o Pantera Negra e Wakanda, explicada.",


        /* =================================================
           CONTATO
        ================================================= */

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


        /* =================================================
           PROJECT 1 — TASKFORGE
        ================================================= */

        "project1.category":
            "TaskForge - In Progress",

        "project1.description":
            "A system for organizing projects and tasks, with an API and database for managing information.",


        /* =================================================
           PROJECT 2 — PORTFOLIO
        ================================================= */

        "project2.category":
            "Portfolio - Landing Page",

        "project2.description":
            "Personal portfolio created to showcase my projects, skills and growth as a developer.",


        /* =================================================
           PROJECT 3
        ================================================= */

        "project3.category":
            "Landing Page",

        "project3.description":
            "The story of the Fantastic Four with Black Panther and Wakanda, explained.",


        /* =================================================
           PROJECT 4
        ================================================= */

        "project4.category":
            "Landing Page",

        "project4.description":
            "The story of the Fantastic Four with Black Panther and Wakanda, explained.",


        /* =================================================
           CONTACT
        ================================================= */

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

    const language =
        navigator.language.toLowerCase();

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

    const elements =
        document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key =
            element.dataset.i18n;

        const translation =
            translations[language]?.[key];

        if (translation) {

            element.textContent =
                translation;

        }

    });


    /* =====================================================
       ATUALIZAR IDIOMA DO HTML
    ===================================================== */

    document.documentElement.lang =
        language === "en"
            ? "en"
            : "pt-BR";
}


/* =========================================================
   MENU MOBILE
========================================================= */

function initMobileMenu() {

    const header =
        document.querySelector(".Nicolas__header");

    const menuButton =
        document.querySelector(".box__bar");

    const navigation =
        document.querySelector(".Nicolas__navigation");


    /* =====================================================
       VERIFICAR ELEMENTOS
    ===================================================== */

    if (
        !header ||
        !menuButton ||
        !navigation
    ) {
        return;
    }


    /* =====================================================
       ABRIR / FECHAR MENU
    ===================================================== */

    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                header.classList.toggle("menu-open");


            /* Atualizar acessibilidade */

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    /* =====================================================
       FECHAR AO CLICAR EM UM LINK
    ===================================================== */

    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(link => {

        link.addEventListener(
            "click",
            function () {

                header.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


    /* =====================================================
       FECHAR COM ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                header.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================================
       FECHAR AO VOLTAR PARA DESKTOP
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 600) {

                header.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* =========================================================
   INICIAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        translatePage();

        initMobileMenu();

    }
);
