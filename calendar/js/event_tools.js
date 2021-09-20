

// // tools to event
// function deleteEventTool(){
//     let tool = document.createElement("div");
//     tool.innerHTML = '<i class="fas fa-trash"></i>';
//     tool.addEventListener('click', function(){
//         deleteEvent();
//     } );
//     return tool;
// }
// function editEventTool(){
//     let tool = document.createElement("div");
//     tool.innerHTML = '<i class="fas fa-pencil-alt"></i>'; 
//     tool.addEventListener('click', function(){
//         editEvent();
//     } );
//     return tool;
// }
// function markEventTool(){
//     let tool = document.createElement("div");
//     tool.innerHTML = '<i class="fas fa-check"></i>';
//     tool.addEventListener('click', function(){
//         markEvent();
//     } );
//     return tool;
// }

// tools to event
function deleteEventTool(event){
    let icon = '<i class="fas fa-trash"></i>';
    let tool = createSingleEventTool(event,icon, deleteEvent);
    return tool;
}
function editEventTool(event){
    let icon = '<i class="fas fa-pencil-alt"></i>';
    let tool = createSingleEventTool(event,icon, editEvent);
    return tool;
}
function markEventTool(event){
    let icon = '<i class="fas fa-check"></i>';
    let tool = createSingleEventTool(event,icon, markEvent);
    return tool;
}

function createSingleEventTool(event,icon, onClickFunction){
    let tool = document.createElement("div");
    tool.innerHTML = icon;
    tool.addEventListener('click', function(){onClickFunction(event)} );
    return tool;
}

// function for tool
function deleteEvent(event){
    // console.log("Usuwam event", event);
    const data ={
        id:event.id
    }
    ajaxPostDeleteEvent(baseURL+'calendar/php/delete_event.php', data);
}

function editEvent(event){
    // otoworzenie formularza do edycji
    // console.log("edytuje event", event);
    
    setVisibleBox(".btn-add", false);
    setVisibleBox(".btn-edit", true);
    setVisibleBox("#form-add-event", true);
    setVisibleBox("#btn-new-event", false);

    let time = event.time.split(":");
    let hour = time[0];
    let minute = time[1];
    let eventContent = event.event;

    setInputValue("#input-event", eventContent);
    setInputValue("#input-hour", hour);
    setInputValue("#input-minute",minute);

    let editForm = getObject("#form-add-event > div");
    editForm.id = "form-edit-event-"+event.id;

}
function markEvent(event){
    let li =  getObject(`#event-${event.id}`);
    // console.log("zaznaczam event",li);
    event.status = setStatusInEvent(event.status, li);
    ajaxPostEditStatusEvent(baseURL+'calendar/php/edit_status_event.php', event);
}

// box tools
function createEventTools(event){
    let boxTools = document.createElement("div");
    boxTools.classList.add("event-tools");

    let trash = deleteEventTool(event);
    let pencil = editEventTool(event);
    let check = markEventTool(event);

    boxTools.appendChild(trash);
    boxTools.appendChild(pencil);
    boxTools.appendChild(check);

    return boxTools;
}