import { removeAllChildNodes, convertStrSizeToNumbers } from "../basic_function/basic-function.js";
import { createCard } from "./card.js";
import { setValueCards } from "../logic_game/game.js";
import { getColor, getLevel } from "../settings-board/Settings.js"
import { resetActiveCard, resetNumberOfMatchedCards } from "./ActiveCards.js";

//pomysleć nad dodaniem innych ustawien - na razie jest tylko rozmiar plaanszy

const setSize = (obj, size) => {
    obj.style.width = `${size}px`;
    obj.style.height = `${size}px`;
}

const setBackgroundColor = (obj, color) => {
    obj.style.background = color;
}

const createRowBoard = () => {
    const rowBoard = document.createElement("div");
    rowBoard.classList.add("board-row");
    return rowBoard;
}

function createBoard() {
    setValueCards();
    resetActiveCard();
    resetNumberOfMatchedCards();

    const nxm = getLevel();
    const color = getColor().choiceValue;

    const { n, m } = convertStrSizeToNumbers(nxm);
    const board = document.getElementById("board");
    removeAllChildNodes(board)

    let width = board.clientWidth / (1 * n);

    let nr = 0;
    for (let row = 0; row < m; row++) {
        const rowBoard = createRowBoard();

        for (let col = 0; col < n; col++) {
            const card = createCard(nr);
            setSize(card, width);
            setBackgroundColor(card, color);
            rowBoard.appendChild(card);
            nr ++;
        }
        board.appendChild(rowBoard);
    }

}



export { createBoard }