const usuariolodado = true;// a escrita em js é sempre minusculas
const contapaga = false;

//truthy falsy

console.log(0 == false);// resultado é true.
console.log("" == false);// resultado é true
console.log(1 == true);// resultado é true.

//null ==> vazio nada

let minhaVar;
let varNull = null;

console.log(minhaVar);//retorna undefined 
console.log(varNull);// retorna o null

let numero = 3;
let texto = 'Alura';

console.log(typeof numero);//retorna o tipo da variavel 
console.log(typeof texto);//retorna o tipo da variavel
console.log(typeof minhaVar);//retorna o tipo da variavel 
console.log(typeof varNull);//retorna o tipo da variavel como objeto
