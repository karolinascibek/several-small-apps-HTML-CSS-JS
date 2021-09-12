

function getdataForm(){
    console.log("Nowe wydarzenie xD")
    let inputHour = getObject("#input-hour");
    let inputEvent = getObject("#input-event");

    const date = getObject("#date-event").innerText;

    const newEvent={
        date:date,
        hour:inputHour.value,
        event:inputEvent.value
    }

    return newEvent;
}

function addNewEvent(){
    const newEvent = getdataForm();

    // dodanie nowego wydarzenia
    // aktualizowanie listy wydarzeń 
    console.log(newEvent)
    ajaxPostAddNewEvent(baseURL+"/calendar/php/add_event.php", newEvent);
    closeAddEventForm();
}

function openAddEventForm(){
    console.log("Add event form")
    setVisibleBox("#form-add-event", true);
    setVisibleBox("#btn-new-event", false);
}

function closeAddEventForm(){
    console.log(" cancel Add event form")
    setVisibleBox("#form-add-event", false);
    setVisibleBox("#btn-new-event", true);
}

function cancelAddNewEvent(){
    closeAddEventForm();
}