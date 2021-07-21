"use strict";
// LET & CONST 
let seraQuePode = '?';
console.log(seraQuePode);
// var seraQuePode = '?' //hoisting
let estaFrio = true;
if (estaFrio) {
    let acao = 'colocar o casaco';
    console.log(acao);
}
const cpf = '123.456.000-99';
// cpf = '789.101.132-78'
console.log(cpf);
// ARROW FUNCTION
// DESAFIOS RESPOSTAS
// #01
// var dobro = function(valor) {
//   return valor * 2
//   }
//   console.log(dobro(10))
const dobro = (valor) => valor * 2;
console.log(dobro(4));
// #02
// var dizerOla = function (nome) {
//   if (nome === undefined) { nome = "Pessoa" }
//   console.log("Ola, " + nome)
//   }
//   dizerOla()
//   dizerOla("Anna")
let dizerOla = (nome = 'Pessoa') => console.log(`ola ${nome}`);
// dizerOla()
dizerOla('Anna');
// #03
// var nums = [-3, 33, 38, 5]
// console.log('???')
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// #04
const numeros = [-3, 33, 38, 5];
const array = [55, 20, ...numeros];
console.log(array);
// #05
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log({ notas });
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
//# sourceMappingURL=ecmascript.js.map