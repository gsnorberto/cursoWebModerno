/** Desafio */

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

/** Criar função reduce dizendo se todos os alunos são bolsistas ou não */
const resultado1 = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(resultado1))

/** Algum aluno é bolsista */
const resultado2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(resultado2))