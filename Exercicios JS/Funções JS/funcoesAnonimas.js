//Criar função anônima = Função sem nome
//Função pode ser armazenada em uma variável, ou pode ser
//passada para ser executada em outra função
const soma = function (x, y){ // função que não tem nome.
    return x+y
}

const imprimirResultado = function (a, b, operacao = soma){ /**se
    operacao não tiver nenhum valor passado por parâmetro ele assume
    o valor de soma */
    console.log(operacao(a, b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y){
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) // outro exemplo de F.A

const pessoa = {
    falar(){ //Função anônima
        console.log('Opa')
    }
}

pessoa.falar()