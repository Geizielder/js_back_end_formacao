const numero = 5;
const texto = "5";

console.log(numero == texto);// true o js faz a conversão do texto para numero

console.log(numero === texto);// false o js não converte compara valores e tipos;

//typof
console.log(typeof numero)
console.log(typeof texto)

Number(texto);
String(numero);