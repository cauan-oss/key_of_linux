const productsInStock = require('./data.json');

function getUniqueProducts () {
   /*    let count = 0;
 
  for (let index = 0; index < productsInStock.length; index += 1) {
        count = index
     }
     return count
  */   
 let count = 0
 productsInStock.map((product) => count += product.id)
  return count


      
}
console.log(`Produtos em estoque ${getUniqueProducts()}`)