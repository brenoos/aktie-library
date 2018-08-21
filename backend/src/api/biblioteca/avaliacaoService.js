const Avaliacao = require('./avaliacao')
const errorHandler = require('../common/errorHandler')

Avaliacao.methods(['get', 'post', 'put', 'delete'])
Avaliacao.updateOptions({ new: true, runValidators: true })
Avaliacao.before('post', checaAvaliacao).after('post', errorHandler).after('put', errorHandler)

function checaAvaliacao (req, res, next)  {
    const livroId = req.body.livro  //'5b7c9c84ac42974d64551e31' 
    const locadorId = req.body.locador  //'5b7c8dbd812d1b2d944104bc' 

    Avaliacao.findOne({
        $and: [
            {livro: livroId}, 
            {locador: locadorId}
        ]
        
    }, (erro, avaliacao) => {
        if (erro) {
            res.status(500).json({errors: [error]})
        } else if (avaliacao){
            res.json({comentou: 'Você já Comentou esse livro'})
        } else {
            next()
        }
    } )
}

module.exports = Avaliacao