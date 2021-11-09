function ajaxGetListEvents(url,dataForm){
    let list = takeListEvent();
    fetch(url,
        {
            method: 'POST', 
            body:JSON.stringify(dataForm),
            headers:new Headers()
        })
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data);
            createEvents(data.events);
        })
        .catch((error) => {
        console.error('Error:', error);
     });
}


function ajaxPostAddNewEvent(url,dataForm){
    fetch(url,{
        method:'POST',
        body:JSON.stringify(dataForm),
        headers:new Headers()
    })
    .then(response => response.json())
    .then(data => {
        // aktualizowanie listy wydarzeń 
        //console.log('Success:', data);
       if(data.status === 200){
           setAddEventFormBox()
           closeAddEventForm();
       }
       else{
        //console.log(data.error)
           let err = getObject(".input-error");
           err.innerText = data.error;
       }
            clearListEvents();
            createEvents(data.events);
   })
   .catch((error) => {
       console.error('Error:', error);
    });

}

function ajaxPostEditEvent(url, dataForm){
    fetch(url,{
        method:'POST',
        body:JSON.stringify(dataForm),
        headers:new Headers()
    })
    .then(response=>response.json())
    .then(data=>{
        // aktualizowanie listy wydarzeń 
        //console.log('Success:', data);
       if(data.status === 200){
           setAddEventFormBox()
           closeAddEventForm();
       }
       else{
        //    console.log(data.error)
           let err = getObject(".input-error");
           err.innerText = data.error;
       }
            clearListEvents();
            createEvents(data.events);
    })
    .catch((error) => {
        console.error('Error:', error);
     });

}

function ajaxPostEditStatusEvent(url, dataForm){
    fetch(url,{
        method:'POST',
        body:JSON.stringify(dataForm),
        headers:new Headers()
    })
    .then(response=>response.json())
    .then(data=>{
        // aktualizowanie listy wydarzeń 
    //    console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
     });

}
function ajaxPostDeleteEvent(url, dataForm){
    fetch(url,{
        method:'POST',
        body:JSON.stringify(dataForm),
        headers:new Headers()
    })
    .then(response=>response.json())
    .then(data=>{
        // aktualizowanie listy wydarzeń 
    //    console.log('Success:', data);
        clearListEvents();
        createEvents(data.events);
    })
    .catch((error) => {
        console.error('Error:', error);
     });

}