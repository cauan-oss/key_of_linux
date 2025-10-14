
const squares = document.getElementsByClassName("color");
const aquarela = document.querySelector("#pixel-board");
const boxSquares = document.querySelectorAll(".pixel");
function createColorRandom() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    const colorRandom = `rgb(${r}, ${g}, ${b})`
    return colorRandom
}


let listValuesForLocal = [];
function insertColorInTheSquares() {
    for (let index = 1; index < squares.length; index += 1) {
        squares[index].style.backgroundColor = createColorRandom()
    }
    squares[0].style.backgroundColor = 'black'
    localStorage.setItem('black', squares[0].style.backgroundColor)
}

/*
 1  quando abrir a pagina gere cores aleatorias ok
 2- quando eu clicar no botao crie novas cores - ok
 3 quando eu clicar no botao salve no localStorage -ok 
 4 quando eu recarregar a pagina mantenha a paleta com as mesmas cores - ok
 5 quando abrir a pagina a cor preta ja deve estar seleciona para pintar os quadrados
*/
function buttonCreateNewColors() {
    insertColorInTheSquares()
    let saveOfLocal = [];
    for (let index = 0; index < squares.length; index += 1) {
        saveOfLocal.push(squares[index].style.backgroundColor)
    }
    let convertListInString = JSON.stringify(saveOfLocal)
    localStorage.setItem('colorPalette', convertListInString);
    console.log(convertListInString)
}


function getColorOfLocal() {
    let getOfLocal = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i in getOfLocal) {
        squares[i].style.backgroundColor = getOfLocal[i]
    }

}


/* Quando eu clicar no quadrado ele deve adicionar a cor preta 
 1 colocar um evento de click para cada um dos quadros 
*/


const button = document.getElementById("button-random-color");
button.addEventListener('click', () => {
    buttonCreateNewColors()
})

/* Quando eu passar o mouse em cima de um quadrado ele vai salvar o valor do indice
do quadrado no cookie

o que eu quero salvar no cookie ? o indice ?
*/
/* function paintBoxOfSquares () {
   let black = localStorage.getItem('black');
  como vou usar o appendChild ?
} */
/* quando clicar em texto ele vai ficar vermelho, quando clicar em outro quadrado, 
ele vai, tirar texto do quadrado anterior e vai para novo quadrado  */
let myTexto;
const elementFather = document.getElementsByClassName("pixel")
aquarela.addEventListener('click', (param) => {
    if (param.target.id === 'text') {
        myTexto = param.target
        console.log('param', myTexto.textContent)
        param.target.style.backgroundColor = 'red'
    }
    if (param.target.className === 'pixel') {
        const elementCreate = document.createElement('p')
        elementCreate.textContent = myTexto.textContent
        console.log(elementCreate)
        param.target.appendChild(elementCreate)
    }
})
insertColorInTheSquares()
getColorOfLocal()

















