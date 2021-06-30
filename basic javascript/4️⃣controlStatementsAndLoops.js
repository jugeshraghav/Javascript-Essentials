//⭐ Control Statements and Loops
//👉Control statements: 
//decision control statements:If(check condition),if-else,nested if- else, if-else ladder,switch(can't use relational op)
//Loops(repeatitions):while loop, Do-While loop, For loop, For in loop , for of loop
//conditional operator/ternery operator

//************************************program: even -odd **************************************************/
// var no = 5;
// if(no%2==0)
// console.log("even");
// else
// console.log("odd");

//****************************************program 2:leap year*********************************************/
// var year=2012;
// if(year%4==0){
//     if(year%100!=0){
//        console.log("leap year")
//     }
//     else {
//         if(year%400==0){
//       console.log("leap year")
//         }
//         else{
//             console.log("not a leap year");
//         }
//     }
// }
// else{
//     console.log("not a leap year");
// }

//👉Truthy and falsy values
// These are non-boolean values which are coerced to false or true. 
// The values which return "true" are called "truthy values."
// The values which return "false" are called "falsy values."
// There are six falsy values: 0,"",null,undefined,NaN,false.
// example:
// if(score=0){
//     console.log("we loose");
// }
// else{
//     console.log("we won");
// }
//output is : we won

//👉Ternery Operator
// It is a js operator that takes three operators. It is a shorthand for if-else.
// exp1?exp2:exp3;
// exp1=condition 
// if condition is true exp2 is executed else exp3 is executed.

//*********************************Program : eligibility to vote************************************************/
// var age=15;
// age>=18?console.log("eligible"):console.log("not eligible");


//👉Switch Case
//syntax:
// switch(value to be checked){
//     case <value to be matched with>:
//         statement to be executed if the value matches.
//         break;
//     default
//         statement to be exexuted when nothing matches. 
// }

//👉While loop
//syntax 
// while(condition){
//     statements
//     increament/decreament(if needed)
// }

//👉Do-while loop
//  do{
//      statement to be executed.
//  }while(condition)
     
//👉for loop
// for(var x=8,i=1;i<=10;i++){
//     console.log(x+"*"+i+"="+(x*i));
// }