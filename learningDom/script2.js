const myTitle = document.getElementById("title");
const myButton = document.getElementById("botao");
const buttonForDelete = document.getElementById('deleta')

myButton.addEventListener('click', () => {
  let newValue = myTitle.innerText = 'Cauan'
  localStorage.setItem('titulo', newValue)
})

buttonForDelete.addEventListener('click', () => {
    let removeValue = myTitle.innerText = ''
    localStorage.setItem('titulo', removeValue)
})
myTitle.innerText = localStorage.getItem('titulo')