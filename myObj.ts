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

export {};