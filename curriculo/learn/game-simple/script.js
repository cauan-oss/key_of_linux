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
       // console.log(` Quantidade defesa:  ${this.defesa - dano}`)
        const calculaDefesa = this.defesa - dano
        let calculaVida ;
        if(calculaDefesa < 0) {
          calculaVida = this.vida + calculaDefesa
          console.log('vida', calculaVida);
        }
        if(calculaVida <= 0) {
            console.log('Personagem morreu')
        }
       
    }
}

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

const robervaldo = new Personagem('robervaldo', 10, 10, 50)
const chefao = new Personagem('chefao', 20, 15, 80)
//const mostraDano = robervaldo.receberDano(510)
const mostraAtaque = robervaldo.atacar(chefao)

console.log(mostraAtaque)