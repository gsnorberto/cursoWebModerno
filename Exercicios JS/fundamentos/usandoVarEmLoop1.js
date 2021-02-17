for (var i=0; i<10; i++){
    console.log(i)
}
console.log('i= ', i) /*Nesse caso o "i" existe fora do escopo do for pois 
ela é do tipo var. Se a variável fosse let, daria erro */

//----------------------UTILIZANDO VAR--------------------------------
const funcs = []
for(var i=0; i<10; i++){
    funcs.push(function(){ // Função sem parâmetro de entrada
        console.log(i)
    })
}
console.log('\nResultado com var:')
funcs[2]() // Resultado = 10
funcs[8]() // Resultado = 10

//----------------------UTILIZANDO LET--------------------------------
/* Quando há o escopo de bloco a função lembra de qual era o valor de 
'i' naquele momento. Ou seja, para cada repetição o 'i' tem o escopo de
bloco. Toda vez que há uma repetição é como se a "function estivesse sendo
criada, e com isso ela lembra do resultado definido a ela naquele momento*/
const funcs2 = [] //Array
for(let i=0; i<10; i++){
    funcs2.push(function(){ // Função sem parâmetro de entrada
        console.log(i)
    })
}
console.log('\nResultado com let:')
funcs2[2]() // Resultado = 2
funcs2[8]() // Resultado = 8