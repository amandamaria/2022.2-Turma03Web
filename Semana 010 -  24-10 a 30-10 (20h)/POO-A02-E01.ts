class ContaCorrente {
    private nome_correntista: string;
    private cpf_correntista: string;
    private saldo: number;

    constructor(nome_correntista: string,
        cpf_correntista: string,
        saldo: number) {
        this.nome_correntista = nome_correntista;
        this.cpf_correntista = cpf_correntista;
        this.saldo = saldo;
    }

    setNome(nome: string): void {
        this.nome_correntista = nome;
    }
    setCpf(cpf: string): void {
        this.cpf_correntista = cpf;
    }
    setSaldo(saldo: number): void {
        this.saldo = saldo;
    }
    depositar(valor: number) {
        this.saldo = this.saldo + valor;
        console.log("Depósito, valor: R$ " + valor.toFixed(2) + "\n");
    }
    sacar(valor: number) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor;
            console.log("Saque efetuado no valor de: R$ " + valor.toFixed(2) + "\n");
        }
        else {
            console.log(`Tentativa de SAQUE sem sucesso, \nSaldo Insuficiente!!!\n`);
        }

    }
    mostrarInformacoes() {
        console.log(
            `Resumo das Informações:\n
            Nome: ${this.nome_correntista}\n
            CPF: ${this.cpf_correntista}\n
            Saldo: R$ ${this.saldo.toFixed(2)}\n`)
            ;
    }

}

var ccLeonardo: ContaCorrente = new ContaCorrente("Leonardo", "025.430.384 - 69", 2970.00);

ccLeonardo.mostrarInformacoes();
ccLeonardo.depositar(1000);
ccLeonardo.mostrarInformacoes();
ccLeonardo.sacar(2970);
ccLeonardo.mostrarInformacoes();
ccLeonardo.sacar(1500);
ccLeonardo.mostrarInformacoes();

