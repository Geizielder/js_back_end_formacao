const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSalas(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acm, atual) => atual + acm,0);
    return somaDasNotas/notasDaSala.length;
}

console.log(`Média da sala JavaScript ${mediaSalas(salaJS)}`);
console.log(`Média da sala Java ${mediaSalas(salaJava)}`);
console.log(`Média da sala Python ${mediaSalas(salaPython)}`);