class Veiculo {
    //atributos 
    #marca
    #ano
    #preco

    constructor(marca, ano, preco) {
        this.#marca = marca
        this.ano = ano
        this.#preco = preco 
    }

    alterarPreco(newPrice) {
         this.#preco = newPrice
    }
    getPreco() {
       return this.#preco
    }
    getDetalhes () {

    }
    calculaIpva(tabelaIpva) {

    }

    calcularValorSeguro(){

    }
}

const concessionaria = new Veiculo();
concessionaria.marca = 'Volkswagen';
concessionaria.ano = '2022';
concessionaria.preco = '200000';
concessionaria.alterarPreco(100)
console.log('getPrice', concessionaria.getPreco())
/* Tabela de Alíquotas do IPVA: 
const tabelaIpva = { 
taxaAcima2005: 0.04,  // 4% 
taxaAte2005: 0.025    // 2.5% 
}; 
Tabela de Cotação de Seguro: 
const tabelaSeguro = { 
base: 2000,           
// Valor base da apólice 
fatorCarro: 0.05,     // 5% sobre o valor do veículo 
fatorMoto: 0.07,      
// 7% sobre o valor do veículo 
fatorCaminhao: 0.08   // 8% sobre o valor do veículo 
};  */