class Cidade {

    private nome: string;

    constructor(nome:string){
        this.nome = nome;
    }

    public imprime(){
        console.log("Nome:", this.nome);
    }  

}

class Pessoa {

    public nome: string;
    public cidade: Cidade;

    constructor(nome:string, cidade:Cidade){
        this.nome = nome;
        this.cidade = cidade;
    }

    public imprime(){
        console.log("Nome:", this.nome, "\nCidade:", this.cidade);
    }

}

class Animal {

    public nome: string;
    public dono: Pessoa;

    constructor(nome:string, dono:Pessoa){
        this.nome = nome;
        this.dono = dono;
    }

    public imprime(){
        console.log("Nome:", this.nome, "\nDono:", this.dono);
    }

}

const natal = new Cidade("Natal");
const joao = new Pessoa("João", natal);
const toto = new Animal("Totó", joao);

natal.imprime();
joao.imprime();
toto.imprime();