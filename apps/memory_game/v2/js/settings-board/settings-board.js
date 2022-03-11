import { createBoard } from "../board/board.js";
import { removeAllChildNodes } from "../basic_function/basic-function.js";
import { settings, setChoiceValue } from "./Settings.js"


let idxLastActiveButton = null;

function createOptionsBoardElement(listElements) {
    const optionsBoard = document.getElementById("options-board");
    removeAllChildNodes(optionsBoard);

    for (let el of listElements) {

        const btn = document.createElement("button");
        btn.classList.add("option");
        btn.innerHTML = el;
        optionsBoard.appendChild(btn);

        btn.addEventListener("click", function () {
            setChoiceValue(idxLastActiveButton, this.innerHTML);
            createBoard();
        })

    }
    return optionsBoard;
}

function setStanBtn(btnName) {
    //ustawienie aktywnego guzika -> zmianan koloru 
    let clickedButton = {}

    
    settings.map((btn, idx) => {
        const btnOption = document.getElementById(btn.name);
        if (btn.name === btnName) {
            btn.isActive = !btn.isActive;
            clickedButton = btn;
            if (btn.isActive) {
                clickedButton.idx = idx;
            }
        }
        else {
            btn.isActive = false;
        }
        btnOption.classList.remove("btn-active");
    })
    return clickedButton;
}


function showHideOptionsSetings(btn) {
    const { isActive, idx } = setStanBtn(btn.id)
    const optionsBoard = document.getElementById("options-board");

    if (!isActive) {
        optionsBoard.classList.remove("visible-options-board");
        btn.classList.remove("btn-active");
    }
    else {
        optionsBoard.classList.add("visible-options-board");
        btn.classList.add("btn-active");
        idxLastActiveButton = idx;
        createOptionsBoardElement(settings[idx].options);
    }
}



function clickOnBtn() {
    showHideOptionsSetings(this);
}

function createSettings() {
    const btnLevel = document.getElementById("level");
    const btnColor = document.getElementById("color");
    const btnSpeed = document.getElementById("speed");

    btnColor.addEventListener("click", clickOnBtn);
    btnLevel.addEventListener("click", clickOnBtn);
    btnSpeed.addEventListener("click", clickOnBtn);
}


export { createSettings }





