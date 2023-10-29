//Remove duplicate element from array
const arrayNum = [11, 3, 4, 11, 4, 7, 3];
const uniqueArray = [...new Set(arrayNum)];

console.log(uniqueArray);

//Expected output ⇒ "HoW ArE YoU MatE"
const str = "How are you mate";  // h 0/ o 1 /w 2/3 /a 4 /r 5/ e 6/ 7/ y 8/ o 9/ u 10/ 11/ m 12/ a 13/ t 14/ e 15
let str1 = str.length;
console.log(str1);
const toggledCaseStr = str.split('').map((char, index) => {
  return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
}).join('');

console.log(toggledCaseStr);

//Given a string, reverse each word in the sentence

var string = "Welcome to this Javascript Guide!";
// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseEntireSentence);
