function calcularRaizes(a, b, c) {

    let delta = Math.sqrt(b * b - 4 * a * c)

    if (a != 0 && delta >= 0) {
        let raiz1 = ((-b + delta) / (2 * a));

        let raiz2 = ((-b - delta) / (2 * a));
        
        console.log(`X1 = ${raiz1};`);
        console.log(`X2 = ${raiz2};`);
    }

    else{
        console.log("Impossível calcular");
    }
}

calcularRaizes(1,-1,-2);