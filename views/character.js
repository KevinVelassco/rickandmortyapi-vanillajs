const d = document;

export function viewCharacter(data){
    const modeDark = localStorage.getItem("dark-mode");
    const $infoCharacter = d.getElementById("infoCharacter"),
        $fragment = d.createDocumentFragment(),
        $SectionCharacter = d.getElementById("character"),
        $newInfoCharacter = d.createElement("div");

    $newInfoCharacter.setAttribute("id", "infoCharacter");
    $newInfoCharacter.classList.add("container-cards");

    $SectionCharacter.replaceChild($newInfoCharacter, $infoCharacter);

    data.forEach(element => {
        const { name, status, species, gender, origin, location, image} = element;
        const $article = d.createElement("article"),
            $containerImg = d.createElement("div"),
            $containerInfo = d.createElement("div"),
            $name = d.createElement("h3"),
            $nameText = d.createTextNode(name),
            $statuspecies = d.createElement("p"),
            $statusIcon = d.createElement("span"),
            $statuspeciesText = d.createTextNode(`${status} - ${species} (${gender})`),
            $originTitle = d.createElement("p"),
            $originTitleText = d.createTextNode("First seen in"),
            $origin = d.createElement("p"),
            $originText = d.createTextNode(origin.name),
            $locationTitle = d.createElement("p"),
            $locationTitleText = d.createTextNode("Last known location"),
            $location = d.createElement("p"),
            $locationText = d.createTextNode(location.name),
            $image = d.createElement("img");

            $image.setAttribute("src", image);
            $image.setAttribute("alt", `Imagen de ${name}`);
            $image.classList.add("card__img");
            $containerImg.classList.add("card__imgContainer");
            $containerImg.appendChild($image);

            $name.appendChild($nameText);
            $name.classList.add("card__title");
            $statusIcon.classList.add("card__icon",
            `${status.toUpperCase() === "DEAD" ?
                "card__icon--dead" :
                status.toUpperCase() === "ALIVE" ?
                "card__icon--alive" :
                "card__icon--unknown"}`);
            $statuspecies.appendChild($statusIcon);
            $statuspecies.appendChild($statuspeciesText);
            $statuspecies.classList.add("card__subtitle");
            $originTitle.appendChild($originTitleText);
            $originTitle.classList.add("contentTitle");
            $origin.appendChild($originText);
            $origin.classList.add("contentInfo");
            $locationTitle.appendChild($locationTitleText);
            $locationTitle.classList.add("contentTitle");
            $location.appendChild($locationText);
            $location.classList.add("contentInfo");
            $containerInfo.classList.add("card__InfoContainer");
            if(modeDark === "true") $containerInfo.classList.add("card__InfoContainer--modedark");
            $containerInfo.append($name, $statuspecies, $originTitle, $origin, $locationTitle, $location);

            $article.classList.add("card");
            if(modeDark === "true") $article.classList.add("card--modedark");
            $article.append($containerImg, $containerInfo);
            $fragment.appendChild($article);
        });

    $newInfoCharacter.appendChild($fragment);
}