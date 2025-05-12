/**
 * Numbers
*/



let num_type: number = 69;

let a: number = 10
let b: number = 20
let s = "30"
let c: number = a + b
// let c: number = a + b + s // throws error







/**
 * Numbers in different numeral systems
*/

// Binary (prefix with 0b or 0B)
let binaryNum: number = 0b1010
// console.log(binaryNum);


// Octal (prefix with 0o)
let octalNum: number = 0o12
// console.log(octalNum);


// Decimal (default)
let decimalNum: number = 10;
// console.log(decimalNum);


// Hexadecimal (prefix with 0x)
let hexNum: number = 0xA
// console.log(hexNum);












/**
 * String to Number Conversion
*/

const value1: number = 10
const value2 = "30"
// const value2Converted = Number(value2)
const value2Converted = +value2


// console.log(value1 + value2Converted);
// console.log(value1 + value2Converted);
// console.log(value1 + +value2);












/**
 * Type Inference
*/

// typescript is smart enough to detect which datetype a variable hold
// for example

let item = 10  // here typescript got that type of value in item variable is number
// Now, if i change it further than i only assign it number value

item = 30 // it don't do complain here because value is of number data type


// item = "string"      // It complain here because now there is no number data value any more