const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

/** Imperativo - Se importa mais em o que vai ser feito, e se importa
 * menos em como vai ser feito. Ou seja, é utilizado funções mais explicativas
 * para o melhor entendimento do seu funcionamento. 
 */
let total1 = 0
for(let i=0; i<alunos.length; i++){
    total1+= alunos[i].nota
}
console.log(total1/alunos.length)

/** Declarativo - Se importa menos em como tem que ser feito, e se
 * preocupa mais em o que vai ser feito. Ou seja, não se preocupa 
 * muito em como é o procedimento interno das funções utilizadas,
 * como o "map", por exemplo
 */
const getNota = nota => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)