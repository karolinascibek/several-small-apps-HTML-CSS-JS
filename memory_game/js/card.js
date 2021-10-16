function createCards(n=8) {
    const colors = drawColors(n/2);
    let temp = [...colors, ...colors];
    const board = document.querySelector('#board');
    for (let i = 0; i < n; i++) {
        const card = createCard()
        setColors(card, temp )
        board.appendChild(card)
    }
}


function setColors(el,colors){
        let r = getRandomInt(0, colors.length-1);
        setColorToCard(el, colors[r]);
        console.log("=>"+colors[r])
        colors.splice(r,1);
}

function createdVariantsSizeBoard() {
    const sizes = [8, 16, 36]
    const ul = document.querySelector('#size_board');
    for (let i = 0; i < sizes.length; i++) {
        const li = createdVariantsBoard(sizes[i]);
        ul.appendChild(li);
    }
}

function createdObject(tag) {
    return document.createElement(tag);
}

// function setObjects(parent, amount, createdObjectFunction){
//     const parent = document.querySelector(parent);
//     for (let i = 0; i < amount; i++) {
//         const child = createdObjectFunction();
//         parent.appendChild(child);
//     }
// }

function createdVariantsBoard(number) {
    const li = createdObject("li");
    li.textContent = number;
    li.onclick = setSizeBoard;
    return li;
}

function createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;
}

function removeElements(node){
    while(node.firstChild){
        node.removeChild(node.lastChild)
    }
}


function setSizeBoard(event) {
    const n = event.target.textContent;
    const board = document.querySelector("#board");
    removeElements(board)
    createCards(n) 
}

function drawColors(n){
    const colors = [
        "#FFD700","#1E90FF","#ADFF2F","#000000","#FF69B4", "#FFA07A","#7CFC00","#9400D3","#8f8585", 
        "#ffffff","#858544","#d91616","#FF8C00","#208630", "#fcca86","#5F9EA0","#B8860B","#2F4F4F"
    ]

    const choiceColors = [];
    console.log("n="+n)
    for(let i=0; i<n; i++){
        let r = getRandomInt(0, colors.length-1);
        console.log(i+"=>"+r)
        console.log(i+"=>"+colors[r])
        choiceColors.push(colors[r]);
        colors.splice(r,1)
    }
    console.log(choiceColors)
    return choiceColors;
}

function setColorToCard(card, color){
    card.style.background = color;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


// const colors = [
//     "#FFD700","#1E90FF","#ADFF2F","#4B0082","#FF69B4", "#FFA07A","#7CFC00","#9400D3","#D3D3D3", 
//     "#4B0082","#FAFAD2","#9370DB","#FF8C00","#00008B", "#FAEBD7","#5F9EA0","#B8860B","#2F4F4F"
// ]


// createdVariantsSizeBoard()
// createCards(20) 

// const colors = drawColors(8)
// setColors(colors)


