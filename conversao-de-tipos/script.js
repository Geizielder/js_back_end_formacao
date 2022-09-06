// // Comversão implícita
// const numero = 456;
// const numeroString = "456";

// console.log(numero === numeroString);//resultado flase
// console.log(numero == numeroString);// reseltado true comparasão implícita não recomendado
//Conversão explícita
const numero = 456;
const numeroString = "456";

//Nesse tipo de conversão todos os caracteres devem ser numero.
console.log(numero + Number(numeroString));