const { produtos, tarefas, taxasPorCategoria, carrinho } = require("./arquivo.js")


const cardapioFormatado = produtos.map((product) => {
    const save = `${product.nome} - R$ ${product.preco}`
    return save
})

const relatorioPendencias = tarefas.map((tarefa) => {
    if(tarefa.concluida === false){
        return `${tarefa.descricao} (prioridade: ${tarefa.prioridade})`
    } else {
        return null
    }
})
console.log()
/* const carrinhoFinalizado = carrinho.map((car) => {
    if(car.categoria ) {
           return car.preco * 0.08
    }
})

console.log(carrinhoFinalizado)
 */
