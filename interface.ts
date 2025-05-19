interface User  {
    name: string;
    password: number;
    googleID: string;
    getCoupon (username: string, value: number, buy: boolean);
    startTrail (): boolean | string;

}

//reopen interface
interface User {
    jwtToken: string;
}

const addUser: User = {name: "Riam", password: 43421, googleID: "ssk@gmail.com",
    getCoupon (name: "Riam", off: 199, buy: true) {
        return 10;
    },
    jwtToken: "3216tdgywgdxyuwfgdxyusgcftdgcfxdstfciwygc67y",
    startTrail (): boolean | string {
        const isActive = true;
        return isActive? "Start trial": false;
    },

}

export {}