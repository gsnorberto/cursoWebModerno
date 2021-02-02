const valores = [7.7, 8.9, 9.2, 6.3]
console.log(valores[0], valores [3])
console.log(valores[4]) // posição não existente no array

valores[4] = 10 // insere o valor 10 no índice 4
valores[10] = 12 // insere o valor 12 no índice 10 - ficará com espaços vazios

console.log(valores)
console.log(valores.length) // diz a quantidade de elementos que o array possui

// O Array é heterogêneo, ou seja, ele aceita valores de diferentes tipos. Embora não seja uma boa prática
valores.push({id: 3}, false, null, 'teste') // função para adicionar novos elementos no array
console.log(valores)

// Formas de excuir elementos do Array
console.log(valores.pop()) // Imprime e Retira o último valor do array
console.log(valores)
delete valores [0] // Nesse caso está retirando o valor do índice zero do array
console.log(valores)
