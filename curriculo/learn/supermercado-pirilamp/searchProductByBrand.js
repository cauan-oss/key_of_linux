const stockProducts = require("./data.json");

function SearchProductByBrand(brand) {
    const listOfProductForBrand = [{
        description: '',
        formattedPrice: ''
    }]
    let list = [];
    let index;
    let insertDescription = '';
    let insertPrice = 0;
    for (index = 0; index < stockProducts.length; index += 1) {
        list.push(stockProducts[index].brand)
        if (brand === stockProducts[index].brand) {
            insertDescription = stockProducts[index].description
            insertPrice = stockProducts[index].price
        }
    }
    for (index = 0; index < listOfProductForBrand.length; index += 1) {
        listOfProductForBrand[index].description = insertDescription;
        listOfProductForBrand[index].formattedPrice = insertPrice.toString();
        
    }
    for (index = 0; index < list.length; index += 1) {
        if (!list.includes(brand)) {
            return null
        }
    }
    if (brand === undefined) {
        return null
    }
    return listOfProductForBrand

}
console.log(SearchProductByBrand("Del Valle"))
