console.log(`-----------------------Assignment 01----------------------------`);
var monthofYear = function (month) {
    switch (month) {
        case 1:
        console.log(`The number ${month} is - January`);
        break;
        case 2:
        console.log(`The number ${month} is - February`);
        break;
        case 3:
        console.log(`The number ${month} is - March`);
        break;
        case 4:
        console.log(`The number ${month} is - April`);
        break;
        case 5:
        console.log(`The number ${month} is - May`);
        break;
        case 6:
        console.log(`The number ${month} is - June`);
        break;
        case 7:
        console.log(`The number ${month} is - July`);
        break;
        case 8:
        console.log(`The number ${month} is - August`);
        break;
        case 9:
        console.log(`The number ${month} is - September`);
        break;
        case 10:
        console.log(`The number ${month} is - October`);
        break;
        case 11:
        console.log(`The number ${month} is - November`);
        break;
        case 12:
        console.log(`The number ${month} is - December`);
        break;
        default:
            console.log(`The number ${month} is - In valid input`);
        break;
    }
    console.log(``);
  
  };
  monthofYear(0);
  monthofYear(12);
  monthofYear(5);
  monthofYear(2);
  monthofYear(15);
  monthofYear(100);
  monthofYear(null);
  monthofYear(undefined);
  
  