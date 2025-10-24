const carro = require('./carro.cjs')
const jetta = require('./script.cjs')

class Concessionaria {
    constructor() {
        this.estoque = []
        this.historicoDeVendas = []
        this.clientesCadastrados = []
    }

    cadastrarClientes(cliente) {
        const novoCliente = {
            nomeCliente: cliente
        }
        this.clientesCadastrados.push(novoCliente)
    }
    adicionarVeiculo(carro) {
        const novoVeiculo = {
            veiculo: carro
        }
        this.estoque.push(novoVeiculo)
    }
    listarVeiculo() {

    }
    buscarPorMarca() {

    }
    venderVeiculo(nome, cpfCliente) {
        this.clientesCadastrados.map((cliente) => {
            if (nome === cliente.nomeCliente) {
                 this.clientesCadastrados.slice()
            }
        })
    }
}

const dado = new Concessionaria();
dado.cadastrarClientes('Geraldo');
dado.cadastrarClientes('Rufino');
dado.cadastrarClientes('Natalia');
/* const jetta = new carro('Volskwage', 'jetta', 2022, 138000, ) */
dado.adicionarVeiculo('jetta')
dado.adicionarVeiculo('corolla')
dado.adicionarVeiculo('prisma')

const meuArray = [4, 1, 2, 3]

console.log(...meuArray)
