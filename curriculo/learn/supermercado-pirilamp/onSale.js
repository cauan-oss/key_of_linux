const stockProducts = require("./data.json");

function onSaleProducts() {
    let verifyBool = []
    let productOnSale = {
        description: '',
        formatedPricce: '',
        onSale: false
    }
    /* a função irá retornar uma nova lista de objetos 
    com as propriedades de descrição, o valor formatado 
    do produto e a informação booleana de oferta. 
    armazenar os valores que estao em true e comparar com o onSale 
    */
    for (index = 0; index < stockProducts.length; index += 1) {
        if (stockProducts[index].onSale) {
            productOnSale.description = stockProducts[index].description
            productOnSale.formatedPricce = `R$${stockProducts[index].price.toString()}`
            productOnSale.onSale  = stockProducts[index].onSale
            verifyBool.push(productOnSale)
        }
    }
    return  verifyBool
  
}

console.log(onSaleProducts())