
//👉ES5 ECMASCRIPT 2014
//  1️⃣ "use strict";
//as we know javascript is a forgiving language. but with the use of "use strict" we have to follow all the 
// basic rules and syntaxes of javascript which we used to ignore
//example:
// without "use strict";
// x=5;
// console.log(x);  //5 , with no error

// with 
// "use strict";
// x=5;
// console.log(x);//it will return error because we have not defined x 

//correction
// "use strict";
// let x=5;
// console.log(x);//5

//👉ES6 ECMASCRIPT 2015
//we have laready seen all the updates of ES 2015

//👉ES7 ECMASCRIPT 2016
//  1️⃣ 1.array.includes(value) method 
//it returns true or false ater checking the variables in the array. If the 
// desired value is present in the array it returns true, if it is not present the value returned is false.
// example:
// let numbers = [2,4,5,3,6];
// console.log(numbers.includes(10));//output:false
// console.log(numbers.includes(3)); //output: true

// 2️⃣  2.exponential operator(**)
//it helps to find the power of any number
// console.log(3**5);
//output:243



//👉ES8 ECMASCRIPT 2017
//  1️⃣ async functions

// 2️⃣ string padding
//it helps to add space in the beginning or at the end of the string.
//😁if space is added in the beginning wee use: string.paddStart();
//😁if space is to be added at the end of the string we use: string.padEnd();

//***************************************string.padStart();****************************************************/
// example:
// let myName="jugesh";
// the length of myName "jugesh" is 6, if we add some space before it say space for 4 characters
// the new length of string becomes 10;
// So, in string.padStart(lengthOfNewString) is passed.

//string.padStart(maxLength) // the maxLength is always in numbers. The maxLength includes 
                         //the length of the string as well
                                  
// let myName = "Jugesh";
// console.log(myName.padStart(10));//here (length of myName + 4)=10
//so,space of 4 characters is left before "Jugesh" and  the output is : "    Jugesh" 

//if the length of string and the parameter passed in string.padStart() method is same then no space is added.
// example:
// let myName = "Jugesh";
// console.log(myName); //output: "Jugesh"
// console.log(myName.padStart(6));//output: "Jugesh"

//***************************************string.padEnd();****************************************************/
// example:
// let myName="jugesh";
// the length of myName "jugesh" is 6, if we add some space at the end of it say, space for 4 characters
// the new length of string becomes 10;
// So, in string.padEnd(lengthOfNewString) is passed.

//string.padEnd(maxLength) // the maxLength is always in numbers. The maxLength includes 
                         //the length of the string as well
                                  
// let myName = "Jugesh";
// console.log(myName.padEnd(10));//here (length of myName + 4)=10
//so,space of 4 characters is added after "Jugesh" and  the output is : "Jugesh    " 

//if the length of string and the parameter passed in string.padEnd() method is same then no space is added.
// example:
// let myName = "Jugesh";
// console.log(myName); //output: "Jugesh"
// console.log(myName.padEnd(6));//output: "Jugesh"



//3️⃣Object.values(objectname)
//Returns an array of values(not keys) of the enumerable properties of an object

// let biodata = {
//     name:"Jugesh",
//     age:"21"
// }
// console.log(Object.values(biodata));
//output: [ 'Jugesh', '21' ]

//4️⃣Object.entries(objectname)
//Returns an array of key/values of the enumerable properties of an object
// let biodata = {
//     name:"Jugesh",
//     age:"21"
// }
// console.log(Object.entries(biodata));
//  output: [ [ 'name', 'Jugesh' ], [ 'age', '21' ] ]


//👉ES9 ECMASCRIPT 2018
// 1️⃣ rest/spread operator for objects.
// let obj1 = {fullName :"Jugesh raghav",
// age:"21"};
// let obj2 = {...obj1,degree:"b.tech"}// ...(triple dots) are the spread operator which allow us to embed 
// console.log(obj1);                 //one object into other. Earlier(in es6) it could be done onlty in the arrays
// console.log(obj2);


