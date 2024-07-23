// function calc(a){
//     return a+a;
// }

// calc(2)

//defining function
//passing params
// return statement

calc(4,5)
function calc(a,b){
    return a+b;
}

//calc(2)


// var sum =  calc
// sum(5,9)
//14

var sum = function(a,b){
    return a+b
}
sum(3,4);

//self invoking functions 
(function(n){
    console.log( "Hey " + n + " I am self invoked function")
})("venkat")