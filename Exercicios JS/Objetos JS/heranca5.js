console.log(typeof String) //Function
console.log(typeof Array) //Function
console.log(typeof Object) //Function

String.prototype.reverse = function () {
    return this.split('').reverse().join('') /** O método split
    gera um array, o reverse faz a inversão dos valores no array
    e o join gera uma nova string. O resultado dessa função é uma
    nova string com valores invertidos*/
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0] //retorna o primeiro elemento do array
}

console.log([1, 2, 3, 4, 5].first()) // retorna primeiro elemento do array
console.log(['a','b','c'].first())