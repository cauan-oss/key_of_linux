const stockProducts = require("./data.json");

function SearchProductByName(brand) {
    const listOfProductForBrand = [{
        description: '',
        formattedPrice: ''
    }]
    let index
    for (index = 0; index < stockProducts.length; index += 1) {
        if(brand === stockProducts[index].productName)
   }
}

SearchProductByName()