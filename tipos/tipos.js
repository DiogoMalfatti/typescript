"use strict";
// STRING
var nome = 'joao';
console.log(nome);
// nome = 28
// NUMBER
var idade = 27;
// idade = 'ana'
idade = 27.5;
console.log(idade);
// BOOLEAN
var possuiHobbies = false;
// possuiHobbies = 1
possuiHobbies = true;
console.log(possuiHobbies);
// TIPOS EXPLICITOS
var minhaIdade;
minhaIdade = 27;
minhaIdade = 'vinte';
console.log(typeof minhaIdade);
// ARRAYS
var hoobies = ['cozinhar', 'jogar'];
console.log(hoobies[0]);
console.log(hoobies);
// hoobies = [100, 'cozinhar', 'jogar']
// console.log(hoobies)
// hoobies = 'vinte'
// TUPLAS
var endereco = ['av principal', 99];
console.log(endereco);
// ENUMS
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 1] = "verde";
    Cor[Cor["azul"] = 2] = "azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.verde;
console.log(minhaCor);
// FUNÇÕES
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 2));
// TIPOS FUNÇÕES
var calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// OBJETOS
var usuario = {
    nome: 'joao',
    idade: 27
};
console.log(usuario);
var funcionario1 = {
    array: ['joao', 'maria'],
    baterPonto: function (num) {
        if (num <= 8) {
            return 'ponto normal';
        }
        else {
            return 'fora do horario';
        }
    }
};
console.log(funcionario1.array);
console.log(funcionario1.baterPonto(9));
// UNION TYPES
var nota = 10;
console.log("Minha nota \u00E9 " + nota + " !");
// NEVER
// function falha(msg: string): never {
//   while(true)
// }
