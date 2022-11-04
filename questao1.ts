class MesaDeJantar{

    material:string
    lugares:number
    preco:number

    constructor(material: string, lugares?: number, preco?:number){
        this.material = material;

        if(lugares != undefined){
            this.lugares = lugares;
        }else{
            this.lugares = 4;
        }
        if(preco != undefined){
            this.preco = preco;
        }else{
            this.preco = 0.0;
        }
    }

    detalhar(): void{
        console.log("Informações sobre a Mesa: \n" +"Mesa: " + this.material + "\n" + "Lugares: " + this.lugares + "\n" + "Preço: " + this.preco);
    }

}

let mesa1 = new MesaDeJantar("Metal", 8, 100.00);
let mesa2 = new MesaDeJantar("Madeira", 6);
let mesa3 = new MesaDeJantar("Vidro");

mesa1.detalhar();
mesa2.detalhar();
mesa3.detalhar(); 