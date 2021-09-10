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
function createEvents(events, list){
    events.forEach(ev=>{
        let newEvent = createSingleEvent(ev);
        list.appendChild(newEvent);
    })
}

function clearListEvents(list){
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

function ajaxGetListEvents(list){
    // let events = [
    //     {hour:"12:30", event:"Hellow"},
    //     {hour:"12:30", event:"Hellow"},
    //     {hour:"12:30", event:"Hellow"},
    //     {hour:"14:30", event:"Hellow"},
    //     {hour:"17:300", event:"Hellow gasa ds d"},
    //     {hour:"12:30", event:"Hellow"},
    // ]
    fetch(baseURL+'calendar/php/list_events.php', {
        method: 'GET', 
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            createEvents(data, list);
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
    clearListEvents(list);

    //tworzenie nowych elementów
    // api do pobierania i zapisywania dancyh
    ajaxGetListEvents(list);
   
}
