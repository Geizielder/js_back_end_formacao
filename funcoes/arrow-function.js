// Escopo geral de uma função 
function nomeDaFuncao (/*com ou sem parâmetros*/) {
    //bloco de código;
}
//Arrow function

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => `e 2 + 2 é = ${num1 + num2}`;

console.log(apresentarArrow("Geizielder"));
console.log(soma(2, 2));

//Arrow function com mais de uma instrução

const somaNumerosPequenos = (num1, num2) =>{
    if (num1 > 10 || num2 > 10) {
        return "Use somente numeros de 1 a 9";
    }else{
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(11, 2));
