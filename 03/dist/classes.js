"use strict";
class Product {
    pName;
    pPrice;
    isShipped;
    inCart = false;
    constructor(name, price, isShipped) {
        this.pName = name;
        this.pPrice = price;
        this.isShipped = isShipped;
    }
    logValue() {
        return [this.pName, this.pPrice, this.isShipped];
    }
    addToCart() {
        this.inCart = true;
    }
    orderedProduct() {
        if (this.inCart) {
            return `Order of Product ${this.pName} is placed!`;
        }
        else {
            return "Cart is Empty";
        }
    }
}
const p1 = new Product("Dildo", 699, true);
class Auth {
    login(name, password) {
        if (name && password) {
            return `Username: ${name} Password: ${password}`;
        }
        else {
            return "Enter username and password";
        }
    }
}
class Student extends Auth {
    result(marks) {
        if (marks > 33) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
}
const s1 = new Student();
const loginInfo = s1.login("tarun", "tarun99");
const studentMarks = s1.result(58);
class Teacher extends Auth {
    subject(subjectName) {
        return "This teacher teaches " + subjectName;
    }
}
const t1 = new Teacher();
const sub = t1.subject('Maths');
class Employee {
    _name;
    _email = undefined;
    constructor(name) {
        this._name = name;
    }
    get name() {
        if (this._name.length > 5) {
            return "Hello " + this._name;
        }
        else {
            return "Hi " + this._name;
        }
    }
    set setEmail(email) {
        this._email = "emp_" + email;
    }
}
const e1 = new Employee("Bhalu Singh");
const e2 = new Employee("Bhalu");
const logName1 = e1.name;
const logName2 = e2.name;
e1.setEmail = "bhalu@test.com";
class College {
    clgName;
    constructor(name) {
        this.clgName = name;
    }
    collegeName() {
        return this.clgName;
    }
}
