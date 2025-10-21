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
    getDetalhes () {
        console.log('em cima ')
    }
    calculaIpva(tabelaIpva) {
        let ipva = 0;
        if(this.#ano > 2005) {
          ipva =  tabelaIpva.taxaAcima2005 * 100
          return ipva
        }
        if(this.#ano < 2005) {
          ipva =  tabelaIpva.taxaAte2005 * 100
          return ipva
        }
       
    }

    calcularValorSeguro(tabelaSeguro){

    }
}


class Carro extends Veiculo {
    constructor(numeroDePortas) {
      super(numeroDePortas)
         this.numeroDePortas = numeroDePortas
         
    }
   getDetalhes(){
    console.log(this.numeroDePortas);
   }
}

class Moto extends Veiculo {
     constructor(cilindrada){
      super(cilindrada)
      this.cilindrada = cilindrada
     }
     getDetalhes() {
      console.log(this.getDetalhes)
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
}






const concessionaria = new Veiculo('vw', '2003', 20000);
const meuCarro = new Carro(8);
const minhaMoto = new Moto(1000)
const meuCaminhao = new Caminhao(8000);

const tabelaSeguro = { 
base: 2000,           
// Valor base da apólice 
fatorCarro: 0.05,     // 5% sobre o valor do veículo 
fatorMoto: 0.07,      
// 7% sobre o valor do veículo 
fatorCaminhao: 0.08   // 8% sobre o valor do veículo 
};


concessionaria.calculaIpva(2006)
const tabelaIpva = { 
taxaAcima2005: 0.04,  // 4% 
taxaAte2005: 0.025    // 2.5% 
};
concessionaria.getDetalhes()
meuCarro.getDetalhes()
