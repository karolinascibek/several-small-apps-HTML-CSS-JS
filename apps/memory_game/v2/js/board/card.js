import { valuesCard } from "../logic_game/game.js";

const activeCard = [];


function createCard(nr) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = `card-${nr}`;
    card.addEventListener("click", clickOnCard)
    return card;
}

function equalValueOfActiveCards() {
    for (let i = 0; i < 2; i++) {
        activeCard[0].classList.remove("active-card");
        activeCard[0].classList.add("clicked-card");
        activeCard.shift()
    }
}

function differentValueOfActiveCards() {
    for (let i = 0; i < 2; i++) {
        activeCard[0].classList.remove("active-card");
        activeCard[0].innerText = "";
        activeCard.shift()
    }
}

function setActiveCard(card) {
    card.classList.add("active-card");
    let idx = card.id.split("-")[1];
    card.innerText = valuesCard[idx];
    activeCard.push(card);
}

function clickOnCard() {
    if (!this.classList.contains("active-card") && !this.classList.contains("clicked-card")) {
        setActiveCard(this);

        if (activeCard.length > 2) {
            if (activeCard[0].innerText === activeCard[1].innerText) {
                equalValueOfActiveCards();
            }
            else {
                differentValueOfActiveCards();
            }
        }
    }

}


export { createCard }