
function createColorRandom() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    const colorRandom = `rgb(${r}, ${g}, ${b})`
    return colorRandom
}


const squares = document.getElementsByClassName("color");
function insertColorInTheSquares() {
    for(let index = 0; index < squares.length; index += 1) {
        squares[index].style.backgroundColor = createColorRandom();
    }
}
insertColorInTheSquares()
/* savingInTheLocal() */
/* console.log('aqui', savingInTheLocal()) */
//console.log(savingInTheLocal())
















