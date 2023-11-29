//now returnig should aslo be strict so for more precise return we can initialize the return type

function addTwo(num:number): number{
    return num + 2 
  //return "hello world" //so here i simply cant return anything except number
}

/*function getValue(myVal: number): boolean{
    if(myval > 5){
        return true
    }
    return "200 ok"
}*/

//syntax for arrow function
const getHello = (s: string): string => {
    return ""
}

//type script is very smart already knows the context
const heros = ["spiderman", "batman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

//void
function consoleError(errMsg: string): void{
    console.log();

}

//never the never types represents values which are never
//observed means that the function throws an exception or terminates
//execution of the program.

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}
