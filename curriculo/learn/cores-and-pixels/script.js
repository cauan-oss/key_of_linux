
function createColorRandom() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    const colorRandom = `rgb(${r}, ${g}, ${b})`
    return colorRandom
}


/* ele vai abrir a pagina, gerar um numero e carregar no localstorage */

const squares = document.getElementsByClassName("color");
const listValuesColor = [];
function insertColorInTheSquares() {
    for (let index = 1; index < squares.length; index += 1) {
        squares[index].style.backgroundColor = createColorRandom()
        listValuesColor.push(squares[index].style.backgroundColor)
        const button = document.getElementById("button-random-color");
        button.addEventListener('click', () => {
             squares[index].style.backgroundColor = createColorRandom()  
             listValuesColor.push(squares[index].style.backgroundColor)
            for (let j = 1; j < listValuesColor.length; j += 1) {
                console.log(listValuesColor[j])
            }
        })
        
        squares[0].style.backgroundColor = 'black'
    }
    return createColorRandom()
}

/* salvar apenas o numeros do rbg no localStorage e depois chamar esse numeros nos quadrados */



function buttonColorRandom() {
    

}
buttonColorRandom()
insertColorInTheSquares()
/* savingInTheLocal() */
/* console.log('aqui', savingInTheLocal()) */
//console.log(savingInTheLocal())
















