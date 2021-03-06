const meuObjeto = {
    a:1,
    b:2
}

const novoObjeto = Object.create(meuObjeto)
novoObjeto.b = 5
console.log(meuObjeto.b + novoObjeto.b)
