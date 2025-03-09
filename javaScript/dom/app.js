
//  id name +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ id name //
// let heading = document.getElementById("head");
// heading.textContent =  "first Heading"
// console.log(heading.innerText)
// console.dir(heading.textContent)
// console.dir(heading.innerHTML)

// class name ---------------------------------------------------------------------------------------- class name //

// let clas = document.getElementsByClassName("a")
// for(a of clas){
//     a.style.color = "red"
//     a.style.textDecoration ="none"
//     a.style.fontWeight = "800"
// }
// console.log(clas)

// tagName_______________________________________________________________________________________________ tag name //

// let tag = document.getElementsByTagName("h2");
// for (const element of tag) {
//     element.style.color = "blue"
// }
// console.log(tag);

// query selector class ====================================================================================== query selector //


// let query  = document.querySelectorAll(".boxLink");
// for (const element of query) {
//     element.style.color = "green"
// }
// query.style.color = "green";
// console.log(query);


//  query selector id ````````````````````````````````````````````````````````````````````````````````````````` id


// let idQuery = document.querySelector("#description");
// idQuery.style.color = "red";
// idQuery.style.lineHeight = "50px"


// query selector tag name ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ tag

// let tagQuery = document.querySelectorAll("h2");
// for (const element of tagQuery) {
//     element.style.color = "yellow";
// element.style.fontWeight = "900";
// }


// let getAtt = document.querySelector('h1')
// console.log(getAtt.getAttribute("class"));
// console.log(getAtt.setAttribute("class","heading"));
// console.log(getAtt.getAttribute("class"));


// classList ************************************************************************************************** classlist

let classList = document.querySelector("h1");
classList.classList.add("head2")
classList.classList.add("head3")
classList.classList.remove("head2")
console.log(classList.classList)

console.log(classList.classList.contains("head"))
console.log(classList.classList.contains("head2"))

console.log(classList.classList.toggle("head1"));
console.log(classList.classList.toggle("head2"));

console.log(classList.classList.toggle("head3"));

console.log(classList.classList)










