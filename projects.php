<?php 
require_once("./header/header.php");
require_once("./nav/nav.php");
?>

<div class="projects">
    <ul>
        <li>
            <div><i class="far fa-image"></i></div>
            <a href="./calendar.php">kalendarz</a>
        </li>
        <li>
            <div><i class="far fa-image"></i></div>
            <a href="./forms/forms.php">formularze</a>
        </li>
        <li>
            <div><i class="far fa-image"></i></div>
            <a href="#">gra zapamietaj karte</a>
        </li>
        <li>
            <div><i class="far fa-image"></i></div>
            <a href="#">snajper?</a>
        </li>
        <li>
            <div><i class="far fa-image"></i></div>
            <a href="./icons.php">Icony</a>
        </li>
    </ul>
</div>

<?php 
require_once("./footer/footer.php");
?>

<style>
    div > ul > li > a{
        text-transform: capitalize;
        text-decoration: none;
        display: block;
        text-align: center;
        padding: 2em 0;
        color: gray;
        font-weight: bold;
        transition: transform 0.3s;
    }
    div > ul > li > a:hover{
       /* border-bottom: 3px solid red;
       background: lightgray; */
       font-size: 1.2em;
       color: rgba(189, 138, 138, 0.97);
       -webkit-box-shadow: 0px 5px 5px 0px rgba(189, 138, 138, 0.72); 
        box-shadow:0px 5px 5px 0px rgba(189, 138, 138, 0.72);
        transform: scale(1.02);
    }
    div > ul > li{
        list-style: none;
        margin:  1em ;
        border-radius: 0.5em;
        background: white;
        width: 40%;

    }
    div > ul > li>div{
        width: 100%;
    }
    ul > li>div>i{
        font-size: 300%;
        
    }
    div{
        display: flex;
        justify-content: center;
    }
    div>ul{
        width: 70%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }
</style>