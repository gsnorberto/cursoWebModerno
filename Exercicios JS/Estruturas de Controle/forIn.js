const notas = [4.5, 6.7, 8.9, 7.8, 8.9]

for (let i in notas){ // percorre pelos indices do array (0, 1, 2...) e não pelos valores
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Paula',
    idade: 14,
    peso: 60
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}` )
}