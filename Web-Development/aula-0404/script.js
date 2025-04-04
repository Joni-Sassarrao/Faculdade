// console.log(saudar('joao'))

// const saudar = function (nome) {
//     return `Olá, ${nome}`
// }

// function exibirTarefa(id, titulo, prioridade) {
//     if(!id && !titulo && !prioridade){
//         console.error('Faltou passar os valores')
//         return
//     }
//     console.log(`Tarefa ${id}: ${titulo} (Prioridade: ${prioridade})`) //template string
// }

// exibirTarefa(1, 'Estudar JS', 'Alta')

// function calcularEstatisticas(numeros) { 
//     let soma = 0
//     let min = numeros[0]
//     let max = numeros[0]

//     for(let i=0; i < numeros.length; i++) { 
//         soma += numeros[i]
//         if(numeros[i] < i) {
//             min = numeros[i]
//         }
//         if(numeros[i] > max) {
//             max = numeros[i]
//         } 
//     }

//     const media = soma / numeros.length

//     return {soma, media, min, max}
// }

// const resultados = calcularEstatisticas([5, 10, 15, 20, 25])

// console.log(resultados)

// const subtrair = (a,b) => a - b

//  const subtrair = function(a,b) {
//      return a - b
//  }

// console.log(subtrair(20,5))

// const numeros = [1,2,3,4,5]

// const dobrados = numeros.map(n => n * 2)

// console.log('Números dobrados:', dobrados)

// Demonstração de "this" em função tradicional vs. arrow function
// const contador = {
//     valor: 0,
//     incrementarTradicional: function() {
//       setTimeout(function() {
        // Neste caso, "this" não se refere ao objeto "contador"
    //     console.log("Valor (tradicional):", this.valor);
    //   }, 100);
    // },
    // incrementarArrow: function() {
    //   setTimeout(() => {
        // A arrow function preserva o contexto do objeto "contador"
//         this.valor++;
//         console.log("Valor (arrow):", this.valor);
//       }, 100);
//     }
//   };
//   contador.incrementarTradicional();
//   contador.incrementarArrow();

// (function(){
//     const a = 1
//     const b = 2
//     console.log('Resultado da IIFE (a+b):', a+b)
// })()

// function criarContador() {
//     let contador = 0; // Variável privada
//     return {
//       incrementar: function() {
//         contador++;
//         return contador;
//       },
//       valor: function() {
//         return contador;
//       }
//     };
//   }
  
//   const meuContador = criarContador();

//   console.log(meuContador.incrementar());
//   console.log(meuContador.incrementar()); 