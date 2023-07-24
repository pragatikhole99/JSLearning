console.log(`Assignment ------------ -----`);
console.log(`---------------------- Q.1 ----------------------`);

var square = function(num1)
{

    var result = num1 * num1;
    console.log(` Square ${num1} of is: ${result} `);

}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log(`------------------- Q.2 -------------------------`);
console.log(`The type of function is :`,typeof square);

console.log(`------------------- Q.3 ------------------------`);
var len = 499;
var width = 917;
var result = len * width;
console.log(`The area of Rectangle : ${result}`);

console.log(`------------------- Q.4 --------------------------`);
function swap(n1, n2)
{
console.log('Before Swapping the value :', n1, n2 );
var temp = n1;
n1 = n2;
n2 = temp;
console.log('After Swapping the value :', n1, n2 );
}

var mahi = "Mahi";
var raina = "Raina";
swap(mahi, raina);// Function call or invocation

var num1 = 55;
var num2 = 77;
swap(num1, num2);

console.log(`------------------- Q.5 --------------------------`);
var greet = "JS the most popular language of Internet";
var lengthGreet= greet.length;
console.log('Length of String is:', lengthGreet);

var charAtLastIndex = greet.charAt(lengthGreet-6);
console.log(`The Character at Index 6 is : ${charAtLastIndex}`);

var charAtLastIndex = greet.charAt(lengthGreet-11);
console.log(`The Character at Index 11 is : ${charAtLastIndex}`);

var charAtLastIndex = greet.charAt(lengthGreet-1);
console.log(`The Last Character is : ${charAtLastIndex}`);

var charAt0 = greet.charAt(0);
console.log(`The very First caharcter is : ${charAt0}`);

var charAtLastIndex = greet.charAt(lengthGreet-3);
console.log(`The Last Character is : ${charAtLastIndex}`);

var result = greet.split(' ');
var words = result.length;
var square1 = words * words;
console.log('Total number word of String is :', words , 'Calculate the square :' , square1);


