class Botton {
    idBotton = "";
    changeText (newText) {
        const botton = document.getElementById(this.idBotton)
        botton.innerText = newText
    }
    changeBackground(color, alinhe) {
         const change = document.getElementById(this.idBotton);
         change.style.backgroundColor = color
         change.style.textAlign = alinhe
    }
}
const botao1 = new Botton()

botao1.idBotton = "title";
botao1.changeText('Hello world');
botao1.changeBackground('red', 'center');





