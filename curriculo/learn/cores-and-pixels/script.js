
function createColorRandom() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    const colorRandom = `rgb(${r}, ${g}, ${b})`
    return colorRandom
}



const listValuesColor = [];
const squares = document.getElementsByClassName("color");
function insertColorInTheSquares() {
    for (let index = 1; index < squares.length; index += 1) {
        squares[index].style.backgroundColor = createColorRandom()
        listValuesColor.push(squares[index].style.backgroundColor)

    }
    console.log(listValuesColor)
    squares[0].style.backgroundColor = 'black'
}


/* salvar apenas o numeros do rbg no localStorage e depois chamar esse numeros nos quadrados */



function buttonColorRandom() {
    const button = document.getElementById("button-random-color")
    button.addEventListener('click', () => {
        insertColorInTheSquares()
        localStorage.setItem('colorPalette', listValuesColor)
        for (let index = 0; index < listValuesColor.length; index += 1) {
            for (let indice = 0; indice < squares.length; indice += 1) {
                if (listValuesColor[index] !== squares[index]) {
                    listValuesColor.splice(listValuesColor[index])
                }
                if(listValuesColor[index] == squares[index]) {
                    squares[index].style.backgroundColor = localStorage.getItem('colorPalette')
                }
            }
        }
    })


}
buttonColorRandom()
insertColorInTheSquares()
/* savingInTheLocal() */
/* console.log('aqui', savingInTheLocal()) */
//console.log(savingInTheLocal())
















