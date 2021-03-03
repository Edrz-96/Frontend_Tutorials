`use strict`;

let rat = new Object();
rat["teeth"] = 8;
rat["tail"] = true;

console.log(rat);
console.log(rat.teeth);
console.log(rat.tail);

let jsonObj = {
    "tesco": [
        { prodName: "7up", price: 0.80 },
        { prodName: "fanta", price: 1.80 },
        { prodName: "bestEvaWater", price: 4.50 }
    ],
    "asda": [
        { prodName: "coke", price: 1.00 },
        { prodName: "OJ", price: 2.00 },
    ]
}
console.log(jsonObj.asda);
console.log(jsonObj);