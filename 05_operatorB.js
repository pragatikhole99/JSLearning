console.log(`Assignment-2`);
console.log(`---------------------- Part.1 ----------------------`);
var greaterNumber = function(num1 ,num2)
{
    var result = num1 > num2  ? num1 : num2;
    console.log(`The greater number between ${num1} and ${num2} is : ${result} `)
    return greaterNumber;
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`---------------------- Part.2 ----------------------`);

var isEvenOddNumber = function(num)
{
    var result1 = num%2==0 ? "Even" : "ODD";
    var result2 = num%2==0 ? "True" : "False";
    console.log(`${num} is a "${result1}" number : ${result2}`);

}
isEvenOddNumber(29);
isEvenOddNumber(44);
isEvenOddNumber(0);
isEvenOddNumber(101);

console.log(`---------------------- Part.3 ----------------------`);

var wordLength = function(word)
{
    var wordLength  = word.length;
    //console.log(`In Given String - ${word}`);
    return wordLength;
}

var result = wordLength("JavaScript");
var res = "JavaScript";
var result1 = result%2==0 ? "Even" : "ODD";
console.log(`Length of ${res} is: ${result} and Length of string is Even/odd : ${result1} `);
var result = wordLength("Developer");
var res = "Developer";
var result1 = result%2==0 ? "Even" : "ODD";
console.log(`Length of string ${res} is: ${result} and Length of string is Even/odd : ${result1}`);
var result = wordLength("Google");
var res = "Google";
var result1 = result%2==0 ? "Even" : "ODD";
console.log(`Length of string ${res} is: ${result} and Length of string is Even/odd : ${result1}`);

