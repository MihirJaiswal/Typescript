type Fish1 = {swim: () => void};
type Bird1 = {fly: () => void};

function isFish(pet: Fish1 | Bird1){
    return(pet as Fish1).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}