<div id="cat">
    <div class="ears-cat">
        <div class="ear-cat"></div>
        <div class="ear-cat"></div>
    </div>
    <div class="head-cat">
        <div class="eyes">
            <div class="eye"></div>
            <div class="eye"></div>
        </div>
        <div class="nose"></div>
        <div class="mouth">
            <div class="part-mouth"></div>
            <div class="part-mouth"></div>
        </div>
    </div>
    <div class="paws">
        <div class="paw"></div>
        <div class="paw"></div>
    </div>
</div>


<script>
    function setEarSize() {
        var ears = document.querySelectorAll(".ear-cat");
        var paw = document.querySelector(".paw");
        var width = paw.offsetWidth;

        ears.forEach(ear => {
            ear.style.borderBottom = "40px solid black";
            ear.style.borderLeft = `${width/2}px solid transparent`;
            ear.style.borderRight = `${width/2}px solid transparent`;
        })
    }

    function setNoseSize() {
        var nose = document.querySelectorAll(".nose");
        var mouth = document.querySelector(".part-mouth");
        var width = mouth.offsetWidth;

        nose.forEach(n => {
            n.style.borderTop = `${width/2}px solid pink`;
            n.style.borderLeft = `${width/2}px solid transparent`;
            n.style.borderRight = `${width/2}px solid transparent`;
        })
    }

    setEarSize();
    setNoseSize();
    window.addEventListener("resize", setEarSize);
    window.addEventListener("resize", setNoseSize);
</script>