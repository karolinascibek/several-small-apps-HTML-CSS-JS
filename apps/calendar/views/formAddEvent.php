<div id="form">
    <h4 onclick="closeFormAddEvent()"><span><i class="fas fa-times"></i></span></h4>   
    <div>
        <h3 id="date-event">2-wrzesnia 2021</h3>
        <button id="btn-new-event" onclick="openAddEventForm()" class="btn">+ new</button>
            <form id="form-add-event" action="">
                <div>
                    <!-- <input type="text" id="input-hour" class=" form-input" placeholder="hh:mm"> -->

                    <div id="form-group-time" class="form-group-row ">
                        <input type="number" id="input-hour" class=" form-input" placeholder="godzina" min=0 max=23 value=0>
                        <div>:</div>
                        <input type="number" id="input-minute" class=" form-input" placeholder="minuty" min=0 max=59 value=0>
                    </div>

                    <div class="form-group-row ">
                        <input type="text" id="input-event" class=" form-input" placeholder="wydarzenie">   
                    </div>

                    <div class="input-error"></div>
                    <div class="form-group-row">
                        <button class="btn btn-edit" onclick="editEventBtn()" type="button" >Edytuj</button>
                        <button class="btn btn-add" onclick="addNewEvent()" type="button" >Dodaj</button>
                        <button class="btn btn-cancel" type="button" onclick="cancelAddNewEvent()" >Anuluj</button>
                    </div>
                </div>
            
            </form>
        <ul id="list-events">
            <li>event 1 
                <div class="event-tools">
                    <div>X</div>
                    <div>E</div>
                    <div>-</div>
                </div>
            </li>
            <li>event 1</li>
            <li>event 1</li>
            <li>event 1</li>
        </ul>
    </div>
</div>

