class Car1 {
    start(){
        console.log("car started")
    }
}

class Bicycle {
    pedal(){
        console.log("bicycle pedaling")
    }
}
/* 
function startVehicle(vehicle : Car1 | Bicycle )

if (vehicle instanceof Car1) { 
      
    // Inside this block, 'vehicle'  
    // is narrowed to type 'Car' 
    vehicle.start(); 
} else { 
  
    // Inside this block, 'vehicle' is  
    // narrowed to type 'Bicycle' 
    vehicle.pedal(); 
} 


const myCar = new Car1(); 
const myBicycle = new Bicycle(); 

startVehicle(myCar); 
startVehicle(myBicycle);
 */