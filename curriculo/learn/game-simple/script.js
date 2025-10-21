class personagem {
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

class guerreiro extends personagem {
    constructor(forca) {
        this.forca = forca
    }
    ataque(pesado) {
        
    }
}