<div id="icon-heart" class="heart">
    <div id="shape-circlies" class="ears">
        <div id="ear-heart" class="circle"></div>
        <div id="ear-heart" class="circle"></div>
    </div>
    <div class="hide-bottom-ears"></div>
    <div id="shape-triangle" class="triangle">

    </div>
</div>

<script>
    var cir = document.querySelector("#ear-heart");
    function setTriangleSize() {
        var triangle = document.querySelector("#shape-triangle");
        var cir = document.querySelector("#ear-heart");
        var width = cir.offsetWidth;

        triangle.style.borderTop = "70px solid rgb(197, 37, 37)";
        triangle.style.borderLeft = `${width}px solid transparent`;
        triangle.style.borderRight = `${width}px solid transparent`;
    }
    setTriangleSize();
    window.addEventListener("resize", setTriangleSize);
</script>