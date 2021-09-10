
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

function setNav(date, months) {
    let month = parseInt(date.getMonth());
    let year = date.getFullYear();

    let nav = getObject("#current-card");
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
    let day = new Date(date.getFullYear(), date.getMonth(), numberDay);

    myDiv.classList.toggle("day");
    myDiv.textContent = `${day.getDate()}`;
    myDiv.id = setIdForDay(day.getFullYear(), day.getMonth()+1, day.getDate(), "-");

    myDiv.addEventListener('click', function(){
        clickedOnDay(myDiv.id)
    } );
    return myDiv;
}

function setIdForDay(year, month, day, sep){
    return year+sep+month+sep+day;
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

    let daysNumber = lastDayMonth.getDate();

    // dni z poprzedniego miesiąca
    for (let i = (startDate - 2); i >= 0; i--) {
        let myDiv = createNewElementDay(date,-i);
        days.appendChild(myDiv);
    }

    // dni z aktualalnego miesiąca
    for (let i = 1; i <= daysNumber; i++) {
        let myDiv = createNewElementDay(date,i);
        let actDate = new Date(Date.now());

        myDiv.classList.toggle("current-month");

        if( date.getMonth() === actDate.getMonth() && date.getFullYear() === actDate.getFullYear() 
            &&  actDate.getDate() === i ){
            myDiv.classList.toggle("current-day");
        }
        days.appendChild(myDiv);
    }

    let howNextDeys = lastDayMonth.getDay();
    // howNextDeys = (howNextDeys == 0) ? 0 : 7 - howNextDeys;

    // dni z przyszłego miesiąca
    for (let i = 1 ; i <= 7-howNextDeys ; i++) {
        let myDiv = createNewElementDay(date, lastDayMonth.getDate() + i);
        days.appendChild(myDiv);
    }

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
    currentDate.setMonth(currentDate.getMonth()+1 );
    calendar(currentDate);
}
function setPrevMonth(currentDate){
    cleanCalendar();
    currentDate.setMonth(currentDate.getMonth()-1);
    calendar(currentDate);
}

//  funkcja inicjująca kalendarz
function calendar( currentDate){
    let weekdays = ["Pon", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];
    let months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

    console.log(currentDate.getMonth());
    setNav(currentDate, months);
    setDays(currentDate);
    setWeekdays(weekdays);
}



///////////////////////////////////////////////////////

//stałe
let currentDate = new Date(Date.now());
currentDate.setDate(1);


calendar(currentDate);
