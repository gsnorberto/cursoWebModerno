//Comparando uma função com e sem o uso de callback

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Extrair de dentro do Array apenas as notas menores que 7

// Sem CallBack
let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas) //Result: 6.5, 5.2, 3.6

//Usando CallBack
notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2) //Result: 6.5, 5.2, 3.6

const notasBaixas3 = notas.filter(nota => nota < 7) /** Se o resultado da
função utilizando a expressão filter for verdadeira ela adicionará o valor
do array (nesse caso, "notas") daquela posição verificada no outro array
criado, que nesse exemplo é o "notasBaixas3" */
console.log(notasBaixas3) //Result: 6.5, 5.2, 3.6
