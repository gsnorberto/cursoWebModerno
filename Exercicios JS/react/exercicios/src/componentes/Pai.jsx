/* eslint-disable import/no-anonymous-default-export */
//Vai usar vários componentes do tipo componente filho
import React from 'react'
// import Filho from './Filho'

function childrenWithProps(props) {
    // Mapeia todos os filhos contidos dentro da tag "Pai" no "index.js"
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>

        <h2>Filhos</h2>
        <ul>
            {/* {props.children} */}

            {childrenWithProps(props)}

            {/* <Filho nome="Pedro" sobrenome={props.sobrenome}/> */}
            {/* As propriedades que vieram do pai também vão para Tag Filho*/}
            {/* <Filho {...props}/>
            <Filho {...props} nome="Carla" /> */}
        </ul>
    </div>