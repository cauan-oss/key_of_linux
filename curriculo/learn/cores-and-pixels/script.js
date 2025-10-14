
const squares = document.getElementsByClassName("color");
function createColorRandom() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    const colorRandom = `rgb(${r}, ${g}, ${b})`
    return colorRandom
}


let listValuesForLocal = [];
function insertColorInTheSquares() {
    for(let index = 1; index < squares.length; index += 1) {
        squares[index].style.backgroundColor = createColorRandom()
    }
    squares[0].style.backgroundColor = 'black'
}

/*
 1  quando abrir a pagina gere cores aleatorias ok
 2- quando eu clicar no botao crie novas cores - ok
 3 quando eu clicar no botao salve no localStorage -ok 
 4 quando eu recarregar a pagina retorne um console com local em formato de array
*/
function buttonCreateNewColors() {
    insertColorInTheSquares()
    let saveOfLocal = [];
    for(let index = 0; index < squares.length; index += 1) {
         saveOfLocal.push(squares[index].style.backgroundColor)
    }
    let convertListInString = JSON.stringify(saveOfLocal)
    localStorage.setItem('colorPalette', convertListInString);
    console.log(convertListInString)
}


function getColorOfLocal () {
    let getOfLocal = JSON.parse(localStorage.getItem('colorPalette'));
    for(let i in getOfLocal) {
        squares[i].style.backgroundColor = getOfLocal[i]
    }

}


const button = document.getElementById("button-random-color");
button.addEventListener('click', () => {
   buttonCreateNewColors()
})
insertColorInTheSquares()
getColorOfLocal()

















