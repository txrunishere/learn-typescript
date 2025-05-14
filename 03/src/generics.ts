/**
 * Generics in TS
*/




/**
 * like we have a function name random_value
 * but we pass a random type value here in parameters like string or number or boolean
 * to make this condition we put use unions and define those three types
*/
// like that

function random_value(value: string | number | boolean): string | number | boolean {
  return value
}

// console.log(random_value("string"));
// console.log(random_value(69));
// console.log(random_value(true));

// it is not that reusable






// it make it better we use generics

function randomValue<T>(value: T): T {
  return value
}

const arrRandomValue = <T>(value: T): void => {
  console.log(value)
}

// console.log(randomValue<string>("String"));
// console.log(randomValue<number>(69));
// console.log(randomValue<boolean>(false));











/**
 * keyof
 */

type PersonType = {
  name: string,
  age: number,
  isEmp: boolean
}

let personKey: keyof PersonType = 'age'
console.log(personKey);














/**
 * Index Signature
*/

// Used only when we have dynamic data and properties of an object are not predictable




// A normal use case

// type UserData_Type = {
//   name: string,
//   age: number,
//   email: string,
//   phoneNumber: number
// }

// const userData: UserData_Type = {
//   name: "Tarun",
//   age: 18,
//   email: "tarun@gmail.com",
//   phoneNumber: 9999996969
// }





// example we have all number type properties

// type UserData_Type = {
//   [key: string]: number
// }

// const userData: UserData_Type = {
//   id: 9302,
//   phoneNumber: 3585487,
//   age: 18
// }







// if we have some fixed keys

// type UserData_Type = {
//   id: number,
//   name: string,
//   age: number,
//   [key: string]: number | string
// }

// const userData: UserData_Type = {
//   name: "Tarun",
//   id: 9302,
//   age: 18,
//   phoneNumber: 3585487,
// }