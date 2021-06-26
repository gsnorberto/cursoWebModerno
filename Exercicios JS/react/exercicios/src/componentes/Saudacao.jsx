/* eslint-disable react/require-render-return */
import React, { Component } from 'react'

export default class Saudacao extends Component {
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    constructor(props) {
        super(props)
        this.setTipo = this.setTipo.bind(this)
    }

    //Quem "manda" na renderização é o estado do componente e não propriamente os elementos visuais da tela
    setTipo(e) {
        // let i = 1
        // setInterval(() => {
        //     this.setState({ tipo: ++i })
        // }, 1000)
        this.setState({ tipo: e.target.value }) //Função para alterar o estado
        // this.props.tipo = e.target.value
        // console.log(e.target.value) //target é o input
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        //const {tipo, nome} = this.props //O this.props (que são os parâmetros recebidos através da criação de uma nova instância da classe) só pode ser utilizado para leitura, ele não permite alterações. Para conseguir realizar alterações será necessário trabalhar com estados
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}