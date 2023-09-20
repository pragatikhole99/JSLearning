//1.object destructuring
//use object destructuring when we use same variable name and property name 
let student = {
    rollNumber: 2233,
    state: "MH",
    city: "Pune",
    college: "COEP Pune"
}

// let state = student.state;
// let college = student.college;
// let city = student.city;
//let {state , city,college ,pin=456788 } = student;
const {state , city,college ,pin=456788 } = student;
console.log(state,college,city, pin);


//2.Array destructuring

let array = [4, 5, 6,77,88,99];
// let array1 = array.splice(2,2 );
// console.log(array);

let[num1,num2,num3,num4=0] = array;
console.log(num1,num2,num3,num4);