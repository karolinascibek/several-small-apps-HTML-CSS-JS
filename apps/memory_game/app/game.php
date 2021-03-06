<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">

    <link rel="stylesheet" href="./apps/memory_game/app/css/basic_style.css">
    <title>MG V2</title>
</head>

<body>
    <main id="main-container">
        <section id="result-board-section">
            <div id="left-side">
                <div id="time">00:00:00</div>
                <div id="points"> <span> 12</span></div>
            </div>
            <div id="right-side">
                <button id="history-btn" class="btn"><i class="fas fa-medal"></i></button>
                <button id="restart-btn" class="btn"><i class="fas fa-redo"></i></button>
            </div>

        </section>

        <section id="history-section">
            <div id="history-container">
                <table>
                    <tr>
                        <th>Czas</th>
                        <th>Wynik</th>
                    </tr>
                    <tr>
                        <td>00:00:00</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>00:00:00</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>00:00:00</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>00:00:00</td>
                        <td>12</td>
                    </tr>

                </table>
            </div>
        </section>

        <section id="board-section">
            <div id="board">
                <div class="board-row">
                    <div class="card">karta</div>
                    <div class="card">karta</div>
                    <div class="card">karta</div>
                </div>
                <div class="board-row">
                    <div class="card">karta</div>
                    <div class="card">karta</div>
                    <div class="card">karta</div>
                </div>
                <div class="board-row">
                    <div class="card">karta</div>
                    <div class="card">karta</div>
                    <div class="card">karta</div>
                </div>
                <div class="board-row">
                    <div class="card">karta</div>
                    <div class="card">karta</div>
                    <div class="card">karta</div>
                </div>
            </div>

            <div id="start-game">
                <button>start</button>
            </div>
        </section>

        <section id="settings-section">
            <header>Ustawienia</header>
            <div id="btns-optons">
                <button id="level" class="btn">rozmair gry</button>
                <button id="color" class="btn">kolor</button>
                <button id="speed" class="btn">speed</button>

            </div>
            <div id="options-board" class="">
                <!-- <button class="option">4x4</button>
                <button class="option">4x4</button>
                <button class="option">4x4</button>
                <button class="option">4x4</button>
                <button class="option">4x4</button> -->
            </div>
        </section>
        

        <script type="module" src="./apps/memory_game/app/js/app.js"></script>

    </main>
</body>

</html>