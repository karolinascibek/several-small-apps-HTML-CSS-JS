class Nav {
    sizesBorad = [8,16,20]
    objectHTML = null

    constructor(){
        this.objectHTML = document.getElementById("size_board")
        // this.createSizeBoxs();
    }

    createSizeBoxs(){
        for(const el of this.sizesBorad){
            this.createBox(el, this.clickOnBox)
        }
        this.createBox("Reset", this.resetButton)
    }
    createBox(el, func){
        const box = document.createElement("li")
        box.onclick = func;
        box.innerHTML = el;
        this.objectHTML.appendChild(box)
        return box;
    }
    resetButton(){
        const newBoard = new Board();
        newBoard.size = SIZE_BOARD
        newBoard.create()
    }
   
    clickOnBox(event){
        const ob = event.target;
        const newBoard = new Board();
        newBoard.size = ob.innerHTML
        newBoard.create()
        SIZE_BOARD = newBoard.size;
    }

    
}