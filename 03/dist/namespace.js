"use strict";
var UserNamespace;
(function (UserNamespace) {
    class Authentication {
        login() {
            console.log("User logged in!!");
        }
    }
    UserNamespace.Authentication = Authentication;
    UserNamespace.getUserList = () => {
        console.log('Users List');
    };
})(UserNamespace || (UserNamespace = {}));
var AdminNamespace;
(function (AdminNamespace) {
    class Authentication {
        login() {
            console.log("Admin logged in!!");
        }
    }
    AdminNamespace.Authentication = Authentication;
    AdminNamespace.getAdminList = () => {
        console.log('Admin List');
    };
})(AdminNamespace || (AdminNamespace = {}));
const u1 = new AdminNamespace.Authentication();
u1.login();
AdminNamespace.getAdminList();
