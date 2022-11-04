function  calcularSuprimento(id, qtd, valor) {

    let consumoVida = (85-id)*qtd;
    let custo = consumoVida*valor;
    
    console.log(`Você precisará de R$${custo} para ter um suprimento de lanche até 85 anos.`);
}

calcularSuprimento(29,1,14);