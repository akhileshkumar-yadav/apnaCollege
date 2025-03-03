let student ={
    name:"akhilesh",
    age:21,
    course:"BCA",
    address:"kondra",
    phone:8173970887,
    email:"akhilesh@gmail.com",

}


// console.log(student);
// console.log(student.name);
// console.log(student["name"]);
// console.log(student.age);
// console.log(student["age"]);
// console.log(student.email.slice(0,8));


// let pra = {
//     1:"akhilesh",
//     2:"kumar",
//     3:"singh",
//     null:"null",
//     undefined:"undefined",
//     true:"true",
//     false:"false",
// }


// console.log(pra);
// console.log(pra[1]);



const college = {
    student1: {
        name: "Amit Sharma",
        age: 21,
        email: "amit.sharma@example.com"
    },
    student2: {
        name: "Priya Verma",
        age: 22,
        email: "priya.verma@example.com"
    },
    student3: {
        name: "Rahul Singh",
        age: 23,
        email: "rahul.singh@example.com"
    }
};

// console.log(college);

// console.log(college.student1.name);
// console.log(college.student2.age);
// console.log(college.student3.email);
// college.student1.name = "akhilesh";
// console.log(college.student1.name);
// console.log(college);


const college1 = [
    {
        name: "Amit Sharma",
        age: 21,
        email: "amit.sharma@example.com",
        marks:[80,90,56,78]
    },
    {
        name: "Priya Verma",
        age: 22,
        email: "priya.verma@example.com",
        marks:[80,50,56,78]
    },
    {
        name: "Rahul Singh",
        age: 23,
        email: "rahul.singh@example.com",
        marks:[80,79,56,78]
    }
];

// console.log(college);


// for (const element of college1) {
//     console.log(element.name);
//     console.log(element.age);
//     console.log(element.email);
    
    
// }



// console.log(college1[0].name);

//  console.log(college1[1].marks[2]); // 56
//  console.log(college1[0].name.toUpperCase());


// let num = Math.random();
// console.log(num);
// let value = Math.floor(num*10);
// console.log(value + 1);


// while (true) {
//     let num = Math.random();
//     let value = Math.floor(num * 5) + 1;  // `+1` yahan shift kiya
//     console.log(value);
    
//     if (value === 5) {
//         break;  // Jab 5 mile toh loop band ho jaye
//     }
// }



// game

let max = prompt("Enter the maximum value");
let target = Math.floor(Math.random() * max) + 1;
console.log(target);
let guess = (prompt("Enter your first guess"));
while (true) {
    if(target==="exit"){
        console.log("You quit the game");
        break;
        }
    if( guess == target){
        console.log("Congratulations you win the game");
        break;
    }
    else if(guess>target){
        guess = prompt("Too high, Enter a new guess");
    }
    else{
        guess = prompt("Too low, Enter a new guess");
    }
}














