// union used when you are not sure what kind of data would come
//combination of more than 1 type
//help you to avoid any

let score: number | string = 33

score = 44

score = "lidhir sambhate"


type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let mihir: User | Admin = {name: "mihir", id: 335}

mihir = {username: "mihir696969", id: 222}


function getDbId(id: number | string){
    console.log(`DB Id is : ${id}`);
}

getDbId(3)
getDbId("3")

const data: number[] = [1,2,3,4]
const data2: string[] = ["1","2","3","4"]
const data3: (string | number)[] = [1,2,"3"]


  


