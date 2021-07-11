/* eslint-disable import/no-anonymous-default-export */
import './Main.css'
import React from 'react'
import Header from './Header'

// Foi utilizado o React.Fragment pois não é possível retornar dois elementos (o Header e o main) jsx em uma div. o React.Fragment não vai gerar um elemento html na hora de renderizar uma pagina, então os dois elementos (Header e main) estarão disponíveis sem ter um elemento que envolvam eles dois. Isso vai garantir que o layout funcione corretamente
export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>