/**
 * Null and Undefined
*/

// null


const null_type: null = null // it is completely empty
const empty_str: string = "" // but there is a empty string in it


// when we use null or undefined there are chances that value of these variables were change to other data type for this we unions ' | '



// it mostly used when we fetch data or to store types of data in it
let nameName: null | string = null;
let isLogin = true

if (isLogin) {
  nameName = "Tarun"
}

// console.log(nameName);
// console.log(typeof nameName);    // logs object

let undefine_type: undefined = undefined

console.log(typeof undefine_type);