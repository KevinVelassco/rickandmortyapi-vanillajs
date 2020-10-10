import pagination from "./config/pagination.js";
import router from "./config/router.js"
import { modeDarkToggle, modeDark } from "./config/mode_dark.js";
import menu from "./config/menu.js";

const d = document;

const init = () => {
    const hash = window.location.hash ? window.location.hash : null;
    const route = router(hash);
    pagination(route);
}

d.addEventListener("DOMContentLoaded", () => {
    init();
    modeDark();
    menu();
});

window.addEventListener("hashchange", () => {
    init();
});

//Modo oscuro
d.addEventListener("click", (e) => {
    if(e.target.matches(".modeDark")){
        modeDarkToggle();
    }
})