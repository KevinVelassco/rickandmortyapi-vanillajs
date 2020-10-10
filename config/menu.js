export default function menu() {
    document.addEventListener("click", (e) => {
        if(e.target.matches(".panel-btn") || e.target.matches(".panel-btn *") ||
            e.target.matches(".menu__link")){
            document.querySelector(".panel").classList.toggle("is-active");
            document.querySelector(".panel-btn").classList.toggle("is-active");
        }
    })
}