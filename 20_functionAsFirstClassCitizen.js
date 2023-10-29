//In js we call function as first class function 
// 1. Function Expression 
// 2. Callback
// 3. Function can return another function 
function show ()
{
    console.log('Inside show function');
    let innerFunction = function(){
        console.log('Inside Inner Function');
    }
    return innerFunction;
}
// let inner = show();
// inner();
show()();

