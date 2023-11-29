/*function addTwo(num){
    return num + 2
}

addTwo(5)*/



//so now here we have a function in which we wants a number 
//but here to we can use functions like toUpperCase which we 
//should not able to
//also we can pass a string in function param which we should not
//thats why we need typescript for more strict types.
//to fix this we have the soln below

function addTwo(num: number){
    return num + 2
}

addTwo(5)

//one more example

function getUpper(val: string){
    return val.toUpperCase()
}

getUpper("god of war")

//one more eg. more strict function

function signUpUser(name: string, email: string, dob: number){}

signUpUser("Mihir", "mihirjaiswal69@gmail.com", 10/11/2001)

//what if i want to pass only 2 value
let loginUser = (name: string, email: string, ispaid: boolean = false) => {

}
loginUser("k","m@6969.com")//so in the case where we dont wanna pass any param we can simply initialize in  

export{}
