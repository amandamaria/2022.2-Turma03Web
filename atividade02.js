let a, b, c, texto;
a = Number(prompt("Insira um valor para 'a'"));
b = Number(prompt("Insira um valor para 'b'"));
c = Number(prompt("Insira um valor para 'c'"));
texto = calculaBhaskara(a, b, c);
document.getElementById("resultado").innerHTML = texto;

function calculaDelta(a, b, c){
	return (Math.pow(b, 2)-(4*a*c));
}

function calculaBhaskara(a, b, c){
	let raiz1 = 0, raiz2 = 0;
	let delta = calculaDelta(a, b, c);

	try{
		if(delta > 0 && a != 0){
			raiz1 = ((-b + Math.sqrt(delta, 2))/(2*a));
			raiz2 = ((-b - Math.sqrt(delta, 2))/(2*a));
		}
		else{
			throw new Error("Impossível calcular");
		}

	}catch(erro){
		return erro;
	}
	return "As raizes da equacao: " + a + "x² +" + b + "x +" + c + " \nforam: " + "X1= " + raiz1 + " \n" + "X2= " + raiz2;
}