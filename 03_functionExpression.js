var num = 100;
console.log(num);
var display = function()
{

    console.log(`I am Angular Developer !`);

}
display();

console.log(typeof display);
var add = function(num1, num2)
{

    var result = num1+ num2;
    console.log(`Addition is: ${result} `);

}
add(20, 40);

 

// var wordCount = function(word)
// {
//     var words = word.split(" ");
//     var wordCount  = word.length;
//     console.log(`In Given String - ${word}`);
//     return wordCount;
// }
// var result = wordCount("I am UI Developer");
// console.log(`Total word count is string: ${result}`);

var wordCount = function(word)
{
    var words = word.split(" ");
    var wordCount  = words.length;
    console.log(`In Given String - ${word}`);
    return wordCount;
   
}
var square1 = result * result;
var result = wordCount("JS the most popular language of Internet");
console.log('Total number word of String is :', result , 'Calculate the square :' , square1); 




var wordCount = function(word)
{
    var words = word.split(" ");
    var wordCount  = word.length;
    //var wordCount = word.charAt(word-6);
    var wordCount = word.charAt(word-11);
    console.log(`In Given String - ${word}`);
    return wordCount;
}

var result = wordCount("JS the most popular language of Internet");
console.log(`Total word count is: ${result}`);
console.log(`The Character at Index 6 is : ${result}`);