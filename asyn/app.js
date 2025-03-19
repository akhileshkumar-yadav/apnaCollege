
// async function fun () {
//     throw("404 error")
//     return "akhilesh"
// }

// fun()
// .then((result) => {
//     console.log(`this is ${result}`);
    
// })
// .catch((err) => {
//     console.log("Some error ");
    
//     console.log(` this an ${err}`);
// })


function fun2(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1
            console.log(num);
            resolve();  
        },1000)
    })
}


async function fun(){
    await fun2();
    console.log("one");
    
    await fun2();
    console.log("second");
    await fun2();
    console.log("third");
    await fun2();
    console.log("forth");
    await fun2();
    console.log("fivth");
    fun2();
}



