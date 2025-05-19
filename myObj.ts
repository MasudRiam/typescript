type User = {
    name: string;
    age: number;
    isLogedin: boolean;
}
  function newUsers (user: User): void {
    if (user.isLogedin) {
        console.log (`Welcome Name: ${user.name} and Age: ${user.age}`);
    } else {
        console.log ("Login first")
    }
}
const allobj = {name: "Masud Parvez Riam", age: 35, isLogedin: true}
newUsers (allobj)

type Animal = {
    readonly _id: string
    name: string;
    age: number;
    eat: boolean;
    colour: string;
}

type Animal2 = {
    height: number;
    weight: number;
    exOwner?: string;
}

type AllAnimal = Animal & Animal2 & {
    price: number;
    sold: boolean
}

function callPet (pet: AllAnimal): void {
    // return console.log (`My ${pet.name} is now ${pet.age}. And his colour is ${pet.colour}. Can he eat now? ${pet.eat}`)
    return console.log (`Is your ${pet.name} sold yet and how much? ${pet.sold} his price ${pet.price}. Tell me everything about your ${pet.name}! "He is now ${pet.age} and he is ${pet.colour} his ${pet.height} and ${pet.weight}." Good, does he eat? "${pet.eat}"`)
}

const myPet = {_id: "1etydbwhg636", name: "cat", sold: false, price: 200, age: 2, colour: "Orange", height: 18, weight: 5, eat: true}
callPet (myPet)

export {};