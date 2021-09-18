
// nagłowek kalendarza
function setNav(date, months) {
    let month = parseInt(date.getMonth());
    let year = date.getFullYear();

    let nav = getObject("#current-card");
    nav.textContent = `${months[month]} ${year}`;

}

//dni tygodnia
function setWeekdays(weekd) {
    let weekdays = getObject(".cal-card-weekdays");
    let content = "";
    weekd.forEach(function (el) {
        content += `<div> ${el}</div>`;
    })
    weekdays.innerHTML = content;
}

//dzień z kalendarza - tworzenie elementu
function createNewElementDay(date,numberDay){
    let myDiv = document.createElement("div");
    let day = new Date(date.getFullYear(), date.getMonth(), numberDay);

    myDiv.classList.toggle("day");
    myDiv.textContent = `${day.getDate()}`;
    // myDiv.id = setIdForDay(day.getFullYear(), day.getMonth()+1, day.getDate(), "-");
    myDiv.id = day.toLocaleDateString();

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

//nawigacja kalendarza - nastepny/poprzedni miesiąc
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

    // console.log(currentDate.getMonth());
    closeFormAddEvent();
    setNav(currentDate, months);
    setDays(currentDate);
    setWeekdays(weekdays);
}
///////////////////////////////////////////////////////

//stałe
let currentDate = new Date(Date.now());
currentDate.setDate(1);
calendar(currentDate);
