const objCliente = {
    nome:"André",
    idade:36,
    cpf:"23565435500",
    email:"andreherege@heresia.com",
    fones: ["5556194268741", "5561999652348", "556199994512"]
}

objCliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(objCliente);

objCliente.dependentes.nome = "Sara Silva"

console.log(objCliente);
