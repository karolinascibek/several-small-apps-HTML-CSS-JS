

function closeFormAddEvent(){
    setVisibleBox("#form", false);
}

function setStatusInEvent(status, elem){
    
    if(Number(status) === 0){
        status = 1;
        elem.classList.add("mark-event");
    }else{
        status = 0;
        elem.classList.remove("mark-event");
    }
    return status;
}



function createSingleEvent(ev){
        let newEvent =  document.createElement(`li`);
        newEvent.innerText = `${ev.time} ${ev.event}`;
        newEvent.id = "event-"+ev.id;
        if(Number(ev.status) === 1){
            newEvent.classList.add("mark-event");
        }


        // box z narzedziami
        let boxTools = createEventTools(ev);
        newEvent.appendChild(boxTools);
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
    let dateEvent = getObject("#date-event");
    dateEvent.innerText = dayId;
}

function takeListEvent(){
    return getObject("#list-events");
}


function clickedOnDay(dayId){
    setVisibleBox("#form", true);
    closeAddEventForm();
    setAddEventFormBox();

    // ustawienie daty
    setHeadline(dayId);

    let list = getObject("#list-events");
    clearListEvents();

    //tworzenie nowych elementów
    // api do pobierania i zapisywania dancyh
    // console.log(new Date(dayId).toLocaleString())
    ajaxGetListEvents(baseURL+'calendar/php/list_events.php', {date:dayId});
   
}
