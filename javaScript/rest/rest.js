let fun = (...argu ) => {
    console.log(argu.filter((el) => {
        return el>5;
    }));
    
}


let result = fun(1,3,5,7,9);


let fun2 = () => {
    console.log(arguments);
}


let result2 = fun2(2,4,6,8);
console.log(result2);

