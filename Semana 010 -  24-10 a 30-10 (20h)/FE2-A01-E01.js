var numeroInt = 800;

var ano = 0;
var mes = 0;
var dia = 0;

while (numeroInt >= 365){
    ano++;
    numeroInt = numeroInt-365;
}
while (numeroInt >= 30){
    mes++;
    numeroInt = numeroInt-30;
}
while (numeroInt >= 1){
    dia++;
    numeroInt = numeroInt-1;
}

console.log(`${ano} ano(s) \n${mes} mes(es) \n${dia} dia(s)`);
