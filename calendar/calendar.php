

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
</div>


<style>
    .container {
        display: flex;
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
        border:0.5px solid white;
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

    .current_month{
        background:'#440f53';
    }
    .current_day{
        background:'#ffc20a';
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

