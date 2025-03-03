function fun (){
    console.log('This is a function');  
}

fun();
 let arr = [];
 let smallNum = 0;
 let arr1 = [];
function rendomNumber () {
    let number =( Math.floor(Math.random()*6)+1);
    // console.log(number);
    arr.push(number);
    // smallNum = smallNum< number ? number : smallNum;
    // console.log(smallNum);

    if(smallNum < number){
        smallNum = number;
    }
     arr1.push(smallNum);
    
    console.log(arr);
    console.log(arr1);
}
rendomNumber();
rendomNumber();
rendomNumber();
rendomNumber();
rendomNumber();
rendomNumber();
rendomNumber();