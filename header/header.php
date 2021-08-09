<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="css/shapes_style.css" type="text/css">
    <link rel="stylesheet" href="css/nav_style.css" type="text/css">
    <link rel="stylesheet" href="css/forms_style.css" type="text/css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css">

</head>

<body>

    <?php
    $nav = [
        "Start" => "./index.php",
        "O mnie" => "./about.php",
        "ikony" => "./shapes.php",
        "formularze" => "./forms.php",
        "projekty" => "./projects.php",
        "tab 5" => "./index.php",
    ];

    ?>
    <header>
        <div class="navigation">
            <?php foreach ($nav as $key => $value) { ?>
                <a href="<?= $value ?>"> <?= $key ?> </a>
            <?php } ?>
            <!-- <a href="./index.php"> </a>
            <a href="./shapes.php">ikony</a>
            <a href="./shapes.php">formularze </a>
            <a href="./shapes.php">projekty</a>
            <a href="./shapes.php">ikony</a>
            <a href="./shapes.php">ikony</a> -->
            <!-- <div class="box-wrap-2">
                <div class="box-container-2">
                    <button class="btn" type="submit">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="box-container-title"> Menu</div>
                    <div class="menu-wrap-2">
                        <?php foreach ($nav as $key => $value) { ?>
                            <a href="<?= $value ?>"> <?= $key ?> </a>
                        <?php } ?>
                    </div>
                </div>
            </div> -->

            <div class="box-wrap">
                <button class="btn" type="submit">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="menu-wrap">
                    <?php foreach ($nav as $key => $value) { ?>
                        <a href="<?= $value ?>"> <?= $key ?> </a>
                    <?php } ?>
                </div>
            </div>
        </div>

    </header>
    <div >
    </div>