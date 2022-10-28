var array = [1, 2, 3, 1, 2];
var itensParaExcluir = [1, 2];


const excluir = (array, itensParaExcluir) => {
     array = array.filter(item => !itensParaExcluir.includes(item));
     return array;
}

console.log(excluir(array, itensParaExcluir));

// exemplo = ['a', 'b', 'a', 'd', 'e', 'a']; 
// console.log(excluir(exemplo, ['a', 'd'])); // [ 'b', 'e' ]

// var exemplo = [1, 2, 3, 1, 2]; 
// console.log(excluir(exemplo, [1, 2])); // [ 3 ] 

// exemplo = ['a', 'b', 'a', 'd', 'e', 'a']; 
// console.log(excluir(exemplo, ['a', 'd'])); // [ 'b', 'e' ] 

// exemplo = [true, false, false, true, true, false, false]; 
// console.log(excluir(exemplo, [true])); // [ false, false, false, false ]

