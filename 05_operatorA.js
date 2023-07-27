console.log(`Assignment-1`);
console.log(`---------------------- Part.1 ----------------------`);
function squareOfWordLength(word)
{
    //var words = word.split(" ");
    var wordCount  = word.length;
    return wordCount;
    
}
var result = squareOfWordLength("JavaScript");
var res = ("JavaScript");
var square1 = result*result;
console.log(`The length of ${res} count is : ${result} `);
console.log(`Square of string "${res}" : ${square1}`);
var result1 = squareOfWordLength("Google Chrome");
var res = ("Google Chrome");
var square1 = result1*result1;
console.log(`The length of ${res} count is : ${result1} `);
console.log(`Square of string "${res}" : ${square1}`);
var result2 = squareOfWordLength("Developer Smart");
var res = ("Developer Smart");
var square1 = result2*result2;
console.log(`The length of ${res} count is : ${result2}`);
console.log(`Square of string "${res}" : ${square1}`);

console.log(`---------------------- Part.2 ----------------------`);

var wordCount1 = function (num1)
{
    //var words1 = num1.split(" ");
    var wordCount1  = num1.length;
    console.log(`In Given String - ${num1}`);
    
    
    return wordCount1;
    
}
var resulta = wordCount1("I am Angular Developer");
var res1 = ("I am Angular Developer");
console.log(`The length of ${res1} count is : ${resulta}`);
var words1 = res1.split(" ");
var resultb  = words1.length;
console.log(`Total of word in "${res1}" count is : ${resultb}`); 
var resultc = resulta / resultb;
console.log(`The division of the string is : ${resultc}`);
var resultc = resulta * resultb;
console.log(`The multiplication of the string is : ${resultc}`);

