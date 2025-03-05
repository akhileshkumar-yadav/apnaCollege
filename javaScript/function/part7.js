// try and catch satements
// try and catch satements are used to handle errors in the code. The try block contains the code that might throw an error, and the catch block contains the code that will handle the error. If an error is thrown in the try block, the catch block will catch it and handle it. The finally block will always run, regardless of whether an error was thrown or not.



// try {
//     console.log(a);
// } catch(err){
//     console.log("Error: " + err);
//     console.log(err);
// }

// In this example, the code inside the try block will throw an error because the variable a is not defined. The catch block will catch the error and log it to the console. The finally block will run regardless of whether an error was thrown or not.

// The catch block can also be used to handle specific types of errors. For example, you can catch a specific type of error by specifying the type of error in the catch block:


// Arrow functions "______________________________________________________________________________________________"
// Arrow functions are a new feature in ES6 that provide a more concise syntax for writing functions. Arrow functions are anonymous functions that can be assigned to a variable or passed as an argument to another function. Arrow functions have a more compact syntax than traditional function expressions, making them easier to read and write.


let arrow = () => {
    console.log("This is an arrow function");
}

arrow();





// // Arrow functions with parameters "__________________________________________________________________________"

// // Arrow functions can also take parameters. If an arrow function has more than one parameter, the parameters must be enclosed in parentheses. If an arrow function has only one parameter, the parentheses can be omitted. If an arrow function has no parameters, the parentheses must be included, even if they are empty.


let arrow2 = (a,b) => {
    return a+b;
    console.log(a+b); // This line will not be executed
    
}



let result = arrow2(5,6);
console.log(result);   // Output: 11


// // Arrow functions with a single parameter "__________________________________________________________________________"
// // If an arrow function has only one parameter, the parentheses can be omitted. This is because the arrow function syntax is more concise than traditional function expressions, and the parentheses are not required when there is only one parameter.


let arrow3 = a => {
    return a;
}
 console.log(arrow3(5));  // Output: 5


// // Arrow functions with no parameters "__________________________________________________________________________"
// // If an arrow function has no parameters, the parentheses must be included, even if they are empty. This is because the arrow function syntax requires parentheses to enclose the parameters, even if there are none.   
let arrow4 = () => {
    console.log("This is an arrow function with no parameters");
}
arrow4();   // Output: This is an arrow function with no parameters

// // Arrow functions with a single line of code "___________________________________________________________________"
// // If an arrow function has only one line of code, the curly braces can be omitted. This is because the arrow function syntax is more concise than traditional function expressions, and the curly braces are not required when there is only one line of code.
let arrow5 = a => a;
console.log(arrow5(5)); // Output: 5



// // Arrow functions with multiple lines of code "___________________________________________________________________"
// // If an arrow function has multiple lines of code, the curly braces must be included. This is because the arrow function syntax requires curly braces to enclose the code block, even if there is only one line of code.
let arrow6 = (a,b) => {
    let result = a+b;
    return result;
}
console.log(arrow6(5,6)); // Output: 11
// // Arrow functions with a return statement "___________________________________________________________________"
// // If an arrow function has a return statement, the return statement must be included. This is because the arrow function syntax requires a return statement to return a value, even if the return value is implicit.
let arrow7 = (a,b) => a+b;
console.log(arrow7(5,6)); // Output: 11
// // Arrow functions with no return statement "___________________________________________________________________"
// // If an arrow function has no return statement, the arrow function will return undefined. This is because the arrow function syntax requires a return statement to return a value, even if the return value is implicit.
let arrow8 = (a,b) => {
    let result = a+b;
}
console.log(arrow8(5,6)); // Output: undefined
// // Arrow functions with an object literal "___________________________________________________________________"
// // If an arrow function returns an object literal, the object literal must be enclosed in parentheses. This is because the arrow function syntax requires parentheses to enclose the return value, even if the return value is an object literal.
let arrow9 = () => ({name: "John", age: 30});
console.log(arrow9()); // Output: {name: "John", age: 30}




// setTimeout and setInterval "_______________________________________________________________________________"


// setTimeout and setInterval are two functions that are used to execute code after a specified delay. setTimeout is used to execute code once after a specified delay, while setInterval is used to execute code repeatedly at a specified interval.

// console.log("This is a console.log statement");

// setTimeout(() => {
//     console.log("This is a setTimeout function");
// },1000);

// console.log("This is another console.log statement");

// In this example, the console.log statements will be executed
// in the order they are written. The setTimeout function will
// be executed after a delay of 1000 milliseconds (1 second).

// setinterval function "_______________________________________________________________________________"
// setInterval is used to execute code repeatedly at a specified interval. The setInterval function takes two arguments: a function to execute and an interval in milliseconds. The function will be executed repeatedly at the specified interval until it is cleared using the clearInterval function.

// let id = setInterval(() => {
//     console.log("This is a setInterval function");
// },1000);

// setTimeout(() => {
//     console.log("Clearing setInterval function");
    
//     clearInterval(id);
// },5000);


// this keyword normal function me and arrow function me "__________________________________________________"
// The this keyword behaves differently in arrow functions compared to normal functions. In a normal function, the value of this is determined by how the function is called. In an arrow function, the value of this is determined by the surrounding context in which the arrow function is defined.

let obj = {
    name:"akhilesh",
    age:21,
    greet: function(){
        console.log("Hello, my name is " + this.name); 
    },
    arrowGreet: () => {
        console.log("Hello, my name is " + this.name);
    },
    arrowGreet1: function() {
        setTimeout(() => {
            console.log("Hello, my name is " + this.name);
        },1000);
    },
    arrowGreet2: function() {
        setTimeout(() => {
            console.log("Hello, my age is " + this.age);
        },1000);
    }
}

obj.greet(); // Output: Hello, my name is akhilesh
obj.arrowGreet(); // Output: Hello, my name is undefined
obj.arrowGreet1(); // Output: Hello, my name is undefined
obj.arrowGreet2(); // Output: Hello, my age is undefined 


// In the above example, the greet function is a normal function and the value of this is the object obj. The arrowGreet function is an arrow function and the value of this is the global object, which is undefined in this case. This is because arrow functions do not have their own this value and inherit the this value from the surrounding context in which they are defined.


let sq = a => a*a;
console.log(sq(5)); // Output: 25
// this is examle of arrow function
// In this example, the sq function is an arrow function that takes a single parameter a and returns the square of a. The arrow function syntax is more concise than traditional function expressions, making it easier to read and write.The function is called with the argument 5, and the result is logged to the console.

// let id = setInterval(() => {
//     console.log("Hello, world!");
// },2000);
// this is example of arrow function
// setTimeout(() => {
//     // console.log("Hello, world!");
//     console.log("Clearing setInterval function");
//     clearInterval(id);
    
// },10000);




