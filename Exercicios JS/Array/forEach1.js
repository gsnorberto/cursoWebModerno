const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice/**,array*/){ /** No ForEach sempre você
    recebe os três parâmentros, mas não é obrigado a utilizar os dois */
    console.log(`${indice+1}: ${nome}`)
})
console.log('\n')

// Utilizando apenas o nome sem o índice com Arrow Function
aprovados.forEach(nome => console.log(nome))
console.log('\n')

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)