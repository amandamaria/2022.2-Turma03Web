const idadeMaxima = 85;
const diasEmUmAno = 365;

let idade, quantidadeLanches, precoLanche, total;

idade = Number(prompt("Insira sua idade"));
quantidadeLanches = Number(prompt("Insira a quantidade de lanches"));
precoLanche = Number(prompt("Insira o preço do lanche por dia"));

calcularSuprimento(idade, quantidadeLanches, precoLanche);

function lanchePorAno(quantidadeLanches, precoLanche){
	return ((diasEmUmAno*precoLanche)/quantidadeLanches);
}

function calcularSuprimento(idade, quantidadeLanches, precoLanche){
	var valor = 0.0;

	try{
		if(idade >=1 && idade<= idadeMaxima){
			while(idade <= idadeMaxima){
				valor += lanchePorAno(quantidadeLanches, precoLanche);
				idade++;
			}
			document.getElementById('resultado').innerHTML = "Você precisará de R$" + valor + " para ter um suprimento de lanche até 85 anos.";
		}
		else{
			throw new Error("Idade incorreta, fora do intervalo (1-85) anos.")
		}
	}catch(erro){
		document.getElementById('resultado').innerHTML = erro;
	}
}