class ContaCorrente {
    ContaCorrente(nome_correntista, cpf_correntista, saldo) {
        this.nome_correntista = nome_correntista;
        this.cpf_correntista = cpf_correntista;
        this.saldo = saldo;
    }
    setNomeCorrentista(nome_correntista) {
        this.nome_correntista = nome_correntista;
    }
    setCpfCorrentista(cpf_correntista) {
        this.cpf_correntista = cpf_correntista;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getCpfCorrentista() {
        return this.cpf_correntista;
    }
    getNomeCorrentista() {
        return this.nome_correntista;
    }
    getSaldo() {
        return this.saldo;
    }
    sacar(valorSaque, saldoAtual) {
        return saldoAtual - valorSaque;
    }
    depositar(valorDeposito, saldoAtual) {
        return saldoAtual + valorDeposito;
    }
    mostrarInformacoes() {
        console.log("Dados do Correntista:" + "\n" + "O nome do correntista é: " + this.nome_correntista + " \n" + "CPF: " + this.cpf_correntista + "\n"
            + "Saldo da Conta Corrente: " + this.saldo);
    }
}
var contaCorrente = new ContaCorrente();
contaCorrente.setCpfCorrentista("190.203.169-20");
contaCorrente.setNomeCorrentista("Jurandir Nogueira");
contaCorrente.setSaldo(5500.00);
contaCorrente.setSaldo(contaCorrente.sacar(200.00, contaCorrente.getSaldo()));
contaCorrente.setSaldo(contaCorrente.depositar(5.00, contaCorrente.getSaldo()));
contaCorrente.mostrarInformacoes();