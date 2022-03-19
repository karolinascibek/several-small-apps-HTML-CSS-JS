import { removeAllChildNodes } from "../basic_function/basic-function.js";

const historyBtn = document.getElementById('history-btn');
const historySection = document.getElementById('history-section');
const historyTabel = document.getElementById('table-with-scors');
const tableTbody = document.querySelector('#table-with-scors > table > tbody');


let hitoryStatus = false;

const history = [
    // {time: '12:00:12', score:12},
    // {time: '12:00:12', score:12},
    // {time: '12:00:12', score:12},
];


function createRowTable(time, score, header=false){
    const row = document.createElement('tr');
    let el = header ? 'th' : 'td';
    const timeEl = document.createElement(el);
    const scoreEl = document.createElement(el);
    timeEl.innerText = time;
    scoreEl.innerText = score;
    row.appendChild(timeEl);
    row.appendChild(scoreEl);
    return row;
}



function createHistoryTabel(){
    console.log("tableTbody")
    removeAllChildNodes(tableTbody);
    tableTbody.appendChild(createRowTable('Czas', 'Wynik', true));
    
    history.forEach( el => {
        tableTbody.appendChild(createRowTable(el.time, el.score));
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
    const newScore = { time:time, score:score};
    history.push(newScore);
    console.log("Saved socre to history")
}

function updateTheBestTime(){
    const theBestScore = document.getElementById('best-result');
    let score = `${history[history.length -1].time} pkt: ${history[history.length -1].score}`;
    theBestScore.childNodes[3].innerText = score;
    console.log(theBestScore.childNodes[3])
}

function updateHistory(){
    saveScoreInHistory();
    updateTheBestTime();
}

export {
    showHistory,
    updateHistory,
}