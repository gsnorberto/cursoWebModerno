import React from 'react'
import ReactDOM from 'react-dom'
import Filho from './componentes/Filho'

//EXEMPLO 1
//import BomDia from './componentes/BomDia'

//Sem utilizar o default para exportar no "Multiplos.jsx"
//import {BoaTarde,BoaNoite} from './componentes/Multiplos'

//EXEMPLO 2
//Usando o default para exportar no "Multiplos.jsx" 
//import Multi from './componentes/Multiplos'

//EXEMPLO 3
//import Saudacao from './componentes/Saudacao'

//EXEMPLO 4
import Pai from './componentes/Pai'

//Aqui não é um código JS puro. Na verdade, é uma extensão JSX que faz com que você programe de uma forma mais parecida com o HTML mas por baixo dos panos ele vai fazer chamadas JS para criar os elementos. Vai fazer uma conversão para JS Puro

//EXEMPLO 4
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Carla" />
            <Filho nome="Paulo" />
        </Pai>
    </div>
    , document.getElementById('root'))

//EXEMPLO 3
// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João"/>
//     </div>
// , document.getElementById('root'))

//EXEMPLO 2
// ReactDOM.render(
//     <div>
//         {/* Pode ser utilizado sem precisar do "Multi." basta apenas descomentar a linha 8 */}
//         <Multi.BoaTarde nome="Ana"/> 
//         <Multi.BoaNoite nome="Bia"/>
//     </div>
// , document.getElementById('root'))

//EXEMPLO 1
//ReactDOM.render(<BomDia nome="Guilherme" idade={10}/>, document.getElementById('root'))