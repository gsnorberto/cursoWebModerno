/** Promises trabalha com esse conselho da promessa, que pode ser atendida ou rejeitada dependendo da situação */

// Exemplo com SetTimeOut para representar essa idéia do assíncrono. De uma ação que demora um determinado tempo e quando a resposta chega a promise é resolvida

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => { /** resolve = quando uma promessa é atendida ou resolvida. Ou reject quando quer rejeitar o atendimento dessa promessa por algum tipo de erro ou situação anormal que tenha acontecido */
        setTimeout(() =>{ // Simulação de um tempo maior de processamento
            resolve(frase) //Promise só aceita um único parâmetro
        }, segundos*1000)

    })
}

/** Pode ser encadeado quantos then quiser e no final sempre que termina um then seu resultado vai passando para o parâmetro dos outros then quem vêm em sequência. */
falarDepoisDe(3, 'Que legal!')
    .then(frase =>frase.concat('?!?')) // Quando você retorna uma promise, a promise tem essa função then e essa função then é chamada quando você resolve a promise passando um objeto que você deseja que seja passado para a função then
    .then(outraFrase => console.log(outraFrase)) // Frase que obtem depois de 3 segundos
    .catch(e => console.log(e)) // Em caso de usar o reject em vez do resolve em "resolve(frase) - linha 8", ele entrará nessa condição
