let todo = [];
let req = prompt("Enter the todo info");
while(true){
    if(req == "exit"){
        console.log("exit page");
        break;
    }
    if(req == "list" ){
        console.log("_____________________________________");
        for (let task of todo) {
            console.log(task); 
            console.log("_____________________________________");
            console.log(todo);
            
        }
        req = prompt("Enter the todo info");
    }
    else if(req == "add"){
        let task = prompt("Enter the task to add");
        todo.push(task);
        console.log("Task added successfully");
        req = prompt("Enter the todo info");
    }
    
    else if(req == "delete"){
        let task = prompt("Enter the task to delete");
        todo.splice(task,1);
        console.log("Task deleted successfully");
        req = prompt("Enter the todo info");
    }
    else{
        console.log("Invalid input");
    
    }
    
}

