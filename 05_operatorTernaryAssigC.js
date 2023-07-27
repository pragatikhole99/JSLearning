console.log('-------------------Boys Marriage Eligibility----------------------');
var maleMarriageEligiblity = function(gender,age,boyName)
{
    var result = age>=21 ? `Hey ${boyName} you are eligible for Marriage` : `Not eligiable for Marriage`;
    console.log(result);
}
maleMarriageEligiblity("Male",25,"Billgates");
maleMarriageEligiblity("Male",17,"Stew Jobs")
console.log('');

console.log('-------------------Girls Marriage Eligibility----------------------');
var femaleMarriageEligiblity = function(gender,age,girlName)
{
    var result = age>=18 ? `Hey ${girlName} you are eligible for Marriage` : `Not eligiable for Marriage`;
    console.log(result);
}
femaleMarriageEligiblity("female",16,"Jenifer");
femaleMarriageEligiblity("female",27,"Malinda Gates")