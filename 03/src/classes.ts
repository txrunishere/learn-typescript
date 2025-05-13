


/**
 * Access Modifiers
 * 
 * These are of three types
 * -> Public
 * -> Private
 * -> Protected
*/


class Product {
  pName: string
  pPrice: number
  isShipped: boolean
  private inCart = false

  constructor (name: string, price: number, isShipped: boolean) {
    this.pName = name
    this.pPrice = price
    this.isShipped = isShipped
  }

  logValue() : [string, number, boolean] {
    return [this.pName, this.pPrice, this.isShipped ]
  }

  addToCart(): void {
    this.inCart = true
  }

  orderedProduct(): string {
    if (this.inCart) {
      return `Order of Product ${this.pName} is placed!`
    } else {
      return "Cart is Empty"
    }
  }
}

const p1 = new Product("Dildo", 699, true);

// const productValue = p1.logValue()
// p1.addToCart()
// console.log(p1.orderedProduct());
// console.log(p1.inCart);    // Now i can't access inCart here coz it is private











/**
 * Inheritence
*/


class Auth {
  login(name: string, password: string): string {
    if (name && password) {
      return `Username: ${name} Password: ${password}`
    } else {
      return "Enter username and password"
    }
  }
}

class Student extends Auth {
  result(marks: number): string {
    if (marks > 33) {
      return "Pass"
    } else {
      return "Fail"
    }
  }
}

const s1 = new Student()
const loginInfo = s1.login("tarun", "tarun99")
const studentMarks = s1.result(58)
// console.log(studentMarks);
// console.log(loginInfo);


class Teacher extends Auth {
  subject(subjectName: string): string {
    return "This teacher teaches " + subjectName
  }
}

const t1 = new Teacher()
const sub = t1.subject('Maths');
// console.log(sub);














/**
 * getter and setter
*/

class Employee {
  _name: string
  _email: string | undefined = undefined

  constructor (name: string) {
    this._name = name
  }

  get name(): string {
    if (this._name.length > 5) {
      return "Hello " + this._name
    } else {
      return "Hi " + this._name
    }
  }

  set setEmail(email: string) {
    this._email = "emp_" + email
  }
}

const e1 = new Employee("Bhalu Singh")
const e2 = new Employee("Bhalu")

const logName1 = e1.name
const logName2 = e2.name

e1.setEmail = "bhalu@test.com"

// console.log(logName1);
// console.log(e1._email);
// console.log(logName2);














/**
 * Interface with classes
*/

interface CollegeInterface {
  clgName: string
  get collegeName(): string
}

type CollegeType = {
  clgName: string,
  collegeName(): string
}

class College implements CollegeType {
  clgName: string

  constructor (name: string) {
    this.clgName = name
  }

  collegeName(): string {
    return this.clgName
  }
}
