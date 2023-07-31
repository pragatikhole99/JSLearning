console.log(`-----------------------Assignment 02----------------------------`);
var marriageEligiblity = function (gender,age)
{
   if(gender== "Female" && age>=18)
   {
    console.log(`You are gender is ${gender} and age is ${age} : Congratulation , Eligible for Marriage`);
   }
   else if (gender== "Female" && age<18)
   {
    console.log(`You are gender is ${gender} and age is ${age} : You are not Eligible for Marriage`);
   }
   else if(gender == "Male" && age>=21)
   {
    console.log(`You are gender is ${gender} and age is ${age} : Congratulation , Eligible for Marriage`);
   }
   else if (gender== "Male" && age<18)
   {
    console.log(`You are gender is ${gender} and age is ${age} : You are not Eligible for  Marriage`);
   }
   else 
   {
    console.log(`You are gender is ${gender} and age is ${age} : Invalid Data`);
   }
}

marriageEligiblity("Male",17);
marriageEligiblity("Male",25);
marriageEligiblity("Female",28);
marriageEligiblity("Female",16);
marriageEligiblity("Other",35);
marriageEligiblity("Other",41);