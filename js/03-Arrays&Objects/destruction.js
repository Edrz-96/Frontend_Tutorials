'use strict';

let fruit = ["Pear", "Apple", "Orange", "Banananana"];

console.log(fruit[0]); //Pear
console.log(fruit[1]); // Apple
console.log(fruit[2]); 
console.log(fruit[3]);

let largeArr = [1,2,3,45,34,65,364,346,34,6,12,23,33,53,45,2345,3245,34,5,324,]
const [a,b,c,...rest] = largeArr;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

let obj = {fname: "Bob", age: 25, address: "Somewhere"};
const {fname, age} = obj;

console.log(fname);
console.log(age);
// console.log(address);
console.log(obj.address);

let h, j;
[h, j] = [10, 30];
console.log(h);
console.log(j);

