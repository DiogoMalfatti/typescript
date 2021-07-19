"use strict";
// Desafio: Transformar Código JS em TS - Código
// Código usado no desafio:
let contaBancaria = {
    saldo: 3456,
    valor: 0,
    depositar(valor) {
        this.valor += valor;
    }
};
let correntista = {
    nome: 'ana silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=desafio02.js.map