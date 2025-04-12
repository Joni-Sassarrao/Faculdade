// let titulo = 'Aprender JavaScript'
// let descricao = 'Estudar manipulacao'
 
// console.log(titulo, typeof(titulo))
// console.log(descricao, typeof(descricao))
 
// console.log('Tamanho da variavel', titulo.length)
// console.log('Tamanho da variavel', descricao.length)
 
// console.log('Primeiro caracter', titulo[0])
// console.log('Primeiro caracter', descricao[0])
// console.log('ultimo caracter', titulo[titulo.length -1])
 
// const palavra = 'palavra'
 
// console.log('caracter na posicao 3', palavra.charAt[3])
 
// let categoria = 'categoria'
 
// let infoCompleta = `Categoria : ${categoria} : ${titulo}`
 
// console.log(infoCompleta)

// let titulo = "Aprender Javascript"
// let categoria = "Estudo"

// let infoCompleta = "Categoria: " + categoria + " - " + titulo

// console.log(infoCompleta)

// let infoCompleta2 = `Categoria: ${categoria} - ${titulo}`

// console.log(infoCompleta2)

// let texto1 = "Posição de JavaScript"

// console.log(texto1.indexOf("JavaScript"))

// console.log(texto1.includes("JavaScript"))

// console.log(texto1.startsWith("Posição"))

// console.log(texto1.endsWith("JavaScript"))

// const truncarDescricao = (texto, maxLength = 30) => {
//     if (texto.Length <= maxLength) {
//         return texto
//     }
//     return texto.substring(0, maxLength) + "...";
// }

// let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";

// console.log("Descrição truncada:", truncarDescricao(descricaoLonga));
// console.log("Descrição truncada:", truncarDescricao("Palavra", 5))

// let texto = "javascript,progração,web,frontend"

// console.log("Texto original:", texto)

// console.log("Texto slice:", texto.slice(0, 10))

// console.log("Texto substring:", texto.substring(0, 10))

// let arrayTags = texto.split(",")

// console.table(arrayTags)

// console.log(arrayTags.join(","))

// const destacarTermo = (texto, termo) => {
//     if(!termo) return texto
//     const regex = new RegExp(termo, 'gi')

//     return texto.replace(regex, `**$&**`)
// }

// let busca = destacarTermo("JavaScript é uma linguagem incrível. Amo JavaScript!", "javascript")

// console.log("Resultado com destaque:", busca)

// console.log("Math.PI", Math.PI)

// console.log("Math.E", Math.E)

// const raio = 5

// const areaCirculo = Math.PI * Math.pow(raio, 2)

// console.log(`Área de um círculo com raio ${raio} : ${areaCirculo}`)

// const numero = 9.7

// console.log(Math.round(numero))
// console.log(Math.floor(numero))
// console.log(Math.ceil(numero))
// console.log(Math.trunc(numero))

// const numeroAleatorioEntre = (min, max) => {
//     return Math.floor(Math.random() * max - min +1) + min
// }

// console.log(numeroAleatorioEntre(1, 100))

// console.log(Math.random())

// const hoje = new Date()

// console.log(hoje)

// console.log(new Date("2025-04-12T14:00"))
// console.log(new Date("04-12-2025"))

// const dataComponentes = new Date(2025, 5, 15, 10, 30, 0)

// const hoje = new Date()

// const formatarData = (data) => {
//     const dia = data.getDate()
//     const mes = (data.getMonth() + 1)
//     const ano = data.getFullYear()

//     return `${dia}/${mes}/${ano}`
// }

// console.log(hoje.getDate())
// console.log(hoje.getMonth())
// console.log(hoje.getFullYear())

// console.log(hoje)

// console.log(formatarData(hoje))

// const adicionarDias = (data, dias ) => {
//     const novaData = new Date(data)

//     novaData.setDate(data.getDate() + dias)

//     return novaData
// }

// console.log(adicionarDias(hoje, 3))

// console.log(adicionarDias(hoje, 10))

// console.log(adicionarDias(hoje, 30))

// console.log(adicionarDias(hoje, 365))

// const dataFinal = new Date(2025, 11, 11)

// const diferencaMs = dataFinal - hoje

// console.log(diferencaMs)

// const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24))

// console.log("Diferença em dias:", diferencaDias)