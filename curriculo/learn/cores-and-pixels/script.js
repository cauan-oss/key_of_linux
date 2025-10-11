function createColorRandom() {
    const lisWithNumber = []
    const square = document.getElementsByClassName('color')
    console.log(square)
    for(let index = 0; index < square.length; index += 1){
        lisWithNumber.push(Math.ceil(Math.random() * (255 - 0)))
    } 
    return lisWithNumber
}
/* terei quatro cores, mas como vou fazer isso ?
 1 - gera um numero aleatorio de 0 a 255
 3  - percorre o array de classes kkkk
 2 -adiciona esse numero no background
*/
console.log(createColorRandom())