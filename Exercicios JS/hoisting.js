/* Hoisting é uma espécie de 'lançar para cima', mesmo que você imprima uma
variável antes de declarar ela, não acontecerá nenhum tipo de erro, pois é
como se a declaração da variável tivesse sido jogada para cima 
-O hoisting só funciona com variáveis do tipo Var
-Não significa que isso seja um boa prática de programação
-O ideal é sempre declarar a variável primeiramente
*/

//O que acontece nesse exemplo...
console.log ('a= ', a) // resultado será undefined
var a = 2 // se tirar essa linha, o código dará erro
console.log ('a= ', a)
/*...é como se estivesse desse jeito:
var = a
console.log ('a= ', a)
a=2
*/