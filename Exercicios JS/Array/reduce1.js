/** Reduce - Tem como primeiro elemento o acumulador, e o segundo como
 * elemento atual. 
 */

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]
console.log(alunos.map(a=>a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){ /** Além
    do acumulador atual, pode também passar o índice e o array original que está sendo
    percorrido a partir do reduce. Nesse exemplo, o elemento de índice 0 vem como 
    acumulador, e o de índice 1 como o atual*/
    console.log(acumulador, atual)
    return acumulador + atual // 7.3 + 9.2 = 16.5 + 9.8 = 26.3 + 8.7 = 35
} /**,10 */) // começar com 10 como valor inicial, em vez do 7.3

console.log(resultado)