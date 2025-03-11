let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click",function() {
    let item = document.createElement("li");
    item.innerText = input.value;
    let butt = document.createElement("button");
    butt.classList.add("delete");
    butt.innerText = "Delete";
    butt.style.marginLeft = "10px"
    butt.style.width = "80px"
    // console.log(butt.getAttribute("className"));
    
    item.appendChild(butt);
    ul.appendChild(item);
    input.value = "";

})

// let butts = document.querySelectorAll(".delete");
//     for (let butt of butts) {
//         butt.addEventListener("click",function(){
//             let par = this.parentElement;
//             console.log(par);
            
//             // par.remove();
//     })
// }


// bubbling


 ul.addEventListener("click", function(event) {
    // console.log(event.target);
    // console.log(event.target.nodeName);
    if (event.target.nodeName === "BUTTON") {
        let par = event.target.parentElement;
        par.remove();
        }
        else{
            console.log("don't delete");
            

        }
    
    
 })
    
