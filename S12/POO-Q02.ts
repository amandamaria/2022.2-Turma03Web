class Computador {

    _processador: string;
    _memoria: number;

    public get processador(): string {
        return this._processador;
    }

    public set processador(processador: string) {
        this._processador = processador;
    }

    public get memoria(): number {
        return this._memoria;
    }

    public set memoria(memoria: number) {
        this._memoria = memoria;
    }

    public exibirInformacoes() {
        console.log(`Processador: ${this._processador}, Memória: ${this._memoria}Gb`)
    }
}

class Laptop extends Computador {

    _bateria_watts: number = 0;

    public get bateria_watts(): number {
        return this._bateria_watts;
    }

    public set bateria_watts(bateria_watts: number) {
        this._bateria_watts = bateria_watts;
    }

    public exibirInformacoes() {
        console.log(`Processador: ${this._processador}, Memória: ${this._memoria}Gb, Bateria: ${this._bateria_watts}watts`);
    }
}

class Desktop extends Computador {

    _gabinete: string;

    public get gabinete(): string {
        return this._gabinete;
    }

    public set gabinete(gabinete: string) {
        this._gabinete = gabinete;
    }

    public exibirInformacoes() {
        console.log(`Processador: ${this._processador}, Memória: ${this._memoria}Gb, Gabinete: ${this._gabinete}`);
    }
}

let computador = new Computador();
let laptop = new Laptop();
let desktop = new Desktop();