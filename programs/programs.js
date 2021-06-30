// function check(s){
//     let i;
//     for(i=0;i<s.length;i++){
//       let char = s.charAt(i)
//       if('aeiou'.includes(char)){
//         console.log(char);
//       }
//     }
//     for(i=0;i<s.length;i++){
//       let char = s.charAt(i)
//       if('bcdfghjklmnpqrstvwxyz'.includes(char)){
//         console.log(char);
//       }
//     }
//   }
//   check('javascriptloops');

// function getLetter(s) {
//   let letter;
//   let char = s[0];
//   switch (char){
//   case 'aeiou'.includes(char) : 
//   letter ='A';
//   break;
//    case 'bcdfg'.includes(char) :
//    letter ='B';
//   break;
//    case 'hjklm'.includes(char) :
//    letter ='C';
//   break;
//    case 'npqrstvwxyz'.includes(char) : 
//   letter ='D';
//   break;
//   }
//   return letter;
// }
// console.log(getLetter("hii"));

// let array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newarray = array.pop(Math.max(...array));
// console.log(Math.max(...array));

// const max =  (nums)=>{
  
//     if((nums[0])==(nums[nums.length-1])){
//         return nums[0];
//     }
//     else{
//         let newNums = nums.sort();
//         return newNums[newNums.length-2];
//     }

// }
// console.log(max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function modifyArray(nums) {
//     debugger;
//   let i;
//   for(i=0;i<nums.length;i++){
//     if(nums[i]%2==0){
//    nums[i]=nums[i]*2;
//     }else{
//    nums[i]=nums[i]*3;
//     }
//   }
//   return nums;
//   }
//   console.log(modifyArray([1,2,3,4,5]));