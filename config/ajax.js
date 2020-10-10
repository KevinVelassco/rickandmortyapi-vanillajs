export function ajax(props){
    const { url, cbsuccess } = props;

    fetch(url).
    then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbsuccess(json))
    .catch(error => {
        document.querySelector(".section").innerHTML =  `
            <div>
                <p>${error.status} : ${error.statusText} </p>
            </div>
        `;
    })
}