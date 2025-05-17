let myName: string = "Riam";

myName = "masud parvez";
myName.toLocaleUpperCase();

console.log (myName)

//number
const userId = 77766354.9;
userId.toLocaleString ();
console.log (userId)

//typescript is smart enough to understand this is number when you are not define number. It's automatically verify that .toLocaleString() funtion. This should we use TypeScript

//boolean
const isLogin: boolean = false;
isLogin.valueOf ()


//any (Is not good practies. Avoid much possible as much)
let pc: any;
pc.toLocaleUpperCase ();

function possible () {
    return "Hello to world";
}

pc = possible();


export {};