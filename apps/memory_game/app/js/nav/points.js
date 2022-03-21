const points = document.getElementById("points");

function setPoints(value){
    points.innerHTML = value;
}

function getPoints(){
    return points.innerHTML;
}

function updatePoints(){
    let result = Number(getPoints()) + 1;
    setPoints(result);
}

function resetPoints(){
    setPoints(0);
}

export {
    setPoints,
    updatePoints,
    resetPoints
}