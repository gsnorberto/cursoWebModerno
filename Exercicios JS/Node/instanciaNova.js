// Uma factory retorna um novo objeto - Não tem cache
module.exports = () =>{
    return{
        valor: 1,
        inc(){
            this.valor++
        }
    }
}