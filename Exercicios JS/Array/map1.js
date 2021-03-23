/** Map tem como objetivo pegar um array, modificar seus elementos
 * e devolver esse array com os elementos modificados
 */

const nums = [1,2,3,4,5]

//For com propósito
let resultado = nums.map(function(e){
    return e*2 //retorna um array com valor dobrado dos elementos
})

console.log(resultado)

const soma10 = e => e+10 //Arrow tem retorno implícito
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` /** duas
casas decimais, e substituis o ponto por vírgula */

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)