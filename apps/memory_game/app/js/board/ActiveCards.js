const activeCard = [];
let numberOfMatchedCards = 0;

function resetActiveCard(){
    activeCard.length = 0;
}

function resetNumberOfMatchedCards(){
    numberOfMatchedCards = 0;
}

function addToNumbertOfMatchedCards(value){
    numberOfMatchedCards += value;
}

function getNumberOfMatchedcards(){
    return numberOfMatchedCards;
}

export {
    resetActiveCard, 
    activeCard,
    resetNumberOfMatchedCards,
    addToNumbertOfMatchedCards,
    getNumberOfMatchedcards
}