import { ajax } from "../config/ajax.js";

const d = document;

export default function pagination(props){

    const { view, url, hash} = props;
    let pagesApi = 1;
    let page = 1;

    ajax({
        url,
        cbsuccess : (json) => {
            const { pages } = json.info;
            pagesApi = pages;

            view(json.results);
            d.getElementById("page").innerHTML  = page;
            d.querySelector(".pagination").style.setProperty("visibility", "visible");
        }
    });

    document.addEventListener("click", (e) => {

        if(e.target.matches(".pagination__previous *")){
            if (page <= 1) return;
            page--
        }

        if(e.target.matches(".pagination__next *")){
            if (page >= pagesApi) return;
            page++
        }

        d.getElementById("page").innerHTML  = page;

        if(e.target.matches(".pagination__previous *") || e.target.matches(".pagination__next *")){
            ajax({
                url: `${url}/?page=${page}`,
                cbsuccess : (json) => {
                    view(json.results);
                    d.querySelector(hash).scrollIntoView();
                }
            });
        }
    });
}