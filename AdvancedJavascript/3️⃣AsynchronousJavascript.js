// 1.Hoisting in javascript
// 2. scope chain 
// 3. Lexical Scoping in javascript 
// 4. Use strict Mode 
// 5. This keyword
// 6. Closures in javascript
// 7. what is asynchronous javascript programming?
// 8. Event Loop

// 1️⃣Hoisting in javascript
//There are two phases in javascript: creation phase and execution phase. In creation phase we write our program but in execution phase 
//computer reorders some code and then gives us the result.

// Hoisting in Javascript is a mechanism where variables and functions
// declarations are moved to the top of their scope before the code execute.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";

//example 2:
// x=5;
// console.log(x);
// var x; //5
//while printing the result the declaration of x(var x;) moves to the top and thus we get the output. This is called Hoisting.



// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)

//if variables are initialized before they are declared using let it gives a Reference error.
//if variables are initialized before they are declared using const it gives a Syntax error.


//The general syntax of code is:
// 1.declaration and initialization of variable
// 2.use the variable 

//examples:
// x=5;
// console.log(x);
// var x;   //but as js is forgiving and hoisting is the default behaviour of js so if the variable is declared 
           //after initialization, the declaration of variable is moved to the top of the scope.

// x=5;
// console.log(x); //this also works.


// x=5;
// console.log(x);
// let x;     //Reference error: cannot access x before initialization.

// let x;
// x=5;
// console.log(x);  //works


//syntax error: as we have to declare as well as initialize the varible at the same time if we are using const.
// x=5;
// console.log(x);
// const x; //syntax error 

// const x; 
// x=5;
// console.log(x); //syntax error 

// 2️⃣ scope chain and Lexical Scoping in javascript 
//scope: area of program where the variable is accessible.
//three scopes are there in js
// 1.global scope
// functions and variables declared outside any function or block and are accessible by the whole program are said to be in global scope.
// 2.local scopre or functional scope
// variables declared inside a function , are accessible only inside that function. That variable is said to be in local scope.
// 3.block scope(ES6)
// variables declared inside a block(curly brackets) have block level scope, they can be accessed only inside the block.
//let and const have block level scope, var does not have.

//lexical scoping/static scope

//scope chaining

//lexical environment

//3️⃣use strict mode in js

//4️⃣this keyword in js
 

