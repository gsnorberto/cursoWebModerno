//Exemplos de funções

//Função sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) // nesse caso ele somará um int com um Undefined. O resultado será NaN
imprimirSoma(2, 3, 4, 5) // nesse caso ele vai pegar os dois primeiro e somar e o resto ignorar

// Função com retorno

function soma(a,b = 0){ // O b é considerado =0 quando não é passado nenhum outro parâmetro para essa posição
    return a+b
}

console.log(soma(2,3))