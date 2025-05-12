"use strict";
let userName = "Tarun";
let age = 18;
let floatNumber = 18.1003;
let male = true;
let isNull = null;
let isUndefined = undefined;
let isSymbol = Symbol();
let numArr = [1, 2, 3, 4, 5];
let numArr2 = [1, 2, 3, 4, 5];
let strArr = ["Hello", "There"];
let tuple1 = ["Tarun", 18];
let obj = {
    name: "Tarun",
    age: 18
};
const anyType = "Tarun";
function greet(name) {
    console.log(`Hello ${name}`);
}
function throwError() {
    throw new Error("This never returns");
}
const user = "Hello";
const userData = {
    name: "Tarun",
    age: 18
};
let variable = "String";
let intersectionType = {
    name: "Tarun",
    age: 18
};
const userObj = {
    name: "Tarun",
    age: 18
};
let direction;
direction = "left";
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (UserRole = {}));
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
function currentStatus(status) {
    console.log(`Current Status is ${status}`);
}
currentStatus(Status.Success);
