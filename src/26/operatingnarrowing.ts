interface User1 {
    name: string,
    email: string
}

interface Admin1 {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User1 | Admin1){
    if("isAdmin" in account){//in keyword
        return account.isAdmin
    }
}

// eg 3

type Fish = {swim: ()=> void};
type Bird = {fly: ()=> void};
type Human = {swim?: () => void; fly?:() => void};

function move(animal: Fish | Bird | Human){
    if("swim" in animal)
    {
        animal;
    }else{
        animal;
    }
}