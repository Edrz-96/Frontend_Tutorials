'use strict';

let bool1 = true;
let bool2 = false;


// "not so strict" equality "==", we don't care so much about type.

console.log(bool1 == bool2); //false 
console.log(1 == "1"); //true
console.log([1] == "1"); //true
console.log(bool1 == 1); //true
console.log("0" == []); //false
console.log([] == 0); //true
console.log([] == "0"); //false
console.log(0 == []); //false


// Strict equality "===", when using strict we check for both value and type.

console.log(1 === "1"); //false
console.log([1] === "1"); //false 

if (bool1) {
    // amazing code 
} else if (bool2) {
    // again
} else {
    // more amazing code
}

let age = 100;
let result = age >= 50 ? "50 or over" : "Under 50";

console.log(result);

if (age >= 50) {
    console.log("50 or over");
}else { 
    console.log("udner 50");
}

