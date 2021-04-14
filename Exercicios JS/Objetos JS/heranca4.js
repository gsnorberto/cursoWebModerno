function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj1.__proto__) // true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
console.log(obj1.nome)
obj1.falar() //Bom dia! Meu nome é Anônimo!

obj2.nome = 'Rafael'
obj2.falar() //Bom dia! Meu nome é Rafael!

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3' 
obj3.falar() //Bom dia! Meu nome é obj3!

//Resumindo a loucura - Ver a imagem "heranca4.png"
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__ === Function.prototype) //true
console.log(Function.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__ === null) // true
console.log(MeuObjeto.prototype === obj1.__proto__) //true

console.log('\n')
obj22 = new Object
console.log(obj22.__proto__ === Object.prototype) //true
console.log(obj22.__proto__)

const array2 = [10, 9, 8]
console.log(array2.__proto__ === Array.prototype) //true
console.log(Array.prototype.__proto__ === Object.prototype) //true
console.log(typeof(array2))

function funcao (a,b){return a+b}
const fun1 = funcao(2,3)
console.log(fun1)

console.log(Function.prototype === Function.__proto__)
console.log(typeof(Function.prototype))