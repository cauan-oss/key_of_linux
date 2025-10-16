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

function createColorsRandom() {
  let listForLocal = [];
  for (let index = 0; index < box.length; index += 1) {
    box[index].style.backgroundColor = colorRandom()
    listForLocal.push(box[index].style.backgroundColor)
  }
  let convertInString = JSON.stringify(listForLocal)
  console.log('lista aqui', listForLocal)
  localStorage.setItem('colorPalette', convertInString)
}



function colorWithBotton() {
  let getLocal = JSON.parse(localStorage.getItem('colorPalette'))
  for(let i in getLocal) {
       box[i].style.backgroundColor = getLocal[i]
  }
  console.log('trazendo do local', getLocal)
  
}

myButton.addEventListener('click', () => {
 createColorsRandom()
})
colorWithBotton()
