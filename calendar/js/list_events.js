console.log("Event HElloe!!")

function closeFormAddEvent(){
    let cal = getObject(".calendar");
    let form = getObject("#form");
    form.style.display = 'none';
    // form.classList.remove("form-visible")
}

function createSingleEvent(ev){
        let newEvent =  document.createElement("li");
        newEvent.innerText = `${ev.hour} ${ev.event}`;
        return newEvent;
}
function createEvents(events){
    let list = takeListEvent();
    events.forEach(ev=>{
        let newEvent = createSingleEvent(ev);
        list.appendChild(newEvent);
    })
}

function clearListEvents(){
    let list = takeListEvent();
    while (list.firstChild) {
        list.firstChild.remove()
    }
}

function setHeadline(dayId){
    let dateEvent = getObject("#date-event");
    let date = new Date(dayId).toLocaleDateString();
    dateEvent.innerText = date;
}

function setVisibleBox(){
    let cal = getObject(".calendar");
    let form = getObject("#form");
    form.style.display = 'flex';
}

function takeListEvent(){
    return getObject("#list-events");
}

function ajaxGetListEvents(){
    let list = takeListEvent();
    fetch(baseURL+'calendar/php/list_events.php',
        {
            method: 'GET', 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            createEvents(data);
        })
        .catch((error) => {
        console.error('Error:', error);
     });
}

function clickedOnDay(dayId){

    console.log("Klik")
    setVisibleBox();

    // ustawienie daty
    setHeadline(dayId);

    let list = getObject("#list-events");
    clearListEvents();

    //tworzenie nowych elementów
    // api do pobierania i zapisywania dancyh
    ajaxGetListEvents();
   
}
