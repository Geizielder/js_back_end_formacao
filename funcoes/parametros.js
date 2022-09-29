
//Função sem parâmetros
// function soma() {
//     return 2 + 2;
// }

//Função com parâmetros
function soma(numero1, numero2) {
    return numero1 + numero2;
}

// function nomeIdade(nome, idade) {
//     return `Olá ${nome} sua idade é ${idade}? `;
// }// OBS: O nome deve ser passado com o string entre "".


function multiplica (numero1, numero2) {
    return numero1 * numero2
}
console.log(multiplica(soma(2, 3), soma(3,3)));


// Com o nenhum parametro foi passado o resultado e undefined
// function comParametro(param) {
//     console.log(param)
// }
// comParametro()