// /************************************************ ARRAY *********************************************************/
//  //array is a collection of data it may be homogenous or not.
//  //example:array containing homogenous data
//  let name = ["jugesh","amrood"];
//  //example:array containing different types of data.
//   let a = [2,true,"hii"];
//   //square brackets indicate an array. To create an array:
//   let array_name =[elements of array];
 
//   //index of an array
//   ["jugesh","raghav","hii","hello"]
//   from the beginning: index starts from 0 
//      let array= ["jugesh","raghav","hii","hello"]
//             index= [0    ,   1   ,   2 ,   3  ]
//   from the end:index starts from -1
//   let array= ["jugesh","raghav","hii","hello"]
//          index= [-4   ,   -3   ,   -2,   -1  ]
 
//   //To access an array:
//   array_name[index];
//   //indexing of array starts from 0. which means the first elment of array is placed at index 0.
 
//   //if we write the following code all the elements of the array will be displayed.
//   var s=["jugesh",9,true];
//  console.log(s);
 
//  //ways to access elements of an array;
//  1.for loop(traditional method)
//  let names = ["jugesh","rahul","amrita"];
//  for(i=0;i<=names.length-1;i++){
//      console.log(names[i])
//  }
 
//  2.for each loop //gets element, index no and array 
//  let names = ["jugesh","rahul","amrita"];
//  names.forEach(function (element,index,array){
//      console.log(element)
//  }
//  )
 
//  3.for of loop //gets element of array
//  let names = ["jugesh","rahul","amrita"];
//  for (let element of names){
//      console.log(element)
//  }
 
//  4.for in loop // gets index no of array
//  let names = ["jugesh","rahul","amrita"];
//  for (let element in names){
//      console.log(element)
//  }

 
//  //methods used in an array(searching and filter array )
//  1.array.length //gives us the length of an array i.e no of elements iin an array;
//  let names = ["jugesh","rahul","amrita"];
//  console.log(names.length);///3
 
//  2.array.indexOf()//returns the first index no of the element if it exists in the array
//  let names = ["jugesh","rahul","amrita"];
//  console.log(names.indexOf("amrita"));//returns 2
//  //if an element is not present in the array -1 is returned
//  let names = ["jugesh","rahul","amrita"];
//  console.log(names.indexOf("a"));
//  console.log(names.indexOf(1));
//  console.log(names.indexOf(true));//-1 in each case.
 
//  3.array.lastIndexOf()//returns last index of an element in an array
//  let names = ["jugesh","rahul","amrita","jugeshraghav","amrita"];
//  console.log(names.lastIndexOf("amrita"));//returns 4
//  console.log(names.lastIndexOf("jugesh"));//returns 0
//  //it returns -1 if any element is not present in an array.
 
//  4.array.includes();//checks whether particular element is present in an array or not
//  //it returns true or false.
//  let names = ["jugesh","rahul","amrita","jugeshraghav","amrita"];
//  console.log(names.includes("amrita"));//it returns true
 
//  let names = ["jugesh","rahul","amrita","jugeshraghav","amrita"];
//  console.log(names.includes("amrita","jugesh","Raghav"));//it returns true as it only checks for amrita and does not 
//  //check for other elements.
 
//  //we can give two values in array.includes() method:
//  array.includes(element,index);
//  //example:
//  let names = ["jugesh","rahul","amrita","jugeshraghav","amrita"];
//  console.log(names.includes("jugesh",-5))//returns true
//  let names = ["jugesh","rahul","amrita","jugeshraghav","amrita"];
//  console.log(names.includes("jugesh",0))//returns true
 
//  ///////array filter methods: accesses data with some comparison and conditions
//  1.array.find();
 
//  //sort methods
 
 
//  //CRUD operations on array
//  1.array.push();
//  //adds new elements to the end of and returns the 
//  //no of elements in array(new length);
 
//  //program
//  let names = ["jugesh","rahul","amrita"];
//  let newArray =names.push("Allu","shreya","geeta");
//  console.log(names);
//  //output:elements is added at the end
//  [ 'jugesh', 'rahul', 'amrita', 'Allu', 'shreya', 'geeta' ]
 
//  let names = ["jugesh","rahul","amrita"];
//  console.log(names.push("Allu"));//adds new element but returns 4(new length of array)
 
//  //can add multiple elements
//  let names = ["jugesh","rahul","amrita"];
//  console.log(names.push("Allu","shreya","geeta"));//6
 
 
//  2.array.unshift()
//  //adds elements in the beginning of array  
 
//  let names = ["jugesh","rahul","amrita"];
//  let newArray =names.unshift("Allu","shreya","geeta");
//  console.log(names);
//  //output: elemnts added in the beginning
//  [ 'Allu', 'shreya', 'geeta', 'jugesh', 'rahul', 'amrita' ]
 
//  //it returns new length of array.
//  let names = ["jugesh","rahul","amrita"];
//  console.log(names.unshift("Allu","shreya","geeta"));//returns new length : 6
  
//  3.array.pop()
//  //deletes one elements from the end of array and returns that element.
//  let names = ["jugesh","rahul","amrita"];
//  console.log(names.pop());//it does not take any input . it deletes last element and here it deletes "amrita" and returns "amrita"
 
//  //the length of array is reduced.
//  let names = ["jugesh","rahul","amrita"];//length:3
//  console.log(names.pop());//after this statement length is reduced to 2
//  console.log(names.length)//2
 
//  // one element can be deleted if we write the statement once. If you want to delete more elements then write more pop statements.
//  let names = ["jugesh","rahul","amrita","hello"];
//  console.log(names);//returns original array
//  console.log(names.pop());//deletes and returns hello
//  console.log(names.pop());//deletes and returns amrita
//  console.log(names)//returns reduced array
//  //output
//  [ 'jugesh', 'rahul', 'amrita', 'hello' ]
//  hello
//  amrita
//  [ 'jugesh', 'rahul' ]
 
