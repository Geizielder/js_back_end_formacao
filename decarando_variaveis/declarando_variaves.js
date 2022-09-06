// //var
// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// /**------------------- */
// let forma = 'retângulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// // area = altura * comprimento;// mesmo sem o let essa forma contunua a apresentar o resultado
// if(forma === 'retângulo') {
//     area = altura * comprimento;
// }else {
//     area = (altura * comprimento) / 2;
// }
// console.log(area);
//let area;//ess tetse gera uma erro descomente e execute para ver o log

const forma = 'quadrado'; // faça testes com outra forma ex: triangulo.
const altura = 5;
const comprimento = 7;
let area;// faça teste alterando area para const

if (forma === 'quadrado') {
    area = altura * comprimento;
}else {
    area = (altura * comprimento) / 2;
}

console.log(area);

