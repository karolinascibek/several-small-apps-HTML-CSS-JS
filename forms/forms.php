<?php 
require_once("../header/header.php");
require_once("../nav/nav.php");
?>

<div class="forms">
    <div class="form-1-container">
        <h3 class="form-1-name" >Formularz logowania</h3>
        <div class="form-1">
            <div class="form-1-group ">
                <label class="input-1-label" for="login-1">Login</label>
                <input type="text" name="login-1" class="form-1-input-1 ">
            </div>
            <div class="form-1-group">
                <label class="input-1-label" for="password-1">Hasło</label>
                <input type="password" name="password-1" class="form-1-input-1 ">
            </div>
            <div class="form-1-group form-1-group-btn" style="">
                <input type="submit" class="form-1-btn-1" value="Zaloguj się">
            </div>

        </div>
    </div>
    
</div>
<!-- <script>
    let ipc = document.getElementById("inp-date");
    let body = document.querySelector("body");
    function changeColor(event){
        body.style.background = event.target.value;
    }
    ipc.addEventListener("change", changeColor, false);
    function date(){
        let date = new Date();
        date = `${date.getFullYear()}-0${date.getMonth()}-0${date.getDate()}`;
        return date;
    }
    date = new Date();
    date = `${date.getFullYear()}-0${date.getMonth()}-0${date.getDate()}`;
    //ipc.value = date;
    ipc.value = date;
    console.log(ipc.value);
</script> -->

<?php
require_once("../footer/footer.php");
?>