<div id="container">
<div id="game">
    <!-- <div id="header" class="box">
        Zagraj w grę!
    </div>
    <div id="container-game"  class="box">
        <div id="board"  class="box">
            
        <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div>
            <div>p1</div> 
        </div>
        <div id="results"  class="box"><h4>Wybju</h4></div>
    </div> -->
</div>
</div>

<style>
    .box{
        padding: 1rem 0;

    }
    #container{
        display: flex;
        width: 100%;
        justify-content: center;
    }
    #game{
        display: flex;
        flex-direction: column;
        width: 50%;
        background: blue;
    }
    #header{
        width: 100%;
        text-align: center;
    }
    #container-game{
        display: flex;
        width: 100%;
        background:red;
    }
    #container-game > #board{
        display: flex;
        width: 70%;
        background:purple;
        flex-wrap: wrap;
        justify-content: center;
    }
    #board>div{ 
        background:yellow;
        margin: 1px;
        border-radius: 5%;
        width: 8vw;
        height: 8vw;
    }
    .card{
        background:yellow;
        margin: 1px;
        border-radius: 5%;
        width: 8vw;
        height: 8vw;
    }
    #container-game > #results{
        display: flex;
        background:lightslategrey;
        width: 30%;
    }
</style>


<script src="./memory_game/js/card.js" ></script>
<script src="./memory_game/js/board.js" ></script>