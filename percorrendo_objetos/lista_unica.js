const clientes = [
    {
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
    },
    {
        nome: "Juliana",
        cpf: "55552542525",
        dependentes:[{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc:"30/08/2020"
        }],
    }
];

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes);