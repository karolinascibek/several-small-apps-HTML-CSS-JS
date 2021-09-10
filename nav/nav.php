<?php
    require_once("./global/php/variable.php");

    ?>

<header>
    <div class="navigation">
        <?php foreach ($nav as $key => $value) { ?>
            <a class="nav-link" href="<?= $value ?>"> <?= $key ?> </a>
        <?php } ?>
        <!-- <button class="btn-menu-wrap-close" >X</button> -->
        <button class="nav-link btn-wrap-menu "><i class="fas fa-bars"></i></button>
        <div class="box-wrap">
            <ul>
               <?php foreach ($nav as $key => $value) { ?>
                   <li><a href="<?= $value ?>"> <?= $key ?> </a></li> 
                <?php } ?>
             </ul>
         </div>
         
    </div>

</header>
<div id="sectionAfterNav"></div>

<script>
function btnCloseMenu(){

    console.log("Hellow")
}

</script>

<style>
    #sectionAfterNav{
        margin-bottom: 100px;;
    }
</style>