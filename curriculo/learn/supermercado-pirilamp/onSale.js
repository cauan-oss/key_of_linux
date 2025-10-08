const stockProducts = require("./data.json");

function onSaleProducts() {
    const arrayFinish = [];
    /* a função irá retornar uma nova lista de objetos 
    com as propriedades de descrição, o valor formatado 
    do produto e a informação booleana de oferta. 
    armazenar os valores que estao em true e comparar com o onSale 
    */
   /*  for (let index = 0; index < stockProducts.length; index += 1) {
        if (stockProducts[index].onSale) {
            
            //console.table(productOnSale);
            arrayFinish.push({
                description: stockProducts[index].description,
                formatedPricce: `R$${stockProducts[index].price.toString()}`,
                onSale: stockProducts[index].onSale
            })
        }
    } */

        for(let index in stockProducts){
            if(stockProducts[index].onSale){
                arrayFinish.push({
                    description: stockProducts[index].description,
                    formatedPricce: `R${stockProducts[index].price}`,
                    onSale: stockProducts[index].onSale
                })
            }
        }
    console.log(arrayFinish)
    return arrayFinish

}

console.table(onSaleProducts())