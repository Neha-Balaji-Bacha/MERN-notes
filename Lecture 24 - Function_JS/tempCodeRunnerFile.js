function calculator(a,b,operation){
    return operation(a,b);
}
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function sub(a,b){
    return a-b;
}
let sum1 = calculator(3,4,add);
console.log({sum1});