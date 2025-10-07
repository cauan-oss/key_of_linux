const stockProducts = require("./data.json");

function onSaleProducts() {
    let verifyBool = []
    let productOnSale = [{
        description: '',
        formatedPricce: '',
        onSale: false
    }] 
    /* a função irá retornar uma nova lista de objetos 
    com as propriedades de descrição, o valor formatado 
    do produto e a informação booleana de oferta. 
    armazenar os valores que estao em true e comparar com o onSale 
    */
   let testando
    for (index = 0; index < stockProducts.length; index += 1) {
        testando = verifyBool.push(stockProducts[index].onSale)
        
    }
    console.log(testando)

   /*  return productOnSale */

}

console.log(onSaleProducts())