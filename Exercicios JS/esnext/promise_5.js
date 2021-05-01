// Tratamento de erro

function funcionarOuNao(valor, chanceErr){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErr){ // vai cair no erro
            reject('Ocorreu um erro!')
        } else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.1) // 0.1 = 10% de chance de gerar o erro
    .then(v => console.log(`Valor: ${v}`))
    .then( // tratando um erro em específico, nesse caso o "consol.log"
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.log(`Erro Geral: ${err}`)) // Entra no catch quando dá algum tipo de erro. 