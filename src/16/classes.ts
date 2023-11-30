class User2 {
    email:string
    name: string
    city: string = ""
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const Mihir = new User2("d@d.com", "mihir")
Mihir.city = "khargone";