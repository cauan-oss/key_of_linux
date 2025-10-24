import Veiculos from "./veiculo.cjs";

class Caminhao extends Veiculos {
    constructor(capacidadeCarga) {
        this.capacidadeCarga = capacidadeCarga
    }

    getDetalhes() {
        return `capacidade: ${this.capacidadeCarga} toneladas `
    }
}