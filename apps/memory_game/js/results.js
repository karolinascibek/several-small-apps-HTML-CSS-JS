boardResultsBtn = document.querySelector(".btn-result")
console.log(boardResultsBtn)

boardResultsBtn.addEventListener("click", function(){
    boardResults = document.querySelector(".box-result")
    boardResults.classList.toggle("showBox")
    console.log("Btn-click")
 
})