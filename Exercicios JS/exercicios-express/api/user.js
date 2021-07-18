function save(req, res){
    res.send('Usuario > Salvar')
}

function obtain(req, res){
    res.send('Usuario > Obter')
}

module.exports = { save, obtain }