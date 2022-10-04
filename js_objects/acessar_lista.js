const objCliente = {
    nome:"André",
    idade:36,
    cpf:"23565435500",
    email:"andreherege@heresia.com"
}

const chaves = ['nome', 'idade','cpf', 'email']

// const chave = "email"
// console.log(objCliente[chaves[0]]);
// console.log(objCliente[chave])

chaves.forEach(info => console.log(objCliente[info]));