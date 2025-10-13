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

function colorWithBotton() {
  let listWithColor = [];
  let listWithLocal = [];
  let convertInString;
  for (let index = 0; index < box.length; index += 1) {
    box[index].style.backgroundColor = colorRandom()
    listWithColor.push(box[index].style.backgroundColor);
    convertInString = JSON.stringify(listWithColor);
  }
  localStorage.setItem('colorPalette', convertInString);
  const myLocal = localStorage.getItem('colorPalette');
  const tranformeInObj = JSON.parse(myLocal)
  for (let index = 0; index < box.length; index += 1) {
    box[index].style.backgroundColor = tranformeInObj[index]
   }
  console.log('local', tranformeInObj)
}

myButton.addEventListener('click', () => {
  colorWithBotton()
})
