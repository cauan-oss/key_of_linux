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

    }
    calculaIpva(tabelaIpva) {
       
    }

    calcularValorSeguro(){

    }
}

const concessionaria = new Veiculo('vw', '2025', 20000);
//concessionaria.alterarPreco(100)
//console.log('getPrice', concessionaria.marca)
concessionaria.calculaIpva(2006)
const tabelaIpva = { 
taxaAcima2005: 0.04,  // 4% 
taxaAte2005: 0.025    // 2.5% 
};
console.log(concessionaria.calculaIpva(tabelaIpva))

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