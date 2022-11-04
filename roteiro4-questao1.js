const excluirPropriedades = (objeto, propriedades) => {
 let object = new Set();
 let indice = 0;

 propriedades.forEach((element, index) =>{
   for(let m in objeto){
    if(element != m){
     object.add(objeto[indice]);   
    }
    indice++;
   } 
   indice = 0;
}) 

 console.log(object);
};

var exemplo = {a: 1, b: 2, c:true};
console.log(excluirPropriedades(exemplo, ['b', 'a']));

