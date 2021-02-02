const peso1 = 1.1
const peso2 = Number('2.0') // outra forma de se declarar

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) // verificar se é um valor inteiro
console.log(Number.isInteger(peso2))

console.log(typeof peso1) // Tipo da constante

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1+avaliacao2*peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed serve para limitar a quantidade do número fracionário
console.log(media.toString()) //ToString(2) converte o valor da media em binário 
console.log(media)
