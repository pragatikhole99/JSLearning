//Rest = means remaning 
//writing the parameter in the begining in not allowed  and middle is not allowed only allowed in end (...num).
//only one parameter thats oaky 
function add(num1 , num2, ...num) {
    //console.log(num);
    //console.log(`num1 ${num1} , num2 ${num2}`);
    addition = num1 + num2 
    addition1 = addition + num
    console.log(addition1);
}
//add(5,6);
add(9,5,6);
add(89,56,34,78,90,51,68);