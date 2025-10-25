const { tabelaIpva, tabelaSeguro } = require('./constantes.cjs')
const Veiculo = require('./veiculo.cjs') 
 const Carro = require('./carro.cjs')
 const Moto = require('./moto.cjs')
 const Concessionaria = require("./concessionaria.cjs")




const jetta = new Carro('Volkswagen', 'sedan', 2003, 85000, 4);
const hornet = new Moto('Honda', 'speed', 2025, 85000, 1000);
console.log('aqui', jetta.calcularValorSerguro(tabelaSeguro));
console.log(jetta.getDetalhes())
const dado = new Concessionaria();
dado.adicionarVeiculo(jetta)
module.exports = jetta 
//console.log(jetta.calcularValorSerguro(tabelaSeguro))