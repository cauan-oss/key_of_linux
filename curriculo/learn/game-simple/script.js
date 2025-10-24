class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }
    /* o parametro de atacar recebe personagem */
    atacar(alvo) {
        alvo.receberDano(this.ataque)
    }
    receberDano(dano) {
        const calculaDefesa = this.defesa - dano
        this.defesa = calculaDefesa
        if (calculaDefesa < 0) {
            let calculaVida = this.vida + calculaDefesa
            this.vida = calculaVida
            console.log('vida', calculaVida);
        }
        if (this.vida <= 0) {
            console.log('Personagem morreu')
        }
    }
     estaVivo() {
        if(this.vida > 0) {
            return true
        } else {
            return false
        }
    }
}

function iniciarBatalha(heroi, monstro) {

    /* continua executando se os dois estiverem vivos, ele para de executar se estiverem mortos  */
    while(heroi.estaVivo() && monstro.estaVivo()){
          heroi.atacar(monstro)
          monstro.atacar(heroi)
    }
}

console.log('funcao aqui', iniciarBatalha())
/* 
Defina um laço de repetição que simule a passagem do tempo e as ações dos
combatentes. A condição de parada desse laço deve ser a derrota de um dos lados.
Estabeleça a ordem de ação: 
quem ataca primeiro e como o controle passa para o próximo combatente. */

class Guerreiro extends Personagem {
    constructor(forca, nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa)
        this.forca = forca
    }
    atacar(alvo) {

    }
    receberDano(dano) {

    }

    ataquePesado(pesado) {

    }
}

class Mago extends Personagem {
    constructor(mana, magia) {
        super()
        this.mana = mana
        this.magia = magia
    }

    lancarFeitico(alvo) {

    }
}

class Inventario {
    constructor() {
        this.itens = []
    }

    adicionarItem(item) {

    }
    usarItem(item, alvo) {

    }
}

const robervaldo = new Personagem('robervaldo', 10, 95, 50)
const chefao = new Personagem('chefao', 20, 15, 80)
//const mostraDano = robervaldo.receberDano(510)
robervaldo.atacar(chefao)

//console.log(chefao.defesa)