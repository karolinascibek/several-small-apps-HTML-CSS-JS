

<div class="container">
<div class="calendar">
    <div class="cal-nav">
        <div> <h2 id="current-card" >Sirpień</h2></div>
        <div class="buttons">
            <div class="prev" onclick="setPrevMonth(currentDate)">
                <i class="fas fa-arrow-left"></i>
            </div>
            <div class="next" onclick="setNextMonth(currentDate)">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    </div>

    <div class="cal-card">
        <div class="cal-card-weekdays"> </div>
        <div class="cal-card-days"> </div>
    </div>
</div>

<div id="form">
    <h4 onclick="closeFormAddEvent()"><span>x</span></h4>   
    <div>
        <h3 id="date-event">2-wrzesnia 2021</h3>
        <div id="form-add-event">
            <form action="">
                <input type="text" id="input-hour" class=" form-input" placeholder="hh:mm">
                <input type="text" id="input-event" class=" form-input" placeholder="wydarzenie">
                <button onclick="addNewEvent()" type="button" class="form-input">Dodaj</button>
            </form>
        </div>
        <ul id="list-events">
            <li>event 1</li>
            <li>event 1</li>
            <li>event 1</li>
            <li>event 1</li>
        </ul>
    </div>
</div>

</div>



<style>

    #form{
        /* position: absolute;
        top: 0%; */
        background: rgba(0, 0, 0, 0.6);
        width: 50%;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 2% 0;
        display:flex;
        transition: width 3s;
    }
    #form >h4{
        width: 80%;
        align-self: center;
        text-align: end;
    }
    /* #form >button:focus + #form{
        display: none;
    } */
    #form>h4>span{
        border-radius: 50%;
        background: white;
        padding: 0.7em 1em;
    }

    #form > div{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;

    }
    #form > div>#form-add-event{
        width:90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right:2px;
        align-items: center;
    }
    #form > div>#form-add-event >form{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
    }
    #form > div>#form-add-event >form > input:focus{
        outline:none;
        border-bottom: 2px solid red;
    }
    #form-add-event >form >.form-input{
        width: 100%;
        padding: 0.5rem;
        border:none;
    }
    #form-add-event >form >#input-hour{
        /* width: 30%; */
    }
    #form-add-event >form >#input-event{
        /* width: 60%; */
    }
    #form-add-event >form >button{
        

    }
    #form > div>#list-events{
        width: 90%;
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
    }
    #form > div>#list-events > li{
        background: white;
        margin-bottom: 3px;
        border-radius: 0.2rem;
        padding: 1rem;
    }

    .container{
        position: relative;
    }

    .calendar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        font-size: 1em;
        -webkit-box-shadow: -2px 1px 20px 1px rgba(66, 68, 90, 1);
        -moz-box-shadow: -2px 1px 20px 1px rgba(66, 68, 90, 1);
        box-shadow: -2px 1px 20px 1px rgba(66, 68, 90, 1);
    }
    .calendar>.cal-card,
    .calendar>.cal-nav {
        width: 100%;
    }

    .calendar>.cal-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* background: white; */
        /* border:0.5px solid white; */
    }

    .calendar>.cal-nav> .buttons > button {
        width: 48%;
    }

    .calendar>.cal-nav>button>i {
        font-size: 1.5rem;
    }

    .calendar>.cal-card {
        display: flex;
        flex-direction: column;
    }

    .cal-card>.cal-card-weekdays div:nth-child(1),
    .cal-card>.cal-card-days div:nth-child(7n-6){
        border-left: 0.5px solid white;      
    }


    .cal-card>.cal-card-weekdays {
        display: flex;
        flex-direction: row;
        /* border-bottom: 2ox solid lightpink;
        flex-wrap:wrap; */
    }

    .cal-card>.cal-card-days {
        display: flex;
        flex-wrap: wrap;
    }
    .cal-card>.cal-card-weekdays>div , 
    .cal-card>.cal-card-days>.day{
        display: flex;
        width: 20px;
        border-right: 0.5px solid white;
        border-bottom: 0.5px solid white;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        min-width: 13.5%; 
        padding: 5% 0;
    }

    .cal-card>.cal-card-weekdays>div {
        flex-direction: row;        
        /* height: 10vw; */
        background: #b7b7b7;
    }

    .cal-card>.cal-card-days>.day {
        /* height: 2rem; */
        background: #bdbdbd7a;
        /* height: 10vw; */
        color: white;

    }
    .cal-card>.cal-card-days>.day:hover,
    .cal-card>.cal-card-days>.day.current-month:hover,
    .cal-card>.cal-card-days>.day.current-month.current-day:hover{
        background: #555555;
    }

    .buttons {
        display: flex;
        justify-content: center;
        width: 100%;
        /* background: rgb(34,34,34); */
    }

    .buttons>div {
        width: 50%;
        padding: 5% 0;
        cursor: pointer;
        text-align: center;
    }
    .buttons>div:hover {
        background: #590c60;
        color:cornsilk;
    }

    .buttons>div>button {
        
    }

    .cal-card>.cal-card-days>.day.current-month{
        background:#440f53;
    }
    .cal-card>.cal-card-days>.day.current-month.current-day{
        background:#ffc20a;
    }
    #current-card{
        padding: 20px 0 0 0;
    }

@media screen and (max-width: 650px){
    .calendar{
        font-size: 0.6rem;
    }
}

</style>

<script src="./calendar/js/calendar.js" defer></script>
<script src="./calendar/js/list_events.js" defer></script>
<script src="./calendar/js/add_event.js" defer></script>

