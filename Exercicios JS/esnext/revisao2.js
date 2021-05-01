// Arrow Function
const soma = (a,b) => a + b // Return implícito
console.log(soma(2,3)) //5

//Arrow Function(this)
const lexico1 = () => console.log(this === exports) // Se fosse uma função tradicional o "This" apontaria pra global
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}
log() // Node = valor padrão
log('texto') // texto

// Operador Rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5)) //14
