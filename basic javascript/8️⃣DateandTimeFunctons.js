/**😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊 DATE AND TIME FUNCTIONS😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊*/
//JS date objects represent a single moment in time is a platform independent format.
//date objects contain a number that represents milliseconds since jan 1 1970 UTC.

//⭐Ways to create a date object
// 1.new Date()
// 2.new Date(yr,month,day,hrs,min,sec,milliseconds); it takes 7 arguments;
// 3.new Date(milliseconds);
// 4.new Date(date string);

//👍new Date() constructor
//it returns the GMT(greenWich mean time) time at the particular instance along with some additional info about date and day.

// var currTime= new Date();
// console.log(currTime); //2021-05-11T20:02:50.853Z

//if you want the current time according to your local time. we have two methods:
// 1.
// var currTime = new Date().toLocaleString();
// console.log(currTime);//12/5/2021, 1:36:40 am

// 2.
// var currTime = new Date().toString();
// console.log(currTime);//Wed May 12 2021 01:37:53 GMT+0530 (India Standard Time)

///Date.now()
//it returns the no of milliseconds since jan 1 1970.
// var currTime = Date.now();
// console.log(currTime);//1620763821018
