const InputOfUrl = document.getElementById("urlInput");
const InputOLegend = document.getElementById("legendaInput");
const button = document.getElementById("adicionarBtn");
const galeryContainer = document.getElementById("galeriaContainer");


button.addEventListener('click', (param) => {
    /* InputOfUrl.value
    InputOLegend.value */
    const insertCard = document.createElement('div')
    insertCard.classList.add('item-galeria');
    const imagem = document.createElement('img');
    imagem.src = InputOfUrl.value
    const legend = document.createElement('p');
    legend.textContent = InputOLegend.value
    insertCard.appendChild(imagem)
    insertCard.appendChild(legend)
    galeryContainer.appendChild(insertCard)
    console.log()
})