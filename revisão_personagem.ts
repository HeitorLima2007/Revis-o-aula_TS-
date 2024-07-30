/*import Vestimenta from " ./vestimenta"
import Acess�rio from "./acessorio"
import Caucular from "./calcular"*/  // classes importadas, porem foram comentadas por conta da inexist�ncia dos arquivos "vestimenta.ts" e "acessorio.ts"
abstract class Personagem{// Personagem n�o havia sido declarado como classe

 protected abstract emoji : string //emogi n�o estva declarado corretamente

    /*private vestimenta: Vestimenta*/  // vestimenta ser� removido pois � uma classe exportada de outro arquivo

    public nome: string
    /*protected acessorios : Acessorio[] = []*/ // acesorio ser� removido pois � uma classe exportada de outro arquivo
    private altura: number
    private elementos: string
    private velocidade: number
    private forca: number
    private vida: number
    private nivel: number
    private evolucao: boolean
    private alcance: string
    private moeda: number
    private atacando: boolean
   
    constructor(//N�o esta digitado corretamente. Estava escrito "constructo", sem o "r"
            emoji: string,
            nome: string,
            altura: number,
            elementos: string,
            velocidade: number,
            forca: number,
            vida: number,
            nivel: number,
            evolucao: boolean,
            alcance: string,
            moeda: number,
            atacando: boolean
           /* ataque: number*/ //O atributo ataque n�o foi declarado
    )
    {   //N�o estavam declarados os atributos "elementos", "velocidade", "forca" e "vida". H� a necessidade de se declarar os atributos
        this.nome = nome
        //this.acessorios
        this.altura = altura
        this.elementos = elementos
        this.velocidade = velocidade
        this.forca = forca
        this.vida = vida
        this.nivel = nivel
        this.evolucao = evolucao
        this.alcance = alcance
        this.moeda = moeda
        this.atacando = atacando
      /*  this.cor= cor*/    //n�o existe o atributo cor
    }

   /* public equipar(vestimenta: Vestimenta):void{  // vestimenta ser� removido pois � uma classe exportada de outro arquivo
        this.vestimenta = vestimenta
    }*/

  /*  public getAcessorios():void{         // acesorio ser� removido pois � uma classe exportada de outro arquivo

        let contador = 0
        for(let item of  this.acessorios){
            console.log("Quais acessorios",item)
            contador ++
        }
        console.log("Quantidade de Acess�rio:",contador)
    }

    public setAcessorios(acessorios : Acessorio):void{         // acesorio ser� removido pois � uma classe exportada de outro arquivo
        this.acessorios.push(acessorios)
    }

    public removeAcessorios(): Acessorio | null{
        let acessorio  =  this.acessorios.pop()
        if(acessorio) return acessorio
        return null
    }*/

     //m�todos acessores + - #
     public getNivel(): number{
        return this.nivel //nivel n�o n�o estava declarado no escopo
    }

    public setNivel(nivel:number){
        this.nivel += nivel
    }

    public getEvolucao(): boolean{
        return this.evolucao // evolcao n�o estava declarado
    }

    public setAlcance(alcance:string): void{
        this.alcance = alcance // alcance n�o estava declarado
    }


     atacar(personagem: Personagem) : void{  //O atributo "forca" n�o existe, � preciso adficionalo ao escopo da classe. na fun��o esava escrito "persona" n�o "personagem"
        personagem.perderVida(this.forca)
        console.log(`${this.emoji} ${this.nome} est� atacando... ${this.forca}`)
        this.moeda += personagem.dano()
     }

    private perderVida(forcaAtaque: number): number {//o item "forcaAtaque" n�o esava declarado com number pois n�o estava escrito corretamente
      return  this.vida -= forcaAtaque

     }

    private dano():number{ //N�o existe o atributo "vida". Precisa ser declarado
        if(this.vida >=1){
            console.log(`${this.emoji} ${this.nome} agora tem ${this.vida} de vida...`)
            return 0
        } else{
            this.morte() //
            return 1
            //return Calcular.geraValor(100)  //a classe "Caucular" n�o havia sido importada
        }
   }
   vitoria(){
    if(this.atacando =true){
        console.log(this.nome,"Vit�ria")
    }
  }

    abstract correr():void
    abstract getEmoji():void
    abstract morte(): void

    andar(){
        console.log("andando!!!")
    }

    voar(){
        console.log("voando!!!")
    }


}