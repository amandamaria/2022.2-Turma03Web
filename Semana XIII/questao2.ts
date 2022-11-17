class Personagem{

    public atacar(){
        console.log(`Não recebi dano`);
    }

    public atacarPersonagem(personagem:Personagem){
        personagem.atacar();
    }

}

class Guerreiro extends Personagem{

    public atacar(){
        console.log(`recebi 10 de dano`);
    }

}

class Arqueiro extends Personagem{

    public atacar(){
        console.log(`recebi 20 de dano`);
    }

}

let guerreiro = new Guerreiro();
let arqueiro = new Arqueiro();

guerreiro.atacarPersonagem(arqueiro);
arqueiro.atacarPersonagem(guerreiro);