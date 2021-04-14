//Higher-order function

//Função de forma literal-----------------------------
function fun1(){

}

//Função em uma variável-------------------------------
const fun2 = function (){

}

//Função em um array-----------------------------------
console.log('Função em um Array:')
const array = [function (a,b) {return a+b}, fun1, fun2] //Fun1 e Fun2 sem utilização
console.log(array[0](2,3))

// Função em um objeto---------------------------------
console.log('Função em um Objeto:')
const obj = {}
obj.falar = function () {return 'Opaaa'}
console.log(obj.falar())

//Passar função como parâmeto--------------------------
function run (fun){
    fun()
}
run(function(){console.log('Executando...')})

//Uma função pode retornar/conter uma função-----------
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
//Possibilidade 1 para chamar a função acima
soma(2,3)(4)
//Possibilidade 2 para chamar a função acima
const cincoMais = soma (2,3)
cincoMais(4)