"use strict";
function getInfo() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
    console.table([username.value, email.value, age.value]);
}
