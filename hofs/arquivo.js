 const produtos = [
    { nome: "Salada Caesar", preco: 25.50, categoria: "Entrada" },
    { nome: "Filé Mignon à Parmegiana", preco: 78.90, categoria: "Prato Principal" },
    { nome: "Brownie com Sorvete", preco: 15.00, categoria: "Sobremesa" },
    { nome: "Suco de Laranja", preco: 8.50, categoria: "Bebida" }
];


const tarefas = [
    { id: 1, descricao: "Preparar apresentação", concluida: true, prioridade: "Alta" },
    { id: 2, descricao: "Revisar código do projeto X", concluida: false, prioridade: "Alta" },
    { id: 3, descricao: "Responder e-mails antigos", concluida: true, prioridade: "Média" },
    { id: 4, descricao: "Criar rascunho de proposta", concluida: false, prioridade: "Alta" },
    { id: 5, descricao: "Agendar reunião com time", concluida: false, prioridade: "Baixa" }
];

module.exports = {
    produtos: produtos,
    tarefas: tarefas
}