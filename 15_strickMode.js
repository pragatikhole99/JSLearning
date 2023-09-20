

'use strick ';
myName = "GK";
console.log(myName);

//var age = 22;
//delete age ;   not allowed 

let student = {
    fullName :"Virat Kohli",
    age : 33,
    totalRuns : 33000

}
console.log(student);

//delete student; not allowed
delete student.totalRuns; //Allowed

function show(num1 , num1) {   //but 'use strick' keyword use the not allowed 
    console.log(num1 , num1);
}
show(5,5);