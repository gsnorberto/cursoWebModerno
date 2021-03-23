console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//Estrutura Literal - RECOMENDADO UTILIZAR ESSA

aprovados2 = ['Zenno','Bia', 'Marcos', 'Paulo']
console.log(aprovados2[1])

//Adicionar
aprovados2[2] = 'Micael'
aprovados2[3] = 'Luma'
aprovados2.push('Bianca')
console.log(aprovados2)

//Ordena posições dos elementos - Nesse caso, por ordem alfabética
aprovados2.sort()
console.log(aprovados2)

//Deletar
delete aprovados2[2]
console.log(aprovados2)

/** Função Splice - Adicionar e excluir itens */
aprovados2.splice(1,1,'Elemto1', 'Elemnto2') /** O primeiro número "1" é o índice, o
segundo número "1" é a quantidade de elementos que deseja excuir a partir daquele 
índice, e por último você pode colocar os elementos que deseja adicionar naquele índice*/
console.log(aprovados2)


//aprovados2[10] = 'Lucca'
//console.log(aprovados2)