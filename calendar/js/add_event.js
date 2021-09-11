 function ajaxPostAddNewEvent(dataForm){
     fetch(baseURL+"/calendar/php/add_event.php",{
         method:'POST',
         body:JSON.stringify(dataForm),
         headers:new Headers()
     })
     .then(response => response.json())
     .then(data => {
         // aktualizowanie listy wydarzeń 
        console.log('Success:', data);
        clearListEvents();
        createEvents(data.events);
    })
    .catch((error) => {
        console.error('Error:', error);
     });

}

function addNewEvent(){
    console.log("Nowe wydarzenie xD")
    let inputHour = getObject("#input-hour");
    let inputEvent = getObject("#input-event");

    const date = getObject("#date-event").innerText;

    const newEvent={
        date:date,
        hour:inputHour.value,
        event:inputEvent.value
    }

    // dodanie nowego wydarzenia
    // aktualizowanie listy wydarzeń 
    console.log(newEvent)
    ajaxPostAddNewEvent(newEvent);


}