let a = 1 // A variável criada estará disponível para acesso na mesma hora
console.log(a) 
console.log(typeof Promise) //function

// Quando você cria uma promessa, você tem uma promessa de algo que vai ser executado no futuro e devolvido no futuro.
let p = new Promise(function(resolve){ // função (function) que vai chamar uma função (resolve) quando quiser cumprir essa promessa

    //Pode gerar um valor
    //resolve(3) //Execução da callback "function(valor)". A promessa pode passar apenas um único valor por parâmetro

    //Pode gerar um objeto
    /*
    resolve({
        x: 2,
        y: 3
    }) */

    //Pode gerar uma lista de valores
    resolve(['Ana','Bia', 'Marcos', 'Paulo'])

}) 

console.log(typeof p) //object

//Como faz para acessar o valor "3" gerado por "resolve"
/*
p.then(function(valor){ //"valor" é o valor que foi cumprido na promessa
     console.log(valor)
}) */

//Concatenando vários "then" onde a entrada do próximo then é o resultado da saída o then anterior.
//Trata-se de um processamento síncrono. Quando precisar de um processamento assíncrono terá que recorrer para callback. Que utilizará callback dentro de callback (callback hell)
p
    .then(valor => valor[0]) // Ana
    .then(primeiro => primeiro[0]) // A
    //.then(letra => console.log(letra)) // Imprime A
    .then(console.log) // Imprime A - Quando o valor passado por parâmetro é o mesmo do que o utilizado dentro do console.log, pode ser seguida essa estrutura ao invés da estrutura da linha comentada acima