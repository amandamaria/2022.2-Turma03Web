function calcularArea(propriedade, formula) {
    return formula(propriedade);
}

const pi = 3.14159265359;

var squareArea = function formula(valor){return Math.pow(valor, 2)};
var circleArea = function formula(valor){return pi * Math.pow(valor, 2)};

var quadrado = calcularArea(5, squareArea);
var circulo = calcularArea(2, circleArea)

console.log(`A área de um QUADRADO de lado 5 é: ${quadrado.toFixed(2)}`);
console.log(`A área de um CIRCULO com raio 2 é: ${circulo.toFixed(2)}`);