// 2️⃣ there are other updates too the we will study later.  




//👉ES10 ECMASCRIPT 2019
// 1️⃣ array.flat(level)
// this helps us to convert multidimensional array into array with lower level of dimension.
//Returns a new array with all sub-array elements concatenated into it recursively  up to the specified level. 
 
//by default it flattens the array only upto one level.
// let array = ["myName","Jugesh",["Raghav",2,4,[4,"hii",6]]];
// console.log(array.flat()); 
//output:[ 'myName', 'Jugesh', 'Raghav', 2, 4, [ 4, 'hii', 6 ] ]

//if we want to flatten the array upto some specified levels then we can just pass the level
// let array = ["myName","Jugesh",["Raghav",2,4,[4,"hii",6,["hello",7,8]]]];
// console.log(array.flat(2));
//output: [ 'myName', 'Jugesh', 'Raghav', 2, 4, 4, 'hii', 6, [ 'hello', 7, 8 ] ]

//if we want to flatten the array of any dimension and convert it to one dimensional array, pass "Infinity"
//as the level
// let array = ["myName","Jugesh",["Raghav",2,4,[4,"hii",6]]];
// console.log(array.flat(Infinity)); 
//output: [ 'myName', 'Jugesh', 'Raghav', 2, 4, 4, 'hii', 6 ]


// 2️⃣ Object.fromEntries():Returns an object created by key-value entries for properties and methods
//Object.entries(objectname):Returns an array of key/values of the enumerable properties of an object
// and Object.fromEntries(arrayCreatedFromObject) converts the arrayCreatedFromObject again into object.
//example:
// let biodata = {
//     name:"Jugesh",
//     age:"21"
// }
// const ArrayObject = Object.entries(biodata);
// console.log(ArrayObject);//[ [ 'name', 'Jugesh' ], [ 'age', '21' ] ]
// const newObject = Object.fromEntries(ArrayObject);
// console.log(newObject);//{ name: 'Jugesh', age: '21' }


// let array=["hii","hello",2,5];
// console.log(Object.fromEntries(array));//wrong as this method takes key:value pairs.

//3️⃣string.trimStart() and string.trimEnd() 

// let myName= "     Jugesh   ";
// console.log(myName); /// no space is trimmed. //output:"     Jugesh   "
// console.log(myName.trimStart());//trims the space from beginning. //output:"Jugesh   "
// console.log(myName.trimEnd());//trims the space from the end. //output:"     Jugesh"


//👉ES11 ECMASCRIPT 2020
// 1️⃣BigInt
// by using n at the end of any number it becomes of the type bigint. bigint allows us to use numbers above 
// the MAX_SAFE_INTEGER.

    //   let num = Number.MAX_SAFE_INTEGER;
    //   console.log(num);     //9007199254740991
    //if we perform operations on variables having value more than the MAX_SAFE_INTEGER then some error occurs.;
    
    // let b= 909879685867989878698898;
    // let c = b+12;
    // console.log(b);  //9.098796858679898e+23
    // console.log(c);  // 9.098796858679898e+23
    //the operation is not performed correctly. this is where bigint comes in use.
                    

    // let a= 98988987n;
    // console.log(typeof(a));//bigint

// 2️⃣ Nullish Coelscing operator(??)
//sometimes we want to check whether the value is nullish or undefined.
// this is a logical operator checks two operands, if the operand on left side is nullish(null or undefined)
//it returns the right side operand. 
//if the left hand side operand is something other than nullish value , it returns the left hand side 
//operand

// const a = null?? 23;
// console.log(a);           //23

// const a = 23??null;
// console.log(a);            //23

// const a = undefined??23;
// console.log(a);            //23

// const a = 23??undefined;
// console.log(a);           //23

// const a = true??undefined;
// console.log(a);           //true

// const a = false??undefined;
// console.log(a);             //false

// const a = true??false;
// console.log(a);           //true

// const a = "hii"??34;
// console.log(a);             //hii


// 3️⃣
