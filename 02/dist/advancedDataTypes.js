"use strict";
let studentData = "Tarun";
studentData = 18;
studentData = ["Hello", "There"];
const randomUnion = (val) => {
    if (typeof val === "string") {
        console.log("Void Value");
    }
    else if (typeof val === "number") {
        return [1, 2, 3, 4, 5];
    }
    else {
        return "String Type";
    }
};
let studentObj = {
    name: "Tarun",
    age: 18,
    college: "BHMC"
};
const collegeStudent = {
    name: "Tarun",
    age: 18,
    college: "BHMC"
};
const collegeTeacher = {
    name: "Mukesh",
    age: 39,
    college: "BHMC",
    subject: "Internet Programming"
};
const userT = {
    name: "Tarun",
    age: 18
};
const type_user = {
    name: "Tarun",
    age: 18,
    college: "BHMC"
};
var WhoType;
(function (WhoType) {
    WhoType["student"] = "student";
    WhoType["teacher"] = "teacher";
    WhoType["management"] = "management";
})(WhoType || (WhoType = {}));
let who = WhoType.teacher;
who = WhoType.student;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 69] = "admin";
    UserRole[UserRole["ta"] = 90] = "ta";
    UserRole[UserRole["user"] = 91] = "user";
})(UserRole || (UserRole = {}));
