<div id="container">
    <div id="game">
        <div id="header" class="box">
            <h3>Zagraj w grę!</h3>
            <ul id="size_board">
                
            </ul>
        </div>
        <div id="container-game" class="box">
            <div id="board" class="box">

                <!-- <div>p1</div>
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
                <div>p1</div> -->
            </div>
            <div id="results" class="box">
                <h4>Wyniki</h4>
            </div>
        </div>
    </div>
</div>

<style>
    .box {
        padding: 1rem 0;

    }

    #container {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    #game {
        display: flex;
        flex-direction: column;
        width: 50%;
        background: lightslategray;
    }

    #header {
        width: 100%;
        text-align: center;
    }

    #container-game {
        display: flex;
        width: 100%;
        background: white;
        flex-direction: column;
        align-items: center;
    }

    #container-game>#board {
        display: flex;
        width: 100%;
        background: lightslategray;
        flex-wrap: wrap;
        justify-content: center;
    }

    #board>div {
        background: yellow;
        margin: 1px;
        border-radius: 5%;
        width:10vw;
        height: 10vw;
    }
    #size_board{
        display: flex;
        list-style: none;
        justify-content: space-around;
        padding: 0;
    }
    #size_board > li{
        background: white;
        width: 30%;
        padding: 1rem 0;
    }

    .card {
        background: yellow;
        margin: 1px;
        border-radius: 5%;
        width:10vw;
        height: 10vw;
    }
    .card-color{
        background: yellow;
    }

    #container-game>#results {
        display: flex;
        background: lightslategrey;
        width: 100%;
    }
</style>

<script src="./memory_game/js/nav.js"></script>
<script src="./memory_game/js/board.js"></script>
<script src="./memory_game/js/game.js"></script>
<!-- 
<script src="./memory_game/js/card.js"></script> -->
<!-- <script src="./memory_game/js/board.js"></script> -->
