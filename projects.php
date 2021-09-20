<?php 
require_once("./header/header.php");
require_once("./nav/nav.php");
?>

<div id="projects">
    <ul id="projects-list">
        <li>
                <a href="./calendar.php">
                <div><i class="far fa-calendar-alt"></i></div>
                <h4>kalendarz</h4>
            </a>
        </li>
        <li>
            <a href="./forms/forms.php">
                <div><i class="far fa-image"></i></div>
                <h4>formularze</h4>
            </a>
        </li>
        <li>
            <a href="./memory_game.php">
            <div><i class="fas fa-gamepad"></i></div>
            <h4>Gra pamięciowa</h4></a>
        </li>
        <li>
            <a href="./memory_game.php">
            <div><i class="far fa-image"></i></div>
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

<?php 
require_once("./footer/footer.php");
?>

<style>
    #projects-list > li > a{
        text-transform: capitalize;
        text-decoration: none;
        display: block;
        text-align: center;
        padding: 2em 0;
        color: gray;
        font-weight: bold;
        word-break: break-all;
    }
    #projects-list > li:hover{
        color: rgb(251 251 251 / 97%);
       /* -webkit-box-shadow: 0px 0px 10px 3px rgb(135 130 130 / 72%);; 
        box-shadow:0px 0px 10px 3px rgb(135 130 130 / 72%);; */
        background: #9c9c9c;
    }
    #projects-list > li:hover> a{
       /* border-bottom: 3px solid red;
       background: lightgray; */
       /* color: rgba(189, 138, 138, 0.97); */
       color: rgb(251 251 251 / 97%);;
    }
    #projects-list > li{
        list-style: none;
        margin:  1em ;
        border-radius: 0.5em;
        background: white;
        width: 25%;
        padding: 1rem;
        transition: background 0.5s;

    }
    #projects-list > li>a>div{
        width: 100%;
        font-size: 500%;
    }
    #projects-list > li>div>i{
        font-size: 300%;
        
    }
    div#projects{
        display: flex;
        justify-content: center;

    }
    #projects-list{
        width: 70%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }
    @media screen and (max-width:930px){
    #projects-list > li{
        width: 100%;
    }
    }
    @media screen and (min-width:931px) and (max-width:1250px){
    #projects-list > li{
        width: 40%;
    }
    }
</style>