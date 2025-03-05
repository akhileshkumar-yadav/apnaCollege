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



// higher order function return "_________________________________________________________________________________________"



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

// let obj = {
//     name:"akhileh",
//     age:"21",
//     fun:function(){
//         console.log("this is a function");

//         console.log(this.name); // this is a method
//         console.log(this.age);   //this is a method

//     }
// }



// console.log(obj.fun());



//function inside object return"_____________________________________________________________________________________"

// let object = {
//     add:function(a,b){
//         return a+b;
//     }
// }

// let result = object.add(5,6);
// console.log(result);




// Practice qouestion "______________________________________________________________________________________________"
//  given array to find the largest number in the array
// let arr=[3,5,6,8,9,10,12,15,18,20];
// let largeNum = 0;
// function fun(){
//     for(let i=1;i<=arr.length;i++){
//         if(largeNum<arr[i]){
//             largeNum = arr[i];
//         }
//     }
//     return largeNum;
// }


// let result = fun();
// console.log(result);


// Practice qouestion "______________________________________________________________________________________________"
// given string to unique character in the string
// let str = "akhilesh";
// let arr = [];
// function fun(){
//     for(let i=0;i<str.length;i++){
//         if(arr.indexOf(str[i])=== -1){ //indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//             // -1 means that the element is not present in the array
//             arr.push(str[i]);
//         }
//     }
//     return arr;
// }
// let result = fun();
// console.log(result);



// Practice qouestion "______________________________________________________________________________________________"
// let name = "akhileshkumar";
// let arry=[];
// function fun1 () {
//     for(let i=0;i<name.length;i++){
//         if(arry.indexOf(name[i])=== -1){
//             arry.push(name[i]);
//         }
//     }
//     return arry;
// }


// let result1 = fun1();
// console.log(result1);


// Practice qouestion "______________________________________________________________________________________________"

// let arr = ["china", "nepal", "bhutan", "india", "japan", "china", "nepal", "bhutan", "united state of america"];
// let Arry = [];
// let str = 0;
// function fun2() {
//     for (let i = 0; i < arr.length; i++) {
//         if (str < arr[i].length) {
//             str = i;

//         }
//         return str;
//     }


// }

// let result2 = fun2();
// console.log(result2);



// Practice qouestion "______________________________________________________________________________________________"
let country = ["Australia", "Germany", "UnitedStatesofAmerica"]; 
function longestName(country){
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length; 
        if (currLen > ansLen) {
            ansIdx = i;
        }
    } 
    return country[ansIdx];
}


// return country[ansIdx];
let result = longestName(country);
console.log(result);
