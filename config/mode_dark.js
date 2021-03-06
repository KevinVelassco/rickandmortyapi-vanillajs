const d = document;

const $body = d.body,
    $header = d.querySelector(".header"),
    $nav = d.querySelector(".nav"),
    $aside = d.querySelector(".panel"),
    $modeDarks = d.querySelectorAll(".modeDark"),
    $sections = d.querySelectorAll(".section"),
    $sectionTitles = d.querySelectorAll(".section__title"),
    $footer = d.querySelector(".footer");

export function modeDarkToggle(){
    const $containerCards = d.querySelector(".container-cards");
    $body.classList.toggle("modedark");
    $header.classList.toggle("header--modedark");
    $nav.classList.toggle("nav--modedark");
    $aside.classList.toggle("panel--modedark");
    $modeDarks.forEach(($modeDark) => $modeDark.classList.toggle("active"));
    $sections.forEach(($section) => $section.classList.toggle("section--modedark"));
    $sectionTitles.forEach(($sectionTitle) => $sectionTitle.classList.toggle("section__title--modedark"));

    for (let $card of $containerCards.children) {
        $card.classList.toggle("card--modedark");
        const $cardInfoContainer = $card.lastElementChild;
        $cardInfoContainer.classList.toggle("card__InfoContainer--modedark");
    }

    $footer.classList.toggle("footer--modedark");

    //localStorage
    if(localStorage.getItem("dark-mode") === "true") {
        localStorage.setItem("dark-mode", false);
    }else {
        localStorage.setItem("dark-mode", true);
    }
}

export function modeDark(){
    if(localStorage.getItem("dark-mode") === "true") {
        $body.classList.add("modedark");
        $header.classList.add("header--modedark");
        $nav.classList.add("nav--modedark");
        $aside.classList.add("panel--modedark");
        $modeDarks.forEach(($modeDark) => $modeDark.classList.add("active"));
        $sections.forEach(($section) => $section.classList.add("section--modedark"));
        $sectionTitles.forEach(($sectionTitle) => $sectionTitle.classList.add("section__title--modedark"));
        $footer.classList.add("footer--modedark");
    }else {
        $body.classList.remove("modedark");
        $header.classList.remove("header--modedark");
        $nav.classList.remove("nav--modedark");
        $aside.classList.remove("panel--modedark");
        $modeDarks.forEach(($modeDark) => $modeDark.classList.remove("active"));
        $sections.forEach(($section) => $section.classList.remove("section--modedark"));
        $sectionTitles.forEach(($sectionTitle) => $sectionTitle.classList.remove("section__title--modedark"));
        $footer.classList.remove("footer--modedark");
    }
}