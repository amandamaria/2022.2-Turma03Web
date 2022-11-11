"use strict";
class Cidade {
    constructor(nome) {
        this.nome = nome;
    }
}
class Pessoa {
    constructor(nome, cidade) {
        this.nome = nome;
        this.cidade = cidade;
    }
}
class Animal {
    constructor(nome, dono) {
        this.nome = nome;
        this.dono = dono;
    }
}
const natal = new Cidade("Natal");
const joao = new Pessoa("João", natal);
const toto = new Animal("Totó", joao);