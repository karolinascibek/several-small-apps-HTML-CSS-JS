function ifEndGame(numberOfMatchedCards){
    const card = document.querySelectorAll(".card");

    if(numberOfMatchedCards === card.length ){
        return true;
    }
    return false;
}



export { ifEndGame }