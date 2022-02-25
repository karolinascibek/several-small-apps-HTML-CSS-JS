function createCard(nr) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = nr;
    card.addEventListener("click", clickOnCard)
    return card;
}

const clickOnCard = () => {
    console.log("Kliknieto na karte!");
}


export {createCard}