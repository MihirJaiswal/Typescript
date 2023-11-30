/* class User3 {
    email:string //so if you dont mark anthing it will consider public
    name: string
    private readonly city: string = "indore"
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const Anshii = new User3("d@d.com", "mihir") */

// a better way to write the above code

class User3 {
   
    readonly city: string = "indore"
    constructor(
        public email: string, 
        public name: string
        ){
    }
}

const Anshii = new User3("d@d.com", "mihir") 
