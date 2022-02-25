<?php 

require_once("./global/php/const.php");
require_once("./global/views/header/header.php");
require_once("./global/views/nav/nav.php");
?>


<!-- <div >
</div>
<div id="start-page">
    <img src="./img/forest.jpg" alt="">
</div> -->
<div class="container-main">
<div id="projects">
    <ul id="projects-list">
        <li>
                <a href="./calendar.php">
                <div><i class="far fa-calendar-alt"></i></div>
                <h4>kalendarz</h4>
            </a>
        </li>
        <li>
            <a href="./memory_game.php">
            <div><i class="fas fa-gamepad"></i></div>
            <h4>Gra pamięciowa</h4></a>
        </li>
        <li>
            <a href="./icons.php">
            <div><i class="far fa-square"></i></div>
            <h4>Ikony</h4>
        </a>
        </li>
    </ul>
</div>
</div>

<?php 
//require_once("./shapes.php");
?>

<?php 
require_once("./global/views/footer/footer.php");
?>




