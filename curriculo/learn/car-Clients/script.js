class Veiculo {
  //atributos 
  #marca
  #ano
  #preco

  constructor(marca, ano, preco) {
    this.#marca = marca
    this.#ano = ano
    this.#preco = preco
  }

  alterarPreco(newPrice) {
    this.#preco = newPrice
  }
  getPreco() {
    return this.#preco
  }
  getDetalhes() {
    return `${this.#marca}, ${this.#ano}, ${this.#preco}`
  }
  calculaIpva(tabelaIpva) {
    let ipva = 0;
    if (this.#ano > 2005) {
      ipva = tabelaIpva.taxaAcima2005 * 100
      return ipva
    }
    if (this.#ano < 2005) {
      ipva = tabelaIpva.taxaAte2005 * 100
      return ipva
    }

  }

  calcularValorSeguro(tabelaSeguro) {
      this.#preco
  }
}


class Carro extends Veiculo {
  constructor(numeroDePortas) {
    super(numeroDePortas)
    this.numeroDePortas = numeroDePortas

  }
  getDetalhes() {
    console.log(this.numeroDePortas);
  }
  calcularValorSeguro(tabelaSeguro) {
    const calculeFatorCarro = this.getPreco() * tabelaSeguro.fatorCarro
    return calculeFatorCarro;
  }
}

class Moto extends Veiculo {
  constructor(cilindrada) {
    super(cilindrada)
    this.cilindrada = cilindrada
  }
  getDetalhes() {
    console.log(this.getDetalhes)
  }
  calcularValorSeguro(tabelaSeguro) {
     const calculeFatorMoto = this.getPreco() * tabelaSeguro.fatorMoto
     return calculeFatorMoto
  }
}

class Caminhao extends Veiculo {
  constructor(capacidadeDeCarga) {
    super(capacidadeDeCarga)
    this.capacidadeDeCarga = capacidadeDeCarga
  }
  getDetalhes() {
    console.log(this.capacidadeDeCarga);
  }

  calcularValorSeguro(tabelaSeguro) {
     const calculeFatorCaminhao = this.getPreco() * tabelaSeguro.fatorCaminhao
     return calculeFatorCaminhao
  }
}

class Cliente {
  constructor(nome, cpf){
    this.nome = nome;
    this.cpf = cpf
  }
  getDados(){
    return `${this.nome} e ${ this.cpf } do cliente`
  }
}

class Concessionaria {
  constructor() {
    this.estoque = [];
    this.historicoDeVendas = [];
    this.clienteCadastrados = [];
  }

  cadastrarClientes(cliente) {
    this.clienteCadastrados.push(cliente)
  }
  adicionarVeiculo() {

  }
  listarVeiculo() {

  }
  buscarPorMarca() {

  }
  venderVeiculo(modelo, cpfCliente){
      for (const element of ) {
        
      }
  }
}


const inserindo = new Veiculo('vw', '2003', 20000);
console.log(inserindo.getDetalhes())


const tabelaSeguro = {
  base: 2000,
  // Valor base da apólice 
  fatorCarro: 0.05,     // 5% sobre o valor do veículo 
  fatorMoto: 0.07,
  // 7% sobre o valor do veículo 
  fatorCaminhao: 0.08   // 8% sobre o valor do veículo 
};


const tabelaIpva = {
  taxaAcima2005: 0.04,  // 4% 
  taxaAte2005: 0.025    // 2.5% 
};

