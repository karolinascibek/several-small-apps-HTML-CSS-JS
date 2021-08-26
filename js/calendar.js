
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

// funkcja ustawia wysokość dla obiektu
function setWight(objectName, value) {
    objectName.style.width = `${value}px`;
}


// funkcja ustawijąca wysokośc dla wielu obiektów
function setObjectsHeight(objects, value) {
    objects.forEach(ele => {
        setHeight(ele, value);
    })
}



function setSizeNavCalendar() {
    let days = getObjects(".day");
    let width = getWidth(days[0]);
    setObjectsHeight(days, width);

    let weekdays = getObjects(".cal-card-weekdays > div");
    setObjectsHeight(weekdays, width);

    let nav_cal = getObject(".cal-nav");
    setWight(nav_cal, width * 7 - 1);

}

// let currentDate = new Date(Date.now());
// let c = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}: ${currentDate.getDate()}`;
// console.log(c)

function setCurentCalendarCard() {
    let currentDate = new Date(Date.now());

}

function setNav(date, months) {
    let month = parseInt(date.getMonth());
    let year = date.getFullYear();

    let nav = getObject("#current-card");
    console.log(nav.textContent);
    nav.textContent = `${months[month]} ${year}`;

}

function setWeekdays(weekd) {
    let weekdays = getObject(".cal-card-weekdays");
    let content = "";
    weekd.forEach(function (el) {
        content += `<div> ${el}</div>`;
    })
    weekdays.innerHTML = content;
}

function createNewElementDay(date,numberDay){
    let myDiv = document.createElement("div");
    myDiv.classList.add("day");
    myDiv.textContent = `${new Date(date.getFullYear(), date.getMonth(), numberDay).getDate()}`;
    return myDiv;
}


//funkcja ustawia dni na karcie kalendarza
function setDays(date) {
    let days = getObject(".cal-card-days");
    let lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);

    let startDate = firstDayMonth.getDay();
    if (startDate == 0) {
        startDate = 7;
    }

    let days_number = lastDayMonth.getDate();

    // dni z poprzedniego miesiąca
    for (let i = (startDate - 2); i >= 0; i--) {
        let myDiv = createNewElementDay(date,-i);
        days.appendChild(myDiv);
    }

    // dni z aktualalnego miesiąca
    for (let i = 1; i <= days_number; i++) {
        let myDiv = createNewElementDay(date,i);
        let actDate = new Date(Date.now());

        myDiv.style.background = '#440f53';
        if( date.getMonth() == actDate.getMonth() && date.getFullYear() == actDate.getFullYear() 
            &&  date.getDate() == i ){
            myDiv.style.background = '#ffc20a';
        }
        days.appendChild(myDiv);
    }

    let howNextDeys = lastDayMonth.getDay();
    // howNextDeys = (howNextDeys == 0) ? 0 : 7 - howNextDeys;

    // dni z przyszłego miesiąca
    for (let i = 0 ; i < 7-howNextDeys ; i++) {
        let myDiv = createNewElementDay(date,i+1);
        days.appendChild(myDiv);
    }
    console.log(lastDayMonth.getDay())

}

function cleanCalendar(){
    let days = getObjects(".cal-card-days > .day");
    let card = getObject(".cal-card-days");

    days.forEach(day=>{
        card.removeChild(day);
    })
}

function setNextMonth(currentDate){
    cleanCalendar();
    currentDate.setMonth(currentDate.getMonth() + 1)
    calendar(currentDate);
}
function setPrevMonth(currentDate){
    cleanCalendar();
    currentDate.setMonth(currentDate.getMonth() - 1)
    calendar(currentDate);
}

//  funkcja inicjująca kalendarz
function calendar( currentDate){
    let weekdays = ["Pon", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];
    let months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

    setNav(currentDate, months);
    setDays(currentDate);
    setWeekdays(weekdays);

    setSizeNavCalendar();
}


//stałe
let currentDate = new Date(Date.now());


calendar(currentDate);

window.addEventListener("resize", setSizeNavCalendar);