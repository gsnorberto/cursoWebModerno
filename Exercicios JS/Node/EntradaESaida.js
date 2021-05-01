/** Dentro do Node temos alguns objetos e constantes que estão disponíveis globalmente. Uma dessas constantes é o "__dirname", temos o objeto global e também temos outro objeto que é o objeto Process */
/**A partir do objeto process a gente consegue ler dados do teclado do usuário e também consegue imprimir tanto na entrada padrão como na saída padrão do computador. A entrada padrão geralmente é o teclado e a saída padrão o monitor*/

const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit() // Finalizar o processo
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { /** O evento on data vai acontecer quando você digita algo e depois dá um enter. Ele vai chamar uma função passando aquilo que você digitou dentro da variável data*/
        const nome = data.toString().replace('\n', '') /** Remover o "enter" pressionado pelo usuário após digitar o nome */
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit() // finalizar o processo
    }) 
}

/** Digite no terminal dentro do Node o comando: 
 * node entradaESaida.js -a  (O resultado será true ou "Fala Anônimo!")
 * node entradaESaida.js -b  (O resultado será false)
 * node entradaESaida.js - Digitar o nome (O resultado será true ou "Fala nome!") */