// CLASSES#01
class Data {
  // publico po padrão
  dia: number
  public mes: number
  ano: number

  constructor(dia: number = 1, mes:number = 1, ano:number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data
casamento.ano = 2017
console.log(casamento)

// CLASSES#02
class DataEsperta {
  constructor(
    public dia: number = 1, 
    public mes:number = 1, 
    public ano:number = 1970) {
  }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamentoEsperto = new DataEsperta
casamento.ano = 2017
console.log(casamento)

//Desafio Classe Produto
//Atributos: nome, preço e desconto
//Obs 1: desconto é opcional (valor padrão 0)
//Obs 2: Criar dois produtos: passando dois e tres params

class Produto {
  constructor(
    public nome: string ,
    public preco: number ,
    public desconto: number = 0) {

    }
    //DESAFIO MÉTODO
    //Criar método precoComDesconto
    //Quais são os parametros e o retorno?
    //Alterar metodo resumo para mostrar o preço com desconto
    public precoComDesconto(): number {
      return this.preco - (this.preco * this.desconto)
    }
    public resumo(): string {
      return `
      ${this.nome} custa R$${this.preco} 
      com (${this.desconto * 100}% off) fica R$${this.precoComDesconto().toFixed(2)}`
    }
}

const caneta = new Produto('caneta', 15)
console.log(caneta.resumo())

const lapis = new Produto('lapis', 10, 0.1)
console.log(lapis.resumo())

const caderno = new Produto('caderno', 19.90, 0.20)
console.log(caderno.resumo())

// MODIFICADORES DE ACESSO
class Carro {
  private velocidadeAtual: number = 0

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
    ) {

    }
    protected alterarVelocidade(delta: number): number {
      const novaVelocidade = this.velocidadeAtual + delta
      const velocidadeValida = novaVelocidade >=0 
      && novaVelocidade <= this.velocidadeMaxima

      if(velocidadeValida) {
        this.velocidadeAtual = novaVelocidade
      } else {
        this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
      }
      return this.velocidadeAtual
    }
    public acelerar(): number {
      return this.alterarVelocidade(5)
    }
    public frear(): number {
      return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('ford', 'ka', 15)
console.log(carro1.acelerar())
console.log(carro1.acelerar())
console.log(carro1.acelerar())
console.log(carro1.acelerar())

console.log(carro1.frear())
console.log(carro1.frear())
console.log(carro1.frear())
console.log(carro1.frear())

// HERANÇA

class Ferrari extends Carro {
  constructor(
    modelo: string,
    velocidadeMaxima:number){
      super('Ferrari', modelo, velocidadeMaxima)
    }
  
  public acelerar(): number {
    return this.alterarVelocidade(20)
  }
  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('f40', 324)
console.log(f40)
console.log(f40.acelerar())

// HERANÇA#02

// GETTERS & SETTERS
class Pessoa {
  private _idade: number = 0

  get idade(): number {
    return this._idade
  }
  set idade(valor: number) {
    if(valor >= 0 && valor <= 120) {
      this._idade = valor
    }
  }
}
const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1)

// ATRIBUTOS E METODOS ESTATICOS
class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number) : number {
    return this.PI * raio * raio
  }
}

// const m1 = new Matematica()
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))
console.log(Matematica)

// CLASSE ABSTRATA
abstract class Calculo {
  protected resultado: number = 0

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a)
  }
}

class Multiplicar extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a)
  }
}

let s1: Calculo = new Soma()
s1.executar(2, 3, 4, 5)
console.log(s1.getResultado())

let m1: Calculo = new Multiplicar()
m1.executar(2, 3, 4, 5)
console.log(m1.getResultado())

// CONSTRUCTOR PRIVADO & SINGLETON
class Unico {
  private static instance: Unico = new Unico
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance
  }
  agora() {
    return new Date
  }
}
console.log(Unico.getInstance().agora())

// ATRIBUTOS SOMENTE LEITURA
class Aviao {
  public readonly modelo: string

  constructor(
    modelo: string,
    public readonly prefixo: string) {
      this.modelo = modelo
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)