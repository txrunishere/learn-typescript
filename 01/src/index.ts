/**
 * Variables
*/


// Primitive types - [ number, string, boolean, null, undefined, bigint, symbol ]

let userName: string = "Tarun"
let age: number = 18
let floatNumber: number = 18.1003
let male: boolean = true
let isNull: null = null
let isUndefined: undefined = undefined
let isSymbol: symbol = Symbol() // Returns a new unique symbol value









// Object types - [ array, tuple, object ]



let numArr: Array<number> = [1, 2, 3, 4, 5]
let numArr2: number[] = [1, 2, 3, 4, 5]
let strArr: Array<string> = ["Hello", "There"]


let tuple1: [string, number] = ["Tarun", 18]


let obj: {name: string, age: number} = {
  name: "Tarun",
  age: 18
}







// Special Data Types - [ any, never, unknown, void ]

const anyType: any = "Tarun" // we put any type of value in it


function greet(name: string): void {
  console.log(`Hello ${name}`)
} // void is used for those functions which don't return anything


function throwError(): never {
  throw new Error("This never returns")
} // value that never occur (eg. infinite loop or error)











// Advanced Types - [ union, intersection, enum, type alies (type), literal types, interface ]




/**
 * type
*/
type UserType = string | number  // type is like a skeleton of the data or variable
type UserDataType = {
  name: string,
  age: number
}
const user: UserType = "Hello"
const userData: UserDataType = {
  name: "Tarun",
  age: 18
}







/**
 * intersection and union
*/
let variable: number | string = "String" // union ( where this pipe acts as OR operator )



type Name = {
  name: string
}
type Age = {
  age: number
}

type UserTypeIntersection = Name & Age

let intersectionType: UserTypeIntersection = {
  name: "Tarun",
  age: 18
} // intersection where we add more information to variable by put a '&' sign and combine them







/*
 * Interface
*/

interface User {
  name: string,
  age: number
} // interface are same as 'type' but highly preferred for object types and class contracts.

const userObj: User = {
  name: "Tarun",
  age: 18
}







/**
 * Literal Types
*/

let direction: "left" | "right";

direction = "left" // ✅
// direction = "up" // ❌









/**
 * Enums
*/

enum UserRole {
  Admin,  // 0
  Editor,  // 1 
  Viewer  // 2
}

enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}

function currentStatus(status: string): void {
  console.log(`Current Status is ${status}`);
}

currentStatus(Status.Success);