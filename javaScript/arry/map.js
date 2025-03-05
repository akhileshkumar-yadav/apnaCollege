// map fuction 



let array = [56,78,34,98,75,90,87];
 let sum = 0;
let ans = array.map((el) => {
    sum = sum + el;
    return sum;
})
 console.log(sum);
 
console.log(ans);
