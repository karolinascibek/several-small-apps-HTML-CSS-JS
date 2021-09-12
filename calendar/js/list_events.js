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
        let boxTools = createEventTools();
        newEvent.appendChild(boxTools);
        // tool.addEventListener('click', function(){
        //     setVisibleBox()
        // } );
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

function takeListEvent(){
    return getObject("#list-events");
}


function clickedOnDay(dayId){

    console.log("Klik")
    setVisibleBox("#form", true);

    // ustawienie daty
    setHeadline(dayId);

    let list = getObject("#list-events");
    clearListEvents();

    //tworzenie nowych elementów
    // api do pobierania i zapisywania dancyh
    ajaxGetListEvents(baseURL+'calendar/php/list_events.php');
   
}
