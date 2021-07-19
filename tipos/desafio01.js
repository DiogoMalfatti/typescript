"use strict";
// DESAFIO
// CRIAR UM OBJETO FUNCIONARIO COM:
//   - ARRAY DE STRINGS COM NOMES DOS SUPERVISORES
//   - FUNÇÃO DE BATER PONTO QUE RECEBA A HORA E RETORNA UMA STRING
//     - PONTO NORMAL (<=8)
//     - FORA DO HORARIO (>8)
let funcionario = {
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
console.log(funcionario.array);
console.log(funcionario.baterPonto(9));
//# sourceMappingURL=desafio01.js.map