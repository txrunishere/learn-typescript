/**
 * Object Data Types - [ Array, Tuple, Object ]
*/




/**
 * Array is collection of same pre-defined data types
*/




const numArr: number[] = [3, 6, 1, 67, 1, 9]
const strArr: Array<string> = ["Hello", "There"]
strArr.push("HI") 
// strArr.push(422)    // it throws error because strArr only allow string value



// const students = ["Tarun", "Rahul", "Aaryan", "Kamal"]    // to make this array readonly

const students: ReadonlyArray<string> = ["Tarun", "Rahul", "Aaryan", "Kamal"]

// students.push("Kunal")   // Now i can't push values in it










/**
 * Tuple
 * Tuple has fixed length
 * Ordered Collection of different types
*/

let user: [string, number, boolean] = ["Tarun", 18, true]
// user.push("NEW")

let newUser: readonly [string, number, boolean] = ["Tarun", 18, true]
// user.push("NEW")











/**
 * Object
*/

const objObj: {
  name: string,
  age: number
} = {
  name: "Tarun",
  age: 18
} // here we pass limited values which we are define above as type

// but if we have no of what values are come in object 

const userDataObj: {
  [key: string]: string | number | undefined
} = {
  name: "Tarun",
  age: 18,
} // here we pass many values in it but only of string and number type







/**
 * Nested Object
*/

// const nesObj: {
//   name: string,
//   age: number,
//   address: {}
// } = {
//   name: "Tarun",
//   age: 18,
//   address: {
//     plotNo: 331,
//     city: "Delhi"
//   }
// }

const nesObj: {
  name: string,
  age: number,
  address: {
    plotNo: number,
    city: string,
  }
} = {
  name: "Tarun",
  age: 18,
  address: {
    plotNo: 331,
    city: "Delhi"
  }
}