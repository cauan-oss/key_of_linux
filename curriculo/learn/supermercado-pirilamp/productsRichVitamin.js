const stockProducts = require("./data.json");

function getProductsRichVitain() {
     let listWithVitamin = []
     
     for (let index = 0; index < stockProducts.length; index += 1) {
          if (stockProducts[index].nutritionalInfo.vitamins !== undefined) {
               let quantityVitamin = Object.keys(stockProducts[index].nutritionalInfo.vitamins)
               let vitaminObject = Object.keys(SOT)
               for(let j = 0; j < quantityVitamin.length; j += 1){
                    if(quantityVitamin[j] === stockProducts[index].nutritionalInfo.vitamins){
                         console.log(stockProducts[index].nutritionalInfo.vitamins)
                    }
               }

          }
     }
    //console.log(quantityVitamin)
     return listWithVitamin
}

console.log(getProductsRichVitain())
