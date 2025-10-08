const stockProducts = require("./data.json");

const getProductsWithAllergyOrIntoleranceInfo = () => {
    let productsWithIntolerance = [];
    let compara = [];
    let listFinish = []
    const dataWithIntolerance = {
        description: '',
        formattedPrice: '',
        allergyOrIntoleranceMessage: ''
    }
    for (let index = 0; index < stockProducts.length; index += 1) {
        if (stockProducts[index].allergyOrIntolerance !== undefined) {
            productsWithIntolerance.push(stockProducts[index])
            compara.push(stockProducts[index].allergyOrIntolerance);
        }
    }
    /* Percorre o array de products e adicionar dentro de dataWith o valores e compare */
    for (let index = 0; index < productsWithIntolerance.length; index += 1) {
           if(productsWithIntolerance[index].allergyOrIntolerance === compara[index]) {
             dataWithIntolerance.description = productsWithIntolerance[index].description
             dataWithIntolerance.formattedPrice = productsWithIntolerance[index].price
             dataWithIntolerance.allergyOrIntoleranceMessage = compara[index]
             listFinish.push(dataWithIntolerance);
            }
    }

    return listFinish
};

console.log(getProductsWithAllergyOrIntoleranceInfo())