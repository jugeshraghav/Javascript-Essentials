//⭐DATA TYPES:Data types are the reserved words which tells the type of data. But in javascript
                //we do not define the data type along with the variable name as in C. That is why 
                //javascript is considered as a dynamically typed language.
// 👉(Primitive) 1.Number , 2. String 3. Boolean 4.Undefined 5.Null(Object) 6.BigInt
//👉(non-primitive) 1.arrays 2. objects

// To find the Data Type of the value we entered use= typeof(value);
// var a1 = 12; //number
// console.log(typeof(a1));

// var a2 = "12";  // string
// console.log(typeof(a2));

// var a3 = 1.2; //number
// console.log(typeof(a3));

// var a4 = true; //boolean
// console.log(typeof(a4));

// // var a5 = True;//True is not defined(if it was true the data type would be boolean)
// // console.log(typeof(a5));

// var a6 = 1234567898756452532512232243523465465635634534235;
// console.log(typeof(a6)); //number

// var a7 = ""; // string
// console.log(typeof(a7));

// var a8;// undefined
// console.log(typeof(a8));

// var a9 = 'Rajuss';//string
// console.log(typeof(a9));

// var a10 = null; // object
// console.log(typeof(a10));

// var a11 = Null; // Null is not defined, js is case sensitive
// console.log(typeof(a11));


/*🚩Challenge*/
// console.log(10 + 10);//20
// console.log(10 + "10");//1010
// console.log("10" + 10);//1010
// console.log(10-9);//1
// console.log(10 - "9");//1 bug
// console.log("10"-9);//1 bug
// console.log("10"+"10");//1010
// console.log("10"-"10");//0 bug
// console.log("Java"+"Script");//javaScript
// console.log("vinod"-"thapa");//NaN
// console.log(true+true);//2
// console.log(true+false);//1
// console.log(false+true);//1
// console.log(false+false);//0
// console.log(""+true);//true
// console.log(true+"");//true
// console.log(""+"");//space
// console.log(""+5);//5
// console.log(true);//true

//coercion: one type of value is converted to other type. It is automatically done by the interpreter.

//❓Q : difference between Null And Undefined;
//❓Q : What is NaN?
/*NaN is a property of the global object.
in other words, it is a variable in global scope.
the initial value of NaN is Not-a Number. */

//isNan() method tells whether the entered value is a number or not
// it gives true if the value is not a number and gives false if the 
// value is a number.

// console.log(isNaN(345));// false
// console.log(isNaN("Jugesh"));// true
// console.log(typeof(NaN)); //number

//🚩Challenge 
// console.log(isNaN(NaN));//true
// console.log(NaN===NaN);//false
// console.log(Number.NaN===NaN);//false
// console.log(Number.isNaN(NaN));//true
// console.log(isNaN(Number.NaN));//true

