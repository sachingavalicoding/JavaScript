// const arr = [12,54,54,34,54];
// console.log(arr);
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
//console.log(shopping);

// length of an array 
//console.log(shopping.length);

// accessing and modifying array elements

// console.log(shopping[4]);
// console.log(shopping[2]);
// shopping[2] = "apple";
// console.log(shopping[2]);

// find index of array element
// console.log(shopping.indexOf('hummus'));


// adding element in array 
// shopping.push('apple');
// shopping.pop();
// shopping.unshift('Start');
// shopping.shift();
// console.log(shopping);

// remove element by index 

// console.log(shopping);
// let index = shopping.indexOf('milk');
// if (index !== -1) {
//     shopping.splice(index, 1);
// }
// console.log(shopping);

// accessing every element
// shopping.forEach((ele) =>{
//     console.log(ele);
// })

// convert string to array 

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const cities = data.split(',');
console.log(data);
console.log(cities);
console.log(cities.join(','));
const cities2 = data.split(',');
console.log(cities2.toString());
