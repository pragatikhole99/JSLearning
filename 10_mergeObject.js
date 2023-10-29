let jenny = {
    fullName: "Jenny Musk",
    age: 22,
    city: "Pune",
    college: "COEP Pune", 
}
marks = {
    physics: 100,
    science: 99,
    math: 92

}
//merge an object
let mergedObject = Object.assign({} , jenny, marks);
console.table(mergedObject);

//clone an object
// const emp = {
//     emp_name : "Anil",
//     company : "TCS"
// }

// const cloned_emp = object.assign({},emp);
// console.log(cloned_emp);