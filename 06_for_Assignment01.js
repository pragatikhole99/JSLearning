console.log(`-----------------------Assignment--------------------`);
// print number 5 to 15 increment by 1 
console.log(`Print numbers from 5 to 15 by increment 1:`);
var result = " ";
for (let index = 5; index <= 15; index++) {
    result = result.concat(index).concat(" ");
}
console.log(result);

console.log(``);
console.log(`Print numbers from 50 to 40 by decrementing 1:`);
var result = " ";
for (let index = 50; index >= 40; index--) {
    result = result.concat(index).concat(" ");
    
}
console.log(result);

console.log(``);
console.log(`Print first 15 odd numbers`);
var result = " ";
for (let index = 1; index < 30; index= index+2) {
    result = result.concat(index).concat(" ");
    
}
console.log(result);

console.log(``);
console.log(`Print first 10 even numbers`);
var result = " ";
for (let index = 0; index < 20; index= index+2) {
    result = result.concat(index).concat(" ");
}
console.log(result);

console.log(``);
console.log(`Print Table 5 :`);
var result = " ";
for (let index = 5; index <= 50; index= index+5) {
    result = result.concat(index).concat(" ");
}
console.log(result);

console.log(``);
console.log(`Print Table 10 :`);
var result = " ";
for (let index = 10; index <= 100; index= index+10) {
    result = result.concat(index).concat(" ");
}
console.log(result);

console.log(``);
console.log(`Print Table 10 in Reverse :`);
var result = "";
for (let index = 100; index >= 10; index= index - 10) {
    result = result.concat(index).concat(" ");
    
}
console.log(result);