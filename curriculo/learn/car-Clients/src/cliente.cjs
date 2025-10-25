


class Client {
    constructor(nome, cpf) {
        this.nome = nome
        this.cpf =  cpf
    }
    getDados() {
        return `Cliente: ${this.nome}, CPF: ${this.cpf}`
    }
    inserindoClient() {
        const cliente = {
            nomeCliente: this.nome,
            cpf: this.cpf
        }
    }
}

/* Buscar pela classe cliente 
 cadastrar cliente na classe concessionaria 
*/