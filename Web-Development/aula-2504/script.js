// const tarefas = ['Estudar', 'Criar projeto', 'Preparar apresentação', 'Revisar código']

// console.table(tarefas)

// const categorias = new Array('Trabalho', 'Estudo', 'Pessoal', 'Projetos')

// console.log('Array de categorias:', categorias)

// const prioridades = Array.of('Baixa', 'Média', 'Alta')

// console.log('Array de prioridades:', prioridades)

// const letras = Array.from('Taskmaster')

// console.log('Array de letras:', letras)

// const tarefas = ['Estudar', 'Criar projeto', 'Preparar apresentação', 'Revisar código']

// console.table(tarefas)

// console.log(tarefas[0])

// tarefas[1] = 'Criar projeto novo'

// console.table(tarefas)

// tarefas.push('Realizar testes')

// console.table(tarefas)

// tarefas.unshift('Revisar documentação')

// console.table(tarefas)

// tarefas.shift()

// console.table(tarefas)

// tarefas.pop()

// console.table(tarefas)

// tarefas.splice(1, 1)

// console.table(tarefas)

// const tarefas = ['Estudar', 'Criar projeto', 'Preparar apresentação', 'Revisar código']

// const executarForEach = (elemento, indice) => {
//     console.log(`${indice + 1}.${elemento}`)
// }

// tarefas.forEach(executarForEach)

// const arrayNovo = tarefas.map((elemento, indice) => {
//     return elemento + ' - Concluido'
// })

// console.log(arrayNovo)

// const tarefasComA = tarefas.filter(elemento => elemento.toLowerCase().includes('p'))

// console.log(tarefasComA)

// const tarefaEncontrada = tarefas.find(elemento => elemento.includes('e'))

// console.log(tarefaEncontrada)

// const IndiceTarefaEncontrada = tarefas.findIndex(elemento => elemento.includes('e'))

// console.log(IndiceTarefaEncontrada)

// tarefas.splice(IndiceTarefaEncontrada, 1)

// console.log(tarefas)

// const valorFinal = tarefas.reduce((total, t, indice) => (total + t.length, 0))

// console.log(valorFinal)

// const tarefa = {
//     id: 1,
//     titulo: 'Aprender sobre objetos',
//     descricao: 'Estudar propriedades e métodos',
//     concluida: false,
//     prioridade: 'Alta',
//     dataCriacao: new Date()
// }

// console.log(tarefa)

// console.log(tarefa?.titulo)

// console.log(tarefa['titulo'])

// const tarefasEspeciais = {
//     'data-Criação': new Date(),
//     'Nome da Tarefa': 'Nome da tarefa separado'
// }

// console.log(tarefasEspeciais['data-Criação'])
// console.log(tarefasEspeciais['Nome da Tarefa'])

// const projetoTaskMaster = {
//     nome: "TaskMaster",
//     version: "1.0",
//     autor: "Curso JavaScript",
//     tarefas: [],
//     adicionarTarefa(titulo, prioridade = "média") {
//       const novaTarefa = {
//         id: this.tarefas.length + 1,
//         titulo,
//         prioridade,
//         concluida: false,
//         criada: new Date()
//       };
//       this.tarefas.push(novaTarefa);
//       console.log(`Tarefa "${titulo}" adicionada.`);
//       return novaTarefa;
//     },
//     listarTarefas() {
//       console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
//       this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`));
//     }
// };

// projetoTaskMaster.adicionarTarefa("Estudar Objetos", "alta");
// projetoTaskMaster.adicionarTarefa("Criar interface");
// projetoTaskMaster.listarTarefas();

// console.log(Object.keys(projetoTaskMaster))
// console.log(Object.values(projetoTaskMaster))

const prioridades = ['baixa', 'média', 'alta']

const [baixa, media, alta] = prioridades

// console.log(baixa, media, alta)

const categorias = ['Trabalho', 'Estudo', 'Pessoal', 'Saúde']

const [primeiraCategoria, ... outrasCategorias] = categorias

console.log(primeiraCategoria, outrasCategorias)


const projetoTaskMaster = {
    nome: 'Taskmaster',
    version: '1.0',
    autor: 'Curso JavaScript',
    tarefas: []
}

const { nome, version, ... outrasProps} = projetoTaskMaster

console.log(nome)

console.log(version)

console.log(outrasProps)