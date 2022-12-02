enum Situacao{
    EmPreparo,
    Finalizada
}

enum TipoPrato{
    Sopa,
    Sanduiche,
    Rabada
}

type Receita = {
    situacao: Situacao
    tipo_prato: TipoPrato
}
  
let sanduba:Receita ={
    situacao: Situacao.EmPreparo,
    tipo_prato: TipoPrato.Sanduiche
}

console.log(sanduba)