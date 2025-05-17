"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myName = "Riam";
myName = "masud parvez";
myName.toLocaleUpperCase();
console.log(myName);
//number
var userId = 77766354.9;
userId.toLocaleString();
console.log(userId);
//typescript is smart enough to understand this is number when you are not define number. It's automatically verify that .toLocaleString() funtion. This should we use TypeScript
//boolean
var isLogin = false;
isLogin.valueOf();
//any
var pc;
pc.toLocaleUpperCase();
function possible() {
    return true;
}
pc = possible();
