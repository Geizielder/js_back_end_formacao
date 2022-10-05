const objCliente = {
    nome:"André",
    idade:36,
    cpf:"23565435500",
    email:"andreherege@heresia.com",
    fones: ["5556194268741", "5561999652348", "556199994512"],
    dependentes:[{
        nome:"Sara",
        parentesco:"filha",
        dataNasc:"20/03/2011"
    }],
}

objCliente.dependentes.push({
    nome:"Samia Maria ",
    parentesco:"filha",
    dataNasc:"04/01/2014"
});

// console.log(objCliente);

const filhaMaisNova = objCliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova[0].nome);