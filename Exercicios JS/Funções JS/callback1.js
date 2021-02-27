/*CallBack é o ato de se passar uma função e essa função ser
chamada quando algum evento acontecer. Nesse exemplo o evento
é cada um dos elementos percorridos no array*/
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) /** Para cada elemento que for
encontrado dentro do Array "fabricantes" ele vai chamar a função 
"imprimir" passando o próprio elemento e o índice*/
fabricantes.forEach(function(fabricante, indice){
    console.log(fabricante, indice+1)
})