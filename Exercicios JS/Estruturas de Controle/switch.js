//Mais indicado do que o else if para múltiplas comparações

const imprimirResultado = function (nota){
    switch(Math.floor(nota)){ // Math.floor para arrendondar nota para baixo
        //Se o case 10 for verdadeiro, ele executa todos os cases abaixo dele 
        //se não utilizar break;
        case 10: // se for 10 ou 9 ele imprime o resultado 'Quadro de Honra'
            console.log('Quadro de honra 2')
            break
        case 9: case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
    
}

imprimirResultado(3)