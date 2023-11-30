function detectTypes(Val: number | string){
    if(typeof Val === "string"){
        return Val.toLowerCase()
    }
    return Val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("please provide ID")
        return
    }
    id.toLocaleLowerCase()
}

