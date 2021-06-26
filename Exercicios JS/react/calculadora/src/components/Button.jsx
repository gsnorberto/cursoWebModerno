/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Button.css'

// Criação de componente funcional, sem estado. Tente sempre que possível utilizar componentes sem estado, pois é melhor para sua aplicação. Componentes sem estados são componentes que recebem parâmetros de entrada e a partir desses parâmetros você renderiza o componente de forma muito mais fácil.

//Se a propriedade "operation" for passada para o botão, ele vai adicionar a classe "operation"
export default props =>
    <button onClick={e => props.click && props.click(props.label)} className={`
        button
        ${props.operation ? 'operation' : ''} 
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>{props.label}</button>