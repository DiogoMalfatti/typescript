"use strict";
// STRING
let nome = 'joao';
console.log(nome);
// nome = 28
// NUMBER
let idade = 27;
// idade = 'ana'
idade = 27.5;
console.log(idade);
// BOOLEAN
let possuiHobbies = false;
// possuiHobbies = 1
possuiHobbies = true;
console.log(possuiHobbies);
// TIPOS EXPLICITOS
let minhaIdade;
minhaIdade = 27;
minhaIdade = 'vinte';
console.log(typeof minhaIdade);
// ARRAYS
let hoobies = ['cozinhar', 'jogar'];
console.log(hoobies[0]);
console.log(hoobies);
// hoobies = [100, 'cozinhar', 'jogar']
// console.log(hoobies)
// hoobies = 'vinte'
// TUPLAS
let endereco = ['av principal', 99];
console.log(endereco);
// ENUMS
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 1] = "verde";
    Cor[Cor["azul"] = 2] = "azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.verde;
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
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// OBJETOS
let usuario = {
    nome: 'joao',
    idade: 27
};
console.log(usuario);
let funcionario1 = {
    array: ['joao', 'maria'],
    baterPonto(num) {
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
let nota = 10;
console.log(`Minha nota é ${nota} !`);
// NEVER
// function falha(msg: string): never {
//   while(true)
// }
//# sourceMappingURL=tipos.js.map