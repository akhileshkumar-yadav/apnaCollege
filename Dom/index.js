




let button = document.querySelector(".btn");
   button.addEventListener("click", () => {
    let h = document.querySelector("h1");
    let changeColor = bgChanger();
    h.style.color = changeColor;
   })

let hover = document.querySelector(".btn");
hover.addEventListener("mouseover", () => {
    hover.style.backgroundColor = bgChanger()

})

   function bgChanger() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = (`rgb(${red},${green},${blue})`)
    return color ;

   }

   let input1 = document.querySelector("input")
   input1.addEventListener("mouseover" , () => {
    input1.style.backgroundColor = bgChanger()
    let heading = document.querySelector(".head");
    heading.style.transform = "translateX(150px)";
   })


const inputField = document.querySelector(".input-field");
const label = document.querySelector(".head");

inputField.addEventListener("mouseover", () => {
    // label.addEventListener("mouseover", () => {
        label.style.top = "1px";
        label.style.left = "10px";
        label.style.fontSize = "12px";
        label.style.color = "blue";

    // })

});

inputField.addEventListener("mouseout", () => {
    if (inputField.value === "") {
        label.style.top = "50%";
        label.style.transform = "translateY(-50%)";
        label.style.fontSize = "16px";
        label.style.color = "gray";
    }
});


let body = document.querySelector(".btn");
let input = document.querySelector(".input-container")
body.addEventListener("mouseover",() => {
     input.style.transform = "translateY(150px)"
})


