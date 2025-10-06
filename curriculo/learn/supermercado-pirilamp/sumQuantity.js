const productsInStock = require('./data.json');

function sumProducts() {
    let count = 0;
    let index ; 
    for (index = 0; index < productsInStock.length; index += 1){
        count += productsInStock[index].quantityInStock
    }
    return count
}

console.log(sumProducts())