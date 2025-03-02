// let name = prompt("Enter your name");
// let age = prompt("Enter your age");

// alert(` ${name} is ${age} years old`);


// let quarter = prompt("Enter the quarter number");

// switch(quarter){
//     case "1":
//     console.log("January, February, March");
//     break;
//     case "2":
//     console.log("April, May, June");
//     break;
//     case "3":
//     console.log("July, August, September");
//     break;
//     case "4":
//     console.log("October, November, December");
//     break;
//     default:
//     console.log("Invalid quarter");
// }


// let num1 = 32;
// let num2 = 4532;
// if((num1%10) == (num2%10)){
//     console.log("last digit is ",num1%10);
// }
// else{
//     console.log("last digit is not 2");
// }


// console.log(num1[2]);


// let num = [1,2,3,-5];
// console.log(num.length);
// // agar humme 5 ko remove karna hai toh
// num.pop();
// console.log(num);



let favirouteMovie = "RRR";

// agar hum jitne bhi promt me valu de rahe toh usko ek arry me store kar rahe hai
// aur jab tak user sahi value nahi deta tab tak prompt me value mangte rahege
// aur jab user sahi value deta hai toh usko alert kar dete hai

let select = prompt("Enter your faviroute movie");
while((select !== favirouteMovie) && (select !== "exit")){
    select = prompt("again enter your faviroute movie");
    

}

if(select === favirouteMovie){
    alert("You are correct");
}





