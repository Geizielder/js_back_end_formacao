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

function clientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const ju = new clientePoupanca("Ju", "42612378922", "ju@email.com", 100,250 );

console.table(ju);

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}
ju.depositarPoup(50);

console.log(ju.saldoPoup);