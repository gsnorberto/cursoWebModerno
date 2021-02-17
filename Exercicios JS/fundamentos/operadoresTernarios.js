// Se a nota for >= 7 retorna 'Aprovado', senão retorna 'Reprovado'
//Operador ternário é formado por 3 partes: uma expressão e as duas
//possibilidades de resultado
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

/* Outra forma de representação
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
} */

console.log(resultado(7.1))
console.log(resultado(6.7))

