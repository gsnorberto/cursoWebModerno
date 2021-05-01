// Tratamento de erros no async await

//Exemplo: Números gerados da mega sena
function gerarNumerosEntre(min, max, numerosProibidos){
    if(min>max){
        [max, min] = [min, max] // inverte o valor das variáveis
    } 

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if(numerosProibidos.includes(aleatorio)){ //Includes verifica se um número é pertencente ao array
            reject('Número repetido!')
        } else{
            resolve(aleatorio)
        }

    })
}

async function gerarMegaSena(qtdeNumeros){
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){ //Fill = gera vários valores automaticamente
            numeros.push(await gerarNumerosEntre(1, 60, numeros)) // await sempre fica junto da função que vai retornar um promise
        }
        return numeros
    } catch(e){
        throw "Que chato!!!"
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log) // Com o try catch criado acima, o problema que vai cair dentro desse catch não é mais o problema que foi gerado em "reject", e sim o problema que foi gerado a partir do throw

// gerarNumerosEntre(1, 5, [1, 2, 4]) // Nesse caso, ele só vai conseguir gerar dois números: 3, 5
//     .then(console.log)
//     .catch(console.log)