interface DataBase {
    connection: string,
    username : string,
    password : string
}

function getalpha<T, U extends DataBase>(valOne:T, valTwo:U):Object{
    return{
        valOne,
        valTwo
    }
}

getalpha(3, {connection: "qw", username: "russian", password: "123"})

//classes

interface Quiz {
    name: string,
    type: String
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []
    
    addToCart(products: T){
        this.cart.push(products)
    }
}