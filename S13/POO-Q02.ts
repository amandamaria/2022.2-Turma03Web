class Personagem{
    public atacar(){
        console.log("Não recebi dano");
    }
}

class Guerreiro extends Personagem{
    public atacar(){
        console.log("Recebi 10 de dano")
    }
}

class Arqueiro extends Personagem{
    public atacar(){
        console.log("Recebi 20 de dano")
    }
}

let guerreiroA = new Guerreiro();
let arqueiroA = new Arqueiro();

function atacarPersonagem(fulano: Personagem){
    fulano.atacar();
}

atacarPersonagem(guerreiroA);
atacarPersonagem(arqueiroA);