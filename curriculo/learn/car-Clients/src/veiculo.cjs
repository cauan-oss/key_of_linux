class Veiculos {
  #marca
  #modelo
  #ano
  #preco
  constructor(marca, modelo, ano, preco) {
    this.#marca = marca
    this.#modelo = modelo
    this.#ano = ano
    this.#preco = preco
  }
  alterarPreco(novoPreco) {

  }
  getPreco() {
   return this.#preco
  }
  getDetalhes() {
    return `Marca do veiculo: ${this.#marca}, modelo: ${this.#modelo}, ano: ${this.#ano}, valor: ${this.#preco}`
  }
  calcularIpva(tabelaIpva) {
    if (this.#ano > 2005) {
      const IPVAacima = this.#preco * tabelaIpva.taxaAcima2005
      return IPVAacima
    }
    if(this.#ano <= 2005) {
      const IPVAabaixo = this.#preco * tabelaIpva.taxaAte2005
      return IPVAabaixo
    }
  }
 calcularValorSerguro(tabelaSeguro) {
 }

}


module.exports = Veiculos 
