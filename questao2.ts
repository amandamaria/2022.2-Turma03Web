class Estudante{

    public _id:number
    public _nome:string
    private _creditos:number

    public constructor(nome: string, id:number){
        this._nome = nome;
        this._id = id;
    }

    public set creditos(creditos:number){
        if(creditos <= 0.0){
            this._creditos = 1;
        }
        else{
            this._creditos = creditos;
        }
    }

    public get creditos(): number{
        return this._creditos;
    }

    detalhar(): void{
        console.log("Informações sobre o Estudante: \n" +"id: " + this._id + "\n" + "Nome: " + this._nome + "\n" + "Créditos: " + this._creditos);
    }

}

let estudante1 = new Estudante("Ítalo Maciel", 1);
let estudante2 = new Estudante("Maria Pessoa", 2);

//estudante1.creditos(10);
//estudante2.creditos(0);


estudante1.detalhar();
estudante2.detalhar(); 