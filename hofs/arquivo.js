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

const carrinho = [
    { id: 'a1', produto: 'Camiseta', categoria: 'Vestuário', preco: 50.00, quantidade: 2 },
    { id: 'b2', produto: 'Notebook', categoria: 'Eletrônicos', preco: 4000.00, quantidade: 1 },
    { id: 'c3', produto: 'Creme Facial', categoria: 'Cosméticos', preco: 80.00, quantidade: 3 }
];
const taxasPorCategoria = {
    'Vestuário': 0.10,   // 10% de taxa
    'Eletrônicos': 0.05, // 5% de taxa
    'Cosméticos': 0.15,  // 15% de taxa
    'Outros': 0.08       // 8% de taxa (caso não encontre a categoria)
};
const vendasHoje = [
    { id: 'camisa', quantidadeVendida: 3 },
    { id: 'tenis', quantidadeVendida: 1 },
    { id: 'calca', quantidadeVendida: 5 },
    { id: 'relogio', quantidadeVendida: 2 }
];
const estoque = {
    'camisa': 15,
    'tenis': 2,
    'calca': 10,
    'relogio': 30
};

module.exports = {
    produtos,
    tarefas,
    carrinho,
    taxasPorCategoria,
    vendasHoje,
     estoque
}