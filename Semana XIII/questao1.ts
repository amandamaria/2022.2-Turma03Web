class Animal{

    public grupo:string;

    public constructor(grupo:string){
        if(grupo == "undefined"){
            this.grupo = "indefinido";
        }
        else{
            this.grupo = grupo;
        }     
    }

}
  
class Cachorro extends Animal{

    public constructor(){
        super("mamífero");
    }

}

let tipoAnimal = new Cachorro();
console.log(`Objeto cachorro:" ${tipoAnimal.grupo}`);

let animal = new Animal("undefined");
console.log(`Objeto Animal: " + ${animal.grupo}`);
