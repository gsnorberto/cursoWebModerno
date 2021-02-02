const escola = "Cod3r44"

//fornece o índice da constante naquela posição (começa a contar do 0)
console.log(escola.charAt(4)) // nesse caso o resultado será "r"
console.log(escola.charCodeAt(3)) // retorna o valor de "3" na tabela ask
console.log(escola.indexOf('3')) // índice associado ao digito 3 que está dento da palavra

console.log(escola.substring(1)) // Imprime a palavra a partir do indice 1
console.log(escola.substring(0,3)) // Imprime do indice 0 até o indice 3 (mas não inclui ele)

console.log('Escola '.concat(escola).concat("!")) // Concatenar elementos e variáveis
console.log('Escola ' + escola + "!") // Maneira diferente de concatenar
console.log(escola.replace(3, 'e')) // Substitui o indice 3 pelo 'e'

// Utilizando conceitos Regex
console.log(escola.replace(/\d/g, 'e')) // Substitui todos os dígitos pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) // Substitui todos as letras e dígitos pela letra 'e'

//Converter String em array
console.log('Ana,Maria,Pedro'.split(',')) // Foi definido a vírgula como o separador do array