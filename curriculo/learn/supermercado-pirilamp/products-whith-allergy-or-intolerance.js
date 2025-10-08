const stockProducts = require("./data.json");

const getProductsWithAllergyOrIntoleranceInfo = () => {
    let productsWithIntolerance = [];
   
    for (let index = 0; index < stockProducts.length; index += 1) {
        if (stockProducts[index].allergyOrIntolerance !== undefined) {
                productsWithIntolerance.push({
                    description: stockProducts[index].description,
                    formattedPrice: stockProducts[index].price,
                    allergyOrIntoleranceMessage: `Pode conter: ${stockProducts[index].allergyOrIntolerance}`
                })
        }
    }

    return productsWithIntolerance
};

console.log(getProductsWithAllergyOrIntoleranceInfo())