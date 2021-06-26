import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0', //Primeiro valor exibido pelo display da calculadora
    clearDisplay: false, 
    operation: null, //armazena as operações de adição, subtração, etc
    values: [0, 0], //O índice 0 armazena o primeiro valor digitado na calculadora e o resultado das operações feitas. O índice 1 armazena o último valor digitado pelo usuário na calculadora que ainda não foi realizada a operação com o número do índice 0
    current: 0 // Deve ser sempre 0 ou 1. Diz se você está manipulando o valor de índice zero ou de índice 1 do array "values"
}

export default class Calculator extends Component{

    state = {...initialState}

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    
    //Limpar todo conteúdo do display
    clearMemory(){
        this.setState({...initialState})
    }

    //setar o tipo de operação clicada pelo usuário. Soma, divisão, etc...
    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true})
        } else {
            const equals = operation === '=' //Quando o usuário clica em "="(igual)
            const currentOperation = this.state.operation

            const values = [...this.state.values] //gerar clone de values

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`) //realização do cálculo. Sempre que uma operação for executada, o resultado ficará no ínidice 0 e o índice 1 será zerado  
            } catch (error) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0], 
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals, //Se a operação for diferente de "equals" ele vai limpar o display
                values
            })
        }
    }

    //Números e ponto
    addDigit(n){
        //Regra para não permitir que o usuário adicione o ponto mais de uma vez em um cálculo
        if( n === '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false})

        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue) //converte a string (valor mostrado no display) em int
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
    }
    
    render(){
        // A referência à classes é através do "className" em vez do "class", como é no html. Lembrando que isso não é html, é um código jsx que vai ser transpilado/convertido para código JS puro
        return(
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}