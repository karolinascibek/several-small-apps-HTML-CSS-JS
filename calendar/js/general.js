// funkcja zwracajaca jeden obiekt po nazwie id/class
function getObject(classname) {
    let elem = document.querySelector(classname);
    return elem;
}

// funkcja zwracajaca wiele obiektów po nazwie id/class
function getObjects(classname) {
    let elem = document.querySelectorAll(classname);
    return elem;
}

// funkcja zwracajaca szerokosć obiektu
function getWidth(object) {
    return object.offsetWidth;
}

// funkcja ustawia wysokość dla obiektu
function setHeight(objectName, value) {
    objectName.style.height = `${value}px`;
}

// funkcja ustawia szerokość dla obiektu
function setWight(objectName, value) {
    objectName.style.width = `${value}px`;
}


// funkcja ustawijąca wysokośc dla wielu obiektów
function setObjectsHeight(objects, value) {
    objects.forEach(ele => {
        setHeight(ele, value);
    })
}

//ustawienie elementu na widoczny/niewidoczny
function setVisibleBox(elem, isVisible){
    let el = getObject(elem);
    if(isVisible){
        el.style.display = 'flex';
    }
    else{
        el.style.display = 'none';
    }
}

function clearBox(elem){
    let el = getObject(elem);
    el.innerText="";
    console.log("clear box ")
}

function setInputValue(elem){
    let el = getObject(elem);
    console.log("set value box ", el)
    el.value="";
}

