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
function callPet(pet) {
    // return console.log (`My ${pet.name} is now ${pet.age}. And his colour is ${pet.colour}. Can he eat now? ${pet.eat}`)
    return console.log("Is your ".concat(pet.name, " sold yet and how much? ").concat(pet.sold, " his price ").concat(pet.price, ". Tell me everything about your cat! \"He is now ").concat(pet.age, " and he is ").concat(pet.colour, " his ").concat(pet.height, " and ").concat(pet.weight, ".\" Good, does he eat? \"").concat(pet.eat, "\""));
}
var myPet = { _id: "1etydbwhg636", name: "cat", sold: false, price: 200, age: 2, colour: "Orange", height: 18, weight: 5, eat: true };
callPet(myPet);
