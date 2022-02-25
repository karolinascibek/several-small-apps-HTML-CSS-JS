

<?php

require_once("../../global/views/header/header.php");
require_once("../../global/views/nav/nav.php");
?>

<script src="./../../global/js/ajax.js" defer></script>

<div class="container-main">

    <div class="container">
        <div id="calendar-container">
            <?php
            include_once("./views/calendar.php");
            include_once("./views/formAddEvent.php");
            ?>
        </div>

    </div>
</div>


<script src="./js/general.js" defer></script>
<script src="./js/list_events.js" defer></script>
<script src="./js/calendar.js" defer></script>
<script src="./js/api.js" defer></script>
<script src="./js/add_event.js" defer></script>
<script src="./js/event_tools.js" defer></script>
<script src="./js/edit_event.js" defer></script>
<script src="./js/main.js" defer></script>


<?php
require_once(URL_BASE."/global/views/footer/footer.php");
?>