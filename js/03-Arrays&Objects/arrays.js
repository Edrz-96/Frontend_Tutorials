`use strict`

// 4 diff ways of creating arrays...! 
let arr = Array(); // Empty array 
let arrOfSize = Array(10); // array of 10 
let arrOfVal = Array(1,23,4,5,6); // array with following values 

let val = ["Cat", "Dog", "Mouse"]; 
let valNum = [1,2,3,4,5];

console.log(arr);
console.log(arrOfSize);
console.log(arrOfVal);
console.log(val);


let cohort = [];
cohort[0] = "Ed";
cohort[4] = "Jordan";
console.log(cohort[0]);
console.log(cohort);
numbers = [1,2,3,4,5];
console.log(`Numbers before pushing ${numbers}`);

console.log(numbers);
numbers.push(100);
console.log(`Numbers after pushing ${numbers}`);
console.log(numbers);
numbers.pop();
console.log(numbers);

let numL  = numbers.length;
console.log(`The length of numbers is ${numL}`);

numbers.unshift(0);
console.log(numbers);
numbers.shift();
console.log(numbers);

for(const key in numbers) {
    console.log(`key: ${key}:value ${numbers[key]}`);
}

let barns = [
    { 
        size: "large",
        capaticy: "30m",
        colour: "Red"
    },
    { 
        size: "small",
        capaticy: "10m",
        colour: "Brown"
    },
]

console.log(barns);

for(let i=0; i < barns.length; i++) {
    console.log(i);
}


for (let e in barns) {
    for (let key in barns[e]) {
        console.log(`${key}: ${barns[e][key]}`);
    }
}






