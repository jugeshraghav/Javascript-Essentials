//⭐Expressions and Operators 
// Expressions : Collection  of Operands and Operators to give some output
//Operator : Symbol which is used to perform any operation on the operands.
//Operands: The values on which some operation is performed.
//eg: 4+5: here 4 and 5 are operands, + is opertor and 4+5 is an expression

//👉Types Of Operators 

//1️⃣ Arithmetic Operators(+,-,*,/,%,**)
// console.log(4+10);
// console.log(4-9);
// console.log(4*9);
// console.log(13/2);//returns decimal value
// console.log(13%2);//returns remainder
// console.log(2**3);//exponent

// 2️⃣ Assignment Operators(=)
// var x = 5;
// var y = 5;
//3️⃣ compund assignment operators
// console.log(x+=y);
// console.log( x == y);
// console.log("hii" + x == y);//here hi+x is compared withy thats why its returning false
// console.log(x+=y);//x=10
// console.log(x-=y);//x=0
// console.log(x*=y);//x=25
// console.log(x/=y);//x=1

//4️⃣ Logical Operators(&&,||,!)

//5️⃣ Relational/Comparison Operators(==,!=,===,!==,>,<,>=,<=)

//6️⃣ Bitwise Operators (&,|,^,~,<<,>>)

//7️⃣ Conditional Operator(?:)

//8️⃣ increament-decreament operator
// a)postfix b)prefix
// var a = 5;
// var b = a++;
// console.log(a);//6
// console.log(b);//5

// var e = 5;
// var f = ++e;
// console.log(e);//6
// console.log(f);//6

/* The value increases or decreases after the execution of the complete statement in postfix 
while in prefix first the value is increased or decreased by one then 
the statement is executed. */

// var c= 5;
// var d = c--;
// console.log(c);
// console.log(d);

// var g = 5;
// var h = --g;
// console.log(g);
// console.log(h);

//9️⃣ String Operator(+(concatenation))
// console.log("java"+"script");

//*******************  program to swap two numbers*********************************************/
// var a = 5;
// var b = 10;
// var c;
//  c=a;
//  a=b;
//  b=c;
//  console.log(`the value of a is :` + a);
//  console.log("the value of b is :" + b);

 //******************* program to swap two numbers without a third variable *****************************/
// var a = 5;
// var b = 10;
// a=a+b;
// b=a-b;
// a=a-b;
//  console.log(`the value of a is :` + a);
//  console.log("the value of b is :" + b);

 //❓Q : Difference between == and ===?
 // A : == checks only the value but === checks value and data type.
//  var a= 5;
//  var b = '5';
//  console.log(a==b);//returns true
//  console.log(a===b);//returns false
