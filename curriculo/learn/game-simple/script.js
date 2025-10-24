class Personagem {
    constructor(nome, vida, ataque, defesa ){
       this.nome = nome
       this.vida = vida 
       this.ataque = ataque
       this.defesa = defesa
    }
    atacar(alvo) {

    }
    receberDano(dano){
      
    }
}

class Guerreiro extends Personagem {
    constructor(forca, nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa)
        this.nome = nome
        this.forca = forca
        this.ataque = ataque
        this.vida = vida
        this.defesa = defesa
    }
      atacar(alvo){

      }
      receberDano(dano){

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

    lancarFeitico(alvo){
         
    }
}

class Inventario {
     constructor() {
        this.itens = []
     }

     adicionarItem(item){

     }
     usarItem(item, alvo) {

     }
}