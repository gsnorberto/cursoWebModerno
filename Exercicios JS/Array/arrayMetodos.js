const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adicionou
console.log(pilotos)

pilotos.shift()// Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona na primeira posição do array
console.log(pilotos)

pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) /** Adiciona ao array "algunsPilotos1"
os elementos do array "pilotos" a partir do índice 2 */
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) /** Pega os elementos do índice 1 até
o índice 4, sem incluir o índice 4  */
console.log(algunsPilotos2)

