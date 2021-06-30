// Description:Learning JavaScript from scratch
//🤱 Author: Jugesh Raghav

//⭐ Values and variables

//👉 Variable: It is a named location in memory to store some data.
//👉Rules to write a variable name:
// 1.First letter of a variable must be a letter, underscore(_) , ($) symbol.
// 2. we can't use number as the first letter of variable name, but it can be used in between vaiable name.
// 3. any character other than _ and $ can't be used in a variable name.
// 4. Can,t use keywords(reserved words) as variable name;

// To declare a variable in javascript just use the var keyword, no need to
// specify the data type of variable . That is why javascript is called Dynamically typed/loosely typed Language. 

//👉declaration and initialization of variable.
// var  myName = "Jugesh";
// console.log(myName); // console.log is used to print anything on the console.

//👉 Declaration and initialization in different lines is done as
// var myLastName;
// myLastName="raghav";
// console.log(myLastName);

/***  writing a semicolon after any statement in js is optional because js is a forgiving language. But it is a good practice to write a semicolon after every statement.**/


//👉Some examples of variable declaration and initialization.
//  var myName = "Jugesh"; //correct 
//  var _myName = "Raghav";//correct
//  var $myAge = 50;     //correct
//  var 1myRoll = 12;//An identifier or keyword cannot immediately follow a numeric literal
//  var my Roll = 12;//error
//  var my, Roll = 12;	//no error becaause here 2 variables are declared my and Roll
//  var my*Roll = 13; // error
// var my$Roll = 12;  //no error
// var my__Name = "Ramu"; //no error
// var myName_ = "Allu"; //no error
// var var = 50; //var is not allowed as variable declaraton name.
// var __name = "jugesh"; //no error


/*JavaScript is case sensitive  */
// var Name;
// var name;
// Name and name are two different things.

