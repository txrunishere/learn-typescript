/**
 * Union type
*/

let studentData: string | number | Array<string> = "Tarun"
studentData = 18
studentData = ["Hello", "There"]

/**
 * when we declare multiple data types optionally for a value is UNION
 * union is represent with ' | ' this pipe
 * It acts like OR operator
*/


const randomUnion = (val: string | number | boolean): void | string | Array<number> => {
  if (typeof val === "string") {
    console.log("Void Value");
  } else if (typeof val === "number") {
    return [1, 2, 3, 4, 5]
  } else {
    return "String Type"
  }
}

// console.log(randomUnion(true));











/**
 * Interface
 * 
 * Interface is a way to define the structure of an object or function
*/

let studentObj: {
  name: string,
  age: number,
  college: string
} = {
  name: "Tarun",
  age: 18,
  college: "BHMC"
} /**
 * this aproach is not reuseable
 * for example if we design it for a college then same info is apply for a teacher or management
 * to solve this problem we use interfaces
*/




interface CollegeInfo {
  name: string,
  age: number,
  college: string
}

interface TeacherInterface extends CollegeInfo {
  subject: "DBMS" | "Maths" | "Internet Programming" | "English"
}

const collegeStudent: CollegeInfo =  {
  name: "Tarun",
  age: 18,
  college: "BHMC"
}

const collegeTeacher: TeacherInterface = {
  name: "Mukesh",
  age: 39,
  college: "BHMC",
  subject: "Internet Programming"
}

/**
 * It is reusable and we extends properties of a interface to a second interface by using extends keyword
*/












/**
 * Intersection Type
 * intersection is like AND operator in TS
 * which combines two types 
*/

interface nameT {
  name: string
}

interface ageT {
  age: number
}

const userT: nameT & ageT = {
  name: "Tarun",
  age: 18
}











/**
 * Types in TS
*/

type Data_Type = {
  name: string,
  age: number,
  college: string
}

const type_user:Data_Type = {
  name: "Tarun",
  age: 18,
  college: "BHMC"
}




/**
 * Difference between Interace and Type
*/

// -> We can't use intersection with intetface

interface IA {
  name: string
}
interface IB {
  email: string
}

// interface IC IA | IB // we can't do that using interface

type TA = {
  name: string
}
type TB = {
  email: string
}
type TC = TA | TB




// -> We can't extends type as interface

type EA = {
  name: string,
  age: number
}

// type EB extends EA = {}   // we can't extends it

interface TEA {
  name: string,
  age: number
}

interface TEB extends TEA {
  college: string
}













/**
 * ENUMS
*/

enum WhoType {
  student = "student",
  teacher = "teacher",
  management = "management"
}

let who: WhoType = WhoType.teacher
who = WhoType.student

// console.log(who);


enum UserRole {
  admin = 69,
  ta = 90,
  user
}

// console.log(UserRole.user);