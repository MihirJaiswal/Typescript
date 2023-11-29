interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

const Anshita: User = {dbId: 244, email: "anshiratho137@gmail.com", userId:24,
startTrail: () => {
    return "she is pretty dumb and cute uwu"
},
getCoupon: (name: "10percentdiscount", value: 10) => {
    return 10
}
}
