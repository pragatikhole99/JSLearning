console.log("------------------------Implicit Conversion to String-----------------------");

var result = '3' + 2;
console.log(`The result of '3' and 2 is : ${result}`);
console.log(`Their is implicit conversion , 2 is converted into to string`);
console.log('');

var result = '3' + true;
console.log(`The result of '3' and true is : ${result}`);
console.log(`Their is implicit conversion , boolean value true is converted into to string`);
console.log('');

var result = '3' + undefined;
console.log(`The result of '3' and undefined is : ${result}`);
console.log(`Their is implicit conversion , boolean value undefined is converted into to string`);
console.log('');

var result = '3' + null;
console.log(`The result of '3' and null is : ${result}`);
console.log(`Their is implicit conversion , boolean value null is converted into to string`);
console.log('');


console.log("------------------------Implicit boolean Conversion to String-----------------------");

var result = '4' - true;
console.log(`The result of '4' and true is : ${result}`);
console.log(`Their is implicit conversion , boolean value true is indicate the 1`);
console.log('');

var result = 4 + true;
console.log(`The result of 4 and true is : ${result}`);
console.log(`Their is implicit conversion , boolean value true is indicate the 1`);
console.log('');

var result = 4 + false;
console.log(`The result of 4 and false is : ${result}`);
console.log(`Their is implicit conversion , boolean value true is indicate the 0`);
console.log('');

console.log("------------------------Implicit string Conversion to String-----------------------");

var result = '4' - '2';
console.log(`The result of '4' and '2' is : ${result}`);
console.log(`Their is implicit conversion , String is automatically converted into numbers`);
console.log('');

var result = '4' - 2;
console.log(`The result of '4' and 2 is : ${result}`);
console.log(`Their is implicit conversion , String is automatically converted into numbers`);
console.log('');

var result = '4' * 2;
console.log(`The result of '4' and 2 is : ${result}`);
console.log(`Their is implicit conversion , String is automatically converted into numbers`);
console.log('');

var result = '4' / 2;
console.log(`The result of '4' and 2 is : ${result}`);
console.log(`Their is implicit conversion , String is automatically converted into numbers`);
console.log('');

console.log("------------------------Assignment: Conversion-----------------------");

var result = 0 == '';
console.log(`The result of 0 == '' is : ${result}`);
console.log(`The '' is converted 0 i.e false , 0 == 0`);
console.log('');

var result = 0 == '0';
console.log(`The result of 0 == '0' is : ${result}`);
console.log(`The '0' string is converted into number 0 i.e false , 0 == 0`);
console.log('');

var result = 0 == false;
console.log(`The result of 0 == false is : ${result}`);
console.log(`The boolean value false is convert into 0 i.e false , 0 == 0`);
console.log('');

var result = null == undefined;
console.log(`The result of null == undefined is : ${result}`);
console.log(`The null is converted 0 i.e false and undefined is converted 0 i.e false , 0 == 0`);
console.log('');

var result = 1==[1];
console.log(`The result of 1==[1] is : ${result}`);
console.log(`These conversion below 1==1 i.e. 1`);
console.log('');

var result = 1==true;
console.log(`The result of 1==true is : ${result}`);
console.log(`Boolean value true is convert into 1 i.e. true, these conversion below 1==true(1) i.e. 1`);
console.log('');

var result = 1=='1';
console.log(`The result of 1=='1' is : ${result}`);
console.log(`'1' string is converted into number , these conversion below 1=='1' i.e. 1`);
console.log('');

