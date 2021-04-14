// Cadeia de protótipos (prototype chain)
const avo = {attr1: 'A'} //Avô tem como protótipo o Object.prototype
const pai = {__proto__: avo, attr2: 'B'} // Pai tem como protótipo o avô
const filho = {__proto__: pai, attr3: 'C'} // Filho tem como protótipo o pai

console.log(filho.attr1) //vai encontrar attr1 normalmente 
console.log(filho.attr0) //undefined


/** EXEMPLO 2 ----------------------------------------------- */

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual+=delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) /** Ferrari vai ter como
protótipo o carro */
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())