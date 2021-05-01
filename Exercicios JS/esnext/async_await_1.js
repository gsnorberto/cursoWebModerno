function esperarPor(tempo = 2000){
    return new Promise(function(resolve){ // resolve = callback
        setTimeout(() => resolve(), tempo)
    })
}

// A declaração abaixo é inválida, pois Await só é válida dentro de uma função assíncrona.
//await esperarPor(3000)

//A ideia do async await é você ter um código que parece síncrono, embora ele seja assíncrono. Ou seja, em vez dele executar a função then ele vai ficar parado esperando a execução e só vai para próxima linha quando ele terminar execução 
// esperarPor(2000)
//     .then(() => console.log('Executando Promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 3...'))


function retornarValor(){
    return new Promise(resolve => {
        setTimeout(()=>resolve(10), 5000) // vai demorar 5 segundos para retornar o valor 10
    })
}

async function retornarValorRapido(){
    return 20
}

// Nesse caso, usando o await, ele vai esperar 1,5s até que seja chamada a próxima execução. Se não usasse o await ele iria executar simultaneamente as três linhas 

async function executar () {
    let valor = await retornarValorRapido() // Se não colocar o "await" nesse caso, em vez de retornar o valor 20 vai retornar a promise sem resultado
    //let valor = await retornarValor()

    await esperarPor(1500) // espera a promise ser resolvida para ir para o próximo
    console.log(`Assync/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Assync/Await ${valor+1}...`)

    await esperarPor(1500)
    console.log(`Assync/Await ${valor+2}...`)

    return valor + 3
}

//Função assíncrona
async function executarDeVerdade(){
    const valor = await executar() // Dentro de uma função assíncrona chamando outra função assíncrona 
    console.log(valor)
}

//executar().then(console.log)
executarDeVerdade()