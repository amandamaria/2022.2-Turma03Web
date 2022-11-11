const botao_potencia = document.querySelector("#potencia-button");

const botao_metade = document.querySelector("#metade-button");

const botao_areaCirculo = document.querySelector("#area-button");

function potencia(){
    let pot = document.getElementById('potencia-input').value
    let potencia = pot**3;

    exibir(potencia);
}

function metade_num(){
    let metade = (document.getElementById('metade-input').value)/2;

    exibir(metade);
}

function area_circulo(){

    let raio = document.getElementById('area-input').value;
    
    let areaCirculo = Math.PI*(raio**2);

    exibir(areaCirculo);
}

function exibir(x){
    document.getElementById('solucao').innerHTML = x;
}

botao_potencia.addEventListener('click', potencia);

botao_metade.addEventListener('click', metade_num);

botao_areaCirculo.addEventListener('click', area_circulo);