import { valuesCard } from "../logic_game/game.js";

const activeCard = [];


function createCard(nr) {
    const card = document.createElement("div");
    card.classList.add("card");
    // card.innerText = nr;
    card.id = `card-${nr}`;
    card.addEventListener("click", clickOnCard)
    return card;
}

function clickOnCard() {
    if (!this.classList.contains("active-card")) {
        this.classList.add("active-card");
        // this.classList.add("clicked-card");
        let idx = this.id.split("-")[1];
        console.log(`${idx}`)
        console.log(`${valuesCard[idx]}`)
        this.innerText = valuesCard[idx];
        console.log(valuesCard)
        activeCard.push(this);

        if (activeCard.length > 2 && activeCard[0].id !== activeCard[1].id) {
            if (activeCard[0].innerText === activeCard[1].innerText ) {
                for (let i = 0; i < 2; i++) {
                    activeCard[0].classList.remove("active-card");
                    // activeCard[0].classList.add("clicked-card");
                    activeCard.shift()
                }
                //console.log("rózne")
            }
            else {
                // console.log(`czy równe: ${activeCard[0].innerText !== activeCard[1].innerText}`)
                for (let i = 0; i < 2; i++) {
                    activeCard[0].classList.remove("active-card");
                    // activeCard[0].classList.remove("clicked-card");
                    activeCard[0].innerText = "";
                   // console.log(`usuniety: ${activeCard[i]}`);
                   // console.log(activeCard)
                    activeCard.shift()
                }
                //console.log("takie same")
            }
        }
        //console.log(activeCard)
    }

}


export { createCard }