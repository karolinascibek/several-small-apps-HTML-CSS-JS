const todos = [];

let comand = prompt("What would you like to do?")

while( comand !== "quit"){

    if(comand === "new"){
        let input = prompt("Add new todo?")
        todos.push(input)
        console.log(input + " : Added to list")
    }
    else if(comand === "list"){
        console.log("*****************")
        console.log("***Todos list ***")
        for(let i = 0; i < todos.length; i++ ){
            console.log(`${i} : ${todos[i]}`);
        }
        if(todos.length === 0){
            console.log(" Lista jest pusta.")
        }
        console.log("*****************")
    }
    else if(comand === "delete"){
        let input = parseInt(prompt("Give a index of todo"));
        if(input){
           let d= todos.splice(input,1);
            console.log("remove     ", d);
        }
        else{
            console.log("Nie ma takiego todo!!! Wybierz poprawny index.");
        }
    }

    comand = prompt("What would you like to do?")
}

if(comand === "quit"){
    console.log("Bye!!")
}



