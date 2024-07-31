class Caixa{

    private cor: string
    private banco: string
    private digital: boolean
    private identificacao_digitais: boolean
    private saldo: number
    private saldoCliente: number
    private escolher: string
    private fazSaque: boolean
    private fazDeposito: boolean
    private deposito: number
    private saque: number
    private saque_pix: boolean

    constructor(

        cor: string,
        banco: string,
        digital: boolean,
        identificacao_digitais: boolean,
        saldo: number,
        saldoCliente: number,
        escolher: string,
        fazSaque: boolean,
        fazDeposito: boolean,
        deposito: number,
        saque: number,
        saque_pix: boolean

    ){

        this.cor = cor
        this.banco = banco
        this.digital = digital
        this.identificacao_digitais = identificacao_digitais
        this.saldo = saldo
        this.saldoCliente = saldoCliente
        this.escolher = "Por favor, digite se deseja sacar ou depositar"
        this.fazSaque = fazSaque
        this.fazDeposito = fazDeposito
        this.deposito = deposito
        this.saque = saque
        this.saque_pix = saque_pix

    }

    cadastrar(){
        console.log("Por favor, digite seu CPF:")
        console.log("Por favor, insira sua chave de acesso:")
    }

    operacao(){
        switch(this.escolher){

            case 'sacar':
            this.conferir()
            break;

            case 'deposito':
            this.depositar()
            break;

            default:
            console.log("Não foi possível achar essa função. Por favor, selecione a opção corretamente")

            this.operacao()


        }
    }

    sacar(){

        this.saldo = this.saldo - this.saque
        this.saldoCliente = this.saldoCliente - this.saque
        console.log("Saque realizado em R$"+this.saque+". Seu saldo atual é de R$"+this.saldoCliente)

    }
    
    conferir(){
        if(this.saque <= this.saldoCliente && this.saque<= this.saldo){
            this.sacar()
        }else{
            this.negarSaque()
        }
    }

    negarSaque(){
        if(this.saldo < this.saque){
            console.log("Saldo no caixa insuficiente.")

        }else if(this.saque > this.saldoCliente){
            console.log("Desculpe, seu saldo não é suficiente")
        }
    }

    consultarSaldo(){
        return `Seu saldo nesta conta é${this.saldoCliente}`

    }

    depositar(){ //é necessário terminar de criar esta função


    }

}