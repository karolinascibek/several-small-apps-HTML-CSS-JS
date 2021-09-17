function validTime(value){
    if(value < 10 ){
        return "0"+value;
    }
    console.log(value)
    return value;
}

function getdataForm(){
    console.log("Nowe wydarzenie xD")
    let inputEvent = getObject("#input-event");
    let inputHour = getObject("#input-hour").value;
    let inputMinutes = getObject("#input-minute").value;

    // inputHour = validTime(inputHour);
    // inputMinutes = validTime(inputMinutes);

    // let time = inputHour+":"+inputMinutes;

    const date = getObject("#date-event").innerText;

    const newEvent={
        date:date,
        hour:inputHour,
        minutes:inputMinutes,
        event:inputEvent.value
    }

    return newEvent;
}

function setAddEventFormBox(){
    clearBox(".input-error");
    setInputValue("#input-event", "");
    setInputValue("#input-hour", "");
    setInputValue("#input-minute", "");
}

function addNewEvent(){
    const newEvent = getdataForm();

    // dodanie nowego wydarzenia
    // aktualizowanie listy wydarzeń 
    // console.log(newEvent)
    ajaxPostAddNewEvent(baseURL+"/calendar/php/add_event.php", newEvent);
}

function openAddEventForm(){
    console.log("Add event form")

    setVisibleBox(".btn-add", true);
    setVisibleBox(".btn-edit", false);
    setVisibleBox("#form-add-event", true);
    setVisibleBox("#btn-new-event", false);
}

function closeAddEventForm(){
    console.log(" cancel Add event form")
    setVisibleBox("#form-add-event", false);
    setVisibleBox("#btn-new-event", true);
}

function cancelAddNewEvent(){
    setAddEventFormBox();
    closeAddEventForm();
}