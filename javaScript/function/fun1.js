// function fun (a,b) {
//     console.log(a+b);
//     console.log(a-b);
    
// }
// fun(2,3);
// fun(4,5);



// return statement "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"

// function fun (a,b){
//       let sum = a + b; 
//       let diff = a - b;
//       let both = sum + diff;
//       return both;
//         // console.log('This is a function');    // This will not execute
// }

// let result = fun(5,6);
// console.log(result);



// function expration "---------------------------------------------------------------------------------------------------"


// let fun2 = function (a,b){ //this is a function expression
//     console.log(a+b);
//     console.log(a-b);
    
// }

// fun2(2,3); // This is a function





// higher order function "______________________________________________________________________________________________"


// function fun3(fun4,a,b){

//     fun4(a,b);
//     // console.log( "this is value of fun3",a+b);
//     // console.log("this is value of fun3",a-b);
// }

// function fun(a,b){
//     console.log("this is value of fun4",a+b);
//     console.log("this is value of fun4",a-b);
// }

// fun3(fun,5,6);



// higher order function return "______________________________________________________________________________________________"



// function fun3(fun4,a,b){
//     return fun4(a,b);
// }
// function fun(a,b){
//     return a+b;
// }
// let result = fun3(fun,5,6);
// console.log(result);



// function inside function "______________________________________________________________________________________________"
// function fun3(){
//     function fun4(a,b){
//         return a+b;
//     }
//     return fun4;
// }
// let result = fun3();
// let result1 = result(5,6);
// console.log(result1);


// method inside object "______________________________________________________________________________________________"

let obj = {
    name:"akhileh",
    age:"21",
    fun:function(){
        console.log("this is a function");

        console.log(this.name); // this is a method
        console.log(this.age);   //this is a method
        
    }
}



console.log(obj.fun());



//function inside object return"_____________________________________________________________________________________"

let object = {
    add:function(a,b){
        return a+b;
    }
}

let result = object.add(5,6);
console.log(result);
