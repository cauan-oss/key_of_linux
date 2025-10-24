const Veiculos = require("./veiculo.cjs")
class Caminhao extends Veiculos {
    constructor(capacidadeCarga) {
        this.capacidadeCarga = capacidadeCarga
    }

    getDetalhes() {
        return `capacidade: ${this.capacidadeCarga} toneladas `
    }
    calcularValorSerguro(tabelaSeguro) {
        return this.getPreco() * tabelaSeguro.fatorCaminhao
} 
}