<?php 
require_once("./global/views/header/header.php");
require_once("./global/views/nav/nav.php");
?>

<main class="container-main">
    <?php
        require_once("./apps/memory_game/app/game.php");
    ?>
</main>

<?php
require_once("./global/views/footer/footer.php");
?>