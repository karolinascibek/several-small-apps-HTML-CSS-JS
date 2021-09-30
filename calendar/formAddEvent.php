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

<style>
        /*  /////////////////////////// form ///////////////////////////////////////////////*/ 

        #form{
        background: rgba(255, 255, 255, 0.6);
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 2% 0;
        display:none;
        transition: width 3s;
    }
    #form >h4{
        width: 80%;
        align-self: center;
        text-align: end;
    }

    #form>h4>span{
        border-radius: 50%;
        background: white;
        padding: 0.7em 1em;
        cursor: pointer;
    }

    #form > div{
        display: flex;
        flex-direction: column;
        width: 90%;
        justify-content: center;
        align-items: center;

    }
    #date-event{
        word-break: break-word;
    }

    .btn{
        padding: 1rem;
        border-radius: 0.3rem;
        justify-content: center;
        border:0;
        cursor: pointer;
        transition: background 0.2s ease-in-out ;
    }

    #form > div> #btn-new-event{
        background: purple;
        color: white;
        font-weight: bold;
        width: 30%;
        align-self: flex-end;
        justify-content: center;
    }

    #form > div> #btn-new-event:hover{
        background: #9468a2;
    }

    #form > div>#form-add-event{
        width:100%;
        display: none;
        flex-direction: column;
        justify-content: center;
        padding-right:2px;
        align-items: center;
        background: white;
        padding: 2rem 0;
        border-radius: 0.5rem;
        -webkit-box-shadow:  -10px 0px 13px -7px #b7b4b4, 10px 0px 13px -7px #b2b0b0, 5px 5px 15px 5px rgb(0 0 0 / 0%);
        box-shadow: -10px 0px 13px -7px #b7b4b4, 10px 0px 13px -7px #b2b0b0, 5px 5px 15px 5px rgb(0 0 0 / 0%);
    }

    #form > div>#form-add-event > div> input:focus{
        outline:none;
        border-bottom: 2px solid red;
    }
    .form-input{
        padding: 0.8rem 0.5rem;
        width: 100%;
        margin-bottom: 5px;
        border:1px solid #aeaeae;
    }
    #form-add-event >form >div> #input-hour{
        /* width: 30%; */
    }
    #form-add-event >form >div > #input-event{
        /* width: 60%; */
    }
    #form-add-event >div{      
        width: 80%;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    /* select */

    #form-add-event>div>#form-group-time{
        width: 100%;
    }

    #form-add-event>div>#form-group-time>input{
        width: 45%;
    }
    #form-group-time div:nth-child(2){
        font-weight: bold;
        width: 10%;
        text-align: center;
        margin: auto;
    }


    /* btns */
    #form-add-event >div>.form-group-row{      
        width: 100%;
        justify-content: center;
        display: flex;
    }
    #form-add-event >div >.form-group-row> button{      
        width: 40%;
        padding: 0.8rem 0;
        color:white
    }
    .btn-add{      
        background: purple;
        margin-right: 2px;
    }
    .btn-cancel{      
        background:  #9468a2;
    }
    .btn-edit{
        background: lightgreen;
        margin-right: 2px;
    }
    .btn:hover{
     background: #c7c7cb;
    }



    #form > div>#list-events{
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
    }
    #form > div>#list-events > li{
        position: relative;
        padding: 1rem;
    }
    .mark-event{
        text-decoration: line-through;
    }

    #form > div>#list-events > li,
    #form > div>#list-events > li > .event-tools{
        background: white;
        margin-bottom: 3px;
        border-radius: 0.2rem;
        /* padding: 1rem; */
    }

    #form > div>#list-events > li > .event-tools{
        display: none;
    }
    #form > div>#list-events > li:hover {
        visibility: 0.5;
        cursor: pointer;
    }
    #form > div>#list-events > li:hover > .event-tools,
    #form > div>#list-events > li:focus > .event-tools {
        display: flex;
        background: #6e99bf82;;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-left: 0;
        padding-right:0; 
        justify-content: center;
        align-items: center;
        text-align: center;

    }  
    #form > div>#list-events > li > .event-tools> div{
        background: white;
        padding: 0.5rem;
        border-radius: 0.2rem;
        width: 1rem;
        margin: 0 2px;
        color: #7ba2c5;
    }
    #form > div>#list-events > li > .event-tools> div:hover{
        background: #7ba2c5;
        color: white;
    }
    #form-add-event>div>.input-error{
        color: red;
        text-align: start;
        width: 100%;
        font-size: 0.7rem;
        padding-bottom: 0.5rem;
    }

    @media screen and (max-width: 460px){
        #form-add-event >div >.form-group-row{      
            flex-direction: column;
        }
        #form-add-event>div>#form-group-time>input,
        #form-add-event >div >.form-group-row>button {
            width: 100%;
        }
        #form-add-event >div >.form-group-row>.btn-cancel {
            margin-top: 2px;
        }
        .form-input {
            padding: 0.8rem 0;
            text-align: center;
        }
    }
</style>