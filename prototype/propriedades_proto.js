function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const geizielder = new Cliente("Geizielder", "42345642635", "geizielder@email.com", 200);

console.table(geizielder);
