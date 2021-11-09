

<div class="container">
    <div class="row">
        <h1>Kształty</h1>
    </div>
    <div class="row">

        <!-- circle -->

        <div class="col">
            <div class="shape">
                <?php
                require_once "./apps/icons/packman.php";
                ?>
            </div>
        </div>

        <!-- heart -->
        <div class="col">
            <div class="shape">
                <?php
                require "./apps/icons/heart.php";
                ?>
            </div>
        </div>

        <div class="col">
            <div class="shape">
                <?php
                require_once "./apps/icons/cup.php";
                ?>
            </div>
        </div>

        <div class="col">
            <div class="shape">
                <?php
                require_once "./apps/icons/cat.php";
                ?>
            </div>
        </div>

        <div class="col">
            <div class="shape">
                <div class="circle">

                </div>
            </div>
        </div>

        <div class="col">
            <div class="shape">
                <div class="circle">

                </div>
            </div>
        </div>

        <div class="col">
            <div class="shape">
                <div class="circle">

                </div>
            </div>
        </div>

        <div class="col">
            <div class="shape">
                <div class="circle">

                </div>
            </div>
        </div>

        <div class="col">
            <div class="shape">
                <div class="circle">

                </div>
            </div>
        </div>
    </div>
</div>


<style>
    
.row{
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.col{
    /** N E S W **/
    margin: 1% 1% 1% 1%;
    height: 200px ;
    width:200px ;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 425px){
    .col{
        width: 50%;
        height: 50vw;
    }
}
.shape{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 0 0 1em #727272;
}
</style>
