function ajaxGetListEvents(url){
    let list = takeListEvent();
    fetch(url,
        {
            method: 'GET', 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            createEvents(data);
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
       console.log('Success:', data);
       clearListEvents();
       createEvents(data.events);
   })
   .catch((error) => {
       console.error('Error:', error);
    });

}