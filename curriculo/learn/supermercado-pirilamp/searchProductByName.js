const productsInStock = require("./data.json")

function SearchProductByName(name) {
    let index;
    let value = [];
    let objectNewFormat = {
        description: '',
        formattedPrice: 0
    }
 
    
    for (index = 0; index < productsInStock.length; index += 1) {
       value.push(productsInStock[index].productName);
    }
    for(index = 0; index < value.length; index += 1) {
        if(value )
    }
}

console.log(SearchProductByName("Açúcar"))