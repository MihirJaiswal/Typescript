//readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed.

type User = {
    readonly _id : string
    name : string
    email : string
    isActive: boolean
    creditDetails?: number //for making a param optional
}

let myUser: User = {
    _id: "1222",
    name: "m",
    email: "m@a.com",
    isActive: false,
}

myUser.email = "da2@gma.com"
//myUser._id = "69696" so as we cant change the _id as it will thow error


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

//so here i jsut reused the above two types and mix it with its own.
type cardDetails = cardNumber & cardDate & {
    CVV: number
}