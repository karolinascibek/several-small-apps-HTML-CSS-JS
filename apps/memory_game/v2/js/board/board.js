import { removeAllChildNodes, convertStrSizeToNumbers } from "../basic_function/basic-function.js";
import { createCard } from "./card.js";
import { setValueCards } from "../logic_game/game.js";
import { getColor, getLevel } from "../settings-board/Settings.js"
import { resetActiveCard, resetNumberOfMatchedCards } from "./ActiveCards.js";


const setSize = (obj, size) => {
    obj.style.width = `${size}px`;
    obj.style.height = `${size}px`;
}

const createRowBoard = () => {
    const rowBoard = document.createElement("div");
    rowBoard.classList.add("board-row");
    return rowBoard;
}

function getSettings(){
    const nxm = getLevel();
    const color = getColor().choiceValue;
    const { n, m } = convertStrSizeToNumbers(nxm);
    return {
        size: [n, m], color: color
    }
}

function createCards(){
    const { size:[n, m], color} = getSettings();
    const board = document.getElementById("board");
    removeAllChildNodes(board)

    let width = board.clientWidth / (1 * n);

    let nr = 0;
    for (let row = 0; row < m; row++) {
        const rowBoard = createRowBoard();

        for (let col = 0; col < n; col++) {
            const card = createCard(nr);
            setSize(card, width);
            // setBackgroundColor(card, color);
            rowBoard.appendChild(card);
            nr ++;
        }
        board.appendChild(rowBoard);
    }
}

function createBoard() {
    setValueCards();
    resetActiveCard();
    resetNumberOfMatchedCards();
    createCards();
}



export { createBoard }