const { produtos } = require("./arquivo.js")


const cardapioFormatado = produtos.map((product) => {
    const save = `${product.nome} - R$ ${product.preco}`
    return save
})

console.log(cardapioFormatado)