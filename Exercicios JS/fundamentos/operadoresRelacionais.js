// == Igual. === Estritamente igual (leva em consideração o valor e o tipo das variáveis)
console.log('01) ', '1' == 1) // verdadeiro. Porque está comparando apenas o valor
console.log('02) ', '1' === 1) // falso. Porque está comparando o valor e o tipo
console.log('03) ', '3' != 3) // falso. Porque está comparando apenas o valor
console.log('04) ', '3' !== 3) // verdadeiro. Porque um é tipo string e outro Number

console.log('05) ', 3 > 2)
console.log('06) ', 3 < 3)
console.log('07) ', 3 <= 2)
console.log('08) ', 3 >= 2)

const d1 = new Date(0) // o zero significa a data de referência do JS - 01/01/1970
const d2 = new Date(0)
console.log('09) ', d1 === d2) // false. Pois vai comparar referência de memória
console.log('10) ', d1 == d2) // false. Pois vai comparar referência de memória
console.log('11) ', d1.getTime() === d2.getTime()) // true

console.log('12) ', undefined == null) //true
console.log('13) ', undefined === null) //false
