import { removeAllChildNodes } from "../basic_function/basic-function.js";
import { getLevel } from "../settings-board/Settings.js";


const historyBtn = document.getElementById('history-btn');
const historySection = document.getElementById('history-section');
const historyTabel = document.getElementById('table-with-scors');
const tableTbody = document.querySelector('#table-with-scors > table > tbody');


let hitoryStatus = false;

const history = [
];


function createRowTable( newScore, header=false){
    const row = document.createElement('tr');
    let el = header ? 'th' : 'td';

    for(let score in newScore){
        const col = document.createElement(el);
        col.innerText = newScore[score];
        row.appendChild(col);
    }
    return row;
}



function createHistoryTabel(){
    removeAllChildNodes(tableTbody);
    const header = {time:'Czas', score:'Wynik', level:'Poziom'};
    tableTbody.appendChild(createRowTable(header, true));
    
    history.forEach( el => {
        tableTbody.appendChild(createRowTable(el));
    })
}



function showHistory() {
    hitoryStatus = !hitoryStatus;
    if(hitoryStatus){
        historySection.style.display = 'flex';
        createHistoryTabel();
    }
    else{
        historySection.style.display = 'none';
    }
}

function saveScoreInHistory(){
    const time = document.getElementById('time').innerText;
    const score = document.getElementById('points').innerText;
    const level = getLevel();
    const newScore = { time:time, score:score, level:level};
    history.push(newScore);
    console.log("Saved socre to history")
}

function updateTheBestTime(){
    const theBestScore = document.getElementById('best-result');
    let score = `${history[history.length -1].time} pkt: ${history[history.length -1].score}`;
    theBestScore.childNodes[3].innerText = score;
}

function updateHistory(){
    saveScoreInHistory();
    updateTheBestTime();
}

export {
    showHistory,
    updateHistory,
}