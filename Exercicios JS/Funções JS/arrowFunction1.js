let dobro = function (a){
    return 2 * a
}

// Reescrevendo a função de cima utilizando a função Arrow
dobro = (a) => {
    return 2 * a
}

//Função Arrow para funções de apenas uma linha
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())