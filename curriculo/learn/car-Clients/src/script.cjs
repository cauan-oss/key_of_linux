const { tabelaIpva, tabelaSeguro } = require('./constantes.cjs')
const Veiculo = require('./veiculo.cjs') 
 



const carro = new Veiculo('Volkswagen', 'sedan', 2003, 85000)
carro.calcularIpva(tabelaIpva)
console.log(carro.calcularIpva(tabelaIpva))