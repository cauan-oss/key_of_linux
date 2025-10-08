const stockProducts = require("./data.json");

function getProductsRichVitain () {
    let listWithVitamin = []
     for(let index = 0; index < stockProducts.length; index += 1){
          if(stockProducts[index].nutritionalInfo.vitamins !== undefined) {
               listWithVitamin.push({
                description: stockProducts[index].description,
                formattedPrice: `R$${stockProducts[index].price}`,
                vitaminsInformation: `${stockProducts[index].nutritionalInfo.vitamins}`
               })
          }
     }
     return listWithVitamin
}

console.log(getProductsRichVitain())
