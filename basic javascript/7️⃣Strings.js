
/************************************************  STRINGS  ************************************************************************** */  
// 😊A js string is something or nothing writthen inside quotes. 
// var string="";
// var string="Jugesh";

// 😊A js string can store Text. 
// A string can be created using single quotes or double quotes. 
// var string="Jugesh";
// var string='jugesh';

// 😊As a string is a primitive data Type so it can be created directly using string literals or it can be created using String() constructor. 
// var name ="jugesh"; //Type is string
// var name = new String("jugesh"); //type is object //do not use.

// //⭐find length of string
// //string.length 
// //let name="jugesh raghav";
// //console.log(name.length); //it returns 13 as it returns the no of characters and counts the space also.

// //⭐Escape charater
// let sentence = "my name is "JUGESH RAGHAV" .";

// we can use alternate quotes .
// let sentence = 'my name is "JUGESH RAGHAV".';

// if both the quotes are already in use then use backslah escape Character. 
// let sentence = "My name is \"JUGESH\" \'RAGHAV\' and I Love to \"CODE\".";

//⭐Find index of  string in string
//👍string.indexOf();
//it returns the index of the character or first character of string searched, starting from 0. it returns -1 if data is not found.
// let string="hii, I am Jugesh Raghav.";
// console.log(string.indexOf("I"));    //5-for I
// console.log(string.indexOf("Jugesh"));//10-for J

//if we want to search from a specified index.
// let string="hii, I am Jugesh Raghav.";
// console.log(string.indexOf("I",3));  //output will be same as before but the searching starts from index no 3 and goes forward.

// let string="hii, I am Jugesh Raghav.";
// console.log(string.indexOf("I",6)); //output is -1 as after the index 6 ther is no character I 

// 👍string.lastIndexOf();
// it returns last index of searched character or the first character of searched string.
// let string="hii, I am Jugesh Raghav.";
// console.log(string.lastIndexOf("h")); //20- h of Raghav

// if we want to search from a specified index. Give an index after the character to be searched. 
// The search begins from the specified index and goes backward.
// let string="hii, I am Jugesh Raghav.";
// console.log(string.lastIndexOf("h",10)); //0 - h of hii 

//👍string.search()
//it returns the index of searched character or first character of the string starting from beginning.
//it does not take the second element(the index no from where the search begins)
// let string="hii, I am Jugesh Raghav.";
// console.log(string.search("h")); //0   

// console.log(string.search("h",10));//returns 0 as teh second parameter(10) is not considered. 

//⭐Extracting string parts
// 👍1.string.slice(startIndex,endIndex)
//👍it returns the etracted string. The element(character) at end index is not included.
// let string="hii, I am Jugesh Raghav.";
// console.log(string.slice(1,8)); //ii, I a

//👍 if end index is not provided it returns whole string starting from the start index. 
// let string="hii, I am Jugesh Raghav.";
// console.log(string.slice(5));   //I am Jugesh Raghav.

//👍if negetive end index is given, it returns the string starting from start index to one less than end index.
// let string="hii, I am Jugesh Raghav.";
// console.log(string.slice(5,-3)); //I am Jugesh Ragh

// 👍2.string.substring(start,end)
// 👍it returns the etracted string. The element(character) at end index is not included. 
// let string="hii, I am Jugesh Raghav.";
// console.log(string.substring(5,18)); //I am Jugesh R

//👍 if end index is not provided it returns whole string starting from the start index. 
// let string="hii, I am Jugesh Raghav.";
// console.log(string.slice(5));   //I am Jugesh Raghav.

// 👍it does not take negetive values but
// if we give negetive value then the characters are counted from index 0. the character at the end index is not included.
// let string="Hii Hello my name is jugesh";
// console.log(string.substring(5,-18)); //Hii Hello my name is jugesh

//var string = "Hii Hello my name is jugesh";
// console.log(string.substring(-5)); //Hii Hello my name is jugesh

//😁🤣🤣🤣🚩😊😊❤⭐😁😁😁🤣🤣🚩😊
// let string="hii, I am Jugesh Raghav.";
// console.log(string.slice(-5));  //starts from -5 index and returns the whole string : ghav. 

// console.log(string.substring(-5)); //doesnot take negetive values so starts from 0 and returns whole string: hii, I am Jugesh Raghav.   

// 👍3.string.substr(start,length);
// var string = "Hii Hello my name is jugesh";
// console.log(string.substr(-5));//negetive start index end at the end of string
// console.log(string.substr(5));//positive start index end at the end of string
// console.log(string.substr(-5,3));//second parameter is length of string afer the start index 3 characters are selected.
// console.log(string.substr(5,3));//second parameter is length of string afer the start index 3 characters are selected.
// console.log(string.substr(-5,-2));//length can't be negetive
// console.log(string.substr(5,-3));//length can't be negetive

//⭐replace string
// 👍syntax: string.replace(searchFor,replaceWith)

// 👍the replace method replaces a speccified value with another value

//👍important
// 1.The replace mmethod does not change the original string. 
// 2. it returns a new string. 
// 3. by default it replaces only the first match .

// let string="hii, I am Jogesh Raghav Jogesh.";
// console.log(string); //original string is not affected also only first match is replaced: hii, I am Jogesh Raghav Jogesh.
// console.log(string.replace("Jogesh","Jugesh"));  //new string: hii, I am Jugesh Raghav Jogesh.

//⭐extracting string characters
//👍 1.string.charAt(index);
//returns a character at specified index.
// let string="hii, I am Jogesh Raghav.";
// console.log(string.charAt(0));//h  
 
// 👍2.string.charCodeAt(index);
// returns  UTF-16 code (an integer between 0 - 65535) at specified index.
// let string="hii, I am Jogesh Raghav.";
// console.log(string.charCodeAt(0)); //104

// character code at last character 
// let string="hii, I am Jogesh Raghav.";
// console.log(string.charCodeAt(string.length-1));  //46

// 👍3.property access[]//es5(2009)
// extract characters directly by the index of characters. 
// var string = "Hii Hello";
// console.loh(string[2]);//i

//⭐other useful methods
// 1.string.concat()
// 2.string.toUpperCase();
// 3.string.toLowerCase();
// 4.string.trim();//removes white space from both the sides but not from between;
// 5.string.split();//converts string to array.
//   a.string.split(",")//wherever it finds , the string will be broken into elements. if no comma is found the whole string acts as one element.
//   b.string.split(" ")
//   c.string.split("|")