var a = 0;
var b = 20;
var c = 5;

var x1 = 0;
var x2 = 0;

bhaskara(a, b, c);

function bhaskara(a, b, c) {
    if (delta(a, b, c) < 0 || (2 * a) == 0) {
        console.log(`Impossível Calcular`);
    } else {
        x1 = (-b + Math.sqrt(delta(a, b, c))) / (2 * a);
        x2 = (-b - Math.sqrt(delta(a, b, c))) / (2 * a);
        console.log(`X1 = ${x1} \nX2 = ${x2}`);
    }
}

function delta(a, b, c) {
    return (Math.pow(b, 2) - 4 * a * c);
}