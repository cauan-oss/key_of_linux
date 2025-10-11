
function createColorRandom () {
    const r =  Math.ceil(Math.random() * 255);
    const g =  Math.ceil(Math.random() * 255);
    const b =  Math.ceil(Math.random() * 255);
    const colorRandom = `rgb(${r}, ${g}, ${b})`
    return colorRandom
}

function insertColorInTheSquares() {
    const squares = document.getElementsByClassName("color");
    for(let index = 1; index < squares.length; index += 1) {
        squares[index].style.backgroundColor = createColorRandom()
        squares[0].style.backgroundColor = 'black'
    }
}

insertColorInTheSquares()
console.log(createColorRandom()) 















