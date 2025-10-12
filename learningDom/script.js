/* class Botton {
    idBotton = "";
    constructor (idBotton) {
           this.idBotton = idBotton
    }
    changeText (newText) {
        const botton = document.getElementById(this.idBotton)
        botton.innerText = newText
    }
    changeBackground(color, alinhe) {
         const change = document.getElementById(this.idBotton);
         change.style.backgroundColor = color
         change.style.textAlign = alinhe
    }
    getButton() {
       const returnButton = document.getElementById(this.idBotton)
       return returnButton
    }
}


const botao1 = new Botton('title')
const text = new Botton('name');
text.changeText('Cauan')
text.changeBackground('yellow', 'center');

text.getButton().addEventListener('mouseover', () => {
   text.changeBackground('blue', 'center')       
});

botao1.changeText('Hello world');
botao1.changeBackground('red', 'right');

 */



