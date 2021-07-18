module.exports = (app, text) => {
    function save (req, res){
        res.send('Produto > salvar >' + text)
    }

    function obtain(req, res){
        res.send('Produto > obter > ' + text)
    }

    app.post('/produto', save)
    app.get('/produto', obtain)

    return { save, obtain }
}