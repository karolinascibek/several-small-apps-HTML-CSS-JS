import { createBoard } from "./board.js";
import { createNav } from "../nav/nav.js";
import { hideSettings } from "../settings-board/settings-board.js";
import { clockStart, clockStop } from "../nav/clock.js";

const startBtn = document.getElementById("start-game");

function clickedBtnStartGame(){
    this.classList.add("hide-btn-start");
    console.log("start czasu") 
    createNav();
    createBoard();
    hideSettings();
    clockStart();
}

function createBtnStart(){
    startBtn.classList.remove("hide-btn-start");
    startBtn.addEventListener("click", clickedBtnStartGame);
}

export { createBtnStart }