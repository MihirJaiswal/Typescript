// getter
class student {
  
    private name: string = "Anshita Rathore";
    private age: number = 19;
    private role: string = "designer"

    // getter to get the name
    public get name1() {
        return this.name;
    }
    
    // getter to get the age
    public get age1() {
        return this.age;
    }
    
}

//setter

class Circle {
    private _radius: number;
  
    constructor(radius: number) {
      this._radius = radius;
    }
  
    get diameter(): number {
      return this._radius * 2;
    }
  
    set diameter(value: number) {
      this._radius = value / 2;
    }
  }
  
  const myCircle = new Circle(5);
  console.log(myCircle.diameter); // Output: 10
  myCircle.diameter = 16;
  console.log(myCircle.diameter); // Output: 16