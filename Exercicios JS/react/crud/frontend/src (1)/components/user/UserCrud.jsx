import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

// Objeto com propriedades do cabeçalho
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

// Estado inicial: Quando o usuário clica em "Cancelar"
const baseUrl = 'http://localhost:3001/users' //Link do BackEnd
const initialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCrud extends Component{

    state = {...initialState} //Estado Inicial

    //Essa função será chamada quando o componente for ser exibido na tela
    componentWillMount(){
        //traz todos os usuários do data base .json e insere em list (lista de usuários)
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    //Limpar o formulário quando o formulário estiver preenchido e o usuário clicar no botão "Cancelar". O clear não limpa a lista (list) obtida apenas o usuário (user)
    clear(){
        this.setState({user: initialState.user})
    }

    //Incluir (post) novo usuário ou alterar (put) usuário existente
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post' //Se o usuário já tiver ID será uma alteração(put) se não tiver será um cadastro novo (post)
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        //O axios salva os dados do usuário no backend (db.json) e manda um retorno com esses dados (resp.data) que são salvos em uma lista local (list) para que possam ser impressos na renderização da tabela do frontend
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({user: initialState.user, list}) //Depois que salva/inclui um usuário limpa os dados e atualiza a lista com os dados do usuário cadastrados/alterados
            })
    }

    //Alterar dados do usuário. Primeiro clona o usuário, faz as alterações em cima do clone e depois altera o estado através do setState
    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value //atribui ao atributo (name ou email) do usuário o valor que está dentro do campo de input
        this.setState({user}) // user = user
    }

    //jsx que vai renderizar o formulário
    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    {/* Se for dispositivo celular vai ocupar as 12 colunas. Se for dispositivo médio, grande ou extragrande  vai ocupar 6 colunas*/}
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>

                            {/*name é o nome do atributo de user */}
                            <input type="text" className="form-control" name="name" 
                            value={this.state.user.name} 
                            onChange={e=>this.updateField(e)}
                            placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={e=> this.updateField(e)} placeholder="Digite o email..."/>
                        </div>
                    </div>
                </div>

                {/* BOTÕES */}
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e=>{this.save(e)}}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>

            </div>
        )
    }

    getUpdateList(user, add = true){
        //Filtra a lista a partir dos usuários que tem um id diferente do id que foi passado. Em outras palavras, está removendo o usuário atual "user" da lista e readicionando ele na primeira posição
        const list = this.state.list.filter( u => u.id !== user.id) //remove o usuário atual passado por parâmetro
        if (add) list.unshift(user) // inclui esse usuário passado por parâmetro na ponta da lista. O usuário só é adicionado à lista se o add for true
        return list
    }

    //Carrega o usuário quando for alterar
    load(user){
        this.setState({user})
    }

    //EXCLUIR USUÁRIO
    //Se chamar a função then significa que o usuário foi excluido corretamente
    //Remove também o usuário da lista local "list"
    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdateList(user, false) //remove usuário da lista local depois de removido no servidor com o axios.delete
            this.setState({list})
        })
    }

    //Renderizar a tabela
    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user => {
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        {/* Botão Editar */}
                        <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        {/* Botão Excluir */}
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return(
           <Main {...headerProps}>
               {this.renderForm()}
               {this.renderTable()}
           </Main>
        )
    }
}