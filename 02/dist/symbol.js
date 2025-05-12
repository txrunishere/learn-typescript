"use strict";
let sym1 = Symbol();
let sym2 = Symbol();
let sym3 = Symbol("Unique");
let sym4 = Symbol("same");
let sym5 = Symbol("same");
console.log(sym1 === sym2);
console.log(sym1 == sym2);
console.log(sym3);
console.log('Symbol', sym1);
console.log(sym4 === sym5);
const sId = Symbol();
const obj = {
    [sId]: 100,
    name: "tarun"
};
console.log(obj[sId]);
console.log(obj);
