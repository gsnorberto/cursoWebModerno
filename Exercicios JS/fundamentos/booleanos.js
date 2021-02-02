let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // 1 = True, 0 = false

// "!" = negação, "!!" = afirmação
console.log(!!isAtivo)
console.log(!isAtivo)

// Situações em que o JS resolve para valores verdadeiros
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Situações em que o JS resolve para valores falsos
console.log('os falsos...')
console.log(!!'')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// Expressão lógica utilizando o "ou"
console.log('para finalizar...')
// se encontrar um único valor verdadeiro, ele vai retornar "true"
console.log(!!('' || null || 0 || 'texto')) // 'texto' = true, então o resultado será true
// Tirando o "!!" ele irá retornar o primeiro valor verdadeiro que encontrar
console.log(('' || null || 0 || 'texto'))

let nome = ''
// nessa expressão, caso o nome seja "false" ele retornará o primeiro true que encontrar
console.log(nome || 'Desconhecido')
