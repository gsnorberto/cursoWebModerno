function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com: ' + nota)
    } else{
        console.log('Reprovado com: ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){ // Se "valor" for true ele aceita a condição
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo(null) // não imprime nada pois é false
seForVerdadeEuFalo(1)