"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function newUsers(user) {
    if (user.isLogedin) {
        console.log("Welcome Name: ".concat(user.name, " and Age: ").concat(user.age));
    }
    else {
        console.log("Login first");
    }
}
var allobj = { name: "Masud Parvez Riam", age: 35, isLogedin: true };
newUsers(allobj);
