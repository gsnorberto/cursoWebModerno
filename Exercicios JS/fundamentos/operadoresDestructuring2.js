// Destructuring usando objeto
console.log('\nDestructuring usando Objeto:')
function rand({min = 0, max = 1000}){ // min e max são atributos desestruturados de um objeto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // floor = arredondar valor para baixo
}

console.log(rand({ max: 50, min: 40})) // Randômicos entre 40 e 50
console.log(rand({min: 955})) // O mínimo será 955 e o máximo o que foi definido na função rand que é 1000
console.log(rand({})) // Varia conforme o mínimo e máximo definido na função rand

const obj = {max:50, min: 40}
console.log(rand(obj))

// Destructuring usando array
console.log('\nDestructuring usando Array:')
function rand2 ([min=0, max=1000]){ // min e max são atributos desestruturados de um array
    if (min>max) [min, max] = [max, min] //operador destructuring. Min recebe Max e Max recebe Min
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor) // floor = arredondar valor para baixo
}

console.log(rand2([50, 40])) // 50 = max, 40 = min por causa da operação de inversão de valores
console.log(rand2([992])) // 992 assume o valor mínimo
console.log(rand2([, 10])) // 10 assume o valor máximo
console.log(rand2([])) // min e max são os estabelecidos na função rand2