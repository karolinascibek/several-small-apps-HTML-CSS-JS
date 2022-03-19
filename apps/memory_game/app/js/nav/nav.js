import { setPoints } from "./points.js";
import { createBtnStart } from "../board/btn-start.js";
import { showSettings } from "../settings-board/settings-board.js";

const btnHistory = document.getElementById("history-btn");
const btnReset = document.getElementById("reset-btn");


const clikOnBtnHistory = () => {
    console.log("history");
    // chistoria z danej gry
}

const clikOnBtnReset = () => {
    console.log("reset");
    createBtnStart();
    showSettings();
}



function createNav() {
    const btnHistory = document.getElementById("history-btn");
    const btnReset = document.getElementById("restart-btn");

    console.log(btnReset)

    btnHistory.addEventListener("click", clikOnBtnHistory);
    btnReset.addEventListener("click", clikOnBtnReset);

    setPoints(0);
}

export { createNav }