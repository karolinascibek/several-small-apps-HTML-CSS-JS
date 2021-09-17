function editEventBtn() {

    let editForm = getObject("#form-add-event > div");
    let array = editForm.id.split("-");
    let id = array[array.length -1];

    console.log("id",id)

    let data={
        event:"hellow edit event",
        id:id
    }

    ajaxPostEditEvent(baseURL+'calendar/php/edit_event.php', data);
    console.log("edytuj")
}