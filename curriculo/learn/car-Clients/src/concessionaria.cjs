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
         return this.estoque
    }
    buscarPorMarca() {

    }
    venderVeiculo(nome, veiculo) {
        const horario = new Date()
        const historico = {
                    nome: '', 
                    veiculo: '',
                    horarioDaVenda: `${horario.getHours()}:${horario.getMinutes()}`
                 };
        this.clientesCadastrados.map((cliente) => {
            if (nome === cliente.nomeCliente) {
                 this.clientesCadastrados.splice(cliente, 1)
                 historico.nome = nome
            }
        })
        this.estoque.map((carro) => {
              if(carro.veiculo === veiculo) {
                this.estoque.splice(carro, 1)
                historico.veiculo = veiculo
            } 
        })
        this.historicoDeVendas.push(historico)

    }
    calcularValorTotal() {
      

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
dado.venderVeiculo('Geraldo', 'jetta')

console.log(dado.calcularValorTotal())

module.exports = Concessionaria 
