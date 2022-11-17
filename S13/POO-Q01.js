"use strict";
class Animal {
    constructor(grupo) {
        this.grupo = "indefinido";
        this.grupo = grupo;
    }
}
class Cachorro extends Animal {
    constructor(grupo) {
        super(grupo);
    }
    exibirInformacoes() {
        console.log(`Grupo: ${this.grupo}`);
    }
}