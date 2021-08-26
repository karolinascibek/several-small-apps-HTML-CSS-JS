
    <header>
        <div class="navigation">
            <a class="nav-icon-arow" href="<?= $nav["start"] ?>"> <i class="fas fa-arrow-left"></i> </a>
            <div class="box-wrap">
                <button class="btn" type="submit">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="menu-wrap">
                    <button id="btn-close-menu"  >X</button>
                    <?php foreach ($nav as $key => $value) { ?>
                        <a href="<?= $value ?>"> <?= $key ?> </a>
                    <?php } ?>
                </div>
            </div>
        </div>

    </header>
    <div style="margin-top:200px;">
    </div>


    <style>
        .navigation {
            justify-content: space-between;
            align-items: center;
        }

        .navigation>.box-wrap {
            display: block;

        }

        .navigation>.box-wrap>.btn {
            border: 0;
        }

        .nav-icon-arow > i {
            font-size: 1.5rem;
            color: black;
        }

        .navigation > a  {
            display: block;
            text-decoration: none;
            border-radius: 50%;
            padding: 1.7rem;
        }

        .navigation > a:hover {
            background: rgba(211, 179, 179,0.4);
        }

        #btn-close-menu:hover{
            background: grey;

        }
    </style>
