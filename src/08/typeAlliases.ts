//creating a type

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User){
    return{name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})

//one more eg.

type Point = {
    x: number;
    y:number;
};

function printcoord(pt: Point){
    console.log("the coordinate's x value is " + pt.x);
    console.log("the coordinates's of y vlaue is " + pt.y);
        
}

printcoord({x: 200, y:500})

// eg 3

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
