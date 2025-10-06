const productsInStock = require("./data.json");

const lowStockProduct = () => {
    let quantityLow = [];
    for(let index = 0; index < productsInStock.length; index += 1) {
        if(productsInStock[index].quantityInStock > 0 && productsInStock[index].quantityInStock <= 10 ){
              quantityLow.push(`${productsInStock[index].productName}:${productsInStock[index].quantityInStock}`)
        }
    }
    return quantityLow
}

console.log(lowStockProduct())