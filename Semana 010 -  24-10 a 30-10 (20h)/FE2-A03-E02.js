const unico = (array) => {
    // Implemente aqui a sua lógica 
   var r = array.filter(onlyUnique);
   return r;
}
   
function onlyUnique(value, index, self) {
   return self.indexOf(value) === index;
}
 
var exemplo = [1, 2, 3, 1, 2]; 
console.log(unico(exemplo)); // [ 1, 2, 3 ] 

exemplo = ['a', 'b', 'a', 'd', 'e', 'a']; 
console.log(unico(exemplo)); // [ 'a', 'b', 'd', 'e' ] 

exemplo = [true, false, false, true, true, false, false]; 
console.log(unico(exemplo)); // [ true, false ]