const productsInStock = require("./data.json")

function SearchProductByName(name) {
    let index;
    let value = [];
    let objectNewFormat = {
        description: '',
        formattedPrice: 0
    }

    /* */

    for (index = 0; index < productsInStock.length; index += 1) {
        value.push(productsInStock[index].productName)
        if (name === productsInStock[index].productName) {
            objectNewFormat.description = productsInStock[index].description
            objectNewFormat.formattedPrice = productsInStock[index].price
            return objectNewFormat
        }
    }
    let verify = value.includes(name)
    if (!verify || name === undefined) {
        return null
    }


}
console.log(SearchProductByName("Azeite"));