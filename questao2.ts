export class Computador {

    private processador: string;
    private memoria: number;

    constructor(processador: string, memoria: number){
        this.processador = processador
    }

    public info(){
        console.log(`Processador: ${this.processador}, Memória: ${this.memoria}`);
    }
}

export class Laptop extends Computador {

    private bateria_watts: number;

    constructor(bateria_watts: number){
      super("",0);
      if(bateria_watts != undefined){
        this.bateria_watts = bateria_watts;
      }else{
        this.bateria_watts = 0;
      }    
    }

    public info(){
        console.log(`Bateria: ${this.bateria_watts}`);
    }
}


export class Desktop extends Computador {

    private gabinete: string;

    constructor(gabinete: string){
        super("",0);
        if(gabinete != undefined){
            this.gabinete = gabinete;
        }else{
            this.gabinete = "";
        }
    }

    public info(){
        console.log(`Gabinete: ${this.gabinete}`);
    }
}

const computador = new Computador("I5", 16);
const desktop = new Desktop("Dell");
const laptop = new Laptop(3000);

computador.info();
desktop.info();
laptop.info();