'use strict';

let x = 1;
console.log(x++);  // 1, ++ after a value are post 
console.log(x);   //  2

let y = 1;
console.log(++y); // 2 ++ before are pre 
console.log(y);   // 2

for (let i = 0; i < 10; i++) {
    console.log(i);
    for (let j = 0; j < 10; j++)
        console.log(`${j}`);
}

let arr = [1, 2, 3, 4]

arr.forEach(i => {
    console.log(i);
});

//switch case
let num = 1;
switch (num) {
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
        break;
    default:
        console.log("nothing!");
}

let myB = false;
do {
    console.log("hello my friends");
} while (myB); //output once "false"

let e = 30;

while (e <= 40) { // whilst e less than or equal to 40, and starting at 30??? 
    e++
    if (e % 2 == 0) {
        console.log("yes");  // we get 5 yes
    } else {
        console.log("nope"); // and 6 nope 
    }

}

