const box = document.getElementsByClassName("caixa");
const myButton = document.getElementById("botao");
const buttonForDelete = document.getElementById('deleta')

function colorRandom() {
  let r = Math.ceil(Math.random() * 255)
  let g = Math.ceil(Math.random() * 255)
  let b = Math.ceil(Math.random() * 255)
  let color = `rgb(${r}, ${g}, ${b})`;
  return color
}
let lista = []
function insertColor() {
  for (let index = 0; index < box.length; index += 1) {
    box[index].style.backgroundColor = colorRandom()
    lista.push(box[index].style.backgroundColor)
    for(let indice = 0; indice < lista.length; indice += 1) {
      if(lista[indice] !== box[index].style.backgroundColor) {
        lista.splice(index)
      }
    }
    console.log('comparando', lista)
  }
}

function insertInTheLocal () {
  for(let index = 0; index < box.length; index += 1) {
      console.log('retorna', box[index])
  }
}

myButton.addEventListener('click', () => {
  insertColor()
  insertInTheLocal()
})
insertColor()
