const header = document.querySelector(".Nicolas__header");
const menuButton = document.querySelector(".box__bar");
const menuLinks = document.querySelectorAll(".Nicolas__navigation a");

menuButton.addEventListener("click", () => {
    header.classList.toggle("menu-open");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("menu-open");
    });
});