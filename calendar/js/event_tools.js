

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
function deleteEventTool(){
    let icon = '<i class="fas fa-trash"></i>';
    let tool = createSingleEventTool(icon, deleteEvent);
    return tool;
}
function editEventTool(){
    let icon = '<i class="fas fa-pencil-alt"></i>';
    let tool = createSingleEventTool(icon, editEvent);
    return tool;
}
function markEventTool(){
    let icon = '<i class="fas fa-check"></i>';
    let tool = createSingleEventTool(icon, markEvent);
    return tool;
}

function createSingleEventTool(icon, onClickFunction){
    let tool = document.createElement("div");
    tool.innerHTML = icon;
    tool.addEventListener('click', onClickFunction );
    return tool;
}

// function for tool
function deleteEvent(){
    console.log("Usuwam event");
}
function editEvent(){
    console.log("edytuje event");
}
function markEvent(){
    console.log("zaznaczam event");
}

// box tools
function createEventTools(){
    let boxTools = document.createElement("div");
    boxTools.classList.add("event-tools");

    let trash = deleteEventTool();
    let pencil = editEventTool();
    let check = markEventTool();

    boxTools.appendChild(trash);
    boxTools.appendChild(pencil);
    boxTools.appendChild(check);

    return boxTools;
}