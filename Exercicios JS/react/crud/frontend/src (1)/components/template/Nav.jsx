/* eslint-disable import/no-anonymous-default-export */
import './Nav.css'
import React from 'react'
//import NavItem from './NavItem'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa. Criar um NavItem.jsx para simplificar os links abaixo*/}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>