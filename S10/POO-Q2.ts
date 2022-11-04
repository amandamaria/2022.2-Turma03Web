class ContaCorrente {
    nome_correntista: string;
    cpf_correntista: string;
    saldo: number;

    constructor(nome: string, cpf: string, valor: number) {

        this.nome_correntista = nome;
        this.cpf_correntista = cpf;
        this.saldo = valor;

    }
    
    setNome(nome: string) {
        this.nome_correntista = nome;
    }

    setCpf(cpf: string) {
        this.cpf_correntista = cpf;
    }

    setSaldo(valor: number) {
        this.saldo = valor;
    }

    depositar(deposito: number): void {
        this.saldo += deposito;
    }

    sacar(saque: number): void {
        this.saldo -= saque;
    }

    mostrarInformacoes() {
        console.log(
            `Informações
            Nome Correntista: ${this.nome_correntista}.
            CPF: ${this.cpf_correntista}.
            Saldo Atual: R$ ${this.saldo}`
        )
    }
}

let nova_conta = new ContaCorrente("Talita", "123456789-00", 123456.50);

nova_conta.sacar(100);
nova_conta.depositar(200);

nova_conta.mostrarInformacoes();