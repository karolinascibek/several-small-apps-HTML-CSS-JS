<div class="calendar">
    <div class="cal-nav">
        <h2 id="current-card" >Sirpień</h2>
        <div class="buttons">
            <div class="prev" onclick="setPrevMonth(currentDate)">
                <button><i class="fas fa-arrow-left"></i></button>
            </div>
            <div class="next" onclick="setNextMonth(currentDate)">
                <button><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </div>

    <div class="cal-card">
        <div class="cal-card-weekdays"> </div>
        <div class="cal-card-days"> </div>
    </div>
</div>

<style>
    .calendar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 55%;
        font-size: 1em;
    }

    .calendar>.cal-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: lightblue;
        width: 100%;
    }

    .calendar>.cal-nav> .buttons > button {
        width: 50%;
    }

    .calendar>.cal-nav>button>i {
        font-size: 1.5rem;
    }

    .calendar>.cal-card {
        display: flex;
        flex-direction: column;
        margin-left: 4%;
    }

    .cal-card>.cal-card-weekdays {
        display: flex;
        flex-direction: row;
        /* border-bottom: 2ox solid lightpink;
        flex-wrap:wrap; */
    }

    .cal-card>.cal-card-weekdays>div {
        display: flex;
        flex-direction: row;
        width: 13.5%;
        height: 10vw;
        background: #b7b7b7;
        border-right: 0.5px solid white;
        border-bottom: 0.5px solid white;
        justify-content: center;
        align-items: center;
    }

    .cal-card>.cal-card-days {
        display: flex;
        flex-wrap: wrap;

    }

    .cal-card>.cal-card-days>.day {
        width: 13.5%;
        height: 2rem;
        background: #bdbdbd7a;
        border-right: 0.5px solid white;
        border-bottom: 0.5px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vw;
        color: white;
    }

    .buttons {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 3%;
    }

    .buttons>div {
        width: 50%;
    }

    .buttons>div>button {
        width: 100%;
        padding: 5% 0;
        background: white;
        border: 1px solid lightgrey;
        cursor: pointer;
    }
    .buttons > div > button:hover{
        background: #b7b7b7;
    }

    .buttons>div>button>i {
        font-size: 1.1em;
    }

</style>

<script src="./js/calendar.js" defer></script>