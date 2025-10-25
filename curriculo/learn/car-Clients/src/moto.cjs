const Veiculos = require("./veiculo.cjs");

class Moto extends Veiculos {
    constructor(marca, modelo, ano, preco, cilindrada){
        super(marca, modelo, ano, preco)
        this.cilindrada = cilindrada
    }
    getDetalhes() {
        return `CC:${this.cilindrada}`
    }
    calcularValorSerguro(tabelaSeguro){
           const valorSeguro = this.getPreco()
           return valorSeguro * tabelaSeguro.fatorMoto
    }
}

module.exports = Moto