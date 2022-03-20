import { setPoints } from "./points.js";
import { createBtnStart } from "../board/btn-start.js";
import { showSettings } from "../settings-board/settings-board.js";
import { showHistory } from "./history.js";

const btnHistory = document.getElementById("history-btn");
const btnReset = document.getElementById("reset-btn");


const clikOnBtnHistory = () => {
    showHistory();
    // chistoria z danej gry
}

const clikOnBtnReset = () => {
    createBtnStart();
    showSettings();
}



function createNav() {
    const btnHistory = document.getElementById("history-btn");
    const btnReset = document.getElementById("restart-btn");

    btnHistory.addEventListener("click", clikOnBtnHistory);
    btnReset.addEventListener("click", clikOnBtnReset);

    setPoints(0);
}

export { createNav }