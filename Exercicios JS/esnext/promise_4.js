//Quando você precisa chamar várias promises ao mesmo tempo e você quer só chamar o then quando todas as promessas forem resolvidas

// Só vai gerar o número depois do tempo estabelecido
function gerarNumerosEntre(min, max, tempo){
    if(min>max){
        [max, min] = [min, max] // inverte o valor das variáveis
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
        
    })

}

//Gerar 10 números aleatórios de uma vez só
function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000), // cada resposta é uma promise diferente
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros)) // Ele só traz o resultado quando todas promessas estivererm sido cumpridas 