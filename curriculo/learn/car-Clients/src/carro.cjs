const Veiculos = require("./veiculo.cjs");
//const tabelaSeguro = require("./constantes.cjs")


class Carro extends Veiculos {
    
    constructor(marca, modelo, ano, preco, numeroDePortas) {
        super(marca, modelo, ano, preco)
        this.numeroDePortas = numeroDePortas

    }
    getDetalhes() {
        return `Portas: ${this.numeroDePortas}`
    }
    calcularValorSerguro(tabelaSeguro) {
        const valorDoVeiculo = this.getPreco();
        return valorDoVeiculo * tabelaSeguro.fatorCarro
    }
}

module.exports = Carro 