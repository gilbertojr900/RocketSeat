// 1. Declare uma variavel de nome weight
let  weight
// 2. Que tipo de dado é a variavel acima?
console.log(typeof weight)

// 3. Declare uma variavel e atribua valores para cada um dos dados:
// name: String
// Age: Number(integer)
// stars:Number(float)
// isSubscribed:Boolean

let name = "Junior"
age = 31
stars = 1.5
isSubscribed = true



// 4. A variavel student abaixo é de que tipo de dados ?
Object

// 4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

// 4.2 Mostre no consule a seguinte mensagem:
// <name> de idade <age> pesa <weight> kg.

//   atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

let student = {
     name: "Junior",
     age: 31,
     weight: 110,
    isSubscribed: true,
}
console.log(typeof student)
console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)


// 5. Declare uma variavel do tipo array, de nome students e atribua a ela nenhum visualViewport, ou seja, somente o array vazio.

let students = []


// 6. Reatribua valor para a variavel acima, colocando dentro dela o Objeto student da questao 4.(nao copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)

students = [
  student
]

console.log(students)



// 7. Coloque no console o valor da posição zero do array acima

console.log(students[0])


// 8. Crie um novo student e coloque na posicao 1 do array students
const john ={
      name: "John",
      age: 21,
      weight: 80,
      isSubscribed: false,
}

students[1] = john
console.log(students)


// 9 Sem rodar o codigo responsa qual é a responsa do codigo abaixo e por que ? Apos sua resposta, rode o codigo e veja se voce acertou.

// console.log(a)
// var a = 1

Retorna o valor undefined, pois var é uma variavel Global.