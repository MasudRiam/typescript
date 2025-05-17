"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myName(value) {
    return value;
}
myName("Masud Parvez Riam".toLocaleUpperCase());
var addition = function (a, b) {
    return a + b;
};
addition(3, 6);
//void and never meant to be same. When you dealing with error must use never.
function newError(errmsg) {
    // throw new Error(errmsg);
    console.log(errmsg);
}
newError("Unhandle rejection");
var city = ["Jashore", "Dhaka", "Khulna"];
var cities = city.map(function (city) {
    return "Our city is ".concat(city);
});
console.log(cities);
