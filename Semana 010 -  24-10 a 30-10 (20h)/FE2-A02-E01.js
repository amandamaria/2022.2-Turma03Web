
const idadeAtual = 13;
const lanchesDiarios = 3;
const valorLanche = 21;
const idadeMaxima = 85;

function calcularSuprimento(idadeAtual, lanchesDiarios, valorLanche){
    let tempoRestante = idadeMaxima - idadeAtual;
    tempoRestante = tempoRestante * 365;
    let gastoDiario = lanchesDiarios * valorLanche;
    let gastoTotalSuprimentoVitalicio = gastoDiario * tempoRestante;
    let mensagem = `Você precisará de R$ ${gastoTotalSuprimentoVitalicio.toFixed(2)} para ter um suprimento de lanche até 85 anos.`;
    console.log(mensagem);
}

calcularSuprimento(idadeAtual, lanchesDiarios, valorLanche);