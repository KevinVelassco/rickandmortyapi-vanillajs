import { viewCharacter } from "../views/character.js";
import { viewLocation } from "../views/location.js";
import { viewEpisode } from "../views/episode.js";

const routes = [
    { hash: '#character', view: viewCharacter, url: "https://rickandmortyapi.com/api/character"},
    { hash: '#location', view: viewLocation, url: "https://rickandmortyapi.com/api/location" },
    { hash: '#episode', view: viewEpisode, url: "https://rickandmortyapi.com/api/episode" }
];

export default function router(hash) {
    let path = hash ?? "#character";
    let route = null;

    routes.forEach((e) => {
        const $elemento = document.querySelector(e.hash);

        if(path === e.hash) {
            route = e;
            $elemento.style.setProperty("display", "block");
        } else {
            $elemento.style.setProperty("display", "none");
        }
    });
    return route;
}