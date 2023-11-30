//by default all the class members are public in ts
//for eg.
class Employee {
    public empCode: string;
    public empName: string;

    constructor(empCode: string, empName: string){
        this.empCode = empCode;
        this.empName = empName;
    }
}
let emp = new Employee("122","Mihir");

//Protected
class Emp {
    public empName1: string;
    protected empCode1: number;

    constructor(name: string, code: number){
        this.empName1 = name;
        this.empCode1 = code;
    }
}

class salesEmp extends Emp{
    private department : string;

    constructor(name:string, code:number, department: string){
        super(name, code);
        this.department = department;
    }
}
let emp1 = new salesEmp("mj", 11, "sales")
//emp1.empCode1;

/*In the above example, we have a class Employee with two members,
 public empName and protected property empCode.
We create a subclass SalesEmployee that extends from the parent class Employee.
 If we try to access the protected member from outside the class, as emp.empCode,
  we get the following compilation error:*/ 