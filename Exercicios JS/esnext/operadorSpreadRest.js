//Rest(juntar) - Spread(espalhar)
//Usar Rest como parâmetro de função - visto em "revisão2.js"

//Usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario} // O fato de mudar no objeto clone não vai gerar nenhum impacto no objeto funcionário
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12348.99 }

//Usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)