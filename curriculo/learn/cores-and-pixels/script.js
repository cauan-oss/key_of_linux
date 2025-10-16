const squares = document.querySelectorAll(".color");
const aquarela = document.querySelector("#pixel-board");
const boxSquares = document.querySelectorAll(".pixel");
const colorPalette = document.getElementById('color-palette');
const clean = document.getElementById("clear-board");
const sizeInput = document.getElementById("board-size");
const boardSize = document.getElementById("generate-board")
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



const button = document.getElementById("button-random-color");
button.addEventListener('click', () => {
    buttonCreateNewColors()
})
const elementFather = document.getElementsByClassName("pixel")
aquarela.addEventListener('click', (param) => {
    param.target.style.backgroundColor = 'black'
    for (let index = 0; index < squares.length; index += 1) {
        console.log('show', squares[index].style.backgroundColor)
        if (squares[index].classList.value === 'selected') {
            param.target.style.backgroundColor = squares[index].style.backgroundColor
        }

    }
})


colorPalette.addEventListener('click', (param) => {
    for (let index = 0; index < squares.length; index += 1) {
        if (squares[index].classList.value === 'selected') {
            squares[index].classList.value = 'color'
        }
        param.target.classList.replace('color', 'selected')
        document.cookie = param.target.style.backgroundColor
        param.target.style.backgroundColor = document.cookie
    }

})

clean.addEventListener('click', () => {
    for (let index = 0; index < squares.length; index += 1) {
        squares[index].style.backgroundColor = 'white'
    }
})

 function savingDesign () {
   
    const convertingInArray = JSON.parse(localStorage.getItem('pixelBoard'))
    console.log('help', convertingInArray)
    for(let i in convertingInArray) {
        boxSquares[i].style.backgroundColor = convertingInArray[i]
    }
}
savingDesign()

aquarela.addEventListener('click', () => {
    let listWithColors = [];
    for(let index = 0; index < boxSquares.length; index += 1) {
       listWithColors.push(boxSquares[index].style.backgroundColor)
    }
   localStorage.setItem('pixelBoard', JSON.stringify(listWithColors))
})

function lengthSquares () {
    const getValueOfInput = `${sizeInput.value}px`
   let estilos ;
    for (let index = 0; index < boxSquares.length; index += 1) {
        estilos = boxSquares[index]
        estilos.style.width = getValueOfInput
        estilos.style.height = getValueOfInput
        if(sizeInput.value <= 5) {
            sizeInput.value = 5
        }
        if(sizeInput.value >= 50) {
            sizeInput.value = 50
        }
    } 
    console.log(getValueOfInput)
    if(getValueOfInput === 'px') {
        alert("Board inválido!")
    }
}

boardSize.addEventListener('click', () => {
    lengthSquares()
})

insertColorInTheSquares()
getColorOfLocal()

















