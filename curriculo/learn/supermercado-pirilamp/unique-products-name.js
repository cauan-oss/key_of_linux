const productsInStock = require('./data.json');

function getNameOfProducts () {
   let nameOfProduct = []; 
     for (let index = 0; index < productsInStock.length; index += 1){
          nameOfProduct.push(productsInStock[index].productName)
        }
        return nameOfProduct

}
console.log(`Produtos disponiveis em estoque ${getNameOfProducts()}`)