//-------------------------------implicitly------------------
console.log(10+20);//
console.log(10+'80');//
console.log(typeof "10a");//
console.log(10+'a');//
console.log(10-5);//
console.log(10-'5');//
console.log(typeof NaN);//
console.log(typeof nan);//
console.log(typeof null);//
console.log(typeof true);//
console.log(typeof flase);//
console.log((NaN) ? true : false);
//-------------------------------explicit-----------------------
console.log(10 + Number('80'));//
console.log(20 + String(50));//

console.log(Boolean(0));
console.log(Boolean(1));

var a= 4
var b= '5'
console.log(a-b);
//--------------------type corection--------------------
//the process of converting one type data into another type of data.
//by js engine implicity when a wrong type of data is used tn the exppression
// is known as corection.
//eg:-
console.log(5-'1');
//the string is converted to number,result is 4.
console.log(5+'1');
//the number is converted to string ,result is 51.
console.log(5-'a');
//the string is convert to number,the string doesnot have valid
//numeric value.hence it is converted to a special NaN.
//1.any arthematic operation with NaN-------result is NaN.
//2.two NaN's are never considered as athe same.
console.log(NaN===NaN);//
//------------------------------------explict type casting---------------------------
//the process of converting into one type value into another type of valus is known as excplict type of casting.
// conversion of any type of number
// syntax: number(data to be converted)
//---------------------------------string to number----------------
//1.if a string is valid number of any other character than we get NaN as the output.
console.log(Number('123'));//
//2.if the string consists of any other character then we get NaN as the output.
console.log(Number('a'));//
//3.Boolean to number.
console.log(Number(false));
console.log(Number(true));
//----------------------------------------------------------------------------------
//var ,let &const
if (true)
{
    var user="humans"
    //let user ="sapiens"
    //const user=500
    console.log(user);
}
//console.log(user);
//note:-
//1.in javascript all non zero number are considered as true.
//logical or ||
console.log(10||-30);//

console.log(0||30);//

//write a js code to achieve the following
//assume we have a container which keeps the count of item of iteams.
//if the count is Zero dispaly message empty
//if the count ism NON-ZERO display the count.
//ANS:- 
var count = 200;
console.log(count || 'empty'); 
var count = 0;
console.log(count || "empty"); 

//note:-
//logical or ||
// logical || bahaves differently if the value or RHS valus=e is non boolean.
//step--1. it converts the LHS value to boolean.
//step--2. if the converted LHS values value is true is returns the originals values present in th LHS.
//eg:-
console.log(10||30);
//step2) if the converted LHS values is failure then it returns the originals values present in the RHS.
console.log (0||30);

//write a jsto achieve the following
//assume we have a container which keeps the count the items.
//if the count is ZERO display message empty.
//-----------------------------------trace--------------------
//console .log("start");
//var a=10;
//var a=20;
//console.log(a)
//console.log(a)