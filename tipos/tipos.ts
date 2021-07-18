// STRING
let nome: string = 'joao'
console.log(nome)
// nome = 28

// NUMBER
let idade: number = 27
// idade = 'ana'
idade = 27.5
console.log(idade)

// BOOLEAN
let possuiHobbies: boolean = false
// possuiHobbies = 1
possuiHobbies = true
console.log(possuiHobbies)

// TIPOS EXPLICITOS
let minhaIdade: any
minhaIdade = 27
minhaIdade = 'vinte'
console.log(typeof minhaIdade)

// ARRAYS
let hoobies: string[] = ['cozinhar', 'jogar']
console.log(hoobies[0])
console.log(hoobies)
// hoobies = [100, 'cozinhar', 'jogar']
// console.log(hoobies)
// hoobies = 'vinte'

// TUPLAS
let endereco: [string, number] = ['av principal', 99]
console.log(endereco)

// ENUMS
enum Cor {
  cinza,
  verde,
  azul
}
let minhaCor: Cor = Cor.verde
console.log(minhaCor)

// FUNÇÕES
function retornaMeuNome(): string {
  return nome
}
console.log(retornaMeuNome())

function digaOi(): void {
  console.log('oi')
  // return minhaIdade
}
digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}
console.log(multiplicar(2, 2))

// TIPOS FUNÇÕES
let calculo: (a:number, b:number) => number

calculo = multiplicar
console.log(calculo(5, 6))

// OBJETOS
let usuario: { nome: string, idade: number} = {
  nome: 'joao',
  idade: 27
}
console.log(usuario)

// ALIAS
type funcionario = { 
  array: string[], 
  baterPonto: (num: number) => string } 

let funcionario1: funcionario = {
  array: ['joao', 'maria'],
  baterPonto(num) {
    if(num<=8) {
      return 'ponto normal'
    }else{
      return 'fora do horario'
    }
  }
}

console.log(funcionario1.array)
console.log(funcionario1.baterPonto(9))

// UNION TYPES
let nota: number | string = 10
console.log(`Minha nota é ${nota} !`)

// NEVER
// function falha(msg: string): never {
//   while(true)
// }