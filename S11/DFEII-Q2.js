const transformarObjEmArray = (objeto) => { 
    return Object.entries(objeto); 
};

var estudante = {id: 9, nome: "Talita", credito: 56}; 

console.log(transformarObjEmArray(estudante));