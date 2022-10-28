let tempo = "";
tempo = calculaIdade(400);

function calculaIdade(valor){
	let ano = 0, mes = 0 dias = 0;

	do{
		if(valor == 365){
			ano++;
			valor = valor - 365;
		}
		else if(valor > 365){
			ano = Math.trunc(valor / 365);
			dias = valor % 365;
			valor = dias;
			if(dias > 30){
				mes = Math.trunc(valor / 30);
				dias = valor % 30;
			}
		}
		else if(valor < 365){
			dias = Math.trunc(valor / 30);
		}

	}while(valor != 0);


	return ano + "ano (s) \n" + mes + " mes (es) \n" + dias "dia (s) \n"
}

