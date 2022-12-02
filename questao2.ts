class Pet{
    nome:string;

    constructor(nome:string){
        this.nome = nome;
    }

    public getNome(){
        return this.nome;
    }

}

class Livro{
    nome:string;

    constructor(nome:string){
        this.nome = nome;
    }

    public getNome(){
        return this.nome;
    }

}

class Colecao<T>{

    lista: T[] = [];

    public mostrarTodos(){
        this.lista.forEach(element => console.log(element))
    }
}

const meusLivrosPrediletos = new Colecao<Livro>();
const animais = new Colecao<Pet>();
const dom_quixote = new Livro("Dom Quixote")
const a_divina_comedia = new Livro("A Divina Comédia")

meusLivrosPrediletos.lista.push(dom_quixote);
meusLivrosPrediletos.lista.push(a_divina_comedia);

const toto = new Pet("Totó");
const fofo = new Pet("Fofo");

animais.lista.push(toto);
animais.lista.push(fofo);

meusLivrosPrediletos.mostrarTodos();
animais.mostrarTodos();