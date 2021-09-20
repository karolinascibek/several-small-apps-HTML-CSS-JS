function editEventBtn() {

    let editForm = getObject("#form-add-event > div");
    let array = editForm.id.split("-");
    let id = array[array.length -1];

    const inputEvent = getObject("#input-event").value;
    const inputHour = getObject("#input-hour").value;
    const inputMinutes = getObject("#input-minute").value;

    let data={
        id:id,
        event:inputEvent,
        minutes: inputMinutes,
        hour:inputHour
    }


    ajaxPostEditEvent(baseURL+'calendar/php/edit_event.php', data);
    // console.log("edytuj")
}