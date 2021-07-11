<template>
    <div class="calculator">
        <Display :value="displayValue"/>
        <Button label="AC" @onClick="clearMemory" triple/>
        <Button label="/" @onClick="setOperation" operation />
        <Button label="7" @onClick="addDigit"/>
        <Button label="8" @onClick="addDigit" />
        <Button label="9" @onClick="addDigit" />
        <Button label="*" @onClick="setOperation" operation/>
        <Button label="4" @onClick="addDigit" />
        <Button label="5" @onClick="addDigit" />
        <Button label="6" @onClick="addDigit" />
        <Button label="-" @onClick="setOperation" operation/>
        <Button label="1" @onClick="addDigit" />
        <Button label="2" @onClick="addDigit" />
        <Button label="3" @onClick="addDigit" />
        <Button label="+" @onClick="setOperation" operation/>
        <Button label="0" @onClick="addDigit" double />
        <Button label="." @onClick="addDigit" />
        <Button label="=" @onClick="setOperation" operation/>
    </div>
</template>

<script>
    import Display from "../components/Display"
    import Button from "../components/Button"

    export default {
        data: function(){
            return{
                displayValue: "0", //valor que aparece no display da calc
                clearDisplay: false, //Diz se o display está limpo
                operation: null,
                values: [0, 0], //Índice 0 vai ter o valor total das operações realizadas, e o índice 1 terá o valor que ainda será realizada a operação
                current: 0 //altera entre 0 e 1 para corresponder ao índice do array acima
            }
        },
        components: {Button, Display},
        methods:{
            clearMemory(){ //Quando o usuário clica no botão "AC"
                Object.assign(this.$data, this.$options.data()) //Estado incial do objeto
            },
            setOperation(operation){ //Quando o usuário clica em alguma operação: adição, subtração, igualdade, etc... 

                //Quando o usuário está digitando o primeiro valor na calculadora
                if (this.current === 0){
                    this.operation = operation
                    this.current = 1
                    this.clearDisplay = true
                } else{
                    const equals = operation === "="
                    const currentOperation = this.operation

                    //"Try" para evitar qualquer erro que tenha no Eval
                    //Realiza a operação (soma, subtração, etc)
                    //atribui ao primeiro elemento do array o resultado da operação entre o primeiro e o segundo elemento do array e depois limpa o segundo elemento do array
                    try { 
                        this.values[0] = eval( 
                            `${this.values[0]} ${currentOperation} ${this.values[1]}`
                        )
                    } catch(e){
                        this.$emit('onError', e) //Pode ser criado um evento "onError" dentro de "App.vue" para tratar o problema de maneira mais específica
                    }

                    this.values[1] = 0
                    this.displayValue = this.values[0] // o resultado da operação é colocado no display
                    this.operation = equals ? null : operation
                    this.current = equals ? 0 : 1 //se o usuário entrar com alguma operação que não seja o "igual" o próximo número digitado será do segundo elemento do array
                    this.clearDisplay = !equals
                }
            },
            addDigit(n){ //Adiciona um número ou ponto
                //Verifica se o número atual que está sendo digitado já possui algum ponto ".", pois a calculadora permite ponto apenas uma vez entre os números
                if ( n === "." && this.displayValue.includes(".")){
                    return
                }

                //Verificar se o display está ou não Vazio
                const clearDisplay = this.displayValue === "0" || this. clearDisplay

                const currentValue = clearDisplay ? "" : this.displayValue
                const displayValue = currentValue + n //OBS: Aqui não é uma soma, é uma concatenação dos dígitos pois o current value é uma string e não um number. Ou seja, se o usuário digitar "2, 3, 4" o resultado é "234" e não "9"

                this.displayValue = displayValue //altera o valor do display
                this.clearDisplay = false

                //Alternativa para o if abaixo
                //this.value[this.current] = displayValue

                if(n !== "."){
                    const i = this.current
                    const newValue = parseFloat(displayValue) //converte para float o displayValue que é uma string com os números(digitados pelo cliente) concatenados
                    this.values[i] = newValue
                }
            }
        }
    }
</script>

<style>
    .calculator{
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>