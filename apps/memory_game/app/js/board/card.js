import { getValueCard } from "../logic_game/game.js";
import { getColor } from "../settings-board/Settings.js";
import { updatePoints } from "../nav/points.js";
import { ifEndGame } from "../logic_game/end-game.js";
import { createBtnStart } from "./btn-start.js";
import { setLinearGradient, setBackgroundColor} from "../basic_function/basic-function.js";
import { clockStop } from "../nav/clock.js";
import { updateHistory } from "../nav/history.js";
import {
    activeCard,
    addToNumbertOfMatchedCards,
    resetNumberOfMatchedCards,
    getNumberOfMatchedcards
} from "./ActiveCards.js"


function setBackgroundCard(card, color){
    setLinearGradient(card, color, 'transparent');
}


function createCard(nr) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = `card-${nr}`;
    setBackgroundColor(card, getColor().choiceValue);
    setBackgroundCard(card, getColor().choiceValue);
    card.addEventListener("click", clickOnCard);
    return card;
}

function equalValueOfActiveCards() {
    for (let i = 0; i < 2; i++) {
        activeCard[0].classList.remove("active-card");
        activeCard[0].classList.add("clicked-card");
        activeCard.shift();
    }
}

function differentValueOfActiveCards() {
    for (let i = 0; i < 2; i++) {
        activeCard[0].classList.remove("active-card");
        // activeCard[0].style.background = getColor().choiceValue;
        setBackgroundCard(activeCard[0], getColor().choiceValue)
        setBackgroundColor(activeCard[0], getColor().choiceValue)
        activeCard[0].innerText = "";
        activeCard.shift();
    }
    addToNumbertOfMatchedCards(-2);
}

function setActiveCard(card) {
    let idx = card.id.split("-")[1];
    card.classList.add("active-card");
    card.style.color = getColor().choiceValue;
    card.style.background = getColor().colorOfMatchingCards;
    card.style.fontSize = `${card.clientWidth/2}px`;
    card.innerText = getValueCard(idx);
    activeCard.push(card);
}


function clickOnCard() {
    if (!this.classList.contains("active-card") && !this.classList.contains("clicked-card")) {
        setActiveCard(this);
        addToNumbertOfMatchedCards(1);
        if (activeCard.length > 2) {
            if (activeCard[0].innerText === activeCard[1].innerText) {
                equalValueOfActiveCards();
            }
            else {
                differentValueOfActiveCards();
            }
            updatePoints();
        }
        if (ifEndGame(getNumberOfMatchedcards())) {
            createBtnStart();
            clockStop();
            updateHistory();
            console.log("End-new game")
        }
    }
}




export { createCard }