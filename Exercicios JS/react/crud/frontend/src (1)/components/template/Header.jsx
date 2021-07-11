/* eslint-disable import/no-anonymous-default-export */
import './Header.css'
import React from 'react'

export default props =>
    //d-none = dispositivos celulares não vão ter o header
    //s-sm-flex = para dispositivos pequenos, medios, grande e extra-grandes vai utilizar o display-flex
    //flex-column (por padrão é row) = deixar título "h1" em cimaHashRouter e subtítulo "p" embaixo.
    <header className="header d-none d-sm-flex flex-column"> 
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title} {/*tag de icone. "fa" = classe do font-awesome*/}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>