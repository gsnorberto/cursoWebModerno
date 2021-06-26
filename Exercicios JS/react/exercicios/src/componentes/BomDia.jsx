/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export

//OPÇÃO 1
// export default props =>
//     //A <div> será renderizada dentro do HTML. Caso não queira que isso aconteça utilize a opção 2
//     <div> 
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     <div>

//OPÇÃO 2
// export default props =>
//     //React.Fragment não vai ser renderizado dentro do HTML 
//     <React.Fragment> 
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>



//Outra possibilidade
export default props => [
    <h1 key='h1'>Bom dia, {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]
    