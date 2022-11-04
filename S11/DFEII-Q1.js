const excluirPropriedades = (objeto, propriedades) => { 
     for (const x in objeto){
          if (propriedades.includes(x)){
               delete objeto[x];
          }
     }
     console.log(objeto)
};

var estudante = {id: 9, nome: "Talita", credito: 56}; 
console.log(excluirPropriedades(estudante, ['credito']));