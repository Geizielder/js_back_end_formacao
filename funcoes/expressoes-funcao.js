//Declaração de função
// function nomeDaFuncao (/*com ou sem parâmetros*/) {
//     //bloco de código
// }


// Expresão de função
// const soma =  function(num1, num2) {return num1 + num2}
//console.log(soma(2, 2));

// Diferença principal: HOISTING
// funções e var são listadas no topo
console.log(apresentar()); 

function apresentar(){
    return "Olá!";
}

const soma =  function(num1, num2) {return num1 + num2}

console.log(soma(2, 2));