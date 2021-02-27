//Estratégia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1 // "a" recebe "a" ou o valor 1 caso o "a" seja Undefined (false)
    b = b || 1
    c = c || 1
    return a+b+c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) /* o zero é considerado 
"false" então o resultado retornará 3 em vez de 0 */

//Estratedia 2, 3 e 4 para gerar valor padrão
function soma2 (a, b, c){
    //Estratedia 2
    a = a !== undefined ? a : 1 /*Se "a" for estritamente diferente de Undefined ele 
    vai pegar o próprio valor de "a". E se for Undefined ele vai assumir o valor 1*/

    //Estratedia 3
    b = 1 in arguments ? b : 1 /*Dentro de arguments existe o índice 1? Se sim, pega o
    valor de "b", se não, assume o valor padrão 1 (OBS: "a" passado por parâmetro é o 
    índice 0, "b" é ídice 1 e "c" é índice 2)  */

    //Estratedia 4 - Escolha mais segura para esse caso de valores numéricos
    c = isNaN(c) ? 1 : c /*Se a variável "c" for NaN, retorna o valor 1, se não, retorna
    o valor de c  */

    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Estratégia mais simples usando parâmetro padrão do ES2015 (ECMAScript)
function soma3(a=1, b=1, c=1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
