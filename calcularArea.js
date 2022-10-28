const ladoQuadrado = 5;
const raioCirculo = 2;
let valor1, valor2;

let propriedade = Number(prompt("Insira um valor"));

valor1 = calcularArea(propriedade, calcularAreaCirculo);
valor2 = calcularArea(propriedade, calcularAreaQuadrado);

document.getElementById('resultado').innerHTML = "Área do cículo: " + valor1 + "Área do retângulo: " + valor2;

function calcularArea(propriedade, formula){
	return formula(propriedade);
}

function calcularAreaQuadrado(valor){
	return Math.pow(valor, 2);
}

function calcularAreaCirculo(valor){
	return Math.PI*(Math.pow(valor, 2));
}


	

