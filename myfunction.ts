function myName (value: string) {
    return value;
}

myName("Masud Parvez Riam".toLocaleUpperCase());

const addition = (a: number, b: number) => {
    return a + b ;
}

addition (3, 6);

//void and never meant to be same. When you dealing with error must use never.

function newError (errmsg: string): void {
    // throw new Error(errmsg);
    console.log (errmsg)
}

newError ("Unhandle rejection");


let city = ["Jashore", "Dhaka", "Khulna"];

const cities = city.map((city): string => {
    return `Our city is ${city}`;
})

console.log (cities)


export {};