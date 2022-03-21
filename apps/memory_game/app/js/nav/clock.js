let idInterwal = null;

function calculateTime(start) {
    let stop = new Date(Date.now());
    let timeDifference = stop.getTime() - start.getTime();
    let time = new Date(Date.now());
    time.setTime(timeDifference);
    time.setHours(time.getHours() - 1);
    return time.toLocaleTimeString();
}

function setTime(strTime){
    const time = document.getElementById('time');
    time.innerText = strTime;
}


function clockStart() {
    let start = new Date(Date.now());
    idInterwal = setInterval(function () {
        let time = calculateTime(start);
        setTime(time);
    }, 1000);
}

function resetClock (){
    clockStop();
    setTime('00:00:00');
}

function clockStop() {
    clearInterval(idInterwal);
}

export {
    clockStart,
    clockStop,
    resetClock
}