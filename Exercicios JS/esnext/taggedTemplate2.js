/** */

function real(partes, ...valores){
    const resultado = []
    console.log(partes) // [ '1x de ', ' ou 3x de ', '' ]
    console.log(valores) // [ 29.9, 11 ] -> Vai interpolando os resultados de partes e valores em uma espécie de "zig-zag"
    valores.forEach((valor,indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` // se for um número retorna o R$ com o número
        resultado.push(partes[indice], valor)
    })
    console.log(resultado) // [ '1x de ', 'R$29.90', ' ou 3x de ', 'R$11.00' ]
    return resultado.join('') //Junta todos os elementos de um array em uma string
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`) // 1x de R$29.90 ou 3x de R$11.00
console.log(`1x de ${preco} ou 3x de ${precoParcela}`) // 1x de 29.9 ou 3x de 11
