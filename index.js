"use strict";
//same purpose but different syntax User1 vs User2
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age, email, password, isActive) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.isActive = isActive;
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.isActive = isActive;
    }
    return User;
}());
var inputUserData = { name: "riam", age: 25, email: "mrp@gmail.com", password: 123, isActive: false };
console.log(inputUserData);
var User2 = /** @class */ (function () {
    function User2(name, age, email, password, isActive) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.isActive = isActive;
    }
    return User2;
}());
var inputUserData2 = { name: "riam", age: 25, email: "mrp@gmail.com", password: 123, isActive: false };
var inputUser2 = new User(inputUserData.name, inputUserData.age, inputUserData.email, inputUserData.password, inputUserData.isActive);
console.log(inputUser2);