//  4.array.shift()
//  //deletes one elements from the beginning of array and returns that element.
//  let names = ["jugesh","rahul","amrita"];
//  console.log(names.shift());//it does not take any input . it deletes first element and here it deletes "jugesh" and returns "jugesh"
 
//  //the length of array is reduced.
//  let names = ["jugesh","rahul","amrita"];//length:3
//  console.log(names.length);//3
//  console.log(names.shift());//after this statement length is reduced to 2
//  console.log(names.length)//2
 
//  // one element can be deleted if we write the statement once. If you want to delete more elements then write more shift statements.
//  let names = ["jugesh","rahul","amrita","hello"];
//  console.log(names);//returns original array
//  console.log(names.shift());//deletes and returns hello
//  console.log(names.shift());//deletes and returns amrita
//  console.log(names)//returns reduced array
//  //output
//  [ 'jugesh', 'rahul', 'amrita', 'hello' ]
//  jugesh
//  rahul
//  [ 'amrita', 'hello' ]
 
 
//  5.array.splice()
//  //it lets us add, delete, udated elements of array at any position.
//  //basically splice method is used to delete elements from an array. and it returns the deleted element.
//  array.splice(index,no-of-elements-to-be-deleted);
 
//  //to replace some elements the original elemeent is deleted and replaced by the new one.
//  let months = ['jan','February','march','April','jugesh','June','July'];
//  months.splice(0,1,"January")//here element at index 0 is deleted and is January is inserted at index 0;
//  //output: [ 'jan' ]
//  [ 'January', 'February', 'march', 'April', 'June', 'July' ]
 
//  /***********************************************Challenge**********************************************/////////////////////////// */
//  //q: given an array ['jan','February','march','April','jugesh','June','July']
//  1.delete "jugesh"
//  //if array is short and you know the index of element.
//  let months = ['jan','February','march','April','jugesh','June','July'];
//  console.log(months.splice(4,1));
//  console.log(months);
  
//  //if array is too  long then first find index of element then delete it
//  let months = ['jan','February','march','April','jugesh','June','July'];
//  let index_of_element_to_be_deleted = months.indexOf("jugesh");
//  console.log(months.splice(index_of_element_to_be_deleted,1));
//  console.log(months);
 
//  2.update jan to January
 
//  let months = ['jan','February','march','April','June','July'];
//  let index_of_element_to_be_deleted_and_replaced = months.indexOf("jan");
//  console.log(months.splice(index_of_element_to_be_deleted_and_replaced,1,"January"));//The element is deleted and replaced by "January"
//  console.log(months);
 
//  3.Add December at the end of array;
//  let months = ['January','February','march','April','June','July'];
//  console.log(months.splice(6,0,"December"));
//  console.log(months);
 
//  let months = ['January','February','march','April','June','July'];
//  let index_where_element_is_to_be_inserted = months.length-1;
//  console.log(months.splice(index_where_element_is_to_be_inserted,0,"December"));
//  console.log(months);
 
//  4.add May after april;
//  let months = ['January','February','march','April','June','July'];
 // 4 is the index_where_element_is_to_be_inserted
//  console.log(months.splice(4,0,"May"));
//  console.log(months);
 
 
 
 ///MAP and FILTER method And Reduce method
//  1.array.map((elements,index,array)=>{
 
//  })
 //differernce between map and forEach
 //forEach returns undefined but map method returns a new array with exactly the same no of elements in the original array.
 //map method is also called chainable method but forEach is not a chainable method. It means we can add multiplle methods with the 
 //map method.
//  array.map((elements,index,array)=>{
 
//  }).filter().reduce()5
 
//  2. array.filter()
 
//  3.array.reduce()
 //flatten an array: means to convert a 2D or 3D array into a 1D array.
 //The reduce() method exeecutes a reducer function (that you provide) on each element of array, resulting in a single output value.
//  The reducer function takes 4 parameters :
//  Accumulator
//  Current Value
//  Current index
//  Source Array
 
//  //It is also used to find the single valued result like sum, average etc
//  let arr = [5,6,7];
//  let sum = arr.reduce((accumulator,currElement,Index,Array)=>{
//      return accumulator += currElement;
//  })
//  console.log(sum);
 
//  /*************************************************** CHALLENGE **************************************************************************** */
//  Q1.find square root of each elment of array  [2,4,3,5,6,7,8];
//  sol:
//  let number = [2,4,3,5,6,7,8];
//  let SquareArray = number.map((number,index,array)=>{
//      let square = number**2;
//  return `the square of ${number} is ${square}`;
//  })
//  console.log(SquareArray);
 
//  output:
//  [
//      'the square of 2 is 4',
//      'the square of 4 is 16',
//      'the square of 3 is 9',
//      'the square of 6 is 36',
//      'the square of 7 is 49',
//      'the square of 8 is 64'
//    ]
 
                              
//  Q2.Multiply each elments of array by 2 and return only those elemnts which are greater than 10.
//                 [10,4,23,4,1,6,5,23];
//  sol:
//  let number =  [10,4,23,4,1,6,5,23];
//  let ProductBy2 = number.map((number,index,array)=>{
//      let product = number*2;
//   if(product>10){
//       return `The product of ${number} with 2 is ${product}`
//   }
//  })
 
//  output:
//  [
//      'The product of 10 with 2 is 20',
//      undefined,
//      'The product of 23 with 2 is 46',
//      undefined,
//      undefined,
//      'The product of 6 with 2 is 12',
//      undefined,
//      'The product of 23 with 2 is 46'
//    ]
 