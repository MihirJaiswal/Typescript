//taking array as an input
function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[3]
}

//arrow function syntax
const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}