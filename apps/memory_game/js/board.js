// wersja objektowa 

class Board {
    size = SIZE_BOARD
    colorsToChoice = []
    colors=[]
    objectHTML=null


    constructor(){
        this.colorsToChoice = [
            "#FFD700","#1E90FF","#ADFF2F","#000000","#FF69B4", "#FFA07A","#7CFC00","#9400D3","#8f8585", 
            "#ffffff","#858544","#d91616","#FF8C00","#208630", "#fcca86","#5F9EA0","#B8860B","#2F4F4F"
        ]
        this.objectHTML = document.getElementById("board");
    }
    create(){
        this.drawColors()
        this.setCards();

        ARRAY_GLOBAL_COLORS = this.colors;
    }

    drawColors(){
        const n = this.size/2;
        const tempArrayColors = [...this.colorsToChoice];
        let arrayColors = []

        this.setRandomValueInArray(tempArrayColors, arrayColors, n )

        arrayColors = [...arrayColors, ...arrayColors];

        this.setRandomValueInArray(arrayColors, this.colors, this.size )
    }

    setRandomValueInArray(array, arrayResult, n ){
        for(let i=0; i<n; i++){
            let rand = this.getRandomInt(0, array.length);
            arrayResult.push(array[rand])
            array.splice(rand,1)
        }
    }


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
      setCards(){
          this.clearBoard();
          for(let i=0; i<this.size; i++){
            const card = document.createElement("div");
            card.id = `card-${i}`;
            card.onclick = this.clickedCard;
            this.objectHTML.appendChild(card)
          }
      }
      clearBoard(){
          const node = this.objectHTML;
          while(node.firstChild){
            node.removeChild(node.lastChild)
        }
      }
      
      stopClickCard(){
          console.log("STOP!!!!!")
      }

      // -- do poprawy ---
      clickedCard(event){
        const ob = event.target
        const id = ob.id.split("-")
        ob.style.background = ARRAY_GLOBAL_COLORS[id[id.length-1]];
        if(ACTIVE_CARDS.length === 2){
            const ob1 = ACTIVE_CARDS[0];
            const ob2 = ACTIVE_CARDS[1];
            if(ob1.style.background === ob2.style.background){
                ob1.onclick = this.stopClickCard;
                ob2.onclick = this.stopClickCard;
                console.log("takie same")
            }
            else{
                ob1.style.background = 'yellow';
                ob2.style.background = 'yellow';
                console.log("RÓŻNE!!")
            }
            ACTIVE_CARDS.pop()
            ACTIVE_CARDS.pop()
        }
        if(ACTIVE_CARDS.length === 1){
        
            if(ACTIVE_CARDS[0].id !== ob.id){
                ACTIVE_CARDS.push(ob);
            } 
        }
        if(ACTIVE_CARDS.length === 0){
            ACTIVE_CARDS.push(ob);
        }
        console.log(ACTIVE_CARDS)
        console.log("ckliknetą")

      }
}







