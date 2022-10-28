class ContaCorrente{

    nome_correntista: string;
    cpf_correntista: string;
    saldo: number;

    ContaCorrente(nome_correntista: string, cpf_correntista: string, saldo: number){
        this.nome_correntista = nome_correntista;
        this.cpf_correntista = cpf_correntista;
        this.saldo = saldo;
    }

    setNomeCorrentista (nome_correntista:string) :void{
        this.nome_correntista = nome_correntista;
    }

    setCpfCorrentista (cpf_correntista: string): void{
        this.cpf_correntista = cpf_correntista;
    }

    setSaldo (saldo: number): void{
        this.saldo = saldo;
    }

    getCpfCorrentista(): string{
        return this.cpf_correntista;
    }

    getNomeCorrentista(): string{
        return this.nome_correntista;
    }

    getSaldo(): number{
        return this.saldo;
    }

    sacar(valorSaque: number, saldoAtual: number): number{
        return saldoAtual - valorSaque;
    }

    depositar(valorDeposito: number, saldoAtual: number): number{
        return saldoAtual + valorDeposito;
    }

    mostrarInformacoes(): void{
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
