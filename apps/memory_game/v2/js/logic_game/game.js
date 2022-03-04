import { settings } from "../settings-board/Settings.js";
import { getRandomInt, convertStrSizeToNumbers } from "../basic_function/basic-function.js";

// losowe usatwienie kolorów
let valuesCard = [];


function prepareValueCards(nr){
    let cards = [];
    for (let i = 0; i < nr/2; i++) {
        cards[i] = i+1;
    }
    return [...cards, ...cards];
}

  // 2. rozmieszczenie ich losowo na planszy

function shuffleCards () {
    const {n, m} = convertStrSizeToNumbers(settings[0].choiceValue);

    let cards = prepareValueCards(n*m); 
    cards.map( (card, idx) => {
        let randomIdx = getRandomInt(0, n*m);
        cards[idx] = cards[randomIdx];
        cards[randomIdx] = card;
    });
    return cards;
}

function setValueCard(){
    valuesCard = shuffleCards();
}

export { valuesCard, setValueCard }
