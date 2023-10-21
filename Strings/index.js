// declare a string 

// let str = " this is text ";
// console.log(str);

// types to declare string 
// const single = 'Single quotes';
// const double = "Double quotes";
// const backtick = `Backtick`;

// console.log(single);
// console.log(double);
// console.log(backtick);

//  string concat
// let name = "Sachin";
// let str = `Hello , ${name}`;
// console.log(str);

// const one = "Good Morning , ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// console.log(joined); // "Hello, how are you?"

// number convert into string 

// let num = 20;
// num = String(num) + " Sachin";
// console.log(num);
// console.log(typeof(num));


// String methods 

// string length

// let str = "this is string";
// // console.log(str.length);
// // console.log(str[0]);
// // console.log(str[str.length - 1]);

// // includes funtion return substring is present or not 
// if(str.includes('is' ,3)){
//     console.log(" str contain substring ");
// }
// else{
//     console.log(" str can't contain Substring ")
// }

// if(str.endsWith("string")){
//     console.log('ends with string');
// }
// else{
//     console.log('not found');
// }
// if(str.startsWith("this")){
//     console.log('ends with this');
// }
// else{
//     console.log('not found');
// }

// const browserType = "mozilla";

// if (browserType.endsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }

// index of substrig 
// const  str = "this is string";
// console.log(str.indexOf('ing'));

// find 2nd occureance of substring 
// const  str = "this is string is these is ";
// const firstOcc = str.indexOf('is');
// const secoundOcc = str.indexOf('is' , firstOcc + 1);
// console.log(firstOcc)
// console.log(secoundOcc);
// console.log(str.indexOf('is' , secoundOcc + 1));

// slice method 
// const  str = "this is string is these is ";
// console.log(str.slice(0,4));
// console.log(str.slice(5,15));
// console.log(str.slice(8)); // return remaining string after 5th index

// change the case of string 

// const  str = "this is string is these is ";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// replace substring 

const str = "Sachin";
const str2 = 'this is a string is new string ';
const text = "Helllo";
console.log(str.replace('in',text));
console.log(str2.replaceAll('is','New'));