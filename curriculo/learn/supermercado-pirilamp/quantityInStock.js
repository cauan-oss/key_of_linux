const productsInStock = require('./data.json');

function quantityInStock () {
    let index;
    let quantity = [];
    for (index = 0; index < productsInStock.length; index += 1) {
        if(productsInStock[index].quantityInStock == 0){
             quantity.push(productsInStock[index].productName)
        }
    }
    return quantity
}

console.log(quantityInStock())