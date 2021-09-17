console.log("Event HElloe!!")

function closeFormAddEvent(){
    let cal = getObject(".calendar");
    let form = getObject("#form");
    form.style.display = 'none';
    // form.classList.remove("form-visible")
}

function createSingleEvent(ev){
        let newEvent =  document.createElement("li");
        newEvent.innerText = `${ev.time} ${ev.event}`;
        newEvent.id = ev.id;

        let boxTools = createEventTools(ev);
        newEvent.appendChild(boxTools);
        // tool.addEventListener('click', function(){
        //     setVisibleBox()
        // } );
        return newEvent;
}

function setInfo(message){
    let info= document.createElement("li");
    info.innerText = message;
    return info;
}

function createEvents(events){
    let list = takeListEvent();
    events.forEach(ev=>{
        let newEvent = createSingleEvent(ev);
        list.appendChild(newEvent);
    })

    if(events.length <= 0){
        let li = setInfo("Twoja lista wydarzeń jest pusta.");
        list.appendChild(li);
    }
}

function clearListEvents(){
    let list = takeListEvent();
    while (list.firstChild) {
        list.firstChild.remove()
    }
}

function setHeadline(dayId){
    console.log(dayId)
    let dateEvent = getObject("#date-event");
    dateEvent.innerText = dayId;
}

function takeListEvent(){
    return getObject("#list-events");
}


function clickedOnDay(dayId){

    console.log("Klik")
    setVisibleBox("#form", true);
    closeAddEventForm();
    setAddEventFormBox();

    // ustawienie daty
    setHeadline(dayId);

    let list = getObject("#list-events");
    clearListEvents();

    //tworzenie nowych elementów
    // api do pobierania i zapisywania dancyh
    console.log(new Date(dayId).toLocaleString())
    ajaxGetListEvents(baseURL+'calendar/php/list_events.php', {date:dayId});
   
}
