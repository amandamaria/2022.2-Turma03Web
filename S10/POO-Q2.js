"use strict";
class ContaCorrente {
    constructor(nome, cpf, valor) {
        this.nome_correntista = nome;
        this.cpf_correntista = cpf;
        this.saldo = valor;
    }
    setNome(nome) {
        this.nome_correntista = nome;
    }
    setCpf(cpf) {
        this.cpf_correntista = cpf;
    }
    setSaldo(valor) {
        this.saldo = valor;
    }
    depositar(deposito) {
        this.saldo += deposito;
    }
    sacar(saque) {
        this.saldo -= saque;
    }
    mostrarInformacoes() {
        console.log(`Informações
            Nome Correntista: ${this.nome_correntista}.
            CPF: ${this.cpf_correntista}.
            Saldo Atual: R$ ${this.saldo}`);
    }
}
let nova_conta = new ContaCorrente("Talita", "123456789-00", 123456.50);
nova_conta.sacar(100);
nova_conta.depositar(200);
nova_conta.mostrarInformacoes();