// let arr = [3, 5, 6, 8, 9, 10, 12, 15, 18, 20];
// let fun = (arr) => {
//     let sum = 0;
//     for (let i=0;i<arr.length;i++){
//          sum +=arr[i];
//         //  console.log(arr[i]);



//     }
//     console.log(sum);
//     return sum/arr.length;
// }


// let result = fun(arr);
// console.log(result);

console.log("-----------------------------------------------------------------------------------");
// let anEven =(num) =>{
//     if(num%2==0) {
//         console.log("The number is even");
//         return true;
//     }
//     else {
//         console.log("The number is odd");
//         return false;
//     }
// }



// let result = anEven(5);

// console.log(result);

// let result1 = anEven(6);
// console.log(result1);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let object = {
//     message:"This is a message",
//     logMessage () {
//         console.log(this.message);
//     }
// }
// setTimeout(object.logMessage,1000);

// object.logMessage();



let length = 4;

function collback() {
    console.log(this.length);
}

const object = {
    length: 5, 
    method(callback) {
         callback(); 
    },
};
object.method(collback, 1, 2);