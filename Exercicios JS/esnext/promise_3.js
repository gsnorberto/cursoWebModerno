// A ideia dessa função é gerar um número entre dois números

function gerarNumerosEntre(min, max){
    if(min>max){
        [max, min] = [min, max] // inverte o valor das variáveis
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10,30)
    //.then(console.log) //aleatório entre 10 e 30
    .then(num => num*10) // recebe um número aleatório e multiplica por 10
    .then(num2 => console.log(`O número gerado foi ${num2}`))

