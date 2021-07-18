// Desafio: Transformar Código JS em TS - Código
// Código usado no desafio:


type ContaBancaria = {
  saldo: number,
  valor: number,
  depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  valor: 0,
  depositar(valor: number) {
    this.valor += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria ,
  contatos: string[]
}

let correntista = {
  nome: 'ana silva',
  contaBancaria: contaBancaria ,
  contatos: ['34567890', '98765432']
}
correntista.contaBancaria.depositar(3000)
console.log(correntista)