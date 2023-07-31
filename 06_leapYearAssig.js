
console.log(`-----------------------Assignment 03----------------------------`);

var leapYear = function (year)
{   
    var yearValue = +year;
    if(isNaN(yearValue))
    {
        console.log(`Your year "${year}" is invalid`); 
        return;
    }
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 4000))
    {
        console.log(`The year "${year}" is leap year`);
    }
    else
    {
        console.log(`The year "${year}" is not leap year`);
    }
}
leapYear(2020);
console.log(`---------------------------------------------------`);
leapYear(1999);
console.log(`---------------------------------------------------`);
leapYear(1600);
console.log(`---------------------------------------------------`);
leapYear(2022);
console.log(`---------------------------------------------------`);
leapYear(1945);
console.log(`---------------------------------------------------`);
leapYear("Twenty Twenty");
console.log(`---------------------------------------------------`);
leapYear(undefined);
console.log(`---------------------------------------------------`);
leapYear(NaN);
console.log(`---------------------------------------------------`);
leapYear(1750);
console.log(`---------------------------------------------------`);
