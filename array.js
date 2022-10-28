const excluir = (array, itensParaExcluir) => {
	let indice;

	itensParaExcluir.forEach(element => {
		indice = array.indexOf(element);
		array.splice(indice, 1);
	});

	return array.toString(); 
}

let exemplo = [1,2,3,1,2];
let itens = [1,2];
let resultado = excluir(exemplo, itens);
console.log(resultado);


