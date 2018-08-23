const Avaliacao = require('./avaliacao')
const errorHandler = require('../common/errorHandler')

Avaliacao.methods(['get', 'post', 'put', 'delete'])
Avaliacao.updateOptions({ new: true, runValidators: true })
Avaliacao.before('post', checaAvaliacao).after('post', errorHandler).after('put', errorHandler)

function checaAvaliacao (req, res, next)  {
    const livroId = req.body.livro  
    const locadorId = req.body.locador  

    Avaliacao.findOne({
        $and: [
            {livro: livroId}, 
            {locador: locadorId}
        ]
        
    }, (erro, avaliacao) => {
        if (erro) {
            res.status(442).json({errors: [error]})
        } else if (avaliacao){
            res.status(442).json({errors: ["Você ja comentou esse livro"]})
        } else {
            next()
        }
    } )
}


module.exports = Avaliacao