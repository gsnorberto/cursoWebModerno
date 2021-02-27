function carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    // Método Público
    this.acelerar = function () { /* o this é responsável por
        tornar a função pública. Se quiser tornar privado basta
        apenas substituir o this pelo const ou let */
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Método Público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof carro) //function
console.log(typeof ferrari) //object