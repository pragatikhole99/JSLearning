const array =[10,20,5,40,30,15];
array.forEach((currentvalue,index,array)=>{  //currentValue1(1st parameter) is mandatory index and array is optional
    console.log(currentvalue,index,array);
});
console.log(`------------------------------------------------------------------`);
array.forEach((currentvalue)=>{  //currentValue is mandatory index and array is optional
    console.log(currentvalue);
});

console.log(`-------Find the even number using forEach-------------------`);
array.forEach((currentvalue)=>{  
    if (currentvalue%2==0) {
        console.log(currentvalue);
    }
});
console.log(`------------------------------------------------------------------`);
class Student {
    constructor(fullName, rollNo, college, emailId, mobile ){
        this.fullName = fullName;
        this.rollNo = rollNo;
        this.college = college;
        this.emailId = emailId;
        this.mobile = mobile;
  
    }
    // show(){
    //     console.log(`Student Details is Full Name: ${this.fullName} , Roll Number: ${this.rollNo}
    //     College Name: ${this.college}, Email Id: ${this.emailId}, Mobile : ${this.mobile}`);
  
    // }
  }
  let studentJenny = new Student("Jenny Gates", 11, "COEP Pune", "abc@gmail.com", "9096 78 6789");
  let studentStew = new Student("Stew Page", 22, "JSPM", "stew@gmail.com", "9867 8989 98");
  let studentElon = new Student("Elon Musk", 33, "Standford", "stew@gmail.com", "9867 8989 98");
  let studentSatya = new Student("Satya Nadella", 44, "ABC", "stya@gmail.com", "9867 8989 98");
  let studentSundar = new Student("Sundar Pichai", 55, "XYZ", "sundar@gmail.com", "9867 8989 98");
  
   

const arrayStudent = [studentElon,studentJenny,studentSatya,studentStew,studentSundar];
arrayStudent.forEach((student)=>{
    console.log(student.fullName,student.emailId);
})

console.log(`============= Set traversing using forEach()================`);
const setOfName = new Set();
setOfName.add('Pragati');
setOfName.add('Gauri');
setOfName.add('Ishu');
setOfName.add('Chaku');
setOfName.add('Dhurti');
setOfName.forEach((fName)=>{
    console.log(fName);
});

console.log(`===========Map traversing using forEach()================`);

let map = new Map();
map.set("rollNo", 11);
map.set("height" ,"6ft");
map.set("name" ,"GK");
map.set("state" ,"MH");
map.set("isMarried" ,true);
map.set("haveKid" ,true );
map.set("skills" , ["Angular", "React", "Java", "Docker", "K8", "CICD"] );
map.forEach((value,key)=>{
    console.log(`value : ${value} , key: ${key}`);
})