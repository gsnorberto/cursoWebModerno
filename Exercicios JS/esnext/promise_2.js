// setTimeout(function(){
//     console.log('Executando calback...')

//     setTimeout(function(){
//         console.log('Executando calback...')
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){ // resolve = callback
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve()
        }, tempo)
    })
}

esperarPor() // espera 2 segundos para executar
    .then(()=>esperarPor()) // espera 2 segundos para executar
    .then(esperarPor) // espera 2 segundos para executar