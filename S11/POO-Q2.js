"use strict";
class Estudante {
    constructor(id, nome, creditos) {
        this._id = id;
        this._nome = nome;
        this._creditos = creditos;
        if (creditos > 0) {
            this._creditos = creditos;
        }
        else {
            this._creditos = 1;
        }
    }
    detalhar() {
        console.log(`Informações do estudante:
            ID: ${this._id}, 
            Aluno (a): ${this._nome}, 
            Crédito: ${this._creditos}`);
    }
}
let estudante = new Estudante(9, "Talita", 14);
estudante.detalhar();