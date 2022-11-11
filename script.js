const areaBotao = document.querySelector("#area-button");
const metadeBotao = document.querySelector("#metade-button");
const potenciaBotao = document.querySelector("#potencia-button");


function potencia(){
    let numero = document.getElementById("potencia-input").value;
    let resultado = Math.pow(numero, 3);
    document.querySelector("div").textContent = "A potência do número " + numero + " é " + resultado;
}

function metadeNumero(){
    let numero = document.getElementById("metade-input").value;
    let resultado = numero / 2;
    document.querySelector("div").textContent = "A metade do número " + numero + " é " + resultado;
}

function areaCirculo(){
    let numero = document.getElementById("area-input").value;
    let resultado = Math.PI * Math.pow(numero, 2);
    document.querySelector("div").textContent = "A área foi de: " + resultado;
}

potenciaBotao.addEventListener("click", potencia);
metadeBotao.addEventListener("click", metadeNumero);
areaBotao.addEventListener("click", areaCirculo);

window.addEventListener("keydown", (e) =>{
    switch(e){
        case "a":
            console.log("Olá")
    }
})