class Nav {
    sizesBorad = [8,16,20]
    objectHTML = null

    constructor(){
        this.objectHTML = document.getElementById("size_board")
        // this.createSizeBoxs();
    }

    createSizeBoxs(){
        for(const el of this.sizesBorad){
            const box = document.createElement("li")
            box.onclick = this.clickOnBox;
            box.innerHTML = el;
            this.objectHTML.appendChild(box)
        }
    }
    clickOnBox(event){
        console.log(event.target)
        const ob = event.target;

        const newBoard = new Board();
        newBoard.size = ob.innerHTML
        newBoard.create()
    }

    
}