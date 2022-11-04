function calcularIdade(num){
    let anos = Math.trunc(num/365);
    let meses = Math.trunc((num%365)/30);
    let dias = ((num%365)%30);

    console.log(`${anos} ano(s)`);
    console.log(`${meses} mes(es)`);
    console.log(`${dias} dia(s)`);
}

calcularIdade(400);

calcularIdade(800);

calcularIdade(30);