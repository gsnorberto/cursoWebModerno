function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min //randon gera um valor entre 0 e 1
    return Math.floor(valor)
}

let opcao = 0

//-----------------ESTRUTURA WHILE---------------------------
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}

//-----------------ESTRUTURA DO WHILE-------------------------
do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)


console.log('Até a próxima')