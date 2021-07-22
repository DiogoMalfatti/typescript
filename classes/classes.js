"use strict";
// CLASSES#01
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data;
casamento.ano = 2017;
console.log(casamento);
// CLASSES#02
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamentoEsperto = new DataEsperta;
casamento.ano = 2017;
console.log(casamento);
//Desafio Classe Produto
//Atributos: nome, preço e desconto
//Obs 1: desconto é opcional (valor padrão 0)
//Obs 2: Criar dois produtos: passando dois e tres params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //DESAFIO MÉTODO
    //Criar método precoComDesconto
    //Quais são os parametros e o retorno?
    //Alterar metodo resumo para mostrar o preço com desconto
    precoComDesconto() {
        return this.preco - (this.preco * this.desconto);
    }
    resumo() {
        return `
      ${this.nome} custa R$${this.preco} 
      com (${this.desconto * 100}% off) fica R$${this.precoComDesconto().toFixed(2)}`;
    }
}
const caneta = new Produto('caneta', 15);
console.log(caneta.resumo());
const lapis = new Produto('lapis', 10, 0.1);
console.log(lapis.resumo());
const caderno = new Produto('caderno', 19.90, 0.20);
console.log(caderno.resumo());
// MODIFICADORES DE ACESSO
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('ford', 'ka', 15);
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.frear());
console.log(carro1.frear());
console.log(carro1.frear());
console.log(carro1.frear());
// HERANÇA
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('f40', 324);
console.log(f40);
console.log(f40.acelerar());
// HERANÇA#02
// GETTERS & SETTERS
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
// ATRIBUTOS E METODOS ESTATICOS
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4));
console.log(Matematica);
// CLASSE ABSTRATA
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let s1 = new Soma();
s1.executar(2, 3, 4, 5);
console.log(s1.getResultado());
let m1 = new Multiplicar();
m1.executar(2, 3, 4, 5);
console.log(m1.getResultado());
// CONSTRUCTOR PRIVADO & SINGLETON
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
// ATRIBUTOS SOMENTE LEITURA
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map