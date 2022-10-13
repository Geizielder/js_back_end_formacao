const objCliente = {
    nome:"André",
    idade:36,
    cpf:"23565435500",
    email:"andreherege@heresia.com",
    fones: ["5556194268741", "5561999652348", "556199994512"],
    dependentes:[
        {
            nome:"Sara",
            parentesco:"filha",
            dataNasc:"20/03/2011"
        },
        {
            nome:"Samia Maria ",
            parentesco:"filha",
            dataNasc:"04/01/2014"
        }
    
    ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor;
    },
    sacar:function(valor)
    {
        this.saldo -= valor;
    }
}





function oferecerSeguro(obj){
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
console.log(Object.values(objCliente));
console.log(Object.entries(objCliente));
oferecerSeguro(objCliente);