"use strict";
const collegeDataA = {
    name: "BHMC",
    location: "xyz",
    branch: 4
};
const collegeDataB = {
    name: "BHMC",
    location: "xyz",
};
const collegeDataC = {
    name: "BHMC",
    branch: 4,
    location: "xyz"
};
const collegeDataD = {
    name: "BHMC",
    branch: 4
};
const collegeDataE = {
    name: "BHMC",
    location: 'xyz'
};
const collegeDataF = {
    name: "BHMC",
};
let apiCall = "loading";
apiCall = "success";
let apiCall2 = 'error';
const random_type_value = "Not Null Value";
const roleObj = {
    Admin: "Bhalu",
    TA: "Cheetah",
    User: "Sher"
};
const rolePower = {
    Admin: ['create', 'edit', 'delete', 'view'],
    TA: ['edit', 'view'],
    User: ['view']
};
const roleInfo = {
    1: {
        name: "Tarun",
        age: 18
    },
    2: {
        name: "Rahul",
        age: 19
    }
};
console.log(roleObj);
