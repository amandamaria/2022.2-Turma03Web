"use strict";
class Personagem {
    atacar() {
        console.log("Não recebi dano");
    }
}
class Guerreiro extends Personagem {
    atacar() {
        console.log("Recebi 10 de dano");
    }
}
class Arqueiro extends Personagem {
    atacar() {
        console.log("Recebi 20 de dano");
    }
}
let guerreiroA = new Guerreiro();
let arqueiroA = new Arqueiro();
function atacarPersonagem(fulano) {
    fulano.atacar();
}
atacarPersonagem(guerreiroA);
atacarPersonagem(arqueiroA);