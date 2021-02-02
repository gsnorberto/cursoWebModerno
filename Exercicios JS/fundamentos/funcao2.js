// Armazenando uma função em uma variável
const imprimirSoma = function (a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

// Armazenando uma função Arrow(forma reduzida de uma função) em uma variável 
const soma = (a,b) => { // a setinha ">" substitui o nome "fuction"
    return a+b
}
console.log(soma(2, 3))

// Retorno Implícito - Forma ainda mais reduzida
const subtracao = (a,b) => a-b // Função com apenas uma linha não precisa de chaves
console.log(subtracao(2,3))

// Forma mais reduzina para funções com apenas um parâmetro
const imprimir2 = a => console.log (a)
imprimir2('Legalll!!')