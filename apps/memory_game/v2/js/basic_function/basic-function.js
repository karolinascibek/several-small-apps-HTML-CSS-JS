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

export { removeAllChildNodes, getRandomInt, convertStrSizeToNumbers }