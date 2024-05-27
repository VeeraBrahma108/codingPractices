// function operation(a,b) 
// {
//     let c=a+b;
//     return c
// }
// console.log(operation(10,20));


//higher order function and callback
let a=Number(prompt("enter the a value"))
let b=Number(prompt("enter the b value"))
function operation(a,b,task)
{
    let reslut=task(a,b)
    return reslut
}
let res=operation(a,b,function(a,b){
    return a-b
})
let res1=operation(a,b,function(a,b)
{
return a/b
})
let res2=operation(a,b,function(a,b)
{
    return a*b
})
console.log(a);
console.log(b);
console.log(res);
console.log(res1);
console.log(res2);

function operation(a,b,task)
{
    let reslut=task(a,b)
    return reslut
}
let res11=operation((a,b),function(a,b){
    return a-b
})
let res12=operation(a=Number(prompt("enter the a value")),b=Number(prompt("enter the b value")),function(a,b)
{
return a/b
})
let res13=operation(a=Number(prompt("enter the a value")),b=Number(prompt("enter the b value")),function(a,b)
{
    return a*b
})
console.log(res11);
console.log(res12);
console.log(res13);