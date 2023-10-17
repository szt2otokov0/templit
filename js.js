window.onload = () => {
    console.log("hi")
    let heroes = [
        { firstName: "Ahsoka", lastName: "Tano", job: "padawan" },
        { firstName: "Boba", lastName: "Fett", job: "fejvadász" },
        { firstName: "Han", lastName: "Solo", job: "csempész" },
        { firstName: "Leia", lastName: "Organa", job: "szenátor" },
        { firstName: "Kylo Ren", lastName:"Evil Dude", job: "being Zoli"}
    ]

    let body = document.body;
    function drawHero(hero) {
        let card = document.createElement("div");
        card.innerHTML = `<h4>${hero.firstName} ${hero.lastName}</h4>`
        card.innerHTML += `<div>${hero.job}</div>`
        card.style =    "height: max-content;" + 
                        "width: 20vw;" +
                        "border: 1px solid black;" + 
                        "border-radius: 10px;" + 
                        "margin: 1em;" + 
                        "padding: 0.5em;";
        body.append(card)
    }
    function drawHeroInTable(hero){
        let grid = document.querySelector("table");
        let row = document.createElement("tr");
        for(stat in hero){
            let cell = document.createElement("td");
            cell.innerHTML = hero[stat];
            row.append(cell)
        }
        grid.append(row)
    }
    function drawTableHeader(hero){
        let grid = document.querySelector("table");
        let row = document.createElement("tr");
        for(stat in hero){
            let header = document.createElement("th");
            header.innerHTML = stat;
            row.append(header)
        }
        grid.append(row);
    }
    drawTableHeader(heroes[0])
    for (hero of heroes) {
        drawHero(hero);
        drawHeroInTable(hero);
    }
}

