function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const convertStrSizeToNumbers = (nxm) => {
    let x = nxm.indexOf("x");
    const n = nxm.slice(0, x);
    const m = nxm.slice(x + 1, nxm.lenght);
    return { n: n, m: m };
}

const setBackgroundColor = (obj, color) => {
    obj.style.backgroundColor = color;
}

const setLinearGradient = (obj, color1, color2) => {
    let degree = 'to bottom right'
    const first = ['-webkit-', '-moz-', '-o-', ''];
    for(let i = 0; i < first.length; i++){
        obj.style.backgroundImage = `${first[i]}linear-gradient(${degree}, ${color1} , ${color2})`;
    }
}

export {
    removeAllChildNodes,
    getRandomInt,
    convertStrSizeToNumbers,
    setBackgroundColor,
    setLinearGradient
}