/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    // Na barra de navegação "nav", se o usuário clicar em "usuários", por exemplo, o final da url irá mudar para "/users" então o Switch abaixo identificará essa url atual e importará o "UserCrud" 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' /> {/* Caso digite uma rota diferente das rotas acima, ele vai redirecionar para o "Home" */}
    </Switch>