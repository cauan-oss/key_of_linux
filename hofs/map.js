const { produtos, tarefas } = require("./arquivo.js")


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
console.log(relatorioPendencias)
