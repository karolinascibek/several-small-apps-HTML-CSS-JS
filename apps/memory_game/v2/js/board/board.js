import { removeAllChildNodes, convertStrSizeToNumbers } from "../basic_function/basic-function.js";
import { createCard } from "./card.js";
import { valuesCard, setValueCard } from "../logic_game/game.js";

//pomysleć nad dodaniem innych ustawien - na razie jest tylko rozmiar plaanszy
const getSetting = (btns, idx) => {
    return btns[idx];
}

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


function createBoard(settings) {
    const { choiceValue: nxm } = settings[0];
    const { choiceValue: color } = settings[1];

    setValueCard();
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