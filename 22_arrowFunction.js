function add()
{
    console.log(12+12);
}
add();

let arroFun1 = ()=>{
    console.log(18+13);
}
arroFun1();

let arroFun = ()=>{
    return 13+13;
}
let value = arroFun();
console.log(value);

let multiply = (num1,num2)=>{
    console.log(num1*num2);
}
multiply(5,8);