class MesaDeJantar {

    material: string;
    lugares: number;
    preco: number;

    constructor(material: string, lugares?: number, preco?: number) {
        this.material = material;
        this.lugares = lugares;
        this.preco = preco;

        if (lugares == undefined) {
            this.lugares = 4;
        }
        else {
            this.lugares = lugares;
        }
        if (preco == undefined) {
            this.preco = 0;
        }
        else {
            this.preco = preco;
        }
    }

    detalhar(){
        console.log(
            `Informações da Mesa:
            Material: ${this.material}, 
            Lugares: ${this.lugares}, 
            Preço: ${this.preco}`);
    }
}

let mesa1 = new MesaDeJantar("Metal", 8, 100);

let mesa2 = new MesaDeJantar("Madeira",6,);

let mesa3 = new MesaDeJantar("Vidro");

mesa1.detalhar();
mesa2.detalhar();
mesa3.detalhar();