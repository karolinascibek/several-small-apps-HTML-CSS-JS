const btnHistory = document.getElementById("history-btn");
const btnReset = document.getElementById("reset-btn");


const clikOnBtnHistory = () => {
    console.log("history");
    // chistoria z danej gry
}

const clikOnBtnReset = () => {
    console.log("reset");
    // ustawienie punkty na zero 
    // odswierzenie planszy na wczęniejszeych utawienaich
}


function createNav() {
    const btnHistory = document.getElementById("history-btn");
    const btnReset = document.getElementById("restart-btn");

    console.log(btnReset)

    btnHistory.addEventListener("click", clikOnBtnHistory);
    btnReset.addEventListener("click", clikOnBtnReset);
}

export { createNav }