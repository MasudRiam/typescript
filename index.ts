//same purpose but different syntax User1 vs User2

class User {
    constructor (public name: string, public age: number, private email: string, private password: number, private isActive: boolean) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.isActive = isActive;

    }
}

const inputUserData = {name: "riam", age: 25, email: "mrp@gmail.com", password: 123, isActive: false}
console.log (inputUserData)




class User2 {
    constructor (public name: string, public age: number, private email: string, private password: number, private isActive: boolean) {
    }
}

const inputUserData2 = {name: "riam", age: 25, email: "mrp@gmail.com", password: 123, isActive: false}
const inputUser2: User = new User (inputUserData.name, inputUserData.age, inputUserData.email, inputUserData.password, inputUserData.isActive)
console.log (inputUser2)






export {};