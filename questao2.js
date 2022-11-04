class Estudante {
    constructor(nome, id) {
        this._nome = nome;
        this._id = id;
    }
    set creditos(creditos) {
        if (creditos <= 0.0) {
            this._creditos = 1;
        }
        else {
            this._creditos = creditos;
        }
    }
    get creditos() {
        return this._creditos;
    }
    detalhar() {
        console.log("Informações sobre o Estudante: \n" + "id: " + this._id + "\n" + "Nome: " + this._nome + "\n" + "Créditos: " + this._creditos);
    }
}
let estudante1 = new Estudante("Ítalo Maciel", 1);
let estudante2 = new Estudante("Maria Pessoa", 2);
//estudante1.creditos(10);
//estudante2.creditos(0);
estudante1.detalhar();
estudante2.detalhar();
