interface User1 {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}
//now if i wanted to add more to the interface i can just reopen it like

interface User1 {
    githubToken: string 
}

//inheritance in interface

interface Admin extends User1 {
    role: "admin" | "employee" | "learner"
}
const Anshi: Admin = {dbId: 244, email: "anshiratho137@gmail.com",
userId:24,
role: "admin",
githubToken: "anshii",
startTrail: () => {
    return "she is pretty dumb and cute uwu"
},
getCoupon: (name: "10percentdiscount", value: 10) => {
    return 10
}
}

 
//interface vs types
//type cannot be reopned to add new properties vs interface
//which is always extendable

interface Animal {
    name: string
}

interface Bear extends Animal{
    honey: boolean
}

//extending an interface


type Animal1 = {
    name: string
}

type bear = Animal1 & {
    honey: boolean
}

//extending a type via insertion

