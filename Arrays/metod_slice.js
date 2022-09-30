const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Viviane', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo', 'José'];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);
const sala3 = nomes.slice(0, nomes.length%2);

console.log(`Alunos sala 1: ${sala1}`);
console.log(`Alunos sala 2: ${sala2}`);
console.log(`Alunos sala 3: ${sala3}`);