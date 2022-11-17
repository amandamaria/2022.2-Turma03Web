class Animal {
    public grupo: string = "indefinido";

    constructor(grupo: string) {
        this.grupo = grupo;
    }
}

class Cachorro extends Animal {

    constructor(grupo: string) {
        super(grupo);
    }

    public exibirInformacoes() {
        console.log(`Grupo: ${this.grupo}`);
    }
}