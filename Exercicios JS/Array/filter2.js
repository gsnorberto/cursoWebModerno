/** Criando a própria função filter */

Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'iPad', preco: 4199, fragil: true},
    {nome:'Copo de vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 2000
const fragil = produto => produto.fragil // Ele já retorna implicitamente se o valor for true
const result = produtos.filter2(caro).filter2(fragil)

console.log(result)