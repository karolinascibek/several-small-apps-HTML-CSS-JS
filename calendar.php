<?php
require_once("./global/php/const.php");
require_once("./global/views/header/header.php");
require_once("./global/views//nav/nav.php");
?>

<script src="./global/js/ajax.js" defer></script>

<div class="container-main">

    <div class="container">
        <div id="calendar-container">
            <?php
            include_once("./apps/calendar/views/calendar.php");
            include_once("./apps/calendar/views/formAddEvent.php");
            ?>
        </div>

    </div>
</div>

<script src="./apps/calendar/js/general.js" defer></script>
<script src="./apps/calendar/js/list_events.js" defer></script>
<script src="./apps/calendar/js/calendar.js" defer></script>
<script src="./apps/calendar/js/api.js" defer></script>
<script src="./apps/calendar/js/add_event.js" defer></script>
<script src="./apps/calendar/js/event_tools.js" defer></script>
<script src="./apps/calendar/js/edit_event.js" defer></script>
<script src="./apps/calendar/js/main.js" defer></script>


<?php
require_once("./global/views/footer/footer.php");
?>