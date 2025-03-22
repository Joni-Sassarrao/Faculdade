// console.log('hello world')
// console.info('info')
// console.warn('warning')
// console.error('error')

// console.table([
//     {id: 1, tarefa: "Estudar JS"},
//     {id: 2, tarefa: "realizar códico"}
// ])

// console.group("grupo de logs")

// console.log("log 1")
// console.log("log 2")

// console.groupEnd()

// console.time("Timer")

// if (1 == 2) {
//     console.log("nao")
// }
// console.timeEnd("Timer")

// // comentário da linha 1

// /* comentário de
//    várias linhas
// */

// var antigo = "valor da variável"

// console.log(antigo)

// let variavelMutavel = "valor que pode ser alterado"

// const variavelImutavel = "valor que não pode ser alterado diretamente"

// variavelMutavel = 1

// console.log(variavelMutavel)

// variavelImutavel = 1

// console.log(variavelImutavel)

// let texto = "texto"
// console.log(typeof texto)

// let numero = 0
// console.log(typeof numero)

// let isCompleted = false
// console.log(typeof isCompleted)

// let semvalor
// console.log(typeof semvalor)

// let nulo = null
// console.log(typeof nulo)

// let uniqueId = Symbol("id")
// console.log(typeof uniqueId)

// let bigNumero = 99999999999999999n
// console.log(typeof bigNumero)

// Tipos de dados complexos

let tarefa = { id: 1, tarefa: "Estudar código"}
console.log(tarefa)
console.log(tarefa.id)
console.log(tarefa.tarefa)

let table = [
    {id: 1, tarefa: "Estudar js"},
    {id: 2, tarefa: "Praticar código"},
]
console.log(table)
console.log(table[0])
console.log(table[0]["id"])

let hoje = new Date()
console.log(hoje)

let pattern = /^[a-z]5/i
console.log(pattern)