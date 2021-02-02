/*quando se usa "var" a mesma variável pode ser declarada mais de
uma vez. Isso pode ocasionar muitos problemas, visto a sobreposição
de valores.*/
var a = 3
let b = 4 // forma mais modernas de criar variáveis. Evite o "var"

console.log(a,b)

// Em uma constante o valor não pode ser alterado
const c=5

console.log(c)