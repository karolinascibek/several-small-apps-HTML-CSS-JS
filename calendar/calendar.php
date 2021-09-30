

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




<style>
    
    /*  /////////////////////////// calendar ///////////////////////////////////////////////*/ 

    .calendar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: #eee;
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
        background: #590c60;
        border-top: 1px solid white;
        color: white;
    }

    .cal-card>.cal-card-days>.day {
        /* height: 2rem; */
        /* background: #bdbdbd7a; */
        background: #eee;
        /* height: 10vw; */
        color: white;
        cursor: pointer;

    }
    .cal-card>.cal-card-days>.day:hover,
    .cal-card>.cal-card-days>.day.current-month:hover,
    .cal-card>.cal-card-days>.day.current-month.current-day:hover{
        background: #a27aa6;
        border-radius: 5%;
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
        background:  #a27aa6;
        color:cornsilk;
    }

    .buttons>div>button {
        
    }

    .cal-card>.cal-card-days>.day.current-month{
        /* background:#440f53; */
        /* background: #856591; */
        background: #eee;
        color:black;
    }
    .cal-card>.cal-card-days>.day.current-month.current-day{
        /* background:#ffc20a; */
        background: #590c60;
        border-radius: 5%;
        color:white;
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

<script src="./calendar/js/general.js" defer></script>
<script src="./calendar/js/list_events.js" defer></script>
<script src="./calendar/js/calendar.js" defer></script>
<script src="./calendar/js/api.js" defer></script>
<script src="./calendar/js/add_event.js" defer></script>
<script src="./calendar/js/event_tools.js" defer></script>
<script src="./calendar/js/edit_event.js" defer></script>

