class Game{
    game;
    header;
    game_container;
    board;
    result;
    
    constructor(id){
        this.game = this.getObjectById(id);
        this.init();
    }

    init(){
         
        this.header = this.createObject("div", "header", this.game);
        this.game_container = this.createObject("div", "container-game",this.game);
        this.board = this.createObject("div", "board",this.game_container);
        this.result =  this.createObject("div", "results", this.game_container);

        this.setClass(this.header,"box" )
        this.setClass(this.game_container,"box" )
        this.setClass(this.board,"box" )
        this.setClass(this.result,"box" )

        this.setTextContain(this.header, "Zagraj !!")
        this.setTextContain(this.result, "twoje wyniki")

        this.setCard(16);
    }

    getObjectById(id){
        return document.getElementById(id);
    }

    createObject(tag, id, parent){
        const ob = document.createElement(tag);
        ob.id = id;
        parent.appendChild(ob)
        return ob;
    }
    setTextContain(ob, text){
        ob.innerHTML = text;
        console.log(ob.textContain)
    }

    setClass(ob, className){
        ob.classList.add(className);
    }

    setCard(number){
        for(let i=0; i<number; i++){
            const card = this.createObject("div", `card-${i}`,this.board);
            this.setClass(card, "card");
        }
    }
    getCard(){
        return this.board.childNodes;
    }

    setRandomVal

}


let game = new Game('game');
console.log(game)