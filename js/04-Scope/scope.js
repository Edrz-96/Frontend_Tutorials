'use strict';


let check = false; // Global

function fun() { // block scope is being used "not the functional scope", if you recall "for loop scope"
    let check = true;
}
console.log(check); //false
fun();
console.log(check); //false 

var check1 = 1;
let flag = true;

function changeCheck() {
    console.log(check1);
    console.log(flag);
}
changeCheck(); // expected output of global vars used is 1 and true 

let difffun = function () {   // less computation requirements, we can expect the processing potential to be far lower as it will only consume when invoked.
    console.log("same thing here");
}

function param(param1, param2, param3) { // heavier comp/process, will allocate memory even before being used. 
    return param1 + param2 + param3;
}

function deposit(input) {
    let balance = 100;
    let result = input + balance;
    return `${result}`;
}

console.log(typeof deposit(100));
console.log(deposit(100));

const funFuction = () => {
    console.log("I'm a cool new function!");
}

funFuction();

const paraFunction = (para1, para2) => {
    console.log(para1, para2);

}

let singlePar = par => {
    console.log(par);
}






