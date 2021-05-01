/** Dificilmente essa função será usada dentro de um código */
// Tagged templates - processa o template dentro de uma função

function tag(partes, ...valores){
    console.log(partes) // [ '', ' está ', '.' ]
    console.log(valores) // [ 'Gui', 'aprovado' ]
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'aprovado'
console.log(tag `${aluno} está ${situacao}.`) // Outra string