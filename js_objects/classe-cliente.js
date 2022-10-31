class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const geizielder = new Cliente("Geizielder", "geizielder@gmail.com", "52144253208", 100);

console.log(geizielder);