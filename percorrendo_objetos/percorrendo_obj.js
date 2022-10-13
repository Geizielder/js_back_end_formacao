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

let relatorio = "";

for (let info in objCliente) 
{   
    if(typeof objCliente[info] === "object" || typeof objCliente[info] === "function")
    {
        continue;
    }else {
        relatorio += `
        ${info} ==> ${objCliente [info]}
        `;
    }
    
}

console.log(relatorio);