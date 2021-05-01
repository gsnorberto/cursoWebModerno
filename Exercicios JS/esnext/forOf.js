/** For Of percorre os elementos por valores e não por índices que nem o caso do for in. Se você tiver uma string ele percorrerá cada letra, se for um array ele percorrerá cada elemento do array, e assim por diante... */
for(let letra of "Cod3r"){
    console.log(letra) // Vai imprimir separado cada letra: C o d 3 r
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){
    console.log(i) // percorre os índices: 0  1  2
}

for (let assunto of assuntosEcma){
    console.log(assunto) // percorre os elementos: Map  Set  Promise
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordade: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto) // [ 'Map', { abordado: true } ]   [ 'Set', { abordado: true } ]   [ 'Promise', { abordade: false } ]
}

for(let chave of assuntosMap.keys()){
    console.log(chave)  // Pega apenas as chaves: Map  Set  Promise
}

for(let valor of assuntosMap.values()){
    console.log(valor) //Pega apenas os valores: { abordado: true }   { abordado: true }  { abordade: false }
}

for (let[ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)  //Pega a chave e o valor: Map { abordado: true }   Set { abordado: true }   Promise { abordade: false }
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra) // a   b   c
}