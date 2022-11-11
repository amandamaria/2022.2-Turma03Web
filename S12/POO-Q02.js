"use strict";
class Computador {
    get processador() {
        return this._processador;
    }
    set processador(processador) {
        this._processador = processador;
    }
    get memoria() {
        return this._memoria;
    }
    set memoria(memoria) {
        this._memoria = memoria;
    }
    exibirInformacoes() {
        console.log(`Processador: ${this._processador}, Memória: ${this._memoria}Gb`);
    }
}
class Laptop extends Computador {
    constructor() {
        super(...arguments);
        this._bateria_watts = 0;
    }
    get bateria_watts() {
        return this._bateria_watts;
    }
    set bateria_watts(bateria_watts) {
        this._bateria_watts = bateria_watts;
    }
    exibirInformacoes() {
        console.log(`Processador: ${this._processador}, Memória: ${this._memoria}Gb, Bateria: ${this._bateria_watts}watts`);
    }
}
class Desktop extends Computador {
    get gabinete() {
        return this._gabinete;
    }
    set gabinete(gabinete) {
        this._gabinete = gabinete;
    }
    exibirInformacoes() {
        console.log(`Processador: ${this._processador}, Memória: ${this._memoria}Gb, Gabinete: ${this._gabinete}`);
    }
}
let computador = new Computador();
let laptop = new Laptop();
let desktop = new Desktop();