const score1: Array<number> = []
const names : Array<string> = []

function indentityOne(val: boolean | number): boolean | number{
    return val
}

function indentityTwo(val: any): any {
    return val
}

//Type is kind of like any excepts it takes a value and lock it
//for ex if i gave it a number the return types becomes number
//and locks it 
function indentityThree<Type>(val: Type): Type{
    return val
}

//indentityThree("mihir")

//shortcut
function indentityFour<T>(val: T): T {
    return val
}

interface bottle{
    brand: string,
    type: number,   
}

indentityFour<bottle>({brand: "typ", type: 12})