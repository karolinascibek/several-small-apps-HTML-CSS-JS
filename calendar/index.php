

<div class="container">
    <div id="calendar-container">
        <?php
        include_once("./calendar/calendar.php");
        include_once("./calendar/formAddEvent.php");
        ?>
    </div>

</div>



<style>
    

    .container{
        /* position: relative; */
        width: 100%;
    }
    #calendar-container{
        /* position: relative; */
        width: 40%;
    }

    
    @media screen and (max-width: 650px){
        #calendar-container{
            width: 90%;
        }
    }
    @media screen and (max-width: 870px){
        #calendar-container{
            width: 60%;
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

