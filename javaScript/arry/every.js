// it is work on logical {AND}

let array = [89,56,89,24,56];
let ans = array.every((el) => {
    return el%2==0
})
console.log(ans);
